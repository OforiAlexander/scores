const data = [{
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "color": "#FFB21E"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "color": "#F55"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        "color": "#00BB8F"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        "color": "#1125D6"
    }
]


const holderEl = document.querySelector('.summary-holder')

function createDiv() {
    return holderEl.innerHTML = data.map(x => {
        let { category, score, icon, color } = x;
        return `
        <div class='holders'>
        <div>
        <img src='${icon}' class='svg-img'/>
        <p style='color:${color}'>${category}</p>
    </div>
    <p class='paragraphe-seperator'>
    ${score} <span>/ 100</span>
    </p>
        </div>
        
        `
        console.log(category)
    })
}
createDiv();