export function tooglebanner() {
    let banner_element = document.getElementById("banner");
    if (!banner_element) return console.log('no existe');
    if (banner_element.classList.contains('hide')) {
        banner_element.classList.add('hide');
    } else {
        banner_element.classList.remove("hide");
    }
    
}