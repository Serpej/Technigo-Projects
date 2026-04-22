import express from "express"

const app = express();

app.get('/', (req, res) =>
  res.send("Hello World!")
);

app.get("/users", (req, res) => {
  res.json([
  {name: "Jesper"},
  {name: "Gabirel"},
  {name: "Matilda"},
  {name: "Max"},
  ])
})


app.listen(3000, () => console.log("App listening on port 3000 Yay!"));

