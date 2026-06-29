// =========================================================================
// 1. MOBILE RESPONSIVE NAVIGATION OVERLAY TOGGLE CONTROL
// =========================================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// =========================================================================
// 2. CONTACT FORM EXTENSIVE VALIDATION LOGIC ENGINE
// =========================================================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Halt default browser server refresh sequence
        
        let isValid = true;

        // Fetch DOM nodes input payloads and respective error node pointers
        const name = document.getElementById('fullName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const dob = document.getElementById('dob');
        const genderMale = document.getElementById('male');
        const genderFemale = document.getElementById('female');
        const photo = document.getElementById('profilePhoto');
        const terms = document.getElementById('terms');

        // Full Name Validation Processing
        if (name.value.trim() === "") {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        // Standard Regular Expression Architecture for Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        // Security Encryption Password Strength Length Rule Check
        if (password.value.length < 6) {
            document.getElementById('passwordError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        // Calendar Object Structural Date Payload Check
        if (dob.value === "") {
            document.getElementById('dobError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('dobError').style.display = 'none';
        }

        // Radio Button Structural Array Gender Verification
        if (!genderMale.checked && !genderFemale.checked) {
            document.getElementById('genderError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('genderError').style.display = 'none';
        }

        // File Architecture Upload Validation Check
        if (photo.files.length === 0) {
            document.getElementById('photoError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('photoError').style.display = 'none';
        }

        // Checkbox Structural Agreement Verification Node
        if (!terms.checked) {
            document.getElementById('termsError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }

        // If All States Resolve as True, Trigger Success Payload
        if (isValid) {
            alert("Secure Form Transmission Successful! Thank you.");
            contactForm.reset();
        }
    });
}

// =========================================================================
// 3. ADVANCED 2D CAR RACING GAME APPLICATION ENGINE
// =========================================================================
const startScreen = document.getElementById('startScreen');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

let player = { speed: 5, score: 0 };
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

if (startScreen) {
    startScreen.addEventListener('click', startGame);
    document.addEventListener('keydown', (e) => { keys[e.key] = true; });
    document.addEventListener('keyup', (e) => { keys[e.key] = false; });
}

// Detect mathematical overlapping bounding box intersection (Collision Detection)
function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}

// Animate moving highway lane markers
function moveLines() {
    let lines = document.querySelectorAll('.roadLines');
    lines.forEach(function(item) {
        if (item.y >= 550) { item.y -= 600; }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

// Animate and randomize computer opponent vehicles
function moveEnemy(carElement) {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function(item) {
        if (isCollide(carElement, item)) {
            endGame();
        }

        if (item.y >= 550) {
            item.y = -300;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

// Frame loop update callback execution
function gamePlay() {
    let carElement = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if (player.start) {
        moveLines();
        moveEnemy(carElement);

        if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed; }
        if (keys.ArrowRight && player.x < (road.width - 64)) { player.x += player.speed; }

        carElement.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);
        player.score++;
        scoreDisplay.innerText = player.score;
    }
}

// Reset core states and initialize game graphics loop
function startGame() {
    startScreen.classList.add('hide');
    gameArea.innerHTML = ""; // Wipe area clean

    player.start = true;
    player.score = 0;
    
    // Create road track stripes
    for (let x = 0; x < 5; x++) {
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'roadLines');
        roadLine.y = (x * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);
    }

    // Spawn player vehicle
    let carElement = document.createElement('div');
    carElement.setAttribute('class', 'car');
    gameArea.appendChild(carElement);

    player.x = carElement.offsetLeft;
    player.y = carElement.offsetTop;

    // Spawn array of automated enemy computer vehicles
    for (let x = 0; x < 3; x++) {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemy');
        enemyCar.y = ((x + 1) * 350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }

    window.requestAnimationFrame(gamePlay);
}

// Stop frame cycle and trigger game over user text
function endGame() {
    player.start = false;
    startScreen.classList.remove('hide');
    startScreen.innerHTML = `
        <h3 style="color: var(--accent); margin-bottom: 10px;">SYSTEM CRASH - GAME OVER</h3>
        <p style="color: #fff; font-size: 1.1rem; margin-bottom: 10px;">Your Final Score: ${player.score}</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Click here to reboot engine & restart.</p>
    `;
}
