# V3.3 LINE 與訂單紀錄恢復

- LIFF ID 可由 Apps Script 指令碼屬性 BLACKHEART_LIFF_ID 自動讀取。
- 送單時附上 LINE access token，後端驗證後保存 LINE userId。
- LINE 登入後重新整理，會由雲端讀回最近 3 天訂單。
- 保留本機訂單作為離線備援。
- 快取版本更新至 3.3.0。
