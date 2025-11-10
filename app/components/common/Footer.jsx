import { Copyright } from "lucide-react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className=" bg-grey-1 text-muted-foreground font-medium text-center p-4 text-xs flex items-center justify-center">
      <span className="underline">Parth Pala</span> <Copyright size={18} className="mx-1" /> {currentYear} | All
      rights reserved.
    </div>
  );
};

export default Footer;
