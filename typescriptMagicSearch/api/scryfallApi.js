export async function getScryfallFetch(query) {
    const url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    let data = await response.json();
    if (!response.ok) {
        throw new Error(`Scryfall error ${response.status}`);
    }
    return data;
}
;
//# sourceMappingURL=scryfallApi.js.map