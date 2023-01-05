const  dropdownValue = document.querySelector('.dropdown__value')
const dropdownLinkArray = Array.from(document.querySelectorAll('.dropdown__link'))


dropdownValue.onclick = () => {
    dropdownValue.nextElementSibling.classList.toggle('dropdown__list_active')
}

dropdownLinkArray.forEach(link => link.onclick = () => {
    link.closest('ul').previousElementSibling.textContent = link.textContent;
    link.closest('ul').classList.remove('dropdown__list_active')
    return false
})



