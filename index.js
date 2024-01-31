import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try{const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    const result = response.data;
    res.render("index.ejs", {joke: result.joke});
    }catch(error){
        res.status(404).send(error.message);
    }
});


app.listen(port, () => {
    console.log("App is running on port " + port);
});