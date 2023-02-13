import { PageElement } from "../element";

class Router{

    private routes: Map<string, PageElement> = new Map();

    constructor() {
        window.onload = () => this.loadPage(window.location.pathname, null);
        // window.onunload = () => alert("unload");
    }

    private loadPage(pathname: string = window.location.pathname, title: string | null) {
        const page = this.routes.get(pathname);  
        if (page != null)
        {   
            page.init();
            if (title != null)
                window.document.title = title;
            else
            {    
                title = pathname.substring(pathname.indexOf('/') + 1, pathname.length)
                window.document.title = page.title !=  undefined ? page.title : title != undefined ? title : "home"
            }
        }
        else
            this.pageNotFound()
    }

    public put(pathname: string, route: PageElement) {
        route.pathname = pathname;
        this.routes.set(pathname, route);
    }

    public getPate(pathname: string): PageElement | undefined | null{
        return this.routes.get(pathname);
    }

    public remove(route: PageElement) {
        this.routes.delete(route.pathname);
    }

    public load(pathname: string | PageElement) {
        if (typeof pathname == "string")
            window.location.assign(pathname);
        else if (pathname != null)
            this.loadPage(pathname.pathname, null)
    }



    private pageNotFound(): void {
        const body = document.createElement("body") as HTMLBodyElement;
        body.style.backgroundColor = "#404853";
        body.style.width = "100%";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.innerHTML = "<div style='text-align: center;'>"
            + "<h1 style='text-shadow: 0 3px 0px $color-base, 0 6px 0px #333; color: #f54f59; font-size: 6em; font-weight: 700; line-height: 0.6em;'>404</h1>" +
            "<h1 style='text-shadow: 0 3px 0px $color-base, 0 6px 0px #333; color: #f54f59; font-size: 10; font-weight: 15; line-height: 0.6em;'>Page not found</h1>"
            + "</div>"
        document.body = body;
    }


}

export const router = new Router();
