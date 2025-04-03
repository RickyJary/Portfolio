import profilePhoto from '../../assets/img/foto.png'
import { ReactTyped } from 'react-typed'
import { useLanguage } from '../../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between py-20 px-10 bg-gray-100 dark:bg-black gap-12 rounded-lg">

      
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-[#27a3a9] ring-opacity-50 transition duration-500 hover:scale-105">
        <img 
          src={profilePhoto} 
          alt="Ricardo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="sm:w-2/3 text-center sm:text-left max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          {t('hero.title')} <span className="text-[#27a3a9] font-bold" >Ricardo</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {t('hero.iam')}{' '}
          <ReactTyped 
            className="text-[#27a3a9] font-bold" 
            strings={[
              t('hero.description1'),
              t('hero.description2'),
              t('hero.description3'),
              t('hero.description4'),
              t('hero.description5'),
              t('hero.description6'),
              t('hero.description7'),
              t('hero.description8'),
              t('hero.description9'),
              t('hero.description10'),
            ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={1000}
            loop
            showCursor
          />
        </p>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400">
          {t('about.objective')}
        </p>
      </div>
    </section>
  )
}

export default Hero
