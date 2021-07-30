import * as Mongoose from "mongoose";
import ElectricityPeriodSchema from "../schema/ElectricityPeriod";

import { IElectricityPeriodDocument, IElectricityPeriodModel } from "../types/ElectricityPeriod";
export const ElectricityPeriodModel = Mongoose.model<IElectricityPeriodDocument>(
    "ElectricityPeriod", ElectricityPeriodSchema
) as IElectricityPeriodModel;