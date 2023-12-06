/**
 * For embedded tomcat, base url is http://localhost:8080
 */
    var baseUrl = 'http://localhost:8080/devhub';
$(document).on('click', '.career-mentorship-form-submit', function(e) {
    e.preventDefault();
    var allFieldsFilled = true;
    // Validating if all required fields are filled
    $('select').each(function () {
        if ($(this).val() == null) {
            $(this).parent().attr('style', 'border: 2px solid red !important');
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        $('.cm-form-error-msg').removeClass('d-none').addClass('d-block');
        return;
    }
    $('.cm-form-error-msg').removeClass('d-block').addClass('d-none');

    //disabling submit button and adding spinner
    $(this).prop('disabled', true);
    $(this).html('<i class="fa fa-spinner fa-spin"></i> Processing...');

    var formClass = $(this).closest('form').attr('class');
    var formSelector = $('.' + formClass);
    var formData = new FormData(formSelector[0]);
    var url = baseUrl + formSelector.data('action');
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            $('.main-content-wrapper').load('career-mentorship-result-page.html', function() {
                $('.career-mentorship-result').html(data);
            })
        },
        error: function (xhr) {
            var message = xhr.responseText;
            showAlert(message, 'danger');
        },
    });
});

$(document).on('change', '.interest-level-select-field', function(){
    $(this).parent().attr('style', 'border: 1px solid #83deff !important');
})
