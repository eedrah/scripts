@echo off
taskkill /F ^
 /im scrybe.exe ^
 /im ACDaemon.exe ^
 /im ACService.exe ^
 /im ScrybeUpdater.exe ^
 /im jucheck.exe ^
 /im jusched.exe ^
 /im FnKeyOSD.exe ^
 /im Skype.exe ^
 /im iTunesHelper.exe ^
 /im reader_sl.exe ^
 /im jqs.exe ^
 /im Osa.exe ^
 /im soffice.exe ^
 /im AdobeARM.exe ^
 /im AAM^ Update^ Notifier.exe ^
 /im Jusched.exe ^
 /im DivXUpdate.exe ^
 /im NeroCheck.exe ^
 /im HKCMD.exe ^
 /im atiptaxx.exe ^
 /im ati2evxx.exe ^
 /im RAVCpl64.exe ^
 /im Nwiz.exe ^
 /im CCC.exe ^
 /im SynTPEnh.exe ^
 /im winampa.exe ^
 /im iTunesHelper.exe ^
 /im iPodService.exe ^
 /im OSPPSVC.exe ^
 /im Sidebar.exe ^
 /im wmpnetwk.exe ^
 /im ica.exe ^
  
 
:loop
taskkill /F /im ica.exe
goto loop
