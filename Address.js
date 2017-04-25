function createEmployee()
{
 var record = nlapiCreateRecord('employee', {recordmode: 'dynamic'});
 record.setFieldValue('companyname','Lead Company 123');
 record.setFieldValue('firstname', 'Lead Company');
 record.setFieldValue('lastname', '123');
 record.setFieldValue('subsidiary','1'); //PARENT COMPANY
 //Add first line to sublist
 record.selectNewLineItem('addressbook');
 record.setCurrentLineItemValue('addressbook', 'defaultshipping', 'T'); //This field is not a subrecord field.
 record.setCurrentLineItemValue('addressbook', 'defaultbilling', 'T'); //This field is not a subrecord field.
 record.setCurrentLineItemValue('addressbook', 'label', 'First Address Label'); //This field is not a subrecord field.
 record.setCurrentLineItemValue('addressbook', 'isresidential', 'F'); //This field is not a subrecord field.
 //create address subrecord
 var subrecord = record.createCurrentLineItemSubrecord('addressbook', 'addressbookaddress');
 //set subrecord fields
 subrecord.setFieldValue('country', 'US'); //Country must be set before setting the other ad dress fields
 subrecord.setFieldValue('attention', 'John Taylor');
 subrecord.setFieldValue('addressee', 'NetSuite Inc.');
 subrecord.setFieldValue('addrphone', '(123)456-7890');
 subrecord.setFieldValue('addr1', '2955 Campus Drive');
 subrecord.setFieldValue('addr2', 'Suite - 100');
 subrecord.setFieldValue('city', 'San Mateo');
 subrecord.setFieldValue('dropdownstate', 'CA');
 // if the address is not in U.S., Canada, or Australia, use // state instead of dropdownstate. For example,
 // subrecord.setFieldValue('state', 'BY');
 // for Bavaria, Germany
 subrecord.setFieldValue('zip', '94403');
 //commit subrecord and line item 
 subrecord.commit(); 
 record.commitLineItem('addressbook');
 //submit record
 var x = nlapiSubmitRecord(record);
}