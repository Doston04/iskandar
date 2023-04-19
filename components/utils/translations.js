import { useRouter } from "next/router";
import uz from "../../translations/uz";
import ru from "../../translations/ru";

export function useTranslations() {
  const { locale } = useRouter();

  const t = locale === "uz" ? uz : locale === "ru" ? ru : null;

  return { t };
}
