import neonPortrait from "@/assets/neon-portrait.jpg";
import lightSilhouette from "@/assets/light-silhouette.jpg";
import tarotCards from "@/assets/tarot-cards.jpg";
import prismaticPortrait from "@/assets/prismatic-portrait.jpg";
import digitalWaves from "@/assets/digital-waves.jpg";
import abstractPaint from "@/assets/abstract-paint.jpg";
import abstractLayers from "@/assets/abstract-layers.jpg";
import fluidArt from "@/assets/fluid-art.jpg";

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
    title: "Urban Pulse",
    category: "Reels",
    tags: ["REEL", "LIFESTYLE"],
    year: "2026",
    client: "Nomad Apparel",
    description: "A fast-cut lifestyle reel following golden-hour skate lines through the city, edited to a punchy hip-hop bed with beat-synced whip pans.",
    coverImage: neonPortrait,
    images: [neonPortrait],
    platform: "Reels",
    duration: "0:15",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.bunny,
    videoType: "mp4",
  },
  {
    id: "nova-apparel",
    title: "Nova Apparel",
    category: "Commercial",
    tags: ["COMMERCIAL", "FASHION"],
    year: "2026",
    client: "Nova",
    description: "A 30-second brand spot built on tight product cutaways, kinetic typography, and a slow color-graded push into a hero silhouette.",
    coverImage: lightSilhouette,
    images: [lightSilhouette],
    platform: "Commercial",
    duration: "0:30",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.blazes,
    videoType: "mp4",
  },
  {
    id: "iron-and-neon",
    title: "Iron & Neon",
    category: "Reels",
    tags: ["REEL", "FITNESS"],
    year: "2026",
    client: "Rep Club",
    description: "High-energy gym reel — slow-motion lifts intercut with neon-lit close-ups. Sound-design layered with breath, chalk, and impact.",
    coverImage: tarotCards,
    images: [tarotCards],
    platform: "Reels",
    duration: "0:12",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.escapes,
    videoType: "mp4",
  },
  {
    id: "morning-ritual",
    title: "Morning Ritual",
    category: "Shorts",
    tags: ["SHORT", "F&B"],
    year: "2025",
    client: "Kōhī Roasters",
    description: "A slow-cinema short for a specialty coffee brand — symmetrical composition, ambient sound, and a single vertical camera move.",
    coverImage: prismaticPortrait,
    images: [prismaticPortrait],
    platform: "Shorts",
    duration: "0:15",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.fun,
    videoType: "mp4",
  },
  {
    id: "the-process",
    title: "The Process",
    category: "TikTok",
    tags: ["TIKTOK", "BTS"],
    year: "2025",
    client: "Personal",
    description: "Behind-the-scenes edit walking through timeline, sound design, and color for a client reel. Captions cut on the beat.",
    coverImage: digitalWaves,
    images: [digitalWaves],
    platform: "TikTok",
    duration: "0:45",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.joyrides,
    videoType: "mp4",
  },
  {
    id: "hyper-highlights",
    title: "Hyper Highlights",
    category: "Shorts",
    tags: ["SHORT", "GAMING"],
    year: "2025",
    client: "Vault Esports",
    description: "Highlight reel for a competitive Valorant team — quick cuts, sound-effect stingers, and animated score overlays.",
    coverImage: abstractPaint,
    images: [abstractPaint],
    platform: "Shorts",
    duration: "0:20",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.meltdowns,
    videoType: "mp4",
  },
  {
    id: "founder-story",
    title: "Founder Story",
    category: "Commercial",
    tags: ["COMMERCIAL", "DOC"],
    year: "2025",
    client: "Alto Studio",
    description: "Documentary-style founder interview cut to feel warm and human, with vertical b-roll and a soft ambient score.",
    coverImage: abstractLayers,
    images: [abstractLayers],
    platform: "Commercial",
    duration: "0:60",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.elephants,
    videoType: "mp4",
  },
  {
    id: "kinetic-type",
    title: "Kinetic Type",
    category: "Reels",
    tags: ["REEL", "MOTION"],
    year: "2024",
    client: "Type Foundry",
    description: "Kinetic-typography reel exploring rhythm between voice-over cadence and letter-level animation. Motion-designed in After Effects.",
    coverImage: fluidArt,
    images: [fluidArt],
    platform: "Reels",
    duration: "0:22",
    aspectRatio: "9:16",
    videoUrl: SAMPLE.sintel,
    videoType: "mp4",
  },
];
