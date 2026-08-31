const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");


// ================================
// FONT STYLES
// ================================

const fonts = [

    {
        name: "Bold",
        map: {
            a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",
            j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",
            s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
        }
    },

    {
        name: "Italic",
        map: {
            a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",i:"𝑖",
            j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",q:"𝑞",r:"𝑟",
            s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",y:"𝑦",z:"𝑧"
        }
    },

    {
        name: "Double",
        map: {
            a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",
            j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",
            s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
        }
    },

    {
        name: "Monospace",
        map: {
            a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",
            j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",
            s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣"
        }
    },

    {
        name: "Small Caps",
        map: {
            a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",
            j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",
            s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
        }
    },

    {
        name: "Full Width",
        map: {
            a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",
            j:"ｊ",k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",
            s:"ｓ",t:"ｔ",u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ"
        }
    }

];


// ================================
// DECORATIONS
// ================================

const decorations = [

    ["꧁༺", "༻꧂"],
    ["『✦", "✦』"],
    ["『♡", "♡』"],
    ["★彡", "彡★"],
    ["༺", "༻"],
    ["꧁", "꧂"],
    ["𓆩♡𓆪 ", " 𓆩♡𓆪"],
    ["✧･ﾟ: *", "* :･ﾟ✧"],
    ["╰┈➤ ", " ♡"],
    ["✦ ", " ✦"],
    ["♡ ", " ♡"],
    ["♥ ", " ♥"],
    ["❀ ", " ❀"],
    ["✿ ", " ✿"],
    ["☾ ", " ☽"],
    ["♛ ", " ♛"],
    ["⚡ ", " ⚡"],
    ["☁ ", " ☁"],
    ["⋆｡°✩ ", " ✩°｡⋆"],
    ["୨♡୧ ", " ୨♡୧"],
    ["╔═══", "═══╗"],
    ["╚══", "══╝"],
    ["【", "】"],
    ["《", "》"],
    ["〈", "〉"],
    ["〘", "〙"],
    ["⟦", "⟧"],
    ["⫷", "⫸"],
    ["✩｡:*", "*:｡✩"],
    ["◥", "◤"],
    ["◈ ", " ◈"],
    ["◇ ", " ◇"],
    ["◆ ", " ◆"],
    ["☯ ", " ☯"],
    ["☮ ", " ☮"],
    ["☀ ", " ☀"],
    ["☾✧ ", " ✧☽"],
    ["♕ ", " ♕"],
    ["♔ ", " ♔"],
    ["⚜ ", " ⚜"],
    ["❖ ", " ❖"],
    ["✪ ", " ✪"],
    ["✰ ", " ✰"],
    ["✯ ", " ✯"],
    ["✵ ", " ✵"],
    ["✺ ", " ✺"],
    ["❥ ", " ❥"]

];


// ================================
// CONVERT TEXT
// ================================

function convertText(text, map) {

    return text
        .split("")
        .map(char => {

            const lower = char.toLowerCase();

            return map[lower] || char;

        })
        .join("");
}


// ================================
// CREATE COMBINATIONS
// ================================

function createCombinations(text) {

    const combinations = [];

    for (let i = 0; i < fonts.length; i++) {

        const styled = convertText(text, fonts[i].map);

        for (let j = 0; j < decorations.length; j++) {

            const front = decorations[j][0];
            const back = decorations[j][1];

            combinations.push(front + styled + back);

        }

    }

    return combinations;
}


// ================================
// GENERATE
// ================================

function generateStyles() {

    const text = textInput.value.trim();

    if (text === "") {

        results.innerHTML = `
            <div class="empty-message">
                Please enter your name or text first.
            </div>
        `;

        return;
    }

    results.innerHTML = "";

    const combinations = createCombinations(text);

    const uniqueResults = [...new Set(combinations)];

    uniqueResults.forEach((styledText, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.innerHTML = `
            <div>
                <small>Style ${index + 1}</small>
                <div class="result-text">${styledText}</div>
            </div>

            <button class="copy-btn">
                COPY
            </button>
        `;

        const copyButton = card.querySelector(".copy-btn");

        copyButton.addEventListener("click", function () {

            navigator.clipboard.writeText(styledText);

            copyButton.textContent = "COPIED ✓";

            setTimeout(() => {

                copyButton.textContent = "COPY";

            }, 1500);

        });

        results.appendChild(card);

    });

}


// ================================
// GENERATE BUTTON
// ================================

generateBtn.addEventListener("click", generateStyles);


// ================================
// ENTER KEY
// ================================

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        generateStyles();

    }

});


// ================================
// RATING SYSTEM
// ================================

const stars = document.querySelectorAll(".star");
const ratingMessage = document.getElementById("ratingMessage");

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        const rating = Number(this.dataset.rating);

        stars.forEach(function(item) {

            const itemRating = Number(item.dataset.rating);

            if (itemRating <= rating) {

                item.classList.add("active");

            } else {

                item.classList.remove("active");

            }

        });

        ratingMessage.textContent =
            "Thanks for rating Fontify ⭐ " + rating + "/5";

    });

});
