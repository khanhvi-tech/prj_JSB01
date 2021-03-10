anime.timeline({loop: true})
        .add({
            targets: '.ml15 .word',
            scale: [14,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 2000,
            delay: (el, i) => 800 * i
        }).add({
            targets: '.ml15',
            opacity: 0,
            duration: 900,
            easing: "easeOutExpo",
            delay: 10000000
        })
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() {
          $('#shooot > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#shooot');
        }, 3000)
        
       