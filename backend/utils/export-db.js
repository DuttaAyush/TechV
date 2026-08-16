const fs = require('fs');
const path = require('path');
const { connectToDatabase } = require('../lib/db');

async function exportDatabase() {
  try {
    const { db } = await connectToDatabase();
    console.log('Exporting database collections...');

    const collections = ['leads', 'orders', 'users', 'services'];
    const exportDir = path.join(__dirname, '../../db_backup');
    
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir);
    }

    for (const col of collections) {
      const data = await db.collection(col).find({}).toArray();
      fs.writeFileSync(path.join(exportDir, `${col}.json`), JSON.stringify(data, null, 2));
      console.log(`✅ Exported ${data.length} records from '${col}' collection.`);
    }

    console.log('Database export complete! Files saved to /db_backup directory.');
    process.exit(0);
  } catch (error) {
    console.error('Error exporting database:', error);
    process.exit(1);
  }
}

exportDatabase();
