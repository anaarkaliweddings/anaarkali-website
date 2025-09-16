# Anaarkali Productions Website Development Guide
*Complete technical and copywriting framework for luxury cinematic wedding storytellers*

## Executive Overview

Based on your extensive brand documentation, this comprehensive guide provides the complete technical architecture, page structure, copywriting, and development prompts for Anaarkali Productions' website. The goal is to create a luxury, elegant, mobile-first website that embodies your positioning as "The Cinematic Storytellers of Authentic Love."

## Technical Foundation

### Recommended Tech Stack
- **Frontend**: Next.js 14+ with TypeScript and App Router
- **Styling**: Tailwind CSS + Framer Motion + Shadcn/ui
- **CMS**: Sanity (for media-first content management)
- **Database**: Supabase with Prisma ORM
- **Hosting**: Vercel with edge functions
- **Analytics**: Google Analytics 4 + Vercel Analytics

## Website Architecture

The website is structured around 6 core pages, each designed to avoid overcrowding while maintaining narrative flow:

### 1. **Homepage** - "Hum Kehte Hain Haan"
### 2. **Our Stories** - "The Cinema We Create" 
### 3. **The Four Acts** - "Your Director's Journey"
### 4. **Love is Love** - "Every Story Deserves Telling"
### 5. **Our Vision** - "The Storytellers Behind the Lens"
### 6. **Begin Your Story** - "Ready for Your Premiere?"

---

## Page 1: Homepage - "Hum Kehte Hain Haan"

### Page Structure & Sections

#### Hero Section
```
Grid: Full viewport height, centered content
Elements:
- Background: Cinematic video loop (3-5s, muted)
- Overlay: Subtle dark gradient for text readability
- Primary heading: "Hum Kehte Hain Haan"
- Subheading: "To the ones who said yes to authentic love"
- CTA Button: "Begin Your Story" (golden, prominent)
```

#### Brand Promise Section
```
Grid: Two-column on desktop, stacked on mobile
Elements:
- Left column: Typography-focused manifesto
- Right column: Emotional video testimonial or behind-scenes footage
- Animated counter: "Stories told: 147+" 
```

#### Featured Stories Carousel
```
Grid: Full-width horizontal scroll
Elements:
- 4-5 wedding story previews
- Each preview: 30-second film excerpt + couple quote
- Navigation: Elegant dots + arrow controls
```

#### The Two Weddings Framework
```
Grid: Split-screen visual
Elements:
- Left side: "The Performance" (staged, polished)
- Right side: "The Truth" (candid, emotional)
- Center divider with animated text
```

#### Social Proof Footer
```
Grid: Three-column testimonial cards
Elements:
- Client testimonials with photos
- Instagram feed integration
- Press mentions/awards
```

### Homepage Copywriting

```
Hero Section:
"Hum Kehte Hain Haan"
To the ones who said yes to authentic love

We don't just capture your wedding.
We direct your love story.

[Begin Your Story]

Brand Promise:
"Every couple plans two weddings—
The grand performance for the world to see,
And the quiet truth that belongs only to you.

We specialize in the second one.

The in-between moments when no one's watching.
The nervous laugh before the varmala.
The tear that escapes during the vidaai.
The way your nani adjusts your dupatta without being asked.

This is where real cinema lives.
This is what we hunt for.
This is why we exist."

Featured Stories Introduction:
"Recent Premieres"
"Each love story gets its own director's treatment. Here are some we're proud to have told."

Social Proof:
"What Our Families Say"
"Because when you become our client, you become our family."

[Client testimonial 1]: "They didn't just document our wedding—they understood our love story in ways we couldn't even articulate."

[Client testimonial 2]: "Watching our film felt like reliving the emotions, not just the events. That's the difference."

[Client testimonial 3]: "We trusted them completely. That feeling was priceless."
```

### Technical Implementation Prompt

