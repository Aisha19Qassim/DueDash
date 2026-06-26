function assignmentCard() {
    var title = document.getElementById("asstitle").value;
    var course = document.getElementById("asscourse").value;
    var date = document.getElementById("assdate").value;
    var priority = document.getElementById("assPriority").value;
    var description = document.getElementById("assDes").value;

    var assignmentCount = localStorage.getItem("assignmentCount");

    if (assignmentCount === null) {
        assignmentCount = 0;
    }

    assignmentCount++;
    localStorage.setItem("assignmentCount", assignmentCount);

    localStorage.setItem("assignmentTitle" + assignmentCount, title);
    localStorage.setItem("assignmentCourse" + assignmentCount, course);
    localStorage.setItem("assignmentDate" + assignmentCount, date);
    localStorage.setItem("assignmentPriority" + assignmentCount, priority);
    localStorage.setItem("assignmentDescription" + assignmentCount, description);
    window.location.href = "Home.html";
}

function projectCard() {
    var title = document.getElementById("projtitle").value;
    var course = document.getElementById("projcourse").value;
    var date = document.getElementById("projdate").value;
    var presentationDate=document.getElementById("presdate").value;
    var priority = document.getElementById("projPriority").value;
    var description = document.getElementById("projDes").value;

        var projectCount = localStorage.getItem("projectCount");

    if (projectCount === null) {
        projectCount = 0;
    }

    projectCount++;
    localStorage.setItem("projectCount", projectCount);

    localStorage.setItem("projectTitle" + projectCount, title);
    localStorage.setItem("projectCourse" + projectCount, course);
    localStorage.setItem("projectDate" + projectCount, date);
    localStorage.setItem("presentationDate" + projectCount, presentationDate);
    localStorage.setItem("projectPriority" + projectCount, priority);
    localStorage.setItem("projectDescription" + projectCount, description);
    window.location.href = "Home.html";
}


function examCard() {
    var type = document.getElementById("exam").value;
    var course = document.getElementById("course").value;
    var date = document.getElementById("date").value;
    var priority = document.getElementById("Priority").value;
    var percentage = document.getElementById("%").value;
     var examCount = localStorage.getItem("examCount");

    if (examCount === null) {
        examCount = 0;
    }

    examCount++;
    localStorage.setItem("examCount", examCount);

    localStorage.setItem("examType" + examCount, type);
    localStorage.setItem("examCourse" + examCount, course);
    localStorage.setItem("examDate" + examCount, date);
    localStorage.setItem("examPriority" + examCount, priority);
    localStorage.setItem("examPercentage" + examCount, percentage);

    window.location.href = "Home.html";
}

function showAssignmentCard() {
    var place = document.getElementById("assignmentNewCard");
    var count = localStorage.getItem("assignmentCount");

    if (place !== null && count !== null) {
        var cards = "";

        for (var i = 1; i <= count; i++) {

            var title = localStorage.getItem("assignmentTitle" + i);

            if (title !== null) {

                var course = localStorage.getItem("assignmentCourse" + i);
                var date = localStorage.getItem("assignmentDate" + i);
                var priority = localStorage.getItem("assignmentPriority" + i);
                var description = localStorage.getItem("assignmentDescription" + i);

                var priorityClass = "";

                if (priority.includes("Low"))
                    priorityClass = "Lowbtn";
                else if (priority.includes("Medium"))
                    priorityClass = "Mediumbtn";
                else if (priority.includes("High"))
                    priorityClass = "Hardbtn";

                cards += "<div class='paragraphs'>" +
                    "<p><b>" + title + "</b></p>" +
                    "<p>" + course + "</p>" +
                    "<p><img src='Icons/timer.png' width='18' height='18'> " + date + "</p>" +
                    "<p>" + description + "</p>" +
                    "<button class='" + priorityClass + "'>" + priority + "</button><br>" +
        "<button class='delete-btn' onclick='deleteAssignment(" + i + ")'>🗑 Delete</button>" +

                    "</div>";
            }
        }

        place.innerHTML = cards;
    }
}
function showProjectCard() {
    var place = document.getElementById("projectNewCard");
    var count = localStorage.getItem("projectCount");

    if (place !== null && count !== null) {

        var cards = "";

        for (var i = 1; i <= count; i++) {

            var title = localStorage.getItem("projectTitle" + i);

            if (title !== null) {

                var course = localStorage.getItem("projectCourse" + i);
                var date = localStorage.getItem("projectDate" + i);
                var presentationDate = localStorage.getItem("presentationDate" + i);
                var priority = localStorage.getItem("projectPriority" + i);
                var description = localStorage.getItem("projectDescription" + i);

                var priorityClass = "";

                if (priority.includes("Low"))
                    priorityClass = "Lowbtn";
                else if (priority.includes("Medium"))
                    priorityClass = "Mediumbtn";
                else if (priority.includes("High"))
                    priorityClass = "Hardbtn";

                cards += "<div class='paragraphs'>" +
                    "<p><b>" + title + "</b></p>" +
                    "<p>" + course + "</p>" +
                    "<p><img src='Icons/timer.png' width='18' height='18'> " + date + "</p>" +
                    "<p><img src='Icons/presentation.png' width='18' height='18'> " + presentationDate + "</p>" +
                    "<p>" + description + "</p>" +
                    "<button class='" + priorityClass + "'>" + priority + "</button><br>" +
        "<button class='delete-btn' onclick='deleteProject(" + i + ")'>🗑 Delete</button>" +


                    "</div>";
            }
        }

        place.innerHTML = cards;
    }
}


