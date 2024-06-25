import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const icons = [
    { component: <BsTwitter />, link: "https://twitter.com" },
    { component: <BsInstagram />, link: "https://instagram.com" },
    { component: <BsFacebook />, link: "https://facebook.com" },
    { component: <FaSnapchatGhost />, link: "https://snapchat.com" },
  ];

  const footerLinks = [
    { text: "About Us", link: "#" },
    { text: "Contact", link: "#" },
    { text: "Terms of Service", link: "#" },
    { text: "Privacy Policy", link: "#" },
    { text: "Help Center", link: "#" },
  ];

  return (
    <footer className="bg-white border-t-2 shadow-md shadow-gray-300 py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[30px] text-gray-600 hover:text-black duration-100 ease-out"
            >
              {icon.component}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4 lg:mb-0">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-gray-600 hover:text-black duration-100 ease-out"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Branding */}
        <div className="text-gray-600 text-center lg:text-right">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

