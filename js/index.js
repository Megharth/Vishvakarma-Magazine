window.count1 = 0;
window.count2 = 0;
window.count3 = 0;
window.hellos = ["Hello","नमस्ते","કેમ છો?","स्वागत आहे","Hola","Bonjour"];
window.magazinename = ["Vishvakarma","विश्वकर्मा","વિશ્વકર્મા"];
window.magazine = ["Magazine","आलेख","મેગેઝિન"];

function greet()
{
    if(window.count1 >= window.hellos.length)
        window.count1= 0;
    $("#greeting").fadeOut(1000,function(){
        $("#greeting").text(window.hellos[window.count1++]+"!").fadeIn(1000);
    })
}

$(function(){
    setInterval(greet,2000);
});

function magazinegreet()
{
    if(window.count2 >= window.magazinename.length)
        window.count2 = 0;
    $("#magazinename").fadeOut(1000,function(){
        $("#magazinename").text(window.magazinename[window.count2++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(magazinegreet,2000);
});

function magazine1()
{
    if(window.count3 >= window.magazine.length)
        window.count3 = 0;
    $("#magazine").fadeOut(1000,function(){
        $("#magazine").text(window.magazine[window.count3++]).fadeIn(1000);
    })
}
$(function(){
    setInterval(magazine1,2000);
});