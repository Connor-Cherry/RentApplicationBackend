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
    exports.Expenses = void 0;
    var Expenses = /** @class */ (function () {
        function Expenses(inRent, inElectricity) {
            this.rent = inRent;
            this.electricity = inElectricity;
        }
        return Expenses;
    }());
    exports.Expenses = Expenses;
});
//# sourceMappingURL=Expenses.js.map