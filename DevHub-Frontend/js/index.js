$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('.copyright-year').html(currentYear);
    $('.main-content-wrapper').load('home.html');
})

/**
 * Following methods resolve navbar active link issue
 */
$(document).on('click', '.navbar-nav .nav-link', function(){
    $('.navbar-nav').find('.active').removeClass('active');
    $(this).addClass('active');
});

/**
 * Following function will toggle dark/light mode
 */
$(document).on('change', '#checkbox', function() {
    var lightTheme = 'light-theme';
    var darkTheme = 'dark-theme';
    var themeIcon = $('.theme-icon');
    var sunIcon = 'fa-sun-o';
    var moonIcon = 'fa-moon-o';
    var label = $('.label');
    if (label.hasClass(lightTheme)) {
        label.removeClass(lightTheme).addClass(darkTheme);
        themeIcon.removeClass(sunIcon).addClass(moonIcon);
    } else {
        label.removeClass(darkTheme).addClass(lightTheme);
        themeIcon.removeClass(moonIcon).addClass(sunIcon);
    }
    toggleTheme();
});

/**
 * Navbar Links Functionalities
 */
$(document).on('click', '.home-page-link', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    $('.main-content-wrapper').load('home.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.career-mentorship-link', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    $('.main-content-wrapper').load('career-mentorship.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.roadmap-link', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    $('.main-content-wrapper').load('roadmap.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.no-code-portfolio-link', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    var link = 'http://127.0.0.1:5001/';
    $.get(link, function(data) {
        $('.main-content-wrapper').html(data);
    });
})

/**
 * No Code portfolio external server button
 * 
 * The button is in flask app
 */
$(document).on('click', '.start-portfolio-btn', function(e){
    e.preventDefault();
    var link = 'http://127.0.0.1:5001/display';
    $.ajax({
        url: link,
        type: 'GET',
        success: function() {
            window.open(link, '_blank');
        }
    });
})

$(document).on('click', '.internship-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('internship.html', function(){
        toggleTheme();
    });
})

function showAlert(message, alertType) {
    var alertHeading;
    if (alertType == 'success') {
        alertHeading = 'Success &#x1F60A;';
    } else {
        alertHeading = 'Error occured &#x1F61E;';
    }
    var alertDiv = '<div class="alert alert-' + alertType + ' alert-dismissible fade show fixed-top devhub-alert" role="alert">' 
                    +   '<button type="button" class="close alert-close" data-dismiss="alert" aria-label="Close">'
                    +       '<span aria-hidden="true">&times;</span>'
                    +   '</button>'
                    +   '<h4 class="alert-heading text-center">' + alertHeading + '</h4>'
                    +   '<p>' + message + '</p>'
                    + '</div>';
    $('.alert-section').append(alertDiv);
    setTimeout(function() {
        $('.devhub-alert').hide();
    }, 3000);
}
  
/**
 * Write all Theme changes in this function
 */
