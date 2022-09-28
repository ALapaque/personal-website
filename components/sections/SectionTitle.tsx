import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h3 className={ 'absolute top-28 uppercase tracking-[1rem] text-gray-500 text-2xl' }>{ children }</h3>
  );
};

export default SectionTitle;