let container = document.querySelector('.container');
let flipButton1 = document.querySelector('.flip-button1');
let flipButton2 = document.querySelector('.flip-button2');

flipButton1.addEventListener('click', function () {
  container.classList.add('flipped');
});

flipButton2.addEventListener('click', function () {
  container.classList.remove('flipped');
});



document.getElementById("register-form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const formData = new FormData(this);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

        // console.log('Kullanıcı Adı:', username);
        // console.log('E-posta:', email);
        // console.log('Şifre:', password);

        // console.log("Kayıt işlemi başarılı!");

        // console.log(formData);

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Kayıt işlemi başarılı!");
})


document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const formData = new FormData(this);

        const username = formData.get('username');
        const password = formData.get('password');

        // console.log('Kullanıcı Adı:', username);
        // console.log('Şifre:', password);

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Giriş başarılı!");
            console.log("Giriş işlemi başarılı!");
        } else {
            alert("Kullanıcı adı veya şifre hatalı!");
            console.log("Giriş işlemi başarısız!");
        }
})