const StudentService = require("../../lib/services/StudentService");

describe("Prueba al StudentService", () => {
    test("Regresando estudiantes", () => {
        const students = StudentService.getStudents([
            {name: "Partner1", haveCertification: true, email: "1@gmail.com"},
            {name: "Partnert2", haveCertification: false, email: "2@gmail.com"}
        ]);
        expect(students.length).toEqual(2);
    });
    test("Lista con emails de partners que tienen certificación", () => {
        const students = StudentService.getStudents([
            {name: "Partner1", haveCertification: true, email: "1@gmail.com"},
            {name: "Partnert2", haveCertification: false, email: "2@gmail.com"},
            {name: "Partner3", haveCertification: true, email: "3@gmail.com"},
            {name: "Partnert4", haveCertification: false, email: "4@gmail.com"}
        ]);
        const certificationList = StudentService.getStudentsEmailByCertification(students);
        expect(certificationList.length).toBe(2);
    });
});