import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a37a80efccf8be89b832bed494918d6f~c5_300x300.webp?x-expires=1660467600&x-signature=TBt7J4wcn9UAro8JIhKZ1%2BmShx4%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Quynh Hoa
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenquynhhoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