```
Create a Next.js 14 homepage component using TypeScript and Tailwind CSS for Anaarkali Productions wedding cinematography. 

Requirements:
- Full viewport hero section with video background using HTML5 video element
- Implement intersection observer for scroll-triggered animations using Framer Motion
- Create responsive grid layout: desktop (1200px+), tablet (768px-1200px), mobile (<768px)
- Add smooth scroll behavior and parallax effects
- Implement lazy loading for video and images using next/image
- Include dark overlay for hero text readability (bg-black/50)
- Use elegant typography: Playfair Display for headings, Inter for body text
- Color palette: dusty rose (#D4A574), sage (#9CAF88), ivory (#FAF9F6), charcoal (#2C2C2C)
- Add animated counters using useState and useEffect hooks
- Implement horizontal scroll carousel for featured stories with touch support
- Include WhatsApp floating button for mobile users
- Add structured data for local business SEO
- Ensure lighthouse performance score >90 with optimized images and code splitting
- Add loading states and error boundaries for robust user experience
```

---

## Page 2: Our Stories - "The Cinema We Create"

### Page Structure & Sections

#### Portfolio Header
```
Grid: Full-width with filtering controls
Elements:
- Page title: "The Cinema We Create"
- Filter buttons: All, Traditional, Modern, Destination, Court Marriage, LGBTQ+
- Search functionality
- Sort options: Recent, Popular, Location
```

#### Portfolio Gallery
```
Grid: Masonry layout on desktop, single column on mobile  
Elements:
- Video thumbnails with play overlay
- Hover effects showing couple names + location
- Click to expand to full-screen video player
- Chapter navigation for longer films
```

#### Featured Case Study
```
Grid: Full-width showcase section
Elements:
- Behind-the-scenes content
- Director's commentary video
- Before/after client testimonials
- Technical details (equipment, techniques used)
```

#### Client Love Section
```
Grid: Three-column testimonial grid
Elements:
- Video testimonials
- Written reviews
- Social media mentions
- Referral stories
```

### Our Stories Copywriting

```
Page Header:
"The Cinema We Create"
"Every wedding is a movie waiting to be directed. Here are some we're honored to have told."

Filter Introduction:
"Browse by the kind of love story that speaks to you"

Featured Case Study:
"Behind the Director's Cut: Priya & Arjun"

"Some stories demand to be told differently.

Priya and Arjun's families hadn't spoken in years. The wedding was their chance to heal old wounds, but the pressure was immense. 

Our approach: Focus on the quiet bridge-building moments. Capture the aunties finding common ground over mehendi designs. The fathers sharing a laugh during the baraat. The mothers crying together during the vidaai.

The result: A film that didn't just document a wedding—it told the story of two families becoming one.

This is what happens when you treat love stories like cinema."

Client Testimonials Section:
"What Our Families Tell Their Families"

"The ultimate test: Would our couples recommend us to their closest friends? Here's what they say."

[Testimonial 1]: "Six months later, I still get chills watching our film. They captured moments I didn't even know happened."

[Testimonial 2]: "Everyone asks who our photographer was. Not because of the technical quality—that's expected. Because of how it feels."

[Testimonial 3]: "They made us feel like the main characters in our own love story. Because we were."
```

### Technical Implementation Prompt

```
Build a Next.js portfolio gallery page for Anaarkali Productions using TypeScript, Tailwind CSS, and Sanity CMS.

Requirements:
- Implement masonry layout using CSS Grid or React-Masonry-CSS for optimal image arrangement
- Create filter system using React state management with smooth transitions (Framer Motion)
- Add video player component with custom controls using HTML5 video API
- Implement full-screen lightbox using Photoswipe or similar library
- Add pagination for large portfolio sets (limit: 12 items per page)
- Create search functionality with debounced input using useDebounce hook
- Implement lazy loading with progressive image loading and blur placeholder
- Add keyboard navigation support for accessibility (arrow keys, ESC to close)
- Include EXIF data display for technical details
- Create shareable URLs for individual portfolio items using Next.js dynamic routing
- Add download options for clients with password protection
- Implement infinite scroll as alternative to pagination
- Use Intersection Observer for scroll-triggered animations
- Add structured data markup for rich snippets in search results
- Ensure mobile touch gestures for navigation (swipe, pinch-to-zoom)
- Optimize for Core Web Vitals with proper image sizing and loading priorities
```

---

