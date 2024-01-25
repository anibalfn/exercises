class NewsCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const leftCard = document.createElement('div');
        leftCard.setAttribute('class', 'leftCard');

        const writer = document.createElement('span');
        writer.textContent = ('By ' + this.getAttribute('writer') || 'Anonymous');

        const titleLink = document.createElement('a');
        titleLink.textContent = this.getAttribute('title');
        titleLink.href = this.getAttribute('url')

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');


        leftCard.appendChild(writer);
        leftCard.appendChild(titleLink);
        leftCard.appendChild(newsContent);

        const rightCard = document.createElement('div');
        rightCard.setAttribute('class', 'rightCard');

        const newsImg = document.createElement('img');
        newsImg.src = this.getAttribute('img') || "assets/Default_pfp.svg.png";
        newsImg.alt = "Darth Vader hires devs"
        rightCard.appendChild(newsImg);

        componentRoot.appendChild(leftCard);
        componentRoot.appendChild(rightCard);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
    width: 80%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.leftCard > a {
    margin-top: 15px;
    font-size: 50px;
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

.leftCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.leftCard > h1 {
    margin-top: 15px;
    font-size: 20px;
    color: green;
}

.leftCard > p {
    font-size: 20px;
    background-color: blue;
}

.leftCard > span {
    font-weight: 400;
}

img {
    width: 15rem;
    height: 10rem;
}
        `;

        return style;
    }
}

customElements.define('news-card', NewsCard)