// client script //

//This sample shows how to add a line item to a transaction using a client script
//Be aware that in client scripting you must always 
//use nlapiCommitLineItem(type) to commit any line item changes to the sublist
//you first insert the line and then commit the line
// If you set the item field using nlapiSetCurrentLineItemValue(type, fldnam, value, firefieldchanged, synchronous), 
//you cannot call nlapiCommitLineItem until the server call for the item information has completed. 
//The only way to know that the server call is complete is to create a post-sourcing function that sets a flag

//insertShippingRate() to that button

function insertShippingRate() {

 nlapiSelectNewLineItem('item');

 /* important so that you know that the script was called from insertShippingRate() */ 

 nlapiSetCurrentLineItemValue('item', 'custcolinsertshippingrate', true);
 nlapiSetCurrentLineItemText('item', 'item', 'Shipping');
}

function doPostSourcing(type, fldname) {
 if ( type == 'item' && fldname == 'item' && nlapiGetCurrentLineItemValue ('item', 'custcolinsertshippingrate') == true )
 {
 nlapiSetCurrentLineItemValue('item', 'custcolinsertshippingrate', false);
 nlapiSetCurrentLineItemValue('item', 'rate', '7.50'); 
 nlapiCommitLineItem('item');
 } 
}