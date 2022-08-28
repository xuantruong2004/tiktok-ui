import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images/index';
import styles from './Image.module.scss';

const Image = forwardRef(
    ({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
        const [fallBack, setFallBack] = useState('');
        const handleError = () => {
            setFallBack(customFallBack);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};
export default Image;
