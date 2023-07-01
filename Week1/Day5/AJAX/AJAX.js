const pElement = document.querySelector("p");

function fetchDataAjax() {
  console.log("Calling Data");

  let xhttp = new XMLHttpRequest();

  xhttp.open(
    "GET",
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c23fdb0f8ee64600b703a164fb201a50",
    true
  );
  xhttp.send();

  xhttp.onreadystatechange = function () {
    console.log(1);

    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      pElement.innerHTML = this.responseText;
    }

    if (this.readyState == 4 && this.status == 404) {
      console.log(this.responseText);
      pElement.innerHTML = "Server BAD";
    }
  };
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//fetch('url').then().then().catch();

function fetchData() {

   


    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c23fdb0f8ee64600b703a164fb201a50')
              .then(response => {
                // console.log(response);
                return response.json()
              })
              .then(data => {
                // Process the data from the API response
                console.log(data);
                console.log(data.articles);
              })
              .catch(error => {
                // Handle any errors that occurred during the API call
                    console.error(error);
                });


////
///fefe

}
