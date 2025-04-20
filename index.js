let inputField = document.querySelectorAll('.input-style');
let displayError = document.querySelector('.display-error');
let displayErrorMonth = document.querySelector('.display-error-month')
let label = document.querySelectorAll('.label');
let inputYear = document.querySelector('#js-year');
let inputMonth = document.querySelector('#js-month')
let inputDate = document.querySelector('#js-date')
let clearYear = document.querySelectorAll('.js-span-year'); 
let clearMonth = document.querySelectorAll('.js-span-month')
let displayYear = document.querySelector('.js-display-year')
let displayMonth = document.querySelector('.js-display-month')

function calculateAge() {
    for (let i = 0; i < inputField.length && label.length; i++) {
      if (inputField[i].value === '') {
        inputField[i].style.border = '1px solid red';
        label[i].style.color = 'red'
        displayError.innerHTML = 'This field are/is required';
      } 
       if (inputYear.value !== '')  {
        inputYear.style.border = 'rgb(206, 205, 205)';
        label[2].style.color = 'hsl(0, 1%, 44%)';
        calcualateYear();
      } 
       if (inputMonth.value !== '') {
        inputMonth.style.border = 'rgb(206, 205, 205)';
        label[1].style.color = 'hsl(0, 1%, 44%)'
        calcualateMonth()
      } 
       if (inputDate.value !== '') {
        inputDate.style.border = 'rgb(206, 205, 205)';
        label[0].style.color = 'hsl(0, 1%, 44%)'
      }
    }

}

let month = new Date().getMonth()

function calcualateYear() {
  let year = new Date().getFullYear();
  if (inputMonth.value > 0 && inputMonth.value <= 12) {
    if (inputMonth.value - 1 > month) {
      if (inputYear.value !== '') {
        for (let i = 0; i < clearYear.length; i++) {
          clearYear[i].style.display = 'none'
          displayYear.innerHTML = `${(year - inputYear.value) - 1}`
        }
      } 
    } 
    if (inputMonth.value - 1 <= month) {
      if (inputYear.value !== '') {
        for (let i = 0; i < clearYear.length; i++) {
          clearYear[i].style.display = 'none'
          displayYear.innerHTML = `${year - inputYear.value}`
        }
      } 
    }
  }
}

function calcualateMonth() {
  if (inputMonth.value > 0 && inputMonth.value <= 12) {
    if (inputMonth !== '' && inputMonth.value - 1 > month) {
      for(let i = 0; i < clearMonth.length; i++) {
        clearMonth[i].style.display = 'none'
        displayMonth.innerHTML = `${12 - (inputMonth.value - 1) + month }`
        displayErrorMonth.innerHTML = ''
      }
    }
    else if (inputMonth !== '' && inputMonth.value - 1 <= month) {
      for(let i = 0; i < clearMonth.length; i++) {
        clearMonth[i].style.display = 'none'
        displayMonth.innerHTML = `${month - (inputMonth.value - 1)}`
        displayErrorMonth.innerHTML = ''
      }
    } 
  }
  else {
    displayErrorMonth.innerHTML = 'Enter a valid month'
  }
}
