var rule = {
  title: '',
  host: 'https://www.subaibaiys.com/',
  url: '/fyclass/page/fypage',
  searchUrl: '/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
                'Referer': 'https://www.subaibaiys.com/',
                'Connection': 'keep-alive',
                'Cookie': '__51uvsct__JkC3MdljYqnA6RwM=1; __51vcke__JkC3MdljYqnA6RwM=e4c3a9ec-7ee0-5812-9ae3-eff591abbf9c; __51vuft__JkC3MdljYqnA6RwM=1711767430201; myannoun=1'
  },
class_name:'电影&电视剧&综艺&动漫&日韩剧&国产剧&欧美剧&港台剧',
class_url:'new-movie&tv-drama&3&4&16&13&15&14',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.bt_img;ul&&li;a&&alt;a&&data-original;a&&href',
  double: true,
  一级: '.bt_img;ul&&li;a&&alt;a&&data-original;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: '.lazyload&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
