//TEMP IMPLEMENTATION - Disable Editing JB Contracts
document.getElementById("btnEdit").disabled = true;
var myDiv = document.getElementById('btnEdit');
myDiv.parentNode.removeChild(myDiv);
if (document.getElementById('Assortment_ref').innerText == 'JobBOSS')
    {
      document.getElementById('btnEdit').setAttribute('onclick',"alert('I hearby declare that the editing of this contract is not allowed');")
      }
//Causes monthly checkbox to blink green
setInterval(function() {
   $("#ff_UserYesNo_02").addClass('checkbox');
     setTimeout(function() {
        $("#ff_UserYesNo_02").removeClass('checkbox');
     }, 500);
 }, 1000);
document.getElementsByClassName('slds-textarea')[9].style.height = '350';
