const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

const A = "abcdefghijklmnopqrstuvwxyz";

const maps = {
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
    smallCaps: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
    fullWidth: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
};

function convert(text, chars) {
    const map = {};

    for (let i = 0; i < A.length; i++) {
        map[A[i]] = chars[i];
    }

    return text.split("").map(char => {
        return map[char.toLowerCase()] || char;
    }).join("");
}

function circle(text) {
    const normal = "abcdefghijklmnopqrstuvwxyz";
    const circled = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";

    return text.split("").map(c => {
        const i = normal.indexOf(c.toLowerCase());
        return i >= 0 ? circled[i] : c;
    }).join("");
}

function square(text) {
    const normal = "abcdefghijklmnopqrstuvwxyz";
    const squared = "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉";

    return text.split("").map(c => {
        const i = normal.indexOf(c.toLowerCase());
        return i >= 0 ? squared[i] : c;
    }).join("");
}

function superscript(text) {
    const map = {
        a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",
        i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",
        q:"ᑫ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",
        y:"ʸ",z:"ᶻ"
    };

    return text.split("").map(c => map[c.toLowerCase()] || c).join("");
}

function spaced(text) {
    return text.split("").join(" ");
}

function dotted(text) {
    return text.split("").join("•");
}

function underline(text) {
    return text.split("").map(c => c + "\u0332").join("");
}

function strike(text) {
    return text.split("").map(c => c + "\u0336").join("");
}

function slash(text) {
    return text.split("").map(c => c + "\u0337").join("");
}

function doubleUnderline(text) {
    return text.split("").map(c => c + "\u0333").join("");
}

function wave(text) {
    return text.split("").map(c => c + "\u0330").join("");
}

function reverse(text) {
    return text.split("").reverse().join("");
}


// ========================================
// 100 DIFFERENT STYLES
// ========================================

