# MY WORK — PORTFOLIO PROJECT SHOWCASE IMPLEMENTATION

## OBJECTIVE

Refine the existing freelance portfolio's project showcase.

The current section is called:

"Selected Work"

Change it to:

"MY WORK"

This is a personal freelance portfolio, so "My Work" is more natural, personal and authentic.

I currently have TWO real projects.

Do NOT invent additional projects.

The goal is to present these two projects professionally now while creating an architecture that can easily support more projects later.

---

# 1. IMPORTANT EXECUTION RULE

Inspect the existing repository first.

Do NOT rebuild the entire portfolio.

Do NOT change the existing global visual identity.

Do NOT change the hero design.

Do NOT change the existing typography system.

Do NOT change the overall color system.

Do NOT change the mobile philosophy.

Only refine the project showcase architecture and related interactions.

Actually implement the changes in the repository.

Do not merely provide code or explain what should be done.

After implementation:

1. Run the development server.
2. Test the interactions.
3. Test desktop.
4. Test mobile.
5. Fix issues.
6. Run npm run build.
7. Resolve all build/runtime/TypeScript errors.

---

# 2. CURRENT DESIGN DIRECTION

The portfolio currently uses:

- Premium editorial design
- Minimal visual language
- Futuristic typography
- Sophisticated typography
- Handwritten accents
- Technical metadata
- Cobalt blue accent
- Warm off-white background
- Dark charcoal typography
- No unnecessary animation

Keep all of this.

The project showcase should feel like:

PREMIUM
+
EDITORIAL
+
CLIENT-FOCUSED
+
CASE-STUDY DRIVEN

It should NOT look like a generic portfolio card grid.

---

# 3. CHANGE SECTION NAME

Change:

"Selected Work"

to:

"My Work"

Use:

## My Work

Supporting text:

"A selection of digital experiences and business solutions I've designed and developed."

Do not use:

"A selection of digital products and experiences I've designed and developed."

The wording should feel personal rather than agency-like.

---

# 4. SECTION STRUCTURE

The section should have:

LEFT:

MY WORK

A selection of digital experiences and business solutions I've designed and developed.

RIGHT:

View All Projects →

The "View All Projects" interaction must NOT scroll to Contact.

The current incorrect navigation to:

#contact

must be removed.

This is an important bug to fix.

---

# 5. CURRENT REAL PROJECTS

There are currently only TWO actual projects.

Use ONLY these projects.

Do NOT create fake projects.

Do NOT add placeholder projects such as:

- TaskFlow
- TastyBite
- Revive Auto Detailing
- Generic SaaS dashboards

Remove any fake/demo project data currently being used.

---

# PROJECT 01

## Client

Global Matriculation Higher Secondary School, Kangayam

## Location

Dharapuram Road,
Kangayam, A.P. Pudur,
Kangayam Taluk,
Tiruppur – 638701

## Project Type

School Website / Landing Page

## Technology

React.js
Supabase
Tailwind CSS

## Project Context

The school previously did not have a proper website.

The project was created to establish the school's digital presence through a modern responsive website.

## Suggested description

"Designed and developed a modern responsive digital presence for Global Matriculation Higher Secondary School, helping the institution move from having no dedicated website to a professional online presence."

Do not exaggerate outcomes.

Do not claim:

- Increased admissions
- Increased traffic
- Increased revenue
- Increased enquiries

unless actual data is provided later.

## Category

Business Website

or:

Education Website

Prefer:

Education Website

---

# PROJECT 02

## Client

Sakthi Auto Component Limited

## Location

NH 544,
Mukasipallagoundampalayam,
Koonampatti,
Tamil Nadu 638056

## Project Type

Digital Trial Card System

## Technology

Use the actual technologies from the existing project data/repository.

Do NOT invent technologies if they are not confirmed.

## Project Context

The company was moving from traditional manual entry and record handling toward a digital workflow through the application.

