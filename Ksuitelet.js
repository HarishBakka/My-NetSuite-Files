function simpleform(request, response){
 if(request.getMethod() == 'GET')
 {
 var newForm = nlapiCreateForm("California State University");
 //newForm.setTitle("Kevin group of companys",'companyinformation');

 var group = newForm.addFieldGroup('companyinformation','My Company Information');
 newForm.addField('custpage_textfield1', 'text', 'Company Name',null,'companyinformation' );
 newForm.addField('custpage_phonefield2','phone','Phone Number',null,'companyinformation');
 newForm.addField('custpage_currencyfield3','currency','currency',null,'companyinformation');
 newForm.addField('custpage_datefield4','date','Date',null,'companyinformation');
 newForm.addField('custpage_descrfield5','textarea','Description',null,'companyinformation');
 group.setShowBorder(true);

 var group = newForm.addFieldGroup('personalinformation','Personal Information');
 newForm.addField('custpage_textfield5','text','Student Name',null,'personalinformation').setMandatory(true);
 newForm.addField('custpage_datefield6','date','DOB YY/DD/MM',null,'personalinformation').setMandatory(true);
 newForm.addField('custpage_phonefield7','phone','Phone Number',null,'personalinformation').setMandatory(true);
 newForm.addField('custpage_emailfield8','email','Email Address',null,'personalinformation').setMandatory(true);
 newForm.addField('custpage_department9','select','Select Department',null,'personalinformation');
 newForm.addField('custpage_address10','textarea','Permanent Address',null,'personalinformation').setMandatory(true);
 newForm.addField('custpage_ssn','integer','Social Security Number',null,'personalinformation').setMandatory(true);
 group.setShowBorder(true);

 var firstTab = newForm.addTab('custpage_universityinf', 'CSUF history');
 var addFieldGroupUniv = newForm.addFieldGroup('custpage_universityInfo','university Information','custpage_universityinf');
 addFieldGroupUniv.setSingleColumn(true);
 newForm.addField('custpage_universitytype','text','University Name',null,'custpage_universityinf').setMandatory(true);
 newForm.addField('custpage_universityaddr','text','University Address',null,'custpage_universityinf').setMandatory(true);
 newForm.addField('custpage_universityphone','phone','Phone Number',null,'custpage_universityinf').setMandatory(true);
 
 var secondTab = newForm.addTab('custpage_studentcontact','Student Contact Info');
 var addFieldGroupStu = newForm.addFieldGroup('custpage_studentcontactinfo','student contact details','custpage_studentcontact');
 addFieldGroupStu.setSingleColumn(false);
 newForm.addField('custpage_studentname','text','Student Name',null,'custpage_studentcontact').setMandatory(true);
 newForm.addField('custpage_studentemail','email','Email Address',null,'custpage_studentcontact').setMandatory(true);
 newForm.addField('custpage_studentphnnumber','phone','Phone Numbr',null,'custpage_studentcontact').setMandatory(true);
 newForm.addField('custpage_studentaddress','textarea','Address',null,'custpage_studentcontact');

 var thirdTab = newForm.addTab('custpage_professorsdetails1','Professors Details');
 var firstSublist = newForm.addSubList('universityprofessorsdetails','inlineeditor','All University Professors Details','custpage_professorsdetails1');
 firstSublist.addField('custpage_name','text','Name').setMandatory(true);
 firstSublist.addField('custpage_phone','phone','Phone Number').setMandatory(true);
 firstSublist.addField('custpage_email','email','Email Address').setMandatory(true);
 firstSublist.addField('custpage_dep','select','Department');

 var fourthTab = newForm.addTab('custpage_universityresources','Student Resources');
 var addFieldGroupRes = newForm.addFieldGroup('custpage_universitydepartmentresources','Student Resources','custpage_universityresources');
 addFieldGroupRes.setSingleColumn(false);
 newForm.addField('custpage_universitygames','select','select game',null,'custpage_universityresources');
 newForm.addField('custpage_uiversitylibrary','text','library Hours',null,'custpage_universityresources');

 var newSubTab = newForm.addSubTab('custpage_subjects','Course Enrolling','custpage_universityresources');
 var addFieldGroupCourse = newForm.addFieldGroup('custpage_allcourses','course enrolling','custpage_subjects');
 newForm.addField('custpage_firstsub','select','first course','yes','custpage_subjects');
 newForm.addField('custpage_secsub','select','sec sub','yes','custpage_subjects');


 var secondNewSubTab = newForm.addSubTab('custpage_feeinfo','payment details','custpage_universityresources');
 var addFieldGroupFee = newForm.addFieldGroup('custpage_feeinformation','Payment Details','custpage_feeinfo');
 newForm.addField('custpage_credit','select','Payment Method',null,'custpage_feeinfo');
 newForm.addField('custpage_carddetails','integer','Credit Card Number',null,'custpage_feeinfo');

 var currentContext = nlapiGetContext();
 var currentUserID = currentContext.getUser();
 newForm.addSubmitButton();
 newForm.addResetButton('Reset');

 response.writePage(newForm);

 }
 else
 {
 	var newForm = nlapiCreateForm("California state unniversity");
 	var resultfiled1 =  newForm.addField('custpage_textfield1', 'text', 'Entered valid Company Name',null,'companyinformation' );
 	resultfiled1.setDefaultValue(request.getParameter('custpage_textfield1'));
 	resultfiled1.setDisplayType('inline');

 	var resultfiled2 =  newForm.addField('custpage_phonefield2','phone','Entered valid Phone Number',null,'companyinformation');
 	resultfiled2.setDefaultValue(request.getParameter('custpage_phonefield2'));
 	resultfiled2.setDisplayType('inline');

 	var resultfiled3 =   newForm.addField('custpage_currencyfield3','currency','Entered valid currency',null,'companyinformation');
 	resultfiled3.setDefaultValue(request.getParameter('custpage_currencyfield3'));
 	resultfiled3.setDisplayType('inline');

 	var resultfiled4 =   newForm.addField('custpage_datefield4','date','Entered valid Date',null,'companyinformation');
 	resultfiled4.setDefaultValue(request.getParameter('custpage_datefield4'));
 	resultfiled4.setDisplayType('inline');

 	var resultfiled5 =   newForm.addField('custpage_descrfield5','textarea','Entered valid Description',null,'companyinformation');
 	resultfiled5.setDefaultValue(request.getParameter('custpage_descrfield5'));
 	resultfiled5.setDisplayType('inline');

 	var resultfiled5 =   newForm.addField('custpage_textfield5','text','Entered valid Student Name',null,'personalinformation');
 	resultfiled5.setDefaultValue(request.getParameter('custpage_textfield5'));
 	resultfiled5.setDisplayType('inline');

 	var resultfiled7 =  newForm.addField('custpage_datefield6','date','Entered valid DOB YY/DD/MM',null,'personalinformation');
 	resultfiled7.setDefaultValue(request.getParameter('custpage_datefield6'));
 	resultfiled7.setDisplayType('inline');

 	var resultfiled9 =   newForm.addField('custpage_phonefield7','phone','Entered valid Phone Number',null,'personalinformation');
 	resultfiled9.setDefaultValue(request.getParameter('custpage_phonefield7'));
 	resultfiled9.setDisplayType('inline');

 	var resultfiled10 =   newForm.addField('custpage_emailfield8','email','Entered valid Email Address',null,'personalinformation');
 	resultfiled10.setDefaultValue(request.getParameter('custpage_emailfield8'));
 	resultfiled10.setDisplayType('inline');

 	var resultfiled11 =   newForm.addField('custpage_department9','select','Entered valid Select Department',null,'personalinformation');
 	resultfiled11.setDefaultValue(request.getParameter('custpage_department9'));
 	resultfiled11.setDisplayType('inline');

 	var resultfiled12 =   newForm.addField('custpage_address10','textarea','Entered valid Permanent Address entered',null,'personalinformation');
 	resultfiled12.setDefaultValue(request.getParameter('custpage_address10'));
 	resultfiled12.setDisplayType('inline');

 	var resultfiled13 =    newForm.addField('custpage_ssn','integer','Entered Valid Social Security Number entered',null,'personalinformation');
 	resultfiled13.setDefaultValue(request.getParameter('custpage_ssn'));
 	resultfiled13.setDisplayType('inline');

 	response.writePage(newForm);
 }

}