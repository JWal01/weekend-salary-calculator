
console.log('script sourced');

  let maxCost = 20000;
  let annualSalData = [];
  let totalAnnualSal = 0; 

  function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let idNum = document.querySelector('#ID').value;
    let title = document.querySelector('#title').value;
    let annualSal = parseInt(document.querySelector('#annualSalary').value);

    let employeeDataTable = document.querySelector('#employeeData');

    employeeDataTable.innerHTML += `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>${annualSal}</td>
        <td><button onclick="removeRow(event)">Delete</button></td>
      </tr>
    `;

    annualSalData.push(annualSal);
    console.log(annualSalData);

    totalAnnualSal += annualSal;

    let monthlyCost = totalAnnualSal / 12;
    document.querySelector('#monthlyCost').innerText = monthlyCost;

    if (monthlyCost > maxCost) {
      document.querySelector('#monthlyCost').style.backgroundColor = 'red';
    } else {
      document.querySelector('#monthlyCost').style.backgroundColor = 'transparent';
    }

    console.log(monthlyCost);
  }

  function removeRow(event) {
    event.target.closest('tr').remove();
  }

