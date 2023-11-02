export class StringInterpolation{

    constructor(){
        let str : string = "firstName"
        let user : Object = { 
            firstName: "John",
            lastName: "Doe"
        }
        let p : Object = { tutu : "John", toto : "Doe" }

        //indexion automatique
        console.log(p["tutu"])
        console.log(p["toto"])
        console.log("################################################################")



        //indexation + interpolation
        console.log(user[str])
        str = "lastName"
        console.log(user[str])
        console.log("################################################################")


        //ajout de props par interpollation de value string vers name props
        let ballec_str = "birthday"
        if(user[ballec_str])
        {
            console.log("Exist")
        }
        else
        {
            console.log("Not exist")
            user[ballec_str] = "01/06/1991"
        }
        console.log(user)
        //je ne peux pas faire ceci
        //console.log(user.ballec_str)
        //mais par string interpollation
        console.log(user[ballec_str])
        console.log("################################################################")


    }
}