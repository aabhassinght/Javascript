const reviews = [

    {
        place: 'Goa',
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, rem!",
        category: 'Beaches',
    },
    {
        place: 'Kerela',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        category: 'Beaches',
    },
    {
        place: 'Manali',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odio adipisci quae autem, quis molestiae est quidem quo aut sint?',
        category: 'Hillstation'
    }
]
var plc = document.querySelector('.place');
var abt = document.querySelector('.about');
var img = document.querySelector('.image');

var prev = document.querySelector('.prev');
var nxt = document.querySelector('.next');



let currentItem = 0;
let picCount = 0;
window.addEventListener('DOMContentLoaded', function () {

    showPerson(currentItem); 

})

function showPerson(person) {
    const item = reviews[person]
    plc.textContent = item.place;
    abt.textContent = item.text;
    img.src = `../public/pic-${picCount}.jpeg`
}

nxt.addEventListener('click', function () {
    picCount++
    img.src = `../public/pic-${picCount}.jpeg`
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
        picCount = 0;
    }

    showPerson(currentItem);

})


prev.addEventListener('click', function () {
    if (picCount == 0) {
        picCount = reviews.length - 1;
    }
    else {
        picCount--;
    }
    img.src = `../public/pic-${picCount}.jpeg`
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;

    }
    showPerson(currentItem)
})

