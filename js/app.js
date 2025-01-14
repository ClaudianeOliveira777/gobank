
//Dropdown Menu
const menuItem1 = document.getElementById('menu-desktop-item-1');
const menuItem2 = document.getElementById('menu-desktop-item-2');

const dropDownMenu1 = document.getElementById('dropdown-menu-1');
const dropDownMenu2 = document.getElementById('dropdown-menu-2');

function showDropDown1(event){
    event.preventDefault();
    dropDownMenu1.classList.toggle('active-dropdown-menu');
    dropDownMenu2.classList.remove('active-dropdown-menu');
}

function showDropDown2(event){
    event.preventDefault();
    dropDownMenu1.classList.remove('active-dropdown-menu');
    dropDownMenu2.classList.toggle('active-dropdown-menu');
}

function removeDropDown(){
    dropDownMenu1.classList.remove('active-dropdown-menu');
    dropDownMenu2.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropDown1);
menuItem2.addEventListener('click', showDropDown2);

dropDownMenu1.addEventListener('mouseleave', removeDropDown);
dropDownMenu2.addEventListener('mouseleave', removeDropDown);

//Menu Mobile

const bx = document.getElementById('bx');
const menuMobile = document.getElementById('menu-mobile');

function showMenuMobile(){
    if(bx && menuMobile){
        bx.addEventListener('click', ()=>{
            menuMobile.classList.toggle('active-menu-mobile');
            bx.classList.toggle('active-bx');
        })
    }
}

showMenuMobile(bx, menuMobile)

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', event =>{
        event.preventDefault();
    })
})