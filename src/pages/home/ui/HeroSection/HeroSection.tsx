import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-full mx-auto my-0 px-4 sm:px-6 py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-white">
        <div
          className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 py-8 md:py-12 min-h-[50vh] md:min-h-[60vh]">
          <div className="flex-1 w-full md:w-auto order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-darkBlue leading-[1.2] mb-6 font-bold">
              {t('home.headline')}
            </h1>
            <Link
              to="/learn"
              className="inline-block px-6 py-3 bg-transparent text-darkBlue border border-darkBlue rounded-[4px] no-underline font-medium transition-all duration-300 ease-in-out font-comfortaa hover:bg-darkBlue hover:text-white"
            >
              {t('home.startLearning')}
            </Link>
          </div>
          <div className="flex-1 w-full md:w-auto order-1 md:order-2 flex justify-center items-center">
            <img
              src="/assets/images/png/hero-illustration.png"
              alt="Learning Kazakh"
              className="max-w-full h-auto w-full max-w-[500px] md:max-w-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
