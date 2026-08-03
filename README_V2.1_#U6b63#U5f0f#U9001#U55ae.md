# BlackHeartOrder V2.0.2

## 修正內容

- 將線上點餐 `POS_STATUS_URL` 改為 POS 實際使用的 Apps Script Web App。
- 線上點餐與 POS 現在讀寫同一支 API。
- 靜態資源版本更新為 `2.0.2`，避免手機繼續讀取舊版 `config.js`。
- 保留 V2.0.1 的背景靜默重試機制。

## 目前 API

`https://script.google.com/macros/s/AKfycby10ESbwBKuVICp1X2lWBY1RVRnduf0DxEGMkof19zC-leFEx-_-mZE7IRt3ckbQRxV/exec?api=order_status`

## 注意

POS Apps Script 必須已覆蓋新版 `Code.gs` 並重新部署新版本，否則該網址不會回傳 `order_status`。
