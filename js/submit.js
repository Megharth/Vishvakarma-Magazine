window.count1 = 0;
window.submit = ["તમારો લેખ સબમિટ કરો","अपना लेख सबमिट करें","Submit your Article"];

function submitName()
{
    if(window.count1 >= window.submit.length)
        window.count1= 0;
    $("#submitName").fadeOut(1000,function(){
        $("#submitName").text(window.submit[window.count1++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(submitName,2000);
});
