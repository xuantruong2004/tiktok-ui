import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '~/assets/images/index';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ user }) {
    const [srcImg, setSrcImg] = useState('');
    const handleError = () => {
        setSrcImg(images.noImage);
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview customBtn="primary" user={user} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <>
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
                        src={srcImg || user.avatar}
                        alt={user.nickname}
                        onError={handleError}
                    />
                    <div className={cx('info')}>
                        <p className={cx('nickname')}>
                            <strong>{user.nickname}</strong>
                            {user.tick && (
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            )}
                        </p>
                        <p className={cx('full-name')}>
                            {user.first_name} {user.last_name}
                        </p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

export default AccountItem;
