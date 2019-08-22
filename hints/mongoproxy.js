const cybername = "rtvmqvz3i1vt"
const assert = require('assert')
const url = 'mongodb://*****.mongo.golos.cf:000000'
const dbName = '_CYBERWAY_'

const MO = require('mongodb').MongoClient
MO.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then((client)=>{
  const db = client.db(dbName);
  const col = db.collection('username');
  col.find({owner:cybername,scope:'gls'}).toArray((err, gls)=>{
    assert.equal(err, null)
    console.log(gls[0].name)
    client.close();
  })
})
