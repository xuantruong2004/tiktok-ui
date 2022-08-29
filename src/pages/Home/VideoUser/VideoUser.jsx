import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { EllipsisIcon, Favorite, FavoriteIcon, HomeIcon, ShareIcon } from '~/components/Icons';
import Image from '~/components/Image';
import AccountItemVideo from '~/components/SuggestedAccounts/AccountItemVideo';
import styles from './VideoUser.modules.scss';

const cx = classNames.bind(styles);
VideoUser.propTypes = {
    data: PropTypes.object,
};
function VideoUser({ data }) {
    const [active, setActive] = useState('');
    const handleToggle = () => {
        if (active === '') {
            setActive('active');
            data.popular_video.likes_count += 1;
        } else {
            setActive('');
            data.popular_video.likes_count -= 1;
        }
    };

    return (
        <div className={cx('wrapper-video')}>
            <AccountItemVideo user={data}>
                <Image className={cx('avatar-video')} src={data.avatar} alt={data.nickname} />
            </AccountItemVideo>

            <div className={cx('content-video')}>
                <div className={cx('info-video')}>
                    <AccountItemVideo user={data}>
                        <div className={cx('box-nicknam')}>
                            <span className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                {data.tick && (
                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                )}
                                <span className={cx('full-name')}>
                                    {data.last_name} {data.first_name}
                                </span>
                            </span>
                        </div>
                    </AccountItemVideo>
                    <span>{data.popular_video.description}</span>
                </div>
                <div className={cx('box-video')}>
                    <video
                        className={cx('video-play')}
                        src={data.popular_video.file_url}
                        type="video/mp4"
                        controls
                    ></video>
                    <div className={cx('nav-bar')}>
                        <div className={cx('box-icon')}>
                            <div className={cx('icon-video')}>
                                <ShareIcon />
                            </div>
                            <p>{data.popular_video.shares_count}</p>
                        </div>
                        <div className={cx('box-icon')}>
                            <div className={cx('icon-video')}>
                                <EllipsisIcon />
                            </div>
                            <p>{data.popular_video.comments_count}</p>
                        </div>
                        <div className={cx('box-icon')}>
                            <div className={cx('icon-video', `${active}`)} onClick={handleToggle}>
                                <FavoriteIcon />
                            </div>
                            <p>{data.popular_video.likes_count}</p>
                        </div>
                    </div>
                </div>
                <Button className={cx('btn-video')} outline children={'Follow'} small />
            </div>
        </div>
    );
}

export default VideoUser;
