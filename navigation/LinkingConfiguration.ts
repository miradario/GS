import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Meditate: {
            screens: {
              MeditateScreen: 'two',
            },
          },
          Audios: {
            screens: {
              AudiosScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
