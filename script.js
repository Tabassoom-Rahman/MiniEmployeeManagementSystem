// Select elements
const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const positionInput = document.getElementById('position');
const addButton = document.getElementById('add-employee');
const employeeTable = document.querySelector('#employee-table tbody');

// Initialize an array to store employees
let employees = [];

// Function to render the employee table
function renderEmployees() {
  employeeTable.innerHTML = ''; // Clear the table
  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.email}</td>
      <td>${employee.position}</td>
      <td class="actions">
        <button class="edit" onclick="editEmployee(${index})">Edit</button>
        <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
      </td>
    `;
    employeeTable.appendChild(row);
  });
}

// Function to add an employee
function addEmployee() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const position = positionInput.value.trim();

  if (name && email && position) {
    employees.push({ name, email, position });
    renderEmployees();
    form.reset(); // Clear the form
  } else {
    alert('Please fill in all fields');
  }
}

// Function to delete an employee
function deleteEmployee(index) {
  employees.splice(index, 1);
  renderEmployees();
}

// Function to edit an employee
function editEmployee(index) {
  const employee = employees[index];
  nameInput.value = employee.name;
  emailInput.value = employee.email;
  positionInput.value = employee.position;

  // Change the Add button to an Update button
  addButton.textContent = 'Update Employee';
  addButton.onclick = () => updateEmployee(index);
}

// Function to update an employee
function updateEmployee(index) {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const position = positionInput.value.trim();

  if (name && email && position) {
    employees[index] = { name, email, position };
    renderEmployees();
    form.reset(); // Clear the form
    addButton.textContent = 'Add Employee'; // Reset button to Add
    addButton.onclick = addEmployee; // Reset the button functionality
  } else {
    alert('Please fill in all fields');
  }
}

// Event listener for Add Employee button
addButton.onclick = addEmployee;

// Initial rendering of employees
renderEmployees();
