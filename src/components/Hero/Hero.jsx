import profilePhoto from '../../assets/img/foto.png'
import { ReactTyped } from 'react-typed'
import { useLanguage } from '../../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();
  return (
  <section className="flex items-center justify-between py-20 px-6 bg-gray-100 dark:bg-black">
      <div className="w-1/3 rounded-full overflow-hidden">
        <img 
          src={profilePhoto} 
          alt="Ricardo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-2/3 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          {t('hero.title')}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
          <ReactTyped
            strings={[
              t('hero.description1'),
              t('hero.description2'),
              t('hero.description3'),
            ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={1000}
            loop
            showCursor
          />
        </p>
      </div>
    </section>
  )
}

export default Hero