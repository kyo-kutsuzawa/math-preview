$(function()
{
    const makePreview = function ()
    {
        input = $('#source').val();
        input = input.replace(/</g, "&lt;");
        input = input.replace(/>/g, "&gt;");

        $('#preview').html(input);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview"]);
    }

    $('#source').keyup(function() {
        makePreview()
    });
    $('#source').bind('updated', function() {
        makePreview();
    });

    makePreview();
});
