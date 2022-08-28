import classNames from 'classnames/bind';
import styles from './Home.modules.scss';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';
import VideoUser from './VideoUser/VideoUser';

const cx = classNames.bind(styles);

function Home() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [perPage, setPerPage] = useState(20);
    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: perPage })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((error) => console.log('Failed to Fetch Suggested ', error));
    }, [perPage]);
    return (
        <div className={cx('wrapper-home')}>
            {suggestedUser.map((item) => (
                <VideoUser key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Home;
