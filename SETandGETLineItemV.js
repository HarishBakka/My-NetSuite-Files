//This sample copies sales reps from the Sales Team sublist of one sales order to another sales order, 
//ignoring those on the Sales Team sublist who are not sales reps

// Copy all the reps from the original order to the adjusting order 
var iRep = 1;
var reps = originalSo.getLineItemCount('salesteam');
for (var rep = 1; rep <= reps; rep++)
{

 // If the role is not sales rep, ignore it
 if (originalSo.getLineItemValue('salesteam', 'salesrole', rep) != '-2') 
	continue;
 var reppct = originalSo.getLineItemValue('salesteam', 'contribution', rep);
 if (reppct != '0.0%')
 {
  var repId = originalSo.getLineItemValue('salesteam', 'employee', rep);
  // keep the percent the same
  if (reppct.substring(reppct.length-1) == '%')
  {
   //remove the percent sign % from the end

   reppct = reppct.substring(0, reppct.length-1);
  }
  so.insertLineItem('salesteam', iRep);
  so.setCurrentLineItemValue('salesteam', 'contribution', iRep, reppct);
  so.setCurrentLineItemValue('salesteam', 'employee', iRep, repId);

  // copy the role 
  so.setCurrentLineItemValue('salesteam','salesrole',iRep,originalSo.getLineItemValue('salesteam','salesrole', rep));

  // If primary rep on original order make it primary on the new sales order

  var primary = originalSo.getLineItemValue('salesteam', 'isprimary', rep);
  so.setCurrentLineItemValue('salesteam', 'isprimary', iRep, primary);
  iRep++

  so.commitLineItem('salesteam'); 
 }
}
// save the new order and return the ID 
var soId = nlapiSubmitRecord(so, true);