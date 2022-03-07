import {Navigation} from 'react-native-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const themeColor = '#fff';

const icons = {
  movie: MaterialCommunityIcon.getImageSourceSync(
    'movie-open-outline',
    24,
    '#ffffff',
  ),
  tv: MaterialCommunityIcon.getImageSourceSync(
    'television-classic',
    24,
    '#ffffff',
  ),
  search: MaterialIcon.getImageSourceSync('search', 24, '#ffffff'),
  review: MaterialCommunityIcon.getImageSourceSync(
    'post-outline',
    24,
    '#ffffff',
  ),
  profile: MaterialIcon.getImageSourceSync('person-outline', 24, '#ffffff'),

  movieSelected: MaterialCommunityIcon.getImageSourceSync(
    'movie-open',
    24,
    themeColor,
  ),
  tvSelected: MaterialCommunityIcon.getImageSourceSync(
    'television-classic',
    24,
    themeColor,
  ),
  searchSelected: MaterialIcon.getImageSourceSync('search', 24, themeColor),
  reviewSelected: MaterialCommunityIcon.getImageSourceSync(
    'post-outline',
    24,
    themeColor,
  ),
  profileSelected: MaterialIcon.getImageSourceSync('person', 24, themeColor),
};

const bto = {
  /* Bottom Tab Options */
  movie: {
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 14,
      icon: icons.movie,
      selectedIcon: icons.movieSelected,
      iconColor: '#aaa',
      selectedIconColor: themeColor,
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  },
  tv: {
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 14,
      icon: icons.tv,
      selectedIcon: icons.tvSelected,
      iconColor: '#aaa',
      selectedIconColor: themeColor,
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  },
  search: {
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 14,
      icon: icons.search,
      selectedIcon: icons.searchSelected,
      iconColor: '#aaa',
      selectedIconColor: themeColor,
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  },
  review: {
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 14,
      icon: icons.review,
      selectedIcon: icons.reviewSelected,
      iconColor: '#aaa',
      selectedIconColor: themeColor,
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  },
  profile: {
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 14,
      icon: icons.profile,
      selectedIcon: icons.profileSelected,
      iconColor: '#aaa',
      selectedIconColor: themeColor,
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      visible: false,
    },
  },
};

Navigation.setDefaultOptions({
  bottomTabs: {
    backgroundColor: '#000',
  },
  statusBar: {
    style: 'light',
  },
});

export const main = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabsIds',
        options: {
          bottomTabs: {
            animate: false,
            titleDisplayMode: 'alwaysHide',
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'app.reminiscence.tabs.movie',
                    name: 'app.reminiscence.tabs.movie',
                    options: bto.movie,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'app.reminiscence.tabs.tv',
                    name: 'app.reminiscence.tabs.tv',
                    options: bto.tv,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'app.reminiscence.tabs.search',
                    name: 'app.reminiscence.tabs.search',
                    options: bto.search,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'app.reminiscence.tabs.review',
                    name: 'app.reminiscence.tabs.review',
                    options: bto.review,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'app.reminiscence.tabs.profile',
                    name: 'app.reminiscence.tabs.profile',
                    options: bto.profile,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
