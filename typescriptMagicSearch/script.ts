import {getScryfallFetch} from "./api/scryfallApi.js"
import type {ScryfallListResponse, SearchOptions} from "./interfaces/interfaces.ts";
import {getElement, getInputElement, getSelectElement} from "./utils/domFunctions.js";

// DOM Elements
const resultDiv = getElement("result");
const searchButton = getElement("searchButton");
const searchNameInput = getInputElement("cardNameSearchInput");
const oracleTextInput  = getInputElement("oracleTextInput");
const cardTypeSelect = getSelectElement("cardTypeSelect");

async function loadCards() {
  try{

    let searchOptions: SearchOptions = {};

    if (searchOptions.name) {
      searchOptions.name = searchNameInput.value;
    }
    if (searchOptions.oracle_text) {
      searchOptions.oracle_text = oracleTextInput.value;
    }
    if (searchOptions.type_line) {
      searchOptions.name = cardTypeSelect.value;
    }

    // Clear the result Div
    resultDiv.innerHTML = "";

    // Awaits the result as a promise(json)
    const result: ScryfallListResponse = await getScryfallFetch(searchOptions);

    //Gets the data array
    const cards =  result.data; //ScryfallCard[]
    cards.forEach(card => {
      const img = document.createElement("img");
      if(card.image_uris !== undefined) {
      img.src = `${card.image_uris.small}`;
      resultDiv.appendChild(img);
      }
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





