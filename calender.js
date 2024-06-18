let container = document.querySelector('.cont')
let dayNames= document.querySelector('.box1')
let prevbtn = document.querySelector('.prev')
let nextbtn = document.querySelector('.next')

//dates
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let date = new Date()
// console.log(weekdays[date.getDay()]);
let currentYear = date.getFullYear()
let currentMonth = date.getMonth();
// console.log(currentMonth);
// let nextMonth;

prevbtn.addEventListener(('click'),()=>{
    currentMonth -= 1;
    if(currentMonth<0){
       currentMonth = 11; 
       currentYear -=1;
    }
    // nextMonth = currentMonth
    // console.log(currentMonth);
    getprevMonth(currentMonth,currentYear)
})
nextbtn.addEventListener(('click'),()=>{
    if(currentMonth<11){
       currentMonth += 1; 
       
    }else{
        currentMonth = 0; 
        currentYear +=1;
    }

    getNextMonth(currentMonth,currentYear)
    // nextMonth = currentMonth
    
})
// nextMonth = currentMonth


// console.log(nextMonth);


// console.log(currentMonthDay1);
// let date = new Date(2024,6,0).getDate();
const getNumberOfDaysInMonth = (year,month)=>{
    return new Date(year,month +1,0).getDate();
}
// console.log(date);
// console.log(currentMonth);
// console.log(currentYear);

// console.log(currentMonthDays);
// console.log(preMonthDays);
// console.log(nextMonthDays);

// console.log(numOfDays);

function getDayName(date) {
    return date.toLocaleString(undefined, {weekday:'long'});
  }
// console.log(getDayName());
 

// let monthDays = []



const daySwitch=(whichDay,preMonthDays,numOfDays)=>{
    let monthDays = []
switch (whichDay) {
    
    case "Sunday":
        // monthDays.push('empty')
        numOfDays.map((day)=>{
           monthDays.push(day) 
        })
        console.log(monthDays);
        break;
    case "Monday":
        monthDays.push(preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    case "Tuesday":
        monthDays.push(preMonthDays-1,preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    case "Wednesday":
        monthDays.push(preMonthDays-2,preMonthDays-1,preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    case "Thursday":
        monthDays.push(preMonthDays-3,preMonthDays-2,preMonthDays-1,preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    case "Friday":
        monthDays.push(preMonthDays-4,preMonthDays-3,preMonthDays-2,preMonthDays-1,preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    case "Saturday":
        monthDays.push(preMonthDays-5,preMonthDays-4,preMonthDays-3,preMonthDays-2,preMonthDays-1,preMonthDays)
        numOfDays.map((day)=>{
            monthDays.push(day) 
        })
        break;
    
  
    default:
        break;
  }

  for(let k =1;k<=42;k++){
    if(monthDays.length<42){
        monthDays.push(k)
    }
  }
  return monthDays;
}
  

  
  
  

//   let monthDaysHolder = []

// console.log(monthDays);

const displayGrid = (monthDays)=>{
    let rows = 6;
    let columns = 7

    let grid = []
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            let num = j + i * columns
        grid[i][j] = monthDays[num];
        }
    }
    return grid;
}
  //
 
//   console.log(grid);

const displayCalender = (grid,month,currentYear)=>{
    let monthName = document.createElement('h2');
    let yearName = document.createElement('h2');
    monthName.className = 'month'
    yearName.className = 'year'
    monthName.textContent = month
    yearName.textContent = currentYear
    
    container.insertBefore(monthName, dayNames)
    container.insertBefore(yearName,monthName)
    // container.appendChild(monthName)
    grid.map((weeks)=>{
    // console.log(weeks);
    let box = document.createElement('div');
    box.className = 'box'
    let today = new Date()
    weeks.map((week)=>{
        let span = document.createElement('span')
        span.textContent = week
        if(currentYear === today.getFullYear() && currentMonth === today.getMonth() && week === today.getDate()){
            span.classList.add('currentDate')
        }
        box.append(span)
    })
    container.appendChild(box)
  })
}
  
const getcurrentMonth=(month,currentYear)=>{
    let monthDays=[];
    let grid=[];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    let currentMonthDays= getNumberOfDaysInMonth(currentYear,month);
    let preMonthDays= getNumberOfDaysInMonth(currentYear,month - 1)
    // let nextMonthDays= getNumberOfDaysInMonth(currentYear,month + 1)

    let currentMonthDay1 = new Date(currentYear,month,1)

    let whichDay = weekdays.find((day)=>{
    
        return day ===getDayName(currentMonthDay1) ;
      })
      let whichMonth = monthNames[month]
    //   console.log(whichMonth);
    //   console.log(whichDay);

    let numOfDays = [];

    for(let i = 1; i<=currentMonthDays; i++){
        numOfDays.push(i)
    }
    // console.log(numOfDays);
    monthDays.length = 0;
    grid.length = 0;
    monthDays = daySwitch(whichDay,preMonthDays,numOfDays);
    grid = displayGrid(monthDays)
    let boxes =document.querySelectorAll('.box')
    let monthName =document.querySelectorAll('.month')
    let yearName =document.querySelector('.year')
    if(monthName){
        monthName.forEach((month)=>{
            month.remove();
        })
        // monthName
    }
    if(yearName){
        yearName.remove();
    }

    if(boxes){
        boxes.forEach(box => {
            box.textContent = '';
        });
    }
    displayCalender(grid,whichMonth,currentYear)
    // console.log(grid);

}
  //
//   for(let i=0;i<=6; i++){
//     let row = []
//     let r=0;
//     for(let j = 0; j<=7 ;j++){
        
//         row.push(monthDays[j])
//         // monthDaysHolder[i].push(monthDays[j]) 
//     }
//     monthDaysHolder.push(row)
//     // row.length = 0;
//   }
//   console.log(monthDaysHolder);
// console.log(monthDays);
getcurrentMonth(currentMonth,currentYear)

const getprevMonth = (month,currentYear)=>{
    getcurrentMonth(month,currentYear)
    // console.log(month);
}
const getNextMonth = (month)=>{
    getcurrentMonth(month,currentYear)
    // console.log(month);
}
