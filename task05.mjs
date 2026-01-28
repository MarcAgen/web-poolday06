/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task05
*/

function rangeDown (start, end, step) {
    const tab = [];
    for (let i = start; i >= end; i -= step)
        tab.push(i);
    return tab;
}

function rangeUp (start, end, step) {
    const tab = [];
    for (let i = start; i >= end; i -= step)
        tab.push(i);
    return tab;
}

export function range(start, end, step) {

    if (step == undefined)
        step = (start < end) ? 1 : -1;
    if (step < 0 || start < end)
        return rangeDown(start, end, (step < 0) ? -step : step);
    else
        return rangeUp(start, end, (step < 0) ? -step : step);
}
