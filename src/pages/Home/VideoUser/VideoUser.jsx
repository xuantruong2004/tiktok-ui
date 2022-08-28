import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './VideoUser.modules.scss';

const cx = classNames.bind(styles);
VideoUser.propTypes = {
    data: PropTypes.object,
};

function VideoUser({ data }) {
    return (
        <div className={cx('wrapper-video')}>
            <div>
                {' '}
                <img
                    className={cx('avatar-video')}
                    src={data.avatar}
                    alt={data.nickname}
                    width="100%"
                />
            </div>
            <div className={cx('content-video')}>
                <div className={cx('info-video')}>
                    <h4 className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && (
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        )}
                        <span className={cx('full-name')}>
                            {data.last_name} {data.first_name}
                        </span>
                    </h4>
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
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                    </div>
                </div>
                <Button className={cx('btn-video')} outline children={'Follow'} small />
            </div>
        </div>
    );
}

export default VideoUser;
