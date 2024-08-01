document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetch-button');
  const dogImage = document.getElementById('dog-image');
  const loadingText = document.getElementById('loading-text');
  const errorMessage = document.getElementById('error-message');
  const URL = 'https://dog.ceo/api/breeds/image/random';

  const fetchDogImage = async () => {
      try {
          loadingText.style.display = 'block';
          dogImage.style.display = 'none';
          errorMessage.style.display = 'none';

          const response = await fetch(URL);
          const data = await response.json();

          if (data.status === 'success') {
              dogImage.src = data.message;
              dogImage.onload = () => {
                  loadingText.style.display = 'none';
                  dogImage.style.display = 'block';
              };
          } else {
              throw new Error('Failed to load image');
          }
      } catch (error) {
          console.error('Error fetching dog image:', error);
          loadingText.style.display = 'none';
          errorMessage.style.display = 'block';
      }
  };

  fetchButton.addEventListener('click', fetchDogImage);

  // Fetch initial image
  fetchDogImage();
});
