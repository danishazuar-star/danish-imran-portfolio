// ==========================================
// 1. RESPONSIVE NAVIGATION BAR TOGGLE
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Menghalang borang daripada refresh halaman secara automatik
        
        let isValid = true;

        // Ambil elemen input dan ralat
        const name = document.getElementById('fullName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const dob = document.getElementById('dob');
        const genderMale = document.getElementById('male');
        const genderFemale = document.getElementById('female');
        const photo = document.getElementById('profilePhoto');
        const terms = document.getElementById('terms');

        // Validasi Nama Penuh
        if (name.value.trim() === "") {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        // Validasi E-mel
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        // Validasi Kata Laluan
        if (password.value.length < 6) {
            document.getElementById('passwordError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        // Validasi Tarikh Lahir
        if (dob.value === "") {
            document.getElementById('dobError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('dobError').style.display = 'none';
        }

        // Validasi Jantina
        if (!genderMale.checked && !genderFemale.checked) {
            document.getElementById('genderError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('genderError').style.display = 'none';
        }

        // Validasi Muat Naik Fail
        if (photo.files.length === 0) {
            document.getElementById('photoError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('photoError').style.display = 'none';
        }

        // Validasi Terma & Syarat Checkbox
        if (!terms.checked) {
            document.getElementById('termsError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('termsError').style.display = 'none';
        }

        // Jika semua input sah, tunjukkan mesej kejayaan
        if (isValid) {
            alert("Borang anda berjaya dihantar! Terima kasih.");
            contactForm.reset();
        }
    });
}

// ==========================================
// 3. INTERACTIVE BMI CALCULATOR APPLICATION
// ==========================================
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('bmi-result');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDiv.style.color = '#e74c3c';
        resultDiv.innerHTML = "Sila masukkan nilai berat dan tinggi yang sah.";
        return;
    }

    // Tukar tinggi dari cm ke meter
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Kurang Berat Badan";
        color = "#e67e22";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat Badan Ideal / Normal";
        color = "#2ecc71";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Lebih Berat Badan";
        color = "#f1c40f";
    } else {
        category = "Obesiti";
        color = "#e74c3c";
    }

    resultDiv.style.color = color;
    resultDiv.innerHTML = `BMI Anda: ${bmi.toFixed(2)}<br>Kategori: ${category}`;
}