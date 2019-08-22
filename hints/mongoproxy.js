const MO = require('mongodb').MongoClient
const url = 'mongodb://********.io:*****'
const dbName = '_CYBERWAY_'
async function nameCW2GLS(cybername) {
        const client = await MO.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = await client.db(dbName);
        const col = await db.collection('username');
        const USER = await col.find({owner:cybername,scope:'gls'}).toArray()
        if(USER[0]&&USER[0].name) return USER[0].name;
        return ' ERROR GETTING YOUR NAME FROM GOLOS';
        
         }
module.exports.nameCW2GLS = nameCW2GLS
