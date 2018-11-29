# KeikyuWidget
京急の運行情報をデスクトップに表示するアプリです。

## インストール

```
npm install
```

でインストールして、


```
npm start
```

で実行するか、


```
npm run build-macOS
```

でビルドして使ってください。


## 実際に動かすとこんな感じ


京急が遅延すると、デスクトップの上部にこっそりと情報を表示してくれます。


![ポキオ 京急 運行情報 ウィジェット](https://lh3.googleusercontent.com/5r7Fkb-CWmOF7MtnT0QisxECn3_415XFNldXLOmNyj20t2hZvftBexs1XVKaz2qVE0-PZjOx0syga01acdgVcqMiZ_DAs_fEQZC5K5eGid1HAQCXUU5ZWlbQ1mXCiDV1drkjjoprQcU=s600 "ポキオ 京急 運行情報 ウィジェット")



 - 画像はダミーの文言です。
 - 定期的に京急のHPをパースしています。
 - 遅延していないときは表示されません。



## 仕組み


本体はelectronアプリですが、背景色を透過にしたり、メニューバーなりが表示されないようにしています。


```javascript
  var size = electron.screen.getPrimaryDisplay().size;

  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true
  });
```

また、クリックイベントなどはそのまま下の階層に筒抜けになるようになっているので、他のアプリへの操作の邪魔をしません。


```javascript
  mainWindow.setIgnoreMouseEvents(true);
```


よい、京急ライフを！
