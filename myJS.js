//Causes monthly checkbox to blink green
setInterval(function() {
   $("#ff_UserYesNo_02").addClass('checkbox');
     setTimeout(function() {
        $("#ff_UserYesNo_02").removeClass('checkbox');
     }, 500);
 }, 1000);
function myFunction() {
   document.getElementsByClassName('slds-textarea')[9].style.height = '350';
}
