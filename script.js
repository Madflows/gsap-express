gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

gsap.defaults({ duration: 0.3, ease: 'easeInOut' });

ScrollSmoother.create({
  smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

const cardTL = gsap.timeline({
  defaults: {
    ease: 'power4',
  },
  // repeat: -1,
  // yoyo: true,
  onComplete: () => {
    console.log('completed');
  },
  onStart: () => {
    console.log('start');
  },
  scrollTrigger: {
    trigger: '.card',
    // scrub: true,
    // markers: true,
    start: 'top 50%',
    end: 'bottom 50%',
  },
});

cardTL
  .from('.card', {
    autoAlpha: 0,
    opacity: 0,
    y: '60',
    rotate: -20,
    stagger: {
      each: 0.4,
    },
  })
  .from(
    '.card p',
    {
      autoAlpha: 0,
      scale: 0.5,
      ease: 'power2',
      stagger: {
        each: 0.4,
      },
      scrollTrigger: {
        trigger: '.card p',
        scrub: 1,
        // markers: true,
        start: 'top center',
        end: 'center center-=10%',
      },
    },
    '-=.3'
  );

// select all h2's
let headings = document.querySelectorAll('h2');

headings.forEach((heading) => {
  gsap.to(heading, {
    y: 0,
    ease: 'power',
    duration: 1,
    scrollTrigger: {
      trigger: heading,
      // markers: true,
      scrub: 1,
      // Trigger scoller
      start: 'top 80%',
      end: 'bottom 20%',
      // toggleActions: "restart pause reverse reverse",
      // pin: true
    },
  });
});

let deployCon = document.querySelector('.deploy');
let deployWrapper = document.querySelector('.deploy-wrapper');
let codeAfter = CSSRulePlugin.getRule('.code-wrapper:before');

let mySplitText = new SplitText('.deploy', { type: 'words,chars,lines' });

console.log(mySplitText.words);
console.log(mySplitText.lines);

let textTL = gsap
  .timeline()
  .from(mySplitText.words, {
    stagger: 0.05,
    yPercent: -100,
    opacity: 0,
  })
  .from(
    codeAfter,
    {
      width: '500%',
      margin: '0px auto',
      left: '-90%',
      top: '100%',
      borderColor: '#ffffff',
    },
    '<=2'
  );

ScrollTrigger.create({
  trigger: '.section-2',
  pin: '.deploy',
  animation: textTL,
  pinSpacing: true,
  scrub: true,
  // markers: true,
  start: 'top top',
  end: 'bottom bottom',
});

let features = document.querySelectorAll('.feature-card');

features.forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      // markers: true,
      // start: "clamp('top center')",
      start: 'top bottom',
      end: 'top center',
    },
  });
});

// Bakery Logic
const breadBtn = document.querySelector('.bread-btn');
const breadContainer = document.querySelector('.bread-container');

function createBread() {
  let breadElement = document.createElement('div');
  let breadClass = `bread${Math.floor(Math.random() * 19000)}`;
  breadElement.textContent = 'b';
  breadElement.classList.add('bread-element');
  breadElement.classList.add(breadClass);

  breadContainer.appendChild(breadElement);

  gsap.to(`.${breadClass}`, {
    x: Math.floor(Math.random * 50) + 'px',
    y: Math.floor(Math.random * 50) + 'px',
    
  });

  gsap.to(`.${breadClass}`, {
    autoAlpha: 1,
    scale: 1,
    ease: 'power4.in',
  });

  console.log(breadElement);
}

breadBtn.addEventListener('click', () => {
  createBread();
});
