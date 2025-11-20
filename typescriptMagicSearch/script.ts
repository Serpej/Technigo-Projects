import {getScryfallFetch} from "./api/scryfallApi"
import type { ScryfallCard, ScryfallListResponse} from "./interfaces/interfaces";
import { getElement } from "./utils/domFunctions";

// DOM Elements
const resultDiv = getElement("result");

async function loadCards() {
  try{

    // Awaits the result as a promise(json)
    const result: ScryfallListResponse<ScryfallCard> = await getScryfallFetch("black lotus");

    //Gets the data array
    const cards =  result.data;
    cards.forEach(card => {
      const img = document.createElement("img");
      if(card.image_uris !== undefined) {
      img.src = `${card.image_uris.normal}`;
      resultDiv.appendChild(img);
      }
    });
  } catch(error) {
    console.error(error);
    resultDiv.textContent = "Failed to Load cards."
  }

}; 




