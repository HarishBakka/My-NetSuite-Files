// a validateLine client script t which uses nlapiGetCurrentLineItemValue(type, fldnam) 
//to prevent the addition of Sales Order item lines with an amount greater than 10000

function validateLine(group) {
var newType = nlapiGetRecordType();
if ( newType == 'salesorder' && group == 'item' && parseFloat(nlapiGetCurrentLineItemValue(' item','amount')) > 10000 )
{
alert('You cannot add an item with amount greater than 10000.')
return false;
}
return true;
}