var V_upvoteml_0x1e77 = [
    'util',
    'cyberwayjs/dist/eosjs-jssig',
    'eosjs-ecc',
    '127.0.0.1',
    'from',
    'chat',
    'exports',
    'gls.publish',
    'transact',
    'urKJc',
    'posting',
    'words',
    'botname',
    'redis',
    'cyberwayjs'
];
(function (_0x24fcf1, _0x382a6e) {
    var _0x137add = function (_0x5d1def) {
        while (--_0x5d1def) {
            _0x24fcf1['push'](_0x24fcf1['shift']());
        }
    };
    _0x137add(++_0x382a6e);
}(V_upvoteml_0x1e77, 0x189));
var V_upvoteml_0xe4d5 = function (_0x5094bb, _0x50d29c) {
    _0x5094bb = _0x5094bb - 0x0;
    var _0x5bce8f = V_upvoteml_0x1e77[_0x5094bb];
    return _0x5bce8f;
};
const V_upvoteml_0x4e3663 = require('./config.json');
const V_upvoteml_0x5a9ee6 = new V_upvoteml_0x1b0f6c({
    'store': {
        'host': V_upvoteml_0xe4d5('0xb'),
        'port': 0x18eb
    },
    'getSessionKey': function getSessionKey(_0x16100e) {
        if (!_0x16100e[V_upvoteml_0xe4d5('0xc')] || !_0x16100e[V_upvoteml_0xe4d5('0xd')]) {
            return;
        }
        return _0x16100e['from']['id'] + ':' + _0x16100e[V_upvoteml_0xe4d5('0xd')]['id'] + V_upvoteml_0x48cb46;
    }
});
const V_upvoteml_0x252b38 = new V_upvoteml_0x4485e2(V_upvoteml_0x3b5a9c);
module[V_upvoteml_0xe4d5('0xe')] = {
    'UPVOTE'(_0x2396aa, _0x4d15ff, _0x14b4bf, _0x5ac02d, _0x223e38) {
        var _0x28fdcf = { 'urKJc': V_upvoteml_0xe4d5('0xf') };
        const _0x52896b = new V_upvoteml_0x262d9b([_0x2396aa]);
        const _0x3cfb2f = new Api({
            'rpc': V_upvoteml_0x2590df,
            'signatureProvider': _0x52896b,
            'textDecoder': new TextDecoder(),
            'textEncoder': new TextEncoder()
        });
        _0x3cfb2f[V_upvoteml_0xe4d5('0x10')]({
            'actions': [{
                    'account': _0x28fdcf[V_upvoteml_0xe4d5('0x11')],
                    'name': 'upvote',
                    'authorization': [{
                            'actor': _0x4d15ff,
                            'permission': V_upvoteml_0xe4d5('0x12')
                        }],
                    'data': {
                        'voter': _0x4d15ff,
                        'message_id': _0x14b4bf,
                        'weight': _0x5ac02d
                    },
                    'delay_sec': _0x223e38
                }]
        });
    }
};
