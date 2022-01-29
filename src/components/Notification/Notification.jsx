import PropTypes from 'prop-types';
import {NotificationTitle} from './Notification.styled';

function Notification({message}) {
    return (
        <NotificationTitle>{message}</NotificationTitle>
    )
}
Notification.propTypes={
    message: PropTypes.string.isRequired,
}
export default Notification;