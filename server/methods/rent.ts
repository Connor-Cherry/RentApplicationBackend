import { Document } from "mongoose";
import { IRentDocument } from "../types/rent";

export async function sameOwedAmount(this: IRentDocument): Promise<Document> {
    return this.model("rent").findOne({owedTotal: this.owedTotal }).sort({owedTotal: -1});
}