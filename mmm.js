
const songs = {
    Aries: [
        { title: "27", artist: "Taylor Swift", id: "4OAuvHryIVv4kMDNSLuPt6" },
        { title: "4", artist: "The Neighbourhood", id: "5E30LdtzQTGqRvNd7l6kG5" },
        { title: "18", artist: "Tracy Chapman", id: "2M9ro2krNb7nr7HSprkEgo" },
        { title: "21", artist: "Stromae", id: "2GYHyAoLWpkxLVa4oYTVko" },
        { title: "24", artist: "Leona Lewis", id: "7wZUrN8oemZfsEd1CGkbXE" },
        { title: "10", artist: "Red Hot Chili Peppers", id: "3d9DChrdc6BOeFsbrZ3Is0" },
        { title: "11", artist: "Jazmine Sullivan", id: "56z2qI0gKcPthQF6l8AW3E" },
        { title: "3", artist: "Fergie", id: "50xeLNGKmskmYUSINhqvfa" },
        { title: "1", artist: "LION BABE", id: "3XRosKfSgFSDIb6YVpApIl" },
        { title: "5", artist: "Lady Gaga", id: "0QkWikH5Z3U0f79T9iuF6c" }
    ],

    Taurus: [
        { title: "49", artist: "Megan Thee Stallion", id: "3YEbLhXRDPTtctnb3ddg8g" },
        { title: "9", artist: "Frank Ocean", id: "6Nle9hKrkL1wQpwNfEkxjh" },
        { title: "46", artist: "Ella Mai", id: "5XqDJFVCyRTm5J7cIfRmR1" },
        { title: "10", artist: "Troye Sivan", id: "3afkJSKX0EAMsJXTZnDXXJ" },
        { title: "36", artist: "maye", id: "1jecO8NeYLsVWVptITz4c1" },
        { title: "16", artist: "Rihanna", id: "7BiELrM90hRxpozaIXbsLw" },
        { title: "47", artist: "Kehlani", id: "5QTdOvIF2ehBMZpSIIGzIo" },
        { title: "23", artist: "Bad Bunny", id: "2OWVCFTolecLiGZPquvWvT" },
        { title: "17", artist: "Lana Del Rey", id: "3lG6OtGDsYAOALxEmubQQm" },
        { title: "12", artist: "Ariana Grande", id: "4kV4N9D1iKVxx1KLvtTpjS" }
    ],

    Gemini: [
        { title: "31", artist: "Doja Cat", id: "0hquQWY3xvYqN4qtiquniF" },
        { title: "42", artist: "J. Cole", id: "5gFoAVTN9YlM9uJCrFZtgl" },
        { title: "49", artist: "Faith Evans", id: "7MQywXGHEev7JmwwIzMcao" },
        { title: "46", artist: "Keyshia Cole", id: "2RqZFOLOnzVmHUX7ZMcaES" },
        { title: "45", artist: "Snoh Aalegra", id: "2gjidmxtA1pyj2HYrdOTG1" },
        { title: "43", artist: "Kiiara", id: "7yNX3ZFBWZoR52pbeU4Mcl" },
        { title: "40", artist: "Mac Miller", id: "16umSNZfofRpDqTvf8DIAo" },
        { title: "8", artist: "Lenny Kravitz", id: "6VnpKLtfNH4Dk09YSGPSyR" },
        { title: "6", artist: "Kendrick Lamar", id: "6IZvVAP7VPPnsGX6bvgkqg" },
        { title: "48", artist: "ROLE MODEL", id: "6gKCztJf6T1hpXdWcFk8KB" }
    ],

    Cancer: [
        { title: "48", artist: "Ariana Grande", id: "5YeHLHDdQ4nKHk81XFWhCU" },
        { title: "40", artist: "6LACK", id: "4AtZRwSR8BOTTQg5ihSggt" },
        { title: "38", artist: "Teyana Taylor", id: "3nXrCAE44KlevAkQB2XWcN" },
        { title: "32", artist: "Sade", id: "4J7s7j5ulwElPG7HaGQDXR" },
        { title: "15", artist: "Cyndi Lauper", id: "7o9uu2GDtVDr9nsR7ZRN73" },
        { title: "33", artist: "K.Flay", id: "1qwno7xb5mJe71xtMS6jl2" },
        { title: "30", artist: "Santana", id: "2pX4FpOgwItRVPPUFdRcxA" },
        { title: "46", artist: "Solange", id: "48EjSdYh8wz2gBxxqzrsLe" },
        { title: "43", artist: "Sky Ferreira", id: "70v5mCvyPRquTyU7qTIU81" },
        { title: "18", artist: "M.I.A.", id: "1ixbwbeBi5ufN4noUKmW5a" }
    ],

    Leo: [
        { title: "11", artist: "Ariana Grande", id: "142PiXzA84lmEw2RstFHFa" },
        { title: "14", artist: "Whitney Houston", id: "2tUBqZG2AbRi7Q0BIrVrEj" },
        { title: "22", artist: "Eve", id: "3RmKpob8xzv1pzHEQrMJah" },
        { title: "8", artist: "Jennifer Lopez", id: "3C0nOe05EIt1390bVABLyN" },
        { title: "3", artist: "MARINA", id: "02b5L9jExmkRTdUTqXFzmR" },
        { title: "18", artist: "50 Cent", id: "70FCugJxa7XW04Np6iYJdI" },
        { title: "29", artist: "Tame Impala", id: "6qZjm61s6u8Ead9sWxCDro" },
        { title: "30", artist: "Lil Uzi Vert", id: "0FA4wrjDJvJTTU8AepZTup" },
        { title: "13", artist: "Mariah Carey", id: "5EGPf0nqO7vEIwsOX6Er98" },
        { title: "16", artist: "Sidekick", id: "2q4rjDy9WhaN3o9MvDbO21" }
    ],

    Virgo: [
        { title: "24", artist: "P!nk", id: "0JiY190vktuhSGN6aqJdrt" },
        { title: "21", artist: "Otis Redding", id: "3zBhihYUHBmGd2bcQIobrF" },
        { title: "4", artist: "Brent Faiyaz", id: "0oufSLnKQDoBFX5mgkDCgR" },
        { title: "15", artist: "Daft Punk", id: "2cGxRwrMyEAp8dEbuZaVv6" },
        { title: "8", artist: "Mark Ronson", id: "32OlwWuMpZ6b0aN2RZOeMS" },
        { title: "9", artist: "Cassie", id: "7k6IzwMGpxnRghE7YosnXT" },
        { title: "18", artist: "Metro Boomin", id: "0vjeOZ3Ft5jvAi9SBFJm1j" },
        { title: "26", artist: "Lauren Daigle", id: "6Up545NUflOiXo8cEraH49" },
        { title: "1", artist: "Beyoncé", id: "0Fl4eWzVaMUOdXcOrj6F1q" },
        { title: "27", artist: "Kygo", id: "5masKPHeAOVNgxdLebIcK7" }
    ]
};
// ===== CONTINUED (Scorpio → Pisces) =====

