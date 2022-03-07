import {Navigation} from 'react-native-navigation';

export const toReviewPost = (componentId, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: 'app.reminiscence.screen.review.post',
      options: {
        topBar: {
          backButton: {
            showTitle: false,
            color: '#fff',
          },
          background: {
            color: '#000',
          },
        },
      },
      passProps: passProps,
    },
  });
};

export const toDetail = (componentId, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: 'app.reminiscence.screen.detail',
      options: {
        topBar: {
          // title: {
          //   text: title,
          //   color: '#fff',
          // },
          backButton: {
            showTitle: false,
            color: '#fff',
          },
          background: {
            color: '#000',
          },
        },
      },
      passProps: passProps,
    },
  });
};

export const toSeeall = (componentId, title, passProps) => {
  console.log('componentId', componentId);
  Navigation.push(componentId, {
    component: {
      name: 'app.reminiscence.screen.seeall',
      options: {
        topBar: {
          title: {
            text: title,
            color: '#fff',
          },
          backButton: {
            showTitle: true,
            color: '#fff',
          },
          background: {
            color: '#000',
          },
        },
      },
      passProps: passProps,
    },
  });
};
