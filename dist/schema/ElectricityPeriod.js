(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongoose", "../statics/ElectricityPeriod"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mongoose = require("mongoose");
    var ElectricityPeriod_1 = require("../statics/ElectricityPeriod");
    var ElectricityPeriodSchema = new Mongoose.Schema({
        cost: Number,
        beginDate: Date,
        endDate: Date,
        powerUsage: Number
    });
    ElectricityPeriodSchema.statics.findAllPeriods = ElectricityPeriod_1.findAllPeriods;
    exports.default = ElectricityPeriodSchema;
});
//# sourceMappingURL=ElectricityPeriod.js.map