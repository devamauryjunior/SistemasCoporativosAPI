const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  const dados = req.body;

  res.json(dados);
});


app.listen(port, () => {
  console.log("exe app inicial porta", port);
});
