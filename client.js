// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  const rating = employee.reviewRating;

  //calculating bonus percent based on rating
  if (rating <= 2) {
    employee.bonusPercentage = 0;
  } else if (rating === 3) {
    employee.bonusPercentage = 4;
  } else if (rating === 4) {
    employee.bonusPercentage = 6;
  } else if (rating === 5) {
    employee.bonusPercentage = 10;
  }

  //adjusting bonus baseed on other factors
  if (employee.employeeNumber.length === 4) {
    employee.bonusPercentage += 5;
  }
  if (employee.annualSalary >= 65000) {
    employee.bonusPercentage -= 1;
  }
  if (employee.bonusPercentage >= 13) {
    employee.bonusPercentage = 13;
  }s
  if (employee.bonusPercentage <= 0) {
    employee.bonusPercentage = 0;
  }

  //calculating total bonus:

  employee.totalBonus = (employee.bonusPercentage * .01) * employee.annualSalary;

  // return new object with bonus results

  return employee;

}