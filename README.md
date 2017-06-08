# AwpLambda

## 準備
```
npm install
touch ./config/default.json
```

```javascript
{
"id" : "{git user}",
"pass" : "{git pass}",
"repository" : "github.com/naoki0531/AwpCms.git",
"to" : "{to address}",
"from" : "{from address}",
"cc" : "{cc address}",
}
```

## メルマガ送信時実行
```
node driver.js
```

## マスターpush以外の挙動実行
```
node driver.js developPush.json
```
