/* Enable bootstrap tooltips */
$(function () { $('[data-toggle="tooltip"]').tooltip() });

/* Disable focus for all buttons */
$("button").click(function() { this.blur() });

/* Mute button */
$("#btn-mute").click(function() { 
    toggleAudio($(".aud").prop("muted"));
});

function toggleAudio(toggleOn) {

    if (toggleOn) {
        $(".aud").prop("muted", false);
        
        $("#btn-mute").removeClass("btn-danger").addClass("btn-success");
        $("#btn-mute").prop("title", "Mute music").tooltip("fixTitle");
        $("#icon-music").removeClass("glyphicon-volume-off").addClass("glyphicon-volume-up");
    }
    else {
        $(".aud").prop("muted", true);
        
        $("#btn-mute").removeClass("btn-success").addClass("btn-danger");
        $("#btn-mute").prop("title", "Unmute music").tooltip("fixTitle");
        $("#icon-music").removeClass("glyphicon-volume-up").addClass("glyphicon-volume-off");
    }
}

/* Music list */
$("#list-audio li").click(function() {

    var audio = $("#" + this.dataset.audio)

    $(".aud").trigger("pause");

    audio.prop("currentTime", $(".aud-active").prop("currentTime"));
    audio.trigger("play");

    $(".aud-active").removeClass("aud-active");
    audio.addClass("aud-active");

    $("#btn-aud-current").html("<span class=\"btn-text\">" + $(this).text() + "</span><span class=\"caret\">");
});