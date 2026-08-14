const fs = require('fs');
const path = require('path');

const replacements = {
  '#071326': '#1B1931',
  '#080d1a': '#1B1931',
  '#050c1a': '#1B1931',
  '#0b1c36': '#44174E',
  '#132440': '#44174E',
  '#13284c': '#44174E',
  '#142c54': '#44174E',
  '#1b3563': '#662249',
  '#1c3969': '#662249',
  '#1c3560': '#662249',
  '#2b4c80': '#662249',
  '#274c87': '#662249',
  '#D4AF37': '#ED9E59',
  '#86bc25': '#ED9E59',
  '#8c6b12': '#A34054',
  '#92400e': '#A34054',
  '#b0cbef': '#E9BCB9',
  '#93c5fd': '#E9BCB9',
  '#b0cae8': '#E9BCB9',
  '#ef4444': '#ED9E59',
  '#ec4899': '#A34054',
  '#a855f7': '#662249'
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const [oldVal, newVal] of Object.entries(replacements)) {
        const regex = new RegExp(oldVal, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newVal);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir('./app');
processDir('./components');
