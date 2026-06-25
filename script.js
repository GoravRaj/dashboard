const articleData = [
    {
        heading: "Super Cool Project",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 1,
    },
    {
        heading: "Less Cool Project",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 2,
    },
    {
        heading: "Impossible App",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 3,
    },
    {
        heading: "Easy Peasy App",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 4,
    },
    {
        heading: "Ad Blocker",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 5,
    },
    {
        heading: "Money Maker",
        summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi quidem, velit deleniti quisquam recusa",
        id: 6,
    },

]


const container = document.getElementById("article-container");

function appendArticle() {
    const articles = articleData.map(article => {
        return (`
        <article id="${article.id}">
            <h3>${article.heading}</h3>
            <p>${article.summary}</p>
        </article>
        `);
    }).join("");

    container.innerHTML = articles;
}


appendArticle();