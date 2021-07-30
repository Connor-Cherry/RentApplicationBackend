import { Document, Model } from "mongoose";
export interface IRent {
    owedTotal: number;
    paidTotal: number;
    monthsPaid: number;
    netTotal: number;
}
export interface IRentDocument extends IRent, Document {
    sameOwedAmount: (this: IRentDocument) => Promise<Document>;
}
export interface IRentModel extends Model<IRentDocument> {
    findHighestTotal:(
        this: IRentModel
    ) => Promise<IRentDocument[]>;
}