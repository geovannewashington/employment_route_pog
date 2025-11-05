// Check if an array is sorted

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define ARR_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

bool is_sorted(int *arr, size_t arr_size)
{
    if (arr == NULL || arr_size == 0) {
        fprintf(stderr, "error: invalid array\n");
        exit(EXIT_FAILURE);
    }
    bool ascending = arr[0] < arr[arr_size - 1];

    for (size_t i = 0; i < arr_size - 1; i++) {
        if (ascending) {
            if (arr[i] > arr[i + 1]) return false;
        } else {
            if (arr[i] < arr[i + 1]) return false;
        }
    }
    return true;
}

int main(void)
{
    // Arrays for testing: 
    int unsorted_arr[] = {10, 20, -5, -10, 50};
    int sorted_arr[] = {10, 20, 30, 40, 50};
    int empty_arr[] = {};

    // if (is_sorted(empty_arr, ARR_SIZE(empty_arr))) {
    //     printf("Yes. Array is sorted.\n");
    // } else {
    //     printf("No. Array is not sorted.\n");
    // }
     
    if (is_sorted(unsorted_arr, ARR_SIZE(unsorted_arr))) {
        printf("Yes. Array is sorted.\n");
    } else {
        printf("No. Array is not sorted.\n");
    }
    
    if (is_sorted(sorted_arr, ARR_SIZE(sorted_arr))) {
        printf("Yes. Array is sorted.\n");
    } else {
        printf("No. Array is not sorted.\n");
    }
    return EXIT_SUCCESS;
}
