import * as Mongoose from "mongoose";
import RentSchema from "../schema/rent";

import { IRentDocument, IRentModel } from "../types/rent";
export const RentModel = Mongoose.model<IRentDocument>(
    "rent", RentSchema
) as IRentModel;