// Reverse an array in-place.

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ARR_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

bool reverse_arr(int *arr, size_t arr_size) 
{
    if (arr == NULL || arr_size == 0) {
        fprintf(stderr, "error: invalid array\n");
        return false;
    }
    
    int min_index = 0;
    int max_index = arr_size - 1;

    while (min_index < max_index) {
        int tmp = arr[min_index];
        arr[min_index] = arr[max_index];
        arr[max_index] = tmp;

        min_index++;
        max_index--;
    }
    return true;
}

void print_arr(int *arr, size_t arr_size) 
{
    for (size_t i = 0; i < arr_size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(void)
{
    // array for testing:
    int arr[] = {1, 2, 3, 4, 5};

    if (reverse_arr(arr, ARR_SIZE(arr))) {
        print_arr(arr, ARR_SIZE(arr));
    }
    return EXIT_SUCCESS;
}
