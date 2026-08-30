const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

// =====================================
// BASIC FONT MAPS
// =====================================

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
        name: "Bold Italic",
        map: {
            a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",
            j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",
            s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
        }
    },

    {
        name: "Script",
        map: {
            a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"ℯ",f:"𝒻",g:"ℊ",h:"𝒽",i:"𝒾",
            j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"ℴ",p:"𝓅",q:"𝓆",r:"𝓇",
            s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"
        }
    },

    {
        name: "Bold Script",
        map: {
            a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",
            j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",
            s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"
        }
    },

    {
        name: "Gothic",
        map: {
            a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",
            j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",
            s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷"
        }
    },

    {
        name: "Bold Gothic",
        map: {
            a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",
            j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",
            s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
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
        name: "Sans",
        map: {
            a:"𝖺",b:"𝖻",c:"𝖼",d:"𝖽",e:"𝖾",f:"𝖿",g:"𝗀",h:"𝗁",i:"𝗂",
            j:"𝗃",k:"𝗄",l:"𝗅",m:"𝗆",n:"𝗇",o:"𝗈",p:"𝗉",q:"𝗊",r:"𝗋",
            s:"𝗌",t:"𝗍",u:"𝗎",v:"𝗏",w:"𝗐",x:"𝗑",y:"𝗒",z:"𝗓"
        }
    },

    {
        name: "Bold Sans",
        map: {
            a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",
            j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",
            s:"𝘀",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇"
        }
    },

    {
        name: "Italic Sans",
        map: {
            a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",
            j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",
            s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"
        }
    },

    {
        name: "Bold Italic Sans",
        map: {
            a:"𝙖",b:"𝙗",c:"𝙘",d:"𝙙",e:"𝙚",f:"𝙛",g:"𝙜",h:"𝙝",i:"𝙞",
            j:"𝙟",k:"𝙠",l:"𝙡",m:"𝙢",n:"𝙣",o:"𝙤",p:"𝙥",q:"𝙦",r:"𝙧",
            s:"𝙨",t:"𝙩",u:"𝙪",v:"𝙫",w:"𝙬",x:"𝙭",y:"𝙮",z:"𝙯"
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


// =====================================
// DECORATIONS — 100 DIFFERENT
// =====================================

const decorations = [

    ["♡ ", " ♡"],
    ["♥ ", " ♥"],
    ["❤ ", " ❤"],
    ["❥ ", " ❥"],
    ["ღ ", " ღ"],
    ["ʚɞ ", " ʚɞ"],
    ["★ ", " ★"],
    ["☆ ", " ☆"],
    ["✦ ", " ✦"],
    ["✧ ", " ✧"],

    ["❀ ", " ❀"],
    ["✿ ", " ✿"],
    ["❁ ", " ❁"],
    ["❃ ", " ❃"],
    ["❋ ", " ❋"],
    ["✾ ", " ✾"],
    ["♛ ", " ♛"],
    ["♕ ", " ♕"],
    ["♔ ", " ♔"],
    ["⚜ ", " ⚜"],

    ["☯ ", " ☯"],
    ["☮ ", " ☮"],
    ["☾ ", " ☽"],
    ["☀ ", " ☀"],
    ["☁ ", " ☁"],
    ["⚡ ", " ⚡"],
    ["☄ ", " ☄"],
    ["✪ ", " ✪"],
    ["✯ ", " ✯"],
    ["✰ ", " ✰"],

    ["➳ ", " ➳"],
    ["➵ ", " ➵"],
    ["➸ ", " ➸"],
    ["➤ ", " ➤"],
    ["➜ ", " ➜"],
    ["→ ", " ←"],
    ["← ", " →"],
    ["↠ ", " ↞"],
    ["↣ ", " ↢"],
    ["⇢ ", " ⇠"],

    ["꧁ ", " ꧂"],
    ["꧁༺ ", " ༻꧂"],
    ["༺ ", " ༻"],
    ["༼ ", " ༽"],
    ["『 ", " 』"],
    ["【 ", " 】"],
    ["《 ", " 》"],
    ["〈 ", " 〉"],
    ["〘 ", " 〙"],
    ["〚 ", " 〛"],

    ["⟦ ", " ⟧"],
    ["⟪ ", " ⟫"],
    ["⫷ ", " ⫸"],
    ["⌈ ", " ⌉"],
    ["⌊ ", " ⌋"],
    ["╔═ ", " ═╗"],
    ["╚═ ", " ═╝"],
    ["╭─ ", " ─╮"],
    ["╰─ ", " ─╯"],
    ["┌─ ", " ─┐"],

    ["✧･ﾟ: ", " :･ﾟ✧"],
    ["⋆｡°✩ ", " ✩°｡⋆"],
    ["｡･:*˚:✧ ", " ✧:˚*:･｡"],
    ["•°¯`•• ", " ••´¯°•"],
    ["×º°”˜ ", " ˜”°º×"],
    ["★彡 ", " 彡★"],
    ["☆彡 ", " 彡☆"],
    ["✪彡 ", " 彡✪"],
    ["✯彡 ", " 彡✯"],
    ["✦彡 ", " 彡✦"],

    ["𓆩 ", " 𓆪"],
    ["𓆩♡ ", " ♡𓆪"],
    ["𓂀 ", " 𓂀"],
    ["𖤐 ", " 𖤐"],
    ["𖣔 ", " 𖣔"],
    ["𖥔 ", " 𖥔"],
    ["𖦹 ", " 𖦹"],
    ["𓇼 ", " 𓇼"],
    ["𓆉 ", " 𓆉"],
    ["𓅓 ", " 𓅓"],

    ["୨୧ ", " ୨୧"],
    ["୨♡୧ ", " ୨♡୧"],
    ["꒰ ", " ꒱"],
    ["꒰ঌ ", " ໒꒱"],
    ["⌁ ", " ⌁"],
    ["⊹ ", " ⊹"],
    ["⟡ ", " ⟡"],
    ["✺ ", " ✺"],
    ["✵ ", " ✵"],
    ["❖ ", " ❖"],

    ["╰┈➤ ", ""],
    ["➤ ", ""],
    ["↳ ", ""],
    ["➥ ", ""],
    ["❯ ", " ❮"],
    ["› ", " ‹"],
    ["» ", " «"],
    ["• ", " •"],
    ["⋆ ", " ⋆"],
    ["· ", " ·"]
];


// =====================================
// CONVERT
// =====================================

function convertText(text, map) {

    return text.split("").map(char => {

        const lower = char.toLowerCase();

        return map[lower] || char;

    }).join("");
}


// =====================================
// MAKE 100 STYLES
// =====================================

function createStyles(text) {

    const output = [];

    for (let i = 0; i < 100; i++) {

        const font = fonts[i % fonts.length];

        const decoration = decorations[i];

        let styled = convertText(text, font.map);

        // Different size / case effects
        if (i % 10 === 1) {
            styled = styled.toUpperCase();
        }

        if (i % 10 === 2) {
            styled = styled.toLowerCase();
        }

        if (i % 10 === 3) {
            styled = styled.split("").join(" ");
        }

        if (i % 10 === 4) {
            styled = styled.split("").join("•");
        }

        if (i % 10 === 5) {
            styled = styled.split("").join("·");
        }

        output.push(
            decoration[0] +
            styled +
            decoration[1]
        );
    }

    return [...new Set(output)];
}


// =====================================
// GENERATE
// =====================================

function generateStyles() {

    const text = textInput.value.trim();

    if (text === "") {

        results.innerHTML = `
            <div class="empty-message">
                Enter your text above to create stylish versions.
            </div>
        `;

        return;
    }

    results.innerHTML = "";

    const styles = createStyles(text);

    styles.forEach((styledText, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        const label = document.createElement("small");
        label.textContent = `Style ${index + 1}`;

        const resultText = document.createElement("div");
        resultText.className = "result-text";
        resultText.textContent = styledText;

        const copyButton = document.createElement("button");
        copyButton.className = "copy-btn";
        copyButton.textContent = "COPY";

        copyButton.addEventListener("click", function () {

            navigator.clipboard.writeText(styledText);

            copyButton.textContent = "COPIED ✓";

            setTimeout(() => {
                copyButton.textContent = "COPY";
            }, 1500);

        });

        const textBox = document.createElement("div");

        textBox.appendChild(label);
        textBox.appendChild(resultText);

        card.appendChild(textBox);
        card.appendChild(copyButton);

        results.appendChild(card);

    });
}


// =====================================
// BUTTON
// =====================================

generateBtn.addEventListener("click", generateStyles);


// =====================================
// ENTER KEY
// =====================================

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        generateStyles();
    }

});
