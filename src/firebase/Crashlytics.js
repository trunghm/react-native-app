import firebase from 'react-native-firebase';
import { CommonUtils } from '../Utils';

const crashlytics = firebase.crashlytics();

export async function init() {
    CommonUtils.rlog('INIT CRASHLYTICS');
    crashlytics.enableCrashlyticsCollection();
    // crashlytics.setStringValue('env', Config.env);
    // crashlytics.setStringValue('Rootenv', Config.rootEnv);
    // crashlytics.setStringValue('api_version', Config.apiSupportedVersion);
    // const version = await appVersion();
    // crashlytics.setStringValue('app_version', `${version}`);
}

export function setUserIdentifier(userId) {
    crashlytics.setUserIdentifier(userId);
}
