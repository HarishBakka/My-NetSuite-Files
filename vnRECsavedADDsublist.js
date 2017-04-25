 //This sample shows how to add a line to a sublist. 
 //When the record is saved, the updates to the sublist are committed to the database.

 /* var Nlobj = nlapiLoadRecord('recordType','internalID')
    Nlobj.insertLine('group','linenum');
    Nlobj.setLineItemValue('group','name','linenum','value');
 */

 //Load a sales order. 187 is the internal ID of the sales order

 var rec = nlapiLoadRecord('salesorder', 187);

 //Insert a new line at the start of Item sublist

 rec.insertLineItem('item', 1);

 //Set the value of quantity to 10 on the first line of the sublist

 rec.setLineItemValue('item', 'quantity', 1, 10);

 //Set the value of currency to 1 (the internal ID for US dollar) on the first line of the sublist

  rec.setLineItemValue('item', 'currency', 1, 1);

  //Submit the record to commit the sublist changes to the database

  var id = nlapiSubmitRecord(rec, true);
