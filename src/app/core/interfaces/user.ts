import { IBase } from "./base";

export interface IUser extends IBase  {
    email: string,
    password: string,
    myShoes: string[]
}