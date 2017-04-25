//In this example, an Item Group item is added to a transaction, and the tax code propagates to the members of the group.

var rec = nlapiCreateRecord( 'cashsale' );

rec.setFieldValue( 'entity', '76' );

//set the customer

rec.selectNewLineItem( 'item' );
rec.setCurrentLineItemValue( 'item', 'item', '66');//item group item 

rec.setCurrentLineItemValue( 'item', ‘quantity', 1);

rec.setCurrentLineItemValue( ‘item', ‘taxcode', -7 );//set to non-taxable 

rec.commitLineItem( 'item' );

var id = nlapiSubmitRecord( rec ); //on submit the item group expands