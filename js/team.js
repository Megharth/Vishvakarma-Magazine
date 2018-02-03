window.count1 = 0;
window.teams = ["ટુકડી","मंडली","Team"];

function teamName()
{
    if(window.count1 >= window.teams.length)
        window.count1= 0;
    $("#teamName").fadeOut(1000,function(){
        $("#teamName").text(window.teams[window.count1++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(teamName,2000);
});
