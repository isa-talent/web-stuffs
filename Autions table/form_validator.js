/* Form validation */

function validate() {

  if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
  }
  if( document.myForm.title.value == "" ) {
    alert( "Please choose title" );
    document.myForm.title.focus();
    return false;
  }
  if( document.myForm.Country.value == "0" ) {
    alert( "Please select your country!" );
    document.myForm.Country.focus();
    return false;
  }
  if( document.myForm.email.value == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.email.focus() ;
    return false;
  }
  if( document.myForm.number.value == "" ) {
    alert( "Please enter phone number" );
    document.myForm.number.focus();
    return false;
  }
  if( document.myForm.address.value == "" ) {
    alert( "Please provide Address!" );
    document.myForm.address.focus();
    return false;
  }
  if( document.myForm.password.value == "" ) {
    alert( "Please enter password!" );
    document.myForm.password.focus();
    return false;
  }
  alert ("Account Creation Successfull")
  return( true );
}
/* End of Form validation */

/* Request form validation */
function validater(){
  if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
  }
  if( document.myForm.title.value == "" ) {
    alert( "Please choose title" );
    document.myForm.title.focus();
    return false;
  }
  if( document.myForm.Country.value == "0" ) {
    alert( "Please select your country!" );
    document.myForm.Country.focus();
    return false;
  }
  if( document.myForm.email.value == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.email.focus() ;
    return false;
  }
  if( document.myForm.number.value == "" ) {
    alert( "Please enter phone number" );
    document.myForm.number.focus();
    return false;
  }
  if( document.myForm.address.value == "" ) {
    alert( "Please provide Address!" );
    document.myForm.address.focus();
    return false;
  }
  if( document.myForm.bid_amount.value == "" ) {
    alert( "Please enter amount to bid" );
    document.myForm.bid_amount.focus();
    return false;
  }
  alert ("Bid request sent successfully")
  return true;
}
/* Request form validation end*/