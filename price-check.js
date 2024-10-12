// API endpoint for CoinGecko
const apiURL = 'https://api.coingecko.com/api/v3/simple/price?ids=';

// Function to fetch the crypto price in USD and NGN
async function fetchCryptoPrice(cryptoId) {
    try {
        const response = await fetch(`${apiURL}${cryptoId}&vs_currencies=usd,ngn`);
        const data = await response.json();

        // Get the prices in USD and NGN
        const priceUSD = data[cryptoId].usd;
        const priceNGN = data[cryptoId].ngn;

        // Display the prices
        document.getElementById('price-display').innerHTML = `
            <p>The current price is:</p>
            <p><strong>$${priceUSD.toLocaleString()}</strong> (USD)</p>
            <p><strong>₦${priceNGN.toLocaleString()}</strong> (NGN)</p>
        `;
    } catch (error) {
        document.getElementById('price-display').innerHTML = `
            <p>There was an error fetching the price. Please try again later.</p>
        `;
    }
}

// Event listener for the button
document.getElementById('check-price-btn').addEventListener('click', () => {
    const selectedCrypto = document.getElementById('crypto-select').value;
    fetchCryptoPrice(selectedCrypto);
});

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
