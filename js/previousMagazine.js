window.count1 = 0;
window.magazines = ["મેગેઝિન!","पत्रिका!","Magazines!"];

function magazineName()
{
    if(window.count1 >= window.magazines.length)
        window.count1= 0;
    $("#magazineName").fadeOut(1000,function(){
        $("#magazineName").text(window.magazines[window.count1++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(magazineName,2000);
});
