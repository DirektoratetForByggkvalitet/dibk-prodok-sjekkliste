# [dibk-prodok-sjekkliste]

The dibk-prodok-sjekkliste project is a wizard that uses
[losen](https://github.com/netliferesearch/losen).\
The documentation for losen can be found here https://dibk-storybook.firebaseapp.com/.

## Custom stuff in this project
Below is a decription of stuff that's custom for this project or things that interacts with losen from the outside. For future reference.

### Magic links from epi
DiBK wanted the posibility to link from articles to the second page of the wizard, effectively selecting the product type through a link.

This is implemented with a [custom middleware](https://github.com/DirektoratetForByggkvalitet/dibk-prodok-sjekkliste/blob/master/src/helpers/handle-deeplink.js) for the redux store that checks for the `produktType:` in the hash of the url.

If it is, it sets a value for the `produktType` property in the state, and also sets `$external.enteredFromMagicLink` to allow the wizard to show content if the user came in this way.

### Scroll on product type selection
The grid view on the first page is quite long, and in user tests a few users didn't understand that they had to scroll to click the next page button.

To fix this, we've implemented a [click event handler](https://github.com/DirektoratetForByggkvalitet/dibk-prodok-sjekkliste/blob/master/src/helpers/scroll-on-product-selection.js) for the product type inputs that scrolls down to the next page button.

## Development

In your terminal, run `npm i && npm start` to run the development server.

## Deploy to production

- First build this project `npm run build`.
- Then navigate to the wizard page where you want to put the wizard in epi
- Select folder icon (folder top right) then press "Media" (between "Blokker" and "Skjemaer"). Scroll all the way to the bottom and chose "For denne Side".
- Upload the Javascript bundle found in `build/static` after the build step.
- Then press the menu icon (last icon row right) and update the file in "Javascriptfil for veiviseren" to the file you just uploaded. The last step is to publish the page.
