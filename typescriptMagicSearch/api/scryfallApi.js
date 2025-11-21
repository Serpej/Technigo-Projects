export async function getScryfallFetch(searchOptions) {
    //Array for all querys
    const queryParts = [];
    const url = new URL(`https://api.scryfall.com/cards/search?q=`);
    const response = await fetch(url);
    let result = await response.json();
    if (!response.ok) {
        throw new Error(`Scryfall error ${response.status}`);
    }
    return result;
}
;
//# sourceMappingURL=scryfallApi.js.map