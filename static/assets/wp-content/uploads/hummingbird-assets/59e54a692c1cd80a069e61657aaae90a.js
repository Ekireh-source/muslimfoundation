/**handles:fl-builder-layout-27482**/
!function(e,i){"undefined"!=typeof module&&module.exports?module.exports=i():"function"==typeof define&&define.amd?define(e,i):this[e]=i()}("bowser",function(){var B=!0;function r(i){function e(e){var e=i.match(e);return e&&1<e.length&&e[1]||""}function o(e){var e=i.match(e);return e&&1<e.length&&e[2]||""}var a=e(/(ipod|iphone|ipad)/i).toLowerCase(),t,n=!/like android/i.test(i)&&/android/i.test(i),r=/nexus\s*[0-6]\s*/i.test(i),l=!r&&/nexus\s*[0-9]+/i.test(i),d=/CrOS/.test(i),s=/silk/i.test(i),u=/sailfish/i.test(i),f=/tizen/i.test(i),c=/(web|hpw)os/i.test(i),p=/windows phone/i.test(i),h=!p&&/windows/i.test(i),m=!a&&!s&&/macintosh/i.test(i),g=!n&&!u&&!f&&!c&&/linux/i.test(i),b=e(/edge\/(\d+(\.\d+)?)/i),v=e(/version\/(\d+(\.\d+)?)/i),y=/tablet/i.test(i),L=!y&&/[^-]mobi/i.test(i),w=/xbox/i.test(i),k;/opera|opr|opios/i.test(i)?k={name:"Opera",opera:B,version:v||e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(i)?k={name:"Opera Coast",coast:B,version:v||e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?k={name:"Yandex Browser",yandexbrowser:B,version:v||e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(i)?k={name:"UC Browser",ucbrowser:B,version:e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(i)?k={name:"Maxthon",maxthon:B,version:e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(i)?k={name:"Epiphany",epiphany:B,version:e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(i)?k={name:"Puffin",puffin:B,version:e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(i)?k={name:"Sleipnir",sleipnir:B,version:e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(i)?k={name:"K-Meleon",kMeleon:B,version:e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:p?(k={name:"Windows Phone",windowsphone:B},b?(k.msedge=B,k.version=b):(k.msie=B,k.version=e(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?k={name:"Internet Explorer",msie:B,version:e(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:d?k={name:"Chrome",chromeos:B,chromeBook:B,chrome:B,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?k={name:"Microsoft Edge",msedge:B,version:b}:/vivaldi/i.test(i)?k={name:"Vivaldi",vivaldi:B,version:e(/vivaldi\/(\d+(\.\d+)?)/i)||v}:u?k={name:"Sailfish",sailfish:B,version:e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?k={name:"SeaMonkey",seamonkey:B,version:e(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(i)?(k={name:"Firefox",firefox:B,version:e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(k.firefoxos=B)):s?k={name:"Amazon Silk",silk:B,version:e(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(i)?k={name:"PhantomJS",phantom:B,version:e(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(i)?k={name:"SlimerJS",slimer:B,version:e(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?k={name:"BlackBerry",blackberry:B,version:v||e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:c?(k={name:"WebOS",webos:B,version:v||e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(k.touchpad=B)):/bada/i.test(i)?k={name:"Bada",bada:B,version:e(/dolfin\/(\d+(\.\d+)?)/i)}:f?k={name:"Tizen",tizen:B,version:e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||v}:/qupzilla/i.test(i)?k={name:"QupZilla",qupzilla:B,version:e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||v}:/chromium/i.test(i)?k={name:"Chromium",chromium:B,version:e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||v}:/chrome|crios|crmo/i.test(i)?k={name:"Chrome",chrome:B,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:n?k={name:"Android",version:v}:/safari|applewebkit/i.test(i)?(k={name:"Safari",safari:B},v&&(k.version=v)):a?(k={name:"iphone"==a?"iPhone":"ipad"==a?"iPad":"iPod"},v&&(k.version=v)):k=/googlebot/i.test(i)?{name:"Googlebot",googlebot:B,version:e(/googlebot\/(\d+(\.\d+))/i)||v}:{name:e(/^(.*)\/(.*) /),version:o(/^(.*)\/(.*) /)},!k.msedge&&/(apple)?webkit/i.test(i)?(/(apple)?webkit\/537\.36/i.test(i)?(k.name=k.name||"Blink",k.blink=B):(k.name=k.name||"Webkit",k.webkit=B),!k.version&&v&&(k.version=v)):!k.opera&&/gecko\//i.test(i)&&(k.name=k.name||"Gecko",k.gecko=B,k.version=k.version||e(/gecko\/(\d+(\.\d+)?)/i)),k.msedge||!n&&!k.silk?a?(k[a]=B,k.ios=B):m?k.mac=B:w?k.xbox=B:h?k.windows=B:g&&(k.linux=B):k.android=B;var g="";k.windowsphone?g=e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):a?g=(g=e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):n?g=e(/android[ \/-](\d+(\.\d+)*)/i):k.webos?g=e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):k.blackberry?g=e(/rim\stablet\sos\s(\d+(\.\d+)*)/i):k.bada?g=e(/bada\/(\d+(\.\d+)*)/i):k.tizen&&(g=e(/tizen[\/\s](\d+(\.\d+)*)/i)),g&&(k.osversion=g);var g=g.split(".")[0];return y||l||"ipad"==a||n&&(3==g||4<=g&&!L)||k.silk?k.tablet=B:(L||"iphone"==a||"ipod"==a||n||r||k.blackberry||k.webos||k.bada)&&(k.mobile=B),k.msedge||k.msie&&10<=k.version||k.yandexbrowser&&15<=k.version||k.vivaldi&&1<=k.version||k.chrome&&20<=k.version||k.firefox&&20<=k.version||k.safari&&6<=k.version||k.opera&&10<=k.version||k.ios&&k.osversion&&6<=k.osversion.split(".")[0]||k.blackberry&&10.1<=k.version||k.chromium&&20<=k.version?k.a=B:k.msie&&k.version<10||k.chrome&&k.version<20||k.firefox&&k.version<20||k.safari&&k.version<6||k.opera&&k.version<10||k.ios&&k.osversion&&k.osversion.split(".")[0]<6||k.chromium&&k.version<20?k.c=B:k.x=B,k}var l=r("undefined"!=typeof navigator?navigator.userAgent:"");function a(e){return e.split(".").length}function t(e,i){var o=[],a;if(Array.prototype.map)return Array.prototype.map.call(e,i);for(a=0;a<e.length;a++)o.push(i(e[a]));return o}function d(e){for(var o=Math.max(a(e[0]),a(e[1])),i=t(e,function(e){var i=o-a(e);return t((e+=new Array(1+i).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});0<=--o;){if(i[0][o]>i[1][o])return 1;if(i[0][o]!==i[1][o])return-1;if(0===o)return 0}}function n(e,i,o){var a=l;"string"==typeof i&&(o=i,i=void 0),void 0===i&&(i=!1);var t=""+(a=o?r(o):a).version,n;for(n in e)if(e.hasOwnProperty(n)&&a[n])return d([t,e[n]])<0;return i}function e(e,i,o){return!n(e,i,o)}return l.test=function(e){for(var i=0;i<e.length;++i){var o=e[i];if("string"==typeof o&&o in l)return!0}return!1},l.isUnsupportedBrowser=n,l.compareVersions=d,l.check=e,l._detect=r,l}),function(o){UABBTrigger={triggerHook:function(e,i){o("body").trigger("uabb-trigger."+e,i)},addHook:function(e,i){o("body").on("uabb-trigger."+e,i)},removeHook:function(e,i){o("body").off("uabb-trigger."+e,i)}}}(jQuery),jQuery(document).ready(function(e){var i,o,a,o;"undefined"!=typeof bowser&&null!==bowser&&(o=bowser.version,o=(a=(i=bowser.name).replace(/\s+/g,"-").toLowerCase())+parseInt(o),e("html").addClass(a).addClass(o)),e(".uabb-row-separator").parents("html").css("overflow-x","hidden")});var wpAjaxUrl="https://islamicscholarshipfund.org/wp-admin/admin-ajax.php",flBuilderUrl="https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1e3,easing:"swing",offset:100},paths:{pluginUrl:"https://islamicscholarshipfund.org/wp-content/plugins/bb-plugin/",wpAjaxUrl:"https://islamicscholarshipfund.org/wp-admin/admin-ajax.php"},breakpoints:{small:768,medium:992,large:1200},waypoint:{offset:80}};!function(g){"undefined"==typeof FLBuilderLayout&&(FLBuilderLayout={init:function(){FLBuilderLayout._destroy(),FLBuilderLayout._initClasses(),FLBuilderLayout._initBackgrounds(),FLBuilderLayout._initRowShapeLayerHeight(),0===g(".fl-builder-edit").length&&(FLBuilderLayout._initModuleAnimations(),FLBuilderLayout._initAnchorLinks(),FLBuilderLayout._initHash(),FLBuilderLayout._initForms(),FLBuilderLayout._reorderMenu())},refreshGalleries:function(e){var i=g(void 0===e?"body":e),o=i.find(".fl-mosaicflow-content"),e=i.find(".fl-gallery"),i=null;o&&(i=o.data("mosaicflow"))&&(i.columns=g([]),i.columnsHeights=[],o.data("mosaicflow",i),o.mosaicflow("refill")),e&&e.trigger("refreshWookmark")},refreshGridLayout:function(e){var i,e=g(void 0===e?"body":e).find(".masonry");e.length&&e.masonry("layout")},reloadSlider:function(e){var e=g(void 0===e?"body":e);0<e.find(".bx-viewport > div").length&&g.each(e.find(".bx-viewport > div"),function(e,i){setTimeout(function(){g(i).data("bxSlider").reloadSlider()},100)})},resizeAudio:function(e){var i,e=g(void 0===e?"body":e).find(".wp-audio-shortcode.mejs-audio"),o=null,a=null,t=null,n=400;e.length&&"undefined"!=typeof mejs&&e.each(function(){o=g(this),a=mejs.players[o.attr("id")],t=o.find(".mejs-controls .mejs-time-rail");var e=o.find(".mejs-inner"),i=o.find(".mejs-controls .mejs-time-total");void 0!==a&&(n=Math.ceil(.8*o.width()),e.length&&(t.css("width",n+"px!important"),a.options.autosizeProgress=!0,setTimeout(function(){a.setControlsSize()},50),o.find(".mejs-inner").css({visibility:"visible",height:"inherit"})))})},preloadAudio:function(e){var i=g(void 0===e?"body":e),e=i.closest(".fl-accordion-item"),i=i.find(".wp-audio-shortcode.mejs-audio");!e.hasClass("fl-accordion-item-active")&&i.find(".mejs-inner").length&&i.find(".mejs-inner").css({visibility:"hidden",height:0})},resizeSlideshow:function(){"undefined"!=typeof YUI&&YUI().use("node-event-simulate",function(e){e.one(window).simulate("resize")})},reloadGoogleMap:function(e){var i,e=g(void 0===e?"body":e).find('iframe[src*="google.com/maps"]');e.length&&e.attr("src",function(e,i){return i})},_destroy:function(){var e=g(window);e.off("scroll.fl-bg-parallax"),e.off("resize.fl-bg-video")},_isTouch:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initClasses:function(){var e=g("body"),i=navigator.userAgent;!e.hasClass("archive")&&0<g(".fl-builder-content-primary").length&&e.addClass("fl-builder"),FLBuilderLayout._isTouch()&&e.addClass("fl-builder-touch"),FLBuilderLayout._isMobile()&&e.addClass("fl-builder-mobile"),g(window).width()<FLBuilderLayoutConfig.breakpoints.small&&e.addClass("fl-builder-breakpoint-small"),g(window).width()>FLBuilderLayoutConfig.breakpoints.small&&g(window).width()<FLBuilderLayoutConfig.breakpoints.medium&&e.addClass("fl-builder-breakpoint-medium"),g(window).width()>FLBuilderLayoutConfig.breakpoints.medium&&g(window).width()<FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-large"),g(window).width()>FLBuilderLayoutConfig.breakpoints.large&&e.addClass("fl-builder-breakpoint-default"),-1<i.indexOf("Trident/7.0")&&-1<i.indexOf("rv:11.0")&&e.addClass("fl-builder-ie-11")},_initBackgrounds:function(){var e=g(window),i;0<g(".fl-row-bg-parallax").length&&!FLBuilderLayout._isMobile()&&(FLBuilderLayout._scrollParallaxBackgrounds(),FLBuilderLayout._initParallaxBackgrounds(),e.on("resize.fl-bg-parallax",FLBuilderLayout._initParallaxBackgrounds),e.on("scroll.fl-bg-parallax",FLBuilderLayout._scrollParallaxBackgrounds)),0<g(".fl-bg-video").length&&(FLBuilderLayout._initBgVideos(),FLBuilderLayout._resizeBgVideos(),i=null,e.on("resize.fl-bg-video",function(e){clearTimeout(i),i=setTimeout(function(){FLBuilderLayout._resizeBgVideos(e)},100)}))},_initParallaxBackgrounds:function(){g(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground)},_initParallaxBackground:function(){var e=g(this),i=e.find("> .fl-row-content-wrap"),o=g(window).width(),a="",t={default:"",medium:"",responsive:""};t.default=e.data("parallax-image")||"",t.medium=e.data("parallax-image-medium")||t.default,t.responsive=e.data("parallax-image-responsive")||t.medium,o>FLBuilderLayoutConfig.breakpoints.medium?a="default":o>FLBuilderLayoutConfig.breakpoints.small&&o<=FLBuilderLayoutConfig.breakpoints.medium?a="medium":o<=FLBuilderLayoutConfig.breakpoints.small&&(a="responsive"),i.css("background-image","url("+t[a]+")"),e.data("current-image-loaded",a)},_scrollParallaxBackgrounds:function(){g(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground)},_scrollParallaxBackground:function(){var e=g(window),i=g(this),o=i.find("> .fl-row-content-wrap"),a=i.data("parallax-speed"),t=o.offset(),a=-(e.scrollTop()-t.top)/a,i=null!=i.data("parallax-offset")?i.data("parallax-offset"):0,n;o.css("background-position","center "+(a-i)+"px")},_initBgVideos:function(){g(".fl-bg-video").each(FLBuilderLayout._initBgVideo)},_initBgVideo:function(){var e=g(this),i=e.data("width"),o=e.data("height"),a=e.data("mp4"),t=e.data("youtube"),n=e.data("vimeo"),r=e.data("mp4-type"),l=e.data("webm"),d=e.data("webm-type"),s=e.data("fallback"),u=e.data("loaded"),f=e.data("video-mobile"),c="",p=null,h=null,m=null;u||(p=g("<video autoplay loop muted playsinline></video>"),void 0!==s&&""!=s&&(p.attr("poster","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),p.css({backgroundImage:'url("'+s+'")',backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"})),void 0!==a&&""!=a&&((h=g("<source />")).attr("src",a),h.attr("type",r),p.append(h)),void 0!==l&&""!=l&&((m=g("<source />")).attr("src",l),m.attr("type",d),p.append(m)),!FLBuilderLayout._isMobile()||FLBuilderLayout._isMobile()&&"yes"==f?void 0!==t?FLBuilderLayout._initYoutubeBgVideo.apply(this):void 0!==n?FLBuilderLayout._initVimeoBgVideo.apply(this):e.append(p):(p.attr("src",""),e.append(p)),e.data("loaded",!0))},_initYoutubeBgVideo:function(){var o=g(this),e=o.data("video-id"),a=o.find(".fl-bg-video-player"),t=o.data("enable-audio"),n=o.find(".fl-bg-video-audio"),r=void 0!==o.data("start")?o.data("start"):0,r=void 0!==o.data("t")&&0===r?o.data("t"):r,l=void 0!==o.data("end")?o.data("end"):0,d=void 0!==o.data("loop")?o.data("loop"):1,s=0,u,f;e&&(fallback=o.data("fallback")||!1,fallback&&(o.find("iframe").remove(),fallbackTag=g("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+o.data("fallback")+")"),fallbackTag.css("background-size","cover"),fallbackTag.css("transition","background-image 1s"),o.append(fallbackTag),f=!0),FLBuilderLayout._onYoutubeApiReady(function(i){setTimeout(function(){u=new i.Player(a[0],{videoId:e,events:{onReady:function(e){"no"===t||FLBuilderLayout._isMobile()?e.target.mute():"yes"===t&&e.target.isMuted&&e.target.unMute(),o.data("YTPlayer",u),FLBuilderLayout._resizeYoutubeBgVideo.apply(o),e.target.playVideo(),0<n.length&&!FLBuilderLayout._isMobile()&&n.on("click",{button:n,player:u},FLBuilderLayout._toggleBgVideoAudio)},onStateChange:function(e){1===e.data&&f&&g(".fl-bg-video-fallback").css("background-image","url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"),s<4&&s++,1<s&&(-1===e.data||2===e.data)&&"yes"===t&&(u.mute(),u.playVideo(),n.show()),e.data===i.PlayerState.ENDED&&1===d&&(0<r?u.seekTo(r):u.playVideo())},onError:function(e){console.info("YT Error: "+e.data),FLBuilderLayout._onErrorYoutubeVimeo(o)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:r,end:l}})},1)}))},_onErrorYoutubeVimeo:function(e){if(fallback=e.data("fallback")||!1,!fallback)return!1;e.find("iframe").remove(),fallbackTag=g("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+e.data("fallback")+")"),e.append(fallbackTag)},_onYoutubeApiReady:function(e){window.YT&&YT.loaded?e(YT):setTimeout(function(){FLBuilderLayout._onYoutubeApiReady(e)},350)},_initVimeoBgVideo:function(){var i=g(this),e=i.data("video-id"),o=i.find(".fl-bg-video-player"),a=i.data("enable-audio"),t=i.find(".fl-bg-video-audio"),e,n=i.outerWidth(),r=navigator.userAgent;"undefined"!=typeof Vimeo&&e&&(e=new Vimeo.Player(o[0],{id:e,loop:!0,title:!1,portrait:!1,background:!0,autopause:!1,muted:!0}),i.data("VMPlayer",e),"no"===a?e.setVolume(0):"yes"===a&&(-1<r.indexOf("Safari")||-1<r.indexOf("Chrome")||-1<r.indexOf("Firefox")?(e.setVolume(0),t.show()):e.setVolume(1)),e.play().catch(function(e){FLBuilderLayout._onErrorYoutubeVimeo(i)}),0<t.length&&t.on("click",{button:t,player:e},FLBuilderLayout._toggleBgVideoAudio))},_toggleBgVideoAudio:function(e){var i=e.data.player,o=e.data.button.find(".fl-audio-control");o.hasClass("fa-volume-off")?(o.removeClass("fa-volume-off").addClass("fa-volume-up"),e.data.button.find(".fa-times").hide(),"function"==typeof i.unMute?i.unMute():i.setVolume(1)):(o.removeClass("fa-volume-up").addClass("fa-volume-off"),e.data.button.find(".fa-times").show(),"function"==typeof i.unMute?i.mute():i.setVolume(0))},_videoBgSourceError:function(e){var i=g(e.target),o=i.closest(".fl-bg-video"),a=o.find("video"),t=o.data("fallback"),e="";i.remove(),a.find("source").length||""!==t&&((e=g("<div></div>")).addClass("fl-bg-video-fallback"),e.css("background-image","url("+t+")"),o.append(e),a.remove())},_resizeBgVideos:function(){g(".fl-bg-video").each(function(){FLBuilderLayout._resizeBgVideo.apply(this),0<g(this).parent().find("img").length&&g(this).parent().imagesLoaded(g.proxy(FLBuilderLayout._resizeBgVideo,this))})},_resizeBgVideo:function(){if(0!==g(this).find("video").length||0!==g(this).find("iframe").length){var e=g(this),i=e.outerHeight(),o=e.outerWidth(),a=e.find("video"),t=e.data("height"),n=e.data("width"),r=o,l=Math.round(t*o/n),d=0,s=0,u=e.find("iframe"),f=g(this).closest(".fl-row-bg-video").hasClass("fl-row-full-height"),c={top:"50%",left:"50%",transform:"translate(-50%,-50%)"};if(a.length){if(""===t||void 0===t||""===n||void 0===n)return a.css({left:"0px",top:"0px",width:r+"px"}),void a.on("loadedmetadata",FLBuilderLayout._resizeOnLoadedMeta);f||(l<i?(l=i,d=-(r-o)/2,r=t?Math.round(n*i/t):r):s=-(l-i)/2,c={left:d+"px",top:s+"px",height:l+"px",width:r+"px"}),a.css(c)}else u.length&&void 0!==e.data("youtube")&&FLBuilderLayout._resizeYoutubeBgVideo.apply(this)}},_resizeOnLoadedMeta:function(){var e=g(this),i=e.parent().outerHeight(),o=e.parent().outerWidth(),a=e[0].videoWidth,t=e[0].videoHeight,n=Math.round(t*o/a),r=o,l=0,d=0;n<i?(n=i,l=-((r=Math.round(a*i/t))-o)/2):d=-(n-i)/2,e.parent().data("width",a),e.parent().data("height",t),e.css({left:l+"px",top:d+"px",width:r+"px",height:n+"px"})},_resizeYoutubeBgVideo:function(){var e=g(this),i=e.outerWidth(),o=e.outerHeight(),a=e.data("YTPlayer"),t=a?a.getIframe():null,n,r="16:9".split(":"),e=r[0]/r[1],l,d,a=e<i/o,r=a?i:o*e,o=a?i/e:o;t&&g(t).width(r).height(o)},_initModuleAnimations:function(){void 0!==jQuery.fn.waypoint&&g(".fl-animation").each(function(){var e=g(this),i=e.offset().top,o=g(window).height(),a=g("body").height(),t,n="80%";FLBuilderLayoutConfig.waypoint.offset,n=FLBuilderLayoutConfig.waypoint.offset+"%",e.waypoint({offset:n=a-i<.2*o?"100%":n,handler:FLBuilderLayout._doModuleAnimation})})},_doModuleAnimation:function(){var e=void 0===this.element?g(this):g(this.element),i=parseFloat(e.data("animation-delay")),o=parseFloat(e.data("animation-duration"));isNaN(o)||e.css("animation-duration",o+"s"),!isNaN(i)&&0<i?setTimeout(function(){e.addClass("fl-animated")},1e3*i):setTimeout(function(){e.addClass("fl-animated")},1)},_initHash:function(){var e=window.location.hash.replace("#","").split("/").shift(),i=null,o=null,a=null,t=null,n=null;if(""!==e)try{0<(i=g("#"+e)).length&&(i.hasClass("fl-accordion-item")&&setTimeout(function(){i.find(".fl-accordion-button").trigger("click")},100),i.hasClass("fl-tabs-panel")&&setTimeout(function(){o=i.closest(".fl-tabs"),a=i.find(".fl-tabs-panel-label"),t=a.data("index"),(n=o.find(".fl-tabs-labels .fl-tabs-label[data-index="+t+"]"))[0].click(),FLBuilderLayout._scrollToElement(i)},100))}catch(e){}},_initAnchorLinks:function(){g("a").each(FLBuilderLayout._initAnchorLink)},_initAnchorLink:function(){var e=g(this),i=e.attr("href"),o=window.location,a=null,t=null,n=!1;if(void 0!==i&&-1<i.indexOf("#")&&e.closest("svg").length<1&&o.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&o.hostname==this.hostname)try{if(!(a=i.split("#").pop()))return;0<(t=g("#"+a)).length&&(n=t.hasClass("fl-row")||t.hasClass("fl-col")||t.hasClass("fl-module"),t.hasClass("fl-no-scroll")||!e.hasClass("fl-scroll-link")&&!n||g(e).on("click",FLBuilderLayout._scrollToElementOnLinkClick),t.hasClass("fl-accordion-item")&&g(e).on("click",FLBuilderLayout._scrollToAccordionOnLinkClick),t.hasClass("fl-tabs-panel")&&g(e).on("click",FLBuilderLayout._scrollToTabOnLinkClick))}catch(e){}},_scrollToElementOnLinkClick:function(e,i){var o=g("#"+g(this).attr("href").split("#").pop());FLBuilderLayout._scrollToElement(o,i),e.preventDefault()},_scrollToElement:function(e,i){var o=FLBuilderLayoutConfig.anchorLinkAnimations,a=0,t=g(window),n=g(document);0<e.length&&(a="fixed"===e.css("position")||"fixed"===e.parent().css("position")?e.position().top:e.offset().top>n.height()-t.height()?n.height()-t.height():e.offset().top-o.offset,g("html, body").animate({scrollTop:a},o.duration,o.easing,function(){void 0!==i&&i(),null!=e.attr("id")&&(history.pushState?history.pushState(null,null,"#"+e.attr("id")):window.location.hash=e.attr("id"))}))},_scrollToAccordionOnLinkClick:function(e){var i=g("#"+g(this).attr("href").split("#").pop()),o;0<i.length&&FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&(i.find(".fl-accordion-button").trigger("click"),i=!1)})},_scrollToTabOnLinkClick:function(e){var i=g("#"+g(this).attr("href").split("#").pop()),o=null,a=null,t=null,n,o,t;0<i.length&&(o=i.closest(".fl-tabs"),t=i.find(".fl-tabs-panel-label"),tabIndex=t.data("index"),a=o.find(".fl-tabs-labels .fl-tabs-label[data-index="+tabIndex+"]"),t.is(":visible")?FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,function(){i&&t.trigger(g.Event("click",{which:1}))}):(a[0].click(),FLBuilderLayout._scrollToElement(i)),e.preventDefault())},_initForms:function(){FLBuilderLayout._hasPlaceholderSupport||g(".fl-form-field input").each(FLBuilderLayout._initFormFieldPlaceholderFallback),g(".fl-form-field input").on("focus",FLBuilderLayout._clearFormFieldError)},_hasPlaceholderSupport:function(){var e;return"undefined"!=document.createElement("input").placeholder},_initFormFieldPlaceholderFallback:function(){var e=g(this),i=e.val(),o=e.attr("placeholder");"undefined"!=o&&""===i&&(e.val(o),e.on("focus",FLBuilderLayout._hideFormFieldPlaceholderFallback),e.on("blur",FLBuilderLayout._showFormFieldPlaceholderFallback))},_hideFormFieldPlaceholderFallback:function(){var e=g(this),i,o;e.val()==e.attr("placeholder")&&e.val("")},_showFormFieldPlaceholderFallback:function(){var e=g(this),i=e.val(),o=e.attr("placeholder");""===i&&e.val(o)},_clearFormFieldError:function(){var e=g(this);e.removeClass("fl-form-error"),e.siblings(".fl-form-error-message").hide()},_initRowShapeLayerHeight:function(){FLBuilderLayout._adjustRowShapeLayerHeight(),g(window).on("resize",FLBuilderLayout._adjustRowShapeLayerHeight)},_adjustRowShapeLayerHeight:function(){var e=g(".fl-builder-shape-layer");g(e).each(function(e){var i=g(this),o=g(i).find("svg"),a=o.height(),t;i.is(".fl-builder-shape-circle, .fl-builder-shape-dot-cluster, .fl-builder-shape-topography, .fl-builder-shape-rect")||g(o).css("height",Math.ceil(a))})},_string_to_slug:function(e){return e=e.replace(/^\s+|\s+$/g,""),regex=void 0===window._fl_string_to_slug_regex?new RegExp("[^a-zA-Z0-9'\":() !.,-_|]","g"):new RegExp("[^"+window._fl_string_to_slug_regex+"'\":() !.,-_|\\p{Letter}]","ug"),e=e.replace(regex,"").replace(/\s+/g," ")},_reorderMenu:function(){1<g("#wp-admin-bar-fl-builder-frontend-edit-link-default li").length&&g("#wp-admin-bar-fl-builder-frontend-duplicate-link").appendTo("#wp-admin-bar-fl-builder-frontend-edit-link-default").css("padding-top","5px").css("border-top","2px solid #1D2125").css("margin-top","5px")}},g(function(){FLBuilderLayout.init()}))}(jQuery);