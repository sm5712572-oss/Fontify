const SUPABASE_URL = "https://fvsmxekoyvaxhxwgdupc.supabase.co";
const SUPABASE_KEY = "sb_publishable_JDvUEUvfWKErFP1SN8B5GA_ctfBZHR1";

const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");


// =====================================================
// FONT CONVERTERS
// =====================================================

const boldMap = {
    a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",
    i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",
    q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",
    y:"𝐲",z:"𝐳"
};

const italicMap = {
    a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",
    i:"𝑖",j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",
    q:"𝑞",r:"𝑟",s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",
    y:"𝑦",z:"𝑧"
};

const doubleMap = {
    a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",
    i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",
    q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",
    y:"𝕪",z:"𝕫"
};

const monoMap = {
    a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",
    i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",
    q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",
    y:"𝚢",z:"𝚣"
};

const smallMap = {
    a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",
    i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",
    q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",
    y:"ʏ",z:"ᴢ"
};

function convertMap(text, map) {
    return text.split("").map(char => {
        return map[char.toLowerCase()] || char;
    }).join("");
}


// =====================================================
// 50 DIFFERENT-LOOKING STYLES
// =====================================================

const styles = [

    ["Bold", t => convertMap(t, boldMap)],
    ["Italic", t => convertMap(t, italicMap)],
    ["Double", t => convertMap(t, doubleMap)],
    ["Monospace", t => convertMap(t, monoMap)],
    ["Small Caps", t => convertMap(t, smallMap)],

    ["Bubble", t => t.split("").map(c => "ⓘ".replace("ⓘ", "ⓐ")).join("")],
    ["Wide", t => t.split("").join(" ")],
    ["Spaced", t => t.split("").join("  ")],
    ["Dots", t => t.split("").join(" • ")],
    ["Stars", t => "★ " + t + " ★"],

    ["Heart", t => "♡ " + t + " ♡"],
    ["Love", t => "♥ " + t + " ♥"],
    ["Flower", t => "❀ " + t + " ❀"],
    ["Crown", t => "♛ " + t + " ♛"],
    ["Royal", t => "♕ " + t + " ♕"],

    ["Moon", t => "☾ " + t + " ☽"],
    ["Cloud", t => "☁ " + t + " ☁"],
    ["Lightning", t => "⚡ " + t + " ⚡"],
    ["Peace", t => "☮ " + t + " ☮"],
    ["Music", t => "♫ " + t + " ♫"],

    ["Sparkle", t => "✧･ﾟ: " + t + " :･ﾟ✧"],
    ["Cute", t => "୨♡୧ " + t + " ୨♡୧"],
    ["Mystic", t => "𓆩 " + t + " 𓆪"],
    ["Aesthetic", t => "⋆｡°✩ " + t + " ✩°｡⋆"],
    ["Magic", t => "✩｡:* " + t + " *:｡✩"],

    ["Royal Frame", t => "꧁༺ " + t + " ༻꧂"],
    ["Square", t => "【 " + t + " 】"],
    ["Angle", t => "〈 " + t + " 〉"],
    ["Classic", t => "《 " + t + " 》"],
    ["Elegant", t => "『 " + t + " 』"],

    ["Diamond", t => "◇ " + t + " ◇"],
    ["Black Diamond", t => "◆ " + t + " ◆"],
    ["Spark", t => "✦ " + t + " ✦"],
    ["Fancy Star", t => "✪ " + t + " ✪"],
    ["Flower Star", t => "✿ " + t + " ✿"],

    ["Arrow", t => "➜ " + t + " ➜"],
    ["Infinity", t => "∞ " + t + " ∞"],
    ["Peaceful", t => "☯ " + t + " ☯"],
    ["Sun", t => "☀ " + t + " ☀"],
    ["Butterfly", t => "ʚɞ " + t + " ʚɞ"],

    ["Underline", t => t.split("").map(c => c + "\u0332").join("")],
    ["Strike", t => t.split("").map(c => c + "\u0336").join("")],
    ["Dot Under", t => t.split("").map(c => c + "\u0323").join("")],
    ["Top Line", t => t.split("").map(c => c + "\u0305").join("")],
    ["Wave", t => t.split("").map(c => c + "\u0330").join("")],

    ["Soft", t => "♡̷̷̷ " + t + " ♡̷̷̷"],
    ["Luxury", t => "╔═══ " + t + " ═══╗"],
    ["Mystical Frame", t => "༺ " + t + " ༻"],
    ["Final", t => "༺═──────── " + t + " ────────═༻"]

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

            await navigator.clipboard.writeText(styledText);

            copyButton.textContent = "COPIED ✓";

            setTimeout(() => {
                copyButton.textContent = "COPY";
            }, 1500);

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
// RATING
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

        ratingMessage.textContent = "Saving your rating...";

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

            ratingMessage.textContent =
                `Thanks for rating Fontify ⭐ ${rating}/5`;

        } catch (error) {

            console.error(error);

            ratingMessage.textContent =
                "Couldn't save rating. Please try again.";

        }

    });

});
