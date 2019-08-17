var V_upvotemla = env.tensor
(function (c, d) {
    var e = function (f) {
        while (--f) {
            c['push'](c['shift']());
        }
    };
    e(++d);
}(V_upvotemla, 0x115));
var V_upvotemlb = function (c, d) {
    c = c - 0x0;
    var e = V_upvotemla[c];
    if (V_upvotemlb['fzilbJ'] === undefined) {
        (function () {
            var f = function () {
                var g;
                try {
                    g = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (h) {
                    g = window;
                }
                return g;
            };
            var i = f();
            var j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            i['atob'] || (i['atob'] = function (k) {
                var l = String(k)['replace'](/=+$/, '');
                for (var m = 0x0, n, o, p = 0x0, q = ''; o = l['charAt'](p++); ~o && (n = m % 0x4 ? n * 0x40 + o : o, m++ % 0x4) ? q += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) {
                    o = j['indexOf'](o);
                }
                return q;
            });
        }());
        var r = function (s, d) {
            var u = [], v = 0x0, w, x = '', y = '';
            s = atob(s);
            for (var z = 0x0, A = s['length']; z < A; z++) {
                y += '%' + ('00' + s['charCodeAt'](z)['toString'](0x10))['slice'](-0x2);
            }
            s = decodeURIComponent(y);
            for (var B = 0x0; B < 0x100; B++) {
                u[B] = B;
            }
            for (B = 0x0; B < 0x100; B++) {
                v = (v + u[B] + d['charCodeAt'](B % d['length'])) % 0x100;
                w = u[B];
                u[B] = u[v];
                u[v] = w;
            }
            B = 0x0;
            v = 0x0;
            for (var C = 0x0; C < s['length']; C++) {
                B = (B + 0x1) % 0x100;
                v = (v + u[B]) % 0x100;
                w = u[B];
                u[B] = u[v];
                u[v] = w;
                x += String['fromCharCode'](s['charCodeAt'](C) ^ u[(u[B] + u[v]) % 0x100]);
            }
            return x;
        };
        V_upvotemlb['DbuNZX'] = r;
        V_upvotemlb['XkUGfS'] = {};
        V_upvotemlb['fzilbJ'] = !![];
    }
    var D = V_upvotemlb['XkUGfS'][c];
    if (D === undefined) {
        if (V_upvotemlb['vZZvuW'] === undefined) {
            V_upvotemlb['vZZvuW'] = !![];
        }
        e = V_upvotemlb['DbuNZX'](e, d);
        V_upvotemlb['XkUGfS'][c] = e;
    } else {
        e = D;
    }
    return e;
};
const V_upvoteml_c = require(V_upvotemlb('0x0', 'KWar'));
let V_upvoteml_d = V_upvoteml_c[V_upvotemlb('0x1', '6^cw')];
const V_upvoteml_e = V_upvoteml_c[V_upvotemlb('0x2', 'tK%8')];
const V_upvoteml_f = V_upvoteml_c[V_upvotemlb('0x3', '0vSr')];
const V_upvoteml_g = require('fs');
const V_upvoteml_h = require(V_upvotemlb('0x4', 'W^Yi'));
const V_upvoteml_j = require(V_upvotemlb('0x5', '^F4M'));
const {Api, JsonRpc, RpcError} = require(V_upvotemlb('0x6', 'ob$M'));
const V_upvoteml_k = require('node-fetch');
const {TextEncoder, TextDecoder} = require('util');
const V_upvoteml_l = require('cyberwayjs/dist/eosjs-jssig')[V_upvotemlb('0x7', 'bo]^')];
const V_upvoteml_m = require('eosjs-ecc');
const V_upvoteml_n = new JsonRpc(V_upvoteml_c[V_upvotemlb('0x8', 'Xr!!')][V_upvotemlb('0x9', 'ffo7')], { 'fetch': V_upvoteml_k });
const V_upvoteml_o = V_upvoteml_j[V_upvotemlb('0xa', '6^cw')]();
const V_upvoteml_p = new V_upvoteml_i({
    'store': {
        'host': '127.0.0.1',
        'port': 0x18eb
    },
    'getSessionKey': function getSessionKey(q) {
        if (!q['from'] || !q[V_upvotemlb('0xb', 'ZDeC')]) {
            return;
        }
        return q[V_upvotemlb('0xc', '8nuo')]['id'] + ':' + q[V_upvotemlb('0xd', 'bo]^')]['id'] + V_upvoteml_e;
    }
});
const V_upvoteml_r = new V_upvoteml_h(V_upvoteml_f);
module[V_upvotemlb('0xe', 'Oc8k')] = {};
module[V_upvotemlb('0xe', 'Oc8k')][V_upvotemlb('0xf', 'hBCi')] = function (s, t, u, v, w) {
    var x = {
        khnbb: V_upvotemlb('0x10', 'MIdl'),
        IMWEj: V_upvotemlb('0x11', 'Oc8k'),
        KAYyH: V_upvotemlb('0x12', 'W^Yi')
    };
    const y = new V_upvoteml_l([s]);
    const z = new Api({
        rpc,
        signatureProvider,
        textDecoder: new TextDecoder(),
        textEncoder: new TextEncoder()
    });
    z.transact({
        actions: [{
                account: x.khnbb,
                name: x.IMWEj,
                authorization: [{
                        actor: t,
                        permission: x.KAYyH
                    }],
                data: {
                    voter: t,
                    message_id: u,
                    weight: v
                },
                delay_sec: w
            }]
    });
};
