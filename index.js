let inputField = document.querySelectorAll('.input-style');
let displayError = document.querySelector('.display-error');
let displayErrorMonth = document.querySelector('.display-error-month');
let displayErrorDay = document.querySelector('.display-error-day')
let label = document.querySelectorAll('.label');
let inputYear = document.querySelector('#js-year');
let inputMonth = document.querySelector('#js-month');
let inputDate = document.querySelector('#js-date');
let clearYear = document.querySelectorAll('.js-span-year'); 
let clearMonth = document.querySelectorAll('.js-span-month');
let clearDay = document.querySelectorAll('.js-span-day')
let displayYear = document.querySelector('.js-display-year');
let displayMonth = document.querySelector('.js-display-month');
let displayDay = document.querySelector('.js-display-day')

function calculateAge() {
    for (let i = 0; i < inputField.length && label.length; i++) {
      if (inputField[i].value === '') {
        inputField[i].style.border = '1px solid red';
        label[i].style.color = 'red'
        displayError.innerHTML = 'This field are/is required';
      } 
       if (inputYear.value)  {
        inputYear.style.border = 'rgb(206, 205, 205)';
        label[2].style.color = 'hsl(0, 1%, 44%)';
        calculateYear();
      } 
       if (inputMonth.value) {
        inputMonth.style.border = 'rgb(206, 205, 205)';
        label[1].style.color = 'hsl(0, 1%, 44%)'
        calculateMonth()
      } 
       if (inputDate.value) {
        inputDate.style.border = 'rgb(206, 205, 205)';
        label[0].style.color = 'hsl(0, 1%, 44%)';
        calculateDay()
      }
    }

}

let month = new Date().getMonth()

function calculateYear() {
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

function calculateMonth() {
  if (inputMonth.value > 0 && inputMonth.value <= 12) {
    if ( inputMonth.value - 1 > month) {
      for(let i = 0; i < clearMonth.length; i++) {
        clearMonth[i].style.display = 'none'
        displayMonth.innerHTML = `${12 - (inputMonth.value - 1) + month }`
        displayErrorMonth.innerHTML = ''
      }
    }
    else if ( inputMonth.value - 1 <= month) {
      for(let i = 0; i < clearMonth.length; i++) {
        clearMonth[i].style.display = 'none'
        displayMonth.innerHTML = `${month - (inputMonth.value - 1)}`
        displayErrorMonth.innerHTML = ''
      }
    } 
  }
  else {
    displayErrorMonth.innerHTML = 'Enter a valid month!!!!'
  }
}
let day = new Date().getDate(); 

function calculateDay() {
  if (inputDate.value > 0 && inputDate.value <= 31) {
    if (inputDate.value > day) {
      for(let i = 0; i < clearDay.length; i++) {
        clearDay[i].style.display = 'none'
        displayDay.innerHTML = `${(31 - inputDate.value) + day}`
      }
    } else if (inputDate.value <= day) {
      for(let i = 0; i < clearDay.length; i++) {
        clearDay[i].style.display = 'none'
        displayDay.innerHTML = `${day - inputDate.value}`
        displayErrorDay.innerHTML = ''
      }
    }
   
  } else {
    displayErrorDay.innerHTML = 'Enter a valid date!!!'
  }
}


function onKeydown(event) {
  if (event.keyCode === 13) {
    calculateAge()
  }
}