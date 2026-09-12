function showDetails(drama) {
    alert("You selected: " + drama);
}

function showDetails(drama) {

    document.getElementById("popup-title").innerText = drama;

    if (drama === "Goblin") {
        document.getElementById("popup-info").innerText =
            "⭐ 8.6/10 | 📅 2016 | 🎭 Fantasy • Romance";

        document.getElementById("popup-description").innerText =
            "A fantasy romance drama about an immortal goblin and his journey to find his destined bride.";
    }

    else if (drama === "Crash Landing on You") {
        document.getElementById("popup-info").innerText =
            "⭐ 8.7/10 | 📅 2019 | 🎭 Romance • Comedy";

        document.getElementById("popup-description").innerText =
            "A South Korean heiress accidentally lands in North Korea and meets an army officer.";
    }

    else if (drama === "Twinkling Watermelon") {
        document.getElementById("popup-info").innerText =
            "⭐ 8.9/10 | 📅 2023 | 🎭 Fantasy • Youth";

        document.getElementById("popup-description").innerText =
            "A talented student travels through time and discovers family, friendship and music.";
    }

    document.getElementById("details-popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("details-popup").style.display = "none";
}
function showArtist(artist) {

    document.getElementById("artist-title").innerText = artist;

    if (artist === "BTS") {
        document.getElementById("artist-info").innerText =
            "🎤 Boy Group | 💜 HYBE | 📅 Debut: 2013";

        document.getElementById("artist-description").innerText =
            "BTS is a South Korean group known for their music, performances and worldwide ARMY fanbase.";
    }

    else if (artist === "BLACKPINK") {
        document.getElementById("artist-info").innerText =
            "🎤 Girl Group | 🖤💗 YG Entertainment";

        document.getElementById("artist-description").innerText =
            "BLACKPINK is a South Korean girl group known for their music and powerful performances.";
    }

    else if (artist === "Stray Kids") {
        document.getElementById("artist-info").innerText =
            "🎤 Boy Group | ⭐ JYP Entertainment";

        document.getElementById("artist-description").innerText =
            "Stray Kids is a South Korean boy group known for their energetic music and performances.";
    }

    document.getElementById("artist-popup").style.display = "flex";
}


function closeArtistPopup() {
    document.getElementById("artist-popup").style.display = "none";
}
function showSong(song) {
    alert("You selected the BTS song:" + song)
}
function showSong(song) {

    document.getElementById("song-title").innerText = song;

    if (song === "Butter") {
        document.getElementById("song-info").innerText =
            "BTS • Released in 2021 • English-language single";
    }

    else if (song === "Dynamite") {
        document.getElementById("song-info").innerText =
            "BTS • Released in 2020 • English-language single";
    }

    else if (song === "Spring Day") {
        document.getElementById("song-info").innerText =
            "BTS • Released in 2017 • Korean single";
    }

    document.getElementById("song-popup").style.display = "flex";
}

function closeSongPopup() {
    document.getElementById("song-popup").style.display = "none";
}
function searchContent() {

    let search = document.getElementById("searchInput").value.toLowerCase().trim();

    if (search === "") {
        alert("Please enter something to search 🔎");
        return;
    }

    let content = document.body.innerText.toLowerCase();

    if (content.includes(search)) {
        alert("✅ Found: " + search);

        let elements = document.querySelectorAll("h2, h3, h4, p");

        for (let element of elements) {
            if (element.innerText.toLowerCase().includes(search)) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                break;
            }
        }

    } else {
        alert("❌ Sorry, '" + search + "' was not found.");
    }
}
function toggleDarkMode( ) {
   document.body.classList.toggle("dark-mode");
}
window.onscroll = function() {
    let button = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function joinFanZone() {

    let name = document.getElementById("fanName").value;
    let favorite = document.getElementById("favorite").value;

    if (name === "" || favorite === "") {
        alert("Please fill in both fields 😊");
        return;
    }

    document.getElementById("fanMessage").innerText =
        "Welcome to K-Wave, " + name + "! 💜 Your favorite is " + favorite + "!";

}
function sendMessage() {

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields 😊");
        return;
    }

    document.getElementById("contactResult").innerText =
        "Thank you, " + name + "! 💜 Your message has been received.";
}
