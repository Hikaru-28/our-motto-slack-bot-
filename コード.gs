function ourMotto() {
  var webhook = "https://hooks.slack.com/services/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";
  
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1bjlA2E13yhD09VAPtaR8KJS7cKQq8jcN8hqO44RwAvY/edit#gid=0');
  var sheet = spreadsheet.getSheetByName('シート1');
  var maxRow = sheet.getDataRange().getLastRow();
  var numRow = Math.floor(2+Math.random()*(maxRow-1)); 
  
  var quotation =sheet.getRange(numRow, 1).getValue();
  var motto = sheet.getRange(numRow, 2).getValue();
  var person = sheet.getRange(numRow, 3).getValue();
  
  var jsonData =
      {
        "username" : person,
        "text": quotation + motto
      };
  var payload = JSON.stringify(jsonData);
  var options =
      {
        "method" : "post",
        "contentType" : "application/json",
        "payload" : payload
      };
  UrlFetchApp.fetch(webhook, options);
}