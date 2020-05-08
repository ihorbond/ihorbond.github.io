
$.when($.ready).then(function () {
    handleBackgroundVideo();

    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        const btn = $('#send-email-btn').get(0);
        btn.disabled = true;
        btn.innerHTML = '<i class="fa fa-cog fa-spin fa-2x fa-fw"></i>';
        emailjs.sendForm('default_service', 'contact_form', this).then(res => {
            console.log("email sent");
            btn.disabled = false;
            btn.innerHTML = 'Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>'
            this.reset();
        }, err => {
            console.log("error sending email");
        });
    })

    $("#home-nav").on('click', e => {
        e.preventDefault();
        $("#home").get(0).scrollIntoView({behavior: "smooth"});
    });

    $("#services-nav").on('click', e => {
        e.preventDefault();
        $("#services").get(0).scrollIntoView({behavior: "smooth", block: "center"});
    });

    $("#contact-nav").on('click', e => {
        e.preventDefault();
        $("#contact").get(0).scrollIntoView({behavior: "smooth"});
    });
});

function handleBackgroundVideo() {
    $("#space-video").on('timeupdate', function(e) {
        if (e.timeStamp > 5400) {
            this.pause();

            this.classList.add("dim");

            $("#title").css("display", "flex")
            .hide()
            .fadeIn();

            $("#navbar").css("display", "flex")
            .hide()
            .slideDown();

            // $('[data-spy="scroll"]').each(function () {
            //     var $spy = $(this).scrollspy('refresh')
            //   })
        }
    });
}