## Page 3: The Four Acts - "Your Director's Journey"

### Page Structure & Sections

#### Process Overview
```
Grid: Timeline visualization
Elements:
- Vertical timeline on desktop, horizontal scroll on mobile
- Four main acts with interactive markers
- Duration estimates for each phase
- Visual icons for each stage
```

#### Act Details Sections
```
Grid: Alternating left-right layout for each act
Elements:
- Act title and description
- What to expect
- Deliverables included
- Client preparation required
```

#### Investment Calculator
```
Grid: Centered calculator tool
Elements:
- Service tier selection
- Add-on options
- Real-time pricing updates
- Investment summary
- Booking CTA
```

#### FAQ Section
```
Grid: Two-column accordion layout
Elements:
- Common questions about process
- Timeline expectations
- What's included/excluded
- Preparation requirements
```

### The Four Acts Copywriting

```
Page Header:
"Your Director's Journey"
"Like any great film, your wedding story follows a four-act structure. Here's how we bring yours to life."

Act I: Pre-Production - "The Vision"
"Duration: 1-2 months before your wedding
This is where the magic begins.

The Storyboarding Session
We don't ask about your timeline first. We ask about your love story.
In our 90-minute director's meeting, we map out the emotional arc of your day.
Who are the supporting characters? What moments matter most to you?
What's the theme of your love story—romance, adventure, tradition with a twist?

The Director's Treatment
After our session, you receive a beautiful document outlining:
- The logline of your wedding film
- Visual style and tone
- Key characters and their roles
- The emotional beats we'll capture

By the end of Act I, you'll feel like your love story is being taken seriously as a piece of art."

Act II: Production - "The Shoot"
"Duration: Your wedding day(s)
The cameras roll, but you won't feel like you're performing.

The Call Sheet
The day before your wedding, you receive a professional call sheet.
Scene by scene breakdown. Cast requirements. Everything organized.
No chaos. No confusion. Just clarity.

Direction, Not Posing
We don't say 'smile!'
We say 'Tell each other what you're most excited about for your honeymoon.'
We direct emotions, not expressions.
You live your moments. We capture the truth of them."

Act III: Post-Production - "The Edit"
"Duration: 3-4 weeks after your wedding
This is where your story comes alive.

The Dailies (48-hour delivery)
While we work on your main film, you get a sneak peek.
5 professionally edited Reels, ready for social media.
The social wedding happens in real-time. We make sure you're part of it.

The Edit Process
Regular updates so you never wonder what's happening.
Color grading that makes every frame cinema-ready.
Sound design that brings back the feeling of being there."

Act IV: The Premiere - "Your Release"
"Duration: 1 week after film delivery
Your love story deserves a proper premiere.

The Premiere Box
A beautifully curated package arrives at your door:
- Handwritten note from your director
- Custom engraved USB with your film
- Sensory elements that bring back your day
- Your premiere ticket

The Private Screening Room
Your personalized webpage where your film lives.
Not just a Dropbox link. A destination.
High-definition streaming. Easy downloads. Elegant presentation.

The Director's Commentary
One final call where we share behind-the-scenes stories.
The shots you didn't know we captured.
The moments that made the film special."

Investment Section:
"The Investment in Your Legacy"
"Great cinema isn't cheap. But the memories we create together? Priceless.

Our packages start at ₹2 lakhs and go up to ₹15 lakhs, depending on how comprehensive you want your director's treatment to be.

Every investment includes:
✓ The complete four-act experience
✓ A unified team (no vendor coordination headaches)
✓ Same-day social media content
✓ Lifetime access to your private screening room
✓ The peace of mind that your love story is in expert hands"

FAQ:
"Questions Every Couple Asks"

Q: How far in advance should we book?
A: "We take on limited projects each year to ensure each couple gets our full creative attention. Book 6-12 months in advance for the best dates."

Q: Do you shoot destination weddings?
A: "We love to travel for love. Destination weddings are some of our favorite stories to tell. Travel costs are additional."

Q: What if it rains on our outdoor events?
A: "Rain creates some of the most romantic, cinematic moments. We come prepared with equipment and backup plans that turn weather into an advantage."

Q: Can we see raw footage?
A: "Our artistry is in the edit. Like a film director, we craft the final product. Raw footage doesn't tell the story—the edit does."
```

