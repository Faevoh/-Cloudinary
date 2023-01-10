const express = require("express");

const Route = require("./Router/imageRouter");

const fileUpload = require("express-fileupload");

const PORT = 2004;

const app = express();

app.use(fileUpload({
    useTempFiles: true
}))

app.use(express.json());

app.use("/api", Route)

app.listen(PORT, ()=>{
    console.log("Conected to port")
});