

const songs = {

Aries: [
    { title: "Midnight City", artist: "M83", id: "2Tak5K6k4tuj5pzpRibZBz" },
    { title: "Somebody Else", artist: "The 1975", id: "3V63xJfbcPqg1bZVX6pG6S" },
    { title: "Don't Delete the Kisses", artist: "Wolf Alice", id: "1XnluFBeYFE7Phh9xN5Tkb" },
    { title: "Team", artist: "Lorde", id: "3GfOAdcoc3X9j9Zs2L9e2k" },
    { title: "Young Folks", artist: "Peter Bjorn and John", id: "3uUuGVFu1V7jTQL60S1r8z" },
    { title: "Sit Next to Me", artist: "Foster The People", id: "1IHWl5LamUGEuP4ozKQSXZ" },
    { title: "Mystery of Love", artist: "Sufjan Stevens", id: "7Dt1p2v5BvEGQf1O8a3eVr" },
    { title: "Electric Feel", artist: "MGMT", id: "3DjdOld3DI5KO3VXb05f5K" },
    { title: "Stolen Dance", artist: "Milky Chance", id: "5MnCrW14zx1KOtS0n7a84K" },
    { title: "Robbers", artist: "The 1975", id: "5XhnMwGpzZEV3V8lsiZ4F4" },
    { title: "Left Hand Free", artist: "alt-J", id: "3C5kXJahTEpX6Uxc6kU9Dw" },
    { title: "Out of My League", artist: "Fitz and The Tantrums", id: "5x0j2eM7yVbQXxOXKXomVy" },
    { title: "Kids", artist: "MGMT", id: "6uRbEeFOoYHj7HkHJq6X2H" },
    { title: "Cigarette Daydreams", artist: "Cage The Elephant", id: "0nJW01T7XtvILxQgC5J7Wh" },
    { title: "Space Song", artist: "Beach House", id: "6Zf2AnWmYBTt1k8QVO1JmA" }
],

Taurus: [
    { title: "Breezeblocks", artist: "alt-J", id: "2nLtzopw4rPReszdYBJU6h" },
    { title: "Holocene", artist: "Bon Iver", id: "61YJ1Z4W5TjnpvRsYKR0KO" },
    { title: "Sweet Disposition", artist: "The Temper Trap", id: "7F6xPqyaE8vKebwsqZQY5z" },
    { title: "Youth", artist: "Daughter", id: "6u7jPi22kF8CTQ3rb9DHE7" },
    { title: "Big Jet Plane", artist: "Angus & Julia Stone", id: "1sDvUdNIkMfj0cJmU6uGII" },
    { title: "Retrograde", artist: "James Blake", id: "0SxFyF6Bxe9YG2YDBfN9zj" },
    { title: "Ocean Breathes Salty", artist: "Modest Mouse", id: "4w1itp4qvHDX9kFZadRPr1" },
    { title: "Cherry Wine - Live", artist: "Hozier", id: "1ZMiCix7XSAbfAJlEZWMCp" },
    { title: "Heartbeats", artist: "José González", id: "1iMb465TRH6NNFQEUaJ4aQ" },
    { title: "Someone New", artist: "Hozier", id: "0wrRRfQ6q0WBGqlaSbjqg7" },
    { title: "Moon", artist: "Kid Francescoli", id: "4kKdv8sjVeoQfizKx8qEIq" },
    { title: "Pink + White", artist: "Frank Ocean", id: "1eeWjbT0O57jKIt6V8lTW9" },
    { title: "Left Hand Free", artist: "alt-J", id: "3C5kXJahTEpX6Uxc6kU9Dw" },
    { title: "Stay With Me", artist: "Sam Smith", id: "3zwjJc33jQB8MGx1OE3h5c" },
    { title: "Stolen Dance", artist: "Milky Chance", id: "7wcNQYhUfU1n5WJTDd0Kle" }
],

Gemini: [
    { title: "Dog Days Are Over", artist: "Florence + The Machine", id: "1YLWkGNzH0K0FqjU8zuw1C" },
    { title: "Sex on Fire", artist: "Kings of Leon", id: "0ntQJM78wzOLVeCUAW7Y45" },
    { title: "The Less I Know the Better", artist: "Tame Impala", id: "58q2HKrzhC3ozto2nDdN4z" },
    { title: "Electric Love", artist: "BØRNS", id: "2HaqChIDc5go3qxI6fP3zC" },
    { title: "Youngblood", artist: "5 Seconds of Summer", id: "0tQVa9hxpDkKJ8XwRHmYkb" },
    { title: "Pumped Up Kicks", artist: "Foster The People", id: "7w87IxuO7BDcJ3YUqCyMTT" },
    { title: "Heroes (we could be)", artist: "Alesso, Tove Lo", id: "3YkW2UKyX7L7NVHsxrsQbS" },
    { title: "Feel It Still", artist: "Portugal. The Man", id: "6uBhi9gBXWjanegOb2Phh0" },
    { title: "Hideaway", artist: "Kiesza", id: "43zdsphuZLzwA9k4DJhRIe" },
    { title: "Cool Kids", artist: "Echosmith", id: "5Z01UMMf7V1o0MzF86s6WJ" },
    { title: "Tongue Tied", artist: "Grouplove", id: "2rGznLy1KJGv6rqBIf3f5Z" },
    { title: "Love Like This", artist: "Kodaline", id: "5zJPmZEse2fTpvDqjnb4fp" },
    { title: "Something to Believe In", artist: "Young the Giant", id: "4VPmIYBXYZzJRKB6H7q2mC" },
    { title: "Shut Up and Dance", artist: "WALK THE MOON", id: "3d8y0t70gOXJd4W1h9YyLZ" },
    { title: "Everybody Talks", artist: "Neon Trees", id: "2akqRjY5sPntcKQWQj6NoD" }
],

Cancer: [
    { title: "Moon Song", artist: "Phoebe Bridgers", id: "4iJyoBOLtHqaGxP12qzhQI" },
    { title: "I Know The End", artist: "Phoebe Bridgers", id: "5wANPM4fQCJwkGd4rN57mH" },
    { title: "Bags", artist: "Clairo", id: "6K4t31amVTZDgR3sKmwUJJ" },
    { title: "Liability", artist: "Lorde", id: "0i5el041vd6nxrGEU8QRxy" },
    { title: "The Night We Met", artist: "Lord Huron", id: "6KJqZcs9XDgVck7Lg9QOTC" },
    { title: "Burning", artist: "Maggie Rogers", id: "7B2j2gS72r2A8M9txGknkV" },
    { title: "Dreams", artist: "Fleetwood Mac", id: "0ofHAoxe9vBkTCp2UQIavz" },
    { title: "Ribs", artist: "Lorde", id: "70xrH0wY1culJg2m933Ljm" },
    { title: "Myth", artist: "Beach House", id: "62Lg5fXXNRh4nEe4dIscT6" },
    { title: "Ivy", artist: "Frank Ocean", id: "2ZWlPOoWh0626oTaHrnl2a" },
    { title: "Love In The Dark", artist: "Adele", id: "4cG7HUWYHBV6R6tHn1gxrl" },
    { title: "Movement", artist: "Hozier", id: "475yHoKkGi4Hc8Ha4P2j74" },
    { title: "Slow Dancing in the Dark", artist: "Joji", id: "5svwYwJNY0P3V2xW8feF9F" },
    { title: "Hard Feelings/Loveless", artist: "Lorde", id: "2xLMifQCjDGFmkHkpNLD9h" },
    { title: "Fleeting", artist: "Polly Pigeon", id: "52TgFkBXorr9SEL7NdKQFY" }
],

Leo: [
    { title: "good 4 u", artist: "Olivia Rodrigo", id: "4ZtFanR9U6ndgddUvNcjcG" },
    { title: "Levitating", artist: "Dua Lipa", id: "463CkQjx2Zk1yXoBuierM9" },
    { title: "Woman", artist: "Doja Cat", id: "6Uj1ctrBOjOas8xZXGqKk4" },
    { title: "Style", artist: "Taylor Swift", id: "0LdDt0xCz7zZs6A3LOzRd6" },
    { title: "Don't Start Now", artist: "Dua Lipa", id: "3PfIrDoz19wz7qK7tYeu62" },
    { title: "As It Was", artist: "Harry Styles", id: "4LRPiXqCikLlN15c3yImP7" },
    { title: "Closer", artist: "Tegan and Sara", id: "6M2wZ9GZgrQ7QwJeJDhA7p" },
    { title: "Physical", artist: "Dua Lipa", id: "1d6Rj4Lx0oCmkqV2kuZr3p" },
    { title: "Miss You", artist: "Oliver Tree & Robin Schulz", id: "4eX0jyCY09j6bF6P9MbEck" },
    { title: "Narcissist", artist: "Baby Queen", id: "3xCz7kYx8RJWb1x1o1t4bm" },
    { title: "Shut Up and Drive", artist: "Rihanna", id: "4WjH9Bzt3kx7z8kl0awxh4" },
    { title: "Primadonna", artist: "MARINA", id: "0p47TiCVTHrp5rhGsUW2vP" },
    { title: "Starstruck", artist: "Years & Years", id: "1nOAEEioatgY58kmtG2n0m" },
    { title: "Rain On Me", artist: "Lady Gaga, Ariana Grande", id: "24ySl2hOPGCDcxBxFIqWBu" },
    { title: "Midnight Sky", artist: "Miley Cyrus", id: "3GCL1jtCwURx7pTr1fAOSP" }
],

Virgo: [
    { title: "borderline", artist: "Tame Impala", id: "6s7nTy49K5fFz4VUu2hT3q" },
    { title: "august", artist: "Taylor Swift", id: "3hUxzQpSfdDqwM3ZTFQY0K" },
    { title: "Ribs", artist: "Lorde", id: "70xrH0wY1culJg2m933Ljm" },
    { title: "Hard Times", artist: "Paramore", id: "7K2wTIn5rzA9x6UPkT80fX" },
    { title: "Nights", artist: "Frank Ocean", id: "7CucpCq7CSDmo273eBgVvj" },
    { title: "Cherry", artist: "Harry Styles", id: "5UZtYA2zCxrVRbLurPpllK" },
    { title: "Stoned at the Nail Salon", artist: "Lorde", id: "2eWJ5VAQ0mFk53jUREkL3t" },
    { title: "Lost", artist: "Frank Ocean", id: "0U0ldCRmgCqhVvD6ksG63j" },
    { title: "Drew Barrymore", artist: "SZA", id: "3Cv4eVv2XSpdK2KyH6lC5R" },
    { title: "Liability", artist: "Lorde", id: "0i5el041vd6nxrGEU8QRxy" },
    { title: "Sunflower, Vol. 6", artist: "Harry Styles", id: "31qVWUdRrlb8thMvts0yYL" },
    { title: "NFWMB", artist: "Hozier", id: "5VtguS8lZJZPO1UxDz9ED1" },
    { title: "SLOW DANCING IN THE DARK", artist: "Joji", id: "5svwYwJNY0P3V2xW8feF9F" },
    { title: "Solo", artist: "Frank Ocean", id: "7ygpwy2qP3Nbrwlt5K7dW0" },
    { title: "The Louvre", artist: "Lorde", id: "2HB9YvP8U3hG5XzbX4J4hO" }
],

Libra: [
    { title: "Adore You", artist: "Harry Styles", id: "3jjujdWJ72nww5eGnfs2E7" },
    { title: "Electric Feel", artist: "MGMT", id: "3DjdOld3DI5KO3VXb05f5K" },
    { title: "Sunflower", artist: "Post Malone", id: "3i6jGTyflR3ymN5HQ2yTTp" },
    { title: "Lover", artist: "Taylor Swift", id: "1dGr1c8CrMLDpV6mPbImSI" },
    { title: "Pretty Girl", artist: "Clairo", id: "1z1Hg7Vb0AhHDiEmnDE79n" },
    { title: "Finesse", artist: "Bruno Mars", id: "5hTpBe8h35rJ67eAWHQsJx" },
    { title: "Electric", artist: "Alina Baraz", id: "0CKa42Jqrc9fSFbDjePaB5" },
    { title: "ILY", artist: "Surf Mesa", id: "6IcEJYB7qtLz2mqB0GM6zB" },
    { title: "Golden Hour", artist: "Kacey Musgraves", id: "19ovxdo05NfSy8W3Gh00Wj" },
    { title: "B.O.M.D.", artist: "Clairo", id: "3EyoAXYHOkWWz465tqBI6V" },
    { title: "Sunset Lover", artist: "Petit Biscuit", id: "6C5sZH0uE7c2WQhmdG1gIb" },
    { title: "Lights Up", artist: "Harry Styles", id: "0rKtyWc8bvkriBthvHKY8d" },
    { title: "Linger", artist: "The Cranberries", id: "2N3FfWzj7ShKkC0gC07DAY" },
    { title: "Supalonely", artist: "BENEE", id: "4nK5YrxbMGZstTLbvj6Gxw" },
    { title: "Girls Like You", artist: "Maroon 5", id: "6f3Slt0GbA2bPZlz0aIFXN" }
],

Scorpio: [
    { title: "Wicked Games", artist: "The Weeknd", id: "4PhsKqMdgMEUSstTDAmMpg" },
    { title: "NFWMB", artist: "Hozier", id: "5VtguS8lZJZPO1UxDz9ED1" },
    { title: "Control", artist: "Halsey", id: "7jcTFNRC1iw5r6jY7jlV2y" },
    { title: "My Boy", artist: "Billie Eilish", id: "7fSQd3hzVbYkZvX3bZLpmf" },
    { title: "bury a friend", artist: "Billie Eilish", id: "2Fxmhks0bxGSBdJ92vM42m" },
    { title: "House of the Rising Sun", artist: "Lauren O’Connell", id: "5dJYQ7ThksfdqSwjP58JgY" },
    { title: "Dirty Immaculate", artist: "Kilo Kish", id: "5vOfcLY9JkYDEoZSPoaqeG" },
    { title: "Sweater Weather", artist: "The Neighbourhood", id: "2QjOHCTQ1Jl3zawyYOpxh6" },
    { title: "E.V.O.L.", artist: "MARINA", id: "6j0HJZI4ZjrYkjpQAHBoVH" },
    { title: "Lost", artist: "Frank Ocean", id: "0U0ldCRmgCqhVvD6ksG63j" },
    { title: "After Dark", artist: "Mr.Kitty", id: "4Sz7Wx8l8RZEL83uP2GNGp" },
    { title: "Nightmare", artist: "Halsey", id: "2oaK4vOQ5F2ipRkqWcJ8nS" },
    { title: "Wait", artist: "M83", id: "0PwYTKQbkv6JDHtrpdoN6E" },
    { title: "Control", artist: "Zoe Wees", id: "2pjd2p366Q2D3MdnB6h6sa" },
    { title: "Lie", artist: "NF", id: "5u1nH8t1Des1jbL4LtL1P3" }
],

Sagittarius: [
    { title: "Midnight City", artist: "M83", id: "2tak5K6k4tuj5pzpRibZBz" },
    { title: "Electric Feel", artist: "MGMT", id: "3DjdOld3DI5KO3VXb05f5K" },
    { title: "Out Of My League", artist: "Fitz and The Tantrums", id: "5x0j2eM7yVbQXxOXKXomVy" },
    { title: "Young Folks", artist: "Peter Bjorn and John", id: "3uUuGVFu1V7jTQL60S1r8z" },
    { title: "Shark Attack", artist: "GROUPLOVE", id: "3UJ8loPsrLj9O2U9Ho4VaR" },
    { title: "Lost", artist: "Frank Ocean", id: "0U0ldCRmgCqhVvD6ksG63j" },
    { title: "Sedona", artist: "Houndmouth", id: "4pKZJqV6t6yYwHBlZGSy1u" },
    { title: "Tongue Tied", artist: "Grouplove", id: "2aJHGpazYV46m5qK4WgZqY" },
    { title: "Mountain Sound", artist: "Of Monsters and Men", id: "0IktbUcnAGrvD03AWnz3Q8" },
    { title: "Shut Up and Dance", artist: "WALK THE MOON", id: "3d8y0t70gOXJd4W1h9YyLZ" },
    { title: "Run", artist: "COIN", id: "6FthUImFXiu3KOhxYQ9OIl" },
    { title: "Robbers", artist: "The 1975", id: "5XhnMwGpzZEV3V8lsiZ4F4" },
    { title: "Stolen Dance", artist: "Milky Chance", id: "5MnCrW14zx1KOtS0n7a84K" },
    { title: "Kids", artist: "MGMT", id: "6uRbEeFOoYHj7HkHJq6X2H" },
    { title: "Anna Sun", artist: "WALK THE MOON", id: "4uclRy0P5pRmg7ccJsKb7E" }
],

Capricorn: [
    { title: "Everything In Its Right Place", artist: "Radiohead", id: "2MbdDtCv5LUVjYy9RuGTgC" },
    { title: "Numb", artist: "Linkin Park", id: "7pKfPomDEeI4TPT6EOYjn9" },
    { title: "bury a friend", artist: "Billie Eilish", id: "2Fxmhks0bxGSBdJ92vM42m" },
    { title: "The Adults Are Talking", artist: "The Strokes", id: "7nF9nO3gU8ORgkFZtFNKJc" },
    { title: "Control", artist: "Halsey", id: "7jcTFNRC1iw5r6jY7jlV2y" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", id: "5XeFesFbtLpXzIVDNQP22n" },
    { title: "You Should See Me in a Crown", artist: "Billie Eilish", id: "1nkjU7Wc6y3Tq4Mk4L7K4Z" },
    { title: "The Less I Know the Better", artist: "Tame Impala", id: "58q2HKrzhC3ozto2nDdN4z" },
    { title: "My Tears Are Becoming a Sea", artist: "M83", id: "5o5ByAS8ZCzqs5VntQburn" },
    { title: "R U Mine?", artist: "Arctic Monkeys", id: "2AT8iROs4FQueDv2c8q2KE" },
    { title: "Life Itself", artist: "Glass Animals", id: "5PjdY0CKGZdEuoNab3yDmX" },
    { title: "Oblivion", artist: "Grimes", id: "4wC9a1TtuipC2NRbUdThrn" },
    { title: "Breezeblocks", artist: "alt-J", id: "2nLtzopw4rPReszdYBJU6h" },
    { title: "Bad Habit", artist: "Steve Lacy", id: "4k6Uh1HXdhtLKeophtWZZw" },
    { title: "Genesis", artist: "Grimes", id: "5H6NQZkdrubguKuIB4zXPM" }
],

Aquarius: [
    { title: "Space Song", artist: "Beach House", id: "6Zf2AnWmYBTt1k8QVO1JmA" },
    { title: "Pink + White", artist: "Frank Ocean", id: "1eeWjbT0O57jKIt6V8lTW9" },
    { title: "Nights", artist: "Frank Ocean", id: "7CucpCq7CSDmo273eBgVvj" },
    { title: "Motion Sickness", artist: "Phoebe Bridgers", id: "4R2kfaDFhslZEMJqAFNpdd" },
    { title: "Oblivion", artist: "Grimes", id: "5mWJwczJsRkP2pxq6SJKxM" },
    { title: "Love Galore", artist: "SZA", id: "7GjVWG39IOjQ1nqHvgz9Fj" },
    { title: "Genesis", artist: "Grimes", id: "5H6NQZkdrubguKuIB4zXPM" },
    { title: "After the Storm", artist: "Kali Uchis", id: "4Oq5vV9fA7kJitgvDNlZcO" },
    { title: "Video Girl", artist: "FKA twigs", id: "3RZQtp7tC6YMTDULG7U5zN" },
    { title: "Motion", artist: "Khalid", id: "1ncOu4EyDNp5cSqvOWGZSN" },
    { title: "Borderline", artist: "Tame Impala", id: "6s7nTy49K5fFz4VUu2hT3q" },
    { title: "Space Oddity", artist: "David Bowie", id: "1w3W7UpQ6MVobSA8g9wMwI" },
    { title: "I Follow Rivers", artist: "Lykke Li", id: "5PXV3KixkYILuoZH2g0spR" },
    { title: "Sunflower, Vol. 6", artist: "Harry Styles", id: "31qVWUdRrlb8thMvts0yYL" },
    { title: "The Other Side of Paradise", artist: "Glass Animals", id: "5Ij173RkDvVqW2ltsnqR2T" }
],

Pisces: [
    { title: "Night Trouble", artist: "Petit Biscuit", id: "3nlV8mmole02DE3AUUzTQW" },
    { title: "I Know", artist: "King Princess", id: "0CfCXiFzWu9jz9K2BEMn3E" },
    { title: "Space Song", artist: "Beach House", id: "6Zf2AnWmYBTt1k8QVO1JmA" },
    { title: "Moon River", artist: "Frank Ocean", id: "4vPeW7JPkFvX4iBegjIz" },
    { title: "Myth", artist: "Beach House", id: "62Lg5fXXNRh4nEe4dIscT6" },
    { title: "Futile Devices", artist: "Sufjan Stevens", id: "1GKsvUYQ0SB9xiXO0fhyPy" },
    { title: "Only", artist: "Ry X", id: "7i1fAbdvYONxY3Sbt6v8Wg" },
    { title: "Liability", artist: "Lorde", id: "0i5el041vd6nxrGEU8QRxy" },
    { title: "To Build A Home", artist: "The Cinematic Orchestra", id: "2vwlzO0Qp8kfEtzTsCXfyE" },
    { title: "Movement", artist: "Hozier", id: "475yHoKkGi4Hc8Ha4P2j74" },
    { title: "Ivy", artist: "Frank Ocean", id: "2ZWlPOoWh0626oTaHrnl2a" },
    { title: "Sweet", artist: "Cigarettes After Sex", id: "6zxxzU7wH5QuggIhXHxxSU" },
    { title: "Youth", artist: "Daughter", id: "6u7jPi22kF8CTQ3rb9DHE7" },
    { title: "Moonlight on the River", artist: "Mac DeMarco", id: "5pez3eGbN9df06g7o3pb7N" },
    { title: "Talia", artist: "King Princess", id: "6974NIDNBmIooqVxWMQ0zp" }
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
    const list = songs[sign];
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
        const chosen = sign.textContent.trim();
        const song = getRandomSong(chosen);

        animateCassette();

        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        horoscopeText.textContent = horoscopes[chosen];
    });
});
