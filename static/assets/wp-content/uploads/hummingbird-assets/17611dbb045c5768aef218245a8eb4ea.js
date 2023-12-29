/**handles:fl-builder-layout-27599**/
!function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd?define(e,i):this[e]=i()}("bowser",function(){var k=!0;function l(i){function e(e){var e=i.match(e);return e&&1<e.length&&e[1]||""}function t(e){var e=i.match(e);return e&&1<e.length&&e[2]||""}var o=e(/(ipod|iphone|ipad)/i).toLowerCase(),a,n=!/like android/i.test(i)&&/android/i.test(i),l=/nexus\s*[0-6]\s*/i.test(i),r=!l&&/nexus\s*[0-9]+/i.test(i),s=/CrOS/.test(i),d=/silk/i.test(i),u=/sailfish/i.test(i),c=/tizen/i.test(i),f=/(web|hpw)os/i.test(i),h=/windows phone/i.test(i),p=!h&&/windows/i.test(i),m=!o&&!d&&/macintosh/i.test(i),g=!n&&!u&&!c&&!f&&/linux/i.test(i),b=e(/edge\/(\d+(\.\d+)?)/i),v=e(/version\/(\d+(\.\d+)?)/i),y=/tablet/i.test(i),L=!y&&/[^-]mobi/i.test(i),w=/xbox/i.test(i),_;/opera|opr|opios/i.test(i)?_={name:"Opera",opera:k,version:v||e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(i)?_={name:"Opera Coast",coast:k,version:v||e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?_={name:"Yandex Browser",yandexbrowser:k,version:v||e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(i)?_={name:"UC Browser",ucbrowser:k,version:e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(i)?_={name:"Maxthon",maxthon:k,version:e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(i)?_={name:"Epiphany",epiphany:k,version:e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(i)?_={name:"Puffin",puffin:k,version:e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(i)?_={name:"Sleipnir",sleipnir:k,version:e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(i)?_={name:"K-Meleon",kMeleon:k,version:e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:h?(_={name:"Windows Phone",windowsphone:k},b?(_.msedge=k,_.version=b):(_.msie=k,_.version=e(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?_={name:"Internet Explorer",msie:k,version:e(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:s?_={name:"Chrome",chromeos:k,chromeBook:k,chrome:k,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?_={name:"Microsoft Edge",msedge:k,version:b}:/vivaldi/i.test(i)?_={name:"Vivaldi",vivaldi:k,version:e(/vivaldi\/(\d+(\.\d+)?)/i)||v}:u?_={name:"Sailfish",sailfish:k,version:e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?_={name:"SeaMonkey",seamonkey:k,version:e(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(i)?(_={name:"Firefox",firefox:k,version:e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(_.firefoxos=k)):d?_={name:"Amazon Silk",silk:k,version:e(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(i)?_={name:"PhantomJS",phantom:k,version:e(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(i)?_={name:"SlimerJS",slimer:k,version:e(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?_={name:"BlackBerry",blackberry:k,version:v||e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:f?(_={name:"WebOS",webos:k,version:v||e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(_.touchpad=k)):/bada/i.test(i)?_={name:"Bada",bada:k,version:e(/dolfin\/(\d+(\.\d+)?)/i)}:c?_={name:"Tizen",tizen:k,version:e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||v}:/qupzilla/i.test(i)?_={name:"QupZilla",qupzilla:k,version:e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||v}:/chromium/i.test(i)?_={name:"Chromium",chromium:k,version:e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||v}:/chrome|crios|crmo/i.test(i)?_={name:"Chrome",chrome:k,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:n?_={name:"Android",version:v}:/safari|applewebkit/i.test(i)?(_={name:"Safari",safari:k},v&&(_.version=v)):o?(_={name:"iphone"==o?"iPhone":"ipad"==o?"iPad":"iPod"},v&&(_.version=v)):_=/googlebot/i.test(i)?{name:"Googlebot",googlebot:k,version:e(/googlebot\/(\d+(\.\d+))/i)||v}:{name:e(/^(.*)\/(.*) /),version:t(/^(.*)\/(.*) /)},!_.msedge&&/(apple)?webkit/i.test(i)?(/(apple)?webkit\/537\.36/i.test(i)?(_.name=_.name||"Blink",_.blink=k):(_.name=_.name||"Webkit",_.webkit=k),!_.version&&v&&(_.version=v)):!_.opera&&/gecko\//i.test(i)&&(_.name=_.name||"Gecko",_.gecko=k,_.version=_.version||e(/gecko\/(\d+(\.\d+)?)/i)),_.msedge||!n&&!_.silk?o?(_[o]=k,_.ios=k):m?_.mac=k:w?_.xbox=k:p?_.windows=k:g&&(_.linux=k):_.android=k;var g="";_.windowsphone?g=e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o?g=(g=e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):n?g=e(/android[ \/-](\d+(\.\d+)*)/i):_.webos?g=e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):_.blackberry?g=e(/rim\stablet\sos\s(\d+(\.\d+)*)/i):_.bada?g=e(/bada\/(\d+(\.\d+)*)/i):_.tizen&&(g=e(/tizen[\/\s](\d+(\.\d+)*)/i)),g&&(_.osversion=g);var g=g.split(".")[0];return y||r||"ipad"==o||n&&(3==g||4<=g&&!L)||_.silk?_.tablet=k:(L||"iphone"==o||"ipod"==o||n||l||_.blackberry||_.webos||_.bada)&&(_.mobile=k),_.msedge||_.msie&&10<=_.version||_.yandexbrowser&&15<=_.version||_.vivaldi&&1<=_.version||_.chrome&&20<=_.version||_.firefox&&20<=_.version||_.safari&&6<=_.version||_.opera&&10<=_.version||_.ios&&_.osversion&&6<=_.osversion.split(".")[0]||_.blackberry&&10.1<=_.version||_.chromium&&20<=_.version?_.a=k:_.msie&&_.version<10||_.chrome&&_.version<20||_.firefox&&_.version<20||_.safari&&_.version<6||_.opera&&_.version<10||_.ios&&_.osversion&&_.osversion.split(".")[0]<6||_.chromium&&_.version<20?_.c=k:_.x=k,_}var r=l("undefined"!=typeof navigator?navigator.userAgent:"");function o(e){return e.split(".").length}function a(e,i){var t=[],o;if(Array.prototype.map)return Array.prototype.map.call(e,i);for(o=0;o<e.length;o++)t.push(i(e[o]));return t}function s(e){for(var t=Math.max(o(e[0]),o(e[1])),i=a(e,function(e){var i=t-o(e);return a((e+=new Array(1+i).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});0<=--t;){if(i[0][t]>i[1][t])return 1;if(i[0][t]!==i[1][t])return-1;if(0===t)return 0}}function n(e,i,t){var o=r;"string"==typeof i&&(t=i,i=void 0),void 0===i&&(i=!1);var a=""+(o=t?l(t):o).version,n;for(n in e)if(e.hasOwnProperty(n)&&o[n])return s([a,e[n]])<0;return i}function e(e,i,t){return!n(e,i,t)}return r.test=function(e){for(var i=0;i<e.length;++i){var t=e[i];if("string"==typeof t&&t in r)return!0}return!1},r.isUnsupportedBrowser=n,r.compareVersions=s,r.check=e,r._detect=l,r}),function(t){UABBTrigger={triggerHook:function(e,i){t("body").trigger("uabb-trigger."+e,i)},addHook:function(e,i){t("body").on("uabb-trigger."+e,i)},removeHook:function(e,i){t("body").off("uabb-trigger."+e,i)}}}(jQuery),jQuery(document).ready(function(e){var i,t,o,t;"undefined"!=typeof bowser&&null!==bowser&&(t=bowser.version,t=(o=(i=bowser.name).replace(/\s+/g,"-").toLowerCase())+parseInt(t),e("html").addClass(o).addClass(t)),e(".uabb-row-separator").parents("html").css("overflow-x","hidden")});var wpAjaxUrl="https://islamicscholarshipfund.org/wp-admin/admin-ajax.php",flBuilderUrl="https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1e3,easing:"swing",offset:100},paths:{pluginUrl:"https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",wpAjaxUrl:"https://islamicscholarshipfund.org/wp-admin/admin-ajax.php"},breakpoints:{small:768,medium:992,large:1200},waypoint:{offset:80}};!function(g){"undefined"==typeof FLBuilderLayout&&(FLBuilderLayout={init:function(){FLBuilderLayout._destroy(),FLBuilderLayout._initClasses(),FLBuilderLayout._initBackgrounds(),FLBuilderLayout._initRowShapeLayerHeight(),0===g(".fl-builder-edit").length&&(FLBuilderLayout._initModuleAnimations(),FLBuilderLayout._initAnchorLinks(),FLBuilderLayout._initHash(),FLBuilderLayout._initForms(),FLBuilderLayout._reorderMenu())},refreshGalleries:function(e){var i=g(void 0===e?"body":e),t=i.find(".fl-mosaicflow-content"),e=i.find(".fl-gallery"),i=null;t&&(i=t.data("mosaicflow"))&&(i.columns=g([]),i.columnsHeights=[],t.data("mosaicflow",i),t.mosaicflow("refill")),e&&e.trigger("refreshWookmark")},refreshGridLayout:function(e){var i,e=g(void 0===e?"body":e).find(".masonry");e.length&&e.masonry("layout")},reloadSlider:function(e){var e=g(void 0===e?"body":e);0<e.find(".bx-viewport > div").length&&g.each(e.find(".bx-viewport > div"),function(e,i){setTimeout(function(){g(i).data("bxSlider").reloadSlider()},100)})},resizeAudio:function(e){var i,e=g(void 0===e?"body":e).find(".wp-audio-shortcode.mejs-audio"),t=null,o=null,a=null,n=400;e.length&&"undefined"!=typeof mejs&&e.each(function(){t=g(this),o=mejs.players[t.attr("id")],a=t.find(".mejs-controls .mejs-time-rail");var e=t.find(".mejs-inner"),i=t.find(".mejs-controls .mejs-time-total");void 0!==o&&(n=Math.ceil(.8*t.width()),e.length&&(a.css("width",n+"px!important"),o.options.autosizeProgress=!0,setTimeout(function(){o.setControlsSize()},50),t.find(".mejs-inner").css({visibility:"visible",height:"inherit"})))})},preloadAudio:function(e){var i=g(void 0===e?"body":e),e=i.closest(".fl-accordion-item"),i=i.find(".wp-audio-shortcode.mejs-audio");!e.hasClass("fl-accordion-item-active")&&i.find(".mejs-inner").length&&i.find(".mejs-inner").css({visibility:"hidden",height:0})},resizeSlideshow:function(){"undefined"!=typeof YUI&&YUI().use("node-event-simulate",function(e){e.one(window).simulate("resize")})},reloadGoogleMap:function(e){var i,e=g(void 0===e?"body":e).find('iframe[src*="google.com/maps"]');e.length&&e.attr("src",function(e,i){return i})},_destroy:function(){var e=g(window);e.off("scroll.fl-bg-parallax"),e.off("resize.fl-bg-video")},_isTouch:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initClasses:function(){var e=g("body"),i=navigator.userAgent;!e.hasClass("archive")&&0<g(".fl-builder-content-primary").length&&e.addClass("fl-builder"),FLBuilderLayout._isTouch()&&e.addClass("fl-builder-touch"),FLBuilderLayout._isMobile()&&e.addClass("fl-builder-mobile"),g(window).width()<FLBuilderLayoutConfig.breakpoints.small&&e.addClass("fl-builder-breakpoint-small"),g(window).width()>FLBuilderLayoutConfig.breakpoints.small&&g(window).width()<FLBuilderLayoutConfig.breakpoints.medium&&e.addClass("fl-builder-breakpoint-medium"),g(window).width()>FLBuilderLayoutConfig.breakpoints.medium&&g(window).width()<FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-large"),g(window).width()>FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-default"),-1<i.indexOf("Trident/7.0")&&-1<i.indexOf("rv:11.0")&&e.addClass("fl-builder-ie-11")},_initBackgrounds:function(){var e=g(window),i;0<g(".fl-row-bg-parallax").length&&!FLBuilderLayout._isMobile()&&(FLBuilderLayout._scrollParallaxBackgrounds(),FLBuilderLayout._initParallaxBackgrounds(),e.on("resize.fl-bg-parallax",FLBuilderLayout._initParallaxBackgrounds),e.on("scroll.fl-bg-parallax",FLBuilderLayout._scrollParallaxBackgrounds)),0<g(".fl-bg-video").length&&(FLBuilderLayout._initBgVideos(),FLBuilderLayout._resizeBgVideos(),i=null,e.on("resize.fl-bg-video",function(e){clearTimeout(i),i=setTimeout(function(){FLBuilderLayout._resizeBgVideos(e)},100)}))},_initParallaxBackgrounds:function(){g(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground)},_initParallaxBackground:function(){var e=g(this),i=e.find("> .fl-row-content-wrap"),t=g(window).width(),o="",a={default:"",medium:"",responsive:""};a.default=e.data("parallax-image")||"",a.medium=e.data("parallax-image-medium")||a.default,a.responsive=e.data("parallax-image-responsive")||a.medium,t>FLBuilderLayoutConfig.breakpoints.medium?o="default":t>FLBuilderLayoutConfig.breakpoints.small&&t<=FLBuilderLayoutConfig.breakpoints.medium?o="medium":t<=FLBuilderLayoutConfig.breakpoints.small&&(o="responsive"),i.css("background-image","url("+a[o]+")"),e.data("current-image-loaded",o)},_scrollParallaxBackgrounds:function(){g(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground)},_scrollParallaxBackground:function(){var e=g(window),i=g(this),t=i.find("> .fl-row-content-wrap"),o=i.data("parallax-speed"),a=t.offset(),o=-(e.scrollTop()-a.top)/o,i=null!=i.data("parallax-offset")?i.data("parallax-offset"):0,n;t.css("background-position","center "+(o-i)+"px")},_initBgVideos:function(){g(".fl-bg-video").each(FLBuilderLayout._initBgVideo)},_initBgVideo:function(){var e=g(this),i=e.data("width"),t=e.data("height"),o=e.data("mp4"),a=e.data("youtube"),n=e.data("vimeo"),l=e.data("mp4-type"),r=e.data("webm"),s=e.data("webm-type"),d=e.data("fallback"),u=e.data("loaded"),c=e.data("video-mobile"),f="",h=null,p=null,m=null;u||(h=g("<video autoplay loop muted playsinline></video>"),void 0!==d&&""!=d&&(h.attr("poster","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),h.css({backgroundImage:'url("'+d+'")',backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"})),void 0!==o&&""!=o&&((p=g("<source />")).attr("src",o),p.attr("type",l),h.append(p)),void 0!==r&&""!=r&&((m=g("<source />")).attr("src",r),m.attr("type",s),h.append(m)),!FLBuilderLayout._isMobile()||FLBuilderLayout._isMobile()&&"yes"==c?void 0!==a?FLBuilderLayout._initYoutubeBgVideo.apply(this):void 0!==n?FLBuilderLayout._initVimeoBgVideo.apply(this):e.append(h):(h.attr("src",""),e.append(h)),e.data("loaded",!0))},_initYoutubeBgVideo:function(){var t=g(this),e=t.data("video-id"),o=t.find(".fl-bg-video-player"),a=t.data("enable-audio"),n=t.find(".fl-bg-video-audio"),l=void 0!==t.data("start")?t.data("start"):0,l=void 0!==t.data("t")&&0===l?t.data("t"):l,r=void 0!==t.data("end")?t.data("end"):0,s=void 0!==t.data("loop")?t.data("loop"):1,d=0,u,c;e&&(fallback=t.data("fallback")||!1,fallback&&(t.find("iframe").remove(),fallbackTag=g("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+t.data("fallback")+")"),fallbackTag.css("background-size","cover"),fallbackTag.css("transition","background-image 1s"),t.append(fallbackTag),c=!0),FLBuilderLayout._onYoutubeApiReady(function(i){setTimeout(function(){u=new i.Player(o[0],{videoId:e,events:{onReady:function(e){"no"===a||FLBuilderLayout._isMobile()?e.target.mute():"yes"===a&&e.target.isMuted&&e.target.unMute(),t.data("YTPlayer",u),FLBuilderLayout._resizeYoutubeBgVideo.apply(t),e.target.playVideo(),0<n.length&&!FLBuilderLayout._isMobile()&&n.on("click",{button:n,player:u},FLBuilderLayout._toggleBgVideoAudio)},onStateChange:function(e){1===e.data&&c&&g(".fl-bg-video-fallback").css("background-image","url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"),d<4&&d++,1<d&&(-1===e.data||2===e.data)&&"yes"===a&&(u.mute(),u.playVideo(),n.show()),e.data===i.PlayerState.ENDED&&1===s&&(0<l?u.seekTo(l):u.playVideo())},onError:function(e){console.info("YT Error: "+e.data),FLBuilderLayout._onErrorYoutubeVimeo(t)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:l,end:r}})},1)}))},_onErrorYoutubeVimeo:function(e){if(fallback=e.data("fallback")||!1,!fallback)return!1;e.find("iframe").remove(),fallbackTag=g("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+e.data("fallback")+")"),e.append(fallbackTag)},_onYoutubeApiReady:function(e){window.YT&&YT.loaded?e(YT):setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(e)},350)},_initVimeoBgVideo:function(){var i=g(this),e=i.data("video-id"),t=i.find(".fl-bg-video-player"),o=i.data("enable-audio"),a=i.find(".fl-bg-video-audio"),e,n=i.outerWidth(),l=navigator.userAgent;"undefined"!=typeof Vimeo&&e&&(e=new Vimeo.Player(t[0],{id:e,loop:!0,title:!1,portrait:!1,background:!0,autopause:!1,muted:!0}),i.data("VMPlayer",e),"no"===o?e.setVolume(0):"yes"===o&&(-1<l.indexOf("Safari")||-1<l.indexOf("Chrome")||-1<l.indexOf("Firefox")?(e.setVolume(0),a.show()):e.setVolume(1)),e.play().catch(function(e){FLBuilderLayout._onErrorYoutubeVimeo(i)}),0<a.length&&a.on("click",{button:a,player:e},FLBuilderLayout._toggleBgVideoAudio))},_toggleBgVideoAudio:function(e){var i=e.data.player,t=e.data.button.find(".fl-audio-control");t.hasClass("fa-volume-off")?(t.removeClass("fa-volume-off").addClass("fa-volume-up"),e.data.button.find(".fa-times").hide(),"function"==typeof i.unMute?i.unMute():i.setVolume(1)):(t.removeClass("fa-volume-up").addClass("fa-volume-off"),e.data.button.find(".fa-times").show(),"function"==typeof i.unMute?i.mute():i.setVolume(0))},_videoBgSourceError:function(e){var i=g(e.target),t=i.closest(".fl-bg-video"),o=t.find("video"),a=t.data("fallback"),e="";i.remove(),o.find("source").length||""!==a&&((e=g("<div></div>")).addClass("fl-bg-video-fallback"),e.css("background-image","url("+a+")"),t.append(e),o.remove())},_resizeBgVideos:function(){g(".fl-bg-video").each(function(){FLBuilderLayout._resizeBgVideo.apply(this),0<g(this).parent().find("img").length&&g(this).parent().imagesLoaded(g.proxy(FLBuilderLayout._resizeBgVideo,this))})},_resizeBgVideo:function(){if(0!==g(this).find("video").length||0!==g(this).find("iframe").length){var e=g(this),i=e.outerHeight(),t=e.outerWidth(),o=e.find("video"),a=e.data("height"),n=e.data("width"),l=t,r=Math.round(a*t/n),s=0,d=0,u=e.find("iframe"),c=g(this).closest(".fl-row-bg-video").hasClass("fl-row-full-height"),f={top:"50%",left:"50%",transform:"translate(-50%,-50%)"};if(o.length){if(""===a||void 0===a||""===n||void 0===n)return o.css({left:"0px",top:"0px",width:l+"px"}),void o.on("loadedmetadata",FLBuilderLayout._resizeOnLoadedMeta);c||(r<i?(r=i,s=-(l-t)/2,l=a?Math.round(n*i/a):l):d=-(r-i)/2,f={left:s+"px",top:d+"px",height:r+"px",width:l+"px"}),o.css(f)}else u.length&&void 0!==e.data("youtube")&&FLBuilderLayout._resizeYoutubeBgVideo.apply(this)}},_resizeOnLoadedMeta:function(){var e=g(this),i=e.parent().outerHeight(),t=e.parent().outerWidth(),o=e[0].videoWidth,a=e[0].videoHeight,n=Math.round(a*t/o),l=t,r=0,s=0;n<i?(n=i,r=-((l=Math.round(o*i/a))-t)/2):s=-(n-i)/2,e.parent().data("width",o),e.parent().data("height",a),e.css({left:r+"px",top:s+"px",width:l+"px",height:n+"px"})},_resizeYoutubeBgVideo:function(){var e=g(this),i=e.outerWidth(),t=e.outerHeight(),o=e.data("YTPlayer"),a=o?o.getIframe():null,n,l="16:9".split(":"),e=l[0]/l[1],r,s,o=e<i/t,l=o?i:t*e,t=o?i/e:t;a&&g(a).width(l).height(t)},_initModuleAnimations:function(){void 0!==jQuery.fn.waypoint&&g(".fl-animation").each(function(){var e=g(this),i=e.offset().top,t=g(window).height(),o=g("body").height(),a,n="80%";FLBuilderLayoutConfig.waypoint.offset,n=FLBuilderLayoutConfig.waypoint.offset+"%",e.waypoint({offset:n=o-i<.2*t?"100%":n,handler:FLBuilderLayout._doModuleAnimation})})},_doModuleAnimation:function(){var e=void 0===this.element?g(this):g(this.element),i=parseFloat(e.data("animation-delay")),t=parseFloat(e.data("animation-duration"));isNaN(t)||e.css("animation-duration",t+"s"),!isNaN(i)&&0<i?setTimeout(function(){e.addClass("fl-animated")},1e3*i):setTimeout(function(){e.addClass("fl-animated")},1)},_initHash:function(){var e=window.location.hash.replace("#","").split("/").shift(),i=null,t=null,o=null,a=null,n=null;if(""!==e)try{0<(i=g("#"+e)).length&&(i.hasClass("fl-accordion-item")&&setTimeout(function(){i.find(".fl-accordion-button").trigger("click")},100),i.hasClass("fl-tabs-panel")&&setTimeout(function(){t=i.closest(".fl-tabs"),o=i.find(".fl-tabs-panel-label"),a=o.data("index"),(n=t.find(".fl-tabs-labels .fl-tabs-label[data-index="+a+"]"))[0].click(),FLBuilderLayout._scrollToElement(i)},100))}catch(e){}},_initAnchorLinks:function(){g("a").each(FLBuilderLayout._initAnchorLink)},_initAnchorLink:function(){var e=g(this),i=e.attr("href"),t=window.location,o=null,a=null,n=!1;if(void 0!==i&&-1<i.indexOf("#")&&e.closest("svg").length<1&&t.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&t.hostname==this.hostname)try{if(!(o=i.split("#").pop()))return;0<(a=g("#"+o)).length&&(n=a.hasClass("fl-row")||a.hasClass("fl-col")||a.hasClass("fl-module"),a.hasClass("fl-no-scroll")||!e.hasClass("fl-scroll-link")&&!n||g(e).on("click",FLBuilderLayout._scrollToElementOnLinkClick),a.hasClass("fl-accordion-item")&&g(e).on("click",FLBuilderLayout._scrollToAccordionOnLinkClick),a.hasClass("fl-tabs-panel")&&g(e).on("click",FLBuilderLayout._scrollToTabOnLinkClick))}catch(e){}},_scrollToElementOnLinkClick:function(e,i){var t=g("#"+g(this).attr("href").split("#").pop());FLBuilderLayout._scrollToElement(t,i),e.preventDefault()},_scrollToElement:function(e,i){var t=FLBuilderLayoutConfig.anchorLinkAnimations,o=0,a=g(window),n=g(document);0<e.length&&(o="fixed"===e.css("position")||"fixed"===e.parent().css("position")?e.position().top:e.offset().top>n.height()-a.height()?n.height()-a.height():e.offset().top-t.offset,g("html, body").animate({scrollTop:o},t.duration,t.easing,function(){void 0!==i&&i(),null!=e.attr("id")&&(history.pushState?history.pushState(null,null,"#"+e.attr("id")):window.location.hash=e.attr("id"))}))},_scrollToAccordionOnLinkClick:function(e){var i=g("#"+g(this).attr("href").split("#").pop()),t;0<i.length&&FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&(i.find(".fl-accordion-button").trigger("click"),i=!1)})},_scrollToTabOnLinkClick:function(e){var i=g("#"+g(this).attr("href").split("#").pop()),t=null,o=null,a=null,n,t,a;0<i.length&&(t=i.closest(".fl-tabs"),a=i.find(".fl-tabs-panel-label"),tabIndex=a.data("index"),o=t.find(".fl-tabs-labels .fl-tabs-label[data-index="+tabIndex+"]"),a.is(":visible")?FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&a.trigger(g.Event("click",{which:1}))}):(o[0].click(),FLBuilderLayout._scrollToElement(i)),e.preventDefault())},_initForms:function(){FLBuilderLayout._hasPlaceholderSupport||g(".fl-form-field input").each(FLBuilderLayout._initFormFieldPlaceholderFallback),g(".fl-form-field input").on("focus",FLBuilderLayout._clearFormFieldError)},_hasPlaceholderSupport:function(){var e;return"undefined"!=document.createElement("input").placeholder},_initFormFieldPlaceholderFallback:function(){var e=g(this),i=e.val(),t=e.attr("placeholder");"undefined"!=t&&""===i&&(e.val(t),e.on("focus",FLBuilderLayout._hideFormFieldPlaceholderFallback),e.on("blur",FLBuilderLayout._showFormFieldPlaceholderFallback))},_hideFormFieldPlaceholderFallback:function(){var e=g(this),i,t;e.val()==e.attr("placeholder")&&e.val("")},_showFormFieldPlaceholderFallback:function(){var e=g(this),i=e.val(),t=e.attr("placeholder");""===i&&e.val(t)},_clearFormFieldError:function(){var e=g(this);e.removeClass("fl-form-error"),e.siblings(".fl-form-error-message").hide()},_initRowShapeLayerHeight:function(){FLBuilderLayout._adjustRowShapeLayerHeight(),g(window).on("resize",FLBuilderLayout._adjustRowShapeLayerHeight)},_adjustRowShapeLayerHeight:function(){var e=g(".fl-builder-shape-layer");g(e).each(function(e){var i=g(this),t=g(i).find("svg"),o=t.height(),a;i.is(".fl-builder-shape-circle, .fl-builder-shape-dot-cluster, .fl-builder-shape-topography, .fl-builder-shape-rect")||g(t).css("height",Math.ceil(o))})},_string_to_slug:function(e){return e=e.replace(/^\s+|\s+$/g,""),regex=void 0===window._fl_string_to_slug_regex?new RegExp("[^a-zA-Z0-9'\":() !.,-_|]","g"):new RegExp("[^"+window._fl_string_to_slug_regex+"'\":() !.,-_|\\p{Letter}]","ug"),e=e.replace(regex,"").replace(/\s+/g," ")},_reorderMenu:function(){1<g("#wp-admin-bar-fl-builder-frontend-edit-link-default li").length&&g("#wp-admin-bar-fl-builder-frontend-duplicate-link").appendTo("#wp-admin-bar-fl-builder-frontend-edit-link-default").css("padding-top","5px").css("border-top","2px solid #1D2125").css("margin-top","5px")}},g(function(){FLBuilderLayout.init()}))}(jQuery),jQuery(function(i){i(function(){i(".fl-node-604be57cb57c7 .fl-photo-img").on("mouseenter",function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")}).on("mouseleave",function(e){i(this).attr("title",i(this).data("title")).data("title",null)})}),window._fl_string_to_slug_regex="a-zA-Z0-9"}),jQuery(function(i){i(function(){i(".fl-node-605a3d65b389e .fl-photo-img").on("mouseenter",function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")}).on("mouseleave",function(e){i(this).attr("title",i(this).data("title")).data("title",null)})}),window._fl_string_to_slug_regex="a-zA-Z0-9"}),jQuery(function(i){i(function(){i(".fl-node-604be345ce901 .fl-photo-img").on("mouseenter",function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")}).on("mouseleave",function(e){i(this).attr("title",i(this).data("title")).data("title",null)})}),window._fl_string_to_slug_regex="a-zA-Z0-9"}),jQuery(function(i){i(function(){i(".fl-node-604be345ce8e5 .fl-photo-img").on("mouseenter",function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")}).on("mouseleave",function(e){i(this).attr("title",i(this).data("title")).data("title",null)})}),window._fl_string_to_slug_regex="a-zA-Z0-9"}),function(n){FLBuilderAccordion=function(e){this.settings=e,this.nodeClass=".fl-node-"+e.id,this.wasToggled=!1,this.expandOnTab=e.expandOnTab,this._init()},FLBuilderAccordion.prototype={settings:{},nodeClass:"",wasToggled:!1,expandOnTab:!1,_init:function(){n(this.nodeClass+" .fl-accordion-button").on("click",n.proxy(this._buttonClick,this)),n(this.nodeClass+" .fl-accordion-button").on("keypress",n.proxy(this._buttonClick,this)),n(this.nodeClass+" .fl-accordion-button-label").on("focusin",n.proxy(this._labelFocusIn,this)),n(this.nodeClass+" .fl-accordion-button").on("focusout",n.proxy(this._focusOut,this)),FLBuilderLayout.preloadAudio(this.nodeClass+" .fl-accordion-content"),this._openActiveAccordion()},_openActiveAccordion:function(e){var i=n(this.nodeClass+" .fl-accordion-item.fl-accordion-item-active");0<i.length&&i.find(".fl-accordion-content:first").show()},_labelFocusIn:function(e){var i=n(e.target).closest(".fl-accordion-button");e.relatedTarget&&this.expandOnTab&&(i.attr("aria-selected","true"),this._toggleAccordion(i),e.preventDefault(),e.stopImmediatePropagation(),this.wasToggled=!0)},_buttonClick:function(e){var i=n(e.target).closest(".fl-accordion-button"),t,o="fl-node-"+n(e.target).closest(".fl-module-accordion").data("node"),a=this.nodeClass.replace(".","");this._validClick(e)&&a===o&&(this.expandOnTab&&this.wasToggled?this.wasToggled=!1:(e.preventDefault(),e.stopPropagation(),this._toggleAccordion(i)))},_toggleAccordion:function(e){var i=e.closest(".fl-accordion"),t=e.closest(".fl-accordion-item"),o=i.find(".fl-accordion-content"),a=i.find(".fl-accordion-button i.fl-accordion-button-icon"),n=e.siblings(".fl-accordion-content"),l=e.find("i.fl-accordion-button-icon");i.hasClass("fl-accordion-collapse")&&(i.find("> .fl-accordion-item-active").removeClass("fl-accordion-item-active"),i.find("> .fl-accordion-button").attr("aria-expanded","false"),i.find("> .fl-accordion-content").attr("aria-hidden","true"),o.slideUp("normal"),0<a.find("svg").length?a.find("svg").attr("data-icon","plus"):(a.removeClass(this.settings.activeIcon),a.addClass(this.settings.labelIcon))),n.is(":hidden")?(e.attr("aria-expanded","true"),t.addClass("fl-accordion-item-active"),t.find(".fl-accordion-content").attr("aria-hidden","false"),n.slideDown("normal",this._slideDownComplete),0<l.find("svg").length?l.find("svg").attr("data-icon","minus"):(l.removeClass(this.settings.labelIcon),l.addClass(this.settings.activeIcon)),l.find("span").text("Collapse")):(e.attr("aria-expanded","false"),t.removeClass("fl-accordion-item-active"),t.find(".fl-accordion-content").attr("aria-hidden","true"),n.slideUp("normal",this._slideUpComplete),0<l.find("svg").length?l.find("svg").attr("data-icon","plus"):(l.removeClass(this.settings.activeIcon),l.addClass(this.settings.labelIcon)),l.find("span").text("Expand"))},_focusOut:function(e){var i;n(e.target).closest(".fl-accordion-button").attr("aria-selected","false")},_slideUpComplete:function(){var e,i;n(this).closest(".fl-accordion").trigger("fl-builder.fl-accordion-toggle-complete")},_slideDownComplete:function(){var e=n(this),i=e.closest(".fl-accordion"),t=e.parent(),o=n(window);FLBuilderLayout.refreshGalleries(e),FLBuilderLayout.refreshGridLayout(e),FLBuilderLayout.reloadSlider(e),FLBuilderLayout.resizeAudio(e),FLBuilderLayout.reloadGoogleMap(e),FLBuilderLayout.resizeSlideshow(),t.offset().top<o.scrollTop()+100&&n("html, body").animate({scrollTop:t.offset().top-100},500,"swing"),i.trigger("fl-builder.fl-accordion-toggle-complete")},_validClick:function(e){return 1==e.which||13==e.which||32==e.which||null==e.which}}}(jQuery),function(e){e(function(){new FLBuilderAccordion({id:"604be345ce905",defaultItem:!1,labelIcon:"fas fa-plus",activeIcon:"fas fa-minus",expandOnTab:!1})})}(jQuery),jQuery(function(i){i(function(){i(".fl-node-604be345ce8e4 .fl-photo-img").on("mouseenter",function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")}).on("mouseleave",function(e){i(this).attr("title",i(this).data("title")).data("title",null)})}),window._fl_string_to_slug_regex="a-zA-Z0-9"}),function(e){e(function(){new FLBuilderAccordion({id:"604be345ce906",defaultItem:!1,labelIcon:"fas fa-plus",activeIcon:"fas fa-minus",expandOnTab:!1})})}(jQuery);