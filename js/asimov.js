AsimovList = '';
urlFoundation='https://jnjfoundation.blogspot.com/';

{
function aChapter(dir,title,total) 
{
	var s = location.href;
	var i = s.indexOf(dir);
	if ( i <= 0 )
		i = -1;
	else
		i = parseInt(s.substring( i + dir.length + 1, s.indexOf('.html')));
	
	AsimovList += '<li>';
	if ( i > 1 )
		AsimovList += '<a target="_blank" href="'+urlFoundation+dir+'/'+(i-1)+'.html">上一節</a> | ';
	AsimovList += '<a target="_blank" href="'+urlFoundation+dir+'/1.html">'+title+'</a>';
	if ( i > 0 && i < total )
		AsimovList += ' | <a target="_blank" href="'+urlFoundation+dir+'/'+(i+1)+'.html">下一節</a>';
}

function aArticle(file,title) 
{
	AsimovList += '<li><a target="_blank" href="'+urlFoundation+file+'.html">'+title+'</a>';
}

AsimovList += '<center><table border=0 width=100%><tr><td valign=top><p><ul><b>延伸閱讀</b>';
aChapter('2021/01', '心靈歷史學家', 8 );
aChapter('2021/02', '百科全書學者', 7 );
aChapter('2021/03', '市長', 9 );
aChapter('2021/04', '行商', 6 );
aChapter('2021/05', '商業鉅子', 18 );
aArticle('2021/06/blog-post', '基地與帝國 序' );
aChapter('2021/06', '將軍', 3 );
AsimovList += '</ul></p></td><td valign=top><p><ul>';
aArticle('2019/12/blog-post', '「基地」的背景' );
aArticle('2020/12/blog-post', '基地三部曲與我的緣份' );
aArticle('2021/09/apple-tv-foundation', '「基地（Foundation）」影集初評' );
aArticle('2021/10/foundation', '「基地 Foundation」影集與「騾」' );
aArticle('2023/07/foundation', '「基地（Foundation）」第二季初隨筆' );
aArticle('2023/09/foundation', '「基地（Foundation）」第二季結語' );
AsimovList += '</ul></p></td></tr></table></center>';

//document.write(AsimovList);
}