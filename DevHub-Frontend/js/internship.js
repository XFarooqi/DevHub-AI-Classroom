$(document).on('click', '.apply-button', function(e) {
    e.preventDefault();
    var internshipForm = 'internship-forms/' + $(this).data('internship-type') + '.html';
    $('.main-content-wrapper').load(internshipForm, function(){
        toggleTheme();
    });
})