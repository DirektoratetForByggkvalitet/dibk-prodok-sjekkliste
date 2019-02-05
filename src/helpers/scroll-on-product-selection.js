import zenscroll from 'zenscroll';

document.querySelector('body').addEventListener(
  'click',
  function(evt) {
    // do nothing if the clicked element is not a radio button
    if (!evt.target.type === 'radio') {
      return;
    }

    // ...with the name: produktType
    if (evt.target.name !== 'produktType') {
      return;
    }

    // need a small delay to ensure the next-button has been generated
    setTimeout(() => {
      // get the next-button
      const nextButton = document.querySelector('#main main:last-child button');
      // scoll to the next button
      nextButton && zenscroll.intoView(nextButton, 200);
    }, 100);
  },
  true
);
