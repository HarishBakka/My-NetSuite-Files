//The following example shows how to add an inline editor sublist to a Suitelet by
//instantiating the nlobForm object (using nlapiCreateForm(title, hideNavbar)) and then calling nlobjForm.addSubList(name, type, label, tab)

function createSuiteletWithSublist(request, response) {

if (request.getMethod() == 'GET' ) {

// create the form
var form = nlapiCreateForm('Sample Sales Order Form');

// add fields to the form
var field = form.addField('textfield','text', 'Text');
field.setLayoutType('normal','startcol')
form.addField('datefield','date', 'Date');
form.addField('currencyfield','currency', 'Currency');
form.addField('textareafield','textarea', 'Textarea');

// add a select field and then add the select options that will appear in the dropdown 
var select = form.addField('selectfield','select','Custom');
select.addSelectOption('','');
select.addSelectOption('a','Albert');
select.addSelectOption('b','Baron'); 
select.addSelectOption('c','Chris');
select.addSelectOption('d','Drake'); 
select.addSelectOption('e','Edgar');

// add a sublist to the form
var sublist = form.addSubList('sublist','inlineeditor','Inline Editor Sublist', 'tab1');
// add fields to the sublist 
sublist.addField('sublist1','date', 'Date'); 
sublist.addField('sublist2','text', 'Name'); 
sublist.addField('sublist3','currency', 'Currency'); 
sublist.addField('sublist4','textarea', 'Large Text'); 
sublist.addField('sublist5','float', 'Float');

// make the Name field unique. Users cannot provide the same value for the Name field. 
sublist.setUniqueField('sublist2');
form.addSubmitButton('Submit');
response.writePage( form );
} 
}