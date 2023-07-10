function openNav() {
   document.getElementById("mySidenav").style.width = "302.219px";
   document.getElementById("bg").style.display = "flex";

}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("bg").style.display = "none";
}

function next1(){
   document.getElementById("review").style.marginLeft = "-230px";
   document.getElementById("review").style.transition = "all 1s";
   document.getElementById("rev-next-img2").style.display = "none";
   document.getElementById("rev-next-img1").style.display = "flex";
   document.getElementById("rev-back-img3").style.display = "none";
   document.getElementById("rev-back-img1").style.display = "flex";
};

function next2(){
   document.getElementById("review").style.marginLeft = "-475px";
   document.getElementById("review").style.transition = "all 1s";
   document.getElementById("rev-next-img1").style.display = "none";
   document.getElementById("rev-next-img3").style.display = "flex";
   document.getElementById("rev-back-img1").style.display = "none"
   document.getElementById("rev-back-img2").style.display = "flex";
};

function back1(){
   document.getElementById("review").style.marginLeft = "-230px";
   document.getElementById("review").style.transition = "all 1s";
   document.getElementById("rev-back-img2").style.display = "none";
   document.getElementById("rev-back-img1").style.display = "flex";
   document.getElementById("rev-next-img1").style.display = "flex";
   document.getElementById("rev-next-img3").style.display = "none";
};

function back2(){
   document.getElementById("review").style.marginLeft = "24px";
   document.getElementById("review").style.transition = "all 1s";
   document.getElementById("rev-back-img1").style.display = "none";
   document.getElementById("rev-back-img3").style.display = "flex";
   document.getElementById("rev-next-img2").style.display = "flex";
   document.getElementById("rev-next-img1").style.display = "none";
};

function diet_mode_button1(){
   document.getElementById("diet-mode-button1").style.borderBottom = "3px #32CD32 solid";
   document.getElementById("diet-mode-button2").style.borderBottom = "3px white solid";
   document.getElementById("diet-mode-button3").style.borderBottom = "3px white solid";
}

function diet_mode_button2(){
   document.getElementById("diet-mode-button1").style.borderBottom = "3px white solid";
   document.getElementById("diet-mode-button2").style.borderBottom = "3px #32CD32 solid";
   document.getElementById("diet-mode-button3").style.borderBottom = "3px white solid";
}

function diet_mode_button3(){
   document.getElementById("diet-mode-button1").style.borderBottom = "3px white solid";
   document.getElementById("diet-mode-button2").style.borderBottom = "3px white solid";
   document.getElementById("diet-mode-button3").style.borderBottom = "3px #32CD32 solid";
}


function button_days1(){
   document.getElementById("button-days1").style.background = "#32CD32";
   document.getElementById("button-days1").style.color = "#FFF";
   document.getElementById("button-days2").style.color = "#032D3C";
   document.getElementById("button-days2").style.background = "#FFF";
   document.getElementById("button-days3").style.color = "#032D3C";
   document.getElementById("button-days3").style.background = "#FFF";
   document.getElementById("button-days4").style.color = "#032D3C";
   document.getElementById("button-days4").style.background = "#FFF";
   document.getElementById("button-days5").style.color = "#032D3C";
   document.getElementById("button-days5").style.background = "#FFF";
}

function button_days2(){
   document.getElementById("button-days2").style.background = "#32CD32";
   document.getElementById("button-days2").style.color = "#FFF";
   document.getElementById("button-days1").style.color = "#032D3C";
   document.getElementById("button-days1").style.background = "#FFF";
   document.getElementById("button-days3").style.color = "#032D3C";
   document.getElementById("button-days3").style.background = "#FFF";
   document.getElementById("button-days4").style.color = "#032D3C";
   document.getElementById("button-days4").style.background = "#FFF";
   document.getElementById("button-days5").style.color = "#032D3C";
   document.getElementById("button-days5").style.background = "#FFF";
}

