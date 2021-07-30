import { IElectricityPeriodDocument, IElectricityPeriodModel } from '../types/ElectricityPeriod';

export async function findAllPeriods(
    this: IElectricityPeriodModel
): Promise<IElectricityPeriodDocument[]>{
    return this.find();
}