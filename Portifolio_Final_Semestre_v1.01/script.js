/* animação typing */
var typed = new Typed(".typing",{
    strings:["", "ao Dois", "ao Três", "ao Quatro", "ao Cinco", "ao Seis"
    , "ao Sete", "ao Oito", "ao Nove", "ao Dez", "ao Valete", "à Dama", "ao Rei"],
    typeSpeed:100,
    BackSpeed:60,
    loop: true
})
/* menu lateral seleção em laranja */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){

            for(let j=0;j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
    }