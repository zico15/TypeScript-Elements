import { PageElement, AnchorPane, ButtonElement, SvgElement } from '../element';

export const page3 = new PageElement((body: PageElement) => {

    const pane = new AnchorPane();
    const button = new ButtonElement("Click me");
    const svg = new SvgElement("assets/vector/length.svg");

    async function load() {
        pane.addStyle("background-color: red;");
        pane.appendChild(button, svg);
        button.setOnClick(() => {
            console.log("Clicked");
        });
        AnchorPane.setTopAnchor(svg, 100);
        AnchorPane.setLeftAnchor(svg, 200);
    }

    load();
    body.appendChild(pane)
});
