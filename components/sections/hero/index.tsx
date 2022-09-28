import { motion } from 'framer-motion';
import Section from '../index';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import HeroButtons from './HeroButtons';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <motion.section
      id={ 'projects' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'snap-start' +
                  ' h-screen' +
                  ' flex' +
                  ' flex-col' +
                  ' space-y-8' +
                  ' items-center' +
                  ' justify-center' +
                  ' text-center' +
                  ' overflow-hidden' }>
      <HeroBackgroundAnimation />

      <div className={ 'z-20 flex flex-col gap-6' }>
        <img
          className={ 'relative rounded-full h-80 w-80 mx-auto object-cover' }
          src={ 'images/amaury_lapaque.jpg' }
          alt="Amaury Lapaque" />

        <HeroSubtitle />
        <HeroTitle />
        <HeroButtons />
      </div>
    </motion.section>
  );
};

export default Hero;