const moreSongs = {

    Scorpio: [
        { title: "3", artist: "Frank Ocean", id: "4osgfFTICMkcGbbigdsa53" },
        { title: "7", artist: "EARTHGANG", id: "1KyXCd04yHni5pMGFwgzuE" },
        { title: "15", artist: "Billie Eilish", id: "3XF5xLJHOQQRbWya6hBp7d" },
        { title: "5", artist: "WILLOW", id: "1jVjOcs7QeQZJXScbqvofI" },
        { title: "17", artist: "Warren G", id: "7nYvUtkQMx1v80S2FH2s9J" },
        { title: "4", artist: "The Weeknd", id: "7fBv7CLKzipRk6EC6TWHOB" },
        { title: "1", artist: "Ariana Grande", id: "5J4ZkQpzMUFojo1CtAZYpn" },
        { title: "24", artist: "Ella Mai", id: "0At2qAoaVjIwWNAqrscXli" },
        { title: "13", artist: "Drake", id: "3CA9pLiwRIGtUBiMjbZmRw" },
        { title: "16", artist: "Ariana Grande", id: "4kV4N9D1iKVxx1KLvtTpjS" }
    ],

    Sagittarius: [
        { title: "68", artist: "BROCKHAMPTON", id: "6U0FIYXCQ3TGrk4tFpLrEA" },
        { title: "42", artist: "Sabrina Carpenter", id: "5N3hjp1WNayUPZrA8kJmJP" },
        { title: "64", artist: "Drake", id: "2aSC2xhRxOLiiZZVjhbylH" },
        { title: "77", artist: "SZA", id: "5fQBa4wkmq28xpSLOQ202K" },
        { title: "44", artist: "Olivia Rodrigo", id: "6HU7h9RYOaPRFeh0R3UeAr" },
        { title: "79", artist: "SZA", id: "06u5LrUpbosQlQ1QJFhPpG" },
        { title: "43", artist: "Tate McRae", id: "5BLxf0dPOTKMFFgUEp8M6T" },
        { title: "39", artist: "Miley Cyrus", id: "5AnCLGg35ziFOloEnXK4uu" },
        { title: "74", artist: "Lana Del Rey", id: "4jZWeEaLCnwYtLnVEN6BYV" },
        { title: "78", artist: "Frank Ocean", id: "5GUYJTQap5F3RDQiCOJhrS" }
    ],

    Capricorn: [
        { title: "27", artist: "MARINA", id: "4sOX1nhpKwFWPvoMMExi3q" },
        { title: "25", artist: "Amaarae", id: "09gysnJpfQ3ublBmJDfcEC" },
        { title: "17", artist: "Elvis Presley", id: "44AyOl4qVkzS48vBsbNXaC" },
        { title: "28", artist: "Amy Winehouse", id: "30FURVTCpbKyykjSEQzGkH" },
        { title: "26", artist: "Kid Cudi", id: "393MDhe62s8hbH8ETrlxe5" },
        { title: "22", artist: "Alessia Cara", id: "5zUQZjVB6bfewBXWqsP9PY" },
        { title: "9", artist: "Tyler, The Creator", id: "5hVghJ4KaYES3BFUATCYn0" },
        { title: "30", artist: "Labrinth", id: "6N22FZs2ZhPBYi3b9XPajV" },
        { title: "11", artist: "Brent Faiyaz", id: "2IlT65thKQQw248mhk2PjQ" },
        { title: "13", artist: "Ariana Grande", id: "6ocbgoVGwYJhOv1GgI9NsF" }
    ],

    Aquarius: [
        { title: "6", artist: "Frank Ocean", id: "7DfFc7a6Rwfi3YQMRbDMau" },
        { title: "17", artist: "Shakira", id: "2lnzGkdtDj5mtlcOW2yRtG" },
        { title: "8", artist: "XXXTENTACION", id: "0JP9xo3adEtGSdUEISiszL" },
        { title: "16", artist: "Drake", id: "047fCsbO4NdmwCBn8pcUXl" },
        { title: "26", artist: "Mac Miller", id: "2hwOoMtWPtTSSn6WHV7Vp5" },
        { title: "3", artist: "The 5th Dimension", id: "0HZlND4giwzgolBpaNIRGV" },
        { title: "1", artist: "Tinashe", id: "1y4qUmdo0DTgKC5OME5zie" },
        { title: "21", artist: "Lilly Wood and The Prick", id: "5fnA9mkIfScSqHIpeDyvck" },
        { title: "35", artist: "Destiny's Child", id: "69XUpOpjzDKcfdxqZebGiI" },
        { title: "33", artist: "SiR", id: "0wY9rA9fJkuESyYm9uzVK5" }
    ],

    Pisces: [
        { title: "24", artist: "Lykke Li", id: "4Jv7lweGIUOFQ7Oq2AtAh9" },
        { title: "36", artist: "Cocteau Twins", id: "7vPHiwgCOAjSBRjAirbMvS" },
        { title: "14", artist: "Frank Ocean", id: "41cpvQ2GyGb2BRdIRSsTqK" },
        { title: "44", artist: "Billie Eilish", id: "6NOq79ynBpBi6BSJMdgReN" },
        { title: "25", artist: "Grimes", id: "3LGsgpx4TfxhXbr07OFKqs" },
        { title: "31", artist: "Ja Rule", id: "2iclfHORMqpR3TxuhwVRhD" },
        { title: "12", artist: "Tyler, The Creator", id: "0fv2KH6hac06J86hBUTcSf" },
        { title: "15", artist: "Tame Impala", id: "0xtIp0lgccN85GfGOekS5L" },
        { title: "13", artist: "Beach House", id: "7H0ya83CMmgFcOhw0UB6ow" },
        { title: "35", artist: "Rihanna", id: "6RtzmszGXs32TRhv5zTKNM" }
    ]
};


