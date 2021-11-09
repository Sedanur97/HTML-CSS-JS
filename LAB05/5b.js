function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.print = function () {
        let arrSum = grades.reduce((a,b) => a + b);
        let average = arrSum /grades.length;
               
        console.log(this.name + " " + this.surname + " " + "grade average : "  + average);
    };
}
//check
var student1 = new Student("Sedanur" ,"Sevilmisdal" ,"19020",[86,97,100]);
student1.print();