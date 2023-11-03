/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/assertionsType.ts":
/*!************************************!*\
  !*** ./src/docs/assertionsType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssertionTypes: () => (/* binding */ AssertionTypes)
/* harmony export */ });
//################################
//# L'assertions de type
//################################
// <button id="addToCount">Add 1 to Count</button>
// <button id="remToCount">Rem 1 to Count</button>
class AssertionTypes {
    constructor() {
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
        let buttonRem = document.getElementById("remToCount");
        let buttonAdd = document.querySelector("#addToCount");
        //tehniquement, ici c'est la partie générique de l'assertion, vu en détails plus loins....
    }
}


/***/ }),

/***/ "./src/docs/classes.ts":
/*!*****************************!*\
  !*** ./src/docs/classes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Allemandes: () => (/* binding */ Allemandes),
/* harmony export */   DateConverter: () => (/* binding */ DateConverter),
/* harmony export */   Human: () => (/* binding */ Human),
/* harmony export */   Person: () => (/* binding */ Person)
/* harmony export */ });
class Human {
    gender;
    height;
    width;
    _etnic;
    __colorEyes;
}
let newHuman = new Human();
newHuman.gender;
newHuman.width;
newHuman.height;
//newHuman.__colorEyes ! protected
//newHuman._etnic ! private
class Person extends Human {
    id;
    name;
    lastName;
    #_password;
    constructor() {
        super();
        this.#_password = "tutu";
        this.lastName = "tartempion";
        this.__colorEyes = "red";
        //this._etnic = "Blanco" // privat à Human
    }
}
let personLambda = new Person();
personLambda.id;
personLambda.name;
class Allemandes {
    carburant;
    isAuto;
    couleur;
    avance(vitesseActurel) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseZero) {
        throw new Error("Method not implemented.");
    }
    remplirReservoir(sousous) {
        throw new Error("Method not implemented.");
    }
}
class DateConverter extends Date {
    static convertTimestampToDate(timestamp) {
        return new Date(parseInt(timestamp));
    }
}


/***/ }),

/***/ "./src/docs/decorators.ts":
/*!********************************!*\
  !*** ./src/docs/decorators.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   first: () => (/* binding */ first),
/* harmony export */   sealed: () => (/* binding */ sealed),
/* harmony export */   second: () => (/* binding */ second),
/* harmony export */   validateAge: () => (/* binding */ validateAge)
/* harmony export */ });
//décorateur de class
//par défaut un décorateur dois prévoir de récupérer le constructor de la classe décorée
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
//décorateur de method
function first() {
    console.log("first est invoqué");
    return (target, methodeAppellante) => {
        console.log("Le décorateur first est en marche");
        //coder notre décorateur ici
    };
}
function second(args) {
    console.log("second est invoqué");
    console.log(args);
    return (target, methodeAppellante) => {
        console.log("Target de Second : ", target);
        console.log("Method : ", methodeAppellante);
        console.log("Le décorateur second est en marche");
        //coder notre décorateur ici
    };
}
//décorateur de property
function validateAge({ min, max }) {
    //le concept de retour de m'éthode callée, c'est pour permettre au dev de donner des params 
    //comme ci dessus, tout en concervant l'appel de target et key de notre décorateur système
    console.log(min, max);
    //attention la contrainte d'une méthode servant de décorateur, c'est qu'elle doit retourner son corp utile,
    //dans une sous fonction.... qui reçois par défaut target et props
    return (target, propsName) => {
        console.log("Target du décorateur ValidateAge : ", target);
        /*console.log("propsName : ", propsName)*/
        //ne pas oublier que le target c'est la class appelant en elle même ...
        //donc string interpolation sur propsname de target !
        //ici target.age ou target["age"]....
        let value = target[propsName];
        //le getter classique return la value
        const getterPerso = () => {
            return value;
        };
        //un setter classique avec validation
        const setterPerso = (val) => {
            if (typeof val === "number" && val >= min && val <= max)
                value = val;
            else
                throw new Error("Invalid value for ValidateAge property : Min : " + min + " Max : " + max);
        };
        //je veux ajouter à target : toute la classe pointée donc : ici dans l'exemple : ExampleClass
        //sur la propriété propsName : age
        //le get : getterPerso et set : setterPerso suivant
        Object.defineProperty(target, propsName, {
            get: getterPerso,
            set: setterPerso
        });
    };
}


