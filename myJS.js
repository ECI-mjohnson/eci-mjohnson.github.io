//TEMP IMPLEMENTATION - Disable Editing JB Contracts
if (document.getElementById('Assortment_ref').innerText == 'JobBOSS')
    {
        // var editText = document.getElementById('btnEdit').getAttribute('onclick');
        // document.getElementById('hbHelp').setAttribute('onclick',editText);
        // document.getElementById('btnEdit').setAttribute('onclick',"alert('I hereby declare that the editing of this contract is not allowed');document.getElementById('btnEdit').innerText = 'Edit Disabled';");
        document.getElementById('btnEdit').innerText = 'Edit (For License Generation Only)';
      }
//Causes monthly checkbox to blink green
setInterval(function() {
   $("#ff_UserYesNo_02").addClass('checkbox');
     setTimeout(function() {
        $("#ff_UserYesNo_02").removeClass('checkbox');
     }, 500);
 }, 1000);
document.getElementsByClassName('slds-textarea')[9].style.height = '350';
