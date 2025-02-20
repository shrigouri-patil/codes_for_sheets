/**
 * Function to sum the values of cells that have a specific background color.
 * @param {string} color - The hex code of the color to match (e.g., "#FF0000" for red).
 * @param {string} range - The range of cells to check (e.g., "A1:B10").
 * @returns {number} - The sum of values in the cells that match the given color.
 */



function sumByColor(color, range) {
  // Get the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the specified range of cells from the active sheet
  var range = sheet.getRange(range);
  
  // Retrieve the values of the cells in the range
  var values = range.getValues();
  
  // Retrieve the background colors of the cells in the range
  var backgrounds = range.getBackgrounds();
 
  // Initialize the sum to 0
  var total = 0;

  // Loop through each row in the range  
  for (var i = 0; i < values.length; i++) {
    // Loop through each column in the current row
    for (var j = 0; j < values[i].length; j++) {
      // Check if the background color of the cell matches the given color
      if (backgrounds[i][j] == color) {
        // Add the cell value to the total sum
        total += values[i][j];
      }
    }
  }
  // Return the total sum of the matching cells
  return total;
}
