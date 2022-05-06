const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partners API welcome!"});
});

app.get("/v1/partners", (request, response) => {
    const partners = StudentController.getPartners();
    response.json({Students: partners, Quantity: partners.length});
});

app.listen(port, () => {
    console.log(`Visual Partners API in localhost ${port}`);
});