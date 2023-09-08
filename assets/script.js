let today = dayjs().format("ddd D MMM YYYY");

$("#currentDay").text(today)

let currentTime = dayjs().format("HH:mm:ss");

let hourBlock = $("timeblock");


if (hourBlock.val > currentTime[0]){
    $(this).addClass('future');
} else if (hourBlock.val<currentTime[0]){
    $(this).addClass('past');  
}else {
    $(this).addClass('present')
}