The system helps support the transition from traditional manual trial-card entry to a digital process.

## Suggested description

"Designed and developed a digital trial card system to help Sakthi Auto Component Limited transition from traditional manual entry toward a more structured digital workflow."

Do not claim specific productivity improvements unless actual measurable data is provided.

## Category

Business Application

or:

Digital Transformation

Prefer:

Business Application

---

# 6. PROJECT DATA MODEL

Refactor:

src/data/projects.ts

to support real project information.

Each project should support fields such as:

```ts
type Project = {
  id: string
  index: string
  title: string
  client: string
  category: string
  description: string
  location?: string
  technologies: string[]
  image: string
  liveUrl?: string
  caseStudy?: {
    challenge?: string
    solution?: string
    outcome?: string
    screenshots?: string[]
    clientReview?: {
      quote: string
      author?: string
      role?: string
    }
  }
}

7. IMPORTANT — CLIENT REVIEWS
The project detail overlay should support a client review/testimonial.
However:
DO NOT INVENT CLIENT REVIEWS.
I have not provided the actual review text yet.
Therefore use one of these approaches:
OPTION A:
Hide the review section until actual review content is supplied.
OR
OPTION B:
Create the component/data field but show:
"Client review coming soon."
Prefer OPTION A for the production UI.
Do not fabricate a testimonial.
Do not generate a fake quote.
Do not write something such as:
"Gokul delivered an amazing website..."
unless I provide the actual review.
8. MY WORK — DESKTOP LAYOUT
The two projects should remain visually large.
Do NOT turn them into tiny cards.
Preferred composition:
PROJECT 01
Large project visual
+
Project information
PROJECT 02
Large project visual
+
Project information
Use an editorial layout.
The two projects can use alternating visual arrangements if that fits the existing design:
Project 01:
Image left / content right
Project 02:
Content left / image right
Maintain consistency.
9. PROJECT CARD DESIGN
Each project presentation should contain:
Small metadata:
01 / EDUCATION WEBSITE
Large title:
Global Matriculation Higher Secondary School
Short description.
Technology badges.
CTA:
View Project →
The project client should be visible.
Example:
CLIENT
Global Matriculation Higher Secondary School, Kangayam
Do not overwhelm the user with the full postal address inside the main card.
The complete address can appear inside the project detail view.
10. PROJECT VISUALS
Use actual project screenshots when they are available in:
public/projects/
Do NOT use fake project screenshots.
Do NOT generate fake client interfaces.
If an actual screenshot is not currently available, use a clearly temporary placeholder that is easy to replace later.
The component must support:
- Desktop screenshot
- Mobile screenshot
- Multiple screenshots
- Future project images
Use:
next/image
where appropriate.
11. PROJECT IMAGE FRAME
Use a sophisticated browser/project frame.
The frame should feel:
- Premium
- Clean
- Editorial
- Modern
Use:
- Subtle border
- Very soft shadow
- Browser controls
- Rounded corners
Avoid:
- Huge shadows
- Excessive glassmorphism
- Neon effects
- Excessive decoration
The screenshot itself should remain the visual focus.
12. VIEW PROJECT INTERACTION
When the user clicks:
"View Project →"
DO NOT immediately navigate away to another page unless a real live project URL exists.
Instead, open a premium project detail presentation.
Preferred interaction:
A full-screen or near-full-screen modal overlay.
Visual style:
SUBTLE GLASS / EDITORIAL OVERLAY
The background page should become slightly subdued.
Use:
- Backdrop blur
- Very subtle transparency
- White/off-white surface
- Thin border
- Soft shadow
- Rounded corners
- Clear close button
Do NOT overdo glassmorphism.
The result should feel like:
A premium case-study viewer.
NOT:
A generic popup.
13. PROJECT DETAIL OVERLAY
The overlay should contain:
TOP:
Project number
Category
Close button
MAIN:
Project title
Client name
Project description
Large project screenshot
DETAILS:
Client
Category
Technology
Location
Then:
The Challenge
Use the project context.
For Project 01:
The school previously did not have a dedicated website and needed a professional digital presence.
For Project 02:
The company was transitioning from traditional manual trial-card entry toward a digital workflow.
Then:
The Solution
Describe only what is known from the project.
Do not invent functionality.
Then:
Technologies
Technology badges.
Then:
Client Review
Only show this if actual review content exists.
If no review exists:
Do not display a fake review.
Then:
View Live Project →
Only show this button if a real live URL exists.
14. PROJECT DETAIL VISUAL STYLE
The project detail overlay should feel like a miniature case study.
Use strong hierarchy:
PROJECT 01
Global Matriculation Higher Secondary School
Education Website
Then a large visual.
Then concise information.
Do not create a huge wall of text.
Keep the information scannable.
15. MULTIPLE SCREENSHOTS
The project detail architecture must support multiple screenshots.
Example:
screenshots: [
  "/projects/school/home.png",
  "/projects/school/about.png",
  "/projects/school/mobile.png"
]
The first screenshot can be large.
Additional screenshots can appear below as a gallery.
Do not implement complicated carousel behavior unless actually needed.
A simple editorial gallery is preferred.
16. MOBILE PROJECT DETAIL
On mobile, the project detail overlay must feel like a native app-style detail screen.
Use:
Top:
← Back
Project information
Large screenshot
Details
Technologies
Review
Live project
The modal should occupy almost the entire viewport.
Respect:
env(safe-area-inset-top)
env(safe-area-inset-bottom)
The close/back control must have a 44px+ touch target.
Do not use a tiny X.
17. MOBILE MY WORK
On mobile:
DO NOT keep the desktop two-column layout.
Use:
Project image
↓
Project category
↓
Client
↓
Title
↓
Description
↓
Technologies
↓
View Project
Then:
Project 02
Same structure.
The project visuals should remain large.
18. VIEW ALL PROJECTS
The current:
"View All Projects →"
is incorrectly navigating to:
#contact
Fix this completely.
It should open a dedicated project explorer experience.
There are two acceptable approaches:
PREFERRED:
Create a dedicated route:
/projects
This is better for:
- SEO
- Sharing
- Browser history
- Future scalability
- More projects
The page should feel like a premium project archive.
OR:
Use a full-screen project explorer overlay if the existing architecture strongly favors a single-page experience.
Prefer /projects unless there is a strong technical reason not to.
19. PROJECTS PAGE
Create:
src/app/projects/page.tsx
The page should be visually consistent with the main portfolio.
Use the same:
- Color system
- Typography
- Navigation
- Footer
- Spacing
- Responsive behavior
Page heading:
My Work
Subheading:
"Projects, experiments and digital solutions I've built for businesses."
Do not claim a large number of projects.
The page should gracefully handle only two projects.
20. PROJECT FILTER
The projects page should include a filter system.
Possible filters:
ALL
WEBSITES
WEB APPLICATIONS
MOBILE APPLICATIONS
BUSINESS SYSTEMS
DIGITAL TRANSFORMATION
However:
Only show filter categories that correspond to actual projects.
Do not show filters that return zero projects unless the architecture is intentionally prepared for future projects.
With the current two projects:
ALL
EDUCATION WEBSITE
BUSINESS APPLICATION
may be sufficient.
Alternatively:
ALL
WEBSITES
BUSINESS APPLICATIONS
Keep it clean.
21. FILTER UI
The filter should feel premium.
Use small pill-style controls.
Example:
[ All ] [ Websites ] [ Applications ]
Active filter:
Cobalt accent or dark charcoal.
Inactive:
Neutral background.
Do NOT use huge colorful buttons.
Do NOT animate the filtering excessively.
A simple instant filter is enough.
22. PROJECT ARCHIVE LAYOUT
Desktop:
Use a sophisticated grid/editorial layout.
Example:
Large Project 01
Smaller Project 02
or:
Two balanced large project cards.
Do not create a generic three-column SaaS card grid.
The projects should remain visually important.
23. PROJECT ARCHIVE CARD
Each archive card should show:
01
Category
Client
Project title
Short description
Project image
View Project →
The entire card can be clickable if accessibility is maintained.
24. FILTER + PROJECT DETAIL
Clicking a project from /projects should open the SAME project detail experience used by the main "My Work" section.
Do NOT duplicate project detail logic.
Create a reusable project-detail component.
For example:
src/components/project/ProjectDetailModal.tsx
or an appropriate equivalent.
Both:
My Work
and:
Projects Archive
should use the same project data and detail component.
25. REUSABLE PROJECT ARCHITECTURE
Prefer:
projects.ts
     ↓
ProjectCard
     ↓
ProjectDetailModal
and:
projects.ts
     ↓
ProjectsArchive
     ↓
ProjectDetailModal
One source of truth.
Do not duplicate project content.
26. RECOMMENDED COMPONENT STRUCTURE
Use the existing architecture.
If appropriate, add:
src/
├── components/
│   ├── ui/
│   │
│   ├── project/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── ProjectGallery.tsx
│   │   └── ProjectFilters.tsx
│   │
│   └── sections/
│       └── MyWork.tsx
│
└── app/
    └── projects/
        └── page.tsx
Use project/ only if it improves organization.
Do not create unnecessary abstractions.
27. URL / NAVIGATION BEHAVIOR
Fix the current incorrect behavior.
The following should work:
Navbar:
Work
→
My Work section
My Work:
View All Projects
→
/projects
Project:
View Project
→
Project detail overlay
Project archive:
View Project
→
Same project detail overlay
Navbar:
Contact
→
#contact
Navbar:
Services
→
#services
Navbar:
About
→
#about
Do not accidentally route Work or View All Projects to Contact.
28. BROWSER HISTORY
If implementing /projects, normal browser navigation should work.
Back button:
/projects
→
main portfolio
should behave naturally.
If using a modal on the project archive, consider URL state if practical.
Do not implement complicated routing unless necessary.
29. PROJECT DETAILS — PROJECT 01
Populate the project data accurately.
Example:
{
  id: "global-matriculation-higher-secondary-school",
  index: "01",
  title: "Global Matriculation Higher Secondary School",
  client: "Global Matriculation Higher Secondary School, Kangayam",
  category: "Education Website",
  description:
    "Designed and developed a modern responsive website for a school that previously had no dedicated website, establishing a professional digital presence.",
  location:
    "Dharapuram Road, Kangayam, A.P. Pudur, Kangayam Taluk, Tiruppur – 638701",
  technologies: [
    "React.js",
    "Supabase",
    "Tailwind CSS"
  ],
  ...
}
Do not unnecessarily display the entire address in the main project card.
Use it inside the project detail view.
30. PROJECT DETAILS — PROJECT 02
Populate:
{
  id: "sakthi-auto-component-digital-trial-card",
  index: "02",
  title: "Digital Trial Card System",
  client: "Sakthi Auto Component Limited",
  category: "Business Application",
  description:
    "A digital trial card system designed to help the company transition from traditional manual entry toward a structured digital workflow.",
  location:
    "NH 544, Mukasipallagoundampalayam, Koonampatti, Tamil Nadu 638056",
  ...
}
Do not invent additional functionality.
Do not invent performance metrics.
Do not invent business results.
31. PROJECT CONTENT PHILOSOPHY
The portfolio should demonstrate:
"I build real digital solutions for real businesses."
The project section should therefore prioritize:
CLIENT
+
PROBLEM
+
SOLUTION
+
TECHNOLOGY
+
VISUAL PROOF
rather than:
TECHNOLOGY
+
TECHNOLOGY
+
TECHNOLOGY
Do not make technology badges the most important element.
32. CLIENT CREDIBILITY
Use the actual client names.
This is important because these are real projects.
But do not create fake:
- Client logos
- Reviews
- Ratings
- Statistics
- Revenue figures
- Business growth numbers
Only display factual information supplied by me.
33. FUTURE PROJECT SUPPORT
The architecture must make it easy to add:
Project 03
Project 04
Project 05
etc.
Adding a new project should require primarily changing:
src/data/projects.ts
and adding its assets.
The UI should automatically render the new project.
Do not hardcode:
"Project 01"
"Project 02"
inside components.
Use the project index from the data.
34. FUTURE FILTER SUPPORT
The filter system should derive categories from project data where practical.
For example:
projects
↓
unique categories
↓
filter buttons
Avoid manually maintaining a separate list if it can be derived cleanly.
However, do not over-engineer the solution.
35. GLASSMORPHISM RULE
The project detail overlay may use subtle glassmorphism.
Use:
- backdrop blur
- translucent surface
- subtle border
- restrained shadow
But DO NOT create:
- Heavy blur
- Neon glass
- Excessive transparency
- Floating glowing cards
- Apple Vision Pro-style excessive effects
The portfolio's primary aesthetic remains editorial and sophisticated.
Glass is only an interaction layer.
36. ANIMATION RULE
Do NOT add animation libraries.
Do NOT add elaborate transitions.
Allowed:
- Very subtle modal fade
- Very subtle overlay transition
- Basic filter state transition
These should be functional and restrained.
The portfolio should remain primarily static.
37. MOBILE APP-LIKE EXPERIENCE
The project detail experience on mobile is especially important.
It should feel like opening a native application detail screen.
Use:
← Back
at the top.
Large title.
Large project image.
Scrollable content.
Large CTA.
Safe-area support.
Comfortable spacing.
44px+ controls.
Do not make a tiny centered desktop modal on mobile.
On mobile, the detail viewer should effectively become a full-screen page/sheet.
38. ACCESSIBILITY
Ensure:
- Modal has accessible labeling
- Close button has aria-label
- Keyboard Escape closes modal
- Focus is managed appropriately where practical
- Buttons are actual buttons
- Links are actual links
- Filter controls are accessible
- Images have meaningful alt text
- No interaction depends only on hover
- Touch targets are 44px+
39. SEO
The /projects route should be SEO-friendly.
Add appropriate metadata.
Example title:
My Work — Gokul | Freelance Web & Mobile App Developer
Description:
Explore websites, business applications and digital solutions designed and developed by Gokul.
Use semantic headings.
Do not keyword stuff.
40. PERFORMANCE
Use:
- next/image
- Server Components where possible
- Minimal client-side JavaScript
- Lazy loading for secondary project images where appropriate
Only the interactive parts should use:
"use client"
Potential client components:
- ProjectFilters
- ProjectDetailModal
The main project data should remain static/server-friendly.
41. FINAL MAIN PAGE FLOW
The main portfolio should now read naturally:
Hero
↓
Trust Statement
↓
My Work
Two real projects
↓
Services
↓
Process
↓
About
↓
Technologies
↓
CTA
↓
Contact
↓
Footer
42. MY WORK SECTION CTA
Use:
View All Projects →
This must go to:
/projects
NOT:
#contact
NOT:
#work
NOT:
another unrelated section.
43. PROJECT DETAIL CTA
Use:
View Project →
This should open the project detail presentation.
If the project has a real live website URL, provide:
Visit Live Project →
inside the detail view.
If no live URL exists:
Do not show a broken button.
44. EMPTY STATES
The project archive should handle filtering gracefully.
If a future filter has no projects:
Display a clean message such as:
"No projects in this category yet."
Do not leave an empty blank area.
45. CURRENT PROJECT COUNT
Do NOT display:
"20+ projects"
"50+ projects"
"100+ projects"
The actual current portfolio contains:
2 real projects.
That is completely acceptable.
Do not try to hide this with fake statistics.
46. FINAL VISUAL QUALITY
The final "My Work" section should feel like:
A professional freelancer showing carefully selected real work.
Not:
A student portfolio.
Not:
A generic template.
Not:
A fake agency with dozens of fake clients.
The two projects should feel valuable because of:
- Presentation
- Context
- Visual proof
- Client identity
- Problem/solution story
- Design quality
47. FINAL VERIFICATION
After implementation verify:
Main page
- "Selected Work" is completely replaced by "My Work"
- Two real projects appear
- No fake projects remain
- No fake metrics remain
- View All Projects works correctly
Project 01
- Global Matriculation Higher Secondary School
- Correct client
- Correct category
- Correct technology
- Correct context
Project 02
- Sakthi Auto Component Limited
- Digital Trial Card System
- Correct context
- Correct category
- Correct technology from actual project
View Project
- Opens detail overlay
- Correct project information
- Large project visual
- Technologies
- Client information
- Review only if real review exists
- Live link only if available
- Close works
View All Projects
- Opens /projects
- Does NOT go to contact
- Filters work
- Both projects appear
- Project detail interaction works
Mobile
Test:
375px
390px
412px
430px
Check:
- No horizontal overflow
- Full-screen project detail experience
- Large readable project images
- Touch-friendly controls
- Filter works
- Back/close works
- Safe-area support
Desktop
Test:
1440px
1280px
1024px
Check:
- Editorial layout
- Project visuals are large
- Strong typography hierarchy
- No excessive empty space
- No cramped content
48. BUILD VERIFICATION
Run:
npm run build
The build must complete successfully.
Fix:
- TypeScript errors
- Import errors
- Runtime errors
- Broken links
- Broken images
- Accessibility issues
- Responsive issues
Do not finish with known errors.
49. FINAL IMPLEMENTATION PRINCIPLE
The project section should tell the client:
"These are real businesses I've worked with."
Then:
"This was the problem."
"This is what I built."
"This is how it looks."
"This is the technology behind it."
"Here is what the client said."
"Here is the live product, if available."
That is much more convincing than simply displaying technology badges.
Do not over-design the interaction.
The visual sophistication should come from:
TYPOGRAPHY
+
LAYOUT
+
IMAGERY
+
CASE-STUDY PRESENTATION
+
SPACING
not from excessive animation.
50. FINAL INSTRUCTION
Implement everything in this specification directly in the repository.
Do not merely explain the solution.
Do not ask me to manually create components that you can create yourself.
Inspect the existing project first and reuse compatible components.
Preserve the existing premium portfolio design.
Replace the current fake project content with the two real projects provided above.
Implement:
"My Work"
Project detail overlay
Project archive /projects
Project filtering
Correct navigation
Mobile project experience
Future-project-ready data architecture
Then run the application, inspect it, fix problems, and run:
npm run build
The final result should be production-quality and ready for me to replace/add project screenshots and actual client reviews later.

### One strategic change I strongly recommend

For **"View All Projects"**, I chose a dedicated `/projects` page rather than only a glass overlay.

That's better for your freelance portfolio because later you can have:

```text
gokul.com/
        ↓
     My Work
        ↓
gokul.com/projects
        ↓
 ┌─────────────────────────┐
 │ All                     │
 │ Websites                │
 │ Applications            │
 │ Mobile                  │
 │ Business Systems        │
 └─────────────────────────┘
        ↓
 Project detail
And your main page stays clean.
For individual "View Project", the glass/case-study overlay is perfect because the client can inspect the project without losing the portfolio context.
Also, don't add the client reviews until you have their actual words. Once you get the reviews from the school and Sakthi Auto Component, we can plug them into the exact same structure without changing the design.