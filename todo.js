
var inputData = document.querySelector('.input');
var btn = document.querySelector('.submit');
var listItem = document.querySelector('.listing')
var btnDelete = document.querySelector('.delete')
var num = document.querySelector('.number')
var num = 0;



function addItem() {
    var para = document.createElement('p')
    para.innerText = inputData.value
    listItem.appendChild(para)
    inputData.value = "";

    var Delete = document.createElement('button')
    Delete.innerHTML = '<button class="btn btn-danger">Delete</button>'
    listItem.appendChild(Delete)

    if (num >= 0) {
        var increasedNum = document.querySelector('.number').textContent = num + 1
        num = increasedNum;

        var inTh = document.createElement('th')
        inTh.innerHTML = increasedNum
        listItem.appendChild(inTh)
    }
  
  
    Delete.addEventListener('click', function () {
        console.log("delete called");
        // this.remove(listItem);
        listItem.removeChild(para)
        listItem.removeChild(Delete)
        listItem.removeChild(inTh)
        // listItem.removeChild(listItem.firstElementChild)
    })


}

btn.addEventListener('click', function () {


    addItem();
    

})

btnDelete.addEventListener('click', function () {
    console.log("delete called");
    // this.removeChild(listItem);
    //  listItem.removeChild(listItem.firstElementChild)
    listItem.removeChild(listItem)

})

// function showdltBtn()
// {
//     btnDelete.classList.remove('delete')
// }

