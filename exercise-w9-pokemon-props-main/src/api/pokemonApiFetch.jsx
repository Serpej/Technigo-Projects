

async function getPokemons() {
  try {
    let response = await fetch("");
    let data = await response.json();
    return data;
  } catch {
    throw new Error("Error");
  }
}
getPokemons();