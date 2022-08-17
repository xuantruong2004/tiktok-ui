import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);
function Footer() {
    const Item1 = [
        'About',
        'Newsroom',
        'TikTok',
        'TikTok Browse',
        'Contact',
        'Careers',
        'ByteDance',
    ];
    return (
        <div className={cx('wrapper')}>
            <FooterItem listLink={Item1} />
            <FooterItem listLink={Item1} />
            <FooterItem listLink={Item1} />
            <span className={cx('copy-right')}> @ 2022 TikTok</span>
        </div>
    );
}

Footer.propTypes = {};
export default Footer;
