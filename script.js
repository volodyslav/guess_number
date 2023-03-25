document.addEventListener('DOMContentLoaded', function () {
    // Random number from 1 to 10
    const guess = Math.ceil((Math.random() * 10) + 1);
    // Delete previous number
    let update = document.querySelector('#number')

    document.querySelector('#btn').onclick = function () {

        // Your guess 
        if (document.querySelector("#number").value == guess) {
            document.querySelector('#message').innerHTML = `You're right! It's ${guess} !`;
            update.value = '';
        }
        else {
            document.querySelector("#message").innerHTML = "Nope! Try again!";
            update.value = '';
        }
        return false
    };

    document.querySelector("#btn_reload").onclick = function () {
        window.location.reload();
    };


});