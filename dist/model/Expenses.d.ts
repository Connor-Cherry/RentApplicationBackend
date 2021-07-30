import { Electricity } from "./Electricity";
import { Rent } from "./Rent";
declare class Expenses {
    private rent;
    private electricity;
    constructor(inRent: Rent, inElectricity: Electricity);
}
export { Expenses };