### Technical Implementation Prompt

```
Create an interactive Four Acts page for Anaarkali Productions using Next.js 14, TypeScript, Framer Motion, and Tailwind CSS.

Requirements:
- Build animated timeline component with scroll-triggered reveals
- Implement interactive pricing calculator with real-time updates
- Create accordion FAQ component with smooth expand/collapse animations
- Add progress indicator showing user's position in the journey
- Build dynamic pricing form with service tier selection and add-ons
- Include modal overlays for detailed act descriptions
- Implement step-by-step walkthrough with next/previous navigation
- Add booking calendar integration (Calendly embed or custom solution)
- Create comparison table for different service packages
- Include testimonial carousel specific to process satisfaction
- Add floating "Book Consultation" CTA that follows scroll
- Implement form validation with error states and success feedback
- Use Intersection Observer for triggering animations as sections enter viewport
- Add WhatsApp chat integration for immediate queries
- Include downloadable service guide (PDF generation)
- Ensure mobile-first responsive design with touch-friendly interactions
- Add loading states for pricing calculations and form submissions
- Implement analytics tracking for user engagement with pricing calculator
```

---

## Page 4: Love is Love - "Every Story Deserves Telling"

### Page Structure & Sections

#### Inclusive Mission Statement
```
Grid: Full-width hero with video background
Elements:
- Diverse couples montage video
- Mission statement overlay
- Statistics about inclusive weddings
- CTA to view diverse portfolio
```

#### Diverse Portfolio Gallery
```
Grid: Grid layout showcasing different types of love
Elements:
- LGBTQ+ weddings
- Interfaith ceremonies  
- Court marriages
- Trans couple celebrations
- Different cultural traditions
```

#### Safe Space Messaging
```
Grid: Two-column testimonials from diverse couples
Elements:
- Quotes about feeling safe and understood
- Behind-the-scenes photos showing comfort
- Partner organization logos
```

#### Resources Section
```
Grid: Card-based layout
Elements:
- Inclusive wedding planning guides
- Cultural ceremony explanations
- Vendor recommendation lists
- Support resources
```

### Love is Love Copywriting

```
Page Header:
"Every Story Deserves Telling"
"Love doesn't fit into one box. Neither does our lens."

Mission Statement:
"We believe love is love is love.
No matter who you love.
How you love.
Where you love.
What traditions you follow.
What rules you break.

Your love story deserves to be told with the same cinematic beauty, respect, and attention to detail as any other.

This is more than a service—it's our promise.
A safe space where your authentic self isn't just welcomed, it's celebrated."

Statistics Section:
"The Love We've Captured So Far"
- "23 LGBTQ+ weddings and counting"
- "15 interfaith ceremonies celebrating unity in diversity"
- "8 court marriages proving love needs no grand stage"
- "31 families who found their perfect storytellers"

Portfolio Introduction:
"Love Stories That Break Beautiful Rules"

"Every love story here represents a couple who refused to fit into someone else's definition of what a wedding should be. We're honored to have been their directors."

[Portfolio thumbnails with captions like:]
- "Meera & Priya: When two brides wore red and broke every rule beautifully"
- "Karan & Mike: A Sikh-Christian wedding that celebrated both traditions"
- "Anjali & Dev: A courthouse 'I do' that was more romantic than any grand affair"

Testimonials:
"In Their Own Words"

"Finding vendors who genuinely celebrated our love—not just tolerated it—was our biggest challenge. Anaarkali didn't just accept us; they made us feel like the love story they'd been waiting to tell." 
— Priya & Meera, Mumbai

"They understood the cultural nuances of both our families and captured moments that honored everyone's traditions. That takes real skill and sensitivity."
— Sarah & Rajesh, interfaith couple, Delhi

"We were nervous about how our trans identity would be handled, but from day one, they used our correct names and pronouns and made us feel completely comfortable."
— Alex & Jamie, Bangalore

Resources Section:
"Resources for Every Love Story"

Planning an Inclusive Wedding:
- Vendor vetting questions to ask
- How to handle family conversations
- Creating guest experiences for everyone
- Legal requirements for different ceremony types

Understanding Different Ceremonies:
- Hindu wedding rituals explained
- Sikh ceremony traditions
- Christian wedding customs
- Muslim wedding celebrations
- Court marriage procedures

Safe Space Partnerships:
"We work closely with organizations creating inclusive wedding experiences:"
[Partner logos: LGBTQ+ advocacy groups, inclusive wedding planners, etc.]
```

