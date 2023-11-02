//################################
//# L'assertions de type
//################################

// <button id="addToCount">Add 1 to Count</button>
// <button id="remToCount">Rem 1 to Count</button>

export class AssertionTypes{

    constructor(){

        /*
        let buttonAdd : string = document.querySelector('#addToCount') as unknown as string
        console.log(buttonAdd.length)
        buttonAdd.addEventListener('click', () => {
            
        })

        Je force l'enlevement du type Element rendu par document.querySelector avec as unknown
        et je le reforce à être un string...
        buttonAdd.addEventListener   ne pourra jamais marcher !!!! car string ne possède pas addEventListener
        console.dir(buttonAdd)

        */


        
        let buttonRem : HTMLButtonElement = document.getElementById("remToCount") as HTMLButtonElement
        let buttonAdd : HTMLButtonElement = document.querySelector<HTMLButtonElement>("#addToCount")
        //tehniquement, ici c'est la partie générique de l'assertion, vu en détails plus loins....

    }
}

