import * as Mongoose from "mongoose";
import { findHighestTotal } from '../statics/rent';
import { sameOwedAmount } from '../methods/rent'
const RentSchema = new Mongoose.Schema({
    owedTotal: Number,
    paidTotal: Number,
    monthsPaid: Number,
    netTotal: Number
});

RentSchema.statics.findHighestTotal = findHighestTotal;
RentSchema.methods.sameOwedAmount = sameOwedAmount;
export default RentSchema;