const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

// ========================================
// FONT MAPS
// ========================================

const normal = "abcdefghijklmnopqrstuvwxyz";

const fontMaps = {

    bold:
    "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",

    italic:
    "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧",

    boldItalic:
    "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",

    script:
    "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",

    boldScript:
    "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",

    gothic:
    "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",

    boldGothic:
    "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",

    double:
    "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",

    mono:
    "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",

    sans:
    "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",

    boldSans:
    "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",

    italicSans:
    "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",

    boldItalicSans:
    "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",

    smallCaps:
    "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ"
};


// ========================================
// SAFE CONVERTER
// ========================================

function convertText(text, font) {

    const chars = Array.from(font);

    return Array.from(text).map(char => {

        const index = normal.indexOf(char.toLowerCase());

        if (index === -1) {
            return char;
        }

        return chars[index] || char;

    }).join("");
}


// ========================================
// SPECIAL STYLES
// ========================================

function circleText(text) {

    const chars =
        "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";

    return convertText(text, chars);
}


function squareText(text) {

    const chars =
        "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉";

    return convertText(text, chars);
}


function underlineText(text) {

    return Array.from(text)
        .map(char => char + "\u0332")
        .join("");
}


function strikeText(text) {

    return Array.from(text)
        .map(char => char + "\u0336")
        .join("");
}


function dotText(text) {

    return Array.from(text).join("•");
}


function spaceText(text) {

    return Array.from(text).join(" ");
}


// ========================================
// 50 STYLES
// ========================================

function createStyles(text) {

    return [

        `♡ ${convertText(text, fontMaps.script)} ♡`,

        `♥ ${convertText(text, fontMaps.bold)} ♥`,

        `★ ${convertText(text, fontMaps.gothic)} ★`,

        `✦ ${convertText(text, fontMaps.boldScript)} ✦`,

        `❀ ${convertText(text, fontMaps.italic)} ❀`,

        `☾ ${convertText(text, fontMaps.double)} ☽`,

        `♛ ${convertText(text, fontMaps.boldGothic)} ♛`,

        `⚡ ${convertText(text, fontMaps.boldItalic)} ⚡`,

        `✧ ${convertText(text, fontMaps.mono)} ✧`,

        `❖ ${convertText(text, fontMaps.sans)} ❖`,

        `❥ ${convertText(text, fontMaps.boldSans)} ❥`,

        `✿ ${convertText(text, fontMaps.italicSans)} ✿`,

        `☀ ${convertText(text, fontMaps.boldItalicSans)} ☀`,

        `• ${convertText(text, fontMaps.smallCaps)} •`,

        `꧁ ${convertText(text, fontMaps.bold)} ꧂`,

        `༺ ${convertText(text, fontMaps.script)} ༻`,

        `『 ${convertText(text, fontMaps.italic)} 』`,

        `【 ${convertText(text, fontMaps.gothic)} 】`,

        `《 ${convertText(text, fontMaps.double)} 》`,

        `〈 ${convertText(text, fontMaps.boldScript)} 〉`,

        `〘 ${convertText(text, fontMaps.boldItalic)} 〙`,

        `⟦ ${convertText(text, fontMaps.mono)} ⟧`,

        `⫷ ${convertText(text, fontMaps.boldGothic)} ⫸`,

        `𓆩 ${convertText(text, fontMaps.script)} 𓆪`,

        `୨୧ ${convertText(text, fontMaps.bold)} ୨୧`,

        `𖤐 ${convertText(text, fontMaps.gothic)} 𖤐`,

        `𖦹 ${convertText(text, fontMaps.italic)} 𖦹`,

        `✺ ${convertText(text, fontMaps.boldSans)} ✺`,

        `✵ ${convertText(text, fontMaps.double)} ✵`,

        `✪ ${convertText(text, fontMaps.boldScript)} ✪`,

        `✯ ${convertText(text, fontMaps.boldItalic)} ✯`,

        `➳ ${convertText(text, fontMaps.script)} ➳`,

        `➵ ${convertText(text, fontMaps.bold)} ➵`,

        `➸ ${convertText(text, fontMaps.italic)} ➸`,

        `➤ ${convertText(text, fontMaps.gothic)} ➤`,

        `→ ${convertText(text, fontMaps.double)} ←`,

        `↠ ${convertText(text, fontMaps.boldItalic)} ↞`,

        `❯ ${convertText(text, fontMaps.boldScript)} ❮`,

        `› ${convertText(text, fontMaps.mono)} ‹`,

        `» ${convertText(text, fontMaps.boldGothic)} «`,

        `⋆ ${convertText(text, fontMaps.script)} ⋆`,

        `⊹ ${convertText(text, fontMaps.boldSans)} ⊹`,

        `⟡ ${convertText(text, fontMaps.italicSans)} ⟡`,

        `♡ ${circleText(text)} ♡`,

        `★ ${squareText(text)} ★`,

        `♥ ${underlineText(convertText(text, fontMaps.bold))} ♥`,

        `✦ ${strikeText(convertText(text, fontMaps.script))} ✦`,

        `❀ ${dotText(convertText(text, fontMaps.italic))} ❀`,

        `☾ ${spaceText(convertText(text, fontMaps.gothic))} ☽`,

        `⚜ ${convertText(text, fontMaps.boldItalicSans)} ⚜`

    ];
}


// ========================================
// GENERATE
// ========================================

function generateStyles() {

    const text = textInput.value.trim();

    if (text === "") {

        results.innerHTML = `
            <div class="empty-message">
                Enter Your Text...
            </div>
        `;

        return;
    }

    results.innerHTML = "";

    const styles = createStyles(text);

    styles.forEach((styledText, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.innerHTML = `
            <div>
                <small>Style ${index + 1}</small>
                <div class="result-text"></div>
            </div>

            <button class="copy-btn">COPY</button>
        `;

        card.querySelector(".result-text").textContent = styledText;

        const copyButton = card.querySelector(".copy-btn");

        copyButton.addEventListener("click", async function () {

            try {

                await navigator.clipboard.writeText(styledText);

                copyButton.textContent = "COPIED ✓";

                setTimeout(() => {
                    copyButton.textContent = "COPY";
                }, 1500);

            } catch {

                copyButton.textContent = "COPY FAILED";

            }

        });

        results.appendChild(card);

    });
}


// ========================================
// BUTTON
// ========================================

generateBtn.addEventListener("click", generateStyles);


// ========================================
// ENTER KEY
// ========================================

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        generateStyles();
    }

});
