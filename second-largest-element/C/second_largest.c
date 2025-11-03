#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

// --
// 1. Find the second largest element in an array.
// --
bool find_second_largest(int *arr, size_t arr_size, int *result)
{
    if (arr == NULL || arr_size < 2) {
        fprintf(stderr, "Invalid array\n");  
        return false;
    }
    
    int largest = INT_MIN;
    int second_largest = INT_MIN;

    for (size_t i = 0; i < arr_size; i++) {
        if (arr[i] > largest) {
            second_largest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > second_largest) {
            second_largest = arr[i];
        }
    }
    
    *result = second_largest;
    return true; // everything went well
}

int main() 
{
    int arr[] = {10, -5, 20, -22, 10}; // Second largest is 10
                                       // Second smallest is -5
    int result;
    size_t arr_size = sizeof(arr) / sizeof(arr[0]);
    
    if (!find_second_largest(arr, arr_size, &result)) {
        fprintf(stderr, "Something went wrong :(\n");
        return EXIT_FAILURE;
    } else {
        printf("Second largest is %d\n", result);
    }
    return EXIT_SUCCESS;
}
