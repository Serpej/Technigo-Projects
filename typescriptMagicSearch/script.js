import { getScryfallFetch } from "./api/scryfallApi.js";
import { getElement } from "./utils/domFunctions.js";
// DOM Elements
const resultDiv = getElement("result");
const searchButton = getElement("searchButton");
async function loadCards() {
    try {
        // Awaits the result as a promise(json)
        const result = await getScryfallFetch("black lotus");
        //Gets the data array
        const cards = result.data; //ScryfallCard[]
        cards.forEach(card => {
            const img = document.createElement("img");
            if (card.image_uris !== undefined) {
                img.src = `${card.image_uris.small}`;
                resultDiv.appendChild(img);
            }
        });
    }
    catch (error) {
        console.error(error);
        resultDiv.textContent = "Failed to Load cards.";
    }
}
;
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    loadCards();
});
//# sourceMappingURL=script.js.map