const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

// ==========================================
// FONT MAPS
// ==========================================

const fonts = {

    bold: {
        a:"𝐚", b:"𝐛", c:"𝐜", d:"𝐝", e:"𝐞", f:"𝐟", g:"𝐠",
        h:"𝐡", i:"𝐢", j:"𝐣", k:"𝐤", l:"𝐥", m:"𝐦", n:"𝐧",
        o:"𝐨", p:"𝐩", q:"𝐪", r:"𝐫", s:"𝐬", t:"𝐭", u:"𝐮",
        v:"𝐯", w:"𝐰", x:"𝐱", y:"𝐲", z:"𝐳"
    },

    italic: {
        a:"𝑎", b:"𝑏", c:"𝑐", d:"𝑑", e:"𝑒", f:"𝑓", g:"𝑔",
        h:"ℎ", i:"𝑖", j:"𝑗", k:"𝑘", l:"𝑙", m:"𝑚", n:"𝑛",
        o:"𝑜", p:"𝑝", q:"𝑞", r:"𝑟", s:"𝑠", t:"𝑡", u:"𝑢",
        v:"𝑣", w:"𝑤", x:"𝑥", y:"𝑦", z:"𝑧"
    },

    boldItalic: {
        a:"𝒂", b:"𝒃", c:"𝒄", d:"𝒅", e:"𝒆", f:"𝒇", g:"𝒈",
        h:"𝒉", i:"𝒊", j:"𝒋", k:"𝒌", l:"𝒍", m:"𝒎", n:"𝒏",
        o:"𝒐", p:"𝒑", q:"𝒒", r:"𝒓", s:"𝒔", t:"𝒕", u:"𝒖",
        v:"𝒗", w:"𝒘", x:"𝒙", y:"𝒚", z:"𝒛"
    },

    script: {
        a:"𝒶", b:"𝒷", c:"𝒸", d:"𝒹", e:"ℯ", f:"𝒻", g:"ℊ",
        h:"𝒽", i:"𝒾", j:"𝒿", k:"𝓀", l:"𝓁", m:"𝓂", n:"𝓃",
        o:"ℴ", p:"𝓅", q:"𝓆", r:"𝓇", s:"𝓈", t:"𝓉", u:"𝓊",
        v:"𝓋", w:"𝓌", x:"𝓍", y:"𝓎", z:"𝓏"
    },

    boldScript: {
        a:"𝓪", b:"𝓫", c:"𝓬", d:"𝓭", e:"𝓮", f:"𝓯", g:"𝓰",
        h:"𝓱", i:"𝓲", j:"𝓳", k:"𝓴", l:"𝓵", m:"𝓶", n:"𝓷",
        o:"𝓸", p:"𝓹", q:"𝓺", r:"𝓻", s:"𝓼", t:"𝓽", u:"𝓾",
        v:"𝓿", w:"𝔀", x:"𝔁", y:"𝔂", z:"𝔃"
    },

    gothic: {
        a:"𝔞", b:"𝔟", c:"𝔠", d:"𝔡", e:"𝔢", f:"𝔣", g:"𝔤",
        h:"𝔥", i:"𝔦", j:"𝔧", k:"𝔨", l:"𝔩", m:"𝔪", n:"𝔫",
        o:"𝔬", p:"𝔭", q:"𝔮", r:"𝔯", s:"𝔰", t:"𝔱", u:"𝔲",
        v:"𝔳", w:"𝔴", x:"𝔵", y:"𝔶", z:"𝔷"
    },

    boldGothic: {
        a:"𝖆", b:"𝖇", c:"𝖈", d:"𝖉", e:"𝖊", f:"𝖋", g:"𝖌",
        h:"𝖍", i:"𝖎", j:"𝖏", k:"𝖐", l:"𝖑", m:"𝖒", n:"𝖓",
        o:"𝖔", p:"𝖕", q:"𝖖", r:"𝖗", s:"𝖘", t:"𝖙", u:"𝖚",
        v:"𝖛", w:"𝖜", x:"𝖝", y:"𝖞", z:"𝖟"
    },

    double: {
        a:"𝕒", b:"𝕓", c:"𝕔", d:"𝕕", e:"𝕖", f:"𝕗", g:"𝕘",
        h:"𝕙", i:"𝕚", j:"𝕛", k:"𝕜", l:"𝕝", m:"𝕞", n:"𝕟",
        o:"𝕠", p:"𝕡", q:"𝕢", r:"𝕣", s:"𝕤", t:"𝕥", u:"𝕦",
        v:"𝕧", w:"𝕨", x:"𝕩", y:"𝕪", z:"𝕫"
    },

    mono: {
        a:"𝚊", b:"𝚋", c:"𝚌", d:"𝚍", e:"𝚎", f:"𝚏", g:"𝚐",
        h:"𝚑", i:"𝚒", j:"𝚓", k:"𝚔", l:"𝚕", m:"𝚖", n:"𝚗",
        o:"𝚘", p:"𝚙", q:"𝚚", r:"𝚛", s:"𝚜", t:"𝚝", u:"𝚞",
        v:"𝚟", w:"𝚠", x:"𝚡", y:"𝚢", z:"𝚣"
    },

    sansBold: {
        a:"𝗮", b:"𝗯", c:"𝗰", d:"𝗱", e:"𝗲", f:"𝗳", g:"𝗴",
        h:"𝗵", i:"𝗶", j:"𝗷", k:"𝗸", l:"𝗹", m:"𝗺", n:"𝗻",
        o:"𝗼", p:"𝗽", q:"𝗾", r:"𝗿", s:"𝘀", t:"𝘁", u:"𝘂",
        v:"𝘃", w:"𝘄", x:"𝘅", y:"𝘆", z:"𝘇"
    },

    sansItalic: {
        a:"𝘢", b:"𝘣", c:"𝘤", d:"𝘥", e:"𝘦", f:"𝘧", g:"𝘨",
        h:"𝘩", i:"𝘪", j:"𝘫", k:"𝘬", l:"𝘭", m:"𝘮", n:"𝘯",
        o:"𝘰", p:"𝘱", q:"𝘲", r:"𝘳", s:"𝘴", t:"𝘵", u:"𝘶",
        v:"𝘷", w:"𝘸", x:"𝘹", y:"𝘺", z:"𝘻"
    },

    sansBoldItalic: {
        a:"𝙖", b:"𝙗", c:"𝙘", d:"𝙙", e:"𝙚", f:"𝙛", g:"𝙜",
        h:"𝙝", i:"𝙞", j:"𝙟", k:"𝙠", l:"𝙡", m:"𝙢", n:"𝙣",
        o:"𝙤", p:"𝙥", q:"𝙦", r:"𝙧", s:"𝙨", t:"𝙩", u:"𝙪",
        v:"𝙫", w:"𝙬", x:"𝙭", y:"𝙮", z:"𝙯"
    },

    smallCaps: {
        a:"ᴀ", b:"ʙ", c:"ᴄ", d:"ᴅ", e:"ᴇ", f:"ꜰ", g:"ɢ",
        h:"ʜ", i:"ɪ", j:"ᴊ", k:"ᴋ", l:"ʟ", m:"ᴍ", n:"ɴ",
        o:"ᴏ", p:"ᴘ", q:"ǫ", r:"ʀ", s:"s", t:"ᴛ", u:"ᴜ",
        v:"ᴠ", w:"ᴡ", x:"x", y:"ʏ", z:"ᴢ"
    }
};


