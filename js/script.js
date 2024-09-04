document.addEventListener("DOMContentLoaded", function() {
    // App data (you can expand this or fetch from a server)
    const apps = {
        1: {
            title: "TapSwap",
            description: "TapSwap is an interactive tap-to-earn game accessible through Telegram's mini apps for both iOS and Android devices. Players earn points by tapping a gold coin that appears in the centre of the screen.",
            image: "images/app1.png"
        },
        2: {
            title: "Hamster Kombat",
            description: "Hamster Kombat is a Telegram-based tap-to-earn game which has over 53 million subscribers on its Telegram channel. In addition, the game allows players to earn in-game coins by tapping their screens and completing various in-game missions.",
            image: "images/app2.png"
        },
        3: {
            title: "Blum",
            description: "Blum is a hybrid crypto exchange designed for young and adventurous users looking to explore the web3 world, combining features from both centralized and decentralized exchanges.",
            image: "images/app3.png"
        },
        4: {
            title: "Dogs",
            description: "Arguably One of the MOST successful Airdrop on Telegram",
            image: "images/app4.png"
        },
        5: {
            title: "Tomarket",
            description: "Welcome To Tomarket! Buy and Sell Real World Assets(RWA), Crypto Bond Yields, Points, Pre-Circulation Tokens and More. With this Drop game, Start farming $TOMATO now to secure early user benefits and Airdrop Allocations",
            image: "images/app5.png"
        },
        6: {
            title: "Catizen",
            description: "Catizen is a mini-game platform built on the TON blockchain, which has features including Play-to-Earn, Tap-to-Earn, Play-to-learn x puzzle game. Playing the CATIZEN game involves owning and caring for virtual cat cafes. Players can accumulate rewards that will be converted into $CATI tokens upon lunch.",
            image: "images/app6.png"
        }
        // Add more apps as needed
    };


    // Check if we're on the app detail page
    if (window.location.pathname.includes("app.html")) {
        const params = new URLSearchParams(window.location.search);
        const appId = params.get("app");

        if (apps[appId]) {
            document.getElementById("app-title").textContent = apps[appId].title;
            document.getElementById("app-description").textContent = apps[appId].description;
            document.getElementById("app-image").src = apps[appId].image;
        } else {
            document.querySelector("main").innerHTML = "<p>App not found.</p>";
        }
    }
    
});
