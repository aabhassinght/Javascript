var changeColor=document.querySelector('.change');
var changeText=document.querySelector('.text');

const colors=['#ffc1ff','#a58cea','#5d5c9d','#f15025','#051024','#29335a'];

document.querySelector('.change').addEventListener('click',function()
{
  const randomNumber=Math.trunc(Math.random()*5)+1;;
  document.body.style.backgroundColor=colors[randomNumber];
  colors.textContent=colors[randomNumber];
   console.log('Clicked');
   console.log(randomNumber);
   if (randomNumber==3)
   {
       document.querySelector('.text').textContent="Done";
   }
})