### Technical Implementation Prompt

```
Build an inclusive Love is Love page for Anaarkali Productions using Next.js 14, TypeScript, Tailwind CSS with accessibility-first design.

Requirements:
- Create hero section with diverse couples video montage using HTML5 video
- Implement accessible portfolio gallery with proper alt text and ARIA labels
- Add filter system for different types of ceremonies and celebrations
- Build testimonial carousel with automatic progression and manual controls
- Create resource center with downloadable guides (PDF integration)
- Implement partner organization showcase with external links
- Add contact form specifically for inclusive wedding inquiries
- Include pride flag color animations using CSS animations or Framer Motion
- Implement statistics counter with number animation on scroll
- Add blog integration for inclusive wedding planning articles
- Create safe space messaging with prominent display
- Include multilingual support considerations for diverse communities
- Add schema markup for diversity and inclusion SEO
- Implement sharing functionality for couples to share their stories
- Create email newsletter signup for inclusive wedding resources
- Add progress indicator for wedding planning guides
- Ensure WCAG 2.1 AA compliance for accessibility
- Include proper focus management for keyboard navigation
- Add screen reader compatible elements throughout
- Implement high contrast mode toggle for visibility needs
```

---

## Page 5: Our Vision - "The Storytellers Behind the Lens"

### Page Structure & Sections

#### Founder Story
```
Grid: Split-screen layout
Elements:
- Professional portrait of Abhishek
- Personal story timeline
- Vision statement
- Behind-the-scenes footage
```

#### Team Showcase
```
Grid: Team member cards in responsive grid
Elements:
- Individual photographer profiles
- Their specialties and interests
- Personal photography style examples
- Fun facts and hobbies
```

#### Brand Values
```
Grid: Icon-based value proposition layout
Elements:
- Radical inclusivity
- Cinematic excellence
- Operational integrity
- Cultural sensitivity
```

#### Behind the Magic
```
Grid: Equipment and process showcase
Elements:
- Camera gear and technology
- Editing suite glimpses
- Innovation in wedding photography
- Awards and recognition
```

### Our Vision Copywriting

