import { icon1 } from "../utils/icons";
import { useTranslations } from "../utils/translations";

export function ServicesSection({ servicesRef }) {
  const { t } = useTranslations();

  const services = [
    {
      id: 1,
      title: t.service1Title,
      text: t.service1Desc,
    },
    {
      id: 2,
      title: t.service2Title,
      text: t.service2Desc,
    },
    {
      id: 3,
      title: t.service3Title,
      text: t.service3Desc,
    },
    {
      id: 4,
      title: t.service4Title,
      text: t.service4Desc,
    },
    {
      id: 5,
      title: t.service5Title,
      text: t.service5Desc,
    },
    {
      id: 6,
      title: t.service6Title,
      text: t.service6Desc,
    },
  ];

  return (
    <section id="features" ref={servicesRef}>
      <div className="min-h-screen 2xl:h-auto max-w-[1200px] mx-auto px-4 py-[40px] md:py-[60px] flex flex-col items-center justify-center space-y-[30px] md:space-y-[60px]">
        <div className="flex flex-col justify-center items-center space-y-[10px] md:space-y-[30px]">
          <p className="teal title">{t.services}</p>
          <p className="subtitle">{t.allServices}</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="w-full featureCard flex flex-col space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center">
                  {icon1}
                </div>
                <div className="flex flex-col space-y-4">
                  <h5 className="featureTitle">{service.title}</h5>
                  <p className="featureContent">{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
