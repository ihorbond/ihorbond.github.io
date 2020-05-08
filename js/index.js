
$.when($.ready).then(function () {
    handleBackgroundVideo();

    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        const btn = $('#send-email-btn').get(0);
        btn.disabled = true;
        btn.innerHTML = '<i class="fa fa-cog fa-spin fa-2x fa-fw"></i>';
        emailjs.sendForm('default_service', 'contact_form', this).then(res => {
            handleEmailSent(btn, this, true);
        }, err => {
            handleEmailSent(btn, this, false);
        });
    })

    $("#home-nav").on('click', e => {
        e.preventDefault();
        $("#home").get(0).scrollIntoView({behavior: "smooth"});
        history.replaceState(undefined, undefined, "#home")
    });

    $("#services-nav").on('click', e => {
        e.preventDefault();
        $("#services").get(0).scrollIntoView({behavior: "smooth", block: "center"});
        history.replaceState(undefined, undefined, "#services")
    });

    $("#contact-nav").on('click', e => {
        e.preventDefault();
        $("#contact").get(0).scrollIntoView({behavior: "smooth"});
        history.replaceState(undefined, undefined, "#contact")
    });

    $("#get-quote-btn").on('click', e => {
        e.preventDefault();
        $("#contact").get(0).scrollIntoView({behavior: "smooth"});
        history.replaceState(undefined, undefined, "#contact")
    })
});

function handleEmailSent(btn, form, success) {
    if(success) form.reset();
    btn.innerHTML = success ? '<span class="text-success"> Message sent! </span>' : '<span class="text-danger"> There was an error. Please try again </span>'
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>'
    }, 2500)
}

function handleBackgroundVideo() {
    $("#space-video").on('timeupdate', function(e) {
        if (e.timeStamp > 5300) {
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
