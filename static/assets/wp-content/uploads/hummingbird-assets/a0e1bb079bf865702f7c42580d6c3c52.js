/**handles:fl-builder-layout-26047**/
!function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd?define(e,i):this[e]=i()}("bowser",function(){var k=!0;function r(i){function e(e){var e=i.match(e);return e&&1<e.length&&e[1]||""}function a(e){var e=i.match(e);return e&&1<e.length&&e[2]||""}var t=e(/(ipod|iphone|ipad)/i).toLowerCase(),o,n=!/like android/i.test(i)&&/android/i.test(i),r=/nexus\s*[0-6]\s*/i.test(i),l=!r&&/nexus\s*[0-9]+/i.test(i),d=/CrOS/.test(i),s=/silk/i.test(i),u=/sailfish/i.test(i),c=/tizen/i.test(i),f=/(web|hpw)os/i.test(i),m=/windows phone/i.test(i),p=!m&&/windows/i.test(i),h=!t&&!s&&/macintosh/i.test(i),b=!n&&!u&&!c&&!f&&/linux/i.test(i),g=e(/edge\/(\d+(\.\d+)?)/i),y=e(/version\/(\d+(\.\d+)?)/i),v=/tablet/i.test(i),w=!v&&/[^-]mobi/i.test(i),L=/xbox/i.test(i),B;/opera|opr|opios/i.test(i)?B={name:"Opera",opera:k,version:y||e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(i)?B={name:"Opera Coast",coast:k,version:y||e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?B={name:"Yandex Browser",yandexbrowser:k,version:y||e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(i)?B={name:"UC Browser",ucbrowser:k,version:e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(i)?B={name:"Maxthon",maxthon:k,version:e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(i)?B={name:"Epiphany",epiphany:k,version:e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(i)?B={name:"Puffin",puffin:k,version:e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(i)?B={name:"Sleipnir",sleipnir:k,version:e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(i)?B={name:"K-Meleon",kMeleon:k,version:e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:m?(B={name:"Windows Phone",windowsphone:k},g?(B.msedge=k,B.version=g):(B.msie=k,B.version=e(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?B={name:"Internet Explorer",msie:k,version:e(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:d?B={name:"Chrome",chromeos:k,chromeBook:k,chrome:k,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?B={name:"Microsoft Edge",msedge:k,version:g}:/vivaldi/i.test(i)?B={name:"Vivaldi",vivaldi:k,version:e(/vivaldi\/(\d+(\.\d+)?)/i)||y}:u?B={name:"Sailfish",sailfish:k,version:e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?B={name:"SeaMonkey",seamonkey:k,version:e(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(i)?(B={name:"Firefox",firefox:k,version:e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(B.firefoxos=k)):s?B={name:"Amazon Silk",silk:k,version:e(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(i)?B={name:"PhantomJS",phantom:k,version:e(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(i)?B={name:"SlimerJS",slimer:k,version:e(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?B={name:"BlackBerry",blackberry:k,version:y||e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:f?(B={name:"WebOS",webos:k,version:y||e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(B.touchpad=k)):/bada/i.test(i)?B={name:"Bada",bada:k,version:e(/dolfin\/(\d+(\.\d+)?)/i)}:c?B={name:"Tizen",tizen:k,version:e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||y}:/qupzilla/i.test(i)?B={name:"QupZilla",qupzilla:k,version:e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||y}:/chromium/i.test(i)?B={name:"Chromium",chromium:k,version:e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||y}:/chrome|crios|crmo/i.test(i)?B={name:"Chrome",chrome:k,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:n?B={name:"Android",version:y}:/safari|applewebkit/i.test(i)?(B={name:"Safari",safari:k},y&&(B.version=y)):t?(B={name:"iphone"==t?"iPhone":"ipad"==t?"iPad":"iPod"},y&&(B.version=y)):B=/googlebot/i.test(i)?{name:"Googlebot",googlebot:k,version:e(/googlebot\/(\d+(\.\d+))/i)||y}:{name:e(/^(.*)\/(.*) /),version:a(/^(.*)\/(.*) /)},!B.msedge&&/(apple)?webkit/i.test(i)?(/(apple)?webkit\/537\.36/i.test(i)?(B.name=B.name||"Blink",B.blink=k):(B.name=B.name||"Webkit",B.webkit=k),!B.version&&y&&(B.version=y)):!B.opera&&/gecko\//i.test(i)&&(B.name=B.name||"Gecko",B.gecko=k,B.version=B.version||e(/gecko\/(\d+(\.\d+)?)/i)),B.msedge||!n&&!B.silk?t?(B[t]=k,B.ios=k):h?B.mac=k:L?B.xbox=k:p?B.windows=k:b&&(B.linux=k):B.android=k;var b="";B.windowsphone?b=e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):t?b=(b=e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):n?b=e(/android[ \/-](\d+(\.\d+)*)/i):B.webos?b=e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):B.blackberry?b=e(/rim\stablet\sos\s(\d+(\.\d+)*)/i):B.bada?b=e(/bada\/(\d+(\.\d+)*)/i):B.tizen&&(b=e(/tizen[\/\s](\d+(\.\d+)*)/i)),b&&(B.osversion=b);var b=b.split(".")[0];return v||l||"ipad"==t||n&&(3==b||4<=b&&!w)||B.silk?B.tablet=k:(w||"iphone"==t||"ipod"==t||n||r||B.blackberry||B.webos||B.bada)&&(B.mobile=k),B.msedge||B.msie&&10<=B.version||B.yandexbrowser&&15<=B.version||B.vivaldi&&1<=B.version||B.chrome&&20<=B.version||B.firefox&&20<=B.version||B.safari&&6<=B.version||B.opera&&10<=B.version||B.ios&&B.osversion&&6<=B.osversion.split(".")[0]||B.blackberry&&10.1<=B.version||B.chromium&&20<=B.version?B.a=k:B.msie&&B.version<10||B.chrome&&B.version<20||B.firefox&&B.version<20||B.safari&&B.version<6||B.opera&&B.version<10||B.ios&&B.osversion&&B.osversion.split(".")[0]<6||B.chromium&&B.version<20?B.c=k:B.x=k,B}var l=r("undefined"!=typeof navigator?navigator.userAgent:"");function t(e){return e.split(".").length}function o(e,i){var a=[],t;if(Array.prototype.map)return Array.prototype.map.call(e,i);for(t=0;t<e.length;t++)a.push(i(e[t]));return a}function d(e){for(var a=Math.max(t(e[0]),t(e[1])),i=o(e,function(e){var i=a-t(e);return o((e+=new Array(1+i).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});0<=--a;){if(i[0][a]>i[1][a])return 1;if(i[0][a]!==i[1][a])return-1;if(0===a)return 0}}function n(e,i,a){var t=l;"string"==typeof i&&(a=i,i=void 0),void 0===i&&(i=!1);var o=""+(t=a?r(a):t).version,n;for(n in e)if(e.hasOwnProperty(n)&&t[n])return d([o,e[n]])<0;return i}function e(e,i,a){return!n(e,i,a)}return l.test=function(e){for(var i=0;i<e.length;++i){var a=e[i];if("string"==typeof a&&a in l)return!0}return!1},l.isUnsupportedBrowser=n,l.compareVersions=d,l.check=e,l._detect=r,l}),function(a){UABBTrigger={triggerHook:function(e,i){a("body").trigger("uabb-trigger."+e,i)},addHook:function(e,i){a("body").on("uabb-trigger."+e,i)},removeHook:function(e,i){a("body").off("uabb-trigger."+e,i)}}}(jQuery),jQuery(document).ready(function(e){var i,a,t,a;"undefined"!=typeof bowser&&null!==bowser&&(a=bowser.version,a=(t=(i=bowser.name).replace(/\s+/g,"-").toLowerCase())+parseInt(a),e("html").addClass(t).addClass(a)),e(".uabb-row-separator").parents("html").css("overflow-x","hidden")});var wpAjaxUrl="https://islamicscholarshipfund.org/wp-admin/admin-ajax.php",flBuilderUrl="https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1e3,easing:"swing",offset:100},paths:{pluginUrl:"https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",wpAjaxUrl:"https://islamicscholarshipfund.org/wp-admin/admin-ajax.php"},breakpoints:{small:768,medium:992,large:1200},waypoint:{offset:80}},UABBNumber;!function(b){"undefined"==typeof FLBuilderLayout&&(FLBuilderLayout={init:function(){FLBuilderLayout._destroy(),FLBuilderLayout._initClasses(),FLBuilderLayout._initBackgrounds(),FLBuilderLayout._initRowShapeLayerHeight(),0===b(".fl-builder-edit").length&&(FLBuilderLayout._initModuleAnimations(),FLBuilderLayout._initAnchorLinks(),FLBuilderLayout._initHash(),FLBuilderLayout._initForms(),FLBuilderLayout._reorderMenu())},refreshGalleries:function(e){var i=b(void 0===e?"body":e),a=i.find(".fl-mosaicflow-content"),e=i.find(".fl-gallery"),i=null;a&&(i=a.data("mosaicflow"))&&(i.columns=b([]),i.columnsHeights=[],a.data("mosaicflow",i),a.mosaicflow("refill")),e&&e.trigger("refreshWookmark")},refreshGridLayout:function(e){var i,e=b(void 0===e?"body":e).find(".masonry");e.length&&e.masonry("layout")},reloadSlider:function(e){var e=b(void 0===e?"body":e);0<e.find(".bx-viewport > div").length&&b.each(e.find(".bx-viewport > div"),function(e,i){setTimeout(function(){b(i).data("bxSlider").reloadSlider()},100)})},resizeAudio:function(e){var i,e=b(void 0===e?"body":e).find(".wp-audio-shortcode.mejs-audio"),a=null,t=null,o=null,n=400;e.length&&"undefined"!=typeof mejs&&e.each(function(){a=b(this),t=mejs.players[a.attr("id")],o=a.find(".mejs-controls .mejs-time-rail");var e=a.find(".mejs-inner"),i=a.find(".mejs-controls .mejs-time-total");void 0!==t&&(n=Math.ceil(.8*a.width()),e.length&&(o.css("width",n+"px!important"),t.options.autosizeProgress=!0,setTimeout(function(){t.setControlsSize()},50),a.find(".mejs-inner").css({visibility:"visible",height:"inherit"})))})},preloadAudio:function(e){var i=b(void 0===e?"body":e),e=i.closest(".fl-accordion-item"),i=i.find(".wp-audio-shortcode.mejs-audio");!e.hasClass("fl-accordion-item-active")&&i.find(".mejs-inner").length&&i.find(".mejs-inner").css({visibility:"hidden",height:0})},resizeSlideshow:function(){"undefined"!=typeof YUI&&YUI().use("node-event-simulate",function(e){e.one(window).simulate("resize")})},reloadGoogleMap:function(e){var i,e=b(void 0===e?"body":e).find('iframe[src*="google.com/maps"]');e.length&&e.attr("src",function(e,i){return i})},_destroy:function(){var e=b(window);e.off("scroll.fl-bg-parallax"),e.off("resize.fl-bg-video")},_isTouch:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initClasses:function(){var e=b("body"),i=navigator.userAgent;!e.hasClass("archive")&&0<b(".fl-builder-content-primary").length&&e.addClass("fl-builder"),FLBuilderLayout._isTouch()&&e.addClass("fl-builder-touch"),FLBuilderLayout._isMobile()&&e.addClass("fl-builder-mobile"),b(window).width()<FLBuilderLayoutConfig.breakpoints.small&&e.addClass("fl-builder-breakpoint-small"),b(window).width()>FLBuilderLayoutConfig.breakpoints.small&&b(window).width()<FLBuilderLayoutConfig.breakpoints.medium&&e.addClass("fl-builder-breakpoint-medium"),b(window).width()>FLBuilderLayoutConfig.breakpoints.medium&&b(window).width()<FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-large"),b(window).width()>FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-default"),-1<i.indexOf("Trident/7.0")&&-1<i.indexOf("rv:11.0")&&e.addClass("fl-builder-ie-11")},_initBackgrounds:function(){var e=b(window),i;0<b(".fl-row-bg-parallax").length&&!FLBuilderLayout._isMobile()&&(FLBuilderLayout._scrollParallaxBackgrounds(),FLBuilderLayout._initParallaxBackgrounds(),e.on("resize.fl-bg-parallax",FLBuilderLayout._initParallaxBackgrounds),e.on("scroll.fl-bg-parallax",FLBuilderLayout._scrollParallaxBackgrounds)),0<b(".fl-bg-video").length&&(FLBuilderLayout._initBgVideos(),FLBuilderLayout._resizeBgVideos(),i=null,e.on("resize.fl-bg-video",function(e){clearTimeout(i),i=setTimeout(function(){FLBuilderLayout._resizeBgVideos(e)},100)}))},_initParallaxBackgrounds:function(){b(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground)},_initParallaxBackground:function(){var e=b(this),i=e.find("> .fl-row-content-wrap"),a=b(window).width(),t="",o={default:"",medium:"",responsive:""};o.default=e.data("parallax-image")||"",o.medium=e.data("parallax-image-medium")||o.default,o.responsive=e.data("parallax-image-responsive")||o.medium,a>FLBuilderLayoutConfig.breakpoints.medium?t="default":a>FLBuilderLayoutConfig.breakpoints.small&&a<=FLBuilderLayoutConfig.breakpoints.medium?t="medium":a<=FLBuilderLayoutConfig.breakpoints.small&&(t="responsive"),i.css("background-image","url("+o[t]+")"),e.data("current-image-loaded",t)},_scrollParallaxBackgrounds:function(){b(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground)},_scrollParallaxBackground:function(){var e=b(window),i=b(this),a=i.find("> .fl-row-content-wrap"),t=i.data("parallax-speed"),o=a.offset(),t=-(e.scrollTop()-o.top)/t,i=null!=i.data("parallax-offset")?i.data("parallax-offset"):0,n;a.css("background-position","center "+(t-i)+"px")},_initBgVideos:function(){b(".fl-bg-video").each(FLBuilderLayout._initBgVideo)},_initBgVideo:function(){var e=b(this),i=e.data("width"),a=e.data("height"),t=e.data("mp4"),o=e.data("youtube"),n=e.data("vimeo"),r=e.data("mp4-type"),l=e.data("webm"),d=e.data("webm-type"),s=e.data("fallback"),u=e.data("loaded"),c=e.data("video-mobile"),f="",m=null,p=null,h=null;u||(m=b("<video autoplay loop muted playsinline></video>"),void 0!==s&&""!=s&&(m.attr("poster","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),m.css({backgroundImage:'url("'+s+'")',backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"})),void 0!==t&&""!=t&&((p=b("<source />")).attr("src",t),p.attr("type",r),m.append(p)),void 0!==l&&""!=l&&((h=b("<source />")).attr("src",l),h.attr("type",d),m.append(h)),!FLBuilderLayout._isMobile()||FLBuilderLayout._isMobile()&&"yes"==c?void 0!==o?FLBuilderLayout._initYoutubeBgVideo.apply(this):void 0!==n?FLBuilderLayout._initVimeoBgVideo.apply(this):e.append(m):(m.attr("src",""),e.append(m)),e.data("loaded",!0))},_initYoutubeBgVideo:function(){var a=b(this),e=a.data("video-id"),t=a.find(".fl-bg-video-player"),o=a.data("enable-audio"),n=a.find(".fl-bg-video-audio"),r=void 0!==a.data("start")?a.data("start"):0,r=void 0!==a.data("t")&&0===r?a.data("t"):r,l=void 0!==a.data("end")?a.data("end"):0,d=void 0!==a.data("loop")?a.data("loop"):1,s=0,u,c;e&&(fallback=a.data("fallback")||!1,fallback&&(a.find("iframe").remove(),fallbackTag=b("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+a.data("fallback")+")"),fallbackTag.css("background-size","cover"),fallbackTag.css("transition","background-image 1s"),a.append(fallbackTag),c=!0),FLBuilderLayout._onYoutubeApiReady(function(i){setTimeout(function(){u=new i.Player(t[0],{videoId:e,events:{onReady:function(e){"no"===o||FLBuilderLayout._isMobile()?e.target.mute():"yes"===o&&e.target.isMuted&&e.target.unMute(),a.data("YTPlayer",u),FLBuilderLayout._resizeYoutubeBgVideo.apply(a),e.target.playVideo(),0<n.length&&!FLBuilderLayout._isMobile()&&n.on("click",{button:n,player:u},FLBuilderLayout._toggleBgVideoAudio)},onStateChange:function(e){1===e.data&&c&&b(".fl-bg-video-fallback").css("background-image","url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"),s<4&&s++,1<s&&(-1===e.data||2===e.data)&&"yes"===o&&(u.mute(),u.playVideo(),n.show()),e.data===i.PlayerState.ENDED&&1===d&&(0<r?u.seekTo(r):u.playVideo())},onError:function(e){console.info("YT Error: "+e.data),FLBuilderLayout._onErrorYoutubeVimeo(a)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:r,end:l}})},1)}))},_onErrorYoutubeVimeo:function(e){if(fallback=e.data("fallback")||!1,!fallback)return!1;e.find("iframe").remove(),fallbackTag=b("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+e.data("fallback")+")"),e.append(fallbackTag)},_onYoutubeApiReady:function(e){window.YT&&YT.loaded?e(YT):setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(e)},350)},_initVimeoBgVideo:function(){var i=b(this),e=i.data("video-id"),a=i.find(".fl-bg-video-player"),t=i.data("enable-audio"),o=i.find(".fl-bg-video-audio"),e,n=i.outerWidth(),r=navigator.userAgent;"undefined"!=typeof Vimeo&&e&&(e=new Vimeo.Player(a[0],{id:e,loop:!0,title:!1,portrait:!1,background:!0,autopause:!1,muted:!0}),i.data("VMPlayer",e),"no"===t?e.setVolume(0):"yes"===t&&(-1<r.indexOf("Safari")||-1<r.indexOf("Chrome")||-1<r.indexOf("Firefox")?(e.setVolume(0),o.show()):e.setVolume(1)),e.play().catch(function(e){FLBuilderLayout._onErrorYoutubeVimeo(i)}),0<o.length&&o.on("click",{button:o,player:e},FLBuilderLayout._toggleBgVideoAudio))},_toggleBgVideoAudio:function(e){var i=e.data.player,a=e.data.button.find(".fl-audio-control");a.hasClass("fa-volume-off")?(a.removeClass("fa-volume-off").addClass("fa-volume-up"),e.data.button.find(".fa-times").hide(),"function"==typeof i.unMute?i.unMute():i.setVolume(1)):(a.removeClass("fa-volume-up").addClass("fa-volume-off"),e.data.button.find(".fa-times").show(),"function"==typeof i.unMute?i.mute():i.setVolume(0))},_videoBgSourceError:function(e){var i=b(e.target),a=i.closest(".fl-bg-video"),t=a.find("video"),o=a.data("fallback"),e="";i.remove(),t.find("source").length||""!==o&&((e=b("<div></div>")).addClass("fl-bg-video-fallback"),e.css("background-image","url("+o+")"),a.append(e),t.remove())},_resizeBgVideos:function(){b(".fl-bg-video").each(function(){FLBuilderLayout._resizeBgVideo.apply(this),0<b(this).parent().find("img").length&&b(this).parent().imagesLoaded(b.proxy(FLBuilderLayout._resizeBgVideo,this))})},_resizeBgVideo:function(){if(0!==b(this).find("video").length||0!==b(this).find("iframe").length){var e=b(this),i=e.outerHeight(),a=e.outerWidth(),t=e.find("video"),o=e.data("height"),n=e.data("width"),r=a,l=Math.round(o*a/n),d=0,s=0,u=e.find("iframe"),c=b(this).closest(".fl-row-bg-video").hasClass("fl-row-full-height"),f={top:"50%",left:"50%",transform:"translate(-50%,-50%)"};if(t.length){if(""===o||void 0===o||""===n||void 0===n)return t.css({left:"0px",top:"0px",width:r+"px"}),void t.on("loadedmetadata",FLBuilderLayout._resizeOnLoadedMeta);c||(l<i?(l=i,d=-(r-a)/2,r=o?Math.round(n*i/o):r):s=-(l-i)/2,f={left:d+"px",top:s+"px",height:l+"px",width:r+"px"}),t.css(f)}else u.length&&void 0!==e.data("youtube")&&FLBuilderLayout._resizeYoutubeBgVideo.apply(this)}},_resizeOnLoadedMeta:function(){var e=b(this),i=e.parent().outerHeight(),a=e.parent().outerWidth(),t=e[0].videoWidth,o=e[0].videoHeight,n=Math.round(o*a/t),r=a,l=0,d=0;n<i?(n=i,l=-((r=Math.round(t*i/o))-a)/2):d=-(n-i)/2,e.parent().data("width",t),e.parent().data("height",o),e.css({left:l+"px",top:d+"px",width:r+"px",height:n+"px"})},_resizeYoutubeBgVideo:function(){var e=b(this),i=e.outerWidth(),a=e.outerHeight(),t=e.data("YTPlayer"),o=t?t.getIframe():null,n,r="16:9".split(":"),e=r[0]/r[1],l,d,t=e<i/a,r=t?i:a*e,a=t?i/e:a;o&&b(o).width(r).height(a)},_initModuleAnimations:function(){void 0!==jQuery.fn.waypoint&&b(".fl-animation").each(function(){var e=b(this),i=e.offset().top,a=b(window).height(),t=b("body").height(),o,n="80%";FLBuilderLayoutConfig.waypoint.offset,n=FLBuilderLayoutConfig.waypoint.offset+"%",e.waypoint({offset:n=t-i<.2*a?"100%":n,handler:FLBuilderLayout._doModuleAnimation})})},_doModuleAnimation:function(){var e=void 0===this.element?b(this):b(this.element),i=parseFloat(e.data("animation-delay")),a=parseFloat(e.data("animation-duration"));isNaN(a)||e.css("animation-duration",a+"s"),!isNaN(i)&&0<i?setTimeout(function(){e.addClass("fl-animated")},1e3*i):setTimeout(function(){e.addClass("fl-animated")},1)},_initHash:function(){var e=window.location.hash.replace("#","").split("/").shift(),i=null,a=null,t=null,o=null,n=null;if(""!==e)try{0<(i=b("#"+e)).length&&(i.hasClass("fl-accordion-item")&&setTimeout(function(){i.find(".fl-accordion-button").trigger("click")},100),i.hasClass("fl-tabs-panel")&&setTimeout(function(){a=i.closest(".fl-tabs"),t=i.find(".fl-tabs-panel-label"),o=t.data("index"),(n=a.find(".fl-tabs-labels .fl-tabs-label[data-index="+o+"]"))[0].click(),FLBuilderLayout._scrollToElement(i)},100))}catch(e){}},_initAnchorLinks:function(){b("a").each(FLBuilderLayout._initAnchorLink)},_initAnchorLink:function(){var e=b(this),i=e.attr("href"),a=window.location,t=null,o=null,n=!1;if(void 0!==i&&-1<i.indexOf("#")&&e.closest("svg").length<1&&a.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&a.hostname==this.hostname)try{if(!(t=i.split("#").pop()))return;0<(o=b("#"+t)).length&&(n=o.hasClass("fl-row")||o.hasClass("fl-col")||o.hasClass("fl-module"),o.hasClass("fl-no-scroll")||!e.hasClass("fl-scroll-link")&&!n||b(e).on("click",FLBuilderLayout._scrollToElementOnLinkClick),o.hasClass("fl-accordion-item")&&b(e).on("click",FLBuilderLayout._scrollToAccordionOnLinkClick),o.hasClass("fl-tabs-panel")&&b(e).on("click",FLBuilderLayout._scrollToTabOnLinkClick))}catch(e){}},_scrollToElementOnLinkClick:function(e,i){var a=b("#"+b(this).attr("href").split("#").pop());FLBuilderLayout._scrollToElement(a,i),e.preventDefault()},_scrollToElement:function(e,i){var a=FLBuilderLayoutConfig.anchorLinkAnimations,t=0,o=b(window),n=b(document);0<e.length&&(t="fixed"===e.css("position")||"fixed"===e.parent().css("position")?e.position().top:e.offset().top>n.height()-o.height()?n.height()-o.height():e.offset().top-a.offset,b("html, body").animate({scrollTop:t},a.duration,a.easing,function(){void 0!==i&&i(),null!=e.attr("id")&&(history.pushState?history.pushState(null,null,"#"+e.attr("id")):window.location.hash=e.attr("id"))}))},_scrollToAccordionOnLinkClick:function(e){var i=b("#"+b(this).attr("href").split("#").pop()),a;0<i.length&&FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&(i.find(".fl-accordion-button").trigger("click"),i=!1)})},_scrollToTabOnLinkClick:function(e){var i=b("#"+b(this).attr("href").split("#").pop()),a=null,t=null,o=null,n,a,o;0<i.length&&(a=i.closest(".fl-tabs"),o=i.find(".fl-tabs-panel-label"),tabIndex=o.data("index"),t=a.find(".fl-tabs-labels .fl-tabs-label[data-index="+tabIndex+"]"),o.is(":visible")?FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&o.trigger(b.Event("click",{which:1}))}):(t[0].click(),FLBuilderLayout._scrollToElement(i)),e.preventDefault())},_initForms:function(){FLBuilderLayout._hasPlaceholderSupport||b(".fl-form-field input").each(FLBuilderLayout._initFormFieldPlaceholderFallback),b(".fl-form-field input").on("focus",FLBuilderLayout._clearFormFieldError)},_hasPlaceholderSupport:function(){var e;return"undefined"!=document.createElement("input").placeholder},_initFormFieldPlaceholderFallback:function(){var e=b(this),i=e.val(),a=e.attr("placeholder");"undefined"!=a&&""===i&&(e.val(a),e.on("focus",FLBuilderLayout._hideFormFieldPlaceholderFallback),e.on("blur",FLBuilderLayout._showFormFieldPlaceholderFallback))},_hideFormFieldPlaceholderFallback:function(){var e=b(this),i,a;e.val()==e.attr("placeholder")&&e.val("")},_showFormFieldPlaceholderFallback:function(){var e=b(this),i=e.val(),a=e.attr("placeholder");""===i&&e.val(a)},_clearFormFieldError:function(){var e=b(this);e.removeClass("fl-form-error"),e.siblings(".fl-form-error-message").hide()},_initRowShapeLayerHeight:function(){FLBuilderLayout._adjustRowShapeLayerHeight(),b(window).on("resize",FLBuilderLayout._adjustRowShapeLayerHeight)},_adjustRowShapeLayerHeight:function(){var e=b(".fl-builder-shape-layer");b(e).each(function(e){var i=b(this),a=b(i).find("svg"),t=a.height(),o;i.is(".fl-builder-shape-circle, .fl-builder-shape-dot-cluster, .fl-builder-shape-topography, .fl-builder-shape-rect")||b(a).css("height",Math.ceil(t))})},_string_to_slug:function(e){return e=e.replace(/^\s+|\s+$/g,""),regex=void 0===window._fl_string_to_slug_regex?new RegExp("[^a-zA-Z0-9'\":() !.,-_|]","g"):new RegExp("[^"+window._fl_string_to_slug_regex+"'\":() !.,-_|\\p{Letter}]","ug"),e=e.replace(regex,"").replace(/\s+/g," ")},_reorderMenu:function(){1<b("#wp-admin-bar-fl-builder-frontend-edit-link-default li").length&&b("#wp-admin-bar-fl-builder-frontend-duplicate-link").appendTo("#wp-admin-bar-fl-builder-frontend-edit-link-default").css("padding-top","5px").css("border-top","2px solid #1D2125").css("margin-top","5px")}},b(function(){FLBuilderLayout.init()}))}(jQuery),function(s){(UABBNumber=function(e){this.nodeClass=".fl-node-"+e.id,this.wrapperClass=this.nodeClass+" .uabb-number",this.layout=e.layout,this.type=e.type,this.number=e.number,this.numberFormat=e.numberFormat,this.locale=e.locale,this.max=e.max,this.speed=e.speed,this.delay=e.delay,this.breakPoints=e.breakPoints,this.currentBrowserWidth=s(window).width(),this._initNumber()}).addCommas=function(e){var i=/(\d+)(\d{3})/;for(x=(e+="").split("."),x1=x[0],x2=1<x.length?"."+x[1]:"";i.test(x1);)x1=x1.replace(i,"$1,$2");return x1+x2},UABBNumber.prototype={nodeClass:"",wrapperClass:"",layout:"",type:"",number:0,numberFormat:"",locale:"",max:0,speed:0,delay:0,_initNumber:function(){var i=this;void 0!==jQuery.fn.waypoint?s(i.wrapperClass).waypoint({offset:"100%",triggerOnce:!0,handler:function(e){i._initCount()}}):i._initCount()},_initCount:function(){var e=this,i=s(e.wrapperClass).find(".uabb-number-string");!isNaN(e.delay)&&0<e.delay?setTimeout(function(){"circle"==e.layout?e._triggerCircle():"bars"==e.layout?e._triggerBar():"semi-circle"==e.layout&&e._triggerSemiCircle(),e._countNumber()}.bind(e),1e3*e.delay):("circle"==e.layout?e._triggerCircle():"bars"==e.layout?e._triggerBar():"semi-circle"==e.layout&&e._triggerSemiCircle(),e._countNumber())},_countNumber:function(){var e=this,i=s(e.wrapperClass).find(".uabb-number-string"),a=i.find(".uabb-number-int"),t=e.number,o,n,r,r,l,d;((current=0)<window.navigator.userAgent.indexOf("MSIE")||navigator.userAgent.match(/Trident\/7\./))&&(Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}),r=Number.isInteger(t)?0:t.toString().split(".")[1].length,i.hasClass("uabb-number-animated")||(l=e.numberFormat,d=e.locale.replace(/_/,"-"),a.prop("Counter",0).animate({Counter:e.number},{duration:e.speed,easing:"swing",step:function(e){var e,e,e;e="locale"==l?e.toLocaleString(d,{minimumFractionDigits:r,maximumFractionDigits:r}):"none"==l?e.toFixed(r):UABBNumber.addCommas(e.toFixed(r)),a.text(e)}}),i.addClass("uabb-number-animated"))},_triggerCircle:function(){var e=this,i=s(e.wrapperClass).find(".uabb-bar"),a=i.attr("r"),t=Math.PI*(2*a),o=e.number,a="percent"==e.type?100:e.max,t,t;a<(o=o<0?0:o)&&(o=a),t="percent"==e.type?(100-o)/100*t:(1-o/a)*t,i.animate({strokeDashoffset:t},{duration:e.speed,easing:"swing"})},_triggerSemiCircle:function(){var e=this,i=s(e.wrapperClass).find(".uabb-bar"),a=i.attr("r"),t=Math.PI*(2*a)/2,o=e.number,a="percent"==e.type?100:e.max,t,t;a<(o=o<0?0:o)&&(o=a),t="percent"==e.type?(100-o)/100*t:(1-o/a)*t,i.animate({strokeDashoffset:t},{duration:e.speed,easing:"swing"})},_triggerBar:function(){var e=this,i=s(e.wrapperClass).find(".uabb-number-bar"),a,a;a="percent"==e.type?100<e.number?100:e.number:e.number/e.max*100,i.animate({width:a+"%"},{duration:e.speed,easing:"swing"})}}}(jQuery),function(e){e(function(){new UABBNumber({id:"5f611393ccee7",layout:"default",type:"standard",number:574,numberFormat:"comma",locale:"en_US",max:574,speed:1e3,delay:1}),UABBTrigger.addHook("uabb-accordion-click",function(e,i){new UABBNumber({id:"5f611393ccee7",layout:"default",type:"standard",number:574,max:574,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-tab-click",function(e,i){new UABBNumber({id:"5f611393ccee7",layout:"default",type:"standard",number:574,max:574,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-modal-click",function(e,i){new UABBNumber({id:"5f611393ccee7",layout:"default",type:"standard",number:574,max:574,speed:1e3,delay:1})})})}(jQuery),function(e){e(function(){new UABBNumber({id:"5f611393cceea",layout:"default",type:"standard",number:3.06,numberFormat:"comma",locale:"en_US",max:3.06,speed:1e3,delay:1}),UABBTrigger.addHook("uabb-accordion-click",function(e,i){new UABBNumber({id:"5f611393cceea",layout:"default",type:"standard",number:3.06,max:3.06,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-tab-click",function(e,i){new UABBNumber({id:"5f611393cceea",layout:"default",type:"standard",number:3.06,max:3.06,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-modal-click",function(e,i){new UABBNumber({id:"5f611393cceea",layout:"default",type:"standard",number:3.06,max:3.06,speed:1e3,delay:1})})})}(jQuery),function(e){e(function(){new UABBNumber({id:"5f611393cceed",layout:"default",type:"standard",number:179e3,numberFormat:"comma",locale:"en_US",max:179e3,speed:1e3,delay:1}),UABBTrigger.addHook("uabb-accordion-click",function(e,i){new UABBNumber({id:"5f611393cceed",layout:"default",type:"standard",number:179e3,max:179e3,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-tab-click",function(e,i){new UABBNumber({id:"5f611393cceed",layout:"default",type:"standard",number:179e3,max:179e3,speed:1e3,delay:1})}),UABBTrigger.addHook("uabb-modal-click",function(e,i){new UABBNumber({id:"5f611393cceed",layout:"default",type:"standard",number:179e3,max:179e3,speed:1e3,delay:1})})})}(jQuery),function(e){jQuery(document).ready(function(){})}(jQuery),function(n){FLBuilderAccordion=function(e){this.settings=e,this.nodeClass=".fl-node-"+e.id,this.wasToggled=!1,this.expandOnTab=e.expandOnTab,this._init()},FLBuilderAccordion.prototype={settings:{},nodeClass:"",wasToggled:!1,expandOnTab:!1,_init:function(){n(this.nodeClass+" .fl-accordion-button").on("click",n.proxy(this._buttonClick,this)),n(this.nodeClass+" .fl-accordion-button").on("keypress",n.proxy(this._buttonClick,this)),n(this.nodeClass+" .fl-accordion-button-label").on("focusin",n.proxy(this._labelFocusIn,this)),n(this.nodeClass+" .fl-accordion-button").on("focusout",n.proxy(this._focusOut,this)),FLBuilderLayout.preloadAudio(this.nodeClass+" .fl-accordion-content"),this._openActiveAccordion()},_openActiveAccordion:function(e){var i=n(this.nodeClass+" .fl-accordion-item.fl-accordion-item-active");0<i.length&&i.find(".fl-accordion-content:first").show()},_labelFocusIn:function(e){var i=n(e.target).closest(".fl-accordion-button");e.relatedTarget&&this.expandOnTab&&(i.attr("aria-selected","true"),this._toggleAccordion(i),e.preventDefault(),e.stopImmediatePropagation(),this.wasToggled=!0)},_buttonClick:function(e){var i=n(e.target).closest(".fl-accordion-button"),a,t="fl-node-"+n(e.target).closest(".fl-module-accordion").data("node"),o=this.nodeClass.replace(".","");this._validClick(e)&&o===t&&(this.expandOnTab&&this.wasToggled?this.wasToggled=!1:(e.preventDefault(),e.stopPropagation(),this._toggleAccordion(i)))},_toggleAccordion:function(e){var i=e.closest(".fl-accordion"),a=e.closest(".fl-accordion-item"),t=i.find(".fl-accordion-content"),o=i.find(".fl-accordion-button i.fl-accordion-button-icon"),n=e.siblings(".fl-accordion-content"),r=e.find("i.fl-accordion-button-icon");i.hasClass("fl-accordion-collapse")&&(i.find("> .fl-accordion-item-active").removeClass("fl-accordion-item-active"),i.find("> .fl-accordion-button").attr("aria-expanded","false"),i.find("> .fl-accordion-content").attr("aria-hidden","true"),t.slideUp("normal"),0<o.find("svg").length?o.find("svg").attr("data-icon","plus"):(o.removeClass(this.settings.activeIcon),o.addClass(this.settings.labelIcon))),n.is(":hidden")?(e.attr("aria-expanded","true"),a.addClass("fl-accordion-item-active"),a.find(".fl-accordion-content").attr("aria-hidden","false"),n.slideDown("normal",this._slideDownComplete),0<r.find("svg").length?r.find("svg").attr("data-icon","minus"):(r.removeClass(this.settings.labelIcon),r.addClass(this.settings.activeIcon)),r.find("span").text("Collapse")):(e.attr("aria-expanded","false"),a.removeClass("fl-accordion-item-active"),a.find(".fl-accordion-content").attr("aria-hidden","true"),n.slideUp("normal",this._slideUpComplete),0<r.find("svg").length?r.find("svg").attr("data-icon","plus"):(r.removeClass(this.settings.activeIcon),r.addClass(this.settings.labelIcon)),r.find("span").text("Expand"))},_focusOut:function(e){var i;n(e.target).closest(".fl-accordion-button").attr("aria-selected","false")},_slideUpComplete:function(){var e,i;n(this).closest(".fl-accordion").trigger("fl-builder.fl-accordion-toggle-complete")},_slideDownComplete:function(){var e=n(this),i=e.closest(".fl-accordion"),a=e.parent(),t=n(window);FLBuilderLayout.refreshGalleries(e),FLBuilderLayout.refreshGridLayout(e),FLBuilderLayout.reloadSlider(e),FLBuilderLayout.resizeAudio(e),FLBuilderLayout.reloadGoogleMap(e),FLBuilderLayout.resizeSlideshow(),a.offset().top<t.scrollTop()+100&&n("html, body").animate({scrollTop:a.offset().top-100},500,"swing"),i.trigger("fl-builder.fl-accordion-toggle-complete")},_validClick:function(e){return 1==e.which||13==e.which||32==e.which||null==e.which}}}(jQuery),function(e){e(function(){new FLBuilderAccordion({id:"5f6118e821108",defaultItem:!1,labelIcon:"fas fa-plus",activeIcon:"fas fa-minus",expandOnTab:!1})})}(jQuery);