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
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger1"})
    .setClassToggle("#grid-images2", "revealBottom2") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger1"})
    .setClassToggle("#grid-images3", "revealBottom3") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger2"})
    .setClassToggle("#futurSoft, #imCurrently", "revealLeft") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#digitalLifeTrigger2"})
    .setClassToggle("#bornNear, #moreAbout", "revealRight") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#theHundred", "revealLeft") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#ifYouAreCurrently", "revealRight") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#countingAreaTrigger"})
    .setClassToggle("#grid-two", "revealBottom") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#recentWorkTrigger"})
    .setClassToggle("#flexItem1, #flexItem2, #flexItem3", "revealTop") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#articleAreaTrigger"})
    .setClassToggle("#card1, #card2, #card3", "revealTop") // add class toggle
    .addTo(controller);


/** SVG **/
function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}


var $word = $("#word");
var $dot = $("#dot");
/* var $word = document.getElementById("word");
var $dot = document.getElementById("dot") */

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// init controller
// const controller = new ScrollMagic.Controller();

// build tween
/* var tween = gsap.TimelineMax() */
var tween = new TimelineMax()
    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease: Linear.easeNone})) // draw word for 0.9
    .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease: Linear.easeNone}))  // draw dot for 0.1
    .add(TweenMax.to("path", 1, {stroke: "#33629c", ease: Linear.easeNone}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

