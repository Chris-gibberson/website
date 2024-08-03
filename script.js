const menu_id = document.getElementById("menu_id");
const icon = document.getElementById("button_icon");

function toggleMenu(){
    if (menu_id.style.display == "block"){
        menu_id.style.display = "none"
        icon.style.transform = "rotate(180deg)";
    } else {
        menu_id.style.display = "block";
        icon.style.transform = "rotate(0deg)";
    }
}

function login(){
    const id = document.getElementById("student_label");
    const password = document.getElementById("password");
    id.innerHTML = "Student ID is incorrect!"
    id.classList.add("text-red-700");
    id.classList.remove("text-gray-900");
    password.innerHTML = "Password does not match student ID!"
    password.classList.add("text-red-700");
    password.classList.remove("text-gray-900");
}

function menu2_switch(){
    const menu = document.getElementById("menu2");
    const button2 = document.getElementById("divje");
    if (menu.style.display == "block"){
        menu.style.display = "none";
        button2.style.display = "block";
    } else {
        menu.style.display = "block";
        button2.style.display = "none";
    }
}