import { Pokemon, Attaq, Objet } from "./module.js";



// attq Dracolosse

let  colere = new Attaq("COLERE",Math.floor(Math.random()*15)+35, "DRAGON", 15)
let  dracoChoc = new Attaq("DRACOCHOC", Math.floor(Math.random()*20)+20, "DRAGON", 25)
let  dracoGriffes = new Attaq("Dracogriffe",  Math.floor(Math.random()*20)+15, "VOL", 30)
let  dracoMeteor = new Attaq("DRACO METEORE", Math.floor(Math.random()*80)+10, "DRAGON", 5);
let dracoAtq = [ colere, dracoChoc, dracoGriffes, dracoMeteor]


// Attq Dracaufeu
let  deflagration = new Attaq("DEFLAGRATION",Math.floor(Math.random()*15)+35, "FEU", 15)
let  danceFlemme = new Attaq("DANCE-FLEMME", Math.floor(Math.random()*20)+20, "FEU", 25)
let  cruAile = new Attaq("CRU-AILE",  Math.floor(Math.random()*20)+15, "VOL", 30)
let  dracoGriffe = new Attaq("DRACOGRIFFE", Math.floor(Math.random()*80)+10, "DRAGON", 5)

let sortArr = [deflagration, danceFlemme, cruAile, dracoGriffe];

console.log(Math.floor(Math.random()*10)+20); 
// Pikachu
let coupdJus= new Attaq("COUP D'JUS", Math.floor(Math.random()*15)+35, 'Electrik', 20)
let eclairFou = new Attaq("ECLAIR FOU", Math.floor(Math.random()*20)+20, 'Electrik', 20)
let fatalFoudre= new Attaq("FATAL-FOUDRE", Math.floor(Math.random()*20)+15, "Electrik", 30)
let tonnere =  new Attaq("TONNERRE", Math.floor(Math.random()*80)+10, "Elecktrick", 5 )
let pikaAttaq =  [coupdJus.nom, eclairFou.nom, fatalFoudre.nom, tonnere.nom]


// Tortank
let Hydrocanon = new Attaq("HYDROCANON", Math.floor(Math.random()*15)+35, 'EAU', 20)	
let Hydroblast =  new Attaq("HYDROBLAST", Math.floor(Math.random()*20)+20, 'EAU', 20)
let LaserGlace = 	new Attaq("LASER GLACE", Math.floor(Math.random()*20)+15, "GLACE", 30)
let Luminocanon	= new Attaq("LUMINOCANON", Math.floor(Math.random()*80)+10, "ACIER", 5 )
let tortankAttaq = [Hydroblast.nom, Hydrocanon.nom, LaserGlace.nom, Luminocanon.nom]
// Mew

let griffeOmbre = new Attaq("GRIFFE OMBRE", Math.floor(Math.random()*15)+35, 'SPECTRE', 20)	
let dracoQueue =  new Attaq("DRACO-QUEUE", Math.floor(Math.random()*20)+20, 'DRAGON', 20)
let souffleGlace= 	new Attaq("SOUFFLE GLACE", Math.floor(Math.random()*20)+15, "GLACE", 30)
let rayonCharge	= new Attaq("RAYON CHARGE", Math.floor(Math.random()*80)+10, "ELECTRIK", 5 )
let mewAttaq = [griffeOmbre.nom, dracoQueue.nom, souffleGlace.nom, rayonCharge.nom]

// Abra
let ballOmbre = new Attaq("BALL'OMBRE", Math.floor(Math.random()*15)+35, 'SPECTRE', 20)	
let chocPsy =  new Attaq("CHOC PSY", Math.floor(Math.random()*20)+20, 'PSY', 20)
let psyko= 	new Attaq("PSYKO", Math.floor(Math.random()*20)+15, "PSY", 30)
let devoReve	= new Attaq("RAYON CHARGE", Math.floor(Math.random()*80)+10, "PSY", 5 )
let abraAttaq = [ballOmbre.nom, chocPsy.nom , psyko.nom, devoReve.nom];


