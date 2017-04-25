//Server script
//How to create a new Vendor Bill record and then add items to the Item sublist and expenses to the Expenses sublist
// Main Steps
/*1. nlapiLoadRecord(type, id, initializeValues)

  2.nlobjRecord.getLineItemCount(group) to get the number of lines in the sublist

  3.nlobjRecord.insertLineItem(group, linenum, ignoreRecalc)
    nlobjRecord.removeLineItem(group, linenum, ignoreRecalc)
  4. If adding a line:
    1. nlobjRecord.selectNewLineItem(group)
    2. nlobjRecord.setCurrentLineItemValue(group, name, value)
  5. nlobjRecord.commitLineItem(group, ignoreRecalc)
  6. nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields)
*/
var record = nlapiCreateRecord('vendorbill');
record.setFieldValue('entity', 196);
record.setFieldValue('department', 3);
record.selectNewLineItem('item'); // first item line itme sublist group
record.setCurrentLineItemValue('item','item',380);
record.setCurrentLineItemValue('item', 'location', 102);
record.setCurrentLineItemValue('item', 'amount', '2');
record.setCurrentLineItemValue('item', 'customer',294);
record.setCurrentLineItemValue('item','isbillable','T');
record.commitLineItem('item');

record.selectNewLineItem('expense'); // second billing line item sublist group
record.setCurrentLineItemValue('expense','category',3);
record.setCurrentLineItemValue('expense', 'account', 11);
record.setCurrentLineItemValue('expense', 'amount','10');
record.setCurrentLineItemValue('expense','customer',294);
record.setCurrentLineItemValue('expense','isbillable','T');
record.commitLineItem('expense');
var id = nlapiSubmitRecord(record, true);