/***/ }),

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Narrowing: () => (/* binding */ Narrowing)
/* harmony export */ });
class Narrowing {
    constructor() {
        console.clear();
        let paddingNumber = 15;
        let paddingStr = "     ";
        let input = "Bonjour";
        let result = this.paddingLeft(paddingNumber, input);
        console.log(result);
        console.clear();
        let id1 = 42;
        this.detectId(id1);
        console.clear();
        let a1 = new MouseEvent("mouse");
        let a2 = document.createElement("input");
        let a3;
        this.exempleHtml(a2);
        console.clear();
        let bthD = new Date("06/01/1991");
        let bthDStr = "Un String qui contient une date : 06/01/1991";
        this.isDate(bthDStr);
        console.clear();
        let pet = { swim: () => { } };
        let pet2 = { fly: () => { } };
        console.log(this.isFish(pet2));
        console.clear();
        let user = new User("Loïc");
        let resp = this.isUser(user);
        let resp2 = this.isUser("user2");
        console.log(resp);
        console.log(resp2);
    }
    paddingLeft(padding, input) {
        if (typeof padding === "number") {
            //si c'est un number
            return " ".repeat(padding) + input;
        }
        else {
            //si c'est sur string
            return padding + input;
        }
    }
    detectId(id) {
        if (id) {
            //on sait qu'il n'est pas null
            if (typeof id === "string") {
                //on sait qu'il d'office string
            }
            else if (typeof id === "number") {
                //on ait qu'il est d'office number
            }
            else {
                id.findIndex(i => i == i);
            }
        }
        else {
            //id est de type null ou undefined
        }
    }
    exempleHtml(a) {
        if (a !== undefined) {
            //si la propriété value existe dans l'object a
            if ("value" in a) {
                a.value = "Bonjour";
                console.dir(a);
                //si oui, c'est d'office un HtmlInputElement
            }
            else {
                //MouseEvent car il n'a pas la props "value" !!!
                console.log(a);
            }
        }
        else {
            console.log(a);
        }
    }
    isDate(a) {
        if (a instanceof Date) {
            console.log(a.toUTCString());
        }
        else {
            console.log(a.toUpperCase());
        }
    }
    isFish(pet) {
        //return pet is Fish vaux en plus beau pour return boolean
        //dosi renvoyer uniquement un boolean true si c'est fish
        //false en cas de bird, le pet is permet de forcer le retour boolean
        //et on effectue ce retour bolean grace à la comparaison !==
        return pet.swim !== undefined;
    }
    isUser(user) {
        return user instanceof User;
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/docs/stringInterpolation.ts":
/*!*****************************************!*\
  !*** ./src/docs/stringInterpolation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringInterpolation: () => (/* binding */ StringInterpolation)
/* harmony export */ });
class StringInterpolation {
    constructor() {
        let str = "firstName";
        let user = {
            firstName: "John",
            lastName: "Doe"
        };
        let p = { tutu: "John", toto: "Doe" };
        //indexion automatique
        console.log(p["tutu"]);
        console.log(p["toto"]);
        console.log("################################################################");
        //indexation + interpolation
        console.log(user[str]);
        str = "lastName";
        console.log(user[str]);
        console.log("################################################################");
        //ajout de props par interpollation de value string vers name props
        let ballec_str = "birthday";
        if (user[ballec_str]) {
            console.log("Exist");
        }
        else {
            console.log("Not exist");
            user[ballec_str] = "01/06/1991";
        }
        console.log(user);
        //je ne peux pas faire ceci
        //console.log(user.ballec_str)
        //mais par string interpollation
        console.log(user[ballec_str]);
        console.log("################################################################");
    }
}


/***/ }),

/***/ "./src/docs/typages.ts":
/*!*****************************!*\
  !*** ./src/docs/typages.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ b),
/* harmony export */   c: () => (/* binding */ c),
/* harmony export */   d: () => (/* binding */ d),
/* harmony export */   e: () => (/* binding */ e),
/* harmony export */   f: () => (/* binding */ f),
/* harmony export */   g: () => (/* binding */ g),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   i: () => (/* binding */ i),
/* harmony export */   j: () => (/* binding */ j),
/* harmony export */   k: () => (/* binding */ k),
/* harmony export */   l: () => (/* binding */ l),
/* harmony export */   m: () => (/* binding */ m),
/* harmony export */   n: () => (/* binding */ n)
/* harmony export */ });
//################################
//# Le typages
//################################
const a = "Bonjour";
const b = 42;
const c = false;
const d = null;
const e = ["bonjour", "les", "pignoufs"];
const f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const g = {};
const h = Object;
const i = { name: "Loic", age: "42" };
const j = { name: "loic", age: 32 };
const k = new Date();
const l = () => { };
const m = () => { };
const n = (i, s, b) => { return ["a", "b"]; };
//ne sera pas exporter
const xyz = "Faut sniffer la compote, ça fait tousser...";



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_typages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/typages */ "./src/docs/typages.ts");
/* harmony import */ var _docs_assertionsType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/assertionsType */ "./src/docs/assertionsType.ts");
/* harmony import */ var _docs_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/stringInterpolation */ "./src/docs/stringInterpolation.ts");
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
/* harmony import */ var _docs_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/classes */ "./src/docs/classes.ts");
/* harmony import */ var _docs_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs/decorators */ "./src/docs/decorators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

console.log(_docs_typages__WEBPACK_IMPORTED_MODULE_0__.a);
console.log("################################################################");