function button_days3(){
   document.getElementById("button-days3").style.background = "#32CD32";
   document.getElementById("button-days3").style.color = "#FFF";
   document.getElementById("button-days2").style.color = "#032D3C";
   document.getElementById("button-days2").style.background = "#FFF";
   document.getElementById("button-days1").style.color = "#032D3C";
   document.getElementById("button-days1").style.background = "#FFF";
   document.getElementById("button-days4").style.color = "#032D3C";
   document.getElementById("button-days4").style.background = "#FFF";
   document.getElementById("button-days5").style.color = "#032D3C";
   document.getElementById("button-days5").style.background = "#FFF";
}

function button_days4(){
   document.getElementById("button-days4").style.background = "#32CD32";
   document.getElementById("button-days4").style.color = "#FFF";
   document.getElementById("button-days2").style.color = "#032D3C";
   document.getElementById("button-days2").style.background = "#FFF";
   document.getElementById("button-days3").style.color = "#032D3C";
   document.getElementById("button-days3").style.background = "#FFF";
   document.getElementById("button-days1").style.color = "#032D3C";
   document.getElementById("button-days1").style.background = "#FFF";
   document.getElementById("button-days5").style.color = "#032D3C";
   document.getElementById("button-days5").style.background = "#FFF";
}

function button_days5(){
   document.getElementById("button-days5").style.background = "#32CD32";
   document.getElementById("button-days5").style.color = "#FFF";
   document.getElementById("button-days2").style.color = "#032D3C";
   document.getElementById("button-days2").style.background = "#FFF";
   document.getElementById("button-days3").style.color = "#032D3C";
   document.getElementById("button-days3").style.background = "#FFF";
   document.getElementById("button-days4").style.color = "#032D3C";
   document.getElementById("button-days4").style.background = "#FFF";
   document.getElementById("button-days1").style.color = "#032D3C";
   document.getElementById("button-days1").style.background = "#FFF";
}

function button_persons1(){
   document.getElementById("button-persons1").style.background = "#32CD32";
   document.getElementById("button-persons1").style.color = "#FFF";
   document.getElementById("button-persons2").style.color = "#032D3C";
   document.getElementById("button-persons2").style.background = "#FFF";
   document.getElementById("button-persons3").style.color = "#032D3C";
   document.getElementById("button-persons3").style.background = "#FFF";
}

function button_persons2(){
   document.getElementById("button-persons2").style.background = "#32CD32";
   document.getElementById("button-persons2").style.color = "#FFF";
   document.getElementById("button-persons1").style.color = "#032D3C";
   document.getElementById("button-persons1").style.background = "#FFF";
   document.getElementById("button-persons3").style.color = "#032D3C";
   document.getElementById("button-persons3").style.background = "#FFF";
}

function button_persons3(){
   document.getElementById("button-persons3").style.background = "#32CD32";
   document.getElementById("button-persons3").style.color = "#FFF";
   document.getElementById("button-persons2").style.color = "#032D3C";
   document.getElementById("button-persons2").style.background = "#FFF";
   document.getElementById("button-persons1").style.color = "#032D3C";
   document.getElementById("button-persons1").style.background = "#FFF";
}

function dish_item1(){
   document.getElementById("dish-item1").style.background = "#32CD32";
   document.getElementById("dish-item1").style.color = "#FFF";
   document.getElementById("dish-item2").style.color = "#032D3C";
   document.getElementById("dish-item2").style.background = "#FFF";
   document.getElementById("dish-item3").style.color = "#032D3C";
   document.getElementById("dish-item3").style.background = "#FFF";
   document.getElementById("dish-item4").style.color = "#032D3C";
   document.getElementById("dish-item4").style.background = "#FFF";
   document.getElementById("dish-item5").style.color = "#032D3C";
   document.getElementById("dish-item5").style.background = "#FFF";
}

