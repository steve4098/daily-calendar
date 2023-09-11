//displays date in header of page
let today = dayjs().format("dddd D MMMM YYYY");
$("#currentDay").text(today)

//function for save clicks
$(document).ready(function() {


$(".saveBtn").on("click",function() {
   let timeID = $(this).parent().attr("id");
   let value = $(this).siblings(".activity").val();
   
   console.log(timeID, value);

    localStorage.setItem(timeID, value);

$(".confirmation").addClass("show");

setTimeout(function(){
    $(".confirmation").removeClass("show")},
    3500 );

});

});


// //current time called in hour
function hourUpdate(){ 
    let currentTime = dayjs().format("HH");

        for (let i=0; i<$("timeblock").length; i++){
            let hourTime = parseInt($(".timeblock")[i].getAttribute("id").split("-")[0]);


            if (hourTime < currentTime){
                $(".timeblock")[i].classList.add('past');
            } else if (hourTime === currentTime){
                $(".timeblock")[i].classList.remove("past")
                $(".timeblock")[i].classList.add('present');  
            } else {
                $(".timeblock")[i].classList.remove("past")
                $(".timeblock")[i].classList.remove("present")
                $(".timeblock")[i].classList.add('future');
            }};

};

// hourUpdate();

//data recalled fom local storage
$("#9-AM .activity").val(localStorage.getItem("9-AM"));
$("#10-AM .activity").val(localStorage.getItem("10-AM"));
$("#11-AM .activity").val(localStorage.getItem("11-AM"));
$("#12-PM .activity").val(localStorage.getItem("12-PM"));
$("#13-PM .activity").val(localStorage.getItem("13-PM"));
$("#14-PM .activity").val(localStorage.getItem("14-PM"));
$("#15-PM .activity").val(localStorage.getItem("15-PM"));
$("#16-PM .activity").val(localStorage.getItem("16-PM"));
$("#17-PM .activity").val(localStorage.getItem("17-PM"));