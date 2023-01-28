let bundeslaender = [
    {
        "name": "Baden-Württemberg",
        "populacion": "11,7 Mio.",
        "url": "https://www.baden-wuerttemberg.de/de/startseite/",
        "comments" : []
    },
    {
        "name": "Bayern",
        "populacion": "13,8 Mio.",
        "url": "https://www.bayern.de/",
        "comments": []
    },
    {
        "name": "Hessen",
        "populacion": "6,2 Mio.",
        "url": "https://hessen.de/",
        "comments": []
    },
    {
        "name": "Rheinland-Pfalz",
        "populacion": "4,1 Mio.",
        "url": "https://www.rlp.de/de/startseite/",
        "comments": []
    },
    {
        "name": "Saarland",
        "populacion": "0,9 Mio.",
        "url": "https://www.saarland.de/DE/home/home_node.html",
        "comments": []
    },
    {
        "name": "Nordrhein-Westfalen",
        "populacion": "17,9 Mio.",
        "url": "https://www.land.nrw/",
        "comments": []
    },
    {
        "name": "Niedersachsen",
        "populacion": "7,9 Mio.",
        "url": "https://www.niedersachsen.de/startseite/",
        "comments": []
    },
    {
        "name": "Schleswig-Holstein",
        "populacion": "2,8 Mio.",
        "url": "https://www.schleswig-holstein.de/DE/landesportal/landesportal_node.html",
        "comments": []
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "populacion": "1,6 Mio.",
        "url": "https://www.mecklenburg-vorpommern.de/startseite/",
        "comments": []
    },
    {
        "name": "Brandenburg",
        "populacion": "2,5 Mio,",
        "url": "https://www.brandenburg.de/cms/detail.php/bb1.c.473964.de",
        "comments": []
    },
    {
        "name": "Berlin",
        "populacion": "3,6 Mio.",
        "url": "https://www.berlin.de/",
        "comments": []
    },
    {
        "name": "Sachsen",
        "populacion": "4,0 Mio.",
        "url": "https://www.sachsen.de/",
        "comments": []
    },
    {
        "name": "Sachsen-Anhalt",
        "populacion": "2,2 Mio.",
        "url": "https://www.sachsen-anhalt.de/startseite",
        "comments": []
    },
    {
        "name": "Thüringen",
        "populacion": "2,1 Mio.",
        "url": "https://thueringen.de/",
        "comments": []
    },
    {
        "name": "Hamburg",
        "populacion": "1,8 Mio.",
        "url": "https://www.hamburg.de/",
        "comments": []
    },
    {
        "name": "Bremen",
        "populacion": "0,5 Mio.",
        "url": "https://www.bremen.de/",
        "comments": []
    },
];

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
    
        content.innerHTML += /*html*/ `
            <div class="card">
                <a href="${bundeslaender[i]['url']}" target="_blank"><img class="webImg" src="img/web.png"></a>
                <h2 onclick="showComment(${i})">${bundeslaender[i]['name']}</h2>
                <div class="populacion"><b>Einwohner: </b>${bundeslaender[i]['populacion']}</div>
            </div>`;
    }
}

function showComment(i){
    document.querySelector('.commentBox').classList.add('showCommentBox');

    document.querySelector('.commentBox').innerHTML = /*html*/`
        <div class="commentContent">
            <div class="header">
                <h3>${bundeslaender[i]['name']}</h3>
                <div onclick="closeComment()" class="arrow">&#x2716;</div>
            </div>
            <div class="posting">
                <textarea class="input" id="input${i}"></textarea>
                <button onclick="addPost(${i})">Senden</button>
            </div>
            <div class="text">${bundeslaender[i]['comments']}</div>
        </div>
        `; 
}

function closeComment() {
    document.querySelector('.commentBox').classList.remove('showCommentBox');
    document.querySelector('.commentBox').innerHTML = '';

}

function addPost(index) {
    let input = document.getElementById(`input${index}`);
    bundeslaender[index]['comments'].push(input.value);

    input.value = '';
    showComment(index);
}