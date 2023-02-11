import { PageElement, H1Element, DivElement, ButtonElement } from '../element';
import {router}  from "../router/Router";
import { page2 } from "./Page2";

export const page1 = new PageElement(() => {
    
    const name: string = "Hello World Pagina 1"
    const button = new ButtonElement("Test 1",0, 0);
    page1.name = "page1";

    function a() {
        console.log("name: " + name);
        page1.appendChild(new H1Element(name, 200, 200));
        const div = new DivElement(0, 0);
        button.setOnClick(() => {
            router.loadRoute(page2);
            
        });
        div.setStyle("background-color: red; width: 100px; height: 100px; inset: 0px;");
        div.appendChild(button);
        page1.appendChild(div);
    }
   

    a()
});
