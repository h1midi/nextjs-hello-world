import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

export function MobileDrawer({ isOpen, onClose , contactRef }) {
  const t = useTranslations("HomePage");
  const scrollToContact = () => {
    onClose();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <LocalSwitcher />
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Button variant="outline" onClick={scrollToContact}>
            {t("contact")}
          </Button>
          </li>
        </ul>
      </div>
    );
  }
  