const fs = require("fs");
const MO = require('mongodb').MongoClient
const mongourl ='mongodb://localhost:324972'
const dbName = '_CYBERWAY_'
async function X() {
        const client = await MO.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = await client.db(dbName);
        const col = await db.collection('username');
        const USERS = await col.find().toArray()
        const userbase = {}
        for(let USER of USERS){
            console.log(USER.owner,USER.name)
            userbase[USER.owner] = USER.name
           
        }
        fs.writeFile('./golosians.json',JSON.stringify(userbase), 'utf8', (err)=> { 
            if(err)console.log(err)
        });
}

X()
