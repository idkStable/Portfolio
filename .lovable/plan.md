## Plan: Sameer Meena — minimalistic video portfolio with playback

The reference image shifts the aesthetic away from the previous "Ember Kinetic Grid" direction toward something **minimal, playful, and paper/desktop-inspired** — soft pastel background, off-white card surface, mixed serif + pixel/mono typography, sticky-note and paper-clip accents, and clear "1 hero + grid" structure. This plan replaces the prior Ember direction.

### Visual direction
- Soft lavender/cream background with a large off-white "folder" card as the main surface.
- Type mix: elegant serif for the wordmark (portfolio-style), condensed sans for labels, and a small pixel/mono accent for tags — max 2 real fonts + 1 accent.
- Playful stationery details used sparingly: a sticky-note badge ("VIDEO EDITOR — SHORT FORM"), a paper-clip, and a "2026" tab on the folder.
- Minimal chrome: thin borders, generous whitespace, no heavy shadows.

### Homepage (`Index.tsx`)
- Hero card with the folder metaphor:
  - Tab reading "SAMEER MEENA'S PORTFOLIO" top-left, "2026" tab top-right.
  - Large centered wordmark "portfolio" in the mixed serif/pixel treatment.
  - Sticky-note badge overlapping the top-right: "SHORT-FORM VIDEO EDITOR".
  - Small signature "SAMEER MEENA" bottom-right.
- Below the hero: a clean 3-column responsive grid of short-form video thumbnails (9:16 aspect for reels).
- Each thumbnail: poster image, small pixel/mono category tag, title, hover-reveal play glyph. Click opens a modal video player.

### Video playback
- Add a lightweight `<VideoPlayerDialog>` built on the existing shadcn `Dialog` — no new heavy dependencies.
- Supports two source types per project:
  - **YouTube/Vimeo URL** → renders in an `<iframe>` sized to 9:16 (portrait) or 16:9.
  - **Direct MP4 URL** → renders in a native `<video controls autoPlay>` element.
- Dialog is centered, dark backdrop, ESC / click-outside closes, and it pauses/unmounts the video on close so audio stops.
- Keyboard: Enter/Space on a thumbnail opens the player.

### Project data (`src/data/projects.ts`)
- Extend `Project` with:
  - `videoUrl: string` (YouTube, Vimeo, or MP4)
  - `videoType: "youtube" | "vimeo" | "mp4"`
  - `platform: "TikTok" | "Reels" | "Shorts" | "Commercial"`
  - `duration: string` (e.g. "0:15")
  - `aspectRatio: "9:16" | "1:1" | "16:9"` (default 9:16)
- Seed 6 sample projects with placeholder YouTube Shorts URLs and existing cover images so playback is real and testable out of the box. The user can swap the URLs later.

### Other pages
- **Header/Layout**: update wordmark to "Sameer Meena" in the new serif; keep existing nav.
- **Work.tsx**: reuse the same thumbnail grid + video player.
- **Project.tsx**: swap the static image display for the embedded video player.
- **About.tsx / Contact.tsx**: light copy tweaks to reflect video editing (name, expertise pills → "Reels", "TikTok", "YouTube Shorts", "Motion Graphics", "Color Grading", "Sound Design"). No structural changes.

### Tokens & typography
- Update `index.css` with a lavender/cream palette (semantic tokens only — no hardcoded colors in components), light-mode by default (switching from the current dark-first theme, per the reference).
- Load the new serif + mono via Google Fonts in `index.html`; update `tailwind.config.ts` `fontFamily`.
- Update `index.html` title + meta description to "Sameer Meena — Short-form Video Editor".

### Out of scope
- Backend / uploads / CMS.
- Custom video hosting (relies on YouTube/Vimeo/MP4 links you provide).
- Analytics on plays.

### Verification
- Build passes with no TypeScript errors.
- Playwright screenshot of `/` shows the folder-card hero and thumbnail grid.
- Clicking a thumbnail opens the modal and the video starts playing; closing it stops audio.