```
Page Header:
"The Storytellers Behind the Lens"
"Meet the humans who turn your love into cinema."

Founder Story:
"From Freelancer to Director: The Abhishek Story"

"Four years ago, I was just another freelancer with a camera and a dream.
Today, we're directing love stories that become family legacies.

The journey started with a simple frustration: watching couples receive beautiful but soulless wedding films. Technically perfect. Emotionally empty. I knew we could do better.

The Vision: Build a team that treats every wedding like the movie it deserves to be. Not just photographers, but directors. Not just vendors, but family.

The Mission: Preserve the essence of bonding between couples and families through cinematic storytelling that captures not just what happened, but how it felt.

The Dream: Scale from where we are today to a ₹20 crore brand that sets trends, breaks norms, and creates a new standard for what wedding documentation can be.

But here's what won't change: Every couple, regardless of budget, gets treated like they're starring in the most important film of the year. Because they are."

Personal Interests:
"When I'm not behind the camera, you'll find me:
📽️ Studying film direction (my ultimate career goal)
🎮 Playing strategy games (great for wedding day logistics)
✈️ Traveling to understand different cultures
🧩 Solving problems that seem impossible at first
🏃‍♂️ Planning the next big adventure"

Team Section:
"Our Cast of Storytellers"

"Great cinema requires a great team. Here are the artists who make our magic happen."

[Team Member 1]:
"Priya Sharma - Lead Cinematographer"
"Specializes in: Emotional close-ups and candid moments
Signature style: Uses natural light to create dreamy, romantic visuals
Fun fact: Speaks 4 languages, perfect for multicultural weddings
Personal motto: 'Every tear tells a story'"

[Team Member 2]:
"Vikram Singh - Drone Specialist & Adventure Photographer"
"Specializes in: Destination weddings and dramatic aerial shots  
Signature style: Bold compositions that make venues look cinematic
Fun fact: Has photographed weddings in 12 countries
Personal motto: 'Go big or go home'"

[Team Member 3]:
"Meera Gupta - Portrait Artist"
"Specializes in: Family dynamics and generational photographs
Signature style: Classic, timeless portraits with modern editing
Fun fact: Learned photography from her grandmother
Personal motto: 'Tradition meets innovation'"

Brand Values:
"What We Stand For"

"Radical Inclusivity
Love is love is love. Your story deserves to be told with respect, celebration, and joy—no matter who you are or who you love.

Cinematic Excellence  
We're not just documenting your day. We're creating art that will move people to tears decades from now.

Operational Integrity
We show up on time, deliver when promised, and communicate clearly. Boring basics that aren't basic at all.

Cultural Sensitivity
Understanding traditions while embracing evolution. Honoring your heritage while celebrating your individuality."

Behind the Magic:
"The Technology Behind the Art"

"Great storytelling requires great tools. Here's what we use to bring your vision to life:

Cameras: Sony FX6, A7S III for cinematic quality
Lenses: Prime lenses for that shallow depth of field magic
Drones: DJI Mavic 3 for breathtaking aerial shots
Audio: Wireless mics for crystal-clear vows
Editing: Professional color grading for film-quality results
Innovation: Guest photo integration technology for comprehensive coverage"

Awards & Recognition:
"Industry Recognition"
[List of awards, featured publications, client testimonials]

The Future Vision:
"Where We're Headed"

"By 2029, our vision is to:
• Document 100+ weddings annually
• Expand across India and internationally  
• Launch training programs for aspiring wedding cinematographers
• Open a flagship studio that sets industry standards
• Become the most trusted name in inclusive wedding documentation

But our north star remains the same: Every couple deserves to see their love story told like the epic it truly is."
```

### Technical Implementation Prompt

```
Create the Our Vision about page for Anaarkali Productions using Next.js 14, TypeScript, Framer Motion, and Tailwind CSS.

Requirements:
- Build interactive timeline component showing founder journey with scroll-triggered animations
- Create team member cards with hover effects revealing additional information
- Implement parallax scrolling effects for founder portrait section
- Add image carousel for behind-the-scenes content
- Create animated statistics counter for company metrics
- Build modal overlays for detailed team member profiles
- Implement smooth transitions between different sections using Framer Motion
- Add video testimonials from team members about working culture
- Create interactive equipment showcase with 3D hover effects
- Include awards and recognition timeline with certificate images
- Add newsletter signup for company updates and team insights
- Implement lazy loading for team photos and equipment images
- Create social media feed integration showing team behind-the-scenes content
- Add contact information for potential team members/job applications
- Include company culture video embedded with custom controls
- Build responsive design that works seamlessly across all devices
- Add loading animations for smooth page transitions
- Implement proper meta tags for social media sharing
- Create breadcrumb navigation for better user orientation
- Add skip navigation links for accessibility compliance
```

---

## Page 6: Begin Your Story - "Ready for Your Premiere?"

### Page Structure & Sections

#### Contact Form
```
Grid: Centered two-column layout
Elements:
- Comprehensive wedding details form
- Budget and date selection
- Service interests checkboxes
- Special requirements textarea
```

#### Consultation Booking
```
Grid: Embedded calendar interface
Elements:
- Available time slots
- Consultation type selection (in-person/video)
- Duration options (30min intro, 60min deep dive)
- Instant confirmation system
```

#### Location & Contact Info
```
Grid: Three-column contact layout
Elements:
- Office locations with maps
- Contact numbers and WhatsApp
- Email addresses by department
- Social media links
```

#### FAQ & Next Steps
```
Grid: Accordion layout
Elements:
- What happens after inquiry
- Consultation preparation guide
- Investment discussion expectations
- Timeline for booking confirmation
```

