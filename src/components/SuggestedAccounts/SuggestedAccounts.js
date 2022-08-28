import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
function SuggestedAccounts({ label, data = [], onChange }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>{label}</p>
            {data.map((user) => (
                <AccountItem key={user.id} user={user} />
            ))}

            <p className={cx('more-btn')} onClick={() => onChange()}>
                See more
            </p>
        </div>
    );
}

export default SuggestedAccounts;
