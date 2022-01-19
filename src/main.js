// execute script after page load
window.onload = function digital_fn(){

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
        // console.log(toggle)
    });

    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    // anonymous mansory
    new Masonry(grid, {
        itemSelector : '.flex-item',
        gutter : 82,
        fitWidth: true,
    })
}

// anonymous class
new Rellax('.rellax', {
    center: true
});

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger"})
    .setClassToggle("#futurSoft, #imCurrently", "revealLeft") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger"})
    .setClassToggle("#bornNear, #moreAbout", "revealRight") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#theHundred", "revealLeft") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#ifYouAreCurrently", "revealRight") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#grid-two", "revealBottom") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
