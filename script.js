// script.js

// Sample Data
const recommendations = [
    {
      name: "Paris, France",
      description: "The city of lights and romance.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Tokyo, Japan",
      description: "A vibrant mix of tradition and technology.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Cape Town, South Africa",
      description: "Breathtaking landscapes and wildlife.",
      image: "https://via.placeholder.com/150",
    },
  ];
  
  // Function to Generate Cards
  function displayRecommendations(data) {
    const container = document.getElementById("recommendations");
    container.innerHTML = ""; // Clear any existing content
    data.forEach((destination) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Handle Search
  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = recommendations.filter((destination) =>
      destination.name.toLowerCase().includes(query)
    );
    displayRecommendations(filtered.length ? filtered : recommendations);
  });
  
  // Initialize Recommendations
  displayRecommendations(recommendations);
  