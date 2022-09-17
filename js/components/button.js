export default class Button {
    constructor(texto, css_class)
    {
        this.text = texto
        this.css_class = css_class;
    }
    
    buildHTMLString() {
        let myHTML = `<button class="${this.css_class}">${this.text}</button>`;
        
        
        return myHTML;
    }
}