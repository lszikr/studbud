import Navigation from './components/navigation';

const links = document.querySelectorAll('nav > ul > li > a');
const pages = "";

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link) {
  link.addEventListener('click', function() {
    console.log(link);
  })
})