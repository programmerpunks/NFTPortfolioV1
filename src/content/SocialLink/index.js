import { HiOutlineMail } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";
import { TbBrandTwitter } from "react-icons/tb";

export const personallLinks = {
  flufMail: "fluf@nonfungiblelabs.xyz",
  beyondMail: "hello@beyond.fun",
};

export const socialLinks = [
  {
    title: "Twitter",
    icon: <TbBrandTwitter size={30} />,
    link: "https://twitter.com",
  },
  {
    title: "Instagram",
    icon: <SiInstagram size={25} />,
    link: "https://www.instagram.com",
  },
  {
    title: "Email",
    icon: <HiOutlineMail size={30} />,
    link: "https://www.gmail.com",
  },
];
