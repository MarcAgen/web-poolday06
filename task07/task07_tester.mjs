/*
** EPITECH PROJECT, 2026
** day06
** File description:
** task07_tester
*/

import { objectsDeeplyEqual } from "./task07.mjs";

const obj = {here: {is: "an"}, object: 2};
console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));
