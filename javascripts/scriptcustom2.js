let HideMenu = (e) => {
    let menu = document.getElementById('phoneMenu');
    let icon = document.getElementById('icon');


    icon.setAttribute('name', 'close');
    // icon.setAttribute('name', 'close');
    menu.classList.remove('flex');
    menu.classList.add('ms:hidden');
    menu.classList.add('hidden');
}