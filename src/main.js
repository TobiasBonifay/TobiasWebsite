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

new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger1"})
    .setClassToggle("#grid-images1", "revealBottom1") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger1"})
    .setClassToggle("#grid-images2", "revealBottom2") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger1"})
    .setClassToggle("#grid-images3", "revealBottom3") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger2"})
    .setClassToggle("#futurSoft, #imCurrently", "revealLeft") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger2"})
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

new ScrollMagic.Scene({triggerElement: "#recentWorkTrigger"})
    .setClassToggle("#flexItem1, #flexItem2, #flexItem3", "revealTop") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#articleAreaTrigger"})
    .setClassToggle("#card1, #card2, #card3", "revealTop") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


