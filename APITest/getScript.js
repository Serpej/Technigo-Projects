const container = document.getElementById("container");
const ul = document.getElementById("ul");
const list = document.createDocumentFragment();
const url = "https://jsonplaceholder.typicode.com/users"

const fetchData =  async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    };
    const data = await response.json()
    let authors = data;

    authors.map((author) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      let email = document.createElement("span");

      name.textContent = `${author.name}`;
      email.textContent = `Email: ${author.email}`;
            
      li.appendChild(name);
      li.appendChild(email);
      list.appendChild(li);
    });
    ul.appendChild(list)
    container.appendChild(ul);

  } catch (error) {
    console.log(`error occured:`, error);
  }
}

fetchData();