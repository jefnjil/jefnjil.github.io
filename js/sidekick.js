// Global variables
var myweb='https://jefnjil.github.io/';
var jref='';
var isUDN = true;
var uss = null;
var reg = null;
var udn = null;
var ctb = null;
var ufp = null;
var umd = null;
var uMedia = null;
var woman = null;
var keyTag = null;
var docID='';
var jnjRefList='';

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

function LoadJS(id,src) 
{ 
	var s="script";
	var ajs=document.getElementsByTagName(s)[0];
	if(!document.getElementById(id))
	{
	var js=document.createElement(s);
	js.id=id;
	js.src=src;
	ajs.parentNode.insertBefore(js,ajs);
	}
}

function isMobileDevice() 
{
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);	// could be obsolete
}

function getMetaElement(prop) 
{ 
	var metas = document.getElementsByTagName('meta'); 
	for (i=0; i<metas.length; i++) 
    	if (metas[i].getAttribute('property') == prop || metas[i].getAttribute('itemprop') == prop) 
        	return metas[i]; 
    return null;
}

function getMetaContent(prop) 
{ 
    var ele = getMetaElement(prop);
    return ( ele == null ) ? "" : ele.getAttribute('content'); 
}

function getArticleBody() 
{
	if ( isUDN )
		return document.getElementById('article_show_content');
	var divs = document.getElementsByClassName("post-body entry-content");
	if ( divs.length > 0 ) return divs[ 0];
	return null;
}

function getDescriptionDiv() 
{
	if ( isUDN )
		return document.getElementById('header_description');
	var divs = document.getElementsByClassName("description");
	if ( divs.length > 0 ) return divs[ 0];
	return null;
}

