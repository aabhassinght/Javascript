
const currYear = new Date().getFullYear();
     
// const lastDay =`31/12/${currYear}`

const currDate= new Date().getDate();


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
const currMonth= new Date().getMonth();
  
console.log(currMonth);
document.querySelector('.date').textContent=currYear;
var sum =0;

for(i=0;i<currMonth;i++){
 var x =daysInMonth(i, currYear);

 var sum= sum+ x ;

}

sum=sum+currDate;

var Total=0;
for(i=0;i<12;i++){
    var x =daysInMonth(i, currYear);
   
    var Total= Total+ x ;
   
   }
   
   const remDays=Total-sum;
   document.querySelector('.date').textContent=`${remDays} days remianing`;