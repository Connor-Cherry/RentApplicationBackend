import { Document } from "mongoose";
import { IRentDocument } from "../types/rent";
export declare function sameOwedAmount(this: IRentDocument): Promise<Document>;
