import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BaseButton from '@shared/ui/UI/Base/BaseButton.tsx'

interface CourseCard {
  img: string
  alt: string,
  text: string
  link: string,
  btnText: string
}

export const CoursesSection = () => {
  const { t } = useTranslation()

  const cards: CourseCard[] = [
    {
      img: '/assets/images/png/proficiency-illustration.png',
      alt: 'Proficiency Test',
      text: t('home.proficiencyCardText'),
      link: '/proficiency-test',
      btnText: t('home.test'),
    },
    {
      img: '/assets/images/png/watch-read-illustration.png',
      alt: 'Watch and Read',
      text: t('home.watchReadCardText'),
      link: '/learn',
      btnText: t('home.more'),
    },
    {
      img: '/assets/images/png/chatbot-illustration.png',
      alt: 'AI Chatbot',
      text: t('home.chatbotCardText'),
      link: '/learn',
      btnText: t('home.more'),
    },
  ]

  return (
    <section className="w-full max-w-full mx-auto my-0 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-white">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 font-comfortaa">{t('home.popularCourses')}</h2>
        <p className="text-lg font-comfortaa text-gray mb-12">{t('home.coursesDescription')}</p>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 font-comfortaa bg-secondary p-7 rounded-lg flex flex-col items-center text-center h-[450px]"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-60 h-60 object-contain mx-auto mb-8"
              />
              <p className="w-full text-center mb-8 flex-grow text-base leading-relaxed text-black">
                {card.text}
              </p>
              <Link
                to={card.link}
              >
                <BaseButton variant="secondary">
                  {card.btnText}
                </BaseButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