### Begin Your Story Copywriting

```
Page Header:
"Ready for Your Premiere?"
"Every great love story deserves a great director. Let's see if we're meant to tell yours."

Contact Form Introduction:
"Tell Us About Your Love Story"

"Before we talk packages and pricing, we want to understand your vision. What kind of film do you want your wedding to be?"

Form Fields:
Your Love Story Details:
- "Your names" (required)
- "Wedding date (or approximate)" (required)
- "Primary location/city" (required)
- "Tell us about your love story in 2-3 sentences"
- "What's most important to you about your wedding documentation?"
- "Describe your dream wedding film in one word"

Your Wedding Vision:
- Event type checkboxes: "Traditional, Modern, Destination, Court marriage, Multi-day celebration"
- "Approximate guest count"
- "Any cultural or religious ceremonies we should know about?"
- "Are you looking for photography, videography, or both?"

Your Investment Range:
- Budget selection: "₹2-5 lakhs, ₹5-8 lakhs, ₹8-12 lakhs, ₹12+ lakhs, Let's discuss"
- "What matters most in your investment?" (Quality, Comprehensive coverage, Quick delivery, etc.)

Special Considerations:
- "Any accessibility needs or special accommodations?"
- "Are you part of the LGBTQ+ community? (We're inclusive and celebrate all love)"
- "Any family dynamics or cultural sensitivities we should be aware of?"
- "How did you hear about us?"

[Submit Button: "Send Our Story"]

Consultation Booking:
"Book Your Director's Consultation"

"Ready to meet your potential directors? Book a consultation where we'll discuss:
• Your vision and our approach
• How we work together as creative partners  
• Investment options that fit your needs
• Timeline and next steps if we're a good match

Choose Your Consultation Style:
📞 30-Minute Discovery Call (Free)
Perfect for: Getting to know each other and basic questions

🎬 60-Minute Creative Deep-Dive (Free)
Perfect for: Detailed vision discussion and seeing if we're creative partners

🏠 90-Minute In-Person Meeting (₹500 refundable with booking)
Perfect for: Full experience including portfolio review and venue discussion"

Contact Information:
"Reach Your Directors"

📱 WhatsApp (Fastest Response): +91-XXXXX-XXXXX
📞 Phone: +91-XXXXX-XXXXX
✉️ Email: hello@anaarkaliproductions.com

Office Locations:
📍 Delhi/NCR: Available for in-person meetings
📍 Destination: We travel for your love story

Social Media:
📸 Instagram: @anaarkaliproductions (See our latest work)
🎬 YouTube: Anaarkali Productions (Watch complete films)

Next Steps:
"What Happens After You Reach Out"

"Within 24 hours:
✅ We'll review your love story details
✅ Send you a personalized response (not a template)
✅ Schedule your consultation at your convenience

During your consultation:
✅ We'll share our vision for your wedding film
✅ Show you examples of similar love stories we've told
✅ Discuss investment options that work for your budget
✅ Answer all your questions (and we have some for you too!)

If we're a perfect match:
✅ We'll send you a detailed proposal within 48 hours
✅ Reserve your wedding date immediately upon agreement
✅ Begin the pre-production planning process
✅ Welcome you to the Anaarkali family"

FAQ Section:
"Questions Before You Begin"

Q: How quickly do you respond to inquiries?
A: "Within 24 hours, often sooner. We know wedding planning doesn't wait."

Q: Do you meet with every couple?
A: "Yes! Every potential couple gets a consultation. We need to make sure we're the right creative partners for your vision."

Q: What if we're planning a destination wedding?
A: "We love to travel for love! Travel costs are additional, but we've documented love stories across India and internationally."

Q: How far in advance should we book?
A: "6-12 months is ideal, but we've made magic happen with less notice. Each situation is unique."

Q: What if we're not sure about our budget?
A: "That's exactly what consultations are for. We'll help you understand your options and find an investment level that works."

Q: Do you offer payment plans?
A: "Absolutely. We believe great storytelling shouldn't be limited by payment timing. We'll work with you."

Final CTA:
"Your Love Story is Waiting"

"Don't let another day pass without beginning the conversation about your wedding film. Great cinema starts with great planning."

[Begin Your Story - Large, prominent button]

"Remember: We only take on a limited number of weddings each year. If you've found us, and we speak to your heart, let's talk."
```

