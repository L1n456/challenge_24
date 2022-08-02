// open and close backing up the project window
const back = document.querySelector(".back");
const back_btn = document.querySelector(".btn-1");
const back_close = document.querySelector(".close"); 

back_btn.addEventListener("click", function onClick(){
    back.style.display = "block";
})

back_close.addEventListener("click", function onClick(){
    back.style.display = "none";
})

const bkm_btn = document.querySelector(".btn-2");
const bkm_txt = document.querySelector(".bkm");
const icon = document.querySelector(".bm");

//change the status of the bookmarking
let count_1 = 0;
bkm_btn.addEventListener('click', function onClick(e) {
    count_1 ++;
    if (count_1 %2 == 0) {
        bkm_btn.style.color = "hsl(0, 0%, 48%)";
        bkm_txt.innerHTML = "Bookmark";
        icon.classList.add("bm");
        icon.classList.remove("bmd");
    }else {
        bkm_btn.style.color = "#157a74";
        bkm_txt.innerHTML = "Bookmarked";
        icon.classList =("bmd");
        icon.classList.remove("bm");
    } 
})


//when the radio button is selected the borders get colored
const select_1 =  document.querySelector("#radio-border-1");
const selected_1 =  document.querySelector("#radio-1");
const select_2 =  document.querySelector("#radio-border-2");
const selected_2 =  document.querySelector("#radio-2");
const select_3 =  document.querySelector("#radio-border-3");
const selected_3 =  document.querySelector("#radio-3");
const btm_2 =  document.querySelector(".btm-2");
const btm_3 =  document.querySelector(".btm-3");
const hr_2 =  document.querySelector("#hr-2");
const hr_3 =  document.querySelector("#hr-3");

const no=  document.querySelector(".no");
const bs =  document.querySelector("#bs");
const bes =  document.querySelector("#bes");

select_1.addEventListener("click", function onClick(){
    no.style.borderColor = "hsl(176, 50%, 47%)";
    bs.style.borderColor = "#e4e4e4";
    bes.style.borderColor = "#e4e4e4";
    selected_1.style.display = "block";
    selected_2.style.display = "none";
    selected_3.style.display = "none";
    btm_2.classList.remove("btm"); 
    btm_3.classList.remove("btm");
    hr_2.style.display = "none"; 
    hr_3.style.display = "none"; 
})

select_2.addEventListener("click", function onClick(){
    bs.style.borderColor = "hsl(176, 50%, 47%)";
    no.style.borderColor = "#e4e4e4";
    bes.style.borderColor = "#e4e4e4";
    selected_1.style.display = "none";
    selected_2.style.display = "block";
    selected_3.style.display = "none"; 
    btm_2.classList.add("btm");
    btm_3.classList.remove("btm");
    hr_2.style.display = "block"; 
    hr_3.style.display = "none";  
})

select_3.addEventListener("click", function onClick(){
    bes.style.borderColor = "hsl(176, 50%, 47%)";
    bs.style.borderColor = "#e4e4e4";
    no.style.borderColor = "#e4e4e4";
    selected_1.style.display = "none";
    selected_2.style.display = "none";
    selected_3.style.display = "block";
    btm_2.classList.remove("btm"); 
    btm_3.classList.add("btm");
    hr_3.style.display = "block"; 
    hr_2.style.display = "none"; 
})


//when clicking each select reward 
const open_bs = document.querySelector("#open-bs");
const open_bes = document.querySelector("#open-bes");

open_bs.addEventListener("click", function onClick(){
    back.style.display = "block";
    bs.style.borderColor = "hsl(176, 50%, 47%)";
    no.style.borderColor = "#e4e4e4";
    bes.style.borderColor = "#e4e4e4";
    selected_1.style.display = "none";
    selected_2.style.display = "block";
    selected_3.style.display = "none"; 
    btm_2.classList.add("btm"); 
    btm_3.classList.remove("btm");
    hr_2.style.display = "block"; 
    hr_3.style.display = "none";  
})

open_bes.addEventListener("click", function onClick(){
    back.style.display = "block";
    bes.style.borderColor = "hsl(176, 50%, 47%)";
    bs.style.borderColor = "#e4e4e4";
    no.style.borderColor = "#e4e4e4";
    selected_1.style.display = "none";
    selected_2.style.display = "none";
    selected_3.style.display = "block"; 
    btm_2.classList.remove("btm"); 
    btm_3.classList.add("btm");
    hr_3.style.display = "block"; 
    hr_2.style.display = "none";  
})


//execute the backing of the project
const cont_1 =  document.querySelector("#cont-1");
const cont_2 =  document.querySelector("#cont-2");
const cont_3 =  document.querySelector("#cont-3");

const input_2 =  document.querySelector("#in-2");
const input_3 =  document.querySelector("#in-3");

const p_input_2 =  document.querySelector("#p-in-2");
const p_input_3 =  document.querySelector("#p-in-3");