// MY POKEMONS

let  dracolosse = new Pokemon("Dracolosse", 100, []);
let dracaufeu = new Pokemon("Dracaufeu", 100,  [ ], ["DEFLAGRATION",
"DANCE-FLEMME",
"CRU-AILE",
"DRACOGRIFFE", "RETOUR"] );    
let mew = new Pokemon("Mew", 100,  './public/images/mew.png', ['GRIFFE OMBRE','DRACO-QUEUE', "SOUFFLE GLACE","RAYON CHARGE"  ] );    
let pikachu = new Pokemon("Pikachu", 100,  './public/images/pika.png', ["COUP D'JUS",
"ECLAIR FOU",
"FATAL-FOUDRE",
"TONNERRE", "RETOUR"] );    
let tortank = new Pokemon("Tortank", 100,  './public/images/tortank.png', ['HYDROCANON',
'HYDROBLAST',
"LASER GLACE",
"LUMINOCANON" , "RETOUR"]);    
let abra = new Pokemon("abra", 100,  './public/images/abra.png', ["BALL'OMBRE",
"CHOC PSY",
"PSYKO",
"RAYON CHARGE", "RETOUR"] );    
let changePokeList = [mew,  abra, pikachu, tortank, dracaufeu];
let changePokeListattaq = [mew.attaq.textContent,  abra.attaq.textContent, pikachu.attaq.textContent, tortank.attaq.textContent];
let allAttaq = [mewAttaq,  abraAttaq, pikaAttaq, tortankAttaq];

console.log(abraAttaq);
// Objet
let soins = new Objet("Potion", 30, 2)



// Menu
let menu = document.querySelector(".menu")
// BUTTONS
// retour
let retour = document.querySelector(".retour");
let retour2 = document.querySelector(".retour2");
// atq

export let progressBar1 = document.querySelector(".pg1");
export let progressBar2 = document.querySelector(".pg2");
export let dracoloAnimation = function(){
    coloimg2.classList.add("animation2") }
console.log();

let def = document.querySelector(".def");
let dance = document.querySelector(".dance");
let cru = document.querySelector(".cru");
let dracoff = document.querySelector(".dracogriffe")
let dracaufeuimg = document.querySelector('.draco')
let coloimg2 = document.querySelector('.colo')


let attacksArr = [def, dance, cru, dracoff];

let upperBtn = document.querySelector(".upper").querySelectorAll("li");
let lowerBtn = document.querySelector(".lower").querySelectorAll("li");
let attaqueList = document.querySelector(".attaque");
let attaqueListEach = document.querySelector(".attaque").querySelectorAll('li');
let atqDialogue = document.querySelector('.utiliseAtq')
let getAtqDialogue = document.querySelector('.dracoUtiliseAtq');
export let healthStatut = document.querySelector('.health-statut')
healthStatut.innerText = progressBar2.style.width
console.log(attaqueList);



// retour
retour.addEventListener("click", function(){
    attaqueList.replaceWith(menu)
})

// atq

upperBtn[0].addEventListener("click", function(){
    menu.replaceWith(attaqueList)
    attaqueList.classList.remove("atq")
})

