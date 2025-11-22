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
      const img = document.createElement("img");
      const imageUri = card.image_uris;

      //Safecuard against undefined.
      if (!imageUri) return;

      img.src = `${imageUri.small}`;
      
      img.addEventListener( "mouseover", () => {
        const bigImage = document.createElement("img");
        bigImage.src = `${imageUri.normal}`;
        img.classList.add("cardImg");
        resultDiv.appendChild(bigImage);
      });

      resultDiv.appendChild(img);
      
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






