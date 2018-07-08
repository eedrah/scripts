
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
 /im "AAM Update Notifier.exe" ^
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
 /im armsvc.exe ^
 /im audiodg.exe ^
 /im TBNotifier.exe ^
 /im mDNSResponder.exe ^
 /im CCleaner64.exe ^
 /im livecomm.exe ^
 /im RAVBg64.exe ^
 /im HPMSGSVC.exe ^
 /im hpqwmiex.exe ^
 /im HPSupportSolutionsFrameworkService.exe ^
 /im HPWMISVC.exe ^
 /im SearchIndexer.exe ^
 /im HeciServer.exe ^
 /im RtkAudioService64.exe ^
 /im BTDevMgr.exe ^
 /im TWCU.exe ^
 ^
 /im ica.exe ^
 /im apnmcp.exe ^
  
 
:loop
taskkill /F ^
 /im ica.exe ^
 /im apnmcp.exe ^
  
goto loop
