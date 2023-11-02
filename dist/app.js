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

console.log(_docs_typages__WEBPACK_IMPORTED_MODULE_0__.a);

new _docs_assertionsType__WEBPACK_IMPORTED_MODULE_1__.AssertionTypes();

new _docs_stringInterpolation__WEBPACK_IMPORTED_MODULE_2__.StringInterpolation();

new _docs_narrowing__WEBPACK_IMPORTED_MODULE_3__.Narrowing();
let userAdmin = {
    name: "loic",
    firstName: "baudoux",
    isAdmin: true
};
class tutu {
    name;
    firstName;
    isAdmin;
}
//un type, c'est un alias d'interface, utilise quand on ne veux pas s'en servir comme interface

console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_4__.DateConverter.convertTimestampToDate("1660741384"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdHMvLi9zcmMvZG9jcy9jbGFzc2VzLnRzIiwid2VicGFjazovL3RzLy4vc3JjL2RvY3MvbmFycm93aW5nLnRzIiwid2VicGFjazovL3RzLy4vc3JjL2RvY3Mvc3RyaW5nSW50ZXJwb2xhdGlvbi50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy9kb2NzL3R5cGFnZXMudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8jIEwnYXNzZXJ0aW9ucyBkZSB0eXBlXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyA8YnV0dG9uIGlkPVwiYWRkVG9Db3VudFwiPkFkZCAxIHRvIENvdW50PC9idXR0b24+XG4vLyA8YnV0dG9uIGlkPVwicmVtVG9Db3VudFwiPlJlbSAxIHRvIENvdW50PC9idXR0b24+XG5leHBvcnQgY2xhc3MgQXNzZXJ0aW9uVHlwZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKlxuICAgICAgICBsZXQgYnV0dG9uQWRkIDogc3RyaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvQ291bnQnKSBhcyB1bmtub3duIGFzIHN0cmluZ1xuICAgICAgICBjb25zb2xlLmxvZyhidXR0b25BZGQubGVuZ3RoKVxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICBKZSBmb3JjZSBsJ2VubGV2ZW1lbnQgZHUgdHlwZSBFbGVtZW50IHJlbmR1IHBhciBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIGF2ZWMgYXMgdW5rbm93blxuICAgICAgICBldCBqZSBsZSByZWZvcmNlIMOgIMOqdHJlIHVuIHN0cmluZy4uLlxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lciAgIG5lIHBvdXJyYSBqYW1haXMgbWFyY2hlciAhISEhIGNhciBzdHJpbmcgbmUgcG9zc8OoZGUgcGFzIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgY29uc29sZS5kaXIoYnV0dG9uQWRkKVxuXG4gICAgICAgICovXG4gICAgICAgIGxldCBidXR0b25SZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbVRvQ291bnRcIik7XG4gICAgICAgIGxldCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvQ291bnRcIik7XG4gICAgICAgIC8vdGVobmlxdWVtZW50LCBpY2kgYydlc3QgbGEgcGFydGllIGfDqW7DqXJpcXVlIGRlIGwnYXNzZXJ0aW9uLCB2dSBlbiBkw6l0YWlscyBwbHVzIGxvaW5zLi4uLlxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIdW1hbiB7XG4gICAgZ2VuZGVyO1xuICAgIGhlaWdodDtcbiAgICB3aWR0aDtcbiAgICBfZXRuaWM7XG4gICAgX19jb2xvckV5ZXM7XG59XG5sZXQgbmV3SHVtYW4gPSBuZXcgSHVtYW4oKTtcbm5ld0h1bWFuLmdlbmRlcjtcbm5ld0h1bWFuLndpZHRoO1xubmV3SHVtYW4uaGVpZ2h0O1xuLy9uZXdIdW1hbi5fX2NvbG9yRXllcyAhIHByb3RlY3RlZFxuLy9uZXdIdW1hbi5fZXRuaWMgISBwcml2YXRlXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgSHVtYW4ge1xuICAgIGlkO1xuICAgIG5hbWU7XG4gICAgbGFzdE5hbWU7XG4gICAgI19wYXNzd29yZDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jX3Bhc3N3b3JkID0gXCJ0dXR1XCI7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBcInRhcnRlbXBpb25cIjtcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9IFwicmVkXCI7XG4gICAgICAgIC8vdGhpcy5fZXRuaWMgPSBcIkJsYW5jb1wiIC8vIHByaXZhdCDDoCBIdW1hblxuICAgIH1cbn1cbmxldCBwZXJzb25MYW1iZGEgPSBuZXcgUGVyc29uKCk7XG5wZXJzb25MYW1iZGEuaWQ7XG5wZXJzb25MYW1iZGEubmFtZTtcbmV4cG9ydCBjbGFzcyBBbGxlbWFuZGVzIHtcbiAgICBjYXJidXJhbnQ7XG4gICAgaXNBdXRvO1xuICAgIGNvdWxldXI7XG4gICAgYXZhbmNlKHZpdGVzc2VBY3R1cmVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICByZWN1bGUodml0ZXNzZVplcm8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHJlbXBsaXJSZXNlcnZvaXIoc291c291cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZUNvbnZlcnRlciBleHRlbmRzIERhdGUge1xuICAgIHN0YXRpYyBjb252ZXJ0VGltZXN0YW1wVG9EYXRlKHRpbWVzdGFtcCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQodGltZXN0YW1wKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE5hcnJvd2luZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IHBhZGRpbmdOdW1iZXIgPSAxNTtcbiAgICAgICAgbGV0IHBhZGRpbmdTdHIgPSBcIiAgICAgXCI7XG4gICAgICAgIGxldCBpbnB1dCA9IFwiQm9uam91clwiO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYWRkaW5nTGVmdChwYWRkaW5nTnVtYmVyLCBpbnB1dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IGlkMSA9IDQyO1xuICAgICAgICB0aGlzLmRldGVjdElkKGlkMSk7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IGExID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZVwiKTtcbiAgICAgICAgbGV0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBsZXQgYTM7XG4gICAgICAgIHRoaXMuZXhlbXBsZUh0bWwoYTIpO1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGxldCBidGhEID0gbmV3IERhdGUoXCIwNi8wMS8xOTkxXCIpO1xuICAgICAgICBsZXQgYnRoRFN0ciA9IFwiVW4gU3RyaW5nIHF1aSBjb250aWVudCB1bmUgZGF0ZSA6IDA2LzAxLzE5OTFcIjtcbiAgICAgICAgdGhpcy5pc0RhdGUoYnRoRFN0cik7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IHBldCA9IHsgc3dpbTogKCkgPT4geyB9IH07XG4gICAgICAgIGxldCBwZXQyID0geyBmbHk6ICgpID0+IHsgfSB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzRmlzaChwZXQyKSk7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihcIkxvw69jXCIpO1xuICAgICAgICBsZXQgcmVzcCA9IHRoaXMuaXNVc2VyKHVzZXIpO1xuICAgICAgICBsZXQgcmVzcDIgPSB0aGlzLmlzVXNlcihcInVzZXIyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcDIpO1xuICAgIH1cbiAgICBwYWRkaW5nTGVmdChwYWRkaW5nLCBpbnB1dCkge1xuICAgICAgICBpZiAodHlwZW9mIHBhZGRpbmcgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vc2kgYydlc3QgdW4gbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gXCIgXCIucmVwZWF0KHBhZGRpbmcpICsgaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3NpIGMnZXN0IHN1ciBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiBwYWRkaW5nICsgaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGV0ZWN0SWQoaWQpIHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAvL29uIHNhaXQgcXUnaWwgbidlc3QgcGFzIG51bGxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAvL29uIHNhaXQgcXUnaWwgZCdvZmZpY2Ugc3RyaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAvL29uIGFpdCBxdSdpbCBlc3QgZCdvZmZpY2UgbnVtYmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZC5maW5kSW5kZXgoaSA9PiBpID09IGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9pZCBlc3QgZGUgdHlwZSBudWxsIG91IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxuICAgIGV4ZW1wbGVIdG1sKGEpIHtcbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9zaSBsYSBwcm9wcmnDqXTDqSB2YWx1ZSBleGlzdGUgZGFucyBsJ29iamVjdCBhXG4gICAgICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGEpIHtcbiAgICAgICAgICAgICAgICBhLnZhbHVlID0gXCJCb25qb3VyXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoYSk7XG4gICAgICAgICAgICAgICAgLy9zaSBvdWksIGMnZXN0IGQnb2ZmaWNlIHVuIEh0bWxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vTW91c2VFdmVudCBjYXIgaWwgbidhIHBhcyBsYSBwcm9wcyBcInZhbHVlXCIgISEhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0RhdGUoYSkge1xuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEudG9VVENTdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRmlzaChwZXQpIHtcbiAgICAgICAgLy9yZXR1cm4gcGV0IGlzIEZpc2ggdmF1eCBlbiBwbHVzIGJlYXUgcG91ciByZXR1cm4gYm9vbGVhblxuICAgICAgICAvL2Rvc2kgcmVudm95ZXIgdW5pcXVlbWVudCB1biBib29sZWFuIHRydWUgc2kgYydlc3QgZmlzaFxuICAgICAgICAvL2ZhbHNlIGVuIGNhcyBkZSBiaXJkLCBsZSBwZXQgaXMgcGVybWV0IGRlIGZvcmNlciBsZSByZXRvdXIgYm9vbGVhblxuICAgICAgICAvL2V0IG9uIGVmZmVjdHVlIGNlIHJldG91ciBib2xlYW4gZ3JhY2Ugw6AgbGEgY29tcGFyYWlzb24gIT09XG4gICAgICAgIHJldHVybiBwZXQuc3dpbSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpc1VzZXIodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlciBpbnN0YW5jZW9mIFVzZXI7XG4gICAgfVxufVxuY2xhc3MgVXNlciB7XG4gICAgbmFtZTtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0ludGVycG9sYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJmaXJzdE5hbWVcIjtcbiAgICAgICAgbGV0IHVzZXIgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiRG9lXCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHAgPSB7IHR1dHU6IFwiSm9oblwiLCB0b3RvOiBcIkRvZVwiIH07XG4gICAgICAgIC8vaW5kZXhpb24gYXV0b21hdGlxdWVcbiAgICAgICAgY29uc29sZS5sb2cocFtcInR1dHVcIl0pO1xuICAgICAgICBjb25zb2xlLmxvZyhwW1widG90b1wiXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgLy9pbmRleGF0aW9uICsgaW50ZXJwb2xhdGlvblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyW3N0cl0pO1xuICAgICAgICBzdHIgPSBcImxhc3ROYW1lXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJbc3RyXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcbiAgICAgICAgLy9ham91dCBkZSBwcm9wcyBwYXIgaW50ZXJwb2xsYXRpb24gZGUgdmFsdWUgc3RyaW5nIHZlcnMgbmFtZSBwcm9wc1xuICAgICAgICBsZXQgYmFsbGVjX3N0ciA9IFwiYmlydGhkYXlcIjtcbiAgICAgICAgaWYgKHVzZXJbYmFsbGVjX3N0cl0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgIHVzZXJbYmFsbGVjX3N0cl0gPSBcIjAxLzA2LzE5OTFcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgLy9qZSBuZSBwZXV4IHBhcyBmYWlyZSBjZWNpXG4gICAgICAgIC8vY29uc29sZS5sb2codXNlci5iYWxsZWNfc3RyKVxuICAgICAgICAvL21haXMgcGFyIHN0cmluZyBpbnRlcnBvbGxhdGlvblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyW2JhbGxlY19zdHJdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xuICAgIH1cbn1cbiIsIi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIyBMZSB0eXBhZ2VzXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5jb25zdCBhID0gXCJCb25qb3VyXCI7XG5jb25zdCBiID0gNDI7XG5jb25zdCBjID0gZmFsc2U7XG5jb25zdCBkID0gbnVsbDtcbmNvbnN0IGUgPSBbXCJib25qb3VyXCIsIFwibGVzXCIsIFwicGlnbm91ZnNcIl07XG5jb25zdCBmID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdO1xuY29uc3QgZyA9IHt9O1xuY29uc3QgaCA9IE9iamVjdDtcbmNvbnN0IGkgPSB7IG5hbWU6IFwiTG9pY1wiLCBhZ2U6IFwiNDJcIiB9O1xuY29uc3QgaiA9IHsgbmFtZTogXCJsb2ljXCIsIGFnZTogMzIgfTtcbmNvbnN0IGsgPSBuZXcgRGF0ZSgpO1xuY29uc3QgbCA9ICgpID0+IHsgfTtcbmNvbnN0IG0gPSAoKSA9PiB7IH07XG5jb25zdCBuID0gKGksIHMsIGIpID0+IHsgcmV0dXJuIFtcImFcIiwgXCJiXCJdOyB9O1xuLy9uZSBzZXJhIHBhcyBleHBvcnRlclxuY29uc3QgeHl6ID0gXCJGYXV0IHNuaWZmZXIgbGEgY29tcG90ZSwgw6dhIGZhaXQgdG91c3Nlci4uLlwiO1xuZXhwb3J0IHsgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBtZXNUeXBlcyBmcm9tIFwiLi9kb2NzL3R5cGFnZXNcIjtcbmNvbnNvbGUubG9nKG1lc1R5cGVzLmEpO1xuaW1wb3J0IHsgQXNzZXJ0aW9uVHlwZXMgfSBmcm9tIFwiLi9kb2NzL2Fzc2VydGlvbnNUeXBlXCI7XG5uZXcgQXNzZXJ0aW9uVHlwZXMoKTtcbmltcG9ydCB7IFN0cmluZ0ludGVycG9sYXRpb24gfSBmcm9tIFwiLi9kb2NzL3N0cmluZ0ludGVycG9sYXRpb25cIjtcbm5ldyBTdHJpbmdJbnRlcnBvbGF0aW9uKCk7XG5pbXBvcnQgeyBOYXJyb3dpbmcgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xubmV3IE5hcnJvd2luZygpO1xubGV0IHVzZXJBZG1pbiA9IHtcbiAgICBuYW1lOiBcImxvaWNcIixcbiAgICBmaXJzdE5hbWU6IFwiYmF1ZG91eFwiLFxuICAgIGlzQWRtaW46IHRydWVcbn07XG5jbGFzcyB0dXR1IHtcbiAgICBuYW1lO1xuICAgIGZpcnN0TmFtZTtcbiAgICBpc0FkbWluO1xufVxuLy91biB0eXBlLCBjJ2VzdCB1biBhbGlhcyBkJ2ludGVyZmFjZSwgdXRpbGlzZSBxdWFuZCBvbiBuZSB2ZXV4IHBhcyBzJ2VuIHNlcnZpciBjb21tZSBpbnRlcmZhY2VcbmltcG9ydCB7IERhdGVDb252ZXJ0ZXIgfSBmcm9tIFwiLi9kb2NzL2NsYXNzZXNcIjtcbmNvbnNvbGUubG9nKERhdGVDb252ZXJ0ZXIuY29udmVydFRpbWVzdGFtcFRvRGF0ZShcIjE2NjA3NDEzODRcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9