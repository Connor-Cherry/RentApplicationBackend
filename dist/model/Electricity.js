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
    exports.Electricity = void 0;
    var Electricity = /** @class */ (function () {
        function Electricity() {
        }
        Electricity.prototype.getMonthlyAverage = function () {
        };
        Electricity.prototype.getMaxMonth = function () {
        };
        Electricity.prototype.getMinMonth = function () {
        };
        Electricity.prototype.getPowerDiff = function () {
        };
        Electricity.prototype.getCostDiff = function () {
        };
        return Electricity;
    }());
    exports.Electricity = Electricity;
});
//# sourceMappingURL=Electricity.js.map