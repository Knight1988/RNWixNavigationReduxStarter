import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

import { iconsMap, iconsLoaded } from './app-icons';

const store = configureStore();

registerScreens(store, Provider);

iconsLoaded.then(() => {
    startApp();
});

function startApp() {
    // we can be sure, that iconsMap has the icons now
    // iconsMap should have all the references to sources available now
    // <Image source={iconsMap['ios-person--active--big']} />
    // Or use them with react-native-navigation

    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'One',
                screen: 'app.Home', // this is a registered name for a screen
                icon: iconsMap['ios-person--active'],
                title: 'Screen One'
            },
            {
                label: 'Two',
                icon: iconsMap['ios-people'],
                screen: 'app.FirstScreen',
                title: 'Screen Two'
            }
        ],
        drawer: {
            type: 'MMDrawer',
            animationType: 'slide',
            left: {
                screen: 'app.Drawer'
            }
        }
    });
}