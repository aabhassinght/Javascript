// var object = {
//     "main": [{
//       "id": "123",
//       "name": "name 1"
//     }, {
//       "id": "234",
//       "name": "name 2"
//     }]

const places = [

    {
        id: 1,
        place: 'Goa',
        category: 'Beaches',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, rem!",
        img:"../public/pic-0.jpeg"
    },
    {
        id: 2,
        category: 'Beaches',
        place: 'Kerela',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        img:"../public/pic-1.jpeg"
    },
    {

        id: 3,
        category: 'Hillstation',
        place: 'Manali',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        img:"../public/pic-2.jpeg"
    },
    {

        id: 4,
        category: 'Hillstation',
        place: 'Ooty',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        img:"../public/pic-3.jpeg"
    },
    {

        id: 5,
        category: 'Desert',
        place: 'Mount-abu',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        img:"../public/pic-4.jpeg"
    }
]

const cardSection=document.querySelector('.main');
const filterBtns=document.querySelectorAll('.nav-item')
var found =document.querySelector('.search')
var inp=document.querySelector('.fnd')
var reg=document.querySelector('.register')

//filter
filterBtns.forEach(function(btn)
{
btn.addEventListener('click',function(e)
{
 const category=e.currentTarget.dataset.id;
   const menuPlaces=places.filter(function(items)
   {
    if(items.category === category)
    {
        return items; 
    } 
       
   });
   console.log(menuPlaces);
      if(category === "All")
      {
          displayMenu(places)
      }
      else
      {
          displayMenu(menuPlaces)
      }

})
})

function displayMenu(menu)
{
    let displayMenu =menu.map(function(item)
    {
        // console.log(item);
        
        return`
        
        <div class="card mx-auto" style="width: 18rem;">
        <img src=${item.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.place}</h5>
          <p class="card-text">${item.text}</p>
          <a href="#" class="btn btn-primary">Lets Go</a>
        </div>
      </div>
      `
    })
   displayMenu=displayMenu.join("");
   cardSection.innerHTML=displayMenu;
}

window.addEventListener('DOMContentLoaded',function()
{   
  displayMenu(places);
})


found.addEventListener('click',function()
{
//    if(inp.value === )
//    {
//     console.log(places[0].place) 
//    }
  
     let obj=places.find(item => item.place == inp.value)
     console.log(obj);

     cardSection.innerHTML=  `<div class="card mx-auto" style="width: 18rem;">
     <img src=${obj.img} class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${obj.place}</h5>
       <p class="card-text">${obj.text}</p>
       <a href="#" class="btn btn-primary">Lets Go</a>
     </div>` 
     inp.value="" 

  
})


// reg.addEventListener('click',function()
// { 
//    cardSection.innerHTML=``
// })
// passport js 
// add validation

