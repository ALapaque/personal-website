import { motion } from 'framer-motion';
import TestimonialsList from './TestimonialsList';
import TestimonialsTitle from './TestimonialsTitle';

const TestimonialsSection = () => {
  return (
    <motion.section
      id={ 'services' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'flex flex-col text-left md:flex-row max-w-full' +
                  ' justify-evenly mx-auto items-center z-10' }>
      <TestimonialsTitle />

      <TestimonialsList />
    </motion.section>
  );
};

export default TestimonialsSection;
