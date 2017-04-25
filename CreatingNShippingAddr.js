//Creating a New Custom Shipping Address
//The following user event script searches for a specific
//address subrecord on an entity and then assigns that address to a sales order record

function createSalesOrder(){

	var customerId = 662;
	var itemId = 100;
	var addressInternalId = -1;

	// Load the customer record

 var readrecord = nlapiLoadRecord('customer', customerid);

 // Get the internal ID of the address subrecord you want to use

 for(var x = 1; x <= readrecord.getLineItemCount('addressbook'); x++) {
 	if (readrecord.getLineItemValue('addressbook', 'addressee', x) === 'NetSuite Inc.')
 	{
 		addressInternalId = readrecord.getLineItemValue('addressbook', 'internalid', x)
         break;
 	}

 	// Now create new sales order record

 	var record = nlapiCreateRecord('salesorder');

 // Set the customer (entity) field. 

 record.setFieldValue('entity', customerid);

 // For debugging purposes, set the memo field equal to the internal Id of the address

 record.setFieldValue('memo', addressInternalId);

 // Set the billaddresslist and shipaddresslist values to that of the desired address.

 record.setFieldValue('billaddresslist', addressInternalId);
 record.setFieldValue('shipaddresslist', addressInternalId);

 // Create a new item for the sales order

 record.selectNewLineItem('item');

 // Set the appropriate fields for the item
 
 record.setCurrentLineItemValue('item', 'item', itemid);
 record.setCurrentLineItemValue('item', 'quantity', 1); 
 record.setCurrentLineItemValue('item', 'location', 6);
 record.setCurrentLineItemValue('item', 'amount', '190.89');

 // Commit the new item for the sales order

 record.commitLineItem('item');

 // Update the sales order

 nlapiSubmitRecord(record);

}