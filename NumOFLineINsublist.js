//Server script

//Get the new record
var rec = nlapiGetNewRecord();

//Determine the number of lines on the Item sublist 
var intCount = rec.getLineItemCount('item');

//Insert a line after the line that already exists 
rec.insertLineItem('item', intCount + 1);

//Set the value of the line item 
rec.setCurrentLineItemValue('item', 'quantity', intCount + 1, 10);

// Commit the sublist line changes 
rec.commitLineItem('item');

// Submit the record to commit all change to the database 
var id = nlapiSubmitRecord(rec, true);