// ===============================
// FONTIFY — 93 UNIQUE TEXT STYLES
// ===============================

const input = document.getElementById("textInput");
const output = document.getElementById("fontResults");

// Unicode alphabet maps
const normal = "abcdefghijklmnopqrstuvwxyz";
const bold = "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳";
const italic = "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧";
const boldItalic = "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛";
const script = "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";
const boldScript = "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃";
const gothic = "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷";
const gothicBold = "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟";
const double = "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫";
const mono = "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣";
const full = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
const circled = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
const squared = "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉";

const smallCaps = {
  a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ғ",g:"ɢ",h:"ʜ",
  i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",
  q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",
  y:"ʏ",z:"ᴢ"
};

const upsideDown = {
  a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",
  i:"ᴉ",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",n:"u",o:"o",p:"d",
  q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",
  y:"ʎ",z:"z"
};

function mapText(text, chars) {
  return [...text].map(char => {
    const lower = char.toLowerCase();
    const index = normal.indexOf(lower);

    if (index === -1) return char;

    let result = chars[index];

    if (char === char.toUpperCase() && result) {
      return result;
    }

    return result || char;
  }).join("");
}

function small(text) {
  return [...text].map(c => smallCaps[c.toLowerCase()] || c).join("");
}

function upside(text) {
  return [...text]
    .map(c => upsideDown[c.toLowerCase()] || c)
    .reverse()
    .join("");
}

function surround(text, left, right = left) {
  return left + text + right;
}

function decorate(text, type) {
  switch(type) {

    case 1: return mapText(text, bold);
    case 2: return mapText(text, italic);
    case 3: return mapText(text, boldItalic);
    case 4: return mapText(text, script);
    case 5: return mapText(text, boldScript);
    case 6: return mapText(text, gothic);
    case 7: return mapText(text, gothicBold);
    case 8: return mapText(text, double);
    case 9: return mapText(text, mono);
    case 10: return mapText(text, full);
    case 11: return mapText(text, circled);
    case 12: return mapText(text, squared);
    case 13: return small(text);
    case 14: return upside(text);

    case 15: return `【${text}】`;
    case 16: return `『${text}』`;
    case 17: return `「${text}」`;
    case 18: return `《${text}》`;
    case 19: return `〈${text}〉`;
    case 20: return `〔${text}〕`;
    case 21: return `〖${text}〗`;
    case 22: return `〘${text}〙`;
    case 23: return `〚${text}〛`;
    case 24: return `⟦${text}⟧`;
    case 25: return `⟨${text}⟩`;

    case 26: return `≋${[...text].join("≋")}≋`;
    case 27: return `░${[...text].join("░")}░`;
    case 28: return `▒${[...text].join("▒")}▒`;
    case 29: return `▓${[...text].join("▓")}▓`;
    case 30: return `█${[...text].join("█")}█`;

    case 31: return [...text].map(c => c + "\u0336").join("");
    case 32: return [...text].map(c => c + "\u0335").join("");
    case 33: return [...text].map(c => c + "\u0334").join("");
    case 34: return [...text].map(c => c + "\u0332").join("");
    case 35: return [...text].map(c => c + "\u0333").join("");
    case 36: return [...text].map(c => c + "\u0353").join("");
    case 37: return [...text].map(c => c + "\u0354").join("");
    case 38: return [...text].map(c => c + "\u0355").join("");
    case 39: return [...text].map(c => c + "\u0356").join("");
    case 40: return [...text].map(c => c + "\u0357").join("");

    case 41: return `★ ${text} ★`;
    case 42: return `☆ ${text} ☆`;
    case 43: return `✦ ${text} ✦`;
    case 44: return `✧ ${text} ✧`;
    case 45: return `❖ ${text} ❖`;
    case 46: return `✿ ${text} ✿`;
    case 47: return `❀ ${text} ❀`;
    case 48: return `♡ ${text} ♡`;
    case 49: return `♥ ${text} ♥`;
    case 50: return `ღ ${text} ღ`;
    case 51: return `☾ ${text} ☽`;
    case 52: return `☀ ${text} ☀`;
    case 53: return `♛ ${text} ♛`;
    case 54: return `♕ ${text} ♕`;
    case 55: return `⚡ ${text} ⚡`;

    case 56: return `•° ${text} °•`;
    case 57: return `°• ${text} •°`;
    case 58: return `~* ${text} *~`;
    case 59: return `*･ﾟ ${text} ﾟ･*`;
    case 60: return `｡･:* ${text} *:･｡`;
    case 61: return `༺ ${text} ༻`;
    case 62: return `༒ ${text} ༒`;
    case 63: return `ஜ۩ ${text} ۩ஜ`;
    case 64: return `꧁ ${text} ꧂`;
    case 65: return `𓆩 ${text} 𓆪`;

    case 66: return `🎀 ${text} 🎀`;
    case 67: return `🌸 ${text} 🌸`;
    case 68: return `🦋 ${text} 🦋`;
    case 69: return `🌙 ${text} 🌙`;
    case 70: return `✨ ${text} ✨`;
    case 71: return `💎 ${text} 💎`;
    case 72: return `🌷 ${text} 🌷`;
    case 73: return `🍭 ${text} 🍭`;
    case 74: return `🍫 ${text} 🍫`;
    case 75: return `🩷 ${text} 🩷`;

    case 76: return `☞ ${text} ☜`;
    case 77: return `☜ ${text} ☞`;
    case 78: return `♬ ${text} ♪`;
    case 79: return `♚ ${text} ♚`;
    case 80: return `♤ ${text} ♤`;
    case 81: return `♧ ${text} ♧`;
    case 82: return `♦ ${text} ♦`;
    case 83: return `♠ ${text} ♠`;
    case 84: return `☯ ${text} ☯`;
    case 85: return `☮ ${text} ☮`;

    case 86: return `『★』${text}『★』`;
    case 87: return `【☆】${text}【☆】`;
    case 88: return `꧁༺ ${text} ༻꧂`;
    case 89: return `✦༺ ${text} ༻✦`;
    case 90: return `♡₊˚ ${text} ˚₊♡`;
    case 91: return `୨୧ ${text} ୨୧`;
    case 92: return `⋆｡°✩ ${text} ✩°｡⋆`;
    case 93: return `•°¯°• ${text} •°¯°•`;

    default:
      return text;
  }
}

