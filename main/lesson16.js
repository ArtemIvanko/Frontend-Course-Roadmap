class Student {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marks = [];
    this.attendance = new Array(25).fill(null);
    this.currentAttendanceIndex = 0;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageMark() {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  present() {
    if (this.currentAttendanceIndex < 25) {
      this.attendance[this.currentAttendanceIndex++] = true;
    }
  }

  absent() {
    if (this.currentAttendanceIndex < 25) {
      this.attendance[this.currentAttendanceIndex++] = false;
    }
  }

  summary() {
    const averageMark = this.getAverageMark();
    const attendanceCount = this.attendance.filter(a => a === true).length;
    const attendanceRate = attendanceCount / this.attendance.filter(a => a !== null).length;

    if (averageMark > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageMark > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Іванов", 2000);
student1.marks = [100, 95, 92, 88, 97];
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();

const student2 = new Student("Петро", "Петров", 1999);
student2.marks = [80, 75, 78, 85, 90];
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();

const student3 = new Student("Марія", "Маріївна", 2001);
student3.marks = [60, 65, 70, 58, 55];
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();

console.log(student1.summary());
console.log(student1.getAverageMark());
console.log(student1.getAge());

console.log(student2.summary());
console.log(student2.getAverageMark());
console.log(student2.getAge());

console.log(student3.summary());
console.log(student3.getAverageMark());
console.log(student3.getAge());
