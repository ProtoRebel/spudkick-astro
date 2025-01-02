---
client: Braceline
tagline: Collaborative, online CAD software
affiliate: Beta Canon
searchTerm: wind bracing calculator
searchLink: bracelinecalc.com
launchDate: January 2023
scope: Web app, user research, marketing website, training materials
imgPath: /assets/portfolio/braceline/
logo: braceline-logo.svg
emblem: braceline-emblem.svg
photoFeatured: braceline-featured.webp
photos:
  - img: app-floorplan.webp
    title: Floor Plan Overview
  - img: app-plans.webp
    title: List of Plans
  - img: app-setup.webp
    title: Create New Plan
  - img: app-panels.webp
    title: Add/Edit Bracing Panels
  - img: app-pdf.webp
    title: Output PDF
---

## Challenge

Dynamically read architectural floor plan PDF’s, calculate the required wind bracing as per state and federal guidelines (IRC), draw wind bracing panels, then the app determines if you have applied enough wind bracing to pass code.
Once the plans are good, it outputs a printable, high-res PDF with a table showing the math of the wind bracing calculations and mocked-up floor plans with the drawn wind bracing panels.

## Key Features

These features were implemented one-at-a-time, tested, retested, then iterated and improved upon.
A more steady, tactful climb has proved incredibly useful for Braceline as it continues to grow in popularity and lead the architecture drafting industry in productivity.

### Scale & Read Blueprints
- Users upload the high-res PDF they output from their CAD program 
- Users show the app where the edges of the structure are and tell it how many stories the building is 
- Users determine how far apart the edges they just drew are 
- The app now knows how to scale the plan 
- The app then determines how much wind bracing the plans require 

### Draw on Plans
- After scaling the plan, the architects can draw wind bracing panels right onto the plan 
- Each wall bracing panel can have special properties and conditions for how it will apply to the building structure 
- If the architect has added sufficient wind bracing, then the app shows that the plan is now viable and will pass code 
- Architects add notes about how the wind bracing panels should be implemented and areas to pay extra attention to. 

### Collaboration
- Often architects need their work peer reviewed to ensure the highest quality and safety of the structure 
- A user can invite another team member to work on the plan in real time together 
- The user can also invite a read-only member like a city or county official to review the plans 
- If a user is not a member, they are required to sign up for an account and start a free trial upon arriving in the app, increasing conversion 

### Exporting Work
- When a plan has been vetted by peers, inspectors, and other officials it’s time to get the plan printed and prepared for the contractors to build 
- Users output a PDF that has all of their drawings of wind bracing panels and notes marking up the blueprints 
- A table of calculations and their pass/fail status are appended as additional pages 
- Citations of code and a legend are also included with the calculations to contextualize the drawn plans
