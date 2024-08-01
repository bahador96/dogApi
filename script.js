document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetch-button");
  const dogImage = document.getElementById("dog-image");
  const loadingText = document.getElementById("loading-text");
  const errorMessage = document.getElementById("error-message");

  const fetchDogImage = () => {
    loadingText.style.display = "block";
    dogImage.style.display = "none";
    errorMessage.style.display = "none";

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          dogImage.src = data.message;
          dogImage.onload = () => {
            loadingText.style.display = "none";
            dogImage.style.display = "block";
          };
        } else {
          throw new Error("Failed to load image");
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        loadingText.style.display = "none";
        errorMessage.style.display = "block";
      });
  };

  fetchButton.addEventListener("click", fetchDogImage);

  // Fetch initial image
  fetchDogImage();
});
