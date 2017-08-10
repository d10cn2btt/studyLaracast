$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('.prevention-mask').on('click', function() {
        $overlay = $('<div class="prevention-masked">');
        $('body').append($overlay);
    });

    $('[data-hidden="alert"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.alert').hide();
    });
});