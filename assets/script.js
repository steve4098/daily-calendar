//displays date in header of page
let today = dayjs().format("ddd D MMM YYYY");
$("#currentDay").text(today)

//current time called in hour
let currentTime = dayjs().format("HH");

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

let hourBlock = $("timeblock");
hourBlock.each(function(){
    let hourTime = parseInt($(this).attr("id").split("-")[0]);
    console.log(hourTime);


    for (let i=0; i<$("timeblock").length; i++){
        if (hourTime > currentTime){
            $("timeblock").addClass('.future');
        } else if (hourTime < currentTime){
            $("timeblock").addClass('.past');  
        } else {
            $("timeblock").addClass('.present')
        }};
    });

