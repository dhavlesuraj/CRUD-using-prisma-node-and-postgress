import { json } from "express";

function validateNestedObj(obj){
    if(typeof obj !=='object' || obj===null){
        return false;
    }
    for(const key in obj){
        if(obj.hasOwnProperty(key) && typeof obj[key]==='object'){
          if(!validateNestedObj(obj[key])){
            return false;
          }
        }else{
           if(typeof obj[key]==='string' && obj[key].trim()==''){
            return false;
           }
        }
    }
    return true;
}

// function validString(req,res) {
//   try {
//     const jsonData=json.parse(req.body);
//     validateNestedObj(jsonData);
//   } catch (error) {
//     console.log(error);
//   }
// }
const nestedObject = {
  prop1: "value1",
  prop2: {
    nestedProp1: "nestedValue1",
    nestedProp2: {
      deeplyNestedProp: "deeplyNestedValue",
    },
  },
  prop3: "value3",
};

const valid=validateNestedObj(nestedObject);
//console.log(valid);

// const myNum=Symbol("key1");
// const user={[myNum]:"hello world"};
// console.log(user[myNum]);