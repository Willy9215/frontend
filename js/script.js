const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement; //posso comentar suave colocando barra barra
/* */
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme () {  //alternar tema dark para light
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);
//fim função mudar tema do site

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");
        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        //fim da função accordion
    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})
