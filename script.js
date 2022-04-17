
  //variables

  const date = new Date();

  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];

  let monthDays = document.querySelector(".days");

   document.querySelector(".date h1").innerHTML = "Usernames"


    //all days print and current day highlight

   let days = "";

   for (let i = 1; i <= lastDay; i++) {
    if (
       i === new Date().getDate() &&
       date.getMonth() === new Date().getMonth()) {days += `<div class="today">${i}  </div>`;
     
      } else {
        days += `<div>${i}  </div>`;
      }  

 }

monthDays.innerHTML = days;

//api 

axios.get('https://jsonplaceholder.typicode.com/users')

.then(function(object) {
  object.data.forEach (x => {
 
  document.getElementById("days").innerHTML += '<div class="days">' + x.username + '</div>'
  });
})

.catch(function(err){

})



