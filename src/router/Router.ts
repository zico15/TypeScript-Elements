import { PageElement } from "../element";

class Router {

    private routes: Array<PageElement> = [];
    private page: PageElement | null = null;
    private _url: string = "";

    constructor() {
        console.log("Router created");
        this._url = window.location.origin + "/public/";
        // window.addEventListener("load", (event) => {
        //     console.log("page is fully loaded");
        //     alert("page is fully loaded");
        // });

        // window.onload = () => {
        //     console.log("window.onload ");
        //     alert("window.onload");
        // }


    }

    public addRoute(route: PageElement) {
        this.routes.push(route);
    }

    public removeRoute(route: PageElement) {
        this.routes = this.routes.filter((r) => r !== route);
    }

    public loadRoute(route: PageElement) {
        this.page = route;
        // const opened = window.open("teste2.html") as Window;
        // opened.document.write("Your HTML here");
        // window.location.assign(this._url + "teste" + ".html")
        var xhr = new XMLHttpRequest();

        try {
            // access something
         window.location.assign(window.location.origin + "/public/teste2" + ".html")
       
            //window.document.write("Your HTML here");
          } catch (ex) {
            // oops. Exception object is in "ex"
            console.log("error: " + ex);
          }
            
       
    }



}

export const router = new Router();
