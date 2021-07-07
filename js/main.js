



 var ourMeals = [];
 var Category = "Dessert"
 var allinks  = document.querySelectorAll("nav .nav-link");

 for(var i =0 ; i< allinks.length ; i++)
 {
     allinks[i].addEventListener("click" , changeCategory )
 }


 function changeCategory(e)
 {
      Category =   e.target.text;
    getMealsByCat();
 }

 getMealsByCat();

 function getMealsByCat()
 {
     var http = new XMLHttpRequest();

    http.open("GET" , "https://www.themealdb.com/api/json/v1/1/filter.php?c="+Category)

    http.send();


    http.addEventListener("readystatechange" , function(){

        if(http.status == 200 && http.readyState == 4)
        {
            ourMeals =  JSON.parse(http.response).meals ;
            displayMeals();
       }

     })

 }


 function displayMeals()
{

     var hasalah = ``;

  
    for(var i=0 ; i< ourMeals.length ;i++)
   {
        hasalah +=`<div class="col-md-3">
        <div class="item">
        <img onclick="test(`+ourMeals[i].idMeal+`)" class="img-fluid" src="`+ourMeals[i].strMealThumb+`">
           <h2>`+ourMeals[i].strMeal+`</h2>
       </div>  
       </div>`     }


     document.getElementById("forPosts").innerHTML = hasalah;
}





