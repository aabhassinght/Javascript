

var nm=document.querySelector('.name').value
var email=document.querySelector('.email').value
var pass=document.querySelector('.password').value
var cty=document.querySelector('.country').value
var mob=document.querySelector('.mobile').value
var sub=document.querySelector('.submit')

// var nm=document.getElementById('name').value



sub.addEventListener('click',function()
{     

   console.log(nm);
   fetch("http://localhost:3000/users",
   { 
     method:"POST",
     body:JSON.stringify(
         {
             name:nm,
             email:email,
             password:pass,
             country:cty,
             mobile:mob

         }),
         headers:{
          "Content-type":"application/json; charset=UTF-8"

         }
       })
      .then(function(response)
      {
          return response.json()
      })        
      .then (function(data)
      {
          console.log(data);
      })
})

