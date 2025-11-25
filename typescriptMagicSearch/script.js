import { getScryfallFetch } from "./api/scryfallApi.js";
import { getElement, getInputElement, getSelectElement } from "./utils/domFunctions.js";
// DOM Elements
const resultDiv = getElement("result");
const searchButton = getElement("searchButton");
const searchNameInput = getInputElement("cardNameSearchInput");
const oracleTextInput = getInputElement("oracleTextInput");
const cardTypeSelect = getSelectElement("cardTypeSelect");
const manaValueSelect = getSelectElement("manaValueSelect");
const manaValueInput = getInputElement("manaValueInput");
async function loadCards() {
    try {
        const searchOptions = {
            name: searchNameInput.value,
            oracle_text: oracleTextInput.value,
            type_line: cardTypeSelect.value,
            cmc_criteria: manaValueSelect.value,
            cmc: manaValueInput.value,
        };
        // Clear the result Div
        resultDiv.innerHTML = "";
        // Awaits the result as a promise(json)
        const result = await getScryfallFetch(searchOptions);
        //Gets the data array
        const cards = result.data; //ScryfallCard[]
        cards.forEach(card => {
            const imgSpan = document.createElement("span");
            imgSpan.classList.add("imgSpan");
            const img = document.createElement("img");
            img.classList.add("cardImg");
            const bigImage = document.createElement("img");
            bigImage.classList.add("bigCardImg");
            const imageUri = card.image_uris;
            //Double faced cards
            let frontSideUriSmall = "";
            let frontSideUriNormal = "";
            let backSideUriSmall = "";
            let backSideUriNormal = "";
            const transformButtonDiv = document.createElement("div");
            transformButtonDiv.classList.add("transformButtonDiv");
            // Check for doublesided cards
            //Safecuard against undefined at top level.
            if (!imageUri) {
                if (card.card_faces?.length == 2 &&
                    card.card_faces[0]?.image_uris &&
                    card.card_faces[1]?.image_uris) {
                    frontSideUriSmall = card.card_faces[0].image_uris.small;
                    frontSideUriNormal = card.card_faces[0].image_uris.normal;
                    backSideUriSmall = card.card_faces[1].image_uris.small;
                    backSideUriNormal = card.card_faces[1].image_uris.normal;
                    img.src = `${frontSideUriSmall}`;
                    bigImage.src = `${frontSideUriNormal}`;
                }
                else {
                    console.error("No Image URI found for double faced card.");
                    return;
                }
            }
            else if (card.image_uris) {
                img.src = `${imageUri.small}`;
                bigImage.src = `${imageUri.normal}`;
            }
            img.addEventListener("mouseenter", () => {
                bigImage.style.visibility = "visible";
            });
            img.addEventListener("mouseleave", () => {
                bigImage.style.visibility = "hidden";
            });
            if (frontSideUriSmall !== "") {
                // Make each alternative into it's own object
                const frontImages = { small: frontSideUriSmall, normal: frontSideUriNormal };
                const backImages = { small: backSideUriSmall, normal: backSideUriNormal };
                // Set default to front image
                let currentImages = frontImages;
                transformButtonDiv.addEventListener("click", () => {
                    // Use Ternary operator to check which object is the current source.
                    currentImages = currentImages === frontImages ? backImages : frontImages;
                    img.src = currentImages.small;
                    bigImage.src = currentImages.normal;
                });
                imgSpan.appendChild(transformButtonDiv);
            }
            ;
            imgSpan.appendChild(bigImage);
            imgSpan.appendChild(img);
            resultDiv.appendChild(imgSpan);
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