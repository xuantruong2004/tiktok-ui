import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.modules.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    icon = false,
    disabled = false,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    medium = false,
    large = false,
    leftIcon = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        disabled,
        outline,
        text,
        rounded,
        leftIcon,
        small,
        medium,
        large,
    });
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) delete props.onClick;
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
