'use strict';
import actionTypes from '../constant/action-type';

export function connectionState(status) {
    return {
        type: actionTypes.CHANGE_CONNECTION_STATUS,
        status: status
    }

}
