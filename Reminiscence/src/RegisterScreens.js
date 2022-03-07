import {Navigation} from 'react-native-navigation';

export function RegisterScreens() {
  Navigation.registerComponent(
    'app.reminiscence.spalsh',
    () => require('~/App').default,
  );
  RegisterTabs();
}

const RegisterTabs = () => {
  Navigation.registerComponent(
    'app.reminiscence.tabs.movie',
    () => require('~/screens/tabs/movie').default,
  );
  Navigation.registerComponent(
    'app.reminiscence.tabs.tv',
    () => require('~/screens/tabs/tv').default,
  );
  Navigation.registerComponent(
    'app.reminiscence.tabs.search',
    () => require('~/screens/tabs/search').default,
  );
  Navigation.registerComponent(
    'app.reminiscence.tabs.review',
    () => require('~/screens/tabs/review').default,
  );
  Navigation.registerComponent(
    'app.reminiscence.tabs.profile',
    () => require('~/screens/tabs/profile').default,
  );

  Navigation.registerComponent(
    'app.reminiscence.screen.search.result',
    () => require('~/screens/search/searchResults').default,
  );

  Navigation.registerComponent(
    'app.reminiscence.screen.seeall',
    () => require('~/screens/List/Seeall').default,
  );

  Navigation.registerComponent(
    'app.reminiscence.screen.detail',
    () => require('~/screens/Detail/Detail').default,
  );
  Navigation.registerComponent(
    'app.reminiscence.screen.review.post',
    () => require('~/screens/Review/post').default,
  );
};
