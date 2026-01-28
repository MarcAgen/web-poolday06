/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task03
*/

export function countGs(str) {

    a = 0;

    for (i in str) {
        if (i == 'G')
            a++;
    }
    return a;
}
