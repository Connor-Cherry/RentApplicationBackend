import { Expenses } from "./Expenses";
declare class Person {
    name: string;
    expenses: Expenses;
    constructor(inName: string, inExpenses: Expenses);
}
export { Person };