for (let i = 0; i<sortArr.length; i++){
    attacksArr[i].addEventListener("click", function(){
       dracolosse.attaquer(sortArr[i], dracolosse);

       let addfun = function(){
       dracaufeuimg.classList.add("animation")

       }
    

       function reset_animation() {
        var el = document.querySelector('.animation');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
      }
      function reset_animation2() {
        var el = document.querySelector('.animation2');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
      }
 
       addfun()
       reset_animation()
       dracoloAnimation()
       reset_animation2()

       let addFun2 = function(){
        dracaufeuimg.classList.add("animation4")
    
       }
       function reset_animation3() {
        var el = document.querySelector('.animation3');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
      }
    //    remfun()
    //    dracaufeuimg.style.animation = " bzz ease-in-out 1s"
    //    dracaufeuimg.classList.add("animation")
    //    dracaufeuimg.classList.remove("animation")
    //    dracaufeuimg.classList.add("animation")

    //    dracaufeuimg2

        
    //    console.log(dracolosse.pv);   
       attaqueList.replaceWith(atqDialogue)
   



    //    function reset_animation2() {
    //     var el = document.querySelector('.animation2');
    //     el.style.animation = 'none';
    //     el.offsetHeight; /* trigger reflow */
    //     el.style.animation = null; 
    //   }
    //   reset_animation2()
       atqDialogue.classList.remove('atq')
       if (changePokeList[i].pv <= 0){
        progressBar2.style.width = "0%"
        menu.innerHTML = "VOUS AVEZ PERDU"
        console.log('yoo');
       }

       if (dracolosse.pv >=0){
        atqDialogue.addEventListener('click', function(){
            // console.log('test');
            
            atqDialogue.replaceWith(getAtqDialogue)
            getAtqDialogue.classList.remove("atq")
    
    
            getAtqDialogue.addEventListener('click', function(){


                
    
                for (let i =0; i< dracoAtq.length; i++){
    
                    // changePokeList[i].attaquer(dracoAtq, changePokeList[i]);
                    changePokeList[i].getAttaquer(dracoAtq[i], changePokeList[i])
                    healthStatut.innerText = progressBar2.style.width
                    coloimg2.classList.add("animation3")
                    reset_animation3()
                    addFun2()
                    // reset_animation3()

    //    reset_animation()

                    
    
                }
                getAtqDialogue.replaceWith(menu)
            }) 
            
          
           })
            
    }  if (dracolosse.pv <= 0){
        progressBar1.style.width = "0%"
        menu.textContent = "VOUS GAGNEZ LE COMBAT"
    }
    

     


    })
}


// Items
let items = document.querySelector(".items");
let potionHealth = document.querySelector(".utiliser-potion");

lowerBtn[0].addEventListener("click", function(){
    menu.replaceWith(items)
    items.classList.remove("atq")
})

for(let i = 0; i <changePokeList.length;i++){

    
potionHealth.addEventListener("click", function(){
    changePokeList[i].heal(soins)
    console.log(dracaufeu.pv);
})
    
}



retour2.addEventListener("click", function(){
    items.replaceWith(menu)
})

console.log(dracolosse.pv);

// Pokemon
let pkmn = document.querySelector('.pokemon');
let pokemonsList = document.querySelector('.pokemon').getElementsByTagName('li')
let retour3 = document.querySelector(".retour3");
let liPika = document.querySelector(".pika");
let liMew = document.querySelector(".mew");
let liTortank = document.querySelector(".tortank");
let liAbra = document.querySelector(".abra");
let pokeTitle = document.querySelector('.p-name')


let arrOfPoke = [liAbra,liMew,liPika,liTortank];
let newimg = '<img class="draco" src="./public/images/tortank.png" alt="">'

    upperBtn[1].addEventListener('click', function(){
        menu.replaceWith(pkmn)
        pkmn.classList.remove("atq")
    })

    retour3.addEventListener('click', function(){
        pkmn.replaceWith(menu)
    })

    for(let i=0; i<pokemonsList.length -1; i++){
console.log(attaqueListEach[i].textContent);
        
        pokemonsList[i].addEventListener('click', function(){

            dracaufeuimg.setAttribute('src', changePokeList[i].image)
            
            pokeTitle.innerHTML = changePokeList[i].nom.toUpperCase()
            console.log(changePokeList[i]);
            console.log(changePokeListattaq);
            let j = 0
            attaqueListEach.forEach(el => {
                el.innerText = changePokeList[i].attaq[j++]
            })
            attaqueListEach[i].innerText = changePokeList[i].attaq[i]
        
        })
    }

// attaquer 


// fuite

let fuire = document.querySelector('.fuite')
lowerBtn[1].addEventListener('click', function(){
    menu.replaceWith(fuire)
    fuire.classList.remove('atq')
    fuire.addEventListener('click', function(){
        fuire.replaceWith(menu)
    })
    
})