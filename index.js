// Class representing a Student
class Student {
    constructor(id, name, grades = []) {
      this.id = id;
      this.name = name;
      this.grades = grades;
    }
  
    // Method to calculate average grade
    calculateAverage() {
      if (this.grades.length === 0) return 0;
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return (total / this.grades.length).toFixed(2);
    }
  
    // Method to display student details
    getDetails() {
      return `ID: ${this.id}, NAME: ${this.name}, GRADES: [${this.grades.join(", ")}], AVERAGE: ${this.calculateAverage()}`;
    }
  }
  
  // Class representing the Student Management System
  class StudentManagementSystem {
    constructor() {
      this.students = [];
    }
  
    // Method to add a new student
    addStudent(id, name, grades = []) {
      const student = new Student(id, name, grades);
      this.students.push(student);
      console.log(`Student ${name} added successfully.`);
    }
  
    // Method to view student details by ID
    viewStudentDetails(id) {
      const student = this.students.find(student => student.id === id);
      if (student) {
        console.log(student.getDetails());
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    // Method to calculate the average grade of a student by ID
    calculateStudentAverage(id) {
      const student = this.students.find(student => student.id === id);
      if (student) {
        console.log(
          `The average grade for ${student.name} (ID: ${id}) is ${student.calculateAverage()}`
        );
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  }
  
  // Example Usage:
  const sms = new StudentManagementSystem();
  
  // Adding students
  sms.addStudent(1, "Johnson", [85, 90, 78]);
  sms.addStudent(2, "Tappi", [92, 88, 84]);
  
  // Viewing student details
  sms.viewStudentDetails(1);
  sms.viewStudentDetails(2);
  
  // Calculating the average grade for a student
  sms.calculateStudentAverage(1);
  sms.calculateStudentAverage(3); // Non-existing student just to test, but if you put 2, it will calculate the average grade.

  