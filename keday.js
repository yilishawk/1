var rule = {
  title: '',
  host: 'https://www.kedays.top/',
  url: '/fen/fyclass-fypage.html',
  searchUrl: '/soso/-------------.html?wd=**',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'UC_UA',
  },
  class_parse: '.stui-header__menu li:gt(0):lt(7);a&&Text;a&&href;.*/(.*?).html',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.stui-content__detail .title&&Text;.stui-content__detail p:eq(-2)&&Text',
    img: '.stui-content__thumb .lazyload&&data-original',
    desc: '.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text',
    content: '.detail&&Text',
    tabs: '.dropdown-menu li',
    lists: '.stui-content__playlist:eq(#id) li',
  },
  	sniffer:1,
	// 辅助嗅探规则js写法
	isVideo:`js:
		log(input);
		if (/m3u8\\?sign=/.test(input)) {
			input = true
		} else if (/index\\.m3u8/.test(input)) {
			input = true
		} else {
			input = false
		}
	`,
  //搜索: 'ul.stui-vodlist__media:eq(0),ul.stui-vodlist:eq(0),#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
  //搜索1: 'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
  搜索: '.col-xs-3;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
}
