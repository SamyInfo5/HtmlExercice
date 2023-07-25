/*navigation bar link active */
const section = document.querySelectorAll("section")
const navlink = document.querySelectorAll('header nav ul li a')
/*Variable for bg bluring and opacity scrolling*/
const title = document.getElementById("title-hero")
const subtitle = document.getElementById("subtitle-hero")
const net = document.getElementById('bg-net')

console.log(title.style)

window.onscroll = () => {
    const Value = window.scrollY;
    net.style.opacity = (100 - Value/2)  / 100;
    title.style.transform = `translateY(${Value*1.25}px)`
    subtitle.style.transform = `translateY(${Value*1.25}px)`
    section.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if ( Value >= offset && Value < offset + height)  {
            
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        };
    });
}
