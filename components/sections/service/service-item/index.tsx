import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../../stores/data';
import { Service } from '../../../../typing';
import CustomSVG from '../../../CustomSVG';
import ServiceItemDescription from './ServiceItemDescription';
import ServiceItemLink from './ServiceItemLink';
import ServiceItemTitle from './ServiceItemTitle';

type Props = {
  service: Service
}

const ServiceItem = ({ service }: Props) => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <div className={ 'group border-none transition  rounded-md text-[color:var(--text)] transition bg-[color:var(--primary-70)]' +
                     ' hover:z-[1] hover:shadow-2xl hover:cursor-pointer' }>
      <div className={ 'h-full flex flex-col justify-between p-8 space-y-8 border-dashed rounded-lg transition duration-300' +
                       ' text-[color:var(--background)]' +
                       ' hover:cursor-pointer' +
                       ' group-hover:bg-[color:var(--background)] group-hover:text-[color:var(--primary)]' +
                       ' group-hover:border' +
                       ' group-hover:scale-90' }>
        <div className="space-y-2">
          <div className={ 'w-full flex justify-end' }>
            <CustomSVG __html={ service.svg }
                       className={ 'h-20 w-20 md:w-40 md:h-40' }
            />
          </div>

          <div className="space-y-2">
            <ServiceItemTitle>{ service.name }</ServiceItemTitle>
            <ServiceItemDescription description={ service.description } />
          </div>
        </div>
        <ServiceItemLink link={ `mailto:${ pageInfo.email }?subject=[MORE-INFORMATIONS] - ${ service.name }` } />
      </div>
    </div>
  );
};

export default ServiceItem;
