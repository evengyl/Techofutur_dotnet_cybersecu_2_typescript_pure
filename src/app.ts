import * as mesTypes from "./docs/typages"

console.log(mesTypes.a)
//n'a pas été exporté ---> console.log(mesTypes.xyz)

import { TestClassA, TestClassB, TestClassC } from "./docs/exportClass"
console.log("################################################################")


import {AssertionTypes} from "./docs/assertionsType"
new AssertionTypes()
console.log("################################################################")


import { StringInterpolation } from "./docs/stringInterpolation"
new StringInterpolation()
console.log("################################################################")


import { Narrowing } from "./docs/narrowing"
new Narrowing()
console.log("################################################################")


import { Admin } from "./docs/typeCustom"
let userAdmin : Admin = {
    name : "loic",
    firstName : "baudoux",
    isAdmin : true
}

class tutu implements Admin{
    name: string = ""
    firstName: string = ""
    isAdmin: boolean = true
}
//un type, c'est un alias d'interface, utilise quand on ne veux pas s'en servir comme interface
console.log("################################################################")


import { DateConverter, Human, Person, IVoiture, Allemandes} from "./docs/classes"
console.log(DateConverter.convertTimestampToDate("1660741384"))
console.log("################################################################")


//utilisation de export {} pour juste ajotuer le fichier ! sans rien d'autre ! très spécifique
import { } from "./docs/extendsArrayProto"
console.log("################################################################")



console.clear()
console.log("Décorateur de classes partie 1")
import { sealed, first, second, validateAge } from "./docs/decorators"

@sealed
class BugReport{

    type : string = "Report"
    title : string

    constructor(title : string){
        this.title = title
        //register to DB + Log in file etc....
        console.log(this.title)
    }

    showBugReport(){
        console.log(this.title, this.type)
    }
}


// interface BugReport{
//     test() : void
// }

// BugReport.prototype.test = () => {
//     let title = "Bug Report usurpation"
//     console.log(title)
// }

let newBug = new BugReport("Ceci est un bug report")
newBug.type = "BugReport"
newBug.title = "Other Bug"
newBug.showBugReport()
//newBug.test() --> comme elle est sealed je ne peux pas faire d'extension


console.clear()
console.log("Décorateur de Méthode partie 2")

class ExampleClass{

    @first()
    @second({
        option : {
            name : "bonjour",
            age : 42
        }
    })
    method(){
        console.log("Je suis dans la méthode Method de la classe ExampleClass")
    }

    //@validate //decorteur de validation de paramtre d'entrée de méthodes sur taille de string par taille
    // @inputvalidate()
    // validateMethodString(
    //     @ceInput() dansCetteProps : string
    // ){
    //     console.log(dansCetteProps)
    // }

    @validateAge({
        min : 1,
        max : 99
    })
    age : number
}




let example = new ExampleClass()
example.method()
example.age = 15
let ageDecorated = example.age
console.log(ageDecorated)


// console.clear()
// console.log("Décorateur de Props partie 3")
// console.log("################################################################")


