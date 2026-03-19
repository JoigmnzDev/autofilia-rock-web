import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
  SiSpotify,
  SiSoundcloud,
} from "react-icons/si";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  size?: number;
}

const SOCIAL_LINKS = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiTiktok, href: "#", label: "TikTok" },
  { icon: SiYoutube, href: "#", label: "YouTube" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiSpotify, href: "#", label: "Spotify" },
  { icon: SiSoundcloud, href: "#", label: "SoundCloud" },
];

export function SocialLinks({
  className,
  iconClassName,
  size = 20,
}: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociales" className={className}>
      <ul className={cn("flex flex-wrap items-center justify-start gap-5")}>
        {SOCIAL_LINKS.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity hover:opacity-80"
              aria-label={social.label}
            >
              <social.icon
                style={{ width: size, height: size }}
                className={cn(
                  "fill-current transition-colors duration-300",
                  iconClassName,
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
