(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongoose", "../statics/rent", "../methods/rent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mongoose = require("mongoose");
    var rent_1 = require("../statics/rent");
    var rent_2 = require("../methods/rent");
    var RentSchema = new Mongoose.Schema({
        owedTotal: Number,
        paidTotal: Number,
        monthsPaid: Number,
        netTotal: Number
    });
    RentSchema.statics.findHighestTotal = rent_1.findHighestTotal;
    RentSchema.methods.sameOwedAmount = rent_2.sameOwedAmount;
    exports.default = RentSchema;
});
//# sourceMappingURL=rent.js.map