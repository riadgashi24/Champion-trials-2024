function searchDestinations() {
  let input = document.getElementById('searchInput').value;
  alert('Searching for: ' + input);
  // Implement search functionality here
}

function getPersonalizedSuggestions() {
  // Example of how AI can be used to generate personalized suggestions
  const suggestions = [
      'Suggestion 1: Visit the beaches of Hawaii.',
      'Suggestion 2: Explore the mountains of Colorado.',
      'Suggestion 3: Discover the history of Rome.'
  ];

  let suggestionsContainer = document.getElementById('suggestions');
  suggestions.forEach(suggestion => {
      let suggestionElement = document.createElement('p');
      suggestionElement.textContent = suggestion;
      suggestionsContainer.appendChild(suggestionElement);
  });
}

document.addEventListener('DOMContentLoaded', getPersonalizedSuggestions);
let currentSlide = 0;
const slidesToShow = 3; // Numri i destinacioneve që do të shfaqen në të njëjtën kohë
const slideInterval = 3000; // Intervali në milisekonda për lëvizjen e slider-it

function moveSlide() {
    const slides = document.querySelectorAll('.destination-card');
    const totalSlides = slides.length;

    // Llogarit numrin e slide-ve që duhet të lëvizin
    currentSlide = (currentSlide + 1) % Math.ceil(totalSlides / slidesToShow);

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
}

// Lëviz automatikisht çdo 3 sekonda
setInterval(moveSlide, slideInterval);

// Shtoni event listener për butonin e lëvizjes (nëse keni)
document.querySelector('.next-button').addEventListener('click', () => {
    moveSlide();
});

// Shtoni event listener për butonin e lëvizjes mbrapa (nëse keni)
document.querySelector('.prev-button').addEventListener('click', () => {
    const slides = document.querySelectorAll('.destination-card');
    const totalSlides = slides.length;

    // Llogarit numrin e slide-ve që duhet të lëvizin mbrapa
    currentSlide = (currentSlide - 1 + Math.ceil(totalSlides / slidesToShow)) % Math.ceil(totalSlides / slidesToShow);
    
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
});
// Lista e sugjerimeve (mund të jetë e marrë nga një API ose një burim tjetër)
const suggestions = [
  { title: "Paris", description: "The city of lights.", image: "paris.jpg" },
  { title: "New York", description: "The city that never sleeps.", image: "newyork.jpg" },
  { title: "Tokyo", description: "A bustling metropolis.", image: "tokyo.jpg" },
  { title: "London", description: "The capital of England.", image: "london.jpg" },
  { title: "Sydney", description: "Famous for its opera house.", image: "sydney.jpg" }
];

// Funksioni për të shfaqur sugjerimet
function displaySuggestions(query) {
  const container = document.getElementById('suggested-container');
  container.innerHTML = ''; // Pastroni sugjerimet e mëparshme

  const filteredSuggestions = suggestions.filter(suggestion => 
      suggestion.title.toLowerCase().includes(query.toLowerCase())
  );

  filteredSuggestions.forEach(suggestion => {
      const card = document.createElement('div');
      card.className = 'suggested-card';
      card.innerHTML = `
          <img src="${suggestion.image}" alt="${suggestion.title}">
          <h3>${suggestion.title}</h3>
          <p>${suggestion.description}</p>
          <button>Learn More</button>
      `;
      container.appendChild(card);
  });
}

// Event listener për butonin e kërkimit
document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value;
  displaySuggestions(query);
});

// Event listener për të lejuar kërkimin me Enter
document.getElementById('search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
      const query = document.getElementById('search-input').value;
      displaySuggestions(query);
  }
});