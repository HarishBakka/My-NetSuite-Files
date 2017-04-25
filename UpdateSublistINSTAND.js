//The following example shows how to update the Payment sublist of a Deposit record in standard mode

var rec = nlapiCreateRecord('deposit');
// Set the account.
rec.setFieldValue('account', 123);
// In Standard mode, setFieldValue does not source values in the Payment sublist

// Insert a placeholder line to enable record submission
rec.selectNewLineItem('other');
rec.setCurrentLineItemValue('other', 'account', 456);
rec.setCurrentLineItemValue('other', 'amount', 0);
rec.commitLineItem('other');
var id = nlapiSubmitRecord(rec);

// Load the record.
var fin = nlapiLoadRecord('deposit', id); // The Payment sublist is now populated
// Remove the placeholder line. 
fin.removeLineItem('other', 1);
// Apply values from the Payment sublist
fin.setLineItemValue('payment','deposit','1','T');
// Submit the finalized record
var id = nlapiSubmitRecord(fin);