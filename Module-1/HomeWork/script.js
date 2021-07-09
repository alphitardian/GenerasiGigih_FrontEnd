// onClik Alert
const submitButtonClick = () => {
  alert("Generasi Gigih!");
};
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitButtonClick);

// API Call
axios
  .get(
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
  )
  .then((response) => {
    // Handle success response
    console.log(response);

    // Display to the web
    let albumImg = document.getElementById("albumImg");
    let trackTitle = document.getElementById("trackTitleText");
    let artist = document.getElementById("artistText");
    let album = document.getElementById("albumText");

    albumImg.src = response.data.album.images[0].url;
    trackTitle.innerHTML = response.data.name;
    artist.innerHTML = response.data.album.artists[0].name;
    album.innerHTML = response.data.album.name;
  })
  .catch((error) => {
    // Handle error
    alert(`There's an error from the API Call: ${error}`);
  });
