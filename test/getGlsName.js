const Long = require('long');
function bytesToHex(bytes) {
    let leHex = '';
    for (const b of bytes) {
        const n = Number(b).toString(16);
        leHex += (n.length === 1 ? '0' : '') + n;
    }
    return leHex;
}
const charmap = '.12345abcdefghijklmnopqrstuvwxyz';
const charidx = ch => {
    const idx = charmap.indexOf(ch);
    if (idx === -1)
        throw new TypeError(`Invalid character: '${ch}'`);
    return idx;
};
function nameToValue(name) {
    if (typeof name !== 'string')
        throw new TypeError('name parameter is a required string');
    if (name.length > 12)
        throw new TypeError('A name can be up to 12 characters long');
    let bitstr = '';
    for (let i = 0; i <= 12; i++) {
        // process all 64 bits (even if name is short)
        const c = i < name.length ? charidx(name[i]) : 0;
        const bitlen = i < 12 ? 5 : 4;
        let bits = Number(c).toString(2);
        if (bits.length > bitlen) {
            throw new TypeError('Invalid name ' + name);
        }
        bits = '0'.repeat(bitlen - bits.length) + bits;
        bitstr += bits;
    }
    return Long.fromString(bitstr, true, 2);
}

function getTableBoundsForName(name, asHex = true) {
    const nameValue = nameToValue(name);
    const nameValueP1 = nameValue.add(1);
    if (!asHex) {
        return {
            lower_bound: nameValue.toString(),
            upper_bound: nameValueP1.toString()
        };
    }
    const lowerBound = bytesToHex(nameValue.toBytesLE());
    const upperBound = bytesToHex(nameValueP1.toBytesLE());
    return {
        lower_bound: lowerBound,
        upper_bound: upperBound,
    };
}

function getTableBoundsForName(name) {
  const nameValue = nameToValue(name);
  const nameValueP1 = nameValue.add(1);
  return {
      lower_bound: nameValue.toString(),
      upper_bound: nameValueP1.toString()
  };
}

const bounds = getTableBoundsForName(ACCOUNT);

console.log('bounds ',bounds)


async function getGlsName(Q) {
  const result = await rpc.get_table_rows(Q);
  return result.rows;
}

getGlsName(Object.assign({ code: `cyber`, table: `username`, scope: `cyber`, key_type: `i64`, index:`owner` }, bounds)).then((X)=>{

  console.log('>>>   ',X)

})
