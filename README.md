# https://upvote.ml

***
Coming soon ...

See update @ https://t.me/viknews


# API

### AUTH:
**POST** `/v-api/user/login` your special **login=v-key** from golosrobot

**GET** `/v-api/user/info`

**POST** `/v-api/user/logout`


### Read/Write your bots (You must provide valid auth data & cookie for each request) 

**POST** `/v-api/postconfig` 

JSON config examlple

```
[{ 
"username": "uaccountname", 
"posting": "5Ju3gGF11111111111111111111111111LuG2Jhjr", 
"state": 0, 
"favs": [], "curs": [], "wtag": [], "btag": [], "kwrd": [], "ignr": [], "benf": [], "favdelay": 30, "curdelay": 0, "tagdelay": 0, "kwrddelay": 0, "kwrdpower": 90, "favpower": 80, "curpower": 50, "tagpower": 20 
}]
```

**GET** `/v-api/getconfig`



