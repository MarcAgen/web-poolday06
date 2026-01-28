/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task04
*/

export function fizzBuzz(num) {
    var str = "";

    for (let i = 1; i < num + 1; i++) {
        if (i % 3 == 0)
            str += "Fizz";
        if (i % 5 == 0)
            str+="Buzz";
        if (i % 3 != 0 && i % 5)
            str+=i;
        if (i != num)
            str+=", ";
    }
    console.log(str);
}
