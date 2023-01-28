
function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        content.innerHTML += `
            <div class="card">
                <h2>${land['name']}</h2>
                <div id="landcontent${i}"></div>
                <input id="input${i}"><button onclick="addComment(${i})">OK</button>
            </div>
        `;

        let landcontent = document.getElementById(`landcontent${i}`);
        
        for (let j = 0; j < land['comments'].length; j++) {
            const comment = land['comments'][j];
            landcontent.innerHTML += `<div>${comment}</div>`;
        }
    
    }
}


function addComment(index) {
    let input = document.getElementById(`input${index}`);
    bundeslaender[index]['comments'].push(input.value);
    render();
    input.value = '';
}