Object.assign(songs, moreSongs);

const horoscopes = {
    Aries: "Today wants your boldness, not your fear.",
    Taurus: "Slow down and receive. Something you've been waiting for finally settles.",
    Gemini: "Your mind is electric — follow the spark.",
    Cancer: "Let softness carry you. Your intuition is louder today.",
    Leo: "Your presence is the main character moment.",
    Virgo: "Clarity is arriving — let it shift your plans.",
    Libra: "Your heart wants harmony — choose balance over noise.",
    Scorpio: "Transformation is already happening beneath the surface.",
    Sagittarius: "Adventure calls — say yes before you overthink.",
    Capricorn: "Your discipline is paying off in divine timing.",
    Aquarius: "Your weird is your magic — don’t water it down.",
    Pisces: "Your dreams are messages — listen deeper."
};

function playSign(sign) {
    const list = songs[sign];
    const random = list[Math.floor(Math.random() * list.length)];

    document.getElementById("songTitle").innerText = random.title;
    document.getElementById("songArtist").innerText = random.artist;

    document.getElementById("listenLink").href =
        `https://open.spotify.com/track/${random.id}`;

    document.getElementById("albumArt").src = "vinyl.jpeg";

    document.getElementById("horoscopeText").innerText =
        horoscopes[sign];
}

document.querySelectorAll(".sign-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        playSign(btn.dataset.sign);
    });
});

