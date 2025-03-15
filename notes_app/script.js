let button= document.querySelector('.button');
let note = document.querySelector('.note');
let length=0;
let newhtml='';
function showstorage(){
    note.innerHTML=localStorage.getItem("notes"); 
}
showstorage();

button.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    note.appendChild(inputBox).appendChild(img);

    updateStorage();
    
})

function updateStorage(){
    localStorage.setItem("notes",note.innerHTML);
    console.log("update to local Storage");

}
note.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") { // Ensure uppercase comparison
        e.target.parentElement.remove(); // Remove the parent element
        updateStorage();
    }
});





console.log("hello");