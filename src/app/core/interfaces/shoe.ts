import { IBase } from "./base";
import { IUser } from "./user";

export interface IShoe extends IBase {
    brand: string,
    model: string,
    year: string,
    img: string,
    material: string,
    price: number,
    description: string,
    size: number,
    color: string,
    owner: IUser
}