$(function() {
    $('#form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: document.URL,
            data: $(this).serialize(),
            success: function() {
                Swal.fire({
                    title: 'Anfrage gesendet!',
                    html: 'Wir haben Ihre Anfrage erhalten und werden uns in Kürz bei Ihnen melden.',
                    timer: 3000,
                    timerProgressBar: true
                });
            },
            error: function() {
                Swal.fire({
                    title: 'Fehler',
                    html: 'Wir konnten Ihre Anfrage nicht bearbeiten. Bitte versuchen Sie es in einigen Minuten erneut.',
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        });
    });
});
