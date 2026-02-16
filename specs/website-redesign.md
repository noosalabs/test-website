# Feature: Noosa Labs Website Redesign

## Summary
Redesign noosalabs.com with a modern look, new content sections (podcast, guest appearances, testimonials, newsletter), and improved structure while retaining core acquisition-focused messaging.

## Motivation
The current site serves its purpose but needs a visual refresh and expanded content to better engage profitable SaaS founders. New sections for podcast content, media appearances, testimonials, and newsletter signup will strengthen Noosa Labs' positioning as a trusted acquirer and thought leader in the small SaaS space.

## User Stories
- As a SaaS founder considering an exit, I want to quickly understand Noosa Labs' acquisition criteria so that I can determine if my business is a fit.
- As a SaaS founder, I want to see the portfolio of acquired companies so that I can trust Noosa Labs has a track record.
- As a SaaS founder, I want to read testimonials from other founders so that I can feel confident about the acquisition process.
- As a visitor, I want to listen to the Noosa Labs podcast so that I can learn more about their philosophy and approach.
- As a visitor, I want to see where Noosa Labs has been featured so that I can gauge their credibility.
- As an interested visitor, I want to subscribe to the newsletter so that I can stay informed about Noosa Labs content and insights.
- As a potential seller, I want to contact Noosa Labs easily so that I can start a conversation about my business.

## Site Structure

### Pages / Sections

1. **Homepage**
   - Hero section (new design — template provided by user)
   - Acquisition criteria summary (carried over from current site)
   - Situational scenarios (stalled growth, non-core acquisitions, divestments, founder transitions)
   - Testimonials highlights (2 slots: short video embed + 2-liner quote each, placeholder for now)
   - Newsletter signup CTA
   - Contact CTA

2. **Portfolio**
   - 3 acquired companies displayed as cards/grid
   - Per company: name, logo, one-liner description, link, testimonial link (when available)

3. **About Us / Team**
   - Company story and philosophy
   - 12 team members: name, photo, role, country, optional LinkedIn/GitHub links
   - Offices (Miami, Paris) and remote team

4. **Our Process**
   - Step-by-step acquisition process explanation
   - What founders can expect

5. **Podcast** (new)
   - Noosa Labs podcast episodes with links to Ausha/YouTube
   - Episode descriptions and guests

6. **In the News** (new)
   - Guest appearances on other podcasts
   - Press mentions, interviews, articles

7. **Blog / Newsletter** (new)
   - Links to Substack newsletter
   - Substack subscribe embed/form
   - Recent posts pulled from or linked to Substack

8. **Contact**
   - Contact form
   - Newsletter signup option
   - Office locations

## Brand & Design

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#206F24` | Hero background, nav, primary surfaces |
| Primary Yellow | `#FFC842` | CTA buttons, accents |
| Dark Green | `#164B18` | Secondary surfaces, hover states |
| Light Cream | `#FFF1CE` | Card backgrounds |
| Off White | `#FFFFEB` | Page background |
| Black | `#001C02` | Body text |

### Typography
| Style | Font | Weight |
|-------|------|--------|
| Headings | Inter | 800 (ExtraBold) |
| Body | Inter | 500 (Medium) |

### Hero Section (from Figma)
- Full-width dark green (`#206F24`) background
- Centered white headline: "We buy small profitable SaaS businesses" (Inter 800)
- Centered white subtext: "We step in so founders can move on, certain that their customers are cared for and their legacy will thrive."
- Two pill CTAs: "Talk to us" (yellow `#FFC842` fill) and "Learn more" (white outline)

### Navigation
- Koala logo + "Noosa Labs" left-aligned
- All 8 sections as nav items (may consolidate later if too many)
- "Contact us" yellow pill button right-aligned

### Footer
- Koala logo + "Noosa Labs"
- Nav links (mirroring main nav)
- Social media links (LinkedIn, X, YouTube)
- Office locations (Miami, Paris)
- Legal / privacy links
- Copyright notice

### What We Look For Section
- Light cream background
- 6 criteria cards in 3x2 grid, each with: icon, bold title, short description
- Cards: warm cream background with subtle border

## Approach
- Static site (no backend needed for initial launch)
- Framework: Astro (content-driven, native .md support, fast static output)
- Deployment: Vercel
- Responsive design (mobile-first)
- Content stored in `.md` files for easy editing of placeholder content
- Newsletter integration: Substack (embed subscribe form or link to Substack publication)
- Podcast links: Ausha and/or YouTube channel page
- Contact form: Formspree with custom `_subject` line (e.g., "Noosa Labs Inquiry from {{name}}") and `_replyto` field for direct email replies
- Analytics: Google Analytics (existing GA ID: `G-20MHX6QXQ5`)
- SEO: page titles, meta descriptions, and OG tags per page (inspired by current site messaging)
- Deployment: staging URL first (Vercel preview), then noosalabs.com when ready

## Changes
- All files are new — this is a greenfield build in the `test-website` repo
- No existing source code to modify

## Acceptance Criteria
1. Homepage displays hero section matching the provided design template
2. Acquisition criteria (SaaS, SMB/prosumer, organic growth, $200k-$800k ARR, 60%+ margins, positive teams, stable codebases) are visible on the homepage
3. Portfolio page lists acquired companies with descriptions
4. About/Team page shows company story and team member bios
5. Our Process page explains the acquisition workflow
6. Podcast page displays Noosa Labs podcast episodes
7. In the News page displays guest appearances and media mentions
8. Newsletter signup form is present on the homepage and contact page
9. Contact form is functional and submits inquiries
10. Site is fully responsive across mobile, tablet, and desktop
11. Site maintains the professional, clean aesthetic with koala branding
12. All pages are accessible via navigation from any page
13. Footer is present on all pages with nav links, social links, and office locations
14. Google Analytics tracking is active on all pages
15. Each page has a unique title, meta description, and OG image

## Open Questions
None — all decisions resolved. Logo available as PNG (AI file also available for future SVG conversion).
