const pstudent = {
    name: "",
    surname: "",
    id: "",
    courses: ["BYT", "ZPR", "GRK","TIN"],
  };
  function Student(name, surname, id) {
    let newstudent = Object.create(pstudent);
    this.name = name;
    this.surname = surname;
    this.id = id;
    return newstudent;
}



var student= Student("SEDA","SEVILMISDAL","s19020");
  
  console.log(student);
  console.log(student.courses);