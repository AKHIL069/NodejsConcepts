// +++++++++++++++++++++++++++++ for loop +++++++++++++++++++++++++++++++++++++++ //

let array = [1,2,4,5,6,6,2,4]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}


for (let j = 0; j <= 10; j++) {
    console.log(`Outer loop value: ${j}`);
    for (let i = 0; i <= 10; i++) {
        console.log(`Inner loop value ${i} and inner loop ${j}`);   
    }
}

let myArr = ["flash", "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// ++++++++++++++++++++++++++ break and Continue ++++++++++++++++++++++++++ //


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Deteced 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}

