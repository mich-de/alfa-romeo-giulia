const fs = require('fs');
const path = require('path');

const dir = 'd:/alfa-giulia/public/wallpapers';

const renameMap = {
    'metti_i_cerchi_202604231139 (1).jpeg': 'giulia_ai_concept_milan_night.jpeg',
    'rifalla_con_i_202604231153 (1).jpeg': 'giulia_ai_concept_tunnel_motion.jpeg',
    'rifalla_con_i_202604231153.jpeg': 'giulia_ai_concept_exploded_view.jpeg',
    'rimaendo_fedele_fai_202604231155 (1).jpeg': 'giulia_ai_concept_coastal_moonlight.jpeg',
    'rimaendo_fedele_fai_202604231155.jpeg': 'giulia_ai_concept_sunset_reflection.jpeg',
    'rimanendo_i_cerchi_202604231155.jpeg': 'giulia_ai_concept_city_lights.jpeg',
    'rimanendo_i_cerchi_202604231156.jpeg': 'giulia_ai_concept_technical_detail.jpeg',
    'rimani_fedele_ma_202604231151.jpeg': 'giulia_ai_concept_cyberpunk_vibes.jpeg',
    'rimani_fedele_ma_202604231152 (1).jpeg': 'giulia_ai_concept_scenic_overlook.jpeg',
    'rimani_fedele_ma_202604231152 (2).jpeg': 'giulia_ai_concept_amalfi_night.jpeg',
    'rimani_fedele_ma_202604231152.jpeg': 'giulia_ai_concept_modern_architecture.jpeg'
};

Object.entries(renameMap).forEach(([oldName, newName]) => {
    const oldPath = path.join(dir, oldName);
    const newPath = path.join(dir, newName);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldName} -> ${newName}`);
    } else {
        console.warn(`File not found: ${oldName}`);
    }
});
