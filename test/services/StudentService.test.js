const StudentService = require("../../lib/services/StudentService");

describe("Prueba al StudentService", () => {
    test("Regresando estudiantes", () => {
        const students = StudentService.getStudents([
            {name: "Partner1", haveCertification: true, email: "1@gmail.com"},
            {name: "Partnert2", haveCertification: false, email: "2@gmail.com"}
        ]);
        expect(students.length).toEqual(2);
    });
});