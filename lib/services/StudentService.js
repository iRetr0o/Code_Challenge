class StudentService {
    static getStudents(students) {
        return students;
    }
    static getStudentsEmailByCertification(students) {
        const studentCertification = StudentService.getStudents(students).filter((student) => student.haveCertification == true);
        const studentsEmails = studentCertification.map((student) => student.email);
        return studentsEmails;
    }
}

module.exports = StudentService;