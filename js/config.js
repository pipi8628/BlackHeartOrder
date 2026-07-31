window.BLACK_HEART_CONFIG={
  LIFF_ID:"",
  PRODUCTS_URL:"./products.json",
  STORE:{isOpen:true,statusText:"今日營業中",waitText:"約 10–12 分鐘",notice:"送出訂單後，需等店家確認才算成立。"},
  ORDER_STATUS:{balls:true,drinks:true,meals:false},

  // POS 狀態 API：填入 Apps Script / 其他後端的公開 GET 網址。
  // 留空時會使用下方測試開關；填入後網頁每 10 秒自動同步。
  POS_STATUS_URL:"https://script.google.com/macros/s/AKfycbx__WlzQPk_MDfwvV1HMiDnhVnx9-cVfkyitrT74pSKgoGQALE7xj-5v5NVFp3aQznN/exec?api=order_status",
  POS_STATUS_POLL_MS:10000,
  ENABLE_TEST_SWITCHES:false,

  HIDDEN_PRODUCT_KEYWORDS:["老闆招待","隱藏版"],
  BALL_PRODUCT_NAME:"黑心地瓜球"
};
