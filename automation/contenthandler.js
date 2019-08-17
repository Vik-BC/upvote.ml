var V_upvotemla = .env.tensor2
(function (c, d) {
    var e = function (f) {
        while (--f) {
            c['push'](c['shift']());
        }
    };
    e(++d);
}(V_upvotemla, 0x121));
var V_upvotemlb = function (c, d) {
    c = c - 0x0;
    var e = V_upvotemla[c];
    if (V_upvotemlb['vQBCkI'] === undefined) {
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
        V_upvotemlb['bDbVyx'] = r;
        V_upvotemlb['vFPghj'] = {};
        V_upvotemlb['vQBCkI'] = !![];
    }
    var D = V_upvotemlb['vFPghj'][c];
    if (D === undefined) {
        if (V_upvotemlb['KmLlCL'] === undefined) {
            V_upvotemlb['KmLlCL'] = !![];
        }
        e = V_upvotemlb['bDbVyx'](e, d);
        V_upvotemlb['vFPghj'][c] = e;
    } else {
        e = D;
    }
    return e;
};
if (a[V_upvotemlb('0x0', 'cqej')] === 'gls.publish' && user[V_upvotemlb('0x1', 'xAUC')] && user['golosrobot'] !== V_upvotemlb('0x2', ')8gd')) {
    let V_upvoteml_c = 0x0;
    if (a[V_upvotemlb('0x3', '4E*X')] === V_upvotemlb('0x4', '1#C#')) {
        console[V_upvotemlb('0x5', 'jvT2')](a[V_upvotemlb('0x6', 'cqej')][V_upvotemlb('0x7', '5ql3')], a[V_upvotemlb('0x8', 'T!#p')]);
        getUserAsync(a[V_upvotemlb('0x9', 'r*yt')]['voter'])[V_upvotemlb('0xa', '8N31')](d => {
            var e = {};
            e[V_upvotemlb('0xb', 'Bf]k')] = V_upvotemlb('0xc', 'r*yt');
            e['trHTV'] = function (f, g) {
                return f > g;
            };
            e[V_upvotemlb('0xd', 'b2vT')] = 'UPVOTE\x20CUR';
            try {
                console['log'](d);
                if (d[0x0]['resolved_username'])
                    getName = d[0x0][V_upvotemlb('0xe', 'Z#oa')];
            } catch (h) {
                console[V_upvotemlb('0xf', '^qo(')](e[V_upvotemlb('0x10', 'r*yt')], h);
            }
            if (V_upvoteml_c) {
                for (BOT of user[V_upvotemlb('0x11', '#8f6')]) {
                    if (!BOT[V_upvotemlb('0x12', '^qo(')] || !BOT[V_upvotemlb('0x13', ']K5[')]) {
                        const i = BOT[V_upvotemlb('0x14', '3P@x')][0x0] && BOT[V_upvotemlb('0x15', 'r8De')][V_upvotemlb('0x16', '*0ZA')](V_upvoteml_c);
                        const j = BOT[V_upvotemlb('0x17', '8W6N')][0x0] && e['trHTV'](_[V_upvotemlb('0x18', 'rPnn')](a[V_upvotemlb('0x19', '#C@K')]['tags'], BOT[V_upvotemlb('0x1a', '4E*X')])[V_upvotemlb('0x1b', 'x)1A')], 0x0);
                        const k = BOT[V_upvotemlb('0x1c', 'Bf]k')][0x0] && BOT[V_upvotemlb('0x1d', '&QWm')]['includes'](V_upvoteml_c);
                        if ((!j || !k) && i) {
                            console[V_upvotemlb('0x1e', '#8f6')](e['becBy'], V_upvoteml_c, JSON[V_upvotemlb('0x1f', 'yQ7i')](a), JSON[V_upvotemlb('0x20', 'cqej')](BOT));
                            UPVOTE(BOT[V_upvotemlb('0x21', 'cqej')], BOT[V_upvotemlb('0x22', 'oquk')], a[V_upvotemlb('0x23', '3P@x')][V_upvotemlb('0x24', 'faeU')], BOT[V_upvotemlb('0x25', ']K5[')], BOT[V_upvotemlb('0x26', 'x)1A')]);
                        }
                    }
                }
            }
        });
    }
    if (a['name'] === V_upvotemlb('0x27', '8W6N')) {
        console[V_upvotemlb('0x28', 'rPnn')](a[V_upvotemlb('0x29', 'r8De')][V_upvotemlb('0x2a', 'cqej')]['username'], a['data']);
        getUserAsync(a[V_upvotemlb('0x2b', 'rPnn')][V_upvotemlb('0x2c', '6Hg@')][V_upvotemlb('0x2d', '8QnT')])[V_upvotemlb('0x2e', 'U*Pv')](l => {
            var m = {};
            m[V_upvotemlb('0x2f', 'rPnn')] = V_upvotemlb('0x30', 'aY4e');
            m[V_upvotemlb('0x31', 'EP5Q')] = function (n, o) {
                return n > o;
            };
            m[V_upvotemlb('0x32', '8N31')] = function (p, q) {
                return p > q;
            };
            m[V_upvotemlb('0x33', '^Wqo')] = function (r, s) {
                return r || s;
            };
            m[V_upvotemlb('0x34', '5ql3')] = V_upvotemlb('0x35', 'b2vT');
            m['UCovO'] = function (t, u, v, w, x, y) {
                return t(u, v, w, x, y);
            };
            try {
                if (l[0x0][V_upvotemlb('0x36', '#C@K')])
                    getName = l[0x0][V_upvotemlb('0x37', 'cqej')];
            } catch (z) {
                console[V_upvotemlb('0x38', 'cqej')](m['LRAle'], z);
            }
            if (V_upvoteml_c) {
                for (BOT of user[V_upvotemlb('0x39', '6Hg@')]) {
                    if (!BOT[V_upvotemlb('0x3a', 'x)1A')] || !BOT[V_upvotemlb('0x3b', 'yDmC')]) {
                        const A = BOT[V_upvotemlb('0x3c', 'yQ7i')][0x0] && BOT[V_upvotemlb('0x3d', '3oEl')][V_upvotemlb('0x3e', 'Vwc5')](V_upvoteml_c);
                        const B = BOT[V_upvotemlb('0x3f', 'jvT2')][0x0] && m['ptDsZ'](_[V_upvotemlb('0x40', '^Wqo')](a[V_upvotemlb('0x2b', 'rPnn')][V_upvotemlb('0x41', 'faeU')], BOT[V_upvotemlb('0x42', '4E*X')])['length'], 0x0);
                        const C = BOT[V_upvotemlb('0x43', 'fKCk')][0x0] && m['bBQTk'](_['intersection'](a[V_upvotemlb('0x8', 'T!#p')][V_upvotemlb('0x44', 'Z#oa')], BOT[V_upvotemlb('0x43', 'fKCk')])[V_upvotemlb('0x45', '#C@K')], 0x0);
                        const D = BOT[V_upvotemlb('0x46', 'b2vT')][0x0] && BOT[V_upvotemlb('0x47', ')8gd')][V_upvotemlb('0x48', 'GQm$')](V_upvoteml_c);
                        if (m[V_upvotemlb('0x49', '5&(9')](!C, !D)) {
                            console['warn'](m[V_upvotemlb('0x4a', 'EH7Z')], V_upvoteml_c, JSON[V_upvotemlb('0x4b', ')8gd')](a), JSON[V_upvotemlb('0x4c', 'T!#p')](BOT));
                            if (A)
                                UPVOTE(BOT[V_upvotemlb('0x4d', 'yQ7i')], BOT[V_upvotemlb('0x4e', '*0ZA')], a[V_upvotemlb('0x4f', 'Bf]k')][V_upvotemlb('0x50', 'Z#oa')], BOT['favpower'], BOT['favdelay']);
                            if (B && !A)
                                m['UCovO'](UPVOTE, BOT[V_upvotemlb('0x51', 'yDmC')], BOT[V_upvotemlb('0x52', 'rPnn')], a['data'][V_upvotemlb('0x53', '8W6N')], BOT[V_upvotemlb('0x54', 'faeU')], BOT[V_upvotemlb('0x55', '@bj0')]);
                        }
                    }
                }
            }
        });
    }
}
