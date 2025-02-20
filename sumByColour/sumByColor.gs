function sumByColor(color, range) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = sheet.getRange(range);
  var values = range.getValues();
  var backgrounds = range.getBackgrounds();
  var total = 0;

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (backgrounds[i][j] == color) {
        total += values[i][j];
      }
    }
  }
  return total;
}
