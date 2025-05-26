# Closures

### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

# Lexical Scoping

```javascript

    function init() {
        let  name = "Mozilla";     // name is a local variable created by init

        function displayName(){  // displayName() is the inner function, that forms the closure
            console.log(name);  // use variable declared oin the parent function
        }
        displayName();
    }
    init();
```

## Description:

#### init() creates a local varaible called name and a function called dosplayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() can access the variable name declared in the parent function, init().

# Closure

```javascript 
    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();

```