function toggleTheme() {
    var darkTheme = 'dark-theme';
    if ($('.label').hasClass(darkTheme)) {
        $('body').addClass('bg-dark');
        $('.main-heading').addClass('main-heading-dark');
        $('.main-content-wrapper').addClass('main-content-wrapper-dark bg-dark');
        $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
        $('.dev-hub-logo').not(".dev-logo").addClass('dev-hub-logo-dark');
        $('.devhub-purpose-container').addClass('bg-dark devhub-purpose-container-dark');
        $('.devhub-purpose').addClass('devhub-purpose-dark');
        $('.community-sponsor-container').addClass('community-sponsor-container-dark');
        $('.devhub-feature').addClass('bg-dark');
        $('.devhub-feature-container').addClass('text-light');
        $('.our-team-container').addClass('text-light');
        $('.team-member').addClass('team-member-dark').removeClass('team-member-light');
        $('.contact-us-container').removeClass('contact-us-container-light').addClass('contact-us-container-dark');
        $('.contact-us-form').removeClass('contact-us-form-light').addClass('contact-us-form-dark');
        $('.contact-info-box').removeClass('contact-info-box-light').addClass('contact-info-box-dark');
        $('.contact-info-type').removeClass('contact-info-type-light').addClass('contact-info-type-dark');
        $('.internship-content-wrapper').removeClass('internship-content-wrapper-light').addClass('internship-content-wrapper-dark');
        $('.roadmap-content-wrapper').removeClass('roadmap-content-wrapper-light').addClass('roadmap-content-wrapper-dark');
        $('.roadmap-title').addClass('roadmap-title-dark');
        $('.virtual-title').addClass('virtual-title-dark');
        $('.career-title').addClass('career-title-dark');
        $('.roadmap-container').removeClass('roadmap-container-light').addClass('roadmap-container-dark');
        $('.internship-container').removeClass('internship-container-light').addClass('internship-container-dark');
        $('.contact-us-input-field').addClass('contact-us-input-field-dark');
        $('.career-mentorship-form-heading').addClass('career-mentorship-form-heading-dark');
        $('.career-mentorship-content-wrapper').removeClass('career-mentorship-content-wrapper-light').addClass('career-mentorship-content-wrapper-dark');
        $('.cm-result-content-wrapper').removeClass('cm-result-content-wrapper-light').addClass('cm-result-content-wrapper-dark');
        $('.career-mentorship-form-heading-2').removeClass('career-mentorship-form-heading-2-light').addClass('career-mentorship-form-heading-2-dark');
        $('.cm-heading').addClass('cm-heading-dark');
        $('.cm-subheading').removeClass('cm-subheading-light').addClass('cm-subheading-dark');
        $('.cm-form-container').removeClass('cm-form-container-light').addClass('cm-form-container-dark');
        $('.career-mentorship-form-sub-heading').addClass('career-mentorship-form-sub-heading-dark');
        $('.roadmap-heading-2').addClass('roadmap-heading-2-dark');
        $('.internship-heading-2').addClass('internship-heading-2-dark');
        $('.input-field-div').addClass('input-field-div-dark');
        $('.input-field').addClass('input-field-dark');
        $('.internship-wrapper').addClass('internship-wrapper-dark');
        $('.roadmap-wrapper').addClass('roadmap-wrapper-dark');
    } else {
        $('body').removeClass('bg-dark');
        $('.main-heading').removeClass('main-heading-dark');
        $('.main-content-wrapper').removeClass('main-content-wrapper-dark bg-dark');
        $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
        $('.dev-hub-logo').not(".dev-logo").removeClass('dev-hub-logo-dark');
        $('.devhub-purpose-container').removeClass('bg-dark devhub-purpose-container-dark');
        $('.devhub-purpose').removeClass('devhub-purpose-dark');
        $('.community-sponsor-container').removeClass('community-sponsor-container-dark');
        $('.devhub-feature').removeClass('bg-dark text-light');
        $('.devhub-feature-container').removeClass('text-light');
        $('.our-team-container').removeClass('text-light');
        $('.team-member').removeClass('team-member-dark').addClass('team-member-light');
        $('contact-us-container').removeClass('contact-us-container-dark').addClass('contact-us-container-light');
        $('.contact-us-form').removeClass('contact-us-form-dark').addClass('contact-us-form-light');
        $('.contact-info-box').removeClass('contact-info-box-dark').addClass('contact-info-box-light');
        $('.contact-info-type').removeClass('contact-info-type-dark').addClass('contact-info-type-light');
        $('.internship-content-wrapper').removeClass('internship-content-wrapper-dark').addClass('internship-content-wrapper-light');
        $('.career-mentorship-form-heading').removeClass('career-mentorship-form-heading-dark');
        $('.career-mentorship-content-wrapper').removeClass('career-mentorship-content-wrapper-dark').addClass('career-mentorship-content-wrapper-light');
        $('.cm-result-content-wrapper').removeClass('cm-result-content-wrapper-dark').addClass('cm-result-content-wrapper-light');
        $('.career-mentorship-form-heading-2').removeClass('career-mentorship-form-heading-2-dark').addClass('career-mentorship-form-heading-2-light');
        $('.cm-heading').removeClass('cm-heading-dark');
        $('.cm-subheading').removeClass('cm-subheading-dark').addClass('cm-subheading-light');
        $('.cm-form-container').removeClass('cm-form-container-dark').addClass('cm-form-container-light');
        $('.career-mentorship-form-sub-heading').removeClass('career-mentorship-form-sub-heading-dark');
        $('.roadmap-content-wrapper').removeClass('roadmap-content-wrapper-dark').addClass('roadmap-content-wrapper-light');
        $('.roadmap-title').removeClass('roadmap-title-dark');
        $('.virtual-title').removeClass('virtual-title-dark');
        $('.career-title').removeClass('career-title-dark');
        $('.roadmap-container').removeClass('roadmap-container-dark').addClass('roadmap-container-light');
        $('.internship-container').removeClass('internship-container-dark').addClass('internship-container-light');
        $('.contact-us-input-field').removeClass('contact-us-input-field-dark');
        $('.roadmap-heading-2').removeClass('roadmap-heading-2-dark');
        $('.internship-heading-2').removeClass('internship-heading-2-dark');
        $('.input-field-div').removeClass('input-field-div-dark');
        $('.input-field').removeClass('input-field-dark');
        $('.roadmap-wrapper').removeClass('roadmap-wrapper-dark');
        $('.internship-wrapper').removeClass('internship-wrapper-dark');
    }
}