export class Human{
    
    public gender : string
    public height : number
    public width : number

    private _etnic : string
    protected __colorEyes : string
}

let newHuman : Human = new Human()
newHuman.gender
newHuman.width
newHuman.height
//newHuman.__colorEyes ! protected
//newHuman._etnic ! private


export class Person extends Human{

    public id : number
    public name : string
    private lastName : string
    #_password : string 
    
    constructor(){
        super()
        this.#_password = "tutu"
        this.lastName = "tartempion"
        this.__colorEyes = "red"
        //this._etnic = "Blanco" // privat à Human
    }
}

let personLambda : Person = new Person()
personLambda.id
personLambda.name
//personLambda.lastName ! private
//personLambda.#_password ! private



export interface IVoiture{
    carburant : string
    isAuto : boolean
    couleur : string

    avance(vitesseActurel : number) : number
    recule(vitesseZero : number) : number
    remplirReservoir(sousous : number) : void
}


export class Allemandes implements IVoiture{

    carburant: string
    isAuto: boolean
    couleur: string
    avance(vitesseActurel: number): number {
        throw new Error("Method not implemented.")
    }
    recule(vitesseZero: number): number {
        throw new Error("Method not implemented.")
    }
    remplirReservoir(sousous: number): void {
        throw new Error("Method not implemented.")
    }

}



export class DateConverter extends Date
{
    static convertTimestampToDate(timestamp: string) : Date{
        return new Date(parseInt(timestamp))
    }
}
