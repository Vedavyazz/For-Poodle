for(let i=0;i<35;i++){

const spark=document.createElement("div");

spark.className="spark";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.animationDuration=4+Math.random()*5+"s";

spark.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(spark);

}

const style=document.createElement("style");

style.innerHTML=`

.spark{

position:absolute;

width:5px;
height:5px;

border-radius:50%;

background:white;

opacity:.6;

animation:float infinite ease-in-out;

}

@keyframes float{

0%{

transform:translateY(0);

opacity:0;

}

50%{

opacity:1;

}

100%{

transform:translateY(-60px);

opacity:0;

}

}

`;

document.head.appendChild(style);
