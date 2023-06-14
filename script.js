html{
    font-size: 62.5%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 2rem;
}

body{
    min-height: 100vh;
    
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 200px;
    grid-template-areas: 
    "header"
    "main"
    "footer"
    ;  
}
body > *{
    
    background-color: rgb(116, 54, 164);
}

header{
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header >h3{
    margin-left: 50px;
    margin-right: auto;
}

main{
    grid-area: main;
    display: flex;
    flex-direction: column;
}

main > section{
    height: auto;
    flex: 1;
}

section > div{
    flex: 1 1 50%;
    min-height: 60vh;
    position: relative;
}

section > div > img{
    width: 100%;
    height: 100%;
}
#yumurta{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

#bardak{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.aciklama{
    background-color: #f8f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
}

.aciklama > h4{
    font-size: 48px;
    margin-bottom: 16px;
}

.aciklama > a{
    align-self: flex-start;
    margin-top: 16px;
    text-decoration-color: rgb(175, 83, 241);
    text-decoration-thickness: 5px;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 5px;
    font-weight: bolder;
    text-shadow: 5px 5px 5px grey;
}

.aciklama > p {
    line-height: 25px;
}

.resim > img{
    width: 100%;
    height: 100%;
}
#intro {
    background-color: rgb(116, 54, 164);
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-end;
    padding-top: 10px;
    
}
header > h3{
    color: #fff;
    font-size: 4rem;
    font-family: 'Airstrike', sans-serif;
    z-index: 100;
}
#intro > img{
    width: 50%;
    margin-bottom: 5rem;
}

#musteriler{
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background: rgb(228, 194, 254);
    gap: 1vw;

}
#musteriler > h1{
    grid-column: 1/span 3;
    align-self: center;
    justify-self: center;
}
.musteri{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: auto;
}

.musteri > img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
.musteri:last-child{
    margin-right: 10vw;
    
}
.musteri:nth-child(2){
    margin-left: 10vw;
}
#galeri{
    display: flex;
    flex-wrap: nowrap;
}
#galeri > img{
    flex: 1 1 25%;
    max-width: 25vw;
    height: 200px;
}
footer{
    grid-area: footer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.altMenu{
    display: flex;
    list-style-type: none;
    gap: 3vw;
}
.altMenu > li a{
    text-decoration: none;
    color: rgb(187, 155, 238);
}
.sosyalMedya{
    display: flex;
    list-style-type: none;
    gap: 1vw;
}
::selection {
    color: rgb(255, 255, 255);
    background: rgb(171, 90, 251);
}

@media (max-width: 600px){
    header{
        flex-direction: column;
        justify-content: flex-end;  
    }
    header > img{
        width: 40%;
        margin-inline: auto;
    }
    header > ul{
        margin-inline: auto;
    }
    #intro > img{
        width: 80%;
    }
}

.navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgb(116, 54, 164);
    padding: 10px;
    color: #fff;
}
.burger-icon {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 5px;
}
.bar {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 2px 0;
}
ul {
    list-style-type: none;
    display: none;
    margin-top: 5px;
}
li {
    margin: 1px 0;
}
a {
    color: #fff;
    text-decoration: none;
}
.show {
    display: block;
}
.instagram-icon {
    width: 20px;
    height: 20px;
    background-image: url('instagram-icon.png');
    background-size: cover;
}  
