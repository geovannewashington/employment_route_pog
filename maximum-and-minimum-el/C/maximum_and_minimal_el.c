// Find the mininum and maximum element in a array

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

#define ARR_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

bool find_min(int *arr, size_t arr_size, int *result)
{
    if (arr == NULL || arr_size == 0) {
        fprintf(stderr, "Invalid array\n");
        return false;
    }
    int min = INT_MAX;
    for (size_t i = 0; i < arr_size; i++) {
        if (arr[i] < min) 
            min = arr[i];
    }
    *result = min;
    return true;
}

bool find_max(int *arr, size_t arr_size, int *result)
{
    if (arr == NULL || arr_size == 0) {
        fprintf(stderr, "Invalid array\n");
        return false;
    }
    int max = INT_MIN;
    for (size_t i = 0; i < arr_size; i++) {
        if (arr[i] > max) 
            max = arr[i];
    }
    *result = max;
    return true;
}
int main(void)
{
    // Array for testing: 
    int arr[] = { 10, 20, -5, -10, 50 };
    size_t arr_size = ARR_SIZE(arr);
    int result;

    if (find_min(arr, arr_size, &result)) 
        printf("Mininum value: %d\n", result);
    
    if (find_max(arr, arr_size, &result)) 
        printf("Maximum value: %d\n", result);
    return EXIT_SUCCESS;
}
