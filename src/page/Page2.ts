import { PageElement, ButtonElement, DivElement } from '../element';
import {router}  from "../router/Router";

export  const page2 = new PageElement(() => {
    
    const name: string = "Hello World Pagina 2"
    const div = new DivElement(0, 0);
    const button = new ButtonElement("Test",0, 0);
    page2.name = "page2";

    function init() {
        div.setStyle("background-color: yellow; width: 100%; height: 100%; position: fixed; inset: 0px;");
        // div.appendChild(new H3Element(name, 200, 200));
        button.setOnClick(() => router.loadRoute(page2))
        page2.appendChild(div);
        div.appendChild(button);
    }

    init()
});