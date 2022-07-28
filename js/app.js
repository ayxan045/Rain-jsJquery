'use strict'

var arr=["img/3.jfif","img/1.jfif","img/1.jpg","img/2.jfif"]

function SnowflakeCreate(){
    var rnd4=Math.ceil(Math.random()*arr.length)
    const snowflakes=$(".snowflakes")
    const snowflakeDiv=$("<div class='snowflake'></div>")
    snowflakeDiv.append(`<img src="${arr[rnd4-1]}" alt="">`)
    snowflakes.append(snowflakeDiv)
    var rnd=Math.floor(Math.random()*(snowflakes.width()-40))
    snowflakeDiv.css("left",rnd+"px")

}

setInterval(() => {
    SnowflakeCreate()
    setTimeout(() => {
        $(".snowflake").first().remove()
    }, 5000);
}, 400);