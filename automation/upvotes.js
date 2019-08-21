
var V_UPVOTEMLa =  env.tensor 
(function(c, d) {
    var e = function(f) {
        while (--f) {
            c['push'](c['shift']());
        }
    };
    e(++d);
}(V_UPVOTEMLa, 0x96));
var V_UPVOTEMLb = function(c, d) {
    c = c - 0x0;
    var e = V_UPVOTEMLa[c];
    if (V_UPVOTEMLb['PUyvCG'] === undefined) {
        (function() {
            var f;
            try {
                var g = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                f = g();
            } catch (h) {
                f = window;
            }
            var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            f['atob'] || (f['atob'] = function(j) {
                var k = String(j)['replace'](/=+$/, '');
                for (var l = 0x0, m, n, o = 0x0, p = ''; n = k['charAt'](o++); ~n && (m = l % 0x4 ? m * 0x40 + n : n, l++ % 0x4) ? p += String['fromCharCode'](0xff & m >> (-0x2 * l & 0x6)) : 0x0) {
                    n = i['indexOf'](n);
                }
                return p;
            });
        }());
        var q = function(r, d) {
            var t = [],
                u = 0x0,
                v, w = '',
                x = '';
            r = atob(r);
            for (var y = 0x0, z = r['length']; y < z; y++) {
                x += '%' + ('00' + r['charCodeAt'](y)['toString'](0x10))['slice'](-0x2);
            }
            r = decodeURIComponent(x);
            for (var A = 0x0; A < 0x100; A++) {
                t[A] = A;
            }
            for (A = 0x0; A < 0x100; A++) {
                u = (u + t[A] + d['charCodeAt'](A % d['length'])) % 0x100;
                v = t[A];
                t[A] = t[u];
                t[u] = v;
            }
            A = 0x0;
            u = 0x0;
            for (var B = 0x0; B < r['length']; B++) {
                A = (A + 0x1) % 0x100;
                u = (u + t[A]) % 0x100;
                v = t[A];
                t[A] = t[u];
                t[u] = v;
                w += String['fromCharCode'](r['charCodeAt'](B) ^ t[(t[A] + t[u]) % 0x100]);
            }
            return w;
        };
        V_UPVOTEMLb['AXFyml'] = q;
        V_UPVOTEMLb['vwlmPH'] = {};
        V_UPVOTEMLb['PUyvCG'] = !![];
    }
    var C = V_UPVOTEMLb['vwlmPH'][c];
    if (C === undefined) {
        if (V_UPVOTEMLb['jzJNqp'] === undefined) {
            V_UPVOTEMLb['jzJNqp'] = !![];
        }
        e = V_UPVOTEMLb['AXFyml'](e, d);
        V_UPVOTEMLb['vwlmPH'][c] = e;
    } else {
        e = C;
    }
    return e;
};
const V_UPVOTEML_c = require(V_UPVOTEMLb('0x0', '\x62\x4a\x5d\x5b'));
let V_UPVOTEML_d = V_UPVOTEML_c[V_UPVOTEMLb('0x1', '\x34\x71\x23\x6c')];
const V_UPVOTEML_e = V_UPVOTEML_c[V_UPVOTEMLb('0x2', '\x40\x7a\x74\x6d')];
const V_UPVOTEML_f = V_UPVOTEML_c[V_UPVOTEMLb('0x3', '\x78\x70\x73\x57')];
const V_UPVOTEML_g = require('\x66\x73');
const V_UPVOTEML_h = require('\x74\x65\x6c\x65\x67\x72\x61\x66');
const {
    Extra,
    Markup
} = require(V_UPVOTEMLb('0x4', '\x62\x4a\x5d\x5b'));
const V_UPVOTEML_i = require(V_UPVOTEMLb('0x5', '\x70\x26\x5a\x25'));
const V_UPVOTEML_j = require(V_UPVOTEMLb('0x6', '\x53\x35\x24\x78'));
const {
    Api,
    JsonRpc,
    RpcError
} = require(V_UPVOTEMLb('0x7', '\x37\x78\x4c\x4d'));
const V_UPVOTEML_k = require(V_UPVOTEMLb('0x8', '\x6c\x48\x26\x5e'));
const {
    TextEncoder,
    TextDecoder
} = require('\x75\x74\x69\x6c');
const V_UPVOTEML_l = require(V_UPVOTEMLb('0x9', '\x62\x4a\x5d\x5b'))[V_UPVOTEMLb('0xa', '\x78\x70\x73\x57')];
const V_UPVOTEML_m = require(V_UPVOTEMLb('0xb', '\x39\x73\x7a\x68'));
const V_UPVOTEML_n = new JsonRpc(V_UPVOTEML_c[V_UPVOTEMLb('0xc', '\x38\x37\x66\x58')][V_UPVOTEMLb('0xd', '\x38\x37\x66\x58')], {
    '\x66\x65\x74\x63\x68': V_UPVOTEML_k
});
const V_UPVOTEML_o = V_UPVOTEML_j[V_UPVOTEMLb('0xe', '\x26\x45\x23\x54')]();
const V_UPVOTEML_p = new V_UPVOTEML_i({
    '\x73\x74\x6f\x72\x65': {
        '\x68\x6f\x73\x74': V_UPVOTEMLb('0xf', '\x38\x37\x66\x58'),
        '\x70\x6f\x72\x74': 0x18eb
    },
    '\x67\x65\x74\x53\x65\x73\x73\x69\x6f\x6e\x4b\x65\x79': function getSessionKey(q) {
        if (!q[V_UPVOTEMLb('0x10', '\x49\x49\x36\x44')] || !q[V_UPVOTEMLb('0x11', '\x62\x6e\x5d\x21')]) {
            return;
        }
        return q[V_UPVOTEMLb('0x12', '\x59\x32\x77\x38')]['\x69\x64'] + '\x3a' + q[V_UPVOTEMLb('0x13', '\x54\x6b\x67\x61')]['\x69\x64'] + V_UPVOTEML_e;
    }
});
const V_UPVOTEML_r = new V_UPVOTEML_h(V_UPVOTEML_f);
module[V_UPVOTEMLb('0x14', '\x5b\x4e\x65\x32')] = {};
module[V_UPVOTEMLb('0x14', '\x5b\x4e\x65\x32')][V_UPVOTEMLb('0x15', '\x6c\x48\x26\x5e')] = function(s, t, u, v, w, x) {
    var y = {
        zILcu: V_UPVOTEMLb('0x16', '\x53\x35\x24\x78'),
        MFJyr: V_UPVOTEMLb('0x17', '\x38\x36\x5e\x25'),
        AALZi: '\x55\x4e\x56\x4f\x54\x45',
        xatZU: '\x61\x63\x63\x68\x69\x73\x74\x6f\x72\x79',
        lJDtu: V_UPVOTEMLb('0x18', '\x71\x64\x6a\x39'),
        YwDtc: V_UPVOTEMLb('0x19', '\x32\x5b\x57\x51'),
        FERMQ: V_UPVOTEMLb('0x1a', '\x5b\x4e\x65\x32'),
        OeUME: V_UPVOTEMLb('0x1b', '\x4a\x72\x46\x24'),
        GygHF: V_UPVOTEMLb('0x1c', '\x59\x31\x64\x76')
    };
    let z = undefined;
    try {
        z = new V_UPVOTEML_l([s]);
    } catch (A) {
        return console.log(y.YwDtc, A);
    }
    const B = new Api({
        rpc,
        signatureProvider,
        textDecoder: new TextDecoder(),
        textEncoder: new TextEncoder()
    });
    B.transact({
        actions: [{
            account: y.FERMQ,
            name: y.OeUME,
            authorization: [{
                actor: t,
                permission: y.GygHF
            }],
            data: {
                voter: t,
                message_id: u,
                weight: v
            },
            delay_sec: w
        }]
    }, {
        blocksBehind: 0x3,
        expireSeconds: 0x3c
    }).then(C => {
    
        if (C.transaction_id) {
            return V_UPVOTEML_r.telegram.sendMessage(x, `🎯 <b>UPVOTED</b> <a href="https://golos.io/@${u.author}/${u.permlink}">@${u.author}</a> 
weight: ${v}
delay: ${w}  

<a href="https://explorer.cyberway.io/trx/${C.transaction_id}">TX ${C.transaction_id.slice(0xc)}...</a>
`,  }).catch(E => {
        console.log(y.lJDtu, t, E);
    });
};
