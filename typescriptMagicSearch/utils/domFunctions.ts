export function getElement<T extends HTMLElement>(id: string) {
const element = document.getElementById(id);
return element as T;
};

export function getInputElement(id: string) {
  const inputElement = getElement(id);
  return inputElement as HTMLInputElement;
}