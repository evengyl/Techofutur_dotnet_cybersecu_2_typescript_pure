import * as mesTypes from "./docs/typages"

console.log(mesTypes.a)
//n'a pas été exporté ---> console.log(mesTypes.xyz)

import { TestClassA, TestClassB, TestClassC } from "./docs/exportClass"



import {AssertionTypes} from "./docs/assertionsType"
new AssertionTypes()



import { StringInterpolation } from "./docs/stringInterpolation"
new StringInterpolation()



import { Narrowing } from "./docs/narrowing"
new Narrowing()



import { Admin } from "./docs/typeCustom"
let userAdmin : Admin = {
    name : "loic",
    firstName : "baudoux",
    isAdmin : true
}

class tutu implements Admin{
    name: string
    firstName: string
    isAdmin: boolean
}
//un type, c'est un alias d'interface, utilise quand on ne veux pas s'en servir comme interface



import { DateConverter, Human, Person, IVoiture, Allemandes} from "./docs/classes"
console.log(DateConverter.convertTimestampToDate("1660741384"))




//utilisation de export {} pour juste ajotuer le fichier ! sans rien d'autre ! très spécifique
import { } from "./docs/extendsArrayProto"


