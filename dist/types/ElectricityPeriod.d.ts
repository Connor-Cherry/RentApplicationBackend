import { Document, Model } from "mongoose";
export interface IElectricityPeriod {
    cost: number;
    beginDate: Date;
    endDate: Date;
    powerUsage: number;
}
export interface IElectricityPeriodDocument extends IElectricityPeriod, Document {
    sameOwedAmount: (this: IElectricityPeriodDocument) => Promise<Document>;
}
export interface IElectricityPeriodModel extends Model<IElectricityPeriodDocument> {
    findAllPeriods: (this: IElectricityPeriodModel) => Promise<IElectricityPeriodDocument[]>;
}
