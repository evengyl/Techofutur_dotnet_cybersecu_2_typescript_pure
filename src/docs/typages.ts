//################################
//# Le typages
//################################

const a : string = "Bonjour"
const b : number = 42
const c : boolean = false
const d : null = null
const e : string[] = ["bonjour", "les", "pignoufs"]
const f : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
const g : {} = {}
const h : Object = Object
const i : { [key: string]: string } = { name : "Loic", age : "42"}
const j : { name : string, age : number } = { name : "loic", age : 32 }
const k : Date = new Date()
const l : Function = () : void => { }
const m : () => void = () : void => { }
const n : (i : number, s : string, b : boolean ) => string[] = (i, s, b) : string[] => { return  ["a", "b"]}

//ne sera pas exporter
const xyz : string = "Faut sniffer la compote, ça fait tousser..."


export {
    a, b, c, d, e, f, g, h, i, j, k, l, m, n
}
