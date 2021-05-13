class Navigation{
    constructor(links, pages){
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }

    getLinks() {
        console.log(this.links);
    }

    setPage(pageId) {
        this.currentPage = pageId;
        console.log(this.currentPage);
    }

    getHash(link){
        return link.href.split("#")[1];
    }
}

export default Navigation;