# Future Improvements

Low-priority items identified during code review. Address as time permits.

## Code Cleanup

### Unused React Imports
React 17+ JSX transform doesn't require React imports. Remove from:
- `src/components/ui/AppIcon.tsx`
- `src/app/menu/components/MenuItemCard.tsx`
- `src/app/menu/components/MenuInteractive.tsx`
- `src/app/menu/components/OrderSummary.tsx`
- And ~8 other component files

**Fix:** Search for `import React from 'react'` and remove where unused.

### Hydration Warnings Suppressed
Files using `suppressHydrationWarning` to hide SSR/client mismatches:
- `src/app/homepage/components/NewsletterSignup.tsx:56`
- `src/app/homepage/components/LocationHours.tsx:114`

**Fix:** Investigate root cause (likely timezone-dependent date calculations) and fix properly instead of suppressing.

---

## Configuration

### Hard-coded Discount
10% combo discount is hard-coded:
- `src/app/menu/components/ComboBuilder.tsx:56`

**Fix:** Move to `src/config/site.ts` or make configurable via CMS/admin.

---

## UX Improvements

### Missing Loading States
Forms lack loading indicators during submission:
- Photo submission modal
- Newsletter signup (partially addressed)
- Contact forms

**Fix:** Add spinner or skeleton states during async operations.

### Missing Error UI States
Components fail silently without user feedback:
- Image load failures (shows fallback but no message)
- API call failures in some components

**Fix:** Add toast notifications or inline error messages.

---

## Accessibility

### Missing ARIA Attributes
Throughout UI components:
- Buttons missing `type` attribute (defaults to "submit")
- Missing `aria-expanded` on toggles/dropdowns
- Missing `aria-label` on icon-only buttons
- Missing ARIA roles on custom components
- Some images have generic alt text

**Priority files:**
- `src/components/common/Header.tsx` (mobile menu toggle)
- `src/app/menu/components/MenuItemCard.tsx` (quantity controls)
- `src/app/community-gallery/components/PhotoGalleryGrid.tsx`

**Fix:** Audit with axe DevTools or similar, add missing attributes.

---

## Testing

### No Test Infrastructure
- No test files exist
- No testing libraries configured
- Critical functions untested (form validation, price calculations)

**Fix:**
1. Add Jest + React Testing Library
2. Write tests for:
   - `src/app/api/newsletter/route.ts`
   - `src/app/community-gallery/components/PhotoSubmissionModal.tsx` (validation)
   - `src/app/menu/components/ComboBuilder.tsx` (price calculations)
   - `src/config/site.ts` (ensure config is valid)

---

## Performance

### Consider React Server Components
Many components are marked `'use client'` that could be server components:
- Static content sections
- Layout components without interactivity

**Fix:** Audit components and remove `'use client'` where possible to reduce client bundle size.
