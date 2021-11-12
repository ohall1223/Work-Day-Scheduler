// create a variable for today using moment
var today = moment();
// add the text for the current day of week, date, year & time to the top of the page 
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

console.log("I am linked")

$(document).ready(function(){
    // save button event listener
    $(".saveBtn").on("click", function() {
        var event = $(this).siblings("discription").val()
        var hour = $(this).parent().attr("id")
        localStorage.setItem(hour, event)
    })
})



function timeblockColor(){
    // set a variable to the current hour
    var timeOfDay = moment().hour()
    console.log(timeOfDay)
    
    // loop over each element with the class of time block 
    $(".timeBlock").each(function(){
        var currentBlock = parseInt($(this).attr("id"));
        // if the time of the current block is less than the current time 
        if(currentBlock < timeOfDay){
            // the current block is past so update the classes accordingly
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
            // if the current block is the same at the current time
        } else if (currentBlock === timeOfDay){
            // this block is the present so update the classes accordingly
            $(this).removeClass("future")
            $(this).addClass("present")
            $(this).removeClass("past")
            // if the currrent block is greater than the current time
        } else {
            // this block is in the future so update classes accordingly
            $(this).addClass("future")
            $(this).removeClass("present")
            $(this).removeClass("past")
        }
    })
    // if time is between 9-5 
    // current time block is in the present style
    // earlier time blocks are in the past style
    // future time blocks are in the future style
}

timeblockColor()