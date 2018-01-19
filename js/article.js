window.count1 = 0;
window.articles = ["લેખો!","आलेख!","Articles!"];

function articlename()
{
    if(window.count1 >= window.articles.length)
        window.count1= 0;
    $("#articlename").fadeOut(1000,function(){
        $("#articlename").text(window.articles[window.count1++]).fadeIn(1000);
    })
}

$(function(){
    setInterval(articlename,2000);
})
