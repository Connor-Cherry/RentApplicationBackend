import * as Mongoose from "mongoose";
import { findAllPeriods } from "../statics/ElectricityPeriod"
const ElectricityPeriodSchema = new Mongoose.Schema({
    cost: Number,
    beginDate: Date,
    endDate: Date,
    powerUsage: Number
});
ElectricityPeriodSchema.statics.findAllPeriods = findAllPeriods;
export default ElectricityPeriodSchema;