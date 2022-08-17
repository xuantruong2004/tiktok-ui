import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function FooterItem({ listLink }) {
    return (
        <div className={cx('container')}>
            {listLink.map((item, index) => (
                <a href="#" className={cx('item')} key={index}>
                    {item}
                </a>
            ))}
        </div>
    );
}
FooterItem.propTypes = {
    listLink: PropTypes.array.isRequired,
};
export default FooterItem;
