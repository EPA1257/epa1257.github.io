function LMErrorHandler()
{
   window.onerror=null; // set back to use the default error handler
   return true; // don't show an error dialog
}

function loadAnimation1()
{
   if ( document.readyState == "complete" )
   { 
      DAControlAnimation1.UpdateInterval = 0.0333; // Max frame rate of 30 fps

      var da40 = DAControlAnimation1.MeterLibrary.VersionString == "5.01.15.0828" ? true : false;
      var da401 = DAControlAnimation1.MeterLibrary.VersionString == "5.01.15.1106" ? true : false;

      if ( !da40 )
      {
         // IE4.01 and beyond
         if ( navigator.appVersion.indexOf("Windows 95") > 0 )
            DAControlAnimation1.TimerSource = 1;   // Use Trident Timer on Win95
      }

      DAControlAnimation1.MediaDir=Animation1MediaDir;
      DAControlAnimation1.DAVersionNumber=da40 ? 0 : (da401 ? 1 : 2);

      LMReaderAnimation1.Async=!da40;
 
      window.onerror=LMErrorHandler;
      LMEngineAnimation1 = LMReaderAnimation1.execute( Animation1MediaDir+"Animation1.x" );
      window.onerror=null; // set back to use the default error handler
   }
   else
   {
      setTimeout( "loadAnimation1()", 50, "JavaScript" );
   }
}

document.write( '<OBJECT ID="DAControlAnimation1" STYLE="Width:516;Height:348"' );
document.write( '  CLASSID="CLSID:B6FFC24C-7E13-11D0-9B47-00C04FC2F51D">' );
document.write( '</OBJECT>' );
document.write( '<OBJECT' );
document.write( '   ID="LMReaderAnimation1" STYLE="Display:none"' );
document.write( '   CLASSID="CLSID:183C259A-0480-11D1-87EA-00C04FC29D46">' );
document.write( '</OBJECT>' );
 
loadAnimation1();
