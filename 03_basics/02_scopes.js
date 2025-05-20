function one(){
    const username = "Akhil"

    function two(){
        const website = " Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

 
if (true){
    const username = "Akhil"
    if (username === "Akhil"){
        const website = " Youtube"
        // console.log(username + website); // Akhil Youtube
    }
    // console.log(website);   
}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++ //


addOne(5) // 6

function addOne(num){
    return num + 1
}



addTwo(5) // error: cannot access "addTwo" before initialization

const addTwo = function(num){
    return num + 2
}

