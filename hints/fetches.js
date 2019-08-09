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
