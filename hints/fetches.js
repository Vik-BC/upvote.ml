fetch("http://116.203.104.164:8888/v1/chain/resolve_names", {
  body: '["vik@golos"]',
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
}).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });



fetch("http://116.203.104.164:8888/v1/chain/get_abi", {
  body: '{ "account_name": "gls.publish" }',
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
}).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

fetch("http://116.203.104.164:8888/v1/chain/get_table_rows", {
  body: '{"scope":"gls.publish", "code":"gls.publish", "table":"message", "index":"primary"}',
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
}).then(function(R) {
    return R.json();
  })
  .then(function(X) {
    console.log(JSON.stringify(X));
  });
