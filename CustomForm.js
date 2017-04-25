//The following example shows how to use SuiteScript to add subtabs to a custom NetSuite form. 
//This script is a beforeLoad user event script that is deployed to the Sales Order. 
//Note that if you add only one subtab, the UI label you define for the subtab will not appear in the UI. 
//You must define two subtabs for subtab UI labels to appear.
//When you are adding UI Objects to an existing form, be sure to prefix the internal IDs for all elements with custpage, 
//for example 'custpage_sample_tab' and 'custpage_field_email' 
//In the sample below, the nlobjTab and nlobjField UI objects are being added to a custom transaction form on a Sales Order. 
//(See the help topic Custom Transaction Forms in the NetSuite Help Center if you are not familiar with this form type.)

//Define the user event beforeLoad function 

function tabsToSalesOrder(type, form)
{
 //Define the values of the beforeLoad type argument 

 if (type == 'create')
 {
  //Add a new tab to the form

  var sampleTab = form.addTab('custpage_sample_tab', 'Sample Tab');

  //Add a field to the new tab

  var newFieldEmail = form.addField('custpage_field_email', 'email', 'Alt Email', null, 'custpage_sample_tab');

  //Add a second field to the new tab

  var newFieldText = form.addField('custpage_field_text', 'textarea', 'Details', null, 'custpage_sample_tab');

  //Add a subtab to the first tab

  var sampleSubTab = form.addSubTab('custpage_sample_subtab', 'Sample Subtab', 'custpage_sample_tab');

  //Add a select field to the subtab

  var newSubField = form.addField('custpage_sample_field', 'select', 'My Customers', 'custome r', 'custpage_sample_subtab');

  //Add a second subtab to the first tab

  var sampleSubTab = form.addSubTab('custpage_sample_subtab2', 'Second Sample Subtab', 'custpage_sample_tab');

  //Add a field to the second subtab

  var newSubField = form.addField('custpage_sample_field2', 'select', 'My Employees', 'employ ee', 'custpage_sample_subtab2');
 }
}
