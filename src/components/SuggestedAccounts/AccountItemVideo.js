import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Children, useState } from 'react';
import images from '~/assets/images/index';
import Image from '../Image/index';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItemVideo({ user, children }) {
    const [srcImg, setSrcImg] = useState('');
    const handleError = () => {
        setSrcImg(images.noImage);
    };
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview customBtn="outline" user={user} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <>
            <Tippy
                offset={[-10, 10]}
                interactive
                placement="bottom-start"
                delay={[500, 0]}
                render={renderPreview}
            >
                {children}
            </Tippy>
        </>
    );
}

export default AccountItemVideo;