function getMyImage() 
{
	var ac=getArticleBody();
	var ImgArray = new Array("_1.jpg","_n.jpg","google","ggpht","blogspot");
	
	if (ac!=null)
	{
		var imgs = ac.getElementsByTagName("img");
		var picked = [];
		for(var i=imgs.length-1; i>=0; i--)
		{
			var	s = imgs[ i].src.toLowerCase();
			if ( s!= null && s.indexOf('.gif') < 0 )
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
	if ( isUDN )
	{
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
	}
	else
	{
		var divs=document.getElementsByClassName("post-labels");
		for (var i=0; i<divs.length; i++)
		{
			var anchs = divs[ i].getElementsByTagName("a");
			for (var j=0; j<anchs.length; j++)
				result += anchs[ j].innerText + ',';
		}
	}
	return result;
}

function jnjRef(idx,bUrl,sbj) 
{
	if (isUDN && idx.length >= 6)	// 100~99999 = Blogger only
		jnjRefList += '<li><a target="_blank" href="https://blog.udn.com/jefnjil/'+idx +'">'+sbj+'</a>';
	else
		jnjRefList += '<li><a target="_blank" href="https://' + bUrl +'.html">'+sbj+'</a>';
}

function DBJSLoaded()
{
	// retrieve document attributes
	if ( udn != null ) udn = '<img src="' + myweb + 'img/udnnews.gif" border="0" /><br>' + udn + '刊出';
	if ( ctb != null ) ctb = '<img src="' + myweb + 'img/emblem-choice.gif" title="嚴選好文" border="0"><br>' + ctb + '刊出';
	if ( ufp != null ) ufp = '<img src="' + myweb + 'img/UdnFbPlurk.jpg" title="UDN臉書噗浪" border="0"><br>' + ufp + '推薦';
	if ( umd != null && uMedia != null )
	{
		umd = '<a href="https://udn.com/umedia/story/' + uMedia + '" target="_blank"><img src="' + myweb + 'img/umedia.png" title="前往U值媒" border="0"></a><br>' + umd + '刊出';
	}
	if ( woman != null )
	{
		woman = '<a href="https://woman.udn.com/woman/story/' + woman + '" target="_blank"><img src="' + myweb + 'img/woman.png" title="前往女子漾" border="0"></a>';
	}
	if ( uss != null ) 
	{
		var ua = document.getElementById("jnjUdnAlbum");
		ua.outerHTML = '<a target="_blank" href="http://album.udn.com/photo/photo_slider.jsp?uid=jefnjil&f_BOOK_ID=' + uss + '">　<img src="' + myweb + 'img/play.png" title="相簿自動播放" />　</a>';
	}

	// Further Readings
	if ( reg == null ) reg='mv1';
	{
		var script = document.createElement('script');
		script.onload = function () {
			if (isMobileDevice()) jnjRefList = jnjRefList.replace( /<\/td><td valign=top>/g, '');
			var frs = document.getElementById("jnjFurtherReadings");
			frs.innerHTML = '<hr><p>' + jnjRefList + '</p>';
		};
		script.src = myweb + "frs/" + reg + ".js";
		document.head.appendChild(script); //or something of the likes
	}
	
	// Process badges
	var badges='';
	if (udn!=null || ctb!=null || ufp!=null || umd!=null || woman!=null  ) 
	{
	badges+='<tr><table border=0><tr>';
	if (udn!=null) badges+='<td>'+udn+'</td>';
	if (umd!=null) badges+='<td>'+umd+'</td>';
	if (ctb!=null) badges+='<td>'+ctb+'</td>';
	if (ufp!=null) badges+='<td>'+ufp+'</td>';
	if (woman!=null) badges+='<td>'+woman+'</td>';
	badges+='</tr></table></tr>';
	}

	if ( badges.length > 0 ) 
	{
		var _hd = getDescriptionDiv() ;
		if (_hd!=null) _hd.innerHTML = _hd.innerHTML + '　|||||<a href="#jnjbadges">⭳</a>|||||';

		badges ='<p id="jnjbadges" align=center><table border=0>' + badges + '</table></p>';

		var mb=document.getElementById(isUDN ? 'article_show_content' : ('post-body-' + docID));
		if (mb==null) mb = keyTag;

		var dv= document.createElement('div');
		dv.innerHTML= badges;
		//mb.parentNode.insertBefore(dv, mb);
		mb.insertBefore(dv, mb.childNodes[0]);
	}
}

// main program here
function SidekickMain()
{
	// get url of this document
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
	if (jref=='') jref=location.href;

	isUDN = ( jref.indexOf( "blog.udn" ) > 0 );

	// get document ID
	docID = isUDN ? jref.substring( jref.lastIndexOf( '/' ) + 1 ) : getMetaElement('postId').getAttribute('content');

	// place buttons for social media 
	var myTitle=getMetaContent("og:title");
	if ( isUDN ) myTitle=myTitle.substring(0,myTitle.indexOf(' - Jeff'));
	var ogimage=getMyImage();

	var tweet=getMetaContent("og:description");
	var plurk=jref+' ('+myTitle+')\n'+tweet;
	if ( ogimage.indexOf('f_jefnjil_') < 0 ) plurk=ogimage+' '+plurk;
	tweet=myTitle+'\n\n'+tweet.substring(0,60)+'...\n';

	// Tweet
	var eopHtml = '<div align=center><table><tr>';
	eopHtml += '<td><a href="https://twitter.com/intent/tweet?url=' + encodeURIComponent(jref) + '&text=' + encodeURIComponent(tweet) + '" target="_blank" border=0><img src="' + myweb + 'img/bird_blue_48.png"></a>　</td>';
	// Plurk
	eopHtml += '<td><a href="https://www.plurk.com/jefnjil?status=' + encodeURIComponent(plurk) + '&amp=&qualifier=shares" target="_blank" border=0><img src="' + myweb + 'img/plurk.png"></a>　</td>';
	// Album
	eopHtml += '<td><div id="jnjUdnAlbum"></div></td>';
	// Line
	eopHtml += '<td><div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-env="REAL" data-url="' + jref;
	eopHtml += '" data-color="default" data-size="large" data-count="true" data-ver="3" style="display: none;"></div>　</td>';
	// Tumblr
	var caption='<b>' + getMetaContent("og:title") + '</b> - '+getMetaContent("og:description") + '(<a href=\'' + jref + '\'>全文</a>)';
	var ttags = getMyTags() + 'tumblr 中文,Jeff & Jill';
	eopHtml += '<td><a class="tumblr-share-button" href="https://embed.tumblr.com/share" data-color="blue" data-notes="right" data-posttype="photo" data-locale="zh_TW"';
	eopHtml += ' data-content="' + ogimage + '"';
	eopHtml += ' data-caption="' + caption + '"';
	eopHtml += ' data-tags="' + ttags + '"></a></td>';
	eopHtml += '</tr></table></div>';
	// Further Readings
	if ( jref.indexOf('jnjfoundation') > 0 ) eopHtml += '<div id="jnjAsimovReadings"></div>';
	eopHtml += '<div id="jnjFurtherReadings"></div>';
	keyTag.innerHTML = eopHtml;
	{	// Moved here to make sure we don't miss jnjFurtherReadings
	var script = document.createElement('script');
	script.onload = DBJSLoaded;
	script.src = myweb + "db/" + ( isUDN ? "udn" : "blg" ) + docID.substring(docID.length-2) + ".js";
	document.head.appendChild(script); //or something of the likes
	}
	if ( jref.indexOf('jnjfoundation') > 0 ) 
	{
	var script = document.createElement('script');
	script.onload = function () {
		var ar = document.getElementById("jnjAsimovReadings");
		ar.innerHTML = '<hr><p>' + AsimovList + '</p>';
	};
	script.src = myweb + 'js/asimov.js';
	document.head.appendChild(script); //or something of the likes
	}
	LoadJS("line-js","https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js");	// new version
	LoadJS("tumblr-js","https://assets.tumblr.com/share-button.js");
}
	
function onLoadComplete() 
{
	removeListener(window, "load", onLoadComplete );
	keyTag = document.getElementById("jnjEndOfPost");
	if ( keyTag != null ) SidekickMain();
	// else "jnjEndOfPost" hasn't installed yet, ignore it
};

keyTag = document.getElementById("jnjEndOfPost");
if ( keyTag != null )
	SidekickMain();
else
	addListener(window, "load", onLoadComplete );	// maybe it's not loaded yet