function dish_item2(){
   document.getElementById("dish-item2").style.background = "#32CD32";
   document.getElementById("dish-item2").style.color = "#FFF";
   document.getElementById("dish-item1").style.color = "#032D3C";
   document.getElementById("dish-item1").style.background = "#FFF";
   document.getElementById("dish-item3").style.color = "#032D3C";
   document.getElementById("dish-item3").style.background = "#FFF";
   document.getElementById("dish-item4").style.color = "#032D3C";
   document.getElementById("dish-item4").style.background = "#FFF";
   document.getElementById("dish-item5").style.color = "#032D3C";
   document.getElementById("dish-item5").style.background = "#FFF";
}

function dish_item3(){
   document.getElementById("dish-item3").style.background = "#32CD32";
   document.getElementById("dish-item3").style.color = "#FFF";
   document.getElementById("dish-item2").style.color = "#032D3C";
   document.getElementById("dish-item2").style.background = "#FFF";
   document.getElementById("dish-item1").style.color = "#032D3C";
   document.getElementById("dish-item1").style.background = "#FFF";
   document.getElementById("dish-item4").style.color = "#032D3C";
   document.getElementById("dish-item4").style.background = "#FFF";
   document.getElementById("dish-item5").style.color = "#032D3C";
   document.getElementById("dish-item5").style.background = "#FFF";
}

function dish_item4(){
   document.getElementById("dish-item4").style.background = "#32CD32";
   document.getElementById("dish-item4").style.color = "#FFF";
   document.getElementById("dish-item2").style.color = "#032D3C";
   document.getElementById("dish-item2").style.background = "#FFF";
   document.getElementById("dish-item3").style.color = "#032D3C";
   document.getElementById("dish-item3").style.background = "#FFF";
   document.getElementById("dish-item1").style.color = "#032D3C";
   document.getElementById("dish-item1").style.background = "#FFF";
   document.getElementById("dish-item5").style.color = "#032D3C";
   document.getElementById("dish-item5").style.background = "#FFF";
}

function dish_item5(){
   document.getElementById("dish-item5").style.background = "#32CD32";
   document.getElementById("dish-item5").style.color = "#FFF";
   document.getElementById("dish-item2").style.color = "#032D3C";
   document.getElementById("dish-item2").style.background = "#FFF";
   document.getElementById("dish-item3").style.color = "#032D3C";
   document.getElementById("dish-item3").style.background = "#FFF";
   document.getElementById("dish-item4").style.color = "#032D3C";
   document.getElementById("dish-item4").style.background = "#FFF";
   document.getElementById("dish-item1").style.color = "#032D3C";
   document.getElementById("dish-item1").style.background = "#FFF";
}

function active_delivery(){
   document.getElementById("active_delivery").style.background = "#32CD32";
   document.getElementById("active_delivery").style.color = "#FFF";
   document.getElementById("active_eating").style.color = "#032D3C";
   document.getElementById("active_eating").style.background = "#FFF";
   document.getElementById("active_results").style.color = "#032D3C";
   document.getElementById("active_results").style.background = "#FFF";
   document.getElementById("delivery").style.display = "block";
   document.getElementById("eating").style.display = "none";
   document.getElementById("results").style.display = "none";
}

function active_eating(){
   document.getElementById("active_eating").style.background = "#32CD32";
   document.getElementById("active_eating").style.color = "#FFF";
   document.getElementById("active_delivery").style.color = "#032D3C";
   document.getElementById("active_delivery").style.background = "#FFF";
   document.getElementById("active_results").style.color = "#032D3C";
   document.getElementById("active_results").style.background = "#FFF";
   document.getElementById("delivery").style.display = "none";
   document.getElementById("eating").style.display = "block";
   document.getElementById("results").style.display = "none";
}

function active_results(){
   document.getElementById("active_results").style.background = "#32CD32";
   document.getElementById("active_results").style.color = "#FFF";
   document.getElementById("active_eating").style.color = "#032D3C";
   document.getElementById("active_eating").style.background = "#FFF";
   document.getElementById("active_delivery").style.color = "#032D3C";
   document.getElementById("active_delivery").style.background = "#FFF";
   document.getElementById("delivery").style.display = "none";
   document.getElementById("eating").style.display = "none";
   document.getElementById("results").style.display = "block";
}