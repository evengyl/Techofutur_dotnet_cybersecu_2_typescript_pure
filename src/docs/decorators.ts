
//décorateur de class
//par défaut un décorateur dois prévoir de récupérer le constructor de la classe décorée
export function sealed(constructor : Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

//décorateur de method
export function first()
{
    console.log("first est invoqué")
    return (target : any, methodeAppellante : string) => {
        console.log("Le décorateur first est en marche")
        //coder notre décorateur ici
    }
}

export function second(args : any)
{
    console.log("second est invoqué")
    console.log(args)

    return (target : any, methodeAppellante : string) => {
        console.log("Target de Second : ", target)
        console.log("Method : ", methodeAppellante)
        console.log("Le décorateur second est en marche")
        //coder notre décorateur ici
    }
}

//décorateur de property
export function validateAge({ min, max } : { min : number, max : number}){
    //le concept de retour de m'éthode callée, c'est pour permettre au dev de donner des params 
    //comme ci dessus, tout en concervant l'appel de target et key de notre décorateur système
    
    console.log(min, max)

    //attention la contrainte d'une méthode servant de décorateur, c'est qu'elle doit retourner son corp utile,
    //dans une sous fonction.... qui reçois par défaut target et props
    return (target : any, propsName : any) => {
        
        console.log("Target du décorateur ValidateAge : ", target)
        /*console.log("propsName : ", propsName)*/
        //ne pas oublier que le target c'est la class appelant en elle même ...
        //donc string interpolation sur propsname de target !
        //ici target.age ou target["age"]....
        let value = target[propsName] as any

        //le getter classique return la value
        const getterPerso = () => {
            return value
        }

        //un setter classique avec validation
        const setterPerso = (val : unknown) => {

            if(typeof val === "number" && val >= min && val <= max)
                value = val
            else
                throw new Error("Invalid value for ValidateAge property : Min : " + min + " Max : " + max)
        }

        //je veux ajouter à target : toute la classe pointée donc : ici dans l'exemple : ExampleClass
        //sur la propriété propsName : age
        //le get : getterPerso et set : setterPerso suivant
        Object.defineProperty(target, propsName, {
            get : getterPerso,
            set : setterPerso
        })
    }
}
