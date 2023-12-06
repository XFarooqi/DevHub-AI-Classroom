$(document).ready(function () {
    $('.main-content-wrapper').addClass('no-bg-image');
});

$(document).on('click', '.nav-link', function () {
    $('.main-content-wrapper').removeClass('no-bg-image');
});

/**
 * For embedded tomcat, base url is http://localhost:8080
 */
var baseUrl = 'http://localhost:8080/devhub';

$(document).on('click', '.internship-form-submit-btn', function (e) {
    e.preventDefault();
    var allFieldsFilled = true;
    // Validating if all required fields are filled
    $('input.required-field').each(function () {
        if ($(this).hasClass('resume') && $(this).val() == '') {
            $(this).parent().attr('style', 'border-color:red !important');
            $(this).next('.error-message').removeClass('d-none').addClass('d-block');
            return;
        }
        if ($(this).val() == '') {
            $(this).attr('style', 'border : 2px solid red');
            $(this).next('.error-message').removeClass('d-none');
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        return;
    }
    var formClass = $(this).closest('form').attr('class');
    var formSelector = $('.' + formClass);
    var formData = new FormData(formSelector[0]);
    formData.append('resume', $('.resume')[0].files[0]);
    var url = baseUrl + formSelector.data('action');

    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function (message) {
            showAlert(message, 'success');
            $('.main-content-wrapper').load('internship.html', function(){
                toggleTheme();
            });
        },
        error: function (xhr) {
            var message = xhr.responseText;
            showAlert(message, 'danger');
        },
    });
});

$(document).on('blur', '.required-field', function () {
    if ($(this).val() == '' && !$(this).hasClass('resume') ) {
        $(this).attr('style', 'border : 2px solid red');
        $(this).next('.error-message').removeClass('d-none');
    }
});

$(document).on('focus', '.required-field', function () {
    $(this).attr('style', 'border : 0');
    $(this).next('.error-message').addClass('d-none');
});

$(document).on('change', '.resume', function() {
    if ($(this).val() == '') {
        $(this).parent().attr('style', 'border-color:red !important');
        $(this).next('.error-message').removeClass('d-none').addClass('d-block');
    } else {
        $(this).parent().attr('style', 'border-color:black !important');
        $(this).next('.error-message').removeClass('d-block').addClass('d-none');
    }
})