// ==========================================
// CONVERT
// ==========================================

function convert(text, map) {

    return Array.from(text).map(char => {

        const key = char.toLowerCase();

        return map[key] || char;

    }).join("");
}


// ==========================================
// EFFECTS
// ==========================================

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

function overline(text) {
    return Array.from(text)
        .map(c => c + "\u0305")
        .join("");
}

function spaced(text) {
    return Array.from(text).join(" ");
}

function dotted(text) {
    return Array.from(text).join("•");
}


// ==========================================
// SPECIAL UNICODE
// ==========================================

function circle(text) {

    const map = {
        a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",
        h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",
        o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",
        v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
    };

    return convert(text, map);
}


function square(text) {

    const map = {
        a:"🅰",b:"🅱",c:"🅲",d:"🅳",e:"🅴",f:"🅵",g:"🅶",
        h:"🅷",i:"🅸",j:"🅹",k:"🅺",l:"🅻",m:"🅼",n:"🅽",
        o:"🅾",p:"🅿",q:"🆀",r:"🆁",s:"🆂",t:"🆃",u:"🆄",
        v:"🆅",w:"🆆",x:"🆇",y:"🆈",z:"🆉"
    };

    return convert(text, map);
}


// ==========================================
// 50 STYLES
// ==========================================

function createStyles(text) {

    const b = t => convert(t, fonts.bold);
    const i = t => convert(t, fonts.italic);
    const bi = t => convert(t, fonts.boldItalic);
    const s = t => convert(t, fonts.script);
    const bs = t => convert(t, fonts.boldScript);
    const g = t => convert(t, fonts.gothic);
    const bg = t => convert(t, fonts.boldGothic);
    const d = t => convert(t, fonts.double);
    const m = t => convert(t, fonts.mono);
    const sb = t => convert(t, fonts.sansBold);
    const si = t => convert(t, fonts.sansItalic);
    const sbi = t => convert(t, fonts.sansBoldItalic);
    const sc = t => convert(t, fonts.smallCaps);

    return [

        `♡ ${s(text)} ♡`,
        `♥ ${b(text)} ♥`,
        `★ ${g(text)} ★`,
        `✦ ${bs(text)} ✦`,
        `❀ ${i(text)} ❀`,
        `☾ ${d(text)} ☽`,
        `♛ ${bg(text)} ♛`,
        `⚡ ${bi(text)} ⚡`,
        `✧ ${m(text)} ✧`,
        `❖ ${sb(text)} ❖`,

        `❥ ${si(text)} ❥`,
        `✿ ${sbi(text)} ✿`,
        `☀ ${sc(text)} ☀`,
        `꧁༺ ${b(text)} ༻꧂`,
        `『✦ ${i(text)} ✦』`,
        `『♡ ${s(text)} ♡』`,
        `【★ ${g(text)} ★】`,
        `《✧ ${d(text)} ✧》`,
        `〈❀ ${bs(text)} ❀〉`,
        `〘⚡ ${bi(text)} ⚡〙`,

        `⟦❖ ${m(text)} ❖⟧`,
        `⫷♛ ${bg(text)} ♛⫸`,
        `𓆩♡ ${s(text)} ♡𓆪`,
        `୨୧ ${sb(text)} ୨୧`,
        `𖤐 ${g(text)} 𖤐`,
        `𖦹 ${si(text)} 𖦹`,
        `✺ ${sbi(text)} ✺`,
        `✵ ${d(text)} ✵`,
        `✪ ${bs(text)} ✪`,
        `✯ ${bi(text)} ✯`,

        `➳ ${s(text)} ➳`,
        `➵ ${b(text)} ➵`,
        `➸ ${i(text)} ➸`,
        `➤ ${g(text)} ➤`,
        `→ ${d(text)} ←`,
        `↠ ${bi(text)} ↞`,
        `❯ ${bs(text)} ❮`,
        `› ${m(text)} ‹`,
        `» ${bg(text)} «`,
        `⋆｡°✩ ${s(text)} ✩°｡⋆`,

        `╭─ ${b(text)} ─╮`,
        `╰─ ${i(text)} ─╯`,
        `╔═ ${g(text)} ═╗`,
        `╚═ ${d(text)} ═╝`,
        `♡ ${circle(text)} ♡`,
        `★ ${square(text)} ★`,
        `♥ ${underline(b(text))} ♥`,
        `✦ ${strike(s(text))} ✦`,
        `❀ ${doubleUnderline(i(text))} ❀`,
        `⚜ ${overline(sb(text))} ⚜`

    ];
}


// ==========================================
// GENERATE
// ==========================================

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

    const styles = createStyles(text);

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


// ==========================================
// EVENTS
// ==========================================

generateBtn.addEventListener("click", generateStyles);

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        generateStyles();
    }

});
