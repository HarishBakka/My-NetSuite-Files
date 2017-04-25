//Working with Sublists in Dynamic Mode and Client SuiteScript
//When you copy, create, load, or transform a record in dynamic mode
//you are also interacting with all of the record's elements in dynamic mode; this includes a record's sublists.

//When scripting against a sublist that is in dynamic mode
//the following APIs will NOT work when adding a line or changing the values of an existing line:
//nlapiSetLineItemValue(type, fldnam, linenum, value)
//used when scripting in a “current record” context, for example in user event scripts
//nlobjRecord.setLineItemValue(group, name, linenum, value)
//used when scripting the nlobjRecord object itself, as it exists on the server.

//===== To add a NEW LINES ======
// 1. nlapiSelectNewLineItem(type) - to specify the sublist you want to work with.
//2. nlapiSetCurrentLineItemValue(type, fldnam, value, firefieldchanged, synchronous) - to set values on the current line.
//3. nlapiCommitLineItem(type) - to commit the line to the database.

//This sample creates a new sales order in dynamic mode, and then adds two new items to the Items sublist

var record = nlapiCreateRecord('salesorder', {recordmode: 'dynamic'});
// add the first item
record.selectNewLineItem('item');
record.setCurrentLineItemValue('item', 'item', 556);
record.setCurrentLineItemValue('item', 'quantity', 2);
record.commitLineItem('item');
// add the second item
record.selectNewLineItem('item');
record.setCurrentLineItemValue('item', 'item', 380);
record.setCurrentLineItemValue('item', 'quantity', '2');
record.setCurrentLineItemValue('item', 'amount', '0.1');
record.commitLineItem('item');