let section = document.querySelectorAll("section")
let navlink = document.querySelectorAll('a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 650;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
       

        if ( top >= offset && top < offset + height)  {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}
