console.log("------------------")
console.log("DSA en javascript");
console.log("------------------")

const students = ["jordan", "erick", "john"];

const findStudents=(allStudetns, studentName) =>{
  for(let i = 0; i < students.length; i++){
    if(allStudetns[i]===studentName){
     console.log(`Found ${studentName}`);
     break;
    }
  }
}
findStudents(students,"juan")
findStudents(students,"erick")
