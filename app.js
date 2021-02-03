'use strict';
var studentForm=document.getElementById('studentForm');
var studentTable=document.getElementById('studentTable');

function randomNum() {
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
  }


  //// constructor

  function Student(name,course){
      this.name=name;
      this.course=course;
      this.grade;
      Student.prototype.allStudents.push(this);


  }
Student.prototype.allStudents=[];

Student.prototype.calculateGrades=function grade(){
    this.grade=randomNum();
}

Student.prototype.render=function(){
var tableRow=document.createElement('tr')
studentTable.appendChild(tableRow);
 
var firstColumn=document.createElement('td');
tableRow.appendChild(firstColumn);
firstColumn.textContent=this.name;

var secondColumn=document.createElement('td');
tableRow.appendChild(secondColumn);
secondColumn.textContent=this.grade;

var thirdColumn=document.createElement('td');
tableRow.appendChild(thirdColumn);
thirdColumn.textContent=this.course;

var forthColumn=document.createElement('td');
tableRow.appendChild(forthColumn);
if(this.grade>=50){
    forthColumn.textContent='pass'
}else{
    forthColumn.textContent='fail'
}

}


var tableHeader=document.createElement('tr');
studentTable.appendChild(tableHeader);

var tableCoulum=document.createElement('td');
tableHeader.appendChild(tableCoulum);
tableCoulum.textContent='Student Name'

var tableSecColumn=document.createElement('td');
tableHeader.appendChild(tableSecColumn);
tableSecColumn.textContent='Student Grade'

var tableThirdColumn=document.createElement('td');
tableHeader.appendChild(tableThirdColumn);
tableThirdColumn.textContent='Course'

var tableForthColumn=document.createElement('td');
tableHeader.appendChild(tableForthColumn);
tableForthColumn.textContent='Course Pass'









///// event listener
studentForm.addEventListener('submit',submitter)

function submitter(event){
    event.preventDefault();
 
 var stuName=event.target.name.value;
 var stuCourse=event.target.course.value;

var newStudent=new Student(stuName,stuCourse);
 newStudent.calculateGrades();
 newStudent.render();

 localStorage.setItem('student',JSON.stringify(Student.prototype.allStudents));
}

var localData=JSON.parse(localStorage.getItem('student'))
if (localData!==null){
 for(var i=0;i<=localData.length;i++){
 var prevStudent=new Student(localData[i].name,localData[i].course);
 prevStudent.calculateGrades();
 prevStudent.render();
 }
}

