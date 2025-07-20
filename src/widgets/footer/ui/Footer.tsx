import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  const resourcesLinks = [
    { to: '/about', text: t('common.about') },
    { to: '/proficiency-test', text: t('footer.checkYourself') },
    { to: '/learn', text: t('common.learn') },
    { to: '/word-of-the-day', text: t('footer.wordOfTheDay') },
  ]

  const libraryLinks = [
    { to: '/read', text: t('footer.read') },
    { to: '/watch', text: t('footer.watch') },
    { to: '/lessons', text: t('common.lessons') },
  ]

  return (
    <footer className="bg-darkBlue pt-20 pb-5 mt-25">
      <div className="px-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <section className="footer__column">
            <Link to="/" className="inline-block rounded">
              <img
                className="w-48 h-auto hover:opacity-90 transition-opacity"
                src="/assets/images/png/logo-white.png"
                alt="Aiqyn Soz"
                loading="lazy"
                width="234"
                height="60"
              />
            </Link>
            <p className="text-white text-md">{t('footer.tagline')}</p>
          </section>

          <nav className="footer__column" aria-labelledby="resources-heading">
            <div className="relative">
              <h2 id="resources-heading" className="text-white font-bold">
                {t('footer.resources')}
              </h2>
              <div className="absolute bottom-[-14px] left-0 w-[130px] h-px bg-primary" />
            </div>
            <ul className="flex flex-col mt-8">
              {resourcesLinks.map((link, index) => (
                <li key={index} className="mt-3 first:mt-0">
                  <Link
                    to={link.to}
                    className="text-white hover:text-primary text-md mb-2 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__column" aria-labelledby="library-heading">
            <div className="relative">
              <h2 id="library-heading" className="text-white font-bold">
                {t('footer.library')}
              </h2>
              <div className="absolute bottom-[-14px] left-0 w-[130px] h-px bg-primary" />
            </div>
            <ul className="flex flex-col mt-8">
              {libraryLinks.map((link, index) => (
                <li key={index} className="mt-3 first:mt-0">
                  <Link
                    to={link.to}
                    className="text-white hover:text-primary text-md mb-2 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer__column" aria-labelledby="contact-heading">
            <div className="relative">
              <h2 id="contact-heading" className="text-white font-bold">
                {t('footer.contact')}
              </h2>
              <div className="absolute bottom-[-14px] left-0 w-[130px] h-px bg-primary" />
            </div>
            <ul className="text-white text-md space-y-2 mt-8">
              <li>
                <span className="font-medium">{t('footer.location')}:</span> {t('footer.address')}
              </li>
              <li className="mt-3">
                <span className="font-medium">{t('footer.email')}:</span>{' '}
                <a href="mailto:sagindik2003@gmail.com" className="hover:text-primary transition-colors">
                  sagindik2003@gmail.com
                </a>
              </li>
              <li className="mt-3">
                <span className="font-medium">{t('footer.phone')}:</span>{' '}
                <a href="tel:+77782905027" className="hover:text-primary transition-colors">
                  +7 (778) 290-5027
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="relative flex justify-center text-primary text-sm pt-7 mt-10">
          <div className="absolute top-0 left-0 w-full h-px bg-primary" />
          <p className="text-center px-2 font-poppins">
            Copyright ©{currentYear} aiqynsoz.kz {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
