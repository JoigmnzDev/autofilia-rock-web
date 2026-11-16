type albumType = "ALBUM" | "EP" | "SINGLE";

export type StreamingPlatform = "spotify" | "appleMusic" | "youtube" | "deezer";

export const STREAMING_LABELS: Record<StreamingPlatform, string> = {
  spotify: "SPOTIFY",
  appleMusic: "APPLE MUSIC",
  youtube: "YOUTUBE",
  deezer: "DEEZER",
};

interface Track {
  title: string;
  duration: string;
  year: string;
  trackNum: number;
}

interface AlbumRelease {
  id: string;
  title: string;
  synopsis: string;
  type: albumType;
  releaseYear: string;
  coverImage?: string;
  tracks: readonly Track[];
  streaming: Partial<Record<StreamingPlatform, string>>;
}

const ALBUMS = {
  saboreandoSales: {
    id: "saboreando-sales",
    title: "Saboreando Sales",
    synopsis:
      " La cura está en el agua salada: llorar, transpirar o nadar en el mar. Ocho canciones hechas con el corazón.",
    type: "ALBUM",
    releaseYear: "2025",
    coverImage: "/images/albums/saboreando-sales.jpg",
    tracks: [
      { title: "UN LUGAR SEGURO", duration: "3:20", year: "2025", trackNum: 1 },
      { title: "EL TIEMPO PASA", duration: "2:51", year: "2025", trackNum: 2 },
      {
        title: "EL GUERRERO SIN ARMAS",
        duration: "3:27",
        year: "2025",
        trackNum: 3,
      },
      { title: "ME CANSÉ", duration: "2:47", year: "2025", trackNum: 4 },
      { title: "SER LIBRE", duration: "2:45", year: "2025", trackNum: 5 },
      { title: "TODO CONTIGO", duration: "3:47", year: "2025", trackNum: 6 },
      { title: "MIS MIEDOS", duration: "2:29", year: "2025", trackNum: 7 },
      {
        title: "LIBERTADES QUE QUEDAN",
        duration: "3:20",
        year: "2025",
        trackNum: 8,
      },
    ],
    streaming: {
      appleMusic:
        "https://music.apple.com/us/album/saboreando-sales/1810896908",
      spotify: "https://open.spotify.com/album/0AbFFTfM96AJWToU49venu",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_nF9WMShc_0qdtiAIUfW_6zRqbKvWC7Gr8&si=NBW6f7vGgGdYNjFm&drli=1",
      deezer: "https://www.deezer.com/es/album/748196251",
    },
  },
} as const satisfies Record<string, AlbumRelease>;

export const MAIN_ALBUM = ALBUMS.saboreandoSales;

const ALL_ALBUMS = Object.values(ALBUMS);

export interface SocialLinkItem {
  id: "instagram" | "tiktok" | "youtube" | "facebook" | "spotify";
  name: string;
  url: string;
}

export const SITE_CONFIG = {
  name: "AUTOFILIA",
  url: "https://www.autofiliarock.com",
  email: "autofiliarock@gmail.com",
  mailto: "mailto:autofiliarock@gmail.com",
  social: {
    instagram: "https://www.instagram.com/autofiliarock/",
    tiktok: "https://www.tiktok.com/@autofiliarock",
    youtube: "https://www.youtube.com/@autofiliarock",
    facebook: "https://www.facebook.com/@autofiliarock",
    spotify: "https://open.spotify.com/artist/2HGgA0696fk36JLkxX8whK",
  },
} as const;

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { id: "instagram", name: "Instagram", url: SITE_CONFIG.social.instagram },
  { id: "tiktok", name: "TikTok", url: SITE_CONFIG.social.tiktok },
  { id: "youtube", name: "YouTube", url: SITE_CONFIG.social.youtube },
  { id: "facebook", name: "Facebook", url: SITE_CONFIG.social.facebook },
  { id: "spotify", name: "Spotify", url: SITE_CONFIG.social.spotify },
];
