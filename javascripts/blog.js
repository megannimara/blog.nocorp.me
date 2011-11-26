$('pre[lang!=""]').each(function (i, e) {
    var code = $(e).find('code')
    code.addClass( 'language-' + $(e).attr('lang') );
    hljs.highlightBlock(code.get(0), null, true);
});
