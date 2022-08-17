import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function Hashtag({ title, to, icon, width = '16', height = '16' }) {
    return (
        <span to={to} className={cx('hashtag')}>
            <span className={cx('icon')}>{icon}</span>
            <p className={cx('title')}>{title}</p>
        </span>
    );
}

Hashtag.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Hashtag;
