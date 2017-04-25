//The following user event script creates a new address subrecord on an entity
function addaddress(){
	// identify customer
	var customerId = 1296;
	// load the customer record 

	var record = nlapiLoadRecord ('customer',customerId,{recordmode: 'dynamic'});

	// now create new address for the customer record

	var addressSubrecord = record.createCurrentLineItemSubrecord('addressbook','addressbookaddress');

	// Set the appropriate address subrecord fields

	addressSubrecord.setFieldValue('country','US');
	addressSubrecord.setFieldValue('isresidential','F');
	addressSubrecord.setFieldValue('attention', 'Billing Address');
	addressSubrecord.setFieldValue('addressee', 'Global It');
	addressSubrecord.setFieldValue('addrphone', '(208)598-8788');
	addressSubrecord.setFieldValue('addr1', '2955 Campus Drive');
	addressSubrecord.setFieldValue('addr2', 'Suite - 100');
	addressSubrecord.setFieldValue('city', 'San Mateo');
	addressSubrecord.setFieldValue('state', 'CA');
	addressSubrecord.setFieldValue('zip', '92831');

	// Commit the new address subrecord

	addressSubrecord.commit();

	// commit sublit item to record

	record.commitLineItem('addressbook');

	//updating customer record

	nlapiSubmitRecord(record);


}