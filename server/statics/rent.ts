import { IRentDocument, IRentModel } from '../types/rent';

export async function findHighestTotal(
    this: IRentModel
): Promise<IRentDocument[]>{
    console.log("HERE");
    return this.find().sort({paidTotal: -1}).limit(1);
}