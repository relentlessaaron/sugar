
(function(b){function m(a){return"false"==a?!1:(a=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(a)||/^([-a-z0-9_]+)$/i.exec(a))?a[1]:!1}function r(a){b(a.target).closest(".mbr-slider").hasClass("in")&&a.target.playVideo()}function k(){clearTimeout(n);n=setTimeout(t,50)}function t(){var a=b(".mbr-gallery .modal");if(a.length){var d=b(window).width()-0,c=b(window).height()-0;a.each(function(){var a,e;b(this).hasClass("in");var h=b(this).find(".modal-dialog");a=h.find(".carousel-item.active > img");
h.find(".carousel-item.prev > img, .carousel-item.next > img").length&&(a=h.find(".carousel-item.prev > img, .carousel-item.next > img").eq(0));e=a[0].naturalWidth;var l=a[0].naturalHeight;a=d/c>e/l?(c-20)*e/l:d-20;a=a>=e?e:a;e=(c-a*l/e)/2;h.css({width:parseInt(a),top:e+0})})}}var p=b("html").hasClass("is-builder");if(!p){var f=document.createElement("script");f.src="https://www.youtube.com/iframe_api";var q=document.getElementsByTagName("script")[0];q.parentNode.insertBefore(f,q);var g=[];window.onYouTubeIframeAPIReady=
function(){var a=a||{};a.YTAPIReady||(a.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"));b(".video-slide").each(function(a){b(this).index();b(this).closest("section");b(".video-container").eq(a).append('<div id ="mbr-video-'+a+'" class="mbr-background-video" data-video-num="'+a+'"></div>').append('<div class="item-overlay"></div>');b(this).attr("data-video-num",a);a=new YT.Player("mbr-video-"+a,{height:"100%",width:"100%",videoId:m(b(this).attr("data-video-url")),events:{onReady:r}});g.push(a)})}}var u=
function(){var a={};return function(d){var c=b.Deferred();d in a?a[d]?c.resolve(a[d]):c.reject("Preview image not found."):b("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var b=this.src.split("/").pop();switch(b){case "maxresdefault.jpg":this.src=this.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(b,"hqdefault.jpg");break;case "hqdefault.jpg":this.src=this.src.replace(b,"default.jpg");break;default:a[d]=null,c.reject("Preview image not found.")}}else c.resolve(a[d]=
this.src)}).attr("src","https://img.youtube.com/vi/"+d+"/maxresdefault.jpg");return c}}();b(document).on("add.cards change.cards",function(a){function d(a){var b=a.find("img"),c=a.closest("section").find(".modal-dialog .carousel-inner .carousel-item").eq(b.closest(".mbr-gallery-item").index()).find("img");if(a.hasClass("video-slide")){var d=m(a.attr("data-video-url"));u(d).done(function(a){b.attr("src",a).css("visibility","visible");c.attr("src",a)})}return d}var c=b(a.target);if(c.hasClass("mbr-slider-carousel")){var f=
[];c.find(".mbr-gallery-item").each(function(a){(b(this).attr("data-tags")||"").trim().split(",").map(function(a){a=a.trim();-1==b.inArray(a,f)&&f.push(a)})});if(0<c.find(".mbr-gallery-filter").length&&b(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var e='<ul><li class="mbr-gallery-filter-all active">All</li>';c.find(".mbr-gallery-filter").html("");f.map(function(a){e+="<li>"+a+"</li>"});e+="</ul>";c.find(".mbr-gallery-filter").append(e);c.on("click",".mbr-gallery-filter li",
function(a){$li=b(this);$li.parent().find("li").removeClass("active");$li.addClass("active");var d=$li.closest("section").find(".mbr-gallery-row"),e=$li.html().trim();c.find(".mbr-gallery-item").each(function(a,c){var d=b(this);tagsTrimmed=d.attr("data-tags").split(",").map(function(a){return a.trim()});-1!=b.inArray(e,tagsTrimmed)||$li.hasClass("mbr-gallery-filter-all")?d.removeClass("mbr-gallery-item__hided"):(d.addClass("mbr-gallery-item__hided"),setTimeout(function(){d.css("left","300px")},200))});
setTimeout(function(){d.closest(".mbr-gallery-row").trigger("filter")},50)})}else c.find(".mbr-gallery-item__hided").removeClass("mbr-gallery-item__hided"),c.find(".mbr-gallery-row").trigger("filter");p||c.find(".video-slide").each(function(a){b(this).closest(".mbr-gallery-item").index();d(b(this))});"undefined"!==typeof b.fn.masonry&&c.outerFind(".mbr-gallery").each(function(){var a=b(this).find(".mbr-gallery-row").masonry({itemSelector:".mbr-gallery-item:not(.mbr-gallery-item__hided)",percentPosition:!0});
a.masonry("reloadItems");a.on("filter",function(){a.masonry("reloadItems");a.masonry("layout")}.bind(this,a));a.imagesLoaded().progress(function(){a.masonry("layout")})})}});b(".mbr-gallery-item").on("click","a",function(a){a.stopPropagation()});var n,f=b(document).find(".mbr-gallery");f.on("show.bs.modal",function(a){clearTimeout(d);var d=setTimeout(function(){var c=b(a.relatedTarget).parent().index(),c=b(a.target).find(".carousel-item").eq(c).find(".mbr-background-video");b(a.target).find(".carousel-item .mbr-background-video");
0<c.length&&g[+c.attr("data-video-num")].playVideo()},500);k()});f.on("slide.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&g[+a.attr("data-video-num")].pauseVideo()});b(window).on("resize load",k);f.on("slid.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&g[+a.attr("data-video-num")].playVideo();k()});f.on("hide.bs.modal",function(a){g.map(function(a,b){a.pauseVideo()})})})(jQuery);
