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


//<=============== Changing Theme 📺 and Adding Some Sounds On Clicking The Buttons 🔊 ===============>

const btn = document.querySelector('.theme-btn');
const nav = document.querySelector('.navbar')
const menu = document.querySelector('.navbar .menu')
const social = document.querySelector('footer .socials ');
const blackBG = document.querySelector(".blackBG");
const PrimBG = document.querySelector(".PrimBG");

social.addEventListener('click', () => {
    let aud = new Audio('vee.wav')
    aud.play()
})

btn.addEventListener('click', () => {
    btn.classList.toggle('fa-moon');
    // <====== Background Animation 📺 ======>

    blackBG.classList.toggle("active");
    if (blackBG.classList.contains("active")) {
        PrimBG.classList.remove("active");
    } else {
        PrimBG.classList.add("active");
    }

    if (blackBG.classList.contains("active")) {
        setTimeout(() => {
            if (btn.classList.contains('fa-moon')) {
                document.body.style.background = "black";
                document.getElementById("universe").style.display = "block";
                let aud = new Audio('drum.wav');
                aud.play();
            }
        }, 4100)


    } else {
        setTimeout(() => {
            if (btn.classList.contains('fa-sun')) {
                document.body.style.background = "var(---back-clr)";
                document.getElementById("universe").style.display = "none";
                let aud = new Audio('noti.wav');
                aud.play();
            }
        }, 4100)

    }

})
// <<<<<<=========================>>>>>>

// <=============== Background Stars ✨ ===============>
var layerCount = 5;
var starCount = 100;
var universe = document.getElementById('universe');
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName('body')[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
for (var l = 0; l < layerCount; ++l) {
    var layer = document.createElement('div');
    layer.setAttribute('id', 'layer' + l);
    layer.setAttribute('class', 'starfield');
    universe.appendChild(layer);
    for (var i = 0; i < starCount; ++i) {
        var xpos = Math.round(Math.random() * width);
        var ypos = Math.round(Math.random() * height);
        for (var s = 0; s < 2; ++s) {
            var star = document.createElement('div');
            star.setAttribute('class', 'star' + l);
            star.style.webkitTransform = 'translate(' + (xpos + s * width) + 'px, ' + ypos + 'px)';
            star.style.transform = 'translate(' + (xpos + s * width) + 'px, ' + ypos + 'px)';
            star.style.backgroundColor = 'white';//rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
            layer.appendChild(star);
        }
    }
    layer.animate([{ transform: 'translate3d(0, 0, 0)' },
    { transform: 'translate3d(-' + width + 'px, 0, 0)' }],
        { duration: Math.pow(2, layerCount - l) * 2000, iterations: Infinity });
}

// <<<<<<=========================>>>>>>


//    <<<<<=============== Stylish Cursor  🔃 + Changing Cursor =============== >>>>> 

const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});
document.querySelectorAll("a").forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        document.getElementById("cursor").classList.add("active");
    })
    e.addEventListener("mouseleave",()=>{
        document.getElementById("cursor").classList.remove("active");
    })

});
    // <<<<<============================== >>>>> 

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
                // <<<<<<=========================>>>>>>

// <=============== Some animation on Scroll 💫 ===============>
  window.onscroll = function () {
    scrollRotate();
  }
function scrollRotate() {
    document.querySelector(".about .about-content .left .dimg img").style.transform = "translateY(-" + window.scrollY / 20 + "px)";
}
                // <<<<<<=========================>>>>>>

                // <<<<<<<<<<<<<<<<<========================================>>>>>>>>>>>>>>>>>
