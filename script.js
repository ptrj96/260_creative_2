document.getElementById("gif_submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("gif_input").value;
  if (value === ""){
    const url = "https://api.giphy.com/v1/gifs/random?api_key=MIhzizZsLzgrJafQKn0jxguHK1Ck1ZQA";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);

         let results = "";
         results += '<img src="' + json.data.image_url + '"/>'
               document.getElementById("gif_results").innerHTML = results;
       });
     }
     else {
       const url = "http://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=MIhzizZsLzgrJafQKn0jxguHK1Ck1ZQA&limit=1";
       fetch(url)
         .then(function(response) {
           return response.json();
         }).then(function(json) {
           console.log(json);

            let results = "";
            results += '<img src="' + json.data[0].images.original.url + '"/>'
                  document.getElementById("gif_results").innerHTML = results;
          });

     }


});