new _docs_assertionsType__WEBPACK_IMPORTED_MODULE_1__.AssertionTypes();
console.log("################################################################");

new _docs_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__.StringInterpolation();
console.log("################################################################");

new _docs_narrowing__WEBPACK_IMPORTED_MODULE_3__.Narrowing();
console.log("################################################################");
let userAdmin = {
    name: "loic",
    firstName: "baudoux",
    isAdmin: true
};
class tutu {
    name = "";
    firstName = "";
    isAdmin = true;
}
//un type, c'est un alias d'interface, utilise quand on ne veux pas s'en servir comme interface
console.log("################################################################");

console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_4__.DateConverter.convertTimestampToDate("1660741384"));
console.log("################################################################");
console.log("################################################################");
console.clear();
console.log("Décorateur de classes partie 1");

let BugReport = class BugReport {
    type = "Report";
    title;
    constructor(title) {
        this.title = title;
        //register to DB + Log in file etc....
        console.log(this.title);
    }
    showBugReport() {
        console.log(this.title, this.type);
    }
};
BugReport = __decorate([
    _docs_decorators__WEBPACK_IMPORTED_MODULE_5__.sealed
], BugReport);
// interface BugReport{
//     test() : void
// }
// BugReport.prototype.test = () => {
//     let title = "Bug Report usurpation"
//     console.log(title)
// }
let newBug = new BugReport("Ceci est un bug report");
newBug.type = "BugReport";
newBug.title = "Other Bug";
newBug.showBugReport();
//newBug.test() --> comme elle est sealed je ne peux pas faire d'extension
console.clear();
console.log("Décorateur de Méthode partie 2");
class ExampleClass {
    method() {
        console.log("Je suis dans la méthode Method de la classe ExampleClass");
    }
    //@validate //decorteur de validation de paramtre d'entrée de méthodes sur taille de string par taille
    // @inputvalidate()
    // validateMethodString(
    //     @ceInput() dansCetteProps : string
    // ){
    //     console.log(dansCetteProps)
    // }
    age;
}
__decorate([
    (0,_docs_decorators__WEBPACK_IMPORTED_MODULE_5__.first)(),
    (0,_docs_decorators__WEBPACK_IMPORTED_MODULE_5__.second)({
        option: {
            name: "bonjour",
            age: 42
        }
    })
], ExampleClass.prototype, "method", null);
__decorate([
    (0,_docs_decorators__WEBPACK_IMPORTED_MODULE_5__.validateAge)({
        min: 1,
        max: 99
    })
], ExampleClass.prototype, "age", void 0);
let example = new ExampleClass();
example.method();
example.age = 15;
let ageDecorated = example.age;
console.log(ageDecorated);
// console.clear()
// console.log("Décorateur de Props partie 3")
// console.log("################################################################")

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUMyQztBQUMzQyxZQUFZLDRDQUFVO0FBQ3RCO0FBQ3VEO0FBQ3ZELElBQUksZ0VBQWM7QUFDbEI7QUFDaUU7QUFDakUsSUFBSSwwRUFBbUI7QUFDdkI7QUFDNkM7QUFDN0MsSUFBSSxzREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQy9DLFlBQVksd0RBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQUs7QUFDVCxJQUFJLHdEQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksNkRBQVc7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjL2RvY3MvYXNzZXJ0aW9uc1R5cGUudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvZG9jcy9jbGFzc2VzLnRzIiwid2VicGFjazovL3RzLy4vc3JjL2RvY3MvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy9kb2NzL25hcnJvd2luZy50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy9kb2NzL3N0cmluZ0ludGVycG9sYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvZG9jcy90eXBhZ2VzLnRzIiwid2VicGFjazovL3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIyBMJ2Fzc2VydGlvbnMgZGUgdHlwZVxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gPGJ1dHRvbiBpZD1cImFkZFRvQ291bnRcIj5BZGQgMSB0byBDb3VudDwvYnV0dG9uPlxuLy8gPGJ1dHRvbiBpZD1cInJlbVRvQ291bnRcIj5SZW0gMSB0byBDb3VudDwvYnV0dG9uPlxuZXhwb3J0IGNsYXNzIEFzc2VydGlvblR5cGVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLypcbiAgICAgICAgbGV0IGJ1dHRvbkFkZCA6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0NvdW50JykgYXMgdW5rbm93biBhcyBzdHJpbmdcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uQWRkLmxlbmd0aClcbiAgICAgICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgSmUgZm9yY2UgbCdlbmxldmVtZW50IGR1IHR5cGUgRWxlbWVudCByZW5kdSBwYXIgZG9jdW1lbnQucXVlcnlTZWxlY3RvciBhdmVjIGFzIHVua25vd25cbiAgICAgICAgZXQgamUgbGUgcmVmb3JjZSDDoCDDqnRyZSB1biBzdHJpbmcuLi5cbiAgICAgICAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIgICBuZSBwb3VycmEgamFtYWlzIG1hcmNoZXIgISEhISBjYXIgc3RyaW5nIG5lIHBvc3PDqGRlIHBhcyBhZGRFdmVudExpc3RlbmVyXG4gICAgICAgIGNvbnNvbGUuZGlyKGJ1dHRvbkFkZClcblxuICAgICAgICAqL1xuICAgICAgICBsZXQgYnV0dG9uUmVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1Ub0NvdW50XCIpO1xuICAgICAgICBsZXQgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb0NvdW50XCIpO1xuICAgICAgICAvL3RlaG5pcXVlbWVudCwgaWNpIGMnZXN0IGxhIHBhcnRpZSBnw6luw6lyaXF1ZSBkZSBsJ2Fzc2VydGlvbiwgdnUgZW4gZMOpdGFpbHMgcGx1cyBsb2lucy4uLi5cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSHVtYW4ge1xuICAgIGdlbmRlcjtcbiAgICBoZWlnaHQ7XG4gICAgd2lkdGg7XG4gICAgX2V0bmljO1xuICAgIF9fY29sb3JFeWVzO1xufVxubGV0IG5ld0h1bWFuID0gbmV3IEh1bWFuKCk7XG5uZXdIdW1hbi5nZW5kZXI7XG5uZXdIdW1hbi53aWR0aDtcbm5ld0h1bWFuLmhlaWdodDtcbi8vbmV3SHVtYW4uX19jb2xvckV5ZXMgISBwcm90ZWN0ZWRcbi8vbmV3SHVtYW4uX2V0bmljICEgcHJpdmF0ZVxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIEh1bWFuIHtcbiAgICBpZDtcbiAgICBuYW1lO1xuICAgIGxhc3ROYW1lO1xuICAgICNfcGFzc3dvcmQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI19wYXNzd29yZCA9IFwidHV0dVwiO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gXCJ0YXJ0ZW1waW9uXCI7XG4gICAgICAgIHRoaXMuX19jb2xvckV5ZXMgPSBcInJlZFwiO1xuICAgICAgICAvL3RoaXMuX2V0bmljID0gXCJCbGFuY29cIiAvLyBwcml2YXQgw6AgSHVtYW5cbiAgICB9XG59XG5sZXQgcGVyc29uTGFtYmRhID0gbmV3IFBlcnNvbigpO1xucGVyc29uTGFtYmRhLmlkO1xucGVyc29uTGFtYmRhLm5hbWU7XG5leHBvcnQgY2xhc3MgQWxsZW1hbmRlcyB7XG4gICAgY2FyYnVyYW50O1xuICAgIGlzQXV0bztcbiAgICBjb3VsZXVyO1xuICAgIGF2YW5jZSh2aXRlc3NlQWN0dXJlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcmVjdWxlKHZpdGVzc2VaZXJvKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICByZW1wbGlyUmVzZXJ2b2lyKHNvdXNvdXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVDb252ZXJ0ZXIgZXh0ZW5kcyBEYXRlIHtcbiAgICBzdGF0aWMgY29udmVydFRpbWVzdGFtcFRvRGF0ZSh0aW1lc3RhbXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRpbWVzdGFtcCkpO1xuICAgIH1cbn1cbiIsIi8vZMOpY29yYXRldXIgZGUgY2xhc3Ncbi8vcGFyIGTDqWZhdXQgdW4gZMOpY29yYXRldXIgZG9pcyBwcsOpdm9pciBkZSByw6ljdXDDqXJlciBsZSBjb25zdHJ1Y3RvciBkZSBsYSBjbGFzc2UgZMOpY29yw6llXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKGNvbnN0cnVjdG9yKSB7XG4gICAgT2JqZWN0LnNlYWwoY29uc3RydWN0b3IpO1xuICAgIE9iamVjdC5zZWFsKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG59XG4vL2TDqWNvcmF0ZXVyIGRlIG1ldGhvZFxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgZXN0IGludm9xdcOpXCIpO1xuICAgIHJldHVybiAodGFyZ2V0LCBtZXRob2RlQXBwZWxsYW50ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxlIGTDqWNvcmF0ZXVyIGZpcnN0IGVzdCBlbiBtYXJjaGVcIik7XG4gICAgICAgIC8vY29kZXIgbm90cmUgZMOpY29yYXRldXIgaWNpXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwic2Vjb25kIGVzdCBpbnZvcXXDqVwiKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzKTtcbiAgICByZXR1cm4gKHRhcmdldCwgbWV0aG9kZUFwcGVsbGFudGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUYXJnZXQgZGUgU2Vjb25kIDogXCIsIHRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0aG9kIDogXCIsIG1ldGhvZGVBcHBlbGxhbnRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMZSBkw6ljb3JhdGV1ciBzZWNvbmQgZXN0IGVuIG1hcmNoZVwiKTtcbiAgICAgICAgLy9jb2RlciBub3RyZSBkw6ljb3JhdGV1ciBpY2lcbiAgICB9O1xufVxuLy9kw6ljb3JhdGV1ciBkZSBwcm9wZXJ0eVxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWdlKHsgbWluLCBtYXggfSkge1xuICAgIC8vbGUgY29uY2VwdCBkZSByZXRvdXIgZGUgbSfDqXRob2RlIGNhbGzDqWUsIGMnZXN0IHBvdXIgcGVybWV0dHJlIGF1IGRldiBkZSBkb25uZXIgZGVzIHBhcmFtcyBcbiAgICAvL2NvbW1lIGNpIGRlc3N1cywgdG91dCBlbiBjb25jZXJ2YW50IGwnYXBwZWwgZGUgdGFyZ2V0IGV0IGtleSBkZSBub3RyZSBkw6ljb3JhdGV1ciBzeXN0w6htZVxuICAgIGNvbnNvbGUubG9nKG1pbiwgbWF4KTtcbiAgICAvL2F0dGVudGlvbiBsYSBjb250cmFpbnRlIGQndW5lIG3DqXRob2RlIHNlcnZhbnQgZGUgZMOpY29yYXRldXIsIGMnZXN0IHF1J2VsbGUgZG9pdCByZXRvdXJuZXIgc29uIGNvcnAgdXRpbGUsXG4gICAgLy9kYW5zIHVuZSBzb3VzIGZvbmN0aW9uLi4uLiBxdWkgcmXDp29pcyBwYXIgZMOpZmF1dCB0YXJnZXQgZXQgcHJvcHNcbiAgICByZXR1cm4gKHRhcmdldCwgcHJvcHNOYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IGR1IGTDqWNvcmF0ZXVyIFZhbGlkYXRlQWdlIDogXCIsIHRhcmdldCk7XG4gICAgICAgIC8qY29uc29sZS5sb2coXCJwcm9wc05hbWUgOiBcIiwgcHJvcHNOYW1lKSovXG4gICAgICAgIC8vbmUgcGFzIG91YmxpZXIgcXVlIGxlIHRhcmdldCBjJ2VzdCBsYSBjbGFzcyBhcHBlbGFudCBlbiBlbGxlIG3Dqm1lIC4uLlxuICAgICAgICAvL2RvbmMgc3RyaW5nIGludGVycG9sYXRpb24gc3VyIHByb3BzbmFtZSBkZSB0YXJnZXQgIVxuICAgICAgICAvL2ljaSB0YXJnZXQuYWdlIG91IHRhcmdldFtcImFnZVwiXS4uLi5cbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BzTmFtZV07XG4gICAgICAgIC8vbGUgZ2V0dGVyIGNsYXNzaXF1ZSByZXR1cm4gbGEgdmFsdWVcbiAgICAgICAgY29uc3QgZ2V0dGVyUGVyc28gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIC8vdW4gc2V0dGVyIGNsYXNzaXF1ZSBhdmVjIHZhbGlkYXRpb25cbiAgICAgICAgY29uc3Qgc2V0dGVyUGVyc28gPSAodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiAmJiB2YWwgPj0gbWluICYmIHZhbCA8PSBtYXgpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgVmFsaWRhdGVBZ2UgcHJvcGVydHkgOiBNaW4gOiBcIiArIG1pbiArIFwiIE1heCA6IFwiICsgbWF4KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy9qZSB2ZXV4IGFqb3V0ZXIgw6AgdGFyZ2V0IDogdG91dGUgbGEgY2xhc3NlIHBvaW50w6llIGRvbmMgOiBpY2kgZGFucyBsJ2V4ZW1wbGUgOiBFeGFtcGxlQ2xhc3NcbiAgICAgICAgLy9zdXIgbGEgcHJvcHJpw6l0w6kgcHJvcHNOYW1lIDogYWdlXG4gICAgICAgIC8vbGUgZ2V0IDogZ2V0dGVyUGVyc28gZXQgc2V0IDogc2V0dGVyUGVyc28gc3VpdmFudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wc05hbWUsIHtcbiAgICAgICAgICAgIGdldDogZ2V0dGVyUGVyc28sXG4gICAgICAgICAgICBzZXQ6IHNldHRlclBlcnNvXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iLCJleHBvcnQgY2xhc3MgTmFycm93aW5nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBsZXQgcGFkZGluZ051bWJlciA9IDE1O1xuICAgICAgICBsZXQgcGFkZGluZ1N0ciA9IFwiICAgICBcIjtcbiAgICAgICAgbGV0IGlucHV0ID0gXCJCb25qb3VyXCI7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBhZGRpbmdMZWZ0KHBhZGRpbmdOdW1iZXIsIGlucHV0KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBsZXQgaWQxID0gNDI7XG4gICAgICAgIHRoaXMuZGV0ZWN0SWQoaWQxKTtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBsZXQgYTEgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlXCIpO1xuICAgICAgICBsZXQgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGxldCBhMztcbiAgICAgICAgdGhpcy5leGVtcGxlSHRtbChhMik7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IGJ0aEQgPSBuZXcgRGF0ZShcIjA2LzAxLzE5OTFcIik7XG4gICAgICAgIGxldCBidGhEU3RyID0gXCJVbiBTdHJpbmcgcXVpIGNvbnRpZW50IHVuZSBkYXRlIDogMDYvMDEvMTk5MVwiO1xuICAgICAgICB0aGlzLmlzRGF0ZShidGhEU3RyKTtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBsZXQgcGV0ID0geyBzd2ltOiAoKSA9PiB7IH0gfTtcbiAgICAgICAgbGV0IHBldDIgPSB7IGZseTogKCkgPT4geyB9IH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNGaXNoKHBldDIpKTtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKFwiTG/Dr2NcIik7XG4gICAgICAgIGxldCByZXNwID0gdGhpcy5pc1VzZXIodXNlcik7XG4gICAgICAgIGxldCByZXNwMiA9IHRoaXMuaXNVc2VyKFwidXNlcjJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwMik7XG4gICAgfVxuICAgIHBhZGRpbmdMZWZ0KHBhZGRpbmcsIGlucHV0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy9zaSBjJ2VzdCB1biBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBcIiBcIi5yZXBlYXQocGFkZGluZykgKyBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vc2kgYydlc3Qgc3VyIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIHBhZGRpbmcgKyBpbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXRlY3RJZChpZCkge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIC8vb24gc2FpdCBxdSdpbCBuJ2VzdCBwYXMgbnVsbFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIC8vb24gc2FpdCBxdSdpbCBkJ29mZmljZSBzdHJpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIC8vb24gYWl0IHF1J2lsIGVzdCBkJ29mZmljZSBudW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkLmZpbmRJbmRleChpID0+IGkgPT0gaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2lkIGVzdCBkZSB0eXBlIG51bGwgb3UgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhlbXBsZUh0bWwoYSkge1xuICAgICAgICBpZiAoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL3NpIGxhIHByb3ByacOpdMOpIHZhbHVlIGV4aXN0ZSBkYW5zIGwnb2JqZWN0IGFcbiAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xuICAgICAgICAgICAgICAgIGEudmFsdWUgPSBcIkJvbmpvdXJcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihhKTtcbiAgICAgICAgICAgICAgICAvL3NpIG91aSwgYydlc3QgZCdvZmZpY2UgdW4gSHRtbElucHV0RWxlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9Nb3VzZUV2ZW50IGNhciBpbCBuJ2EgcGFzIGxhIHByb3BzIFwidmFsdWVcIiAhISFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRGF0ZShhKSB7XG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYS50b1VUQ1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNGaXNoKHBldCkge1xuICAgICAgICAvL3JldHVybiBwZXQgaXMgRmlzaCB2YXV4IGVuIHBsdXMgYmVhdSBwb3VyIHJldHVybiBib29sZWFuXG4gICAgICAgIC8vZG9zaSByZW52b3llciB1bmlxdWVtZW50IHVuIGJvb2xlYW4gdHJ1ZSBzaSBjJ2VzdCBmaXNoXG4gICAgICAgIC8vZmFsc2UgZW4gY2FzIGRlIGJpcmQsIGxlIHBldCBpcyBwZXJtZXQgZGUgZm9yY2VyIGxlIHJldG91ciBib29sZWFuXG4gICAgICAgIC8vZXQgb24gZWZmZWN0dWUgY2UgcmV0b3VyIGJvbGVhbiBncmFjZSDDoCBsYSBjb21wYXJhaXNvbiAhPT1cbiAgICAgICAgcmV0dXJuIHBldC5zd2ltICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlzVXNlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyIGluc3RhbmNlb2YgVXNlcjtcbiAgICB9XG59XG5jbGFzcyBVc2VyIHtcbiAgICBuYW1lO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RyaW5nSW50ZXJwb2xhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcImZpcnN0TmFtZVwiO1xuICAgICAgICBsZXQgdXNlciA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJEb2VcIlxuICAgICAgICB9O1xuICAgICAgICBsZXQgcCA9IHsgdHV0dTogXCJKb2huXCIsIHRvdG86IFwiRG9lXCIgfTtcbiAgICAgICAgLy9pbmRleGlvbiBhdXRvbWF0aXF1ZVxuICAgICAgICBjb25zb2xlLmxvZyhwW1widHV0dVwiXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBbXCJ0b3RvXCJdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuICAgICAgICAvL2luZGV4YXRpb24gKyBpbnRlcnBvbGF0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJbc3RyXSk7XG4gICAgICAgIHN0ciA9IFwibGFzdE5hbWVcIjtcbiAgICAgICAgY29uc29sZS5sb2codXNlcltzdHJdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuICAgICAgICAvL2Fqb3V0IGRlIHByb3BzIHBhciBpbnRlcnBvbGxhdGlvbiBkZSB2YWx1ZSBzdHJpbmcgdmVycyBuYW1lIHByb3BzXG4gICAgICAgIGxldCBiYWxsZWNfc3RyID0gXCJiaXJ0aGRheVwiO1xuICAgICAgICBpZiAodXNlcltiYWxsZWNfc3RyXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGV4aXN0XCIpO1xuICAgICAgICAgICAgdXNlcltiYWxsZWNfc3RyXSA9IFwiMDEvMDYvMTk5MVwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICAvL2plIG5lIHBldXggcGFzIGZhaXJlIGNlY2lcbiAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyLmJhbGxlY19zdHIpXG4gICAgICAgIC8vbWFpcyBwYXIgc3RyaW5nIGludGVycG9sbGF0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJbYmFsbGVjX3N0cl0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG4gICAgfVxufVxuIiwiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8jIExlIHR5cGFnZXNcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmNvbnN0IGEgPSBcIkJvbmpvdXJcIjtcbmNvbnN0IGIgPSA0MjtcbmNvbnN0IGMgPSBmYWxzZTtcbmNvbnN0IGQgPSBudWxsO1xuY29uc3QgZSA9IFtcImJvbmpvdXJcIiwgXCJsZXNcIiwgXCJwaWdub3Vmc1wiXTtcbmNvbnN0IGYgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl07XG5jb25zdCBnID0ge307XG5jb25zdCBoID0gT2JqZWN0O1xuY29uc3QgaSA9IHsgbmFtZTogXCJMb2ljXCIsIGFnZTogXCI0MlwiIH07XG5jb25zdCBqID0geyBuYW1lOiBcImxvaWNcIiwgYWdlOiAzMiB9O1xuY29uc3QgayA9IG5ldyBEYXRlKCk7XG5jb25zdCBsID0gKCkgPT4geyB9O1xuY29uc3QgbSA9ICgpID0+IHsgfTtcbmNvbnN0IG4gPSAoaSwgcywgYikgPT4geyByZXR1cm4gW1wiYVwiLCBcImJcIl07IH07XG4vL25lIHNlcmEgcGFzIGV4cG9ydGVyXG5jb25zdCB4eXogPSBcIkZhdXQgc25pZmZlciBsYSBjb21wb3RlLCDDp2EgZmFpdCB0b3Vzc2VyLi4uXCI7XG5leHBvcnQgeyBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBuIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCAqIGFzIG1lc1R5cGVzIGZyb20gXCIuL2RvY3MvdHlwYWdlc1wiO1xuY29uc29sZS5sb2cobWVzVHlwZXMuYSk7XG5jb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG5pbXBvcnQgeyBBc3NlcnRpb25UeXBlcyB9IGZyb20gXCIuL2RvY3MvYXNzZXJ0aW9uc1R5cGVcIjtcbm5ldyBBc3NlcnRpb25UeXBlcygpO1xuY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuaW1wb3J0IHsgU3RyaW5nSW50ZXJwb2xhdGlvbiB9IGZyb20gXCIuL2RvY3Mvc3RyaW5nSW50ZXJwb2xhdGlvblwiO1xubmV3IFN0cmluZ0ludGVycG9sYXRpb24oKTtcbmNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcbmltcG9ydCB7IE5hcnJvd2luZyB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XG5uZXcgTmFycm93aW5nKCk7XG5jb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG5sZXQgdXNlckFkbWluID0ge1xuICAgIG5hbWU6IFwibG9pY1wiLFxuICAgIGZpcnN0TmFtZTogXCJiYXVkb3V4XCIsXG4gICAgaXNBZG1pbjogdHJ1ZVxufTtcbmNsYXNzIHR1dHUge1xuICAgIG5hbWUgPSBcIlwiO1xuICAgIGZpcnN0TmFtZSA9IFwiXCI7XG4gICAgaXNBZG1pbiA9IHRydWU7XG59XG4vL3VuIHR5cGUsIGMnZXN0IHVuIGFsaWFzIGQnaW50ZXJmYWNlLCB1dGlsaXNlIHF1YW5kIG9uIG5lIHZldXggcGFzIHMnZW4gc2VydmlyIGNvbW1lIGludGVyZmFjZVxuY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuaW1wb3J0IHsgRGF0ZUNvbnZlcnRlciB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xuY29uc29sZS5sb2coRGF0ZUNvbnZlcnRlci5jb252ZXJ0VGltZXN0YW1wVG9EYXRlKFwiMTY2MDc0MTM4NFwiKSk7XG5jb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG5jb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XG5jb25zb2xlLmNsZWFyKCk7XG5jb25zb2xlLmxvZyhcIkTDqWNvcmF0ZXVyIGRlIGNsYXNzZXMgcGFydGllIDFcIik7XG5pbXBvcnQgeyBzZWFsZWQsIGZpcnN0LCBzZWNvbmQsIHZhbGlkYXRlQWdlIH0gZnJvbSBcIi4vZG9jcy9kZWNvcmF0b3JzXCI7XG5sZXQgQnVnUmVwb3J0ID0gY2xhc3MgQnVnUmVwb3J0IHtcbiAgICB0eXBlID0gXCJSZXBvcnRcIjtcbiAgICB0aXRsZTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIC8vcmVnaXN0ZXIgdG8gREIgKyBMb2cgaW4gZmlsZSBldGMuLi4uXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpO1xuICAgIH1cbiAgICBzaG93QnVnUmVwb3J0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlLCB0aGlzLnR5cGUpO1xuICAgIH1cbn07XG5CdWdSZXBvcnQgPSBfX2RlY29yYXRlKFtcbiAgICBzZWFsZWRcbl0sIEJ1Z1JlcG9ydCk7XG4vLyBpbnRlcmZhY2UgQnVnUmVwb3J0e1xuLy8gICAgIHRlc3QoKSA6IHZvaWRcbi8vIH1cbi8vIEJ1Z1JlcG9ydC5wcm90b3R5cGUudGVzdCA9ICgpID0+IHtcbi8vICAgICBsZXQgdGl0bGUgPSBcIkJ1ZyBSZXBvcnQgdXN1cnBhdGlvblwiXG4vLyAgICAgY29uc29sZS5sb2codGl0bGUpXG4vLyB9XG5sZXQgbmV3QnVnID0gbmV3IEJ1Z1JlcG9ydChcIkNlY2kgZXN0IHVuIGJ1ZyByZXBvcnRcIik7XG5uZXdCdWcudHlwZSA9IFwiQnVnUmVwb3J0XCI7XG5uZXdCdWcudGl0bGUgPSBcIk90aGVyIEJ1Z1wiO1xubmV3QnVnLnNob3dCdWdSZXBvcnQoKTtcbi8vbmV3QnVnLnRlc3QoKSAtLT4gY29tbWUgZWxsZSBlc3Qgc2VhbGVkIGplIG5lIHBldXggcGFzIGZhaXJlIGQnZXh0ZW5zaW9uXG5jb25zb2xlLmNsZWFyKCk7XG5jb25zb2xlLmxvZyhcIkTDqWNvcmF0ZXVyIGRlIE3DqXRob2RlIHBhcnRpZSAyXCIpO1xuY2xhc3MgRXhhbXBsZUNsYXNzIHtcbiAgICBtZXRob2QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSmUgc3VpcyBkYW5zIGxhIG3DqXRob2RlIE1ldGhvZCBkZSBsYSBjbGFzc2UgRXhhbXBsZUNsYXNzXCIpO1xuICAgIH1cbiAgICAvL0B2YWxpZGF0ZSAvL2RlY29ydGV1ciBkZSB2YWxpZGF0aW9uIGRlIHBhcmFtdHJlIGQnZW50csOpZSBkZSBtw6l0aG9kZXMgc3VyIHRhaWxsZSBkZSBzdHJpbmcgcGFyIHRhaWxsZVxuICAgIC8vIEBpbnB1dHZhbGlkYXRlKClcbiAgICAvLyB2YWxpZGF0ZU1ldGhvZFN0cmluZyhcbiAgICAvLyAgICAgQGNlSW5wdXQoKSBkYW5zQ2V0dGVQcm9wcyA6IHN0cmluZ1xuICAgIC8vICl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhbnNDZXR0ZVByb3BzKVxuICAgIC8vIH1cbiAgICBhZ2U7XG59XG5fX2RlY29yYXRlKFtcbiAgICBmaXJzdCgpLFxuICAgIHNlY29uZCh7XG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJib25qb3VyXCIsXG4gICAgICAgICAgICBhZ2U6IDQyXG4gICAgICAgIH1cbiAgICB9KVxuXSwgRXhhbXBsZUNsYXNzLnByb3RvdHlwZSwgXCJtZXRob2RcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICB2YWxpZGF0ZUFnZSh7XG4gICAgICAgIG1pbjogMSxcbiAgICAgICAgbWF4OiA5OVxuICAgIH0pXG5dLCBFeGFtcGxlQ2xhc3MucHJvdG90eXBlLCBcImFnZVwiLCB2b2lkIDApO1xubGV0IGV4YW1wbGUgPSBuZXcgRXhhbXBsZUNsYXNzKCk7XG5leGFtcGxlLm1ldGhvZCgpO1xuZXhhbXBsZS5hZ2UgPSAxNTtcbmxldCBhZ2VEZWNvcmF0ZWQgPSBleGFtcGxlLmFnZTtcbmNvbnNvbGUubG9nKGFnZURlY29yYXRlZCk7XG4vLyBjb25zb2xlLmNsZWFyKClcbi8vIGNvbnNvbGUubG9nKFwiRMOpY29yYXRldXIgZGUgUHJvcHMgcGFydGllIDNcIilcbi8vIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9