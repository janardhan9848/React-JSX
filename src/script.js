const cardsData = [
    {
        title: "Sunset View",
        description: "Enjoy the beautiful sunset view.",
        imageUrl: "https://via.placeholder.com/300x200/FF5733/FFFFFF"
    },
    {
        title: "Nature Reflection",
        description: "Peaceful lake with nature reflection.",
        imageUrl: "https://via.placeholder.com/300x200/3498DB/FFFFFF"
    },
    {
        title: "Ocean Peace",
        description: "Relax with the ocean waves.",
        imageUrl: ""
    }
];

const cardContainer = document.getElementById('card-container');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
        <img src="${card.imageUrl}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <button>Read More...</button>
    `;

    cardContainer.appendChild(cardElement);
});
