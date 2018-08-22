import { NavigationActions } from "react-navigation";


export function pushTo(props,screenName,params = {}) {
    const targetScreen = NavigationActions.navigate({
        routeName: screenName,
        params: params
    });
    props.navigation.dispatch(targetScreen);
}

export function back(props) {
    const backAction = NavigationActions.back();
    props.navigation.dispatch(backAction);
}

export function reset(props, screenName) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions : [
            NavigationActions.navigate({
                routeName:screenName
            })
        ]

    });
    props.navigation.dispatch(resetAction);
}
