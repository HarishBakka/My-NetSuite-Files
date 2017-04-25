1. nlapiAddDays(d,days);
/* Adds/subtracts a number of days to or from a date object */
//Parameters
//d{date}[required]-Date object
//days{int}[required]-Number of days being added to the date

2. nlapiAddMonths(d,months)
3. nlapiCancelLineItem(type)
4. nlapiDateToString(d,format)
5. nlapiDisableField(fldnam,val)
6. nlapiDisableLineItemField(type,fldnam,val)
7. nlapiStringToDate(str, format)
8. nlapiEncrypt(s, algorithm, key)

//Encodes, encrypts, or obfuscates a clear text string
//s{string}[required]-Thestringtoencode,obfuscateorencrypt.
/*algorithm{string}[required]-The algorithm to use. See table for options.

Algorithm Description
sha1---> This option has been deprecated.
aes----> Symmetric AES encryption
base64-> Base-64 encoding
xor----> Exclusive-OR obfuscation

 Important: base64 encoding and XOR obfuscation are not forms of encryption.

■ key{string}[optional]-The secret key that is used for AES encryption. Only applicable when using
the aes algorithm. This string can be a 128–bit, 192–bit, or 256–bit hex key.
Returns
■ String
*/

9. nlapiEscapeXML(text)
strName += nlapiEscapeXML(searchresult.getValue( ­-'name'- ­) -­);
//Prepares a String for use in XML by escaping XML markup (for example, angle brackets, quotation marks, and ampersands)

10. nlapiFormatCurrancy(str)
11. nlapiGetCurrentLineItemIndex(type)
12. nlapiGetCurrentLineItemText(type, fldnam)
13. nlapiGetCurrentLineItemValue(type, fldnam)
14. nlapiGetFieldText(fldnam)
15. nlapiGetLineItemText(type,fldnam,linenum)
16. nlapiIsLineItemChanged(type)
17. nlapiRefreshLineItems(type)
18. nlapiRemoveLineItemOption(type,fldnam,value)
19. nlapiRemoveSelectOption(fldnam,value)
20. nlapiSelectLineItem(type,linenum)
21. nlapiSelectNewLineItem(type)
22. nlapiGetLineItemCount(type)
23. nlapiGetFieldValue(fldnam)
24. nlapiSetFieldValue(fldnam, value, firefieldchanged, synchronous)
25. nlapiGetLineItemValue(type,fldnam,linenum)
26. nlapiSelectNode(node,xpath)
27. nlapiSelectNodes(node, xpath)
28. nlapiSelectVlaue(node,xpath)
29. nlapiSelectValues(node,path)
30. nlapiStringToXML(text)
31. nlapiXMLToString(XML)
32. nlapiSetLineItemValue(type,fldnam,linenum,value)
33. nlapiInsertLineItem(type,line)
34. nlapiRemoveLineItem(type,line)
35. nlapiGetRecordType()
36. nlapiGetRecordId()
37. nlapiGetRole()
38. nlapiGetRole()

//----------<<<<<<>>>>>>>>>>>---------------//