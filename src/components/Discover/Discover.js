import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import config from '~/config';
import { HashtagIcon, MusicIcon } from '../Icons';
import styles from './Discover.module.scss';
import Hashtag from './Hashtag';

const cx = classNames.bind(styles);
function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('container')}>
                <Hashtag to={config.routes.profile} icon={<HashtagIcon />} title="truongxuan" />
                <Hashtag
                    to={config.routes.profile}
                    icon={<MusicIcon />}
                    title="Thương một người khó lăm"
                />
                <Hashtag to={config.routes.profile} icon={<MusicIcon />} title="Lời hứa sau cùng" />
                <Hashtag to={config.routes.profile} icon={<HashtagIcon />} title="huyennha" />
                <Hashtag to={config.routes.profile} icon={<HashtagIcon />} title="baodien" />
                <Hashtag to={config.routes.profile} icon={<HashtagIcon />} title="quynhnhu" />
                <Hashtag
                    to={config.routes.profile}
                    icon={<MusicIcon />}
                    title="Ngôi Sao Cô Đơn - Jack"
                />
            </div>
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};
export default Discover;
