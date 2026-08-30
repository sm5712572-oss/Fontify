const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

const abc = "abcdefghijklmnopqrstuvwxyz";

// ================================
// SAFE FONT MAPS
// ================================

const fonts = {
    bold: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",

    italic: "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧",

    boldItalic: "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",

    script: "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",

    boldScript: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",

    gothic: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",

    boldGothic: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",

    double: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",

    mono: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",

    sans: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",

    boldSans: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",

    italicSans: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",

    boldItalicSans: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",

    smallCaps: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ"
};


// ================================
// CONVERTER
// ================================

function convert(text, font) {

    const chars = Array.from(font);

    return Array.from(text).map(char => {

        const index = abc.indexOf(char.toLowerCase());

        if (index === -1) return char;

        return chars[index] || char;

    }).join("");
}


// ================================
// EFFECTS
// ================================

function underline(text) {
    return Array.from(text)
        .map(c => c + "\u0332")
        .join("");
}

function doubleUnderline(text) {
    return Array.from(text)
        .map(c => c + "\u0333")
        .join("");
}

function strike(text) {
    return Array.from(text)
        .map(c => c + "\u0336")
        .join("");
}

function dot(text) {
    return Array.from(text).join("•");
}

function spaced(text) {
    return Array.from(text).join(" ");
}

function circle(text) {

    const map =
        "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";

    return convert(text, map);
}

function square(text) {

    const map =
        "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉";

    return convert(text, map);
}


// ================================
// 50 UNIQUE-LOOKING STYLES
// ================================

function makeStyles(text) {

    return [

        `♡ ${convert(text, fonts.script)} ♡`,

        `♥ ${convert(text, fonts.bold)} ♥`,

        `★ ${convert(text, fonts.gothic)} ★`,

        `✦ ${convert(text, fonts.boldScript)} ✦`,

        `❀ ${convert(text, fonts.italic)} ❀`,

        `☾ ${convert(text, fonts.double)} ☽`,

        `♛ ${convert(text, fonts.boldGothic)} ♛`,

        `⚡ ${convert(text, fonts.boldItalic)} ⚡`,

        `✧ ${convert(text, fonts.mono)} ✧`,

        `❖ ${convert(text, fonts.sans)} ❖`,

        `❥ ${convert(text, fonts.boldSans)} ❥`,

        `✿ ${convert(text, fonts.italicSans)} ✿`,

        `☀ ${convert(text, fonts.boldItalicSans)} ☀`,

        `• ${convert(text, fonts.smallCaps)} •`,

        `꧁༺ ${convert(text, fonts.bold)} ༻꧂`,

        `『✦ ${convert(text, fonts.italic)} ✦』`,

        `『♡ ${convert(text, fonts.script)} ♡』`,

        `【★ ${convert(text, fonts.gothic)} ★】`,

        `《✧ ${convert(text, fonts.double)} ✧》`,

        `〈❀ ${convert(text, fonts.boldScript)} ❀〉`,

        `〘⚡ ${convert(text, fonts.boldItalic)} ⚡〙`,

        `⟦❖ ${convert(text, fonts.mono)} ❖⟧`,

        `⫷♛ ${convert(text, fonts.boldGothic)} ♛⫸`,

        `𓆩♡ ${convert(text, fonts.script)} ♡𓆪`,

        `୨୧ ${convert(text, fonts.boldSans)} ୨୧`,

        `𖤐 ${convert(text, fonts.gothic)} 𖤐`,

        `𖦹 ${convert(text, fonts.italicSans)} 𖦹`,

        `✺ ${convert(text, fonts.boldItalicSans)} ✺`,

        `✵ ${convert(text, fonts.double)} ✵`,

        `✪ ${convert(text, fonts.boldScript)} ✪`,

        `✯ ${convert(text, fonts.italic)} ✯`,

        `➳ ${convert(text, fonts.script)} ➳`,

        `➵ ${convert(text, fonts.bold)} ➵`,

        `➸ ${convert(text, fonts.italic)} ➸`,

        `➤ ${convert(text, fonts.gothic)} ➤`,

        `→ ${convert(text, fonts.double)} ←`,

        `↠ ${convert(text, fonts.boldItalic)} ↞`,

        `❯ ${convert(text, fonts.boldScript)} ❮`,

        `› ${convert(text, fonts.mono)} ‹`,

        `» ${convert(text, fonts.boldGothic)} «`,

        `⋆｡°✩ ${convert(text, fonts.script)} ✩°｡⋆`,

        `╭─ ${convert(text, fonts.bold)} ─╮`,

        `╰─ ${convert(text, fonts.italic)} ─╯`,

        `╔═ ${convert(text, fonts.gothic)} ═╗`,

        `╚═ ${convert(text, fonts.double)} ═╝`,

        `♡ ${circle(text)} ♡`,

        `★ ${square(text)} ★`,

        `♥ ${underline(convert(text, fonts.bold))} ♥`,

        `✦ ${strike(convert(text, fonts.script))} ✦`,

        `❀ ${doubleUnderline(convert(text, fonts.italic))} ❀`,

        `⚜ ${spaced(convert(text, fonts.boldSans))} ⚜`

    ];

}


// ================================
// GENERATE
// ================================

function generateStyles() {

    const text = textInput.value.trim();

    if (!text) {

        results.innerHTML = `
            <div class="empty-message">
                Enter Your Text...
            </div>
        `;

        return;
    }

    results.innerHTML = "";

    const styles = makeStyles(text);

    styles.forEach((styledText, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        const info = document.createElement("div");

        const label = document.createElement("small");

        label.textContent = `Style ${index + 1}`;

        const output = document.createElement("div");

        output.className = "result-text";

        output.textContent = styledText;

        info.appendChild(label);
        info.appendChild(output);

        const button = document.createElement("button");

        button.className = "copy-btn";

        button.textContent = "COPY";

        button.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(styledText);

                button.textContent = "COPIED ✓";

                setTimeout(() => {
                    button.textContent = "COPY";
                }, 1500);

            } catch {

                button.textContent = "COPY FAILED";

            }

        });

        card.appendChild(info);
        card.appendChild(button);

        results.appendChild(card);

    });
}


// ================================
// EVENTS
// ================================

generateBtn.addEventListener("click", generateStyles);

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        generateStyles();
    }

});
