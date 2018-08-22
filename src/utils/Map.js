import {Linking, Platform} from "react-native";
import constant from "../constant/constant";
export function ShowMap(address, lat, long) {
    var urlMapIOS = 'http://maps.apple.com/?q={place}&sll={lat},{long}&z=10&t=m';
    var urlMapAndroid = 'geo:{lat},{long}?q={place}';
    var linkMapIOS = urlMapIOS.replace('{lat}', lat)
        .replace('{long}', long)
        .replace('{place}', address);

    var linkMapAndroid = urlMapAndroid.replace('{lat}', lat)
        .replace('{long}', long)
        .replace('{place}', address);

    if (Platform.OS == constant.PLATFORM.IOS) {
        Linking.openURL(linkMapIOS)
            .catch(err => console.error('An error occurred', err));
    } else {
        Linking.openURL(linkMapAndroid)
            .catch(err => console.error('An error occurred', err));
    }

}

export function ShowAndroidMap(address, lat, long) {

    //   http://maps.google.com/?q=MY%20LOCATION@lat,long
    var urlMapAndroid;
    var linkMapAndroid;
    if (lat == 0 || long == 0) {
        //  urlMapAndroid = 'http://maps.google.com/maps?q=({place})';
        urlMapAndroid = 'http://maps.google.com/?q={place}';
        linkMapAndroid = urlMapAndroid.replace('{place}', address);
    } else {
        urlMapAndroid = 'http://maps.google.com/maps?q={lat},{long}({place})&z=12';
        //  urlMapAndroid = 'http://maps.google.com/?q={place}@{lat},{long}';
        //  urlMapAndroid =  'http://maps.google.com?q={place}&ll={lat},{long}&z=10&t=m';
        //  urlMapAndroid = 'https://maps.google.com?q={lat},{long}&z=12';
        //  urlMapAndroid =   'http://maps.google.com/maps/place/{place}/@{lat},{long}';

        linkMapAndroid = urlMapAndroid.replace('{lat}', lat)
            .replace('{long}', long)
            .replace('{place}', address);
    }


    if (Linking.canOpenURL(linkMapAndroid)) {
        Linking.openURL(linkMapAndroid).catch(err => console.error('An error occurred', err));
    }

}


export function ShowGoogleMap(address, lat, long) {
    if (Platform.OS === constant.PLATFORM.IOS) {
        var urlMapAndroid = 'comgooglemaps://?q={place}&center=={lat},{long}&views=satellite,traffic&zoom=15';
        var linkMapAndroid = urlMapAndroid.replace('{lat}', lat)
            .replace('{long}', long)
            .replace('{place}', address);

        if (Linking.canOpenURL(linkMapAndroid)) {
            Linking.openURL(linkMapAndroid).catch(err => console.error('An error occurred', err));
        }


    } else {
        // var urlMapAndroid = 'geo:{lat},{long}?q={place}';
        var urlMapAndroid = 'http://maps.google.com?q={place}&ll={lat},{long}&z=10&t=m'
        var linkMapAndroid = urlMapAndroid.replace('{lat}', lat)
            .replace('{long}', long)
            .replace('{place}', address);
        if (Linking.canOpenURL(linkMapAndroid)) {
            Linking.openURL(linkMapAndroid).catch(err => console.error('An error occurred', err));
        }
    }


}


export function ShowAppleMap(address, lat, long) {
    var urlMapIOS = '';
    var linkMapIOS = '';
    if (lat == 0 || long == 0) {
        urlMapIOS = 'http://maps.apple.com/?address={address}';

        linkMapIOS = urlMapIOS.replace('{address}', address)
    } else {
        urlMapIOS = 'http://maps.apple.com/?q={place}&ll={lat},{long}&z=10&t=m';

        linkMapIOS = urlMapIOS.replace('{lat}', lat)
            .replace('{long}', long)
            .replace('{place}', address);

    }


    if (Linking.canOpenURL(linkMapIOS)) {
        Linking.openURL(linkMapIOS).catch(err => console.error('An error occurred', err));
    }

}
