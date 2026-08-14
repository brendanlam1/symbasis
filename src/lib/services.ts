export const services = [
  {
    slug: "strategy-positioning",
    title: "Strategy & Positioning",
    description:
      "Sharpen who you're for, why you win, and how every message ladders back to it.",
    approach:
      "We start every engagement here, even if you didn't ask for it. Before we write a headline or build a funnel, we map your market, pressure-test your positioning against real competitors, and get specific about who you're for, and who you're not. Everything downstream, from ad copy to page layout, gets checked against that framework so the brand says one consistent thing everywhere it shows up.",
    deliverables: [
      "Market & competitor analysis",
      "Positioning & messaging framework",
      "Go-to-market roadmap",
    ],
  },
  {
    slug: "content-creative",
    title: "Content & Creative",
    description:
      "Copy, design, and video that carries a point of view, built to stop the scroll and hold it.",
    approach:
      "Creative that's built off a positioning framework outperforms creative built in a vacuum. We write and design against the same brief every time: the same audience, the same proof points, the same tone. So a landing page, an ad, and a social post all read as the same brand having the same conversation, just in different rooms.",
    deliverables: [
      "Brand & campaign copywriting",
      "Design systems & visual identity",
      "Video & motion production",
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Paid search and social run as a feedback loop, not a budget line. Tested, tracked, and rebuilt weekly.",
    approach:
      "Paid media is the fastest way to learn what your market actually responds to, if you're tracking it properly. We set up conversion tracking before we spend a dollar, run structured creative and audience tests, and report on what moved and what didn't. Budget shifts toward what's working on a weekly cadence, not a quarterly one.",
    deliverables: [
      "Paid search & shopping",
      "Paid social & retargeting",
      "Creative testing & optimisation",
    ],
  },
  {
    slug: "seo-organic-growth",
    title: "SEO & Organic Growth",
    description:
      "Technical foundations and content that compound, so growth doesn't stop when the ad spend does.",
    approach:
      "SEO is the channel that keeps paying you back after the work is done. We fix the technical issues holding your site back first, then build content around the terms your actual buyers are searching, not vanity keywords. It's slower than paid, which is exactly why most competitors under-invest in it.",
    deliverables: [
      "Technical SEO audits",
      "Content strategy & production",
      "Link building & digital PR",
    ],
  },
  {
    slug: "social-community",
    title: "Social & Community",
    description:
      "Channels run like a relationship, not a broadcast: consistent, responsive, and on-brand.",
    approach:
      "Most brand social accounts fail because they're treated as a billboard instead of a conversation. We plan content calendars around what your audience actually engages with, respond in your voice in real time, and treat community management as part of the strategy, not an afterthought handed to whoever has five minutes.",
    deliverables: [
      "Organic social strategy",
      "Community management",
      "Influencer & creator partnerships",
    ],
  },
  {
    slug: "web-design",
    title: "Web & Design",
    description:
      "Sites and landing pages engineered to convert, not just to look good in a portfolio.",
    approach:
      "A site is a conversion tool first and a design showcase second. We build with clear information hierarchy, fast load times, and messaging that matches whatever campaign sent the visitor there, then keep testing after launch, because the first version is never the best-converting one.",
    deliverables: [
      "Website design & build",
      "Landing pages & CRO",
      "Ongoing site optimisation",
    ],
  },
] as const;

export type Service = (typeof services)[number];
