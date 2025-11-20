export function getElement<T extends HTMLElement>(id: string) {
const element = document.getElementById(id);
return element as T;
};