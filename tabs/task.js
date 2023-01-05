const tabsArray = Array.from(document.querySelectorAll('.tab'))
const tabsContentArray = Array.from(document.querySelectorAll('.tab__content'))

tabsArray.forEach(tab => tab.onclick = () => {
    let activeIndex = tabsArray.indexOf(document.querySelector('.tab_active'));
    tabsArray[activeIndex].classList.remove('tab_active');
    tabsContentArray[activeIndex].classList.remove('tab__content_active');
    tab.classList.add('tab_active')
    tabsContentArray[tabsArray.indexOf(tab)].classList.add('tab__content_active')
})