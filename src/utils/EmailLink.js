import {
  Platform,
  Alert,
  Linking,
  Clipboard
} from 'react-native'

const prefixes = {
  'inbox': 'inbox-gmail:',
  'apple-mail': 'message://',
  'gmail': 'googlegmail://',
  'outlook': 'ms-outlook://'
};

const titles = {
  'inbox': 'Open Inbox by Gmail',
  'apple-mail': 'Open Apple Mail',
  'gmail': 'Open Gmail',
  'outlook': 'Open Outlook'
};

/**
 * Check if a given mail app is installed.
 *
 * @param {string} app
 * @returns {Promise<boolean>}
 */
export function isAppInstalled (app) {
  return new Promise((resolve) => {
    if (!(app in prefixes)) {
      return resolve(false)
    }

    Linking.canOpenURL(prefixes[app])
      .then((isSupported) => {
        resolve(isSupported)
      })
      .catch(() => resolve(false))
  })
}

export function askAppChoice (email) {
  return new Promise(async (resolve) => {
    let availableApps = [];
    for (let app in prefixes) {
      let avail = await isAppInstalled(app);
      if (avail) {
        availableApps.push(app);
      }
    }

    let options = availableApps.map((app) => ({text: titles[app], onPress: () => resolve(app)}));
    options.push({text: 'Copy Address', onPress: () => writeToClipboard(email)});
    options.push({text: 'Cancel', onPress: () => resolve(null), style: 'cancel'});

    let title = 'Email';
    let message = 'Send email to '+email;
    Alert.alert(
      title,
      message,
      options,
      {onDismiss: () => resolve(null)}
    );
  })
}

writeToClipboard = async (email) => {
  await Clipboard.setString(email);
};

/**
 * Open an email app, or let the user choose what app to open.
 *
 * @param email : string
 */
export async function openEmailLink (email) {

  let app = await askAppChoice(email);

  let url = null;
  switch (app) {
    default:
      url = prefixes[app]
  }

  if (url) {
    if(app === "inbox"){
      url = url + email;
    }
    return Linking.openURL(url);
  }
}
