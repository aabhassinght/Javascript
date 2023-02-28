var increseCount=document.querySelector('.increase')
var decreaseCount=document.querySelector('.decrease')
var display=document.querySelector('.display')

var reset=document.querySelector('.reset')
var display=0;

document.querySelector('.increase').addEventListener('click',function()
{
    if(display>=0)
    {   
       var increasedValue = document.querySelector('.display').textContent=display+1;
       console.log(increasedValue);
       display=increasedValue
    }
 
  

})
document.querySelector('.decrease').addEventListener('click',function()
{
    if(display!=0 && display>0)
    {
     var decreasedValue=  document.querySelector('.display').textContent=display-1;
       console.log(display);
       display=decreasedValue;
    }
   

})


document.querySelector('.reset').addEventListener('click',function()
{
    if(display!=0)
    {
     var resetValue=  document.querySelector('.display').textContent=0;
       console.log(display);
       display=resetValue;
    }
   

})

