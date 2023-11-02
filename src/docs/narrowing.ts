export class Narrowing{
    constructor(){
        console.clear()

        let paddingNumber : number = 15
        let paddingStr : string = "     "
        let input : string = "Bonjour"

        let result = this.paddingLeft(paddingNumber, input)
        console.log(result)

        console.clear()
        let id1 : number | string | string[] | null = 42
        this.detectId(id1)

        console.clear()
        let a1 : MouseEvent = new MouseEvent("mouse")
        let a2 : HTMLInputElement = document.createElement("input")
        let a3 : undefined
        this.exempleHtml(a2)


        console.clear()
        let bthD = new Date("06/01/1991")
        let bthDStr = "Un String qui contient une date : 06/01/1991"
        this.isDate(bthDStr)


        console.clear()
        let pet : Fish = { swim : () => {}}
        let pet2 : Bird = { fly : () => {}}
        console.log(this.isFish(pet2))

        console.clear()
        let user = new User("Loïc")
        let resp = this.isUser(user)
        let resp2 = this.isUser("user2")
        console.log(resp)
        console.log(resp2)
    }

    paddingLeft(padding : number | string, input : string){

        if(typeof padding === "number"){
            //si c'est un number
            return " ".repeat(padding) + input
        }
        else{
            //si c'est sur string
            return padding + input
        }
    }

    detectId(id : string | number | null | string[])
    {
        if(id)
        {
            //on sait qu'il n'est pas null
            if(typeof id === "string"){
                //on sait qu'il d'office string
            }
            else if(typeof id === "number")
            {
                //on ait qu'il est d'office number
            }
            else
            {
                id.findIndex(i => i == i)
            }
        }
        else{
            //id est de type null ou undefined
        }
    }

    exempleHtml(a : MouseEvent | HTMLInputElement | undefined)
    {
        if(a !== undefined)
        {
            //si la propriété value existe dans l'object a
            if("value" in a)
            {
                a.value = "Bonjour"
                console.dir(a)
                //si oui, c'est d'office un HtmlInputElement
            }
            else{
                //MouseEvent car il n'a pas la props "value" !!!
                console.log(a)
            }
        }
        else{
            console.log(a)
        }
    }


    isDate(a : Date | string)
    {
        if(a instanceof Date){
            console.log(a.toUTCString())
        }
        else{
            console.log(a.toUpperCase())
        }
    }


    isFish(pet: Fish | Bird) : pet is Fish
    {
        //return pet is Fish vaux en plus beau pour return boolean
        //dosi renvoyer uniquement un boolean true si c'est fish
        //false en cas de bird, le pet is permet de forcer le retour boolean
        //et on effectue ce retour bolean grace à la comparaison !==
        return (pet as Fish).swim !== undefined;
    }

    isUser(user : any) : user is User
    {
        return user instanceof User
    }
}

type Fish = { 
    swim: () => void
}

type Bird = { 
    fly: () => void
}

class User{
    name : string
    constructor(name : string) {
        this.name = name
    }
}