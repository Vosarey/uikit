(function($){

    var root = $('script[src$="js/docs.js"]')[0].src.replace('js/docs.js', '..');

    // update dynamically version and download url in docs
    $.get(root+"/package.json", {nocache: Math.random()}, function(data){

        $(function(){
            $("[data-uikit-download]").attr("href", "https://github.com/uikit/uikit/releases/download/v"+data.version+"/uikit-"+data.version+".zip")
            $("[data-uikit-version]").text("Version "+data.version);
        });

    }, 'json');

    $(function() {

        if (window.hljs) {
            $('pre > code').each(function(i, e) { hljs.highlightBlock(e); });
        }

        $('article').on('click', '[href="#"], [href=""]', function (e) {
            e.preventDefault();
        });

        $(window).scroll(function(){
            if ($(window).scrollTop()>200){
                $("#goTop").fadeIn(300);
            }else{
                $("#goTop").fadeOut(200);
            }
        });

        $('.ds-thread').attr({
            'data-thread-key':window.location.pathname,
            'data-title':document.title,
            'data-url':window.location.href
        });

    });

})(jQuery);