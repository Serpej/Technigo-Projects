const container = document.getElementById("container");
const h1 = document.createElement("h1");

const fetchData = async () => {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json")
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`)
    };
    const json = await response.json()
    container.appendChild(h1);
    h1.textContent = `There are ${json.number} people in space right now!`;
    json.people.forEach(person => {
        container.innerHTML += `<p>Craft: ${person.craft}<br>Name: ${person.name}<p>`
    });
    } catch (error) {
      console.log("An error occured:", error);
    };
};

fetchData();