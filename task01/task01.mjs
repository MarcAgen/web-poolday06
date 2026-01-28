/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task01
*/

export function drawTriangle(height) {
    const char = "$";

    if (height <= 0) {
        return 84;
    }
    for (let i = 1; i <= height; i++) {
        console.log(`${char.repeat(i)}`);
    }
}