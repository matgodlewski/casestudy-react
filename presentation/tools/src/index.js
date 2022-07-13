import {logMyFile1} from "./two";
import {getNotNullValue} from "./three";

console.log("Welcome index")
logMyFile1()

const value = getNotNullValue(null);

console.log(value)
