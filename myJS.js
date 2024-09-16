//Causes monthly checkbox to blink green
setInterval(function() {
   $("#ff_UserYesNo_02").addClass('checkbox');
     setTimeout(function() {
        $("#ff_UserYesNo_02").removeClass('checkbox');
        document.getElementById('btnEdit').setAttribute('onclick',"alert('I hearby declare that the editing of this contract is not allowed');"
     }, 500);
 }, 10);
document.getElementsByClassName('slds-textarea')[9].style.height = '350';
function myFunction() {
if (document.getElementById('Assortment_ref').innerText == 'JobBOSS')
    {
      document.getElementById('btnEdit').setAttribute('onclick',"alert('I hearby declare that the editing of this contract is not allowed');")
      }

}
