import { SOCIAL_LINKS, type SocialLinkItem } from "@/config/site";
import { type IconType } from "react-icons";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaSpotify,
} from "react-icons/fa6";

const SOCIAL_ICONS: Record<SocialLinkItem["id"], IconType> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  facebook: FaFacebook,
  spotify: FaSpotify,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({
  className = "",
  iconClassName = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = SOCIAL_ICONS[social.id];

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Icon
              size={20}
              className={`transition-colors duration-200 ${iconClassName}`}
            />
          </a>
        );
      })}
    </div>
  );
}
