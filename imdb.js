let s=document.getElementById("submit");
let id=document.getElementById("id");
let details_dis=document.getElementsByTagName("p");
const movie = new XMLHttpRequest();
s.onclick=function(){
    movie.open("GET",`https://www.omdbapi.com/?t=${id.value}&apikey=4b0522ef`);
    movie.onloadend = detailsAjaxResponse;
    movie.send();
};

let detailsAjaxResponse = function() {
    if (movie.status===200) {
        let response=JSON.parse(movie.responseText);
        let name=response['Title'];
        let director=response['Director'];
        let imdb_rating=response['imdbRating'];
        details_dis[0].innerHTML="Name : "+name+"<br>"+"Director : "+director+".<br>"+"IMDB Rating : "+imdb_rating;
   } else {
    details_dis[0].inner.HTML="Something went wrong";
   }
};

