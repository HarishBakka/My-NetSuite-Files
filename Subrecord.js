 var qtytobuild = 2;
 var obj = nlapiCreateRecord('assemblybuild', {recordmode:'dynamic'}); 
 obj.setFieldValue('subsidiary', 3 );
 obj.setFieldValue('item', 174);
 obj.setFieldValue('quantity', qtytobuild); 
 obj.setFieldValue('location', 2);
 var bodySubRecord = obj.createSubrecord('inventorydetail'); 
 var ctr;
 for(ctr = 1; ctr <= qtytobuild ; ctr ++)
 {

 //Here we are selecting a new line on the Inventory Assignment sublist on the subrecord 
 bodySubRecord.selectNewLineItem('inventoryassignment'); 
 bodySubRecord.setCurrentLineItemValue('inventoryassignment', 'newinventorynumber','amsh_' + ctr);
 bodySubRecord.setCurrentLineItemValue('inventoryassignment', 'quantity', 1); 
 bodySubRecord.setCurrentLineItemValue('inventoryassignment', 'binnumber', 3); 
 bodySubRecord.commitLineItem('inventoryassignment');

 } 

 bodySubRecord.commit();

 //Here we are selecting and editing an existing line on the Components sublist
 //on the parent record. Note that when working with the Assembly Build record only, 
 //the internal ID for the Inventory Details field on the Components sublist is
 // 'componentinventorydetail'. This is because the Assembly Build record already contains 
 //an Inventory Details (inventorydetails) body field.

 obj.selectLineItem('component', 1); 
 obj.setCurrentLineItemValue('component', 'quantity', qtytobuild); 
 var compSubRecord = obj.createCurrentLineItemSubrecord('component','componentinventorydetail');

 //Here we are selecting and editing a new line on the Inventory Assignment sublist on 
 //the subrecord.

 compSubRecord.selectNewLineItem('inventoryassignment'); 
 compSubRecord.setCurrentLineItemValue('inventoryassignment', 'binnumber', 3);
 compSubRecord.setCurrentLineItemValue('inventoryassignment', 'quantity', 2);
 compSubRecord.commitLineItem('inventoryassignment');
 compSubRecord.commit();
 
 obj.commitLineItem('component');
 var id = nlapiSubmitRecord(obj);
 obj = nlapiLoadRecord('assemblybuild', id);
 var subrecord = obj.viewSubrecord('inventorydetail'); 
 subrecord.selectLineItem('inventoryassignment', 1);
 var str;
 str = subrecord.getCurrentLineItemValue('inventoryassignment', 'newinventorynumber'); 
 if (str!= 2)
 {
 }