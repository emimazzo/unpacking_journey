import { writable } from 'svelte/store';

export const response1 = writable('good challenge good neutral unsure positive'); // section 2
export const country = writable('Guatemala'); //section 3
export const age = writable('initial value');  // bar graph; section 4
export const gender = writable('initial value');  // pie chart; section 5
export const response2 = writable('love sad understanding aware inspiring complex'); // section 13


export const chosen_story = writable(0); // section 6

