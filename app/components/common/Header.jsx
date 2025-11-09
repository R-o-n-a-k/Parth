import SocialMedia from "./SocialMedia";
import { introduction } from "../Data";
import ThemeIcon from "./ThemeIcon";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronsDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div
          data-aos="fade-down"
          className="banner w-full h-26 md:h-42 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner1.png')" }}
        ></div>
        <div className="relative flex flex-col -mt-15">
          <Avatar className="w-24 h-24 md:w-36 md:h-36 self-start ml-4 md:ml-6 border-4 border-white dark:border-black shadow-md">
            <AvatarImage
              src={introduction.image}
              alt={introduction.name}
              className="object-cover"
            />
            <AvatarFallback className="text-base font-semibold">
              {introduction.name}
            </AvatarFallback>
          </Avatar>
          <SocialMedia />

          <div className="p-4 md:p-6 mb-10">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="flex items-center gap-2"
            >
              <h1 className="tracking-wider leading-relaxed mt-1 text-2xl md:text-3xl font-bold text-foreground">
                {introduction.name}
              </h1>
              <ThemeIcon />
            </div>
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-muted-foreground leading-relaxed font-semibold text-base md:text-lg"
            >
              {introduction.designation}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="italic font-medium text-sm md:text-base text-grey-3 mb-5"
            >
              {introduction.location}
            </p>
            <Button data-aos="zoom-in"
              data-aos-delay="500"
              href={introduction.resume}
              size="lg" asChild>
              <a href={introduction.resume} download>
                Download CV
                <ChevronsDown className="animate-bounce font-bold" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