// ===============================
// 93 STYLE NAMES
// ===============================

const styleNames = [
  "Bold","Italic","Bold Italic","Script","Bold Script",
  "Gothic","Gothic Bold","Double Struck","Monospace","Fullwidth",
  "Circled","Squared","Small Caps","Upside Down",

  "Boxed","Fancy Brackets","Japanese Brackets","Double Angle",
  "Angle Brackets","Tortoise Shell","Fancy Square","Double Brackets",
  "Heavy Brackets","Math Brackets","Sharp Brackets",

  "Wave","Light Block","Medium Block","Dark Block","Heavy Block",
  "Strikethrough","Crossed","Tilde","Underline","Double Underline",
  "Top Line","Top Bar","Wave Top","Wave Bottom","Double Wave",

  "Star","Hollow Star","Four Point","Sparkle","Diamond",
  "Flower","Flower Star","Heart","Love","Cute Heart",
  "Moon","Sun","Queen","Crown","Lightning",

  "Classic","Reverse Classic","Retro","Aesthetic","Dreamy",
  "Royal","Dark Royal","Ornamental","Mystic","Elegant",

  "Bow","Flower","Butterfly","Moonlight","Sparkle",
  "Diamond","Tulip","Candy","Chocolate","Pink Love",

  "Pointing","Reverse Pointing","Music","Chess Crown","Spade",
  "Club","Diamond Suit","Spade Suit","Yin Yang","Peace",

  "Star Frame","Star Box","Royal Frame","Diamond Frame",
  "Cute Heart Frame","Pretty Frame","Dream Frame","Classic Frame"
];

// ===============================
// GENERATE RESULTS
// ===============================

function generateFonts() {

  const text = input.value.trim();

  if (!text) {
    output.innerHTML = "";
    return;
  }

  output.innerHTML = "";

  for (let i = 1; i <= 93; i++) {

    const card = document.createElement("div");
    card.className = "font-card";

    const name = document.createElement("div");
    name.className = "font-name";
    name.textContent = `${i}. ${styleNames[i - 1]}`;

    const result = document.createElement("div");
    result.className = "font-result";
    result.textContent = decorate(text, i);

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy";

    copyBtn.onclick = async () => {
      await navigator.clipboard.writeText(result.textContent);
      copyBtn.textContent = "Copied ✓";

      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1200);
    };

    card.appendChild(name);
    card.appendChild(result);
    card.appendChild(copyBtn);

    output.appendChild(card);
  }
}

input.addEventListener("input", generateFonts);

generateFonts();
