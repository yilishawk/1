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
  },
class_name:'电影&电视剧&综艺&动漫&日韩剧&国产剧&欧美剧&港台剧',
class_url:'new-movie&tv-drama&3&4&16&13&15&14',
  play_parse: true,
  lazy: '',
  limit: 6,
  图片来源:'@Referer=https://www.subaibaiys.com/@User-Agent=MOBILE_UA',
  推荐: '.bt_img;ul&&li;.lazy&&alt;.lazy&&data-original;.jidi&&span&&Text;.dytit&&a&&href',
  double: true,
  一级: '.bt_img&&ul&&li;img&&alt;img&&data-original;.qb&&Text;a&&href',
  二级: {
    title: 'h1&&Text',
    img: '.dyimg&&img&&src',
    desc: '.moviedteail_list&&li:eq(1)&&a&&Text;.moviedteail_list&&li:eq(5)&&a&&title;.moviedteail_list&&li:eq(7)&&a&&title',
    content: '.yp_context&&Text',
    tabs: '.mi_paly_box .ypxingq_t',
    lists: '.paly_list_btn:eq(#id) a',
        //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
    // 辅助嗅探规则js写法
    isVideo:`js:
    log(input);
    if(/m3u8/.test(input)){
    input = true
    }else{
    input = false
    }
    `,
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}
