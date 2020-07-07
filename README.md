# GAS-transpose

To be used with Google Spreadsheets with Google Apps Script

Transposes data from one sheet and puts it in another, allowing the user to choose whether they want to handle an entire sheet or choose between exclusive transposition of either headers or the data itself.
The script doesn't account for sheets that do not exist nor for incompatible data sets.

@param {string} sourceSheet - source sheet name\n
@param {string} targetSheet - target sheet name\n
@param {number} headers: 0 - transpose just data; 1 - just headers; 2 - both
