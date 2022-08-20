import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
AccountPreview.propTypes = {};

function AccountPreview(props) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/460b79b4f9a3faea06be6651728c0690~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1661043600&x-signature=v9nueFIBHHUITnET18b9X0X5nx4%3D"
                    alt=""
                />

                <Button primary small>
                    {' '}
                    Follow
                </Button>
            </header>

            <p className={cx('nickname')}>
                <strong>hangdam@2004</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('full-name')}>hang dam</p>

            <footer>
                <span className={cx('follow')}>
                    <strong>5.24M</strong>
                    <span>Followers</span>
                </span>
                <span className={cx('like')}>
                    <strong>5.12M</strong>
                    <span>Likes</span>
                </span>
            </footer>
        </div>
    );
}

export default AccountPreview;
