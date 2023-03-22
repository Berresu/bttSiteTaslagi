let menu=document.getElementById("menujs");
menu.onclick=function(){
    let hakkimizda=document.createElement("li");
    let hakkimizdaText=document.createTextNode("Hakkımızda");
    hakkimizda.appendChild(hakkimizdaText);
    menu.appendChild(hakkimizda);
    
    let projeler=document.createElement("li");
    let projelerText=document.createTextNode("Projeler");
    projeler.appendChild(projelerText);
    menu.appendChild(projeler);
    
    let iletisim=document.createElement("li");
    let iletisimText=document.createTextNode("İletişim");
    iletisim.appendChild(iletisimText);
    menu.appendChild(iletisim);

    menu.style.listStyleType="none";
    menu.style.color="white";
    menu.style.textDecoration="none";
}
