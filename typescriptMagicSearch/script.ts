import {getScryfallFetch} from "./api/scryfallApi.js"
import type {ScryfallListResponse, SearchOptions, ImageObject} from "./interfaces/interfaces.ts";
import {getElement, getInputElement, getSelectElement} from "./utils/domFunctions.js";

// DOM Elements
const resultDiv = getElement("result");
const searchButton = getElement("searchButton");
const searchNameInput = getInputElement("cardNameSearchInput");
const oracleTextInput  = getInputElement("oracleTextInput");
const cardTypeSelect = getSelectElement("cardTypeSelect");
const manaValueSelect = getSelectElement("manaValueSelect");
const manaValueInput = getInputElement("manaValueInput");

async function loadCards() {
  try {

    const searchOptions: SearchOptions = {
      name: searchNameInput.value,
      oracle_text: oracleTextInput.value,
      type_line: cardTypeSelect.value,
      cmc_criteria: manaValueSelect.value,
      cmc: manaValueInput.value,
    };

    // Clear the result Div
    resultDiv.innerHTML = "";

    // Awaits the result as a promise(json)
    const result: ScryfallListResponse = await getScryfallFetch(searchOptions);

    //Gets the data array
    const cards =  result.data; //ScryfallCard[]
    cards.forEach(card => {
      const imgSpan = document.createElement("span");
      imgSpan.classList.add("imgSpan");
      const img = document.createElement("img");
      const bigImage = document.createElement("img");
      bigImage.classList.add("bigCardImg");
      const imageUri = card.image_uris;

      //Safecuard against undefined.
      if (!imageUri) return;

      img.src = `${imageUri.small}`;
      bigImage.src = `${imageUri.normal}`;
      
      img.addEventListener( "mouseenter", () => {
        bigImage.style.visibility = "visible";
      });
      img.addEventListener( "mouseleave", () => {
        bigImage.style.visibility = "hidden";
      });

      imgSpan.appendChild(bigImage);
      imgSpan.appendChild(img);
      resultDiv.appendChild(imgSpan);
      
    });
  } catch(error) {
    console.error(error);
    resultDiv.textContent = "Failed to Load cards."
  }
}; 

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  loadCards();
});






