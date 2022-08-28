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
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [perPage, setPerPage] = useState(5);
    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: perPage })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log('Failed to Fetch Suggested ', error));
    }, [perPage]);
    const handleSeeMore = () => {
        setPerPage(perPage + 5);
    };
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
            <SuggestedAccounts
                data={suggestedUser}
                label="Suggested accounts"
                onChange={handleSeeMore}
            />
            <SuggestedAccounts
                data={suggestedUser}
                label="Following accounts"
                onChange={handleSeeMore}
            />
            <Discover label="Discover" />
            <Footer />
        </aside>
    );
}

export default Sidebar;
