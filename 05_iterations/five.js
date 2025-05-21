const  coding = ["Js", "Ruby", "Java", "Python", "C++"]

coding.forEach( function (item) {
    //  console.log(item);
     
})


coding.forEach( (item) => {
    // console.log(item);
    
})

function printMe(item){
    // console.log(item);
    
}

coding.forEach(printMe) // only provide reference of the function 


coding.forEach( (item, index, array) => {
    // console.log(item, index, array); 
})

const myCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {   
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

