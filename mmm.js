const songs = {
    
Aries: [
    { title: "Electric Feel", artist: "MGMT", id: "3DjdOld3DI5KO3VXb05f5K" },
    { title: "Midnight City", artist: "M83", id: "2tak5K6k4tuj5pzpRibZBz" },
    { title: "The Less I Know the Better", artist: "Tame Impala", id: "58q2HKrzhC3ozto2nDdN4z" },
    { title: "Team", artist: "Lorde", id: "3GfOAdcoc3X9zZs2L9e2k" },
    { title: "Somebody Else", artist: "The 1975", id: "3V63xJfbcPqg1bZVX6pG6S" },
    { title: "Cigarette Daydreams", artist: "Cage The Elephant", id: "0nJW01T7XtvILxQgC5J7Wh" }
],

Taurus: [
    { title: "Holocene", artist: "Bon Iver", id: "1RMZbF7HF6bUe2FzBkJAM2" },
    { title: "Youth", artist: "Daughter", id: "6u7jPi22kF8CTQ3rb9DHE7" },
    { title: "Big Jet Plane", artist: "Angus & Julia Stone", id: "1sDvUdNIkMfj0cJmU6uGII" },
    { title: "Pink + White", artist: "Frank Ocean", id: "1eeWjbT0O57jKIt6V8lTW9" },
    { title: "Myth", artist: "Beach House", id: "62Lg5fXXNRh4nEe4dIscT6" },
    { title: "Cherry Wine - Live", artist: "Hozier", id: "1ZMiCix7XSAbfAJlEZWMCp" }
],

Gemini: [
    { title: "Electric Love", artist: "BØRNS", id: "2HaqChIDc5go3qxI6fP3zC" },
    { title: "Feel It Still", artist: "Portugal. The Man", id: "6uBhi9gBXWjanegOb2Phh0" },
    { title: "Youngblood", artist: "5 Seconds of Summer", id: "0tQVa9hxpDkKJ8XwRHmYkb" },
    { title: "Tongue Tied", artist: "Grouplove", id: "2rGznLy1KJGv6rqBIf3f5Z" },
    { title: "Cool Kids", artist: "Echosmith", id: "5Z01UMMf7V1o0MzF86s6WJ" },
    { title: "Everybody Talks", artist: "Neon Trees", id: "2akqRjY5sPntcKQWQj6NoD" }
],

Cancer: [
    { title: "Moon Song", artist: "Phoebe Bridgers", id: "4iJyoBOLtHqaGxP12qzhQI" },
    { title: "Bags", artist: "Clairo", id: "6K4t31amVTZDgR3sKmwUJJ" },
    { title: "The Night We Met", artist: "Lord Huron", id: "6KJqZcs9XDgVck7Lg9QOTC" },
    { title: "Liability", artist: "Lorde", id: "0i5el041vd6nxrGEU8QRxy" },
    { title: "Movement", artist: "Hozier", id: "475yHoKkGi4Hc8Ha4P2j74" },
    { title: "Slow Dancing in the Dark", artist: "Joji", id: "5svwYwJNY0P3V2xW8feF9F" }
],

Leo: [
    { title: "Levitating", artist: "Dua Lipa", id: "463CkQjx2Zk1yXoBuierM9" },
    { title: "Primadonna", artist: "MARINA", id: "0p47TiCVTHrp5rhGsUW2vP" },
    { title: "good 4 u", artist: "Olivia Rodrigo", id: "4ZtFanR9U6ndgddUvNcjcG" },
    { title: "As It Was", artist: "Harry Styles", id: "4LRPiXqCikLlN15c3yImP7" },
    { title: "Style", artist: "Taylor Swift", id: "2dYonQJQG73Y5WQ8IcRIuF" },
    { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", id: "24ySl2hOPGCDcxBxFIqWBu" }
],

Virgo: [
    { title: "august", artist: "Taylor Swift", id: "3hUxzQpSfdDqwM3ZTFQY0K" },
    { title: "Stoned at the Nail Salon", artist: "Lorde", id: "2eWJ5VAQ0mFk53jUREkL3t" },
    { title: "Liability", artist: "Lorde", id: "0i5el041vd6nxrGEU8QRxy" },
    { title: "NFWMB", artist: "Hozier", id: "5VtguS8lZJZPO1UxDz9ED1" },
    { title: "Sunflower, Vol. 6", artist: "Harry Styles", id: "31qVWUdRrlb8thMvts0yYL" },
    { title: "Motion Sickness", artist: "Phoebe Bridgers", id: "4R2kfaDFhslZEMJqAFNpdd" }
],

Libra: [
    { title: "Adore You", artist: "Harry Styles", id: "3jjujdWJ72nww5eGnfs2E7" },
    { title: "Sunset Lover", artist: "Petit Biscuit", id: "6C5sZH0uE7c2WQhmdG1gIb" },
    { title: "Electric Feel", artist: "MGMT", id: "3DjdOld3DI5KO3VXb05f5K" },
    { title: "Ocean Eyes", artist: "Billie Eilish", id: "7hDVYcQq6MxkdJGweuCtl9" },
    { title: "Pretty Girl", artist: "Clairo", id: "1z1Hg7Vb0AhHDiEmnDE79n" },
    { title: "Lights Up", artist: "Harry Styles", id: "0rKtyWc8bvkriBthvHKY8d" }
],

Scorpio: [
    { title: "Wicked Games", artist: "The Weeknd", id: "4PhsKqMdgMEUSstTDAmMpg" },
    { title: "After Dark", artist: "Mr.Kitty", id: "4Sz7Wx8l8RZEL83uP2GNGp" },
    { title: "NFWMB", artist: "Hozier", id: "5VtguS8lZJZPO1UxDz9ED1" },
    { title: "Control", artist: "Halsey", id: "7jcTFNRC1iw5r6jY7jlV2y" },
    { title: "Nightmare", artist: "Halsey", id: "2oaK4vOQ5F2ipRkqWcJ8nS" },
    { title: "Sweater Weather", artist: "The Neighbourhood", id: "2QjOHCTQ1Jl3zawyYOpxh6" }
],

Sagittarius: [
    { title: "Mountain Sound", artist: "Of Monsters and Men", id: "0IktbUcnAGrvD03AWnz3Q8" },
    { title: "Run", artist: "COIN", id: "6FthUImFXiu3KOhxYQ9OIl" },
    { title: "Anna Sun", artist: "WALK THE MOON", id: "4uclRy0P5pRmg7ccJsKb7E" },
    { title: "Way It Goes", artist: "Hippo Campus", id: "2BYqmM7NJeVnpF0a0zY4xC" },
    { title: "Kids", artist: "MGMT", id: "6uRbEeFOoYHj7HkHJq6X2H" },
    { title: "Supercut", artist: "Lorde", id: "0SxFyF6Bxe9YG2YDBfN9zj" }
],

Capricorn: [
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", id: "5XeFesFbtLpXzIVDNQP22n" },
    { title: "Everything In Its Right Place", artist: "Radiohead", id: "2MbdDtCv5LUVjYy9RuGTgC" },
    { title: "You Should See Me in a Crown", artist: "Billie Eilish", id: "5zZJkcFM6QHfFz1ooEZe5J" },
    { title: "Genesis", artist: "Grimes", id: "5H6NQZkdrubguKuIB4zXPM" },
    { title: "Life Itself", artist: "Glass Animals", id: "5PjdY0CKGZdEuoNab3yDmX" },
    { title: "Numb", artist: "Linkin Park", id: "7pKfPomDEeI4TPT6EOYjn9" }
],

Aquarius: [
    { title: "Space Song", artist: "Beach House", id: "6Zf2AnWmYBTt1k8QVO1JmA" },
    { title: "Motion Sickness", artist: "Phoebe Bridgers", id: "4R2kfaDFhslZEMJqAFNpdd" },
    { title: "Pink + White", artist: "Frank Ocean", id: "1eeWjbT0O57jKIt6V8lTW9" },
    { title: "Genesis", artist: "Grimes", id: "5H6NQZkdrubguKuIB4zXPM" },
    { title: "I Follow Rivers", artist: "Lykke Li", id: "5PXV3KixkYILuoZH2g0spR" },
    { title: "Oceans", artist: "Seafret", id: "57nslls6gs3VPBZ8U7Kzu7" }
],

Pisces: [
    { title: "Moon River", artist: "Frank Ocean", id: "4vPeW7JPkFvX4iBegjIzQ" },
    { title: "Night Trouble", artist: "Petit Biscuit", id: "3nlV8mmole02DE3AUUzTQW" },
    { title: "Futile Devices", artist: "Sufjan Stevens", id: "1GKsvUYQ0SB9xiXO0fhyPy" },
    { title: "Only", artist: "Ry X", id: "7i1fAbdvYONxY3Sbt6v8Wg" },
    { title: "Sweet", artist: "Cigarettes After Sex", id: "6zxxzU7wH5QuggIhXHxxSU" },
    { title: "Ivy", artist: "Frank Ocean", id: "2ZWlPOoWh0626oTaHrnl2a" }
]

};





const horoscopes = {
    Aries: "Today wants your boldness, not your fear. Say yes first, think later — the universe is matching your fire.",
    Taurus: "Slow down and receive. Something you’ve been waiting for is finally settling into place.",
    Gemini: "Your mind is sparkling today. Conversations flow, ideas hit, energy is quick.",
    Cancer: "You’re feeling everything — use that intuition. It's guiding you right.",
    Leo: "You’re glowing. Someone can’t stop thinking about you.",
    Virgo: "Clarity is landing. Organize your mind and magic will follow.",
    Libra: "Softness is power today. Harmony returns.",
    Scorpio: "Your magnetism is CRAZY right now. Trust your instincts.",
    Sagittarius: "Adventure energy. Say yes to anything exciting.",
    Capricorn: "You’re building something real. Stay steady, stay soft.",
    Aquarius: "Signs + synchronicities everywhere. Follow the weird.",
    Pisces: "Your dreams are talking to you. Creativity flows strongest."
};



function getRandomSong(sign) {
    const list = songs[sign.replace(/\s+/g, "").trim()];

    return list[Math.floor(Math.random() * list.length)];
}

function animateCassette() {
    const reels = document.querySelectorAll(".reel-left, .reel-right");
    reels.forEach(reel => {
        reel.style.animation = "none";
        void reel.offsetWidth;
        reel.style.animation = "spin 4s linear infinite";
    });
}



const signs = document.querySelectorAll(".sign");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const horoscopeText = document.querySelector(".horoscope-text");

signs.forEach(sign => {
    sign.addEventListener("click", () => {

        const chosen = sign.textContent.replace(/\s+/g, "").trim();

        const song = getRandomSong(chosen);
        animateCassette();

        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        horoscopeText.textContent = horoscopes[chosen];

        const frame = document.querySelector(".preview-frame");

        frame.src = "about:blank";
        setTimeout(() => {
            frame.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator&theme=0`;
        }, 80);
    });
});
