const buttons = document.querySelectorAll(".button");
const body = document.querySelectorAll("body");

buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e) {
        const buttonId = e.target.id 
        switch (buttonId) {
            case "grey":
                body.style.backgroundColor = buttonId
                break;
            case "white":
                body.style.backgroundColor = buttonId
                break;
            case "blue":
                body.style.backgroundColor = buttonId
                break;
            case "yellow":
                body.style.backgroundColor = buttonId
                break;
            default:
                break;
        }
    })
})