const bs_left=  document.querySelectorAll(".bs-left");
const bes_left =  document.querySelectorAll(".bes-left");

const money =  document.querySelector(".mny");
const people =  document.querySelector(".ppl");

const th_card = document.querySelector(".thank");
const progress = document.querySelector("progress");

const bs_out =  document.querySelector(".bs");
const bes_out =  document.querySelector(".bes");

cont_1.addEventListener("click", function onClick(){
    if (selected_1.style.display == "block") {
        back.style.display = "none";
        th_card.style.display = "block";
        people.innerHTML = parseInt(people.innerHTML) + 1;
        selected_1.style.display = "none";
        no.style.borderColor = "#e4e4e4";
    } else {
        no.style.borderColor = "red";
    }   
})

cont_2.addEventListener("click", function onClick(){
    if (selected_2.style.display == "block") {
        if (input_2.value > 0) {
            back.style.display = "none";
            th_card.style.display = "block";
            bs_left.forEach(bs => { bs.innerHTML = parseInt(bs.innerHTML) - 1; });
            people.innerHTML = parseInt(people.innerHTML) + 1;
            money.innerHTML = parseInt(money.innerHTML) + parseInt(input_2.value);
            progress.value = parseInt(money.innerHTML);
            input_2.value = "";
            selected_2.style.display = "none";
            bs.style.borderColor = "#e4e4e4";
        } else {
            p_input_2.style.borderColor = "red";
        }   
    } else {
        bs.style.borderColor = "red";
    }

    bs_left.forEach(bs => {
        if(bs.innerHTML == 0){
            bs.style.opacity = "0.5";
            bs_out.style.opacity = "0.5";
        } 
    });  
})

cont_3.addEventListener("click", function onClick(){
    if (selected_3.style.display == "block") {
        if (input_3.value > 0) {
            back.style.display = "none";
            th_card.style.display = "block";
            bes_left.forEach(bes => {
            bes.innerHTML = parseInt(bes.innerHTML) - 1; 
            });
            people.innerHTML = parseInt(people.innerHTML) + 1;
            money.innerHTML = parseInt(money.innerHTML) + parseInt(input_3.value);
            progress.value = money.innerHTML;
            input_3.value = "";
            selected_3.style.display = "none";
            bes.style.borderColor = "#e4e4e4";
        } else {
            p_input_3.style.borderColor = "red";
        }   
    } else {
        bs.style.borderColor = "red";
    }  

    bes_left.forEach(bes => {
        if(bes.innerHTML == 0){
            bes.style.opacity = "0.5";
            bes_out.style.opacity = "0.5";
        } 
    });
     
})

const th_close =  document.querySelector(".btn-4");

th_close.addEventListener("click", function onClick(){
    th_card.style.display = "none";
    if(money.innerHTML >= 100000){
        bs_out.style.opacity = "0.5";
        bs.style.opacity = "0.5";
        bes_out.style.opacity = "0.5";
        bes.style.opacity = "0.5";
        
        back_btn.style.backgroundColor = "hsl(0, 0%, 48%)";
        open_bes.style.backgroundColor = "hsl(0, 0%, 48%)";
        open_bs.style.backgroundColor = "hsl(0, 0%, 48%)";

        back_btn.addEventListener("click", function onClick(){
            back.style.display = "none";
        })
    
        open_bs.addEventListener("click", function onClick(){
            back.style.display = "none"; 
        })
        
        open_bes.addEventListener("click", function onClick(){
            back.style.display = "none";
        }) 
    }
})


//show the menu when the screen is 375px
const btn = document.querySelector(".hb");
const menu = document.querySelector(".menu");

let count_2 = 0;
btn.addEventListener('click', function onClick(e) {
    count_2 ++;
    if (count_2 %2 == 0) {
        btn.src = "images/icon-hamburger.svg";
        menu.classList.remove("show");
    }else {
        btn.src = "images/icon-close-menu.svg";
        menu.classList.add("show");
    } 
})

//time countdown
// Set the date we're counting down to
var countDownDate = new Date("Sep 27, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="time"
  document.getElementById("time").innerHTML = days ;
    
  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "0";
    bs_out.style.opacity = "0.5";
    bs.style.opacity = "0.5";
    bes_out.style.opacity = "0.5";
    bes.style.opacity = "0.5";

    
    back_btn.style.backgroundColor = "hsl(0, 0%, 48%)";
    open_bes.style.backgroundColor = "hsl(0, 0%, 48%)";
    open_bs.style.backgroundColor = "hsl(0, 0%, 48%)";

    back_btn.addEventListener("click", function onClick(){
        document. location. reload(); 
    })

    open_bs.addEventListener("click", function onClick(){
        document. location. reload();  
    })
    
    open_bes.addEventListener("click", function onClick(){
        document. location. reload();
    }) 
  }
}, 1000);
