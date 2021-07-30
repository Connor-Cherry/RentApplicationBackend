(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongoose", "../schema/rent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RentModel = void 0;
    var Mongoose = require("mongoose");
    var rent_1 = require("../schema/rent");
    exports.RentModel = Mongoose.model("rent", rent_1.default);
});
//# sourceMappingURL=rent.js.map