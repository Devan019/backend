const express = require("express");
const app = express();
const cors = require("cors");
const Book = require("./init")
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/home", async(req, res) => {
  let allData = await Book.find();
  console.log(allData);
  res.json(allData)
});
app.get("/",(req,res)=>{
    res.redirect("/home");
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});