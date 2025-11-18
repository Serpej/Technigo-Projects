/* 
* Helper function to safely get DOM elements 
*/
export function getElement<T extends HTMLElement>(id: string):T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id '${id}' not found.`);
  };
  return element;
}

export function getButtonElement(id: string): HTMLButtonElement {
  return getElement<HTMLButtonElement>(id);
}

export function getDivElement(id: string): HTMLDivElement {
  return getElement<HTMLDivElement>(id);
}

export function getInputElement(id: string): HTMLInputElement {
  return getElement<HTMLInputElement>(id);
}