import Navigation from './components/navigation';
import './components/tasklist';
import './components/stopwatch';
import './components/musicplayer';
import './components/pomodoroTimer';
import './components/board';
import './components/dictionary';

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link) {
  link.addEventListener('click', function() {
      let pageId = nav.getHash(link);
      nav.setPage(pageId);
  })
})

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
  link.addEventListener('click', function () {
    let pageId = subNav.getHash(link);
    subNav.setPage(pageId);
  })
})