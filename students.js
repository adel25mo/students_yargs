const fs = require("fs");

const addStu = (id, name, subjest, grade, comment) => {
  const students = loadStu();
  const duplicateId = students.filter((stu) => {
    return stu.id === id;
  });
  if (duplicateId.length === 0) {
    students.push({
      id: id,
      name: name,
      subject: subjest,
      grade: grade,
      comment: comment,
    });
    saveStu(students);
    console.log("add sucessfully")
  } else {
    console.log("error duplicate id student")
  }
}
const removeStu = (id)=>{
    const students = loadStu();
    const stuToKeep = students.filter((stu)=>{
        return stu.id !== id
    })
    saveStu(stuToKeep)
    console.log('removed')
}

const readStu = (id)=>{
    const students = loadStu();
    const stu = students.find((stu)=>{
        return stu.id === id
    })
    if(stu){
        console.log(stu)
    }else{
        console.log('not found')
    }
}
const listStu = ()=>{
    const students = loadStu();
    students.forEach((stu) => {
        console.log(stu.name,stu.grade)
    });
}

const loadStu = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};
const saveStu = (students) => {
  const saveData = JSON.stringify(students);
  fs.writeFileSync("students.json",saveData);
};

module.exports = {
  addStu,
  removeStu,
  readStu,
  listStu
};
