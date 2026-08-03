/**
 * 黑心地瓜球 POS 接單狀態 API（範例）
 *
 * 指令碼屬性：
 * ORDER_STATUS_SECRET = 自訂密鑰
 * ORDER_STATUS_BALLS  = true
 * ORDER_STATUS_DRINKS = true
 * ORDER_STATUS_MEALS  = false
 * ORDER_STATUS_UPDATED_AT = ISO 日期時間
 *
 * 部署成「網頁應用程式」，執行身分選自己，存取權限依實際需求設定。
 */
function doGet() {
  const p = PropertiesService.getScriptProperties();
  return json_({
    ok: true,
    orderStatus: {
      balls: p.getProperty('ORDER_STATUS_BALLS') !== 'false',
      drinks: p.getProperty('ORDER_STATUS_DRINKS') !== 'false',
      meals: p.getProperty('ORDER_STATUS_MEALS') === 'true'
    },
    updatedAt: p.getProperty('ORDER_STATUS_UPDATED_AT') || new Date().toISOString()
  });
}

function doPost(e) {
  const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  const p = PropertiesService.getScriptProperties();
  if (!body.secret || body.secret !== p.getProperty('ORDER_STATUS_SECRET')) {
    return json_({ok:false, message:'unauthorized'});
  }
  const patch = body.orderStatus || body;
  if (typeof patch.balls === 'boolean') p.setProperty('ORDER_STATUS_BALLS', String(patch.balls));
  if (typeof patch.drinks === 'boolean') p.setProperty('ORDER_STATUS_DRINKS', String(patch.drinks));
  if (typeof patch.meals === 'boolean') p.setProperty('ORDER_STATUS_MEALS', String(patch.meals));
  p.setProperty('ORDER_STATUS_UPDATED_AT', new Date().toISOString());
  return doGet();
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
