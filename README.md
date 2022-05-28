### Demo:

https://nextjs-tailwindcss-beautiful-blog-template-6bhlgxk4v.vercel.app/sample-blog

# How to make this blog yours?

This is a Blog template using NextJS and React

### Technologies Used

- NextJS
- Tailwind CSS
- Typescript
- Markdown
- Syntax Highlighter
- Github actions
- Github pages

### How to use it

See the following youtube tutorial how to use this template and get your own version in 5 minutes.

https://youtu.be/lEljvKRtU4c

### Features

- Showing blog posts by parsing markdown
- Syntax highlight with PrismJS
- Github pages deployment support
- Google analytics Integration
- SEO setup
- Tailwind typography integration
- Social media preview for blogs
- Dark mode support with next-themes
- Type checking TypeScript
- Linter with ESLint
- Code Formatter with Prettier

### Step 1: Change the environment variables

Go into the **.env.local** file and change the following variables to include your own.

```js
NEXT_PUBLIC_PRODUCTION_ROOT_URL = "";
NEXT_PUBLIC_LINKEDIN_PROFILE_URL = "";
NEXT_PUBLIC_YOUTUBE_CHANNEL_URL = "";
NEXT_PUBLIC_GITHUB_PROFILE_URL = "";
NEXT_PUBLIC_MEDIUM_PROFILE_URL = "";
NEXT_PUBLIC_STACKOVERFLOW_PROFILE_URL = "";
NEXT_PUBLIC_TWITTER_PROFILE_URL = "";
NEXT_PUBLIC_TWITTER_HANDLE = "";
NEXT_PUBLIC_OWNER_NAME = "Mohammad Faisal";
NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY = "";
```

### Step 2: Change the images

Go into the **public/static** folder and change the 2 images. Add your own logo and picture there.

### Step 3: Add the blog

Create a new file under the **\_posts** directory. Let's assume the new blog files name is **sample-blog.md**

Be careful about the name because it will be the url (path) for your blog.

Every blog has a top section where you can specify some meta data about that blog

```js
---
title: "My Sample blog"
description: "This is the description for the blog"
banner: "/images/sample-blog.jpeg"
tags: ["NextJS"]
date: 1 January 2022
---
```

These are pretty self explanatory.

### Step 4: Add an image for the blog

This is optional. But this adds some value to the project.
You can go to the public folder of your project and add an image with the same name **sample-blog.jpeg** and refer it inside the **sample-blog.md** file.

That's it!

### Run the project to verify

If you want to test the project locally

```sh
yarn dev
```

and go to **http://localhost:3000/sample-blog** to see the fruits of your labor!

## Further Reading

To read more about how the different parts were built refer to these articles.

- [Analytics](https://www.mohammadfaisal.dev/blog/add-google-analytics-to-nextjs)
- [SiteMap](https://www.mohammadfaisal.dev/blog/create-sitemap-in-nextjs)
- [SEO](https://www.mohammadfaisal.dev/blog/improve-seo-in-nextjs)
- [Syntax Highlight](https://www.youtube.com/watch?v=VbWG4iYeJLQ&t=125s)
- [Typography](https://www.youtube.com/watch?v=IZZ5uwOkrAA)
- [Favicon](https://www.youtube.com/watch?v=IIJ5ZLG_gg0)
