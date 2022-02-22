const myModal = document.getElementById("myModal");

/* Use JS to add and remove the hidden class from the modal element
 * See /css/base.css to see what the hidden class does 
 */

function modal_show() {
    myModal.classList.remove("hidden");
}

function modal_hide() {
    myModal.classList.add("hidden");
}