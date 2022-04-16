import { FaLinkedin, FaGithubSquare, FaMedium, FaStackOverflow, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  const ICON_SIZE = 24;
  const styleClassName = "cursor-pointer mx-4 text-2xl bg-grey-50";
  return (
    <div className="flex justify-center dark:text-gray-50">
      <FaLinkedin
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaYoutube
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL, "_blank")}
        className={styleClassName}
      />
      <FaGithubSquare
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaMedium
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_MEDIUM_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaStackOverflow
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_STACKOVERFLOW_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
    </div>
  );
};

export default SocialLinks;
