// --
// Task: Is it palindrome?
// --

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

// Checks if a string is a palindrome (case-insensitive).
// Also sets *valid = false if input is invalid.
bool is_palindrome(const char *str, bool *valid) {
    if (!str || *str == '\0') {
        *valid = false;
        return false;
    }
    *valid = true;

    size_t i = 0;
    size_t j = strlen(str) - 1;

    while (i < j) {
        char a = tolower((unsigned char)str[i]);
        char b = tolower((unsigned char)str[j]);
        if (a != b) return false;
        i++;
        j--;
    }
    return true;
}

int main(int argc, char **argv) {
    const char *str = NULL;

    if (argc == 1) {
        str = "Abba"; // default value
        puts("[warning]: no CLA provided, using default word 'Abba'");
    } else {
        str = argv[1];
    }

    bool valid = false;
    bool result = is_palindrome(str, &valid);

    if (!valid) {
        fprintf(stderr, "Invalid input string.\n");
        return EXIT_FAILURE;
    }

    printf("[%s] is %s palindrome.\n", str, result ? "a" : "NOT a");
    return EXIT_SUCCESS;
}
