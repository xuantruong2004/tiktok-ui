import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')} onClick={() => console.log('hello')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a71d9b209821eafc9842ea598dffd210~c5_100x100.jpeg?x-expires=1660881600&x-signature=Ldy47TyoOewiKAN6xQSgqHzayCc%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <strong>hangdam@2004</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('full-name')}>Hang Dam</p>
            </div>
        </div>
    );
}

export default AccountItem;