### Technical Implementation Prompt

```
Build a comprehensive contact and booking page for Anaarkali Productions using Next.js 14, TypeScript, React Hook Form with Zod validation, and Tailwind CSS.

Requirements:
- Create multi-step contact form with progress indicator and smooth transitions
- Implement form validation using Zod schema with real-time error feedback
- Add Calendly or custom calendar booking integration for consultations
- Build interactive budget calculator that updates based on selections
- Integrate Google Maps for office location display
- Add WhatsApp chat widget with pre-filled message templates
- Implement email automation for form submissions using SendGrid or similar
- Create conditional form fields that appear based on previous selections
- Add file upload capability for inspiration images or documents
- Include CAPTCHA or spam protection (hCaptcha or similar)
- Build confirmation page with next steps and calendar integration
- Add form progress saving (local storage) so users don't lose information
- Implement analytics tracking for form completion rates and dropoff points
- Create admin dashboard for managing inquiries and consultation bookings
- Add automated follow-up email sequences based on user responses
- Include social proof elements (recent bookings, testimonials) throughout
- Build mobile-optimized form with touch-friendly inputs
- Add keyboard navigation support for accessibility
- Implement proper loading states and success/error messaging
- Create PDF generation for consultation confirmation and next steps guide
- Add integration with CRM system for lead management
- Include A/B testing setup for form optimization
```

## Global Design System

### Typography
- **Primary Font**: Playfair Display (headings, elegant serif)
- **Secondary Font**: Inter (body text, modern sans-serif)
- **Accent Font**: Crimson Text (quotes, special callouts)

### Color Palette
- **Primary Gold**: #D4A574 (CTA buttons, accents)
- **Sage Green**: #9CAF88 (secondary elements)
- **Ivory**: #FAF9F6 (backgrounds, light sections)  
- **Charcoal**: #2C2C2C (primary text)
- **Warm White**: #FFFFFF (card backgrounds)

### Component Library
- Buttons: Primary (gold), Secondary (sage), Ghost (transparent)
- Cards: Elevated with subtle shadows
- Forms: Rounded inputs with focus states
- Navigation: Sticky header with smooth transitions
- Modals: Full-screen overlays with blur backgrounds

## Mobile-First Considerations

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+

### Mobile Optimizations
- Touch-friendly buttons (minimum 44px)
- Swipe gestures for galleries
- Compressed video for mobile
- WhatsApp integration for instant contact
- Simplified navigation menu
- Thumb-friendly form inputs

## SEO & Performance Strategy

### Technical SEO
- Schema markup for local business
- Open Graph tags for social sharing
- XML sitemaps and robots.txt
- Canonical URLs and meta descriptions
- Image alt text optimization

### Performance Targets
- Lighthouse Score: >90
- First Contentful Paint: <2.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## Content Management Strategy

### Sanity CMS Schema Structure
```
- Wedding Stories (portfolio items)
- Team Members (about page content)  
- Testimonials (client reviews)
- Service Packages (pricing information)
- Blog Posts (SEO content)
- Site Settings (global content)
```

## Deployment & Launch Strategy

### Hosting Setup
- Vercel for Next.js hosting
- Sanity Studio hosted separately
- CDN for image optimization
- Analytics and monitoring setup

### Pre-Launch Checklist
- Cross-browser testing
- Mobile device testing
- Form submission testing
- SEO audit completion
- Performance optimization
- Analytics configuration

---

This comprehensive guide provides everything needed to build Anaarkali Productions' website that truly embodies your brand positioning as luxury cinematic storytellers of authentic love. Each page is designed to avoid overcrowding while maintaining narrative flow, with copywriting that speaks to your target audience's deepest emotional needs around their wedding documentation.

The technical implementation prompts are detailed enough for any developer using Cursor AI to build upon, with specific requirements for performance, accessibility, and user experience that align with modern web development best practices.