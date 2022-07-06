import { progressBar1, progressBar2, healthStatut, dracoloAnimation} from "./main.js";


export class Pokemon{
    constructor(nom, pv, image, attaq){
        this.nom = nom;
        this.pv = pv;
        this.image = image;
        this.attaq = attaq
    }

    attaquer(poke, poke2){
        this.pv -= poke.degat
        progressBar1.style.width = poke2.pv + "%"

    }
    heal(potion){
        let pvmax = this.pv += potion.effet
        progressBar2.style.width = this.pv + "% "
        healthStatut.innerHTML =  "100% "
        if (pvmax >100)
        console.log('trop de pv');
        

    }

    getAttaquer(poke, poke2){
        this.pv -= poke.degat
        progressBar2.style.width = poke2.pv + "%"
        dracoloAnimation()






    }
}


export class Attaq{
    constructor(nom, degat,  type, charge){
        this.nom = nom
        this.degat = degat
        this.type = type;
        this.charge = charge;
    }
}

export class Objet{
    constructor(nom, effet, montant){
        this.nom = nom;
        this.effet = effet;
        this.montant = montant
    }
}