/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task06
*/

export function arrayFiltering(array, test) {
    const tab = [];

    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) == true)
            tab.push(i);
    }
}
