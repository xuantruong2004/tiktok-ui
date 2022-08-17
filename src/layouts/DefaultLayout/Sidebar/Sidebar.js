import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                    title="For you"
                    to={config.routes.home}
                />
                <MenuItem
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                    title="Following"
                    to={config.routes.following}
                />
                <MenuItem
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                    title="LIVE"
                    to={config.routes.live}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
