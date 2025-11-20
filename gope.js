window.onload = function() {

    const spinSection = document.getElementById("spinWheelSection");
    const output = document.getElementById("output");  
    const picker = document.getElementById("picker");

    const secretMessages = {
        "Jem": "Don't be too harsh on yourself, Jem. You'll get thru this hmm?",
        "jem": "Thank you for not giving up, smol.",
        "JEM": "So proud of you, Bading!",
        "Puring": "Honestly, I'm surprised that you used this Nickname, but I'm glad you did. Know that even if today feels heavy, remember you've survived every hard day before, and you'll get through this too.",
        "puring": "Honestly, I'm surprised that you used this Nickname, but I'm glad you did. Know that even if today feels heavy, remember you've survived every hard day before, and you'll get through this too.",
        "PURING": "Honestly, I'm surprised that you used this Nickname, but I'm glad you did. Know that even if today feels heavy, remember you've survived every hard day before, and you'll get through this too.",
        "mej": "I don't know if I have the right to say this, but I'm glad you exist. And I hope today is kind to you",
        "Mej": "I don't know if I have the right to say this, but I'm glad you exist. And I hope today is kind to you",
        "MEJ": "I don't know if I have the right to say this, but I'm glad you exist. And I hope today is kind to you",
        "Casurog": "Hey Casurog, remember to take breaks and care for yourself. You're doing great!"
    };
    const songs = [
        { title: "So Easy – Olivia Dean", embed: "https://open.spotify.com/track/6sGIMrtIzQjdzNndVxe397" },
        { title: "Ribs – Lorde", embed: "https://open.spotify.com/track/2MvvoeRt8NcOXWESkxWn3g?si=WYnhng2VSuOcQYwzziQK9g" },
        { title: "Hey Look Ma, I Made It – Panic! At The Disco", embed: "https://open.spotify.com/track/22oEJW6r2rMb9z4IntfyEa?si=25b3985ef885488a" },
        { title: "With A Smile – Eraserheads", embed: "https://open.spotify.com/track/1NopgVCMVhCKIm64tF7auX?si=fffd61f8b9894f99" },
        { title: "Care – beabadoobee", embed: "https://open.spotify.com/track/1aTf6n7MSd9z1LQYJEcmqF?si=5LIBRr7vQP2J4KueDXjBhQ" },
        { title: "MARS - TWICE", embed : "https://open.spotify.com/track/6B2WCk6chRbS7QHIeUYD1H?si=d2f4bad9c67142f1"},
        { title: "I GOT YOU - TWICE", embed : "https://open.spotify.com/track/35dhwUoJNlxrPyEIJkfDnx?si=20ed1922dfee40a4"},
        { title: "Rainbow - South Border", embed : "https://open.spotify.com/track/3VcVQmMivq2ISfKUmIuvMK?si=b30656537151462b"},
        { title: "Count On Me - Bruno Mars", embed :"https://open.spotify.com/track/7l1qvxWjxcKpB9PCtBuTbU?si=4ca9b023a0174fcc"},
        { title: "Put your records on - Corinne Bailey Rae", embed: "https://open.spotify.com/track/2nGFzvICaeEWjIrBrL2RAx?si=91e33f2c41294915"},
        { title: "Little Things - One Direction", embed: "https://open.spotify.com/track/0TAmnCzOtqRfvA38DDLTjj?si=2c61e6dd2526470e"},
        { title: "Keep Your Head Up - Andy Grammer", embed: "https://open.spotify.com/track/680niVaosCIvZgpWWy0jhV?si=d91f6d5981eb46d4"},
        { title: "She will be loved - Maroon 5", embed: "https://open.spotify.com/track/7sapKrjDij2fpDVj0GxP66?si=3e49950e08684033"},
        { title: "The Nights - Avicii", embed: "https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc?si=c9c0db0cc5ba4f4e"},
        { title: "Yellow - Coldplay", embed: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=d3e47a0e450a4f9a"},
        { title: "On Top of the World - Imagine Dragons", embed: "https://open.spotify.com/track/213x4gsFDm04hSqIUkg88w?si=e96204d501e74234"},
        { title: "Clean - Taylor Swift", embed: "https://open.spotify.com/track/2ByBBvpR9b7IynvRmnG7kG?si=9ca223a3dbbe46fa"},
        { title: "Better Days - OneRepublic", embed: "https://open.spotify.com/track/2K0r5GD5zYlEMx2M7ZMcqG?si=72b42684192a4e27"},
        { title: "Sunflower - Rex Orange County", embed: "https://open.spotify.com/track/7h2nmmoWDi2UpfYKLKWLYB?si=9c2c7867d56f4f8a"},
        { title: "I Lived - OneRepublic", embed: "https://open.spotify.com/track/3IQF4xCQUPicbA4hWfTxPo?si=00b9cd03286f4d4d"},
        { title: "A Little Braver - New Empire", embed: "https://open.spotify.com/track/2ekUnvuL7fclPdPK28kwDH?si=e2e9c0fb93144915"},
        { title: "Stay Alive - Jose Gonzalez", embed:"https://open.spotify.com/track/0ZNYGrmcehorhh9JOeg5Iv?si=a9ce9dd2ddd94048"},
        { title: "One Call Away - Charlie Puth", embed: "https://open.spotify.com/track/37R0bQOQj5a7DOqh1TGzvB?si=b87e753eec5048d8"}

    ];

    const quotes = [
        "“This too shall pass. You are stronger than you know.”",
        "“Breathe. You are doing the best you can.”",
        "“You matter — more than you think.”",
        "“One small step is still a step forward.”",
        "“You deserve rest, peace, and gentleness.”",
        "“One small step today is still progress.”",
        "“You don't have to be strong all the time.”",
        "“It's okay to rest. The sun still rises tomorrow.”",
        "“You're allowed to start again.”",
        "“Some days you bloom, some days you surive. Both are okay.”",
        "“Even the quiet days matter.”",
        "“Light still finds you, even slowly.”",
        "“You've made it thru every bad day so far.”",
        "“Don't forget how far you've come.”",
        "“The world is softer with you in it.”",
        "“You're stronger than the moment you're in.”",
        "“Healing is not linear, and that's okay.”",
        "“You don't need to figured it all out today.”",
        "“Your feelings are valid, no matter what.”",
        "“Let go of what you can't control, and breathe through what you can.”",
        "“Happiness looks good on you, by the way.”",
        "“If you ever feel small, remember how vast the sky is, and how special you are in it.”",
        "“Sometimes the bravest thing you can do is ask for help.”",
        "“It’s okay to take time for yourself.”",
        "“It's okat to cry sometimes, it doesn't make you less a human being.”",
        "“You are seen, you are heard, and you are loved.”",
        "“You deserve every good thing in the world.”",
        "“If my arms couldn't reach you, my prayers would.”",
        "“If the world feels heavy, remember you have a place to rest.”",
        "“If the world is against you, I'm against the world.”",
        "“You are enough, just as you are.”",
        "“You are never forgotten, never unloved.”",
        "“You are worthy of all the good things.”",
        "“You are not alone in this.”",
        "“You are braver than you believe, stronger than you seem, and smarter than you think.”",
        "“If you don't believe in yourself, know that I believe in you.”",
        "“If you don't believe in yourself, borrow my belief in you.”",
        "“You are capable of amazing things.”",
        "“I'm so proud of how far you've come.”",
        "“I'm proud of you for trying, even when it's hard.”",
        "“I'm proud of you for making it through today.”",
        "“I'm proud of you for being you.”",
        "“I'm proud of you for not giving up.”",
        "“If you can't take a hug in person, consider this a virtual one.”",
        "“Whenever you're ready, you know where to run.”",
        "“Sending you a big virtual hug right now.”",
        "“Consider this a warm hug from afar.”",
        "“Here's a virtual hug to brighten your day.”",
        "“Wrapping you in a big virtual hug.”",
        "“A virtual hug to remind you that you're loved.”"
        
    ];

    const todos = [
        " Take a deep breath: inhale 4 sec, exhale 4 sec.",
        " Go for a 5-minute walk.",
        " Buy yourself a small treat.",
        " Stretch for 30 seconds.",
        " Drink a glass of water.",
        " Sit outside for a few minutes.",
        " Watch the sunrise or sunset.",
        " Tap your shoulder and say, 'I'm proud of you.'",
        " Whisper: I'm trying . That's enough.",
        " Go for a short drive with your favorite music.",
        " Take photos of things that catch your eye.",
        " Watch a comforting movie or series.",
        " Close your eyes and focus on the 5 things you can hear.",
        " Take a short bike ride."
    ];

    function typeEffect(element, text, speed = 50) {
        element.style.display = "block";
        element.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    window.saveName = function() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (!name) { 
        alert("Please type your name"); 
        return; 
    }

    document.getElementById("promt").style.display = "none";

    nameInput.style.display = "none";
    document.querySelector("button").style.display = "none";

    const greetEl = document.getElementById("greet");
    typeEffect(greetEl, `Hi ${name}! What do you need today?`);

    const secretEl = document.getElementById("secret");
    if (secretMessages[name]) {
        typeEffect(secretEl, secretMessages[name]);
    } else {
        secretEl.style.display = "none";
    }

    document.getElementById("picker").style.display = "inline-block";
    document.getElementById("backBtn").style.display = "inline-block";
    document.getElementById("restartBtn").style.display = "inline-block";
}


    window.showComfort = function() {
        const picker = document.getElementById("picker");
        const choice = picker.value;
        const output = document.getElementById("output");

        output.style.display = "block";
        output.innerHTML = ""; 

        if (choice === "talk") {
            spinSection.style.display = "block"; output.style.display = "none";
        } 
        else if (choice === "quote") {
            output.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        } 
        else if (choice === "todo") {
            output.textContent = todos[Math.floor(Math.random() * todos.length)];
        } 
        else if (choice === "song") {
            const song = songs[Math.floor(Math.random() * songs.length)];
            output.innerHTML = `<p> ${song.title}</p>
                                <iframe src="${song.embed}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                <p><a href= "https://open.spotify.com/track/${song.embed.split('/track/')[1].split('?')[0]}" target="_blank">Play on Spotify</a></p>`;
        }
    }
    window.spinTheWheel = function () {
    const input = document.getElementById("spinInput").value;
    const people = input.split(',').map(p => p.trim()).filter(p => p !== '');

    if (people.length < 2 || people.length > 5) {
        alert("Enter 2–5 names!");
        return;
    }

    const canvas = document.getElementById("wheel");
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;
    const slices = people.length;

    let currentAngle = 0;

    const colors = ["#FFFFFF", "#000000", "#808080", "#F5F5DC"];

    function drawWheel() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const sliceAngle = 2 * Math.PI / slices;

        for (let i = 0; i < slices; i++) {
            ctx.beginPath();
            ctx.moveTo(radius, radius);
            ctx.fillStyle = colors[i % colors.length];
            ctx.arc(
                radius, radius, radius,
                currentAngle + i * sliceAngle,
                currentAngle + (i + 1) * sliceAngle
            );
            ctx.fill();
            ctx.stroke();

            // TEXT
            ctx.save();
            ctx.translate(radius, radius);
            ctx.rotate(currentAngle + i * sliceAngle + sliceAngle / 2);
            ctx.textAlign = "right";
            ctx.font = "20px Arial";

            ctx.fillStyle = getContrastingColor(colors[i % colors.length]);
            ctx.fillText(people[i], radius - 10, 10);
            ctx.restore();
        }
    }

    drawWheel();

    let spinTime = 0;
    const spinTotal = Math.random() * 3 + 4;
    const spinSpeed = 0.3;

    const spinInterval = setInterval(() => {
        currentAngle += spinSpeed;
        drawWheel();
        spinTime += 0.02;

        if (spinTime > spinTotal) {
            clearInterval(spinInterval);

            const normalizedAngle = (currentAngle % (2 * Math.PI)) + Math.PI / 2;
            const sliceAngle = 2 * Math.PI / slices;

            let selectedIndex = Math.floor(slices - (normalizedAngle / sliceAngle)) % slices;
            if (selectedIndex < 0) selectedIndex += slices;

            output.textContent = `Spin result: ${people[selectedIndex]}`;
            output.style.display = "block";
        }
    }, 20);
};


    window.goBack = function() {
        document.getElementById("secret").style.display = "none";
        document.getElementById("output").style.display = "none";
        document.getElementById("picker").style.display = "none";
        document.getElementById("greet").style.display = "none";

        const nameInput = document.getElementById("nameInput");
        nameInput.style.display = "inline-block";
        document.querySelector("button").style.display = "inline-block";
        nameInput.value = "";

        document.getElementById("backBtn").style.display = "none";
        document.getElementById("restartBtn").style.display = "none";
    }

    window.restartPage = function() {
        location.reload();
    }
function getContrastingColor(bgColor) {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white";
}
}