/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task05
*/

export function range(start, end, step) {
    const tab = [];

    if (step == undefined)
        step = (start < end) ? 1 : -1;
    for (let i = start; i < end + 1; i += step)
        tab.push(i);
    return tab;
}
