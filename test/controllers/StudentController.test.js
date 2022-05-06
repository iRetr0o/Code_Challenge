const StudentController = require("../../lib/controllers/StudentController");

describe("Prueba al StudentController", () => {
    test("Regresando un partner de la database", () => {
        const partner = StudentController.getPartners();
        expect(partner[43]).toMatchObject({
            "id": "6264d5d86119fd599c5a67e7",
            "name": "Tillman",
            "email": "Kerri@visualpartnership.xyz",
            "credits": 600,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 5,
            "haveCertification": false
        });
    });
    test("Regresando lista de emails de aquellos que tengan certificación", () => {
        const partnersEmails = StudentController.getPartnersEmailsCertification();
        expect(partnersEmails.length).toBe(29);
    });
});