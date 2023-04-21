import Link from "next/link";
import { emailLogo2, locationIcon, phoneSVG } from "../utils/icons";
import info from "../utils/info";
import { useTranslations } from "../utils/translations";

export function ContactsSection({ contactsRef }) {
  const { t } = useTranslations();

  return (
    <section id="contacts" ref={contactsRef}>
      <div className="md:h-screen flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center items-center relative overflow-hidden">
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-full">
          <iframe
            title="map"
            name="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.8187624379536!2d69.19298099587215!3d41.296424173092824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd638477053%3A0x257a279a0e8f4348!2zNzVXVitXRmdsINCi0L7RiNC60LXQvdGCIDEwMDE3MywgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1652272449475!5m2!1suz!2s"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:absolute md:top-0 md:left-0 w-full md:h-full text-white">
          <div className="max-w-[1200px] mx-auto px-4 h-full flex items-center z-10">
            <div className="bg-mainBlue md:w-[500px] w-full flex flex-col space-y-4 sm:space-y-8 p-4 sm:p-8 md:p-10 rounded-[15px] z-30">
              <p className="mapContentTitle">{t.contacts}</p>
              <div className="flex flex-col space-y-4 sm:space-y-8">
                <div className="flex items-center space-x-4" id="location">
                  <div className="w-8">
                    <div className="bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center">
                      {locationIcon}
                    </div>
                  </div>
                  <div className="flex-auto">
                    <p className="contactsInfo">{info.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4" id="phone_number">
                  <div className="w-8">
                    <div className="bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center">
                      {phoneSVG}
                    </div>
                  </div>
                  <div className="flex-auto flex flex-col gap-[8px]">
                    {info.numbers.map((number) => {
                      return (
                        <a href={`tel: ${number}`} className="contactsInfo">
                          {number}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
