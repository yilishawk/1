var rule = {
  title: '',
  host: 'https://www.3ayy.com/',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/rss/index.xml?wd=**',
  searchable: 1,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.navbar-items li:gt(2):lt(8);a&&title;a&&href;/(\\d+).html',
  play_parse: true,
	tab_exclude:'夸克4K',
  lazy: '',
  limit: 6,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: '.lazyload&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-item.tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
	搜索:`js:
		pdfh = jsp.pdfh, pdfa = jsp.pdfa, pd = jsp.pd;
		let d = [];
		var html = request(input);
		let list = pdfa(html, "rss&&item");
		for (var i = 0; i < list.length; i++) {
			var title = list[i].match(/\\<title\\>(.*?)\\<\\/title\\>/)[1];
			var desc = pdfh(list[i], 'description&&Text');
			var cont = pdfh(list[i], 'pubdate&&Text');
			var url = list[i].match(/\\<link\\>(.*?)\\n/)[1];
			d.push({
				title: title,
				desc: desc,
				content: cont,
				url: url
			})
		}
		setResult(d)
	`,
}
