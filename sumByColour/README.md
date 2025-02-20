
##  sumByColor Function  

The `sumByColor` function allows you to **sum the values of all cells with a specific background color** within a given range in Google Sheets.  

###  **How to Use**  
To use this function in a cell, enter:  

```excel
=sumByColor(color, range)
```

###  **Parameters**  
- **`color`**: The background color to filter by (must be in hex format, e.g., `"#FF0000"` for red).  
- **`range`**: The range of cells to check for the specified color (e.g., `"A1:B10"`).  

###  **Example Usage**  
If you want to sum all red-colored cells in the range **A1:B10**, use:  

```excel
=sumByColor("#FF0000", A1:B10)
```

This will return the total sum of values in **A1:B10** where the background color is red (`#FF0000`).  

