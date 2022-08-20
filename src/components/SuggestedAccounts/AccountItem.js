import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy
            offset={[-20, 0]}
            interactive
            placement="bottom"
            delay={[500, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')} onClick={() => console.log('hello')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/460b79b4f9a3faea06be6651728c0690~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1661043600&x-signature=v9nueFIBHHUITnET18b9X0X5nx4%3D"
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
        </Tippy>
    );
}

export default AccountItem;
