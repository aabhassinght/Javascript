//  let dayBox=document.querySelector('.days');
// const hourBox=document.querySelector('.hours');
// const minuteBox=document.querySelector('.minutes');
// const secondBox=document.querySelector('.seconds');

var endDate= new Date('Jan 1,2023 00:00:00').getTime();

function newYear()
{
    var currDate=new Date().getTime();
     var    diff= endDate-currDate;

         var second=1000;
         var minute=second * 60;
         var hour=minute * 60;
         var day= hour * 24;

         var d=Math.floor(diff/(day))
         var h=Math.floor((diff % (day))/(hour));
         var m=Math.floor((diff % (hour))/(minute));
         var w=Math.floor((diff % (minute))/ second );

         document.querySelector('.days').textContent=d;
         document.querySelector('.hours').textContent=h;
         document.querySelector('.minutes').textContent=m;
         document.querySelector('.seconds').textContent=w;
  
  
}
setInterval(function()
{
    newYear();
},1000)


// console.log(endtime);

// function countdown()
// {
//     let currDate=new Date();
//     let currTime=currDate.getTime();

//     let remTime=endtime-currTime;
//     console.log(remTime);
// }
// countdown();
