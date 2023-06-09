let t1, t2, flap;

document.addEventListener("DOMContentLoaded", function () {
  t1 = gsap.timeline({ paused: true });
  flap = CSSRulePlugin.getRule(".envelope:before");

  t1.to(flap, {
    duration: 0.5,
    cssRule: {
      rotateX: 180,
    },
  })
    .set(flap, {
      cssRule: {
        zIndex: 10,
      },
    })
    .to(".letter", {
      translateY: -200,
      duration: 0.9,
      ease: "back.inOut(1.5)",
      height: 195,
    })

    .set(".letter", {
      zIndex: 40,
    })
    .to(".letter", {
      duration: 0.7,
      ease: "back.out(.4)",
      translateY: -5,
      translateZ: 250,
      rotate: -90,
    })
    .to(".d_link", {
      duration: 0.3,
      ease: "back.out(.3)",
      rotate: 90,
      translateX: -160,
      fontSize: 13,
    })
    .to(".d_link", {
      opacity: 1,
    });

  t2 = gsap.timeline({ paused: true });
  t2.to(".shadow", {
    delay: 1,
    width: 450,
    boxShadow: "-75px 150px 10px 5px #eeeef3",
    ease: "back.out(.2)",
    duration: 0.4,
    display: none,
  });
});

function openCard() {
  t1.play();
  t2.play();
}

function closeCard() {
  t1.reverse();
  t2.reverse();
}

function copyURL() {
  var currentURL = window.location.href;

  navigator.clipboard
    .writeText(currentURL)
    .then(function () {
      console.log("URL copied to clipboard: " + currentURL);
      // You can display a success message or perform other actions here
    })
    .catch(function (error) {
      console.error("Failed to copy URL to clipboard: " + error);
      // You can display an error message or handle the error in some way here
    });
}
