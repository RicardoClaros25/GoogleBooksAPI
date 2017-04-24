// The function and event listener
function bookSearch(){
  console.log('this function runs!')
}

document.getElementById('button').addEventlistener('click', bookSearch, false)

 // Getting user data and clearing the previous search
 function bookSearch(){
   var search= document.getElementById("search").value
   document.getElementById("results").innerHTML = ""
   console.log(search)
 }

 // Setup the AJAX call for the API data based on the user's search term
 function bookSearch(){
   ...

   $.AJAX({
     url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
     dataType: "json",

     success: function(data) {
       console.log(data)
     },
     type: 'GET'
   });
 }

 // Loop through the data and display it
 sucess: function(data) {
   var results = document.getElementById('results')
   for(i=0; i<data.items.length; i++){
     results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
   }
 },
