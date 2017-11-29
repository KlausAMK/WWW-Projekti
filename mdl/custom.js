jQuery(function () {
    $('.mdl-navigation').children().each(function () {
        $(this).on('click', function () {
            $('a.mdl-layout__tab').removeClass('is-active');
            $('.mdl-layout__tab-panel').removeClass('is-active');
            $($(this).attr('href')).addClass('is-active');
            $('.mdl-layout__drawer, .mdl-layout__obfuscator').removeClass('is-visible');

        });
    });
});