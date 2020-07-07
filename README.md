# GAS-transpose
Transposes data from one sheet and puts it in another.
The script doesn't account for sheets that do not exist nor for incompatible data sets.

@param {string} sourceSheet - source sheet name
@param {string} targetSheet - target sheet name
@param {number} headers: 0 - transpose just data; 1 - just headers; 2 - both
