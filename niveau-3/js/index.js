/*navigation bar link active */
const section = document.querySelectorAll("section")
const navlink = document.querySelectorAll('header nav ul li a')
/*Variable for bg bluring and opacity scrolling*/
const scrolling = document.getElementsByClassName('scrolling')
const back = document.getElementById('Acceuil')

window.onscroll = () => {
    section.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        

        if ( top >= offset && top < offset + height)  {
            
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        };
    });
}
