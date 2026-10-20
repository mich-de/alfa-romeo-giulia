const fs = require('fs');
const path = require('path');

const dir = 'd:/alfa-giulia/public/wallpapers';
const files = fs.readdirSync(dir).filter(f => 
    (f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg')) && f !== 'index.html'
);

const mappings = [];

files.forEach(file => {
    let caption = '';
    let category = 'Special';
    const ext = path.extname(file);
    const id = file.replace(ext, '');

    if (id.startsWith('giulia_birthday_message_')) {
        caption = "Alfa Romeo Giulia - Augurio Iconico";
        category = "Special";
    } else if (id.startsWith('giulia_showroom_gift_')) {
        caption = "Alfa Romeo Giulia - In Showroom";
        category = "Showroom";
    } else if (id.startsWith('giulia_specs_scenic_')) {
        caption = "Alfa Romeo Giulia - Performance";
        category = "Scenic";
    } else if (id.startsWith('giulia_heritage_and_scenic_')) {
        caption = "Alfa Romeo Giulia - Heritage";
        category = "Heritage";
    } else if (id.startsWith('giulia_ai_concept_')) {
        // More descriptive captions for the AI ones
        const sub = id.replace('giulia_ai_concept_', '').replace(/_/g, ' ');
        caption = "Giulia Concept - " + sub.charAt(0).toUpperCase() + sub.slice(1);
        category = "AI Concepts";
    } else {
        caption = "Alfa Romeo Giulia - Edizione Esclusiva";
        category = "Various";
    }

    mappings.push({
        id: id,
        src: `wallpapers/${file}`,
        alt: caption,
        caption: caption,
        category: category
    });
});

// Sort
mappings.sort((a,b) => a.id.localeCompare(b.id, undefined, {numeric: true}));

const jsContent = `export const WALLPAPER_CATEGORIES = ["Tutti", "Heritage", "Scenic", "Showroom", "Special", "AI Concepts"];\n\nexport const WALLPAPERS = ${JSON.stringify(mappings, null, 4)};\n`;
fs.writeFileSync('d:/alfa-giulia/src/data/wallpapers.js', jsContent);
console.log(`Successfully mapped ${mappings.length} wallpapers with perfected names and captions!`);
