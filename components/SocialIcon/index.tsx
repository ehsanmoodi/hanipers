import type { SocialIconProps } from "./types";

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-icon">
      {icon}
    </a>
  );
};

export default SocialIcon;
