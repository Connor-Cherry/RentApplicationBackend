(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Person = void 0;
    var Person = /** @class */ (function () {
        function Person(inName, inExpenses) {
            this.name = inName;
            this.expenses = inExpenses;
        }
        return Person;
    }());
    exports.Person = Person;
});
//# sourceMappingURL=Person.js.map