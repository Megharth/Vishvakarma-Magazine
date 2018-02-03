window.count1 = 0;
window.batch = ["તમારો લેખ સબમિટ કરો","अपना लेख सबमिट करें","Submit your Article"];

function batchName()
{
    if(window.count1 >= window.batch.length)
        window.count1= 0;
    $("#batchName").fadeOut(1000,function(){
        $("#batchName").text(window.batch[window.count1++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(batchName,2000);
});
