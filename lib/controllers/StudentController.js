const Reader = require("../utils/reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getPartners() {
        const visualPartners = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudents(visualPartners);
    }
    static getPartnersEmailsCertification() {
        const visualPartners = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsEmailByCertification(visualPartners);
    }
    static getPartnersByCredits() {
        const visualPartners = Reader.readJsonFile("visualpartners.json");
        return StudentService.filterByCredits(visualPartners);
    }
}

module.exports = StudentController;