const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");


// =====================================================
// 50 DIFFERENT-LOOKING TEXT STYLES
// =====================================================

const styles = [

    // 1
    {
        name: "Bold",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",
                i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",
                q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",
                y:"𝐲",z:"𝐳"
            })[c.toLowerCase()] || c
        )
    },

    // 2
    {
        name: "Italic",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",
                i:"𝑖",j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",
                q:"𝑞",r:"𝑟",s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",
                y:"𝑦",z:"𝑧"
            })[c.toLowerCase()] || c
        )
    },

    // 3
    {
        name: "Bold Italic",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",
                i:"𝒊",j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",
                q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",
                y:"𝒚",z:"𝒛"
            })[c.toLowerCase()] || c
        )
    },

    // 4
    {
        name: "Double",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",
                i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",
                q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",
                y:"𝕪",z:"𝕫"
            })[c.toLowerCase()] || c
        )
    },

    // 5
    {
        name: "Monospace",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",
                i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",
                q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",
                y:"𝚢",z:"𝚣"
            })[c.toLowerCase()] || c
        )
    },

    // 6
    {
        name: "Small Caps",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",
                i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",
                q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",
                y:"ʏ",z:"ᴢ"
            })[c.toLowerCase()] || c
        )
    },

    // 7
    {
        name: "Full Width",
        convert: text => text.replace(/[a-z]/gi, c =>
            String.fromCharCode(c.toLowerCase().charCodeAt(0) + 0xFEE0)
        )
    },

    // 8
    {
        name: "Bubble",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",
                i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",
                q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",
                y:"ⓨ",z:"ⓩ"
            })[c.toLowerCase()] || c
        )
    },

    // 9
    {
        name: "Squared",
        convert: text => text.replace(/[a-z]/gi, c =>
            ({
                a:"🅰",b:"🅱",c:"🅲",d:"🅳",e:"🅴",f:"🅵",g:"🅶",h:"🅷",
                i:"🅸",j:"🅹",k:"🅺",l:"🅻",m:"🅼",n:"🅽",o:"🅾",p:"🅿",
                q:"🆀",r:"🆁",s:"🆂",t:"🆃",u:"🆄",v:"🆅",w:"🆆",x:"🆇",
                y:"🆈",z:"🆉"
            })[c.toLowerCase()] || c
        )
    },

    // 10
    {
        name: "Wide",
        convert: text => text.split("").join(" ")
    },

    // 11
    {
        name: "Spaced",
        convert: text => text.split("").join("  ")
    },

    // 12
    {
        name: "Dot",
        convert: text => text.split("").join(" • ")
    },

    // 13
    {
        name: "Star",
        convert: text => text.split("").join(" ★ ")
    },

    // 14
    {
        name: "Heart",
        convert: text => text.split("").join(" ♡ ")
    },

    // 15
    {
        name: "Arrow",
        convert: text => "➜ " + text.split("").join(" ") + " ➜"
    },

    // 16
    {
        name: "Brackets",
        convert: text => text.split("").map(c => `【${c}】`).join("")
    },

    // 17
    {
        name: "Angle",
        convert: text => text.split("").map(c => `〈${c}〉`).join("")
    },

    // 18
    {
        name: "Diamond",
        convert: text => text.split("").map(c => `◇${c}◇`).join("")
    },

    // 19
    {
        name: "Stars",
        convert: text => "★彡 " + text + " 彡★"
    },

    // 20
    {
        name: "Flower",
        convert: text => "❀ " + text + " ❀"
    },

    // 21
    {
        name: "Crown",
        convert: text => "♛ " + text + " ♛"
    },

    // 22
    {
        name: "Moon",
        convert: text => "☾ " + text + " ☽"
    },

    // 23
    {
        name: "Sparkle",
        convert: text => "✧･ﾟ: " + text + " :･ﾟ✧"
    },

    // 24
    {
        name: "Royal",
        convert: text => "꧁༺ " + text + " ༻꧂"
    },

    // 25
    {
        name: "Cute",
        convert: text => "୨♡୧ " + text + " ୨♡୧"
    },

    // 26
    {
        name: "Cloud",
        convert: text => "☁︎ " + text + " ☁︎"
    },

    // 27
    {
        name: "Lightning",
        convert: text => "⚡ " + text + " ⚡"
    },

    // 28
    {
        name: "Music",
        convert: text => "♫ " + text + " ♫"
    },

    // 29
    {
        name: "Peace",
        convert: text => "☮ " + text + " ☮"
    },

    // 30
    {
        name: "Infinity",
        convert: text => "∞ " + text + " ∞"
    },

    // 31
    {
        name: "Underline",
        convert: text => text.split("").join("\u0332")
    },

    // 32
    {
        name: "Strike",
        convert: text => text.split("").join("\u0336")
    },

    // 33
    {
        name: "Dot Under",
        convert: text => text.split("").join("\u0323")
    },

    // 34
    {
        name: "Double Under",
        convert: text => text.split("").join("\u0333")
    },

    // 35
    {
        name: "Wave",
        convert: text => text.split("").join("\u0330")
    },

    // 36
    {
        name: "Top Line",
        convert: text => text.split("").join("\u0305")
    },

    // 37
    {
        name: "Tiny",
        convert: text => text.toLowerCase()
            .replace(/a/g,"ᵃ").replace(/b/g,"ᵇ")
            .replace(/c/g,"ᶜ").replace(/d/g,"ᵈ")
            .replace(/e/g,"ᵉ").replace(/f/g,"ᶠ")
            .replace(/g/g,"ᵍ").replace(/h/g,"ʰ")
            .replace(/i/g,"ⁱ").replace(/j/g,"ʲ")
            .replace(/k/g,"ᵏ").replace(/l/g,"ˡ")
            .replace(/m/g,"ᵐ").replace(/n/g,"ⁿ")
            .replace(/o/g,"ᵒ").replace(/p/g,"ᵖ")
            .replace(/r/g,"ʳ").replace(/s/g,"ˢ")
            .replace(/t/g,"ᵗ").replace(/u/g,"ᵘ")
            .replace(/v/g,"ᵛ").replace(/w/g,"ʷ")
            .replace(/x/g,"ˣ").replace(/y/g,"ʸ")
            .replace(/z/g,"ᶻ")
    },

    // 38
    {
        name: "Lower Dots",
        convert: text => text.split("").map(c => c + "̇").join("")
    },

    // 39
    {
        name: "Upper Dots",
        convert: text => text.split("").map(c => "̇" + c).join("")
    },

    // 40
    {
        name: "Mystic",
        convert: text => "𓆩 " + text + " 𓆪"
    },

    // 41
    {
        name: "Love",
        convert: text => "♥︎ " + text + " ♥︎"
    },

    // 42
    {
        name: "Elegant",
        convert: text => "『 " + text + " 』"
    },

    // 43
    {
        name: "Luxury",
        convert: text => "╔═══ " + text + " ═══╗"
    },

    // 44
    {
        name: "Soft",
        convert: text => "♡̷̷̷ " + text + " ♡̷̷̷"
    },

    // 45
    {
        name: "Aesthetic",
        convert: text => "⋆｡°✩ " + text + " ✩°｡⋆"
    },

    // 46
    {
        name: "Classic",
        convert: text => "《 " + text + " 》"
    },

    // 47
    {
        name: "Magic",
        convert: text => "✩｡:* " + text + " *:｡✩"
    },

    // 48
    {
        name: "Royal Crown",
        convert: text => "♕ " + text + " ♕"
    },

    // 49
    {
        name: "Elegant Heart",
        convert: text => "𓆩♡𓆪 " + text + " 𓆩♡𓆪"
    },

    // 50
    {
        name: "Final",
        convert: text => "༺═──────── " + text + " ────────═༻"
    }

];


// =====================================================
// GENERATE STYLES
// =====================================================

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

    const used = new Set();
    const finalResults = [];

    for (const style of styles) {

        const styledText = style.convert(text);

        if (!used.has(styledText)) {

            used.add(styledText);

            finalResults.push({
                name: style.name,
                text: styledText
            });

        }

    }


    // =================================================
    // CREATE CARDS
    // =================================================

    finalResults.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.innerHTML = `
            <div>
                <small>${item.name} • Style ${index + 1}</small>
                <div class="result-text"></div>
            </div>

            <button class="copy-btn">
                COPY
            </button>
        `;

        card.querySelector(".result-text").textContent = item.text;

        const copyButton = card.querySelector(".copy-btn");

        copyButton.addEventListener("click", async function () {

            try {

                await navigator.clipboard.writeText(item.text);

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

        results.appendChild(card);

    });

}


// =====================================================
// GENERATE BUTTON
// =====================================================

generateBtn.addEventListener("click", generateStyles);


// =====================================================
// ENTER KEY
// =====================================================

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        generateStyles();

    }

});


// =====================================================
// RATING SYSTEM
// =====================================================

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
