/**
* Transposes data from one sheet and puts it in another.
* The script doesn't account for sheets that do not exist nor for incompatible data sets.
*
* @param {string} sourceSheet - source sheet name
* @param {string} targetSheet - target sheet name
* @param {number} headers: 0 - transpose just data; 1 - just headers; 2 - both
*
* by Chris Tales
*/
function transpose(sourceSheet,targetSheet,headers){
  // transpose fn per https://stackoverflow.com/a/29914929/11034137
  var transposeArr = function(a) {return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });}
  
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sSheet = ss.getSheetByName(sourceSheet);
  let sSheetData = sSheet.getDataRange().getValues();
  let tSheet = ss.getSheetByName(targetSheet);
  let transposedData = []
  
  switch(headers) {
    case 0: 
      sSheetData.shift()
      transposedData = transposeArr(sSheetData);
      break;
    case 1:
      transposedData = transposeArr([sSheetData[0]]);
      break;
    case 2:
      transposedData = transposeArr(sSheetData);
  }
  
  return tSheet.getRange(tSheet.getLastRow(),1,transposedData.length,transposedData[0].length).setValues(transposedData);
}
