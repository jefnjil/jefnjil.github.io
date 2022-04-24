var myweb='https://jr20w09opodwnpppl77xba.on.drv.tw/';

function addListener(obj, eventName, listener) 
{
  if( obj.addEventListener )
	obj.addEventListener( eventName, listener, false );
  else
	obj.attachEvent("on" + eventName, listener);
}

function removeListener(obj, eventName, listener) 
{
  if( obj.removeEventListener )
	obj.removeEventListener( eventName, listener );
  else
	obj.detachEvent("on" + eventName, listener);
}

function getAdText(slot,label,format) 
{ 
  return '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- '+label+' --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2950260745318461" data-ad-slot="' + slot + '" data-ad-format="' + format + '"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
}

function isMobileDevice() 
{
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

{
  var m = document.createElement('script'); 
  m.setAttribute('async','async');
  m.setAttribute('src','//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
  document.getElementsByTagName('head')[0].appendChild(m);
}

{
  var m = document.createElement('script'); 
  m.innerHTML='(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-2950260745318461",enable_page_level_ads: true});';
  document.getElementsByTagName('head')[0].appendChild(m);
}

{
  var m = document.createElement('meta'); 
  m.setAttribute('property','fb:admins');
  m.content='100001848899022';
  document.getElementsByTagName('head')[0].appendChild(m);
}

document.write( '<script src="http://static.getclicky.com/26491.js" type="text/javascript"></script>' );
var jref='';
{
  var links = document.getElementsByTagName('link');
  for(var i=0; i<links.length; i++ )
  {
  	var k=links[i];
  	if ( k.getAttribute('rel')=='canonical')
  	{
  	  jref=k.getAttribute('href');
  	  break;
  	}
  }
}
if (jref=='') jref=location.href;

var myTitle=getMetaContent("og:title");
myTitle=myTitle.substring(0,myTitle.indexOf(' - Jeff'));
var ogimage=getMyImage();

var uss = null;
var region = null;
var udn = null;
var ctb = null;
var ufp = null;
var umd = null;
var keyTag = document.getElementById('jnjFoot');
if ( keyTag != null ) 
{
	var	n = keyTag.getAttribute( 'udn' );
	if ( n != null ) udn = '<img src="' + myweb + 'udn/udnnews.gif" border="0" /><br>' + n + '刊出';
	n = keyTag.getAttribute( 'ctb' );
	if ( n != null ) ctb = '<img src="' + myweb + 'udn/emblem-choice.gif" title="嚴選好文" border="0"><br>' + n + '刊出';
	n = keyTag.getAttribute( 'ufp' );
	if ( n != null ) ufp = '<img src="' + myweb + 'udn/UdnFbPlurk.jpg" title="UDN臉書噗浪" border="0"><br>' + n + '推薦';
	n = keyTag.getAttribute( 'umd' );
	if ( n != null )
	{
		if ( n.indexOf(';') < 0 )
			umd = '<img src="' + myweb + 'udn/umedia.png" title="U值媒" border="0"><br>' + n + '刊出';
		else
		{
			var ar = n.split(";");
			umd = '<a href="https://udn.com/umedia/story/' + ar[1] + '" target="_blank"><img src="' + myweb + 'udn/umedia.png" title="前往U值媒" border="0"></a><br>' + ar[0] + '刊出';
		}
	}
	n = keyTag.getAttribute( 'uss' );
	if ( n != null ) uss = '　<b><font size=+1><a target="_blank" href="http://album.udn.com/photo/photo_slider.jsp?uid=jefnjil&f_BOOK_ID=' + n + '"><img valign=middle src="' + myweb + 'play.png"/>  自動播放相簿</a></font></b>　';
	if(typeof jnjRefList != 'undefined' && jnjRefList.length > 0 ) 
	{
		if (isMobileDevice()) jnjRefList = jnjRefList.replace( /<\/td><td valign=top>/g, '');
		region = '<hr><p>' + jnjRefList + '</p>';
	}
}

var tweet=getMetaContent("og:description");
var plurk=jref+' ('+myTitle+')\n'+tweet;
if ( ogimage.indexOf('f_jefnjil_') < 0 ) plurk=ogimage+' '+plurk;
tweet=myTitle+'\n\n'+tweet.substring(0,60)+'...\n';
document.write('<script src="http://platform.tumblr.com/v1/share.js"></script><hr>');
document.write('<div align=center><div class="line-it-button" data-lang="zh_Hant" data-type="like" data-url="' + jref + '" data-share="true" style="display: none;"></div>　');
document.write('<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>');
document.write('<a href="https://twitter.com/intent/tweet?url=' + encodeURIComponent(jref) + '&text=' + encodeURIComponent(tweet) + '" target="_blank" border=0><img src="' + myweb + 'bird_blue_48.png"></a>　');
if (uss!=null) document.write(uss);
document.write('<a href="//www.plurk.com/jefnjil?status=' + encodeURIComponent(plurk) + '&amp=&qualifier=shares" target="_blank" border=0><img src="' + myweb + 'plurk.png"></a>　');
document.write('<a class="tumblr-share-button" id="tumblr_button_abc123" href="https://embed.tumblr.com/share"></a></div>');

if (region!=null) document.write( region );
if (!isMobileDevice()) 
{
	document.write( '<p align=center width=100%>' + getAdText('2040695791','UDN Footer','auto') + '</p>' );
//	document.write( '<p align=center width=100%><script src="' + myweb + 'MyMaps640.js" type="text/javascript"></script></p>' );
}
var oldUdn=false;
var badges='';
if (udn!=null || ctb!=null || ufp!=null  || umd!=null ) 
{
badges+='<tr><table border=0><tr>';
if (udn!=null) badges+='<td>'+udn+'</td>';
if (umd!=null) badges+='<td>'+umd+'</td>';
if (ctb!=null) badges+='<td>'+ctb+'</td>';
if (ufp!=null) badges+='<td>'+ufp+'</td>';
badges+='</tr></table></tr>';
}

{
var adTextDiv = document.getElementById("adText");
var adText = '<script data-ad-client="ca-pub-2950260745318461" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
if ( adTextDiv == null ) 
	badges+='<tr><td width=100%>' + adText + '</td></tr>';
else
	adTextDiv.innerHTML = adText;
}

if ( badges.length > 0 ) badges ='<p align=center><table border=0>' + badges + '</table></p>';

var mb=document.getElementById('article_show_content');
if (mb==null)
{
  mb=document.getElementById('mainbody');
  document.write('<p><b>　搜尋本部落格內容：</b><br><gcse:search></gcse:search></p>');
  document.write('<p><div class="fb-comments" data-href="' + encodeURIComponent(jref) + '" data-num-posts="2" data-width="560"></div></p>');
  oldUdn=true;
}

if (mb==null)
  document.write(badges);
else
{
  var dv= document.createElement('div');
  dv.innerHTML= badges;
  //mb.parentNode.insertBefore(dv, mb);
  mb.insertBefore(dv, mb.childNodes[0]);
}

function getMetaElement(prop) 
{ 
	var metas = document.getElementsByTagName('meta'); 
	for (i=0; i<metas.length; i++) 
    	if (metas[i].getAttribute('property') == prop) 
        	return metas[i]; 
    return null;
}

function getMetaContent(prop) 
{ 
    var ele = getMetaElement(prop);
    return ( ele == null ) ? "" : ele.getAttribute('content'); 
}

function setMetaContent(prop,content) 
{ 
    var ele = getMetaElement(prop);
    if ( ele != null ) ele.setAttribute('content', content); 
}

function getMyImage() 
{
	var ac=document.getElementById('article_show_content');
	var ImgArray = new Array("_1.jpg","_n.jpg","google","ggpht","blogspot");
	
	if (ac!=null)
	{
		var imgs = ac.getElementsByTagName("img");
		var picked = [];
		for(var i=imgs.length-1; i>=0; i--)
		{
			var	s = imgs[ i].src.toLowerCase();
			if ( s!= null )
				for ( var j = 0; j < ImgArray.length; j++ )
					if ( s.indexOf( ImgArray[ j] ) > 0 )
					{
						picked.push(imgs[ i].src);
						break;
					}
		}
		if ( picked.length > 0 )
			return picked[ Math.floor(Math.random()*picked.length)];
	}
	return getMetaContent("og:image");
}

function getMyTags() 
{
	var	result = "";
	var divs=document.getElementsByTagName('div');
	for (var i=0; i<divs.length; i++)
	{
		var cls = divs[ i].getAttribute("class");
		if ( cls != null && cls == "article_tags" )
		{
			var anchs = divs[ i].getElementsByTagName("a");
			if ( anchs != null )
			{
				for(var j=0; j < anchs.length; j++)
				{
					var s, a = anchs[ j];
					if( a.textContent != undefined)
						s = a.textContent;
					else
						s = a.innerText;
					//result += '"' + s + '" '; 
					result += s + ','; 
				}
				break;
			}
		}
	}
	return result;
}

function onLoadComplete() 
{
	removeListener(window, "load", onLoadComplete );
	// process Tumblr
	var tumblr_button = document.getElementById("tumblr_button_abc123");
	if (tumblr_button!=null)
	{
	var caption='<b>' + getMetaContent("og:title") + '</b> - '+getMetaContent("og:description") + '(<a href=\'' + jref + '\'>全文</a>)';
	var ttags = getMyTags() + 'tumblr 中文,Jeff & Jill';
	tumblr_button.setAttribute("data-color", "blue");
	tumblr_button.setAttribute("data-notes", "right");
	tumblr_button.setAttribute("data-posttype", "photo");
	tumblr_button.setAttribute("data-content", ogimage );
	tumblr_button.setAttribute("data-caption", caption );
	tumblr_button.setAttribute("data-tags", ttags );
	tumblr_button.setAttribute("data-locale", "zh_TW");
	
	var s="script";
	var id="tumblr-js";
	var js,ajs=document.getElementsByTagName(s)[0];
	if(!document.getElementById(id))
	{
		js=document.createElement(s);
		js.id=id;
		js.src="https://assets.tumblr.com/share-button.js";
		ajs.parentNode.insertBefore(js,ajs);
	}
	}
};

addListener(window, "load", onLoadComplete );