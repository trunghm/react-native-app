const STAGING_HOST = "http://157.230.42.94:20833/";
const DEV_HOST = "http://192.168.46.21:20833/";
const PRODUCTION_HOST = "http://157.230.42.94:20833/";
export const BASE_URL = STAGING_HOST;

export const GET_TEST_DATA = 'https://jsonplaceholder.typicode.com/posts/{id}';
export const UPDATE_TEST_DATA =
    'https://jsonplaceholder.typicode.com/posts/{id}';
export const INVITATION = `${BASE_URL}workspace/invite`;
export const SIGNUP = `${BASE_URL}workspace/sign-up`;
export const LOGIN = `${BASE_URL}login`;
export const VERIFY_EMAIL = `${BASE_URL}verify/create/sendCode`;
export const GET_WORK_SPACE_LIST = `${BASE_URL}workspace/list`;
export const CONFIRM_VERIFICATION_UPDATE_PASSWORD = `${BASE_URL}verify/forgotPassword/confirmcode`;
export const CONFIRM_VERIFICATION_CREATE_NEW_WORKSPACE = `${BASE_URL}verify/create/confirmCode`;
export const CREATE_WORKSPACE = `${BASE_URL}workspace/create`;

export const VERIFY_INVITE = `${BASE_URL}verify/signup`;
export const FORGOT_PASSWORD = `${BASE_URL}verify/forgotPassword/sendCode`;
export const UPDATE_PASSWORD = `${BASE_URL}user/update-password`;

export const GET_SETTINGS = `${BASE_URL}settings/get`;
export const UPDATE_SETTING = `${BASE_URL}settings/update`;
export const DEACTIVE_ACCOUNT = `${BASE_URL}settings/updateActiveAccount`;
export const UPDATE_ACCOUNT_TYPE = `${BASE_URL}settings/updateAccountType`;

export const SET_STATUS = `${BASE_URL}user/update-status`;
export const EDIT_PROFILE = `${BASE_URL}user/update-details`;
export const UPLOAD_IMAGE = `${BASE_URL}files/uploadImage`;
export const UPLOAD_FILE = `${BASE_URL}files/uploadFiles`;
export const SIGN_OUT = `${BASE_URL}logout`;
export const USER_DETAILS = `${BASE_URL}user/details`;
export const CHECK_VERIFY_EMAIL = `${BASE_URL}user/verifyDeviceStatus`;
export const REQUEST_VERIFY_EMAIL = `${BASE_URL}verify/device/sendCode`;
export const CONFIRM_VERIFY_EMAIL = `${BASE_URL}verify/device`;

export const GET_MEMBER_LIST = `${BASE_URL}user/search?`;
export const GET_USER_INVITED_WORKSPACE =`${BASE_URL}workspace/getUserInvitedWorkspace?`;


export const SEARCH_CONVERSATION = `${BASE_URL}conversation/search?`;
export const PIN_CONVERSATION = `${BASE_URL}conversation/pin`;
export const DELETE_CONVERSATION = `${BASE_URL}conversation/delete/`;
export const CREATE_DIRECT_MESSAGE = `${BASE_URL}conversation/create`;
export const CONVERSATION_DETAIL = `${BASE_URL}conversation/details?`;
export const REPORT_CONVERSATION = `${BASE_URL}conversation/report/`;
export const UPDATE_UNREAD_MESSAGE_CONVERSATION = `${BASE_URL}conversation/read/`;

export const GET_MESSAGES = `${BASE_URL}receiver/`;
export const PIN_MESSAGE = `${BASE_URL}message/pin`;
export const DELETE_MESSAGE = `${BASE_URL}messages/`;

export const GET_GROUPS = `${BASE_URL}group/groups`;
export const GET_LIST_WORKSPACE_CAN_SIGN_IN =`${BASE_URL}user/getListWorkspaceCanSignin`;
export const USER_JOIN_WORKSPACE =`${BASE_URL}user/joinWorkspace`;
export const GET_WORKSPACE =`${BASE_URL}workspace?workspaceName={workspaceName}`;
export const CHECK_USER_IN_WORKSPACE =`${BASE_URL}workspace/checkUserInWorkSpace`;
export const GET_INVITE_WORKSPACE =`${BASE_URL}workspace/getInviteWorkspace`;
export const CHECK_USER_IS_INVITED_WORKSPACE =`${BASE_URL}user/checkUserIsInvitedToWorkspace`;

