//displays date in header of page
let today = dayjs().format("ddd D MMM YYYY");
$("#currentDay").text(today)

//current time called in hour/minute/second
let currentTime = dayjs().format("HH:mm:ss");
let hourBlock = $("timeblock");

// if (hourBlock.val > currentTime[0]){
//     $(this).addClass('future');
// } else if (hourBlock.val<currentTime[0]){
//     $(this).addClass('past');  
// }else {
//     $(this).addClass('present')
// }

//function for save clicks
$(document).ready(function() {


$(".saveBtn").on("click",function() {
   let timeID = $(this).parent().attr("id");
   let value = $(this).siblings(".activity").val();
   
   console.log(timeID, value);
//    console.log(value);
   
});

});