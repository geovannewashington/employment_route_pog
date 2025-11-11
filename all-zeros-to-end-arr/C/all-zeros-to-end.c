// Task: move all zeros to the end of the array

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ARR_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

// --
// 1. Function prototypes
// --
bool move_all_zeros(int *arr, size_t arr_size)
{
    if (arr == NULL || arr_size < 2) {
        fprintf(stderr, "error: invalid array\n");
        return false;
    }
    
    size_t pos = 0;
    for (size_t i = 0; i < arr_size; i++) {
        if (arr[i] != 0) arr[pos++] = arr[i];
    }

    while (pos < arr_size) arr[pos++] = 0;
    return true;
}

void print_arr(int *arr, size_t arr_size)
{
    for (size_t i = 0; i < arr_size; i++) 
        printf("%d ", arr[i]);
    printf("\n");
}

int main(void)
{
    // Array for testing 
    int arr[] = {0, 12, 5, -5, 1, 0, 10, 0, 5};
    
    if (move_all_zeros(arr, ARR_SIZE(arr))) 
        print_arr(arr, ARR_SIZE(arr));
    return EXIT_SUCCESS;
}
