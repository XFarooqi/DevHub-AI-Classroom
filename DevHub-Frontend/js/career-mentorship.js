$(document).on('click', '.career-mentorship-submit-btn', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('career-mentorship-form.html', function() {
        toggleTheme();
    });
})