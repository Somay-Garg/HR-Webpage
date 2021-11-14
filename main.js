var addEmployeeList = document.querySelector(".employee-list");
var addInterviewList = document.querySelector(".interviews");
var addEmployeeModal = document.querySelector("#employeeModal");
var addInterviewModal = document.querySelector("#interviewModal");

addEmployeeModal.style.display="none";
addInterviewModal.style.display="none";

function addEmployee(){
    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var position = document.querySelector("#position").value;
    var department = document.querySelector("#department").value;
    var email = document.querySelector("#email").value;
    var salary = document.querySelector("#salary").value;

    var addNewEmployee = `
                <li>
                    <div class="employee-card" id="employee1">
                        <img class="user-img" src="./New Default Profile.jpg" alt="">
                        <span>
                            <div class="employment-details" id="employee1-details">
                                <span class="name-format">`+name+`</span>
                                <span class="name-format">`+surname+`</span>
                                <br>
                                <span>`+position+`</span>
                                <br>
                                <span>`+department+`</span>
                                <br>
                                <span>`+email+`</span>
                                <br>
                                <span>&#8356;`+salary+`</span>
                            </div>
                        </span>
                    </div>
                </li>
    `;

    addEmployeeList.insertAdjacentHTML('beforeend', addNewEmployee);

    addEmployeeModal.style.display="none";
}

function showAddEmpModal(){
    addEmployeeModal.style.display="block";
}

function removeEmpModal(){
    addEmployeeModal.style.display="none";
}

function addInterview(){
    var department = document.querySelector("#int-department").value;
    var position = document.querySelector("#int-position").value;

    var addNewInterview = `
            <li>
                <div class="list-item">
                    <h3>`+department+`</h3>
                    <p>`+position+`</p>
                    <button class="accept-btn" type="button" name="button">Accept</button>
                    <button class="reject-btn" type="button" name="button">Reject</button>
                </div>
            </li>
    `;

    addInterviewList.insertAdjacentHTML('beforeend', addNewInterview);

    addInterviewModal.style.display="none";
}

function showAddIntModal(){
    addInterviewModal.style.display="block";
}

function removeIntModal(){
    addInterviewModal.style.display="none";
}