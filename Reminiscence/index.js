import {Navigation} from 'react-native-navigation';

import {RegisterScreens} from '~/RegisterScreens';

import {main} from '~/stack/NavigationStack';

RegisterScreens();

Navigation.events().registerAppLaunchedListener(() => {
  // main();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'app.reminiscence.spalsh',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
