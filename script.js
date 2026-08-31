const SUPABASE_URL = "https://fvsmxekoyvaxhxwgdupc.supabase.co";
const SUPABASE_KEY = "sb_publishable_JDvUEUvfWKErFP1SN8B5GA_ctfBZHR1";

const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

// =====================================================
// FONT MAPS
// =====================================================

const maps = {

    bold: {
        a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",
        j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",
        s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
    },

    italic: {
        a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",i:"𝑖",
        j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",q:"𝑞",r:"𝑟",
        s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",y:"𝑦",z:"𝑧"
    },

    boldItalic: {
        a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",
        j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",
        s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
    },

    double: {
        a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",
        j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",
        s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
    },

    mono: {
        a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",
        j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",
        s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣"
    },

    sansBold: {
        a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",
        j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",
        s:"𝘀",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇"
    },

    sansItalic: {
        a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",
        j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",
        s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"
    },

    sansBoldItalic: {
        a:"𝙖",b:"𝙗",c:"𝙘",d:"𝙙",e:"𝙚",f:"𝙛",g:"𝙜",h:"𝙝",i:"𝙞",
        j:"𝙟",k:"𝙠",l:"𝙡",m:"𝙢",n:"𝙣",o:"𝙤",p:"𝙥",q:"𝙦",r:"𝙧",
        s:"𝙨",t:"𝙩",u:"𝙪",v:"𝙫",w:"𝙬",x:"𝙭",y:"𝙮",z:"𝙯"
    },

    serifBold: {
        a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",
        j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",
        s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
    },

    fraktur: {
        a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",
        j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",
        s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷"
    },

    frakturBold: {
        a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",
        j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",
        s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
    },

    script: {
        a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"ℯ",f:"𝒻",g:"ℊ",h:"𝒽",i:"𝒾",
        j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"ℴ",p:"𝓅",q:"𝓆",r:"𝓇",
        s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"
    },

    scriptBold: {
        a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",
        j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",
        s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"
    },

    circled: {
        a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",
        j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",
        s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
    },

    squared: {
        a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",
        j:"🄹",k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",
        s:"🅂",t:"🅃",u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"
    },

    fullWidth: {
        a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",
        j:"ｊ",k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",
        s:"ｓ",t:"ｔ",u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ"
    },

    smallCaps: {
        a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",
        j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",
        s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
    }

};

function convert(text, map) {
    return [...text].map(c => map[c.toLowerCase()] || c).join("");
}

// =====================================================
// 50 STYLES
// =====================================================

