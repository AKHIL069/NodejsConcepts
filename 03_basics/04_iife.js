// Immediately Invoked Function Expressions (IIFE)


// +++++ Named IIFE +++++ //
(function connectDB(){
    console.log("DB Connected");
})();

// +++++ Simple(Unnamed) IIFE +++++ //
((name) => {
    console.log(`${name}, DB Connected successfully`);
})("Akhil");