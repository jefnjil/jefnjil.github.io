
{
// AdSense In Text 22
var ad='<script async  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2950260745318461"     crossorigin="anonymous"></script>';
ad += '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2950260745318461" data-ad-slot="6208933518" data-ad-format="auto"     data-full-width-responsive="true"></ins>';
ad += '<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>';

alert(ad);

var adTextDiv = document.getElementById("adText");
if ( adTextDiv == null ) 
	document.write( ad );
else
	adTextDiv.innerHTML = ad;

if ( adTextDiv != null ) alert('adTextDiv found');
}

if ( location.href.contains('blog.udn'))
{
	// Global site tag (gtag.js) - Google Analytics
	var ga='<script async src="https://www.googletagmanager.com/gtag/js?id=UA-3719778-1"></script>';
	ga += '<script>  window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag("js", new Date());  gtag("config", "UA-3719778-1"); </script>';
	document.write( ga );
	
	alert(ga);
	
	// Get Clicky
	document.write( '<script async src="//static.getclicky.com/26491.js"></script>' );
}
