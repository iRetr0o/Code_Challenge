class StudentService {
    static getStudents(students) {
        return students;
    }
    static getStudentsEmailByCertification(students) {
        const studentCertification = StudentService.getStudents(students).filter((student) => student.haveCertification == true);
        const studentsEmails = studentCertification.map((student) => student.email);
        return studentsEmails;
    }
    static filterByCredits(students) {
        const studentCredits = StudentService.getStudents(students).filter((student) => student.credits > 500);
        return studentCredits;
    }
}

module.exports = StudentService;