//google forms code to lock the form when a certain number of respondents were reached
//edit the value of the maximum function to set the maximum number of respondents
//modified from https://form-publisher.com/blog/limit-responses-in-google-forms-using-google-apps-script/

function CloseFormWhenFull() {
    
    let  maximum = 5;
    let  form = FormApp.getActiveForm();
    let  responses = form.getResponses();
  let count = responses.length;
  //Logger.log(count);
  if (count === maximum){

    form.setAcceptingResponses(false);

  }

}
