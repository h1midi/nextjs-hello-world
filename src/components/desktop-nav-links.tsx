import { Button } from "@/components/ui/button";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

export function DesktopNavLinks({contactRef}) {
  const t = useTranslations("HomePage");
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center space-x-4">
          <LocalSwitcher />
          <Button variant="outline" onClick={scrollToContact}>
            {t("contact")}
          </Button>
        </div>
  );
}
