import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BaseButton from '@shared/ui/UI/Base/BaseButton.tsx'

const WhySection = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-full mx-auto my-0 px-4 sm:px-6 py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-white">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-8 py-8 md:py-12">
          <div className="flex-1 w-full md:w-auto text-center md:text-right">
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] leading-[1.2] mb-4 md:mb-6">
              <span className="text-primary">{t('home.why')}</span>
              <span className="text-darkBlue"> Aiqyn Soz</span>
              <span>?</span>
            </h2>
            <p className="text-primary text-lg sm:text-xl leading-[1.6] mb-6 md:mb-8">
              {t('home.whyDescription')}
            </p>
            <Link
              to="/about"
            >
              <BaseButton variant="primary">
                {t('home.learnMore')}
              </BaseButton>
            </Link>
          </div>
          <div className="flex-1 w-full md:w-auto flex justify-center">
            <img
              src="/assets/images/png/rating-illustration.png"
              alt="Rating"
              className="max-w-full h-auto w-full max-w-[400px] md:max-w-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection
