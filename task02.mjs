/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task02
*/

export function arraysAreEqual(arr1, arr2) {
    if (arr1.length != arr2.lenght)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i])
            return false;
    }
    return true;
}
