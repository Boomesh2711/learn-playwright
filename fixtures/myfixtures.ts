import { test as myTest } from "@playwright/test";

type boomesh={
    age:number,
    email: string,

}
const myFixturesTest=myTest.extend<boomesh>({
    age:27,
    email:"boomikani01@gmail.com"   

})
export const test=myFixturesTest;