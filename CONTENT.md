# Adding portfolio content

- Blog posts: `src/content/blog/`
- Case studies: `src/content/case-studies/`

Duplicate the draft `template.md` in the appropriate folder. Name the new file with a short descriptive slug, such as `crm-handoffs.md`. Its filename becomes the URL. Keep the original templates as drafts.

Required frontmatter:

```yaml
---
title: "A clear, specific title"
description: "A short summary of the actual content."
pubDate: YYYY-MM-DD
topic: "CRM improvement"
draft: true
---
```

Replace the template text with your content. When ready, set a real publication date and change `draft` to `false`. The entry then appears in its index and gets its own page. Drafts never get public pages, listings, or structured article metadata. Run `npm run build` after editing.

Write for employers and readers: lead with the customer problem, state your role, explain decisions in plain language, and use descriptive headings. Separate business-side implementation from technical development. Use only supported achievements, identify the baseline and period for measurements, and link sources where useful. Do not present illustrative case-study numbers as results.

Shared visual styles and site navigation live in `src/layouts/ResumeLayout.astro`; fonts live in `src/styles/fonts.css`. Later style changes can be made once for all pages.

Before deployment, set the real production URL as `site` in `astro.config.mjs`. The layout uses it for canonical and Open Graph URLs. No production URL is assumed, and localhost is never used as a canonical. A production sitemap and Search Console verification can follow once the domain is known. Local previews do not establish search indexing or AI visibility.
