// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ 
    sectionNum: 1, 
    roomNum: 'STC 353', 
    enrolled: 26, 
    days: 'TTh', 
    instructor: 'Bro T'
  },
  { 
    sectionNum: 2, 
    roomNum: 'STC 347', 
    enrolled: 28, 
    days: 'TTh', 
    instructor: 'Sis A'
  }],
  changeEnrollement(sectionNum, add = true) {
    let index = this.sections.findIndex(section => section.sectionNum == sectionNum );
    if (index != -1) {
      if (add) {
        this.sections[index].enrolled += 1;
      }
      else {
        this.sections[index].enrolled -= 1;
      }
    }
    renderSections(this.sections);
  }
};

function courseInfo(course) {
  document.querySelector("#courseName").innerText = course.name;
  document.querySelector("#courseCode").innerText = course.code;
};

function renderSections(sections) {
  const sectionsHtml = sections.map( section =>
    `<tr>
    <td>${section["sectionNum"]}</td>
    <td>${section["roomNum"]}</td>
    <td>${section["enrolled"]}</td>
    <td>${section["days"]}</td>
    <td>${section["instructor"]}</td>
    </tr>`);
    document.querySelector("#sections").innerHTML = sectionsHtml.join("");
};

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollement(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollement(sectionNum, add=false);
});

renderSections(aCourse.sections);
courseInfo(aCourse);


  
  

  
