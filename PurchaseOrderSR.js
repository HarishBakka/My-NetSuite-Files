var record2= nlapiLoadRecord('purchaseorder', id, {recordmode: 'dynamic'}); record2.selectLineItem('item', 1);
record2.setCurrentLineItemValue('item', 'quantity', 2);
var subrecord2= record2.editCurrentLineItemSubrecord('item', 'inventorydetail'); subrecord2.selectLineItem('inventoryassignment', 1); subrecord2.setCurrentLineItemValue('inventoryassignment', 'inventorynumber', 'working123'); subrecord2.selectNewLineItem('inventoryassignment'); subrecord2.setCurrentLineItemValue('inventoryassignment', 'inventorynumber', '2ndlineinventoryn umber');
subrecord2.setCurrentLineItemValue('inventoryassignment', 'quantity', '1'); subrecord2.commitLineItem('inventoryassignment');
subrecord2.commit(); record2.commitLineItem('item');
var id = nlapiSubmitRecord(record2);