# photos.ScottWillsey.com

A subdomain of my site for my photography. This is a work in progress.

## Tech Stack

- [Astro](https://astro.build/)
- [PhotoSwipe](https://photoswipe.com/)
- [shishkin/astro-pagefind: Astro integration for Pagefind static site search.](https://github.com/shishkin/astro-pagefind) (**not implemented yet**)

## License

Site code is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Albums

**Album Content Collection Data**

Album data is stored in json files in /src/content/albums. You must have a JSON file for each album. Albums can be nested (but don't need to be – you could have all your albums at top level), as seen by the example Japan album which doesn't have any photos of its own (other than the thumbnail photo), and which contains children albums Kagoshima, Karuizawa, and Tokyo. You could have a parent album with its own photos as well, but I did not demonstrate that in this repo example.

All album JSON files are at the same level under /src/content/albums, regardless of logical hierarchy (parent/children albums).

The content collection structure for Albums is defined in /src/content.config.ts.

In my example Albums, Japan is a parent album at the top level with no photos of its own that contains 3 children albums that each have their own photos. Oregon Coast is an album at the top level which has no children albums and has its own photo(s). This is to demonstrate both nested albums and top-level single-level albums.

**Album Photos**

Album images are stored in /src/assets/images in folders named the same names as their respective album JSON files in /src/content/albums. Do not nest the folders even if some albums are children of other albums. Do not nest album folders regardless of logical hierarchy (parent/children albums). All album folders reside at the same level in /src/assets/images.

## Lightbox

The lightbox is an implementation of [PhotoSwipe](https://photoswipe.com/). I will write many more details about this later, because how to make it work in Astro in combination with album data in JSON files and the photos elsewhere was an interesting challenge.

## Words

This site also allows for blogging about your photos via the Words content collection type (defined in /src/content.config.ts). Entries reside under /src/content/words and are markdown files named by date (yyyyMMdd). They require you to specify an image in the front matter which will be displayed, and you can talk about this image in the markdown content.

Please note that individual entries are displayed by the astro template in /src/content/pages/words/[slug].astro, and that the list view in /src/content/pages/words.astro is not paginated yet.

## Modifying

**Site Details**

Please edit /src/data/site.json with your personal and site information (Site name, URL, and your social network info). Also please note "posts" pagination setting does nothing yet as pagination is not currently implemented.

You can edit /src/components/Footer.astro to change what socials to display in the footer, remove the astro badge, etc. You will have to add icons to /src/components/icons in the form of .astro files for any social networks you want images for other than the included BlueSky, GitHub, and Mastodon icons.

**CSS**

There is a global.css file in /src/styles with some basic site CSS. Because I use tailwind css and am not familiar with it at all yet, much of the styling is scattered throughout the various .astro files.

There is also a photoswipe-dynamic-caption-plugin.css file in /src/styles, which is used for styling the PhotoSwipe lightbox. The reason I made this local copy and import that is because I wanted to change the width of captions placed below images in lightbox view.

## Help

Please contact me on Mastodon at <https://social.lol/@scottwillsey>.
