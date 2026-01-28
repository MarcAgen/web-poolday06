/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task03
*/

export function countGs(str) {

    var a = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'G' || str[i] == 'g')
            a++;
    }
    return a;
}
