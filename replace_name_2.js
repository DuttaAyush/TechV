const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.js') || file.endsWith('.md') || file.endsWith('.css') || file.endsWith('.json')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync('./');
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/VRTANS/g, 'VRTANS');
  content = content.replace(/VRTANS/g, 'VRTANS');
  content = content.replace(/VRTANS/g, 'VRTANS');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Successfully updated ${changedFiles} files.`);
