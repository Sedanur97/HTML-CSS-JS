function Student(id, grades) {
    this.name = "";
    this.surname = "";
    this.id = id;
    this.grades = grades;
}

Object.defineProperties(Student.prototype, {
    fullName: {
        get: function () {
            return this.name + " " + this.surname;
        },

        set: function (name) {
            let splitname = name.split(" ");
            this.name = splitname[0] || "";
            this.surname = splitname[1] || "";
        }
    }
    });

    Object.defineProperty(Student.prototype, 'AverageGrade', {
        get: function() { return this.grades.reduce((a,b) => a + b)/this.grades.length ; }
    });

//check
const d = new Student(19020, [5, 5, 5, 5]);
d.fullName = "Sedanur Sevilmisdal";
console.log("Name - " + d.fullName + "s19020", [5, 5, 5, 5]);
console.log(d.print);