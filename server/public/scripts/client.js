console.log('script sourced');

function submitForm(event){
  console.log('submitForm');
  event.preventDefault();
  

  let firstName = document.querySelector('#firstName').value;
  

  let lastName = document.querySelector('#lastName').value;
  

  let idNum = document.querySelector('#ID').value;
  

  let title = document.querySelector('#title').value;
  

  let annualSal = document.querySelector('#annualSalary').value;
  

  let employeeDataTable = document.querySelector('#employeeData');

  employeeDataTable.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>${annualSal}</td>
        <td><button onclick="removeRow(event)">Delete</button></td>
     
  `
};

function removeRow(event){
  event.target.closest('tr').remove();
};
