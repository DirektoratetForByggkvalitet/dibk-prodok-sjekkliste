import zenscroll from 'zenscroll';

document.querySelector('body').addEventListener('click', function(evt) {
  // do nothing if the clicked element is not a radio button
  if (!evt.target.type === 'radio') { return; }

  // ...with the name: produktType
  if (evt.target.name !== 'produktType') { return; }

  // get the next-button
  const nextButton = document.querySelector('#main main:last-child button');

  // scoll to the next button
  nextButton && zenscroll.intoView(nextButton, 200)
}, true);
