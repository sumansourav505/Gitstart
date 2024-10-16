let obj={
    name:"Suman",
    age:27
};
let serialize=JSON.stringify(obj);
console.log(serialize);
let deserialize=JSON.parse(localStorage.getItem(obj));
console.log(deserialize);