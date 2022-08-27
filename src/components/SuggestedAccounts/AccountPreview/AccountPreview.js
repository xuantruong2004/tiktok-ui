import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
AccountPreview.propTypes = {};

function AccountPreview({ user }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={user.avatar} alt={user.name} />

                <Button primary small>
                    {' '}
                    Follow
                </Button>
            </header>

            <p className={cx('nickname')}>
                <strong>{user.nickname}</strong>
                {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('full-name')}>
                {user.first_name} {user.last_name}
            </p>

            <footer>
                <span className={cx('follow')}>
                    <strong>{user.followers_count}</strong>
                    <span>Followers</span>
                </span>
                <span className={cx('like')}>
                    <strong>{user.likes_count}</strong>
                    <span>Likes</span>
                </span>
            </footer>
        </div>
    );
}

export default AccountPreview;
