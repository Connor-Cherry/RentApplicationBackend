(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongoose", "../schema/ElectricityPeriod"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ElectricityPeriodModel = void 0;
    var Mongoose = require("mongoose");
    var ElectricityPeriod_1 = require("../schema/ElectricityPeriod");
    exports.ElectricityPeriodModel = Mongoose.model("ElectricityPeriod", ElectricityPeriod_1.default);
});
//# sourceMappingURL=ElectricityPeriod.js.map