---
setup: import { Markdown } from 'astro/components'
---

The most important thing you need to do as a developer is to put up your website on the internet. Once you can do this, the world becomes your oyster. Your possibilities open up.

You can use this website to:

- Find employment
- Show your portfolio
- Display interesting projects
- Write about stuff you care about
- Make websites for other people
- _... The possibilities are endless!_

**But how do you build a website and put it up online?**

I'm not talking about a simple website (like a single page one), but one that is complex enough to call a _real_ website.

There are three parts to the equation:

1. Building the website itself — Building
2. Readying the website for production — Optimization
3. Putting the website online — Deployment

## Building a _real_ website is harder than you imagined it to be

Let's focus on building for now.

If you build your website with plain HTML, you have to create one new HTML file for each page you create — so you need 2 HTML files for 2 pages, 3 HTML files for 3 pages, and so on.

**You will have pieces of content that you reuse across different pages**, like the navigation and footer.

**It's easy to copy and paste these content into separate HTML files, but it's a pain to change them**. If you want to change something, you have to go through all the pages and change the same thing.

It's painful and frustrating, so most people stop at 3-4 pages max and try to find better ways to build websites without copy-pasting.

**Most people turn to Wordpress to build a real website because Wordpress is a trusted model**. You can't really go wrong. There are many features:

- You can break HTML into chunks and include them in different places
- You can have plugins to handle SEO if you don't know how to deal with it.

**But Wordpress is not the best stack you can use as a developer.** There are many reasons why Wordpress is not a good fit:

- Wordpress is cumbersome — you can't just edit the content on your text editor. You have to use the CMS.
- Wordpress is slow — it uses a database (which is an extra connection compared to a plain HTML file) and this increases the amount of time it takes to load a website.
- Wordpress uses PHP — you might not want to learn it because that's an extra language to work with.

Some people tried to emulate Wordpress with Node by creating a blog Express, and MongoDB. This removes the need to use PHP but it doesn't reduce the drawbacks of the other points I wrote above.

## Building a _real_ website can also be easier than you imagined it to be

The easiest way is to use a Static Site Generator.

Static Site Generators let you break HTML into smaller chunks. They also let you include these smaller chunks anywhere you want to.

There are many Static Site Generators.

- The best ones is [Astro](https://astro.build).
- The second best one is [Eleventy](https://www.11ty.dev).
