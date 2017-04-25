function beforeLoadSublist(type, form) 
{
 if (type=='edit' || 'view') 
 {
 //add a sublist to the form. Specify an internal ID for the sublist,
 //a sublist type, sublist UI label, and the tab the sublist will appear on
 var contacts = form.addSubList('custpage_contacts', 'staticlist', 'Custom Contacts', 'general');

 //add fields to the sublist 
 contacts.addField('entityid', 'text', 'Name');
 contacts.addField('phone', 'phone', 'Phone');
 contacts.addField('email', 'email', 'Email');
 // perform a Contact record search. Set search filters and return columns for 
 // the Contact search
 var contactdata = nlapiSearchRecord('contact', null, new nlobjSearchFilter('company', null, 'anyOf', nlapiGetRecordId()),[new nlobjSearchColumn('entityid'), new nlobjSearchColumn('phone'),new nlobjSearchColumn('email')])
 // display the search results on the Custom Contact sublist 
 contacts.setLineItemValues(contactdata)
 } 
}