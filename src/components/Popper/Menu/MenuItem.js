import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.modules.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon
            icon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
