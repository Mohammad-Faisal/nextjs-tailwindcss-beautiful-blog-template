import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="absolute dark:bg-slate-700 bg-gray-100 w-full">
      <div className="text-slate-600 body-font">
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap-reverse flex-col sm:flex-row">
            <p className="text-gray-500 dark:text-gray-50 text-sm text-center sm:text-left">
              © 2022 {process.env.NEXT_PUBLIC_OWNER_NAME} —
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
                className="text-gray-600 dark:text-gray-50 ml-1 "
                target="_blank"
                rel="noopener noreferrer"
              >
                {process.env.NEXT_PUBLIC_TWITTER_HANDLE}
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              <SocialLinks />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
