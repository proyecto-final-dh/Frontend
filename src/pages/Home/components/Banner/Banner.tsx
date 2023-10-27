import React from 'react';
import qr from '../../../../assets/qr-code-movil.png';
import dog from '../../../../assets/dog-glasses.png';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner_contenedor}>
      <div className={styles.image_QR}>
        <img src={qr} alt='Image-QR' />
      </div>
      <div className={styles.text_banner}>
        <p className={styles.black_text}>
          Todo esto <span className={styles.white_text}>sin instalar nada,</span>en un QR que podes agregar al collar de tu mascota.
        </p>
      </div>
      <div className={styles.dog_banner}>
        <img src={dog} alt='dog-banner' />
      </div>
    </div>
  );
};

export default Banner;
