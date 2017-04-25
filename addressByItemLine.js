//Defining Address by Item Line

var tran = nlapiCreateRecord('salesorder', {recordmode: 'dynamic'});

tran.setFieldValue('entity', '220');

tran.setFieldValue('ismultishipto', 'T');

tran.selectLineItem('item', 1);

tran.setCurrentLineItemValue('item', 'item', '144');

tran.setCurrentLineItemValue('item', 'quantity', '2');

//Custom address definition

var subrecord = tran.createCurrentLineItemSubrecord('item', 'shippingaddress');
subrecord.setFieldValue('country', 'US');
subrecord.setFieldValue('addr1', 'Test 1');

//Custom address label is write-only
//Address will be stored with this label, but when address is loaded again,
//it won't be available for read using SuiteScript (it will be visible in UI as usual). 
//This is because label is not a part of address and so it won't be loaded on address sub record load.
//When custom address is edited, 
//new custom address is always created. 
//When custom address is edited after transaction was saved and loaded again, 
//label will be null as it won't be copied over to new custom address. 
//In such case, user has to define address label again. 

subrecord.setFieldValue('label', 'My label');
subrecord.setFieldValue('zip', '94403'); 
subrecord.setFieldValue('state', 'CA'); 
subrecord.commit(); 
tran.commitLineItem('item');
tran.selectNewLineItem('item'); 
tran.setCurrentLineItemValue('item', 'item', '144');
tran.setCurrentLineItemValue('item', 'quantity', '3');
//User can use new custom address on multiple item lines by setting its address book key to item line 'shipaddress' select. 
//In this case we set custom address used on item line 1 
tran.setCurrentLineItemValue('item', 'shipaddress', tran.getLineItemValue('item', 'shipaddress' , 1));
tran.commitLineItem('item'); 
nlapiSubmitRecord(tran);