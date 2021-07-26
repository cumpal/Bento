// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Mico',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'a5e6f0abb8afcfd928afdc11788d82f6',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '60.635681',
  weatherLongitude: '-25.320351',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Search',
      icon: 'search',
      link: 'https://searx.mha.fi/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.mha.fi/',
    },
    {
      id: '3',
      name: 'Cloud',
      icon: 'cloud',
      link: 'https://cloud.mha.fi',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'book-open',
      link: 'https://reddit.com/',
    },
    {
      id: '5',
      name: 'YT Music',
      icon: 'music',
      link: 'https://music.youtube.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '7',
      name: 'Jellyfin',
      icon: 'tv',
      link: 'https://tv.mha.fi',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'meh',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Facebook',
        link: 'https://facebook.com',
      },
      {
        name: 'Google',
        link: 'https://google.fi',
      },
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com',
      },
    ],
    secondList: [
      {
        name: 'Monkeytype',
        link: 'https://monkeytype.com',
      },
      {
        name: 'G Translate',
        link: 'https://translate.google.com',
      },
      {
        name: 'DNS Dumpster',
        link: 'https://dnsdumpster.com',
      },
      {
        name: 'Pi-Hole',
        link: 'https://10.66.66.1/admin',
      },
    ],
  },
};
