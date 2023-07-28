console.log('script sourced');

let maxCost = 20000;
//let monthCost = annualSal % 2;
let annualSalData = [];



function submitForm(event){
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
     
  `;

  function addSal(annualSal) {
    annualSal = document.getElementById('annualSalary').value;
    annualSalData.push(annualSal);  
    console.log(annualSalData);
    return false;
  }
addSal();




   let monthlyCost = Number(annualSal / 12);
   
        document.querySelector('#monthlyCost').innerHTML = monthlyCost;
    if(monthlyCost > maxCost){
      document.querySelector('#monthlyCost').backgroundColor = 'red';
    }
      
  

console.log(monthlyCost);

let sum = 0;

// iterate over each item in the array
for (let i = 0; i < annualSalData.length; i++ ) {
  sum += annualSalData[i];
}

console.log(sum) // 15

};






function removeRow(event){
  event.target.closest('tr').remove();
};



