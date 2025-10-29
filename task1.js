const arrOfObj= [
    {name: "Sathish",mark: 90},
    {name: "Vishnu",mark: 89},
    {name: "Arjun",mark: 78},
    {name: "Sudhar", mark: 40}
];


arrOfObj.sort( (a,b) =>{
    return b.mark - a.mark;
});


console.log(arrOfObj);


// console.log(arrOfObj);