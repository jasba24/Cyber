import React from 'react';
import StarImage from '../../assets/images/start.png';
import '../../assets/scss/components/star/star.scss';

const Star = () => {
  return (
    <div className='star'>
      <div className='star__content-star'>
        <figure className='star__content-images'>
          <img className='star__image' src={StarImage} alt='Star' />
        </figure>
      </div>
    </div>
  );
};

export default Star;
