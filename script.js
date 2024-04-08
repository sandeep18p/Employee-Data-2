let employeeData = [];

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('one').value;
    const profession = document.getElementById('two').value;
    const age = parseInt(document.getElementById('three').value);

    if (name && profession && age) {
        employeeData.push({
            id: employeeData.length + 1,
            name,
            profession,
            age
        });
        displayAddedEmployees();
        displayMessage('success', 'Employee added successfully.');
        document.getElementById('one').value = '';
        document.getElementById('two').value = '';
        document.getElementById('three').value = '';
        // Reset form
        document.getElementById('employeeForm').reset();

    } else {
        displayMessage('error', 'Error: Please make sure all the fields are filled before adding an employee!');
    }
});

function displayAddedEmployees() {
    const addedEmployeesContainer = document.getElementById('data');
    addedEmployeesContainer.innerHTML = '';

    employeeData.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.setAttribute('class', 'employeeContainer');
        employeeDiv.innerHTML = `
        <div class="dataFetch" >
            <div class="data1">
                <div class="inner">${employee.id}.</div>
                <div class="inner x">Name: ${employee.name}</div>
                <div class="inner y">Profession: ${employee.profession}</div>
                <div class="inner">Age: ${employee.age}</div>
            </div>
            <button class="deleteBtn" data-id="${employee.id}">Delete User</button>
            </div>
        `;

       
        employeeDiv.querySelector('.deleteBtn').addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            deleteEmployee(id);
        });

        addedEmployeesContainer.appendChild(employeeDiv);
    });

    const og = document.getElementById('zero');
    og.style.display = employeeData.length === 0 ? 'block' : 'none';
}

function deleteEmployee(id) {
    employeeData = employeeData.filter(employee => employee.id !== id);
    
    employeeData.forEach((employee, index) => {
        employee.id = index + 1;
    });
    displayAddedEmployees();
    
        displayMessage('success', 'Employee deleted successfully.');
  
}

function displayMessage(type, message) {
    const alertMessage = document.getElementById('alert');
    alertMessage.textContent = message;
    alertMessage.className = 'alert' + type;
}
