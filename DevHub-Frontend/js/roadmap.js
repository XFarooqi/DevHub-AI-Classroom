
$(document).on('click', '.explore-roadmap-btn', function(e) {
    e.preventDefault();
    var roadmapType = $(this).data('roadmap-type') + '.html';
    $('.main-content-wrapper').load(roadmapType, function(){
        toggleTheme();
    });
})

/**
 * For embedded tomcat, base url is http://localhost:8080
 */
var baseUrl = 'http://localhost:8080/devhub';

$(document).off('click', '.roadmap-clickable').on('click', '.roadmap-clickable', function() {
    var roadmapLabel = $(this).find('tspan').map(function() {
        return $(this).text();
      }).get().join(' ');
    var data = 'roadmapLabel=' + roadmapLabel;
    var url = baseUrl + '/roadmap';

    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        success: function (data) {
            $('.roadmap-modal-wrapper').load('roadmap-modal.html', function() {
                $('.roadmap-modal').modal('toggle');
                $('.roadmap-modal-title').text(roadmapLabel);
                $('.roadmap-content').html(data.content);

                $.each(data.roadmapHelpingLinks, function(index, helpingLink) {
                    var anchor = $("<a></a>");
                    anchor.attr("href", helpingLink.link);
                    anchor.attr("target", "_blank");
                    anchor.text(helpingLink.linkText);
                    anchor.addClass("helping-resource-link");

                    var linkIcon = $("<i></i>");
                    linkIcon.addClass("fa fa-link link-icon mr-2");
                    linkIcon.attr("aria-hidden", "true");

                    anchor.prepend(linkIcon);

                    var anchorSpan = $("<span></span>");
                    anchorSpan.attr("data-href", helpingLink.link);
                    anchorSpan.append(anchor);
                    anchorSpan.addClass("px-3 py-1 helping-resource-link-span");
                    $('.roadmap-helpful-resources').append(anchorSpan);
                });

                toggleTheme();
            });
        },
        error: function (xhr) {
            var message = xhr.responseText;
            showAlert(message, 'danger');
        },
    });
})

$(document).on('click', '.helping-resource-link-span', function(){
    var link = $(this).data("href");
    window.open(link, '_blank');
})