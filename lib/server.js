const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partners API welcome!"});
});

app.get("/v1/students", (request, response) => {
    const partners = StudentController.getPartners();
    response.json({Quantity: partners.length, Students: partners});
});

app.get("/v1/students/emails", (request, response) => {
    const partnersEmails = StudentController.getPartnersEmailsCertification();
    response.json({Emails: partnersEmails});
});

app.get("/v1/students/credits", (request, response) => {
    const partnersCredits = StudentController.getPartnersByCredits();
    response.json({Credits: "Mas de 500", Students: partnersCredits});
});

app.listen(port, () => {
    console.log(`Visual Partners API in localhost ${port}`);
});