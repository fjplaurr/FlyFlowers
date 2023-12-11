import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styles from './Advertisement.module.scss';
import Button from '../../../components/Button/Button.component';

const Advertisement = ({ backgroundImage, history, title, subtitle }) => {
  const backgroundImageClassName =
    backgroundImage === 'colorful'
      ? styles.backgroundImageColorful
      : styles.backgroundImageLight;

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <section className={`${styles.container} ${backgroundImageClassName}`}>
      <div className={styles.lightBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.buttonWrapper}>
          <Button
            type="button"
            onClick={() => history.push('/shop')}
            size={isDesktop ? 'big' : 'small'}
          >
            Discover it
          </Button>
        </div>
      </div>
    </section>
  );
};

Advertisement.propTypes = {
  backgroundImage: PropTypes.oneOf(['colorful', 'light']).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Advertisement;
