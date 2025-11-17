const url = "https://jsonplaceholder.typicode.com/users";

let data = {
  name: "Jesper"
};

let fetchData = {
  method: "POST",
  body: JSON.stringify(data),
  headers: new Headers({
    "Content-Type": "application/json; charset=UTF-8"
  })
} 

const asyncFetch = async () => {
  try {
    const response = await fetch(url, fetchData);

    const result = await response.json();
    console.log("Success", result);
    return result

  } catch (error) {
    
  }
}

asyncFetch();