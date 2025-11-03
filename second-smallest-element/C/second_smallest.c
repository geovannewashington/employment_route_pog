#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

// --
// 1. Find the second smallest element in an array.
// --
bool find_second_smallest(int *arr, size_t arr_size, int *result)
{
    if (arr == NULL || arr_size < 2) {
        fprintf(stderr, "invalid array.\n");
        return false;
    }

    int smallest = INT_MAX; 
    int second_smallest = INT_MAX; 

    for (size_t i = 0; i < arr_size; i++) {
        if (arr[i] < smallest) {
            second_smallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < second_smallest){
            second_smallest = arr[i];
        }
    }
    
    *result = second_smallest;
    return true; // everything went well...
}

int main() 
{
    int arr[] = {10, -5, 20, -22, 10}; // Second largest is 10
                                       // Second smallest is -5
    int result;
    size_t arr_size = sizeof(arr) / sizeof(arr[0]);
    
    if (!find_second_smallest(arr, arr_size, &result)) {
        fprintf(stderr, "something went wrong.\n");
        return EXIT_FAILURE;
    } else {
        printf("second smallest is %d\n", result);
    }

    return EXIT_SUCCESS;
}