const styles = [
    ["Bold", t => convert(t, maps.bold)],
    ["Italic", t => convert(t, maps.italic)],
    ["Bold Italic", t => convert(t, maps.boldItalic)],
    ["Double", t => convert(t, maps.double)],
    ["Monospace", t => convert(t, maps.mono)],
    ["Sans Bold", t => convert(t, maps.sansBold)],
    ["Sans Italic", t => convert(t, maps.sansItalic)],
    ["Sans Bold Italic", t => convert(t, maps.sansBoldItalic)],
    ["Fraktur", t => convert(t, maps.fraktur)],
    ["Fraktur Bold", t => convert(t, maps.frakturBold)],
    ["Script", t => convert(t, maps.script)],
    ["Script Bold", t => convert(t, maps.scriptBold)],
    ["Circled", t => convert(t, maps.circled)],
    ["Squared", t => convert(t, maps.squared)],
    ["Full Width", t => convert(t, maps.fullWidth)],
    ["Small Caps", t => convert(t, maps.smallCaps)],

    ["Spaced", t => t.split("").join(" ")],
    ["Wide", t => t.split("").join("  ")],
    ["Dotted", t => t.split("").join(" • ")],
    ["Vertical", t => t.split("").join(" │ ")],

    ["♡ Heart", t => "♡ " + t + " ♡"],
    ["♥ Love", t => "♥ " + t + " ♥"],
    ["❀ Flower", t => "❀ " + t + " ❀"],
    ["✿ Blossom", t => "✿ " + t + " ✿"],
    ["★ Star", t => "★ " + t + " ★"],
    ["✦ Spark", t => "✦ " + t + " ✦"],
    ["✧ Shine", t => "✧ " + t + " ✧"],
    ["♛ Crown", t => "♛ " + t + " ♛"],
    ["♕ Royal", t => "♕ " + t + " ♕"],
    ["☾ Moon", t => "☾ " + t + " ☽"],
    ["☁ Cloud", t => "☁ " + t + " ☁"],
    ["⚡ Lightning", t => "⚡ " + t + " ⚡"],
    ["☮ Peace", t => "☮ " + t + " ☮"],
    ["☯ Yin Yang", t => "☯ " + t + " ☯"],
    ["☀ Sun", t => "☀ " + t + " ☀"],
    ["∞ Infinity", t => "∞ " + t + " ∞"],
    ["➜ Arrow", t => "➜ " + t + " ➜"],
    ["୨♡୧ Cute", t => "୨♡୧ " + t + " ୨♡୧"],
    ["𓆩 Mystic", t => "𓆩 " + t + " 𓆪"],
    ["⋆ Aesthetic", t => "⋆｡°✩ " + t + " ✩°｡⋆"],
    ["꧁ Royal Frame", t => "꧁༺ " + t + " ༻꧂"],
    ["【 Square Frame", t => "【 " + t + " 】"],
    ["『 Elegant Frame", t => "『 " + t + " 』"],
    ["《 Classic Frame", t => "《 " + t + " 》"],
    ["◇ Diamond", t => "◇ " + t + " ◇"],
    ["◆ Black Diamond", t => "◆ " + t + " ◆"],
    ["Underline", t => [...t].map(c => c + "\u0332").join("")],
    ["Strike", t => [...t].map(c => c + "\u0336").join("")],
    ["Dot Under", t => [...t].map(c => c + "\u0323").join("")],
    ["Top Line", t => [...t].map(c => c + "\u0305").join("")]
];

// =====================================================
// GENERATE
// =====================================================

function generateStyles() {

    const text = textInput.value.trim();

    if (!text) {
        results.innerHTML = `
            <div class="empty-message">
                Please enter your name or text first.
            </div>
        `;
        return;
    }

    results.innerHTML = "";

    const used = new Set();

    styles.forEach((style, index) => {

        const styledText = style[1](text);

        if (used.has(styledText)) return;

        used.add(styledText);

        const card = document.createElement("div");
        card.className = "result-card";

        card.innerHTML = `
            <div>
                <small>${style[0]} • Style ${index + 1}</small>
                <div class="result-text"></div>
            </div>
            <button class="copy-btn">COPY</button>
        `;

        card.querySelector(".result-text").textContent = styledText;

        const copyButton = card.querySelector(".copy-btn");

        copyButton.addEventListener("click", async () => {

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

// =====================================================
// BUTTON + ENTER
// =====================================================

generateBtn.addEventListener("click", generateStyles);

textInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        generateStyles();
    }
});

// =====================================================
// RATING → SUPABASE
// =====================================================

const stars = document.querySelectorAll(".star");
const ratingMessage = document.getElementById("ratingMessage");

stars.forEach(star => {

    star.addEventListener("click", async () => {

        const rating = Number(star.dataset.rating);

        stars.forEach(item => {
            item.classList.toggle(
                "active",
                Number(item.dataset.rating) <= rating
            );
        });

        if (ratingMessage) {
            ratingMessage.textContent = "Saving your rating...";
        }

        try {

            const response = await fetch(
                `${SUPABASE_URL}/rest/v1/ratings`,
                {
                    method: "POST",

                    headers: {
                        "apikey": SUPABASE_KEY,
                        "Authorization": `Bearer ${SUPABASE_KEY}`,
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    },

                    body: JSON.stringify({
                        rating: rating
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Rating could not be saved");
            }

            if (ratingMessage) {
                ratingMessage.textContent =
                    `Thanks for rating Fontify ⭐ ${rating}/5`;
            }

        } catch (error) {

            console.error("Rating error:", error);

            if (ratingMessage) {
                ratingMessage.textContent =
                    "Couldn't save rating. Please try again.";
            }
        }
    });
});