function showExamCard() {

    var place = document.getElementById("examNewCard");
    var count = localStorage.getItem("examCount");

    if (place !== null && count !== null) {

        var cards = "";

        for (var i = 1; i <= count; i++) {

            var type = localStorage.getItem("examType" + i);

            if (type !== null) {

                var course = localStorage.getItem("examCourse" + i);
                var date = localStorage.getItem("examDate" + i);
                var priority = localStorage.getItem("examPriority" + i);
                var percentage = localStorage.getItem("examPercentage" + i);

                var priorityClass = "";

                if (priority.includes("Low"))
                    priorityClass = "Lowbtn";
                else if (priority.includes("Medium"))
                    priorityClass = "Mediumbtn";
                else if (priority.includes("High"))
                    priorityClass = "Hardbtn";

                cards += "<div class='paragraphs'>" +
                    "<p><b>" + type + "</b></p>" +
                    "<p>" + course + "</p>" +
                    "<p><img src='Icons/timer.png' width='18' height='18'> " + date + "</p>" +
                    "<p>Worth: " + percentage + "</p>" +
                    "<button class='" + priorityClass + "'>" + priority + "</button><br>" +
        "<button class='delete-btn' onclick='deleteExam(" + i + ")'>🗑 Delete</button>" +
                    "</div>";
            }
        }

        place.innerHTML = cards;
    }
}
function showCards() {
    showExamCard();
    showAssignmentCard();
    showProjectCard();
    updateAssessmentCounter();
}
/*localStorage.clear();*/

document.addEventListener("DOMContentLoaded", showCards);


 function updateAssessmentCounter() {

    var counter = 0; // default cards

    var examCount = localStorage.getItem("examCount") || 0;
    for (var i = 1; i <= examCount; i++) {
        if (localStorage.getItem("examType" + i) != null)
            counter++;
    }

    var assignmentCount = localStorage.getItem("assignmentCount") || 0;
    for (var i = 1; i <= assignmentCount; i++) {
        if (localStorage.getItem("assignmentTitle" + i) != null)
            counter++;
    }

    var projectCount = localStorage.getItem("projectCount") || 0;
    for (var i = 1; i <= projectCount; i++) {
        if (localStorage.getItem("projectTitle" + i) != null)
            counter++;
    }

    document.getElementById("s1").innerHTML = counter;
}
// ==================== DELETE ASSIGNMENT ====================
function deleteAssignment(i) {

    localStorage.removeItem("assignmentTitle" + i);
    localStorage.removeItem("assignmentCourse" + i);
    localStorage.removeItem("assignmentDate" + i);
    localStorage.removeItem("assignmentPriority" + i);
    localStorage.removeItem("assignmentDescription" + i);

    showAssignmentCard();
    updateAssessmentCounter();
}

// ==================== DELETE PROJECT ====================
function deleteProject(i) {

    localStorage.removeItem("projectTitle" + i);
    localStorage.removeItem("projectCourse" + i);
    localStorage.removeItem("projectDate" + i);
    localStorage.removeItem("presentationDate" + i);
    localStorage.removeItem("projectPriority" + i);
    localStorage.removeItem("projectDescription" + i);

    showProjectCard();
    updateAssessmentCounter();
}

// ==================== DELETE EXAM ====================
function deleteExam(i) {

    localStorage.removeItem("examType" + i);
    localStorage.removeItem("examCourse" + i);
    localStorage.removeItem("examDate" + i);
    localStorage.removeItem("examPriority" + i);
    localStorage.removeItem("examPercentage" + i);

    showExamCard();
    updateAssessmentCounter();
}