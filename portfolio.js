//<=================== Adding Classes To Make Some Cool Effects 😎 ===================>

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        };
        if (this.scrollY > 5000) {
            $('footer .socials,footer .socials span,footer .socials span i').addClass('bottom');
        } else {
            $('footer .socials,footer .socials span,footer .socials span i').removeClass('bottom');
        };
    });
                // <<<<<<=========================>>>>>>

   // <=============== Slide-Up Button 🔲 ===============>
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });

    });
                // <<<<<<=========================>>>>>>
    
    // <=============== Toggling Menu 🤓 ===============>

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.navbar').toggleClass("active");
    })
                // <<<<<<=========================>>>>>>

  // <=============== Text Typing Animation ✍️ ===============>

     var typed = new Typed(".typing", {
        strings: ["WEB-DEVELOPER", "FREELANCER", "APP-DEVELOPER", "UI/UIX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["WEB-DEVELOPER", "FREELANCER", "APP-DEVELOPER", "UI/UIX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
                // <<<<<<=========================>>>>>>
/*
<=============== Random Color Generator (You Can Use If U Want 😊) ===============>
var randomColor = "#" + (Math.ceil (Math.random ()*16777215).toString (16));
*/

                // <<<<<<=========================>>>>>>

const btn = document.querySelector('.theme-btn');
const nav = document.querySelector('.navbar')
const menu = document.querySelector('.navbar .menu')
const social = document.querySelector('footer .socials ');
const blackBG = document.querySelector(".blackBG");
const blueBG = document.querySelector(".blueBG");

social.addEventListener('click', () => {
    let aud = new Audio('../Sounds/vee.wav')
    aud.play()
})

btn.addEventListener('click', () => {
    btn.classList.toggle('fa-moon');

    // <====== Background Animation 📺 ======>

    blackBG.classList.toggle("active");
    if (blackBG.classList.contains("active")) {
        blueBG.classList.remove("active");
    } else {
        blueBG.classList.add("active");
    }

    if (blackBG.classList.contains("active")) {
        setTimeout(() => {
            if (btn.classList.contains('fa-moon')) {
                document.body.style.background = "black";
                let aud = new Audio('../Sounds/drum.wav');
                aud.play();
            }
        }, 4100)


    } else {
        setTimeout(() => {
            if (btn.classList.contains('fa-sun')) {
                document.body.style.background = "var(---primary-clr)";
                let aud = new Audio('../Sounds/noti.wav');
                aud.play();
            }
        }, 4100)

    }

})
// <<<<<<=========================>>>>>>

// <=============== Displaying Pre-Loader During Loading 🔃 ===============>

window.onload = function () {
    document.querySelector('.loader_bg').style.display = 'none';
    document.querySelector('body').style.display = 'block';

}

/*<=============== To Disable Right Click ===============>*/

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
                // <<<<<<=========================>>>>>>

// <=============== Contact-Form Submission 📃 ===============>

 function sendEmail() {
            emailjs.send("service_u95p0ps", "template_s9ks5eq", {
                from_name: document.querySelector('.contact .right form .name input').value,
                message: document.querySelector('.contact .right form .textarea textarea').value,
                subject: document.querySelector('.contact .right form .subject input').value + "<br> Email_id : " + document.querySelector('.contact .right form .email input').value,
            }, "hqVI9Kr1m8IIkGMKC").then(
                message => (document.querySelector('.contact .right form .button span').style.display = "block"),
                 //remove message after seven seconds
                 setTimeout(() => {
                     document.querySelector('.contact .right form .button span').innerHTML = ''
               }, 7000)
            ).catch((error) => {
        alert("Oops! Something went wrong!😔");
    });
        };

                // <<<<<<<<<<<<<<<<<========================================>>>>>>>>>>>>>>>>>
