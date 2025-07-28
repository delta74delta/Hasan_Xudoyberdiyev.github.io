// Qizil-Ko'k Matrix Yomg'iri Effekti
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100; // Har bir ustun uchun tasodifiy boshlang'ich pozitsiya
}

function draw() {
    // Qorong'u fon (shaffoflik bilan)
    ctx.fillStyle = 'rgba(10, 5, 20, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Har bir ustun uchun alohida rang
    for (let i = 0; i < drops.length; i++) {
        const char = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        
        // Tasodifiy ravishda qizil, ko'k yoki oq rang tanlash
        const colorChoice = Math.random();
        if (colorChoice > 0.7) {
            // Qizil rang (30% ehtimollik)
            const redIntensity = Math.floor(Math.random() * 155) + 100; // 100-255 oralig'ida
            ctx.fillStyle = `rgb(${redIntensity}, 30, 30)`;
        } else if (colorChoice > 0.3) {
            // Ko'k/Movi rang (40% ehtimollik)
            const blueIntensity = Math.floor(Math.random() * 155) + 100; // 100-255 oralig'ida
            ctx.fillStyle = `rgb(30, 30, ${blueIntensity})`;
        } else {
            // Oq rang (30% ehtimollik - "qor" effekti)
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        }
        
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Agar belgi pastga tushib ketsa yoki tasodifiy ravishda, yangilash
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

// Animatsiya tezligi
setInterval(draw, 50);

// Oynani o'lchamini o'zgartirganda qayta sozlash
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Language Translation System
const translations = {
    en: {
        title: "Hasan Xudoyberdiyev",
        subtitle: "Cyber Security Specialist | Ethical Hacker",
        about: "About Me",
        skills: "Skills",
        certificates: "Certificates",
        contact: "Contact",
        name: "Name:",
        location: "Location:",
        experience: "Experience:",
        specialization: "Specialization:",
        education: "Education",
        school: "General Secondary Education — School №[number]",
        school_item1: "1st to 11th grade general secondary education",
        school_item2: "Deep interest in information security from early years",
        school_item3: "Self-taught Windows/Linux, network security, Python and hacking tools",
        school_item4: "Gained experience in real network environment since 2020",
        haad: "Haad Training Center — Cybersecurity Trainee",
        haad_item1: "Practical knowledge of Red Team, OSINT, Wi-Fi Hacking, Linux, Windows Exploitation",
        haad_item2: "Learning penetration testing, phishing, privilege escalation through weekly labs",
        haad_item3: "Testlab and ethical hacking experiences based on real scenarios",
        bio_title: "Bio",
        bio1: "I am a cybersecurity professional with a keen interest in the field. I have been passionate about this field since I was young and I am constantly learning new things. I have experience working with software and can solve problems independently. I also have a good understanding of hardware.",
        bio2: "My main activity is conducting penetration tests and identifying vulnerabilities in systems. I help organizations identify and eliminate security problems in their IT systems. In the process of work, I rely not only on technical knowledge, but also on creative and systematic thinking.",
        technical_skills: "Technical Skills",
        pen_testing: "Penetration Testing",
        pen1: "Web Application Testing",
        pen2: "Network Penetration Testing",
        pen3: "Offensive Reconnaissance: active/passive scanning",
        pen4: "Vulnerability Assessment and Exploitation",
        pen5: "Privilege Escalation (Linux & Windows)",
        programming: "Programming & Scripting",
        prog1: "Python (Advanced)",
        prog2: "Bash Scripting",
        prog3: "PowerShell",
        tools: "Tools & Frameworks",
        tools1: "Metasploit Framework",
        tools2: "Burp Suite",
        tools3: "Nmap",
        tools4: "Wireshark",
        certificates_title: "Certificates",
        cert1: "Cybersecurity Fundamentals",
        cert2: "Ethical Hacker",
        cert3: "Final Assessment",
        cert4: "Haad Training Center",
        cert5: "ICIP Certification",
        download: "Download PDF",
        contact_title: "Contact",
        copyright: "© 2024 Hasan Xudoyberdiyev. All rights reserved."
    },
    uz: {
        title: "Hasan Xudoyberdiyev",
        subtitle: "Kiberxavfsizlik mutaxassisi | Etik haker",
        about: "Men haqimda",
        skills: "Ko'nikmalar",
        certificates: "Sertifikatlar",
        contact: "Aloqa",
        name: "Ism:",
        location: "Manzil:",
        experience: "Tajriba:",
        specialization: "Mutaxassislik:",
        education: "Ta'lim",
        school: "Umumiy o'rta ta'lim — №[raqam] maktab",
        school_item1: "1-sinfdan 11-sinfgacha umumiy o'rta ta'lim",
        school_item2: "Dastlabki yillardan boshlab axborot xavfsizligiga chuqur qiziqish",
        school_item3: "Mustaqil ravishda Windows/Linux, tarmoq xavfsizligi, Python va hacking vositalarini o'rgangan",
        school_item4: "2020-yillardan boshlab real tarmoq muhitida tajriba to'plagan",
        haad: "Haad Training Center — Kiberxavfsizlik stajyori",
        haad_item1: "Red Team, OSINT, Wi-Fi Hacking, Linux, Windows Exploitation bo'yicha chuqur amaliy bilimlar",
        haad_item2: "Penetration testing, phishing, privilege escalation kabi mavzularni haftalik lablar orqali o'rganish",
        haad_item3: "Real senariylar asosida testlab va ethical hacking tajribalari",
        bio_title: "Biografiya",
        bio1: "Men kiberxavfsizlik sohasiga katta qiziqish bilan yondashadigan mutaxassisman. Yoshligimdan boshlab bu sohaga mehr qo‘yganman va doimiy ravishda yangi bilimlarni o‘rganib boraman. Dasturiy ta'minot bilan ishlashda tajribam bor va muammolarni mustaqil hal qila olaman. Qurilma (hardware) bo‘yicha ham yetarli darajada tushunchaga egaman.",
        bio2: "Asosiy faoliyatim — penetratsion testlar o‘tkazish va tizimdagi zaifliklarni aniqlash. Men tashkilotlarga ularning IT tizimlarida xavfsizlik muammolarini aniqlash va bartaraf etishda yordam beraman. Ish jarayonida nafaqat texnik bilim, balki ijodiy va tizimli fikrlashga ham tayanaman.",
        technical_skills: "Texnik ko'nikmalar",
        pen_testing: "Penetratsion testlash",
        pen1: "Veb-ilovalarni testlash",
        pen2: "Tarmoq penetratsion testlari",
        pen3: "Hujumkor razvedka: faol/passiv skanerlash",
        pen4: "Zaifliklarni baholash va ekspluatatsiya qilish",
        pen5: "Huquqlarni oshirish (Linux & Windows)",
        programming: "Dasturlash va skriptlar",
        prog1: "Python (Yuqori daraja)",
        prog2: "Bash skriptlari",
        prog3: "PowerShell",
        tools: "Vositalar va freymvorklar",
        tools1: "Metasploit Framework",
        tools2: "Burp Suite",
        tools3: "Nmap",
        tools4: "Wireshark",
        certificates_title: "Sertifikatlar",
        cert1: "Kiberxavfsizlik asoslari",
        cert2: "Etik haker",
        cert3: "Yakuniy baholash",
        cert4: "Haad Training Center",
        cert5: "ICIP sertifikati",
        download: "PDF yuklab olish",
        contact_title: "Aloqa",
        copyright: "© 2024 Hasan Xudoyberdiyev. Barcha huquqlar himoyalangan."
    },
    ru: {
        title: "Хасан Худойбердиев",
        subtitle: "Специалист по кибербезопасности | Этичный хакер",
        about: "Обо мне",
        skills: "Навыки",
        certificates: "Сертификаты",
        contact: "Контакты",
        name: "Имя:",
        location: "Местоположение:",
        experience: "Опыт:",
        specialization: "Специализация:",
        education: "Образование",
        school: "Общее среднее образование — Школа №[номер]",
        school_item1: "Общее среднее образование с 1 по 11 класс",
        school_item2: "Глубокий интерес к информационной безопасности с ранних лет",
        school_item3: "Самостоятельно изучал Windows/Linux, сетевую безопасность, Python и хакерские инструменты",
        school_item4: "Приобретал опыт в реальной сетевой среде с 2020 года",
        haad: "Haad Training Center — Стажер по кибербезопасности",
        haad_item1: "Практические знания по Red Team, OSINT, взлому Wi-Fi, Linux, эксплуатации Windows",
        haad_item2: "Изучение тестирования на проникновение, фишинга, повышения привилегий через еженедельные лабораторные работы",
        haad_item3: "Опыт тестирования и этичного взлома на основе реальных сценариев",
        bio_title: "Биография",
        bio1: "Я специалист, который с большим интересом относится к сфере кибербезопасности. С детства я увлекался этой областью и постоянно изучаю новые знания. У меня есть опыт работы с программным обеспечением, и я умею самостоятельно решать проблемы. Также я имею достаточные знания по аппаратной части.",
        bio2: "Моя основная деятельность — проведение пентестов и выявление уязвимостей в системах. Я помогаю организациям находить и устранять проблемы в их IT-инфраструктуре. В своей работе я полагаюсь не только на технические знания, но и на креативное и системное мышление.",
        technical_skills: "Технические навыки",
        pen_testing: "Тестирование на проникновение",
        pen1: "Тестирование веб-приложений",
        pen2: "Тестирование на проникновение в сети",
        pen3: "Наступательная разведка: активное/пассивное сканирование",
        pen4: "Оценка уязвимостей и эксплуатация",
        pen5: "Повышение привилегий (Linux & Windows)",
        programming: "Программирование и скриптинг",
        prog1: "Python (Продвинутый)",
        prog2: "Bash-скриптинг",
        prog3: "PowerShell",
        tools: "Инструменты и фреймворки",
        tools1: "Metasploit Framework",
        tools2: "Burp Suite",
        tools3: "Nmap",
        tools4: "Wireshark",
        certificates_title: "Сертификаты",
        cert1: "Основы кибербезопасности",
        cert2: "Этичный хакер",
        cert3: "Итоговая оценка",
        cert4: "Haad Training Center",
        cert5: "Сертификация ICIP",
        download: "Скачать PDF",
        contact_title: "Контакты",
        copyright: "© 2024 Хасан Худойбердиев. Все права защищены."
    }
};

// Current language
let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Initialize with English
changeLanguage('en');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});