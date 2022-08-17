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
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from '~/components/Discover';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                    title="For You"
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
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
            <Discover label="Discover" />
            <Footer />
        </aside>
    );
}

export default Sidebar;
