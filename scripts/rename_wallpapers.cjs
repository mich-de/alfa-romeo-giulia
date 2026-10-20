const fs = require('fs');
const path = require('path');

const dir = 'd:/alfa-giulia/public/wallpapers';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'));

const mappings = [];
let idxBirthday = 1;
let idxGift = 1;
let idxSpecs = 1;
let idxHeritage = 1;

files.forEach(file => {
    let newName = '';
    let caption = '';
    const ext = path.extname(file);

    if (file.startsWith('giualia_cerchi_neri')) {
        newName = `giulia_birthday_message_${idxBirthday}${ext}`;
        caption = `Auguri Speciali - Dalla Tua Giulia (#${idxBirthday})`;
        idxBirthday++;
    } else if (file.startsWith('giulia_2222')) {
        newName = `giulia_showroom_gift_${idxGift}${ext}`;
        caption = `Un Regalo Inaspettato in Showroom (#${idxGift})`;
        idxGift++;
    } else if (file.startsWith('wallapers_giulia_')) {
        newName = `giulia_specs_scenic_${idxSpecs}${ext}`;
        caption = `Scheda Tecnica e Panorami Mozzafiato (#${idxSpecs})`;
        idxSpecs++;
    } else if (file.startsWith('wallpaper___')) {
        newName = `giulia_heritage_and_scenic_${idxHeritage}${ext}`;
        caption = `Alfa Romeo Giulia - Heritage & Design (#${idxHeritage})`;
        idxHeritage++;
    } else {
        return; // skip index.html or others
    }

    fs.renameSync(path.join(dir, file), path.join(dir, newName));
    
    mappings.push({
        id: newName.replace(ext, ''),
        src: `/alfa-romeo-giulia/wallpapers/${newName}`, // Use repo subpath since this is for gh-pages or /wallpapers
        alt: caption,
        caption: caption
    });
});

const jsContent = `export const WALLPAPERS = ${JSON.stringify(mappings, null, 4)};\n`;
fs.writeFileSync('d:/alfa-giulia/src/data/wallpapers.js', jsContent);

console.log('Renamed files and generated wallpapers.js!');