function createStyles(text) {

    const styles = [

        `♡ ${convert(text,maps.script)} ♡`,
        `♥ ${convert(text,maps.bold)} ♥`,
        `★ ${convert(text,maps.gothic)} ★`,
        `✦ ${convert(text,maps.boldScript)} ✦`,
        `❀ ${convert(text,maps.italic)} ❀`,
        `☾ ${convert(text,maps.double)} ☽`,
        `⚡ ${convert(text,maps.boldItalic)} ⚡`,
        `♛ ${convert(text,maps.boldGothic)} ♛`,
        `✧ ${convert(text,maps.mono)} ✧`,
        `❖ ${convert(text,maps.sans)} ❖`,

        `𓆩 ${convert(text,maps.boldSans)} 𓆪`,
        `୨୧ ${convert(text,maps.italicSans)} ୨୧`,
        `꧁ ${convert(text,maps.gothic)} ꧂`,
        `༺ ${convert(text,maps.script)} ༻`,
        `『 ${convert(text,maps.bold)} 』`,
        `【 ${convert(text,maps.double)} 】`,
        `《 ${convert(text,maps.boldItalic)} 》`,
        `〈 ${convert(text,maps.mono)} 〉`,
        `〘 ${convert(text,maps.boldScript)} 〙`,
        `⟦ ${convert(text,maps.sans)} ⟧`,

        `♡ ${circle(text)} ♡`,
        `★ ${square(text)} ★`,
        `✦ ${superscript(text)} ✦`,
        `❥ ${text.toUpperCase()} ❥`,
        `ღ ${text.toLowerCase()} ღ`,
        `✿ ${spaced(text)} ✿`,
        `❀ ${dotted(text)} ❀`,
        `☁ ${underline(text)} ☁`,
        `⚜ ${strike(text)} ⚜`,
        `☄ ${slash(text)} ☄`,

        `➳ ${convert(text,maps.script)} ➳`,
        `➵ ${convert(text,maps.bold)} ➵`,
        `➸ ${convert(text,maps.italic)} ➸`,
        `➤ ${convert(text,maps.gothic)} ➤`,
        `➜ ${convert(text,maps.double)} ➜`,
        `→ ${convert(text,maps.boldSans)} ←`,
        `↠ ${convert(text,maps.boldItalicSans)} ↞`,
        `↣ ${convert(text,maps.mono)} ↢`,
        `⇢ ${convert(text,maps.sans)} ⇠`,
        `❯ ${convert(text,maps.smallCaps)} ❮`,

        `✺ ${convert(text,maps.script)} ✺`,
        `✵ ${convert(text,maps.boldScript)} ✵`,
        `✪ ${convert(text,maps.boldGothic)} ✪`,
        `✯ ${convert(text,maps.italicSans)} ✯`,
        `✰ ${convert(text,maps.boldSans)} ✰`,
        `❋ ${convert(text,maps.italic)} ❋`,
        `❃ ${convert(text,maps.double)} ❃`,
        `✾ ${convert(text,maps.mono)} ✾`,
        `❁ ${convert(text,maps.gothic)} ❁`,
        `❖ ${convert(text,maps.boldItalic)} ❖`,

        `꧁༺ ${convert(text,maps.bold)} ༻꧂`,
        `『✦ ${convert(text,maps.script)} ✦』`,
        `『♡ ${convert(text,maps.italic)} ♡』`,
        `★彡 ${convert(text,maps.boldScript)} 彡★`,
        `☆彡 ${convert(text,maps.gothic)} 彡☆`,
        `✪彡 ${convert(text,maps.double)} 彡✪`,
        `✯彡 ${convert(text,maps.mono)} 彡✯`,
        `✦彡 ${convert(text,maps.boldSans)} 彡✦`,
        `☾✧ ${convert(text,maps.italicSans)} ✧☽`,
        `⋆｡°✩ ${convert(text,maps.boldItalicSans)} ✩°｡⋆`,

        `𓆩♡ ${convert(text,maps.script)} ♡𓆪`,
        `𓆩✦ ${convert(text,maps.bold)} ✦𓆪`,
        `𖤐 ${convert(text,maps.gothic)} 𖤐`,
        `𖣔 ${convert(text,maps.boldGothic)} 𖣔`,
        `𖥔 ${convert(text,maps.double)} 𖥔`,
        `𖦹 ${convert(text,maps.italic)} 𖦹`,
        `𓇼 ${convert(text,maps.mono)} 𓇼`,
        `𓆉 ${convert(text,maps.boldSans)} 𓆉`,
        `𓅓 ${convert(text,maps.script)} 𓅓`,
        `𓂀 ${convert(text,maps.boldItalic)} 𓂀`,

        `╭─ ${convert(text,maps.bold)} ─╮`,
        `╰─ ${convert(text,maps.italic)} ─╯`,
        `┌─ ${convert(text,maps.script)} ─┐`,
        `└─ ${convert(text,maps.gothic)} ─┘`,
        `╔═ ${convert(text,maps.double)} ═╗`,
        `╚═ ${convert(text,maps.boldScript)} ═╝`,
        `╭━━ ${convert(text,maps.boldSans)} ━━╮`,
        `╰━━ ${convert(text,maps.mono)} ━━╯`,
        `┏━━ ${convert(text,maps.boldItalic)} ━━┓`,
        `┗━━ ${convert(text,maps.italicSans)} ━━┛`,

        `• ${convert(text,maps.smallCaps)} •`,
        `· ${convert(text,maps.fullWidth)} ·`,
        `⋆ ${convert(text,maps.bold)} ⋆`,
        `⊹ ${convert(text,maps.script)} ⊹`,
        `⟡ ${convert(text,maps.italic)} ⟡`,
        `⌁ ${convert(text,maps.gothic)} ⌁`,
        `∘ ${convert(text,maps.double)} ∘`,
        `◈ ${convert(text,maps.boldGothic)} ◈`,
        `◇ ${convert(text,maps.boldScript)} ◇`,
        `◆ ${convert(text,maps.mono)} ◆`,

        `♥︎ ${underline(convert(text,maps.bold))} ♥︎`,
        `♡⃝ ${strike(convert(text,maps.script))} ♡⃝`,
        `✧ ${doubleUnderline(convert(text,maps.italic))} ✧`,
        `★ ${wave(convert(text,maps.boldItalic))} ★`,
        `❥ ${slash(convert(text,maps.gothic))} ❥`,
        `☾ ${underline(convert(text,maps.double))} ☽`,
        `⚡ ${strike(convert(text,maps.boldSans))} ⚡`,
        `♛ ${doubleUnderline(convert(text,maps.script))} ♛`,
        `✿ ${wave(convert(text,maps.boldScript))} ✿`,
        `❀ ${underline(convert(text,maps.mono))} ❀`,

        `› ${convert(text,maps.bold)} ‹`,
        `› ${convert(text,maps.script)} ‹`,
        `» ${convert(text,maps.italic)} «`,
        `« ${convert(text,maps.gothic)} »`,
        `➤ ${convert(text,maps.boldScript)} ➤`,
        `➳ ${convert(text,maps.double)} ➳`,
        `↳ ${convert(text,maps.boldItalic)} ↳`,
        `❯ ${convert(text,maps.boldSans)} ❮`,
        `✦ ${circle(text)} ✦`,
        `♥ ${square(text)} ♥`

    ];

    return styles.slice(0, 100);
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

        const info = document.createElement("div");

        const number = document.createElement("small");
        number.textContent = `Style ${index + 1}`;

        const output = document.createElement("div");
        output.className = "result-text";
        output.textContent = styledText;

        info.appendChild(number);
        info.appendChild(output);

        const copyButton = document.createElement("button");

        copyButton.className = "copy-btn";
        copyButton.textContent = "COPY";

        copyButton.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(styledText);

                copyButton.textContent = "COPIED ✓";

                setTimeout(() => {
                    copyButton.textContent = "COPY";
                }, 1500);

            } catch {

                copyButton.textContent = "COPY FAILED";

                setTimeout(() => {
                    copyButton.textContent = "COPY";
                }, 1500);

            }

        });

        card.appendChild(info);
        card.appendChild(copyButton);

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
