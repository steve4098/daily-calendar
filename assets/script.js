//displays date in header of page
let today = dayjs().format("ddd D MMM YYYY");
$("#currentDay").text(today)

//function for save clicks
$(document).ready(function() {


$(".saveBtn").on("click",function() {
   let timeID = $(this).parent().attr("id");
   let value = $(this).siblings(".activity").val();
   
   console.log(timeID, value);
//    console.log(value);
    localStorage.setItem(timeID, value);

$(".confirmation").addClass("show");

setTimeout(function(){
    $(".confirmation").removeClass("show")},
    3500 );

});

});


//current time called in hour
function hourUpdate(){ 
    let currentTime = dayjs().format("HH");

    $("timeblock").each(function(){
        let hourTime = parseInt($(".timeblock")[i].attr("id").split("-")[0]);
        console.log(currentTime);

        for (let i=0; i<$("timeblock").length; i++){
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
    });
};


