//TEMP IMPLEMENTATION - Disable Editing JB Contracts
if (document.getElementById('Assortment_ref').innerText == 'JobBOSS')
    {
        var editText = document.getElementById('btnEdit').onclick;
        alert(editText);
        document.getElementById('hbHelp').setAttribute('onclick',"SysButton(event,"'ConContract.aspx?BCAction=1&ID=%7ba1ff3ff6-adb2-4393-a4c4-28bd0d6ec711%7d&Mode=Edit&ViewAll=0';");
        document.getElementById('btnEdit').setAttribute('onclick',"alert('I hearby declare that the editing of this contract is not allowed');document.getElementById('btnEdit').innerText = 'Edit Disabled';");
      }
//Causes monthly checkbox to blink green
setInterval(function() {
   $("#ff_UserYesNo_02").addClass('checkbox');
     setTimeout(function() {
        $("#ff_UserYesNo_02").removeClass('checkbox');
     }, 500);
 }, 1000);
document.getElementsByClassName('slds-textarea')[9].style.height = '350';
