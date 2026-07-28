# BlackHeartOrder V1 商品菜單版

已完成：品牌首頁、LINE LIFF 登入入口、POS JSON 商品讀取、地瓜球雙口味最高價規則、飲料尺寸/甜度/冰量/加料、購物車、圖片欄位預留。

## 上傳 GitHub Pages
將本資料夾全部檔案覆蓋到 `BlackHeartOrder` repo 根目錄。

## LINE Login
將 LIFF ID 填入 `js/config.js` 的 `LIFF_ID`。

## 商品更新
POS 匯出後，把 JSON 改名為 `products.json` 覆蓋即可。

## 本版規則
- 地瓜球最多 2 種口味。
- 價格取所選口味最高價，不累加。
- `老闆招待`、`隱藏版` 不顯示在線上點餐。
- 尚未串接正式送單 API。
