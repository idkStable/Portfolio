import aiCreativity from "@/assets/ai-creativity.png";
import michaelJordan from "@/assets/michael-jordan.png";
import creatorCategories from "@/assets/creator-categories.png";
import founderStories from "@/assets/founder-stories.png";
import partyEvent from "@/assets/party-event.png";
import oneLiner from "@/assets/one-liner.png";
import minecraftSmp from "@/assets/minecraft-smp.png";
import animeEdit from "@/assets/anime-edit.png";

export type Platform = "Reels" | "TikTok" | "Shorts" | "Commercial";
export type VideoType = "youtube" | "vimeo" | "mp4";
export type AspectRatio = "9:16" | "1:1" | "16:9";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
  platform: Platform;
  duration: string;
  aspectRatio: AspectRatio;
  videoUrl: string;
  videoType: VideoType;
}

// Sample MP4s that play out of the box — replace videoUrl with your own edits.
const SAMPLE = {
  bunny: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephants: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  blazes: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  escapes: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  fun: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  joyrides: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  meltdowns: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  sintel: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
};

export const projects: Project[] = [
  {
    id: "urban-pulse",
    title: "Creators Into Categories",
    category: "Reels",
    tags: ["REEL", "LIFESTYLE"],
    year: "2026",
    client: "Nomad Apparel",
    description: "A fast-cut lifestyle reel following golden-hour skate lines through the city, edited to a punchy hip-hop bed with beat-synced whip pans.",
    coverImage: aiCreativity,
    images: [aiCreativity],
    platform: "Reels",
    duration: "0:15",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212420470?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "nova-apparel",
    title: "Michael Jordan",
    category: "Commercial",
    tags: ["COMMERCIAL", "FASHION"],
    year: "2026",
    client: "Nova",
    description: "A 30-second brand spot built on tight product cutaways, kinetic typography, and a slow color-graded push into a hero silhouette.",
    coverImage: michaelJordan,
    images: [michaelJordan],
    platform: "Commercial",
    duration: "0:30",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212420456?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "iron-and-neon",
    title: "AI vs Human Creativity",
    category: "Reels",
    tags: ["REEL", "FITNESS"],
    year: "2026",
    client: "Rep Club",
    description: "High-energy gym reel — slow-motion lifts intercut with neon-lit close-ups. Sound-design layered with breath, chalk, and impact.",
    coverImage: creatorCategories,
    images: [creatorCategories],
    platform: "Reels",
    duration: "0:12",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212420458?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "morning-ritual",
    title: "Who You Help",
    category: "Shorts",
    tags: ["SHORT", "F&B"],
    year: "2025",
    client: "Kōhī Roasters",
    description: "A slow-cinema short for a specialty coffee brand — symmetrical composition, ambient sound, and a single vertical camera move.",
    coverImage: founderStories,
    images: [founderStories],
    platform: "Shorts",
    duration: "0:15",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212421807?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "the-process",
    title: "Unconventional Party",
    category: "TikTok",
    tags: ["TIKTOK", "BTS"],
    year: "2025",
    client: "Personal",
    description: "Behind-the-scenes edit walking through timeline, sound design, and color for a client reel. Captions cut on the beat.",
    coverImage: partyEvent,
    images: [partyEvent],
    platform: "TikTok",
    duration: "0:45",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212420459?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "hyper-highlights",
    title: "Founder Stories",
    category: "Shorts",
    tags: ["SHORT", "GAMING"],
    year: "2025",
    client: "Vault Esports",
    description: "Highlight reel for a competitive Valorant team — quick cuts, sound-effect stingers, and animated score overlays.",
    coverImage: oneLiner,
    images: [oneLiner],
    platform: "Shorts",
    duration: "0:20",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212422654?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "founder-story",
    title: "Infuse SMP",
    category: "Commercial",
    tags: ["COMMERCIAL", "DOC"],
    year: "2025",
    client: "Alto Studio",
    description: "Documentary-style founder interview cut to feel warm and human, with vertical b-roll and a soft ambient score.",
    coverImage: minecraftSmp,
    images: [minecraftSmp],
    platform: "Commercial",
    duration: "0:60",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212421404?fl=tl&fe=ec",
    videoType: "vimeo",
  },
  {
    id: "kinetic-type",
    title: "Anime Edit",
    category: "Reels",
    tags: ["REEL", "MOTION"],
    year: "2024",
    client: "Type Foundry",
    description: "Kinetic-typography reel exploring rhythm between voice-over cadence and letter-level animation. Motion-designed in After Effects.",
    coverImage: animeEdit,
    images: [animeEdit],
    platform: "Reels",
    duration: "0:22",
    aspectRatio: "9:16",
    videoUrl: "https://vimeo.com/1212421324?fl=tl&fe=ec",
    videoType: "vimeo",
  },
];
