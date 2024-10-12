// List of apps with more information
const apps = [
    {
        id: 1,
        name: "Blum",
        category: "free",
        icon: "images/app3.png",
        description: "Mine BLUM Today",
        details: "Blum is a hybrid crypto exchange designed for young and adventurous users looking to explore the web3 world, combining features from both centralized and decentralized exchanges.",
        rating: 4.8,
        downloadLink: "https://t.me/blum/app?startapp=ref_pqoM2uVzo7"
    },
    {
        id: 3,
        name: "TapSwap",
        category: "free",
        icon: "images/app1.png",
        description: "Mint Your Taps With TAPSWAP",
        details: "TapSwap is an interactive tap-to-earn game accessible through Telegram's mini apps for both iOS and Android devices. Players earn points by tapping a gold coin that appears in the centre of the screen.",
        rating: 3.9,
        downloadLink: "https://t.me/tapswap_mirror_1_bot?start=r_5997748340"
    },
    {
        id: 4,
        name: "DineroNigeria",
        category: "trending",
        icon: "images/dinero.jpg",
        description: "Join Dinero, Earn like NEVER Before",
        details: "details",
        rating: 4.8,
        downloadLink: "https://t.me/DineroNigeriaBot?start=r04577695705"
    },
    {
        id: 5,
        name: "Yum Party",
        category: "new",
        icon: "images/app7.png",
        description: "Join The Party!",
        details: "Welcome to Yum Party! Are you a trader, a collector, an influencer, or a player? Pick a team, but choose wisely. Ready to become a Master Candy Collector, Some candies might give you mysterious rewards. Find them all!See you on the other side!",
        rating: 4.8,
        downloadLink: "https://t.me/yumparty_bot/game?startapp=72efa6eb-24c1-4060-89f9-b81b6e0d8bc9"
    },
    {
        id: 6,
        name: "Tomarket",
        category: "trending",
        icon: "images/app5.png",
        description: "Mine $TOMATO on Tomarket",
        details: "Harvest, farm and obtain $TOMATO. Be early for what's coming on TOMARKET. The more, the better. Join Today!",
        rating: 4.8,
        downloadLink: "https://t.me/Tomarket_ai_bot/app?startapp=0000hcSv"
    },
    {
        id: 7,
        name: "Mnemonics",
        category: "free",
        icon: "images/app8.png",
        description: "Find your Luck With Mnemonics",
        details: "Hack cypto wallets, take the coins and get all the airdrop rewards!, Play-to-earn wallet-hacking game (NOTE: This Game is Purely Fictional and Not Based On Real Life Events)",
        rating: 4.8,
        downloadLink: "https://t.me/Tomarket_ai_bot/app?startapp=0000hcSv"
    },
    {
        id: 8,
        name: "Major",
        category: "trending",
        icon: "images/app9.png",
        description: "Become a Major of Telegram.",
        details: "Mine Major Points, Convert to $MAJOR token, $MAJOR will release soon.",
        rating: 4.8,
        downloadLink: "https://t.me/major/start?startapp=5997748340"
    },
    {
        id: 9,
        name: "Not Pixel",
        category: "trending",
        icon: "images/app10.png",
        description: "Paint pixels and get PX",
        details: "From The Makers of Notcoin, Mine $PX and Make Money!",
        rating: 4.8,
        downloadLink: "https://t.me/notpixel/app?startapp=f5997748340"
    },
    {
        id: 10,
        name: "DRFT Party",
        category: "new",
        icon: "images/app11.png",
        description: "DRFT Party merge2 NFT cars game",
        details: "Merge Cars, Earn Points, DRFT Party is one of the most Anticipated Airdrops.",
        rating: 4.8,
        downloadLink: "https://t.me/notpixel/app?startapp=f5997748340"
    },
    // Add more apps as needed
];

// Function to display apps dynamically
function displayApps(filterCategory = 'all', searchQuery = '') {
    const appList = document.getElementById('app-list');
    if (!appList) return; // Exit if not on the index page

    appList.innerHTML = '';  // Clear existing content

    let filteredApps = apps;

    // Filter by category
    if (filterCategory !== 'all') {
        filteredApps = filteredApps.filter(app => app.category === filterCategory);
    }

    // Filter by search query
    if (searchQuery) {
        filteredApps = filteredApps.filter(app =>
            app.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Display apps
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        // Add download and more info links using app.downloadLink
        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <h2>${app.name}</h2>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">Launch</a>
            <a href="app-details.html?id=${app.id}" class="more-info-btn">More Info</a>
        `;

        appList.appendChild(appCard);
    });
}

// Search functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value;
        displayApps('all', query);
    });
}

// Category buttons functionality
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        const query = searchInput ? searchInput.value : '';
        displayApps(category, query);
    });
});

// Function to display the app details on the details page
function displayAppDetails() {
    const appDetailsContainer = document.getElementById('app-details');
    if (!appDetailsContainer) return; // Exit if not on the app-details page

    const queryParams = new URLSearchParams(window.location.search);
    const appId = queryParams.get('id');
    const app = apps.find(a => a.id == appId);

    if (app) {
        appDetailsContainer.innerHTML = `
            <img src="${app.icon}" alt="${app.name}">
            <h2>${app.name}</h2>
            <p>${app.details}</p>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">Launch</a>
        `;
    } else {
        appDetailsContainer.innerHTML = '<p>App not found.</p>';
    }
}

// Initialize the app
if (window.location.pathname.includes('app-details.html')) {
    // If on the app details page
    displayAppDetails();
} else {
    // If on the index page
    displayApps();
}

// Get the toggle button element
const toggleButton = document.getElementById('mode-toggle');

// Check if dark mode is already enabled (via local storage)
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if it's enabled
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = "Switch to Light Mode";
}

// Toggle function
toggleButton.addEventListener('click', () => {
  const isDarkModeEnabled = document.body.classList.toggle('dark-mode');

  if (isDarkModeEnabled) {
    // Save dark mode state
    localStorage.setItem('darkMode', 'enabled');
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    // Remove dark mode state
    localStorage.setItem('darkMode', 'disabled');
    toggleButton.textContent = "Switch to Dark Mode";
  }
});
