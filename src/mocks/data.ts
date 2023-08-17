// 20230818040839
// https://rawg.io/api/games/lists/main?discover=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af

const list = {
  count: 533,
  next: 'https://api.rawg.io/api/games/lists/main?discover=true&key=c542e67aec3a4340908f9de9e86038af&ordering=-added&page=2&page_size=20',
  previous: null,
  results: [
    {
      id: 324997,
      slug: 'baldurs-gate-3',
      name: "Baldur's Gate III",
      released: '2023-08-03',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
      rating: 4.5,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 105,
          percent: 68.18,
        },
        {
          id: 4,
          title: 'recommended',
          count: 33,
          percent: 21.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 10,
          percent: 6.49,
        },
        {
          id: 1,
          title: 'skip',
          count: 6,
          percent: 3.9,
        },
      ],
      ratings_count: 150,
      reviews_text_count: 3,
      added: 1948,
      added_by_status: {
        yet: 226,
        owned: 929,
        beaten: 23,
        toplay: 614,
        dropped: 37,
        playing: 119,
      },
      metacritic: 97,
      playtime: 6,
      suggestions_count: 564,
      updated: '2023-08-17T11:43:44',
      user_game: null,
      reviews_count: 154,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 101843,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: {
            minimum:
              "Minimum:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: macOS 10.15.6\r\n\r\nProcessor: 2.6GHz Quad-Core Intel Core i7\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics: AMD Radeon460 4GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Minimum specs can run the game on low to medium settings. To meet minimum specs, you'll need a MacBook Pro 15 inch from 2016 or newer. Or, a MacBook Pro 13 inch from 2018 or newer. M1 Chip requirements: MacBook Air, MacBook Pro, or Mac mini with Apple M1 chip and 8GB of RAM.",
            recommended:
              "Recommended:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: macOS 10.15.7\r\n\r\nProcessor: 2.3GHz 8-Core Intel Core i9\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: AMD Radeon Pro 5500M 8GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Recommended specs can run the game on high or ultra settings. You'll meet recommended specs if you have a MacBook Pro 15 inch or 16 inch from 2019 and up. An iMac from 2017 or newer will also pull it off. M1 Chip requirements: MacBook Air, MacBook Pro, or Mac mini with Apple M1 chip and 16GB of RAM",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: {
            minimum:
              'Minimum:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: Windows 7 SP1 64-bit\r\n\r\nProcessor: Intel i5-4690 / AMD FX 4350\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics: Nvidia GTX 780 / AMD Radeon R9 280X\r\n\r\nDirectX: Version 11\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Default API is Vulkan 1.1. Directx11 API also provided. The minimum requirements might decrease over the course of Early Access, as performance improves.',
            recommended:
              'Recommended:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: Windows 10 64-bit\r\n\r\nProcessor: Intel i7 4770k / AMD Ryzen 5 1500X\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: Nvidia GTX 1060 6GB / AMD RX580\r\n\r\nDirectX: Version 11\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Default API is Vulkan 1.1. Directx11 API also provided. The recommended requirements might decrease over the course of Early Access, as performance improves.',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 10,
          name: 'Strategy',
          slug: 'strategy',
          games_count: 53181,
          image_background:
            'https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg',
        },
      ],
      stores: [
        {
          id: 930049,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
        {
          id: 326833,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 326832,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/ca9/ca9fa39e2ef1136846717640664d48f8.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/463/46339706a9d1742d9199543dd5a3f3db.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/ca9/ca9fa39e2ef1136846717640664d48f8.mp4',
          full: 'https://media.rawg.io/media/stories/42b/42bbe9cf398463bb5925e804bf79d5a1.mp4',
        },
        video: 'WvMf_DcyWbI',
        preview:
          'https://media.rawg.io/media/stories-previews/874/874f631bdd9e56d2d4e49c9cd0029e51.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 31360,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35329,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14617,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10021,
          image_background:
            'https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4535,
          image_background:
            'https://media.rawg.io/media/games/5be/5bec14622f6faf804a592176577c1347.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24873,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3805,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 198,
          name: 'Split Screen',
          slug: 'split-screen',
          language: 'eng',
          games_count: 5703,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 5008,
          image_background:
            'https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg',
        },
        {
          id: 72,
          name: 'Local Multiplayer',
          slug: 'local-multiplayer',
          language: 'eng',
          games_count: 12556,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1510,
          image_background:
            'https://media.rawg.io/media/games/596/596a48ef3b62b63b4cc59633e28be903.jpg',
        },
        {
          id: 40832,
          name: 'Cross-Platform Multiplayer',
          slug: 'cross-platform-multiplayer',
          language: 'eng',
          games_count: 2281,
          image_background:
            'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1247,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 3631,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 99,
          name: 'Isometric',
          slug: 'isometric',
          language: 'eng',
          games_count: 3999,
          image_background:
            'https://media.rawg.io/media/games/27c/27c86ebfba2281ebe3ea8ca6c9e752f1.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8241,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 40937,
          name: 'Steam Trading Cards',
          slug: 'steam-trading-cards-2',
          language: 'eng',
          games_count: 443,
          image_background:
            'https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg',
        },
        {
          id: 238,
          name: 'CRPG',
          slug: 'crpg',
          language: 'eng',
          games_count: 775,
          image_background:
            'https://media.rawg.io/media/screenshots/56c/56cdc9d4e29255e4a0d90cb2bce2dc14.jpg',
        },
        {
          id: 206,
          name: 'Party-Based RPG',
          slug: 'party-based-rpg',
          language: 'eng',
          games_count: 757,
          image_background:
            'https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg',
        },
        {
          id: 467,
          name: 'Role Playing Game',
          slug: 'role-playing-game',
          language: 'eng',
          games_count: 19,
          image_background:
            'https://media.rawg.io/media/games/8ea/8ea1e2850d7568bc9733d546c0ac6ce1.jpg',
        },
        {
          id: 574,
          name: 'Dungeons & Dragons',
          slug: 'dungeons-dragons',
          language: 'eng',
          games_count: 161,
          image_background:
            'https://media.rawg.io/media/screenshots/f58/f58cd86eb0ce28d0b8d50c226a81d5b6.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
        },
        {
          id: 2300708,
          image:
            'https://media.rawg.io/media/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg',
        },
        {
          id: 2300709,
          image:
            'https://media.rawg.io/media/screenshots/705/705846f6583a6da009a0ae7fcdece36d.jpg',
        },
        {
          id: 2300710,
          image:
            'https://media.rawg.io/media/screenshots/d29/d29b1d2726d69432d2b4180a79b9ee9d.jpg',
        },
        {
          id: 2300711,
          image:
            'https://media.rawg.io/media/screenshots/ed1/ed19ec8ce43f9dd3553df4a6d9301f61.jpg',
        },
        {
          id: 2300712,
          image:
            'https://media.rawg.io/media/screenshots/6c8/6c8983d658a4a24dc8eb9d2f88f1dabf.jpg',
        },
        {
          id: 2300713,
          image:
            'https://media.rawg.io/media/screenshots/92c/92cbe16a795afbc9d9837ed9eae4f22b.jpg',
        },
      ],
    },
    {
      id: 324997,
      slug: 'baldurs-gate-3',
      name: "Baldur's Gate III",
      released: '2023-08-03',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
      rating: 4.5,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 105,
          percent: 68.18,
        },
        {
          id: 4,
          title: 'recommended',
          count: 33,
          percent: 21.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 10,
          percent: 6.49,
        },
        {
          id: 1,
          title: 'skip',
          count: 6,
          percent: 3.9,
        },
      ],
      ratings_count: 150,
      reviews_text_count: 3,
      added: 1948,
      added_by_status: {
        yet: 226,
        owned: 929,
        beaten: 23,
        toplay: 614,
        dropped: 37,
        playing: 119,
      },
      metacritic: 97,
      playtime: 6,
      suggestions_count: 564,
      updated: '2023-08-17T11:43:44',
      user_game: null,
      reviews_count: 154,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 101843,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: {
            minimum:
              "Minimum:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: macOS 10.15.6\r\n\r\nProcessor: 2.6GHz Quad-Core Intel Core i7\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics: AMD Radeon460 4GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Minimum specs can run the game on low to medium settings. To meet minimum specs, you'll need a MacBook Pro 15 inch from 2016 or newer. Or, a MacBook Pro 13 inch from 2018 or newer. M1 Chip requirements: MacBook Air, MacBook Pro, or Mac mini with Apple M1 chip and 8GB of RAM.",
            recommended:
              "Recommended:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: macOS 10.15.7\r\n\r\nProcessor: 2.3GHz 8-Core Intel Core i9\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: AMD Radeon Pro 5500M 8GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Recommended specs can run the game on high or ultra settings. You'll meet recommended specs if you have a MacBook Pro 15 inch or 16 inch from 2019 and up. An iMac from 2017 or newer will also pull it off. M1 Chip requirements: MacBook Air, MacBook Pro, or Mac mini with Apple M1 chip and 16GB of RAM",
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: {
            minimum:
              'Minimum:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: Windows 7 SP1 64-bit\r\n\r\nProcessor: Intel i5-4690 / AMD FX 4350\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics: Nvidia GTX 780 / AMD Radeon R9 280X\r\n\r\nDirectX: Version 11\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Default API is Vulkan 1.1. Directx11 API also provided. The minimum requirements might decrease over the course of Early Access, as performance improves.',
            recommended:
              'Recommended:\r\n\r\nRequires a 64-bit processor and operating system\r\n\r\nOS: Windows 10 64-bit\r\n\r\nProcessor: Intel i7 4770k / AMD Ryzen 5 1500X\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: Nvidia GTX 1060 6GB / AMD RX580\r\n\r\nDirectX: Version 11\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: Default API is Vulkan 1.1. Directx11 API also provided. The recommended requirements might decrease over the course of Early Access, as performance improves.',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-08-03',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 10,
          name: 'Strategy',
          slug: 'strategy',
          games_count: 53181,
          image_background:
            'https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg',
        },
      ],
      stores: [
        {
          id: 930049,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
        {
          id: 326833,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 326832,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/ca9/ca9fa39e2ef1136846717640664d48f8.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/463/46339706a9d1742d9199543dd5a3f3db.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/ca9/ca9fa39e2ef1136846717640664d48f8.mp4',
          full: 'https://media.rawg.io/media/stories/42b/42bbe9cf398463bb5925e804bf79d5a1.mp4',
        },
        video: 'WvMf_DcyWbI',
        preview:
          'https://media.rawg.io/media/stories-previews/874/874f631bdd9e56d2d4e49c9cd0029e51.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 31360,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35329,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14617,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 10021,
          image_background:
            'https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 4535,
          image_background:
            'https://media.rawg.io/media/games/5be/5bec14622f6faf804a592176577c1347.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24873,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
        {
          id: 397,
          name: 'Online multiplayer',
          slug: 'online-multiplayer',
          language: 'eng',
          games_count: 3805,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 198,
          name: 'Split Screen',
          slug: 'split-screen',
          language: 'eng',
          games_count: 5703,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 75,
          name: 'Local Co-Op',
          slug: 'local-co-op',
          language: 'eng',
          games_count: 5008,
          image_background:
            'https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg',
        },
        {
          id: 72,
          name: 'Local Multiplayer',
          slug: 'local-multiplayer',
          language: 'eng',
          games_count: 12556,
          image_background:
            'https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg',
        },
        {
          id: 468,
          name: 'role-playing',
          slug: 'role-playing',
          language: 'eng',
          games_count: 1510,
          image_background:
            'https://media.rawg.io/media/games/596/596a48ef3b62b63b4cc59633e28be903.jpg',
        },
        {
          id: 40832,
          name: 'Cross-Platform Multiplayer',
          slug: 'cross-platform-multiplayer',
          language: 'eng',
          games_count: 2281,
          image_background:
            'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
        },
        {
          id: 40833,
          name: 'Captions available',
          slug: 'captions-available',
          language: 'eng',
          games_count: 1247,
          image_background:
            'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
        },
        {
          id: 121,
          name: 'Character Customization',
          slug: 'character-customization',
          language: 'eng',
          games_count: 3631,
          image_background:
            'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
        },
        {
          id: 99,
          name: 'Isometric',
          slug: 'isometric',
          language: 'eng',
          games_count: 3999,
          image_background:
            'https://media.rawg.io/media/games/27c/27c86ebfba2281ebe3ea8ca6c9e752f1.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8241,
          image_background:
            'https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg',
        },
        {
          id: 40937,
          name: 'Steam Trading Cards',
          slug: 'steam-trading-cards-2',
          language: 'eng',
          games_count: 443,
          image_background:
            'https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg',
        },
        {
          id: 238,
          name: 'CRPG',
          slug: 'crpg',
          language: 'eng',
          games_count: 775,
          image_background:
            'https://media.rawg.io/media/screenshots/56c/56cdc9d4e29255e4a0d90cb2bce2dc14.jpg',
        },
        {
          id: 206,
          name: 'Party-Based RPG',
          slug: 'party-based-rpg',
          language: 'eng',
          games_count: 757,
          image_background:
            'https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg',
        },
        {
          id: 467,
          name: 'Role Playing Game',
          slug: 'role-playing-game',
          language: 'eng',
          games_count: 19,
          image_background:
            'https://media.rawg.io/media/games/8ea/8ea1e2850d7568bc9733d546c0ac6ce1.jpg',
        },
        {
          id: 574,
          name: 'Dungeons & Dragons',
          slug: 'dungeons-dragons',
          language: 'eng',
          games_count: 161,
          image_background:
            'https://media.rawg.io/media/screenshots/f58/f58cd86eb0ce28d0b8d50c226a81d5b6.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
        },
        {
          id: 2300708,
          image:
            'https://media.rawg.io/media/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg',
        },
        {
          id: 2300709,
          image:
            'https://media.rawg.io/media/screenshots/705/705846f6583a6da009a0ae7fcdece36d.jpg',
        },
        {
          id: 2300710,
          image:
            'https://media.rawg.io/media/screenshots/d29/d29b1d2726d69432d2b4180a79b9ee9d.jpg',
        },
        {
          id: 2300711,
          image:
            'https://media.rawg.io/media/screenshots/ed1/ed19ec8ce43f9dd3553df4a6d9301f61.jpg',
        },
        {
          id: 2300712,
          image:
            'https://media.rawg.io/media/screenshots/6c8/6c8983d658a4a24dc8eb9d2f88f1dabf.jpg',
        },
        {
          id: 2300713,
          image:
            'https://media.rawg.io/media/screenshots/92c/92cbe16a795afbc9d9837ed9eae4f22b.jpg',
        },
      ],
    },
    {
      id: 303576,
      slug: 'vampire-the-masquerade-bloodlines-2',
      name: 'Vampire: The Masquerade - Bloodlines 2',
      released: '2023-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
      rating: 3.93,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 90,
          percent: 46.63,
        },
        {
          id: 4,
          title: 'recommended',
          count: 54,
          percent: 27.98,
        },
        {
          id: 1,
          title: 'skip',
          count: 27,
          percent: 13.99,
        },
        {
          id: 3,
          title: 'meh',
          count: 22,
          percent: 11.4,
        },
      ],
      ratings_count: 186,
      reviews_text_count: 6,
      added: 1860,
      added_by_status: {
        yet: 229,
        owned: 466,
        beaten: 8,
        toplay: 1130,
        dropped: 6,
        playing: 21,
      },
      metacritic: null,
      playtime: 329,
      suggestions_count: 538,
      updated: '2023-08-16T07:37:53',
      user_game: null,
      reviews_count: 193,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> TBC<br></li><li><strong>Processor:</strong> TBC<br></li><li><strong>Memory:</strong> TBC MB RAM<br></li><li><strong>Graphics:</strong> TBC<br></li><li><strong>Storage:</strong> TBC MB available space<br></li><li><strong>Sound Card:</strong> TBC</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 304759,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 305368,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
        {
          id: 304767,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/80b/80bbb6049233cf75621004e9be886715.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/c66/c6692dc6b3d737d6e483b8ce64390b96.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/80b/80bbb6049233cf75621004e9be886715.mp4',
          full: 'https://media.rawg.io/media/stories/b3b/b3b872ae7c4e95cfd6d999b2bda384e8.mp4',
        },
        video: 'OkcNFoW5dzs',
        preview:
          'https://media.rawg.io/media/stories-previews/30f/30f79646f4ddaa689a5f682042d5526a.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 31360,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14725,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3245,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6396,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28906,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 42144,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 5120,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5979,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 300,
          name: 'Vampire',
          slug: 'vampire',
          language: 'eng',
          games_count: 1450,
          image_background:
            'https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
        },
        {
          id: 1886815,
          image:
            'https://media.rawg.io/media/screenshots/831/8314575622c6ac8de538e890ec6a2aab.jpg',
        },
        {
          id: 1886816,
          image:
            'https://media.rawg.io/media/screenshots/eb7/eb7d75e25be2c76d6e1bd454f2071aad.jpg',
        },
        {
          id: 1886818,
          image:
            'https://media.rawg.io/media/screenshots/b71/b71ee1cd39f5e8685900b47980d715a1_I3dtqc6.jpg',
        },
        {
          id: 1886819,
          image:
            'https://media.rawg.io/media/screenshots/291/29185669bd2fdf8c0ec10fcf10da3063.jpg',
        },
        {
          id: 1886821,
          image:
            'https://media.rawg.io/media/screenshots/7ba/7ba2d1b2998ae2c76c3ef3509ea8e104.jpg',
        },
        {
          id: 1886823,
          image:
            'https://media.rawg.io/media/screenshots/234/234c1ba4292f69ffc3c988dab739fa91.jpg',
        },
      ],
    },
    {
      id: 58386,
      slug: 'stalker-2',
      name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
      released: '2023-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
      rating: 4.1,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 80,
          percent: 58.82,
        },
        {
          id: 4,
          title: 'recommended',
          count: 27,
          percent: 19.85,
        },
        {
          id: 1,
          title: 'skip',
          count: 19,
          percent: 13.97,
        },
        {
          id: 3,
          title: 'meh',
          count: 10,
          percent: 7.35,
        },
      ],
      ratings_count: 134,
      reviews_text_count: 2,
      added: 1519,
      added_by_status: {
        yet: 267,
        owned: 327,
        beaten: 16,
        toplay: 895,
        dropped: 7,
        playing: 7,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 464,
      updated: '2023-08-12T19:02:50',
      user_game: null,
      reviews_count: 136,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: {
            minimum:
              'Minimum:\r\n\r\nOS: Windows 10\r\n\r\nProcessor: AMD Ryzen 5 1600X / Intel Core i5-7600K\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics: AMD Radeon RX 580 8GB / NVIDIA GeForce GTX 1060 6GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: SSD',
            recommended:
              'Recommended:\r\n\r\nOS: Windows 10\r\n\r\nProcessor: AMD Ryzen 7 3700X / Intel Core i7-9700K\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: AMD Radeon RX 5700 XT 8GB / NVIDIA GeForce RTX 2070 SUPER 8GB / NVIDIA GeForce GTX 1080 Ti 11GB\r\n\r\nStorage: 150 GB available space\r\n\r\nAdditional Notes: SSD',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59341,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 899774,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 611296,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 611297,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
        {
          id: 611330,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4767,
            image_background:
              'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/905/905c69af118fde927180ecf5b391c4f9.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/771/771a8dc6c1a6ad44cb45ce88f7bad80a.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/905/905c69af118fde927180ecf5b391c4f9.mp4',
          full: 'https://media.rawg.io/media/stories/0fa/0fa2332e05f993a96e0bc3904f1c7fe0.mp4',
        },
        video: 'kFuhRNXwqTQ',
        preview:
          'https://media.rawg.io/media/stories-previews/c30/c302b625a172157d5b3ca528a4a88e84.jpg',
      },
      tags: [
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6396,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28906,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17398,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12235,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19774,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7399,
          image_background:
            'https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 786,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 43,
          name: 'Post-apocalyptic',
          slug: 'post-apocalyptic',
          language: 'eng',
          games_count: 3408,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 3799,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1493,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 4092,
          image_background:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7290,
          image_background:
            'https://media.rawg.io/media/games/1aa/1aaf454e0d3809ba1c34df4514492237.jpg',
        },
        {
          id: 205,
          name: 'Lore-Rich',
          slug: 'lore-rich',
          language: 'eng',
          games_count: 872,
          image_background:
            'https://media.rawg.io/media/games/635/635749dc78e4fbd29a9773abd0a49c5e.jpg',
        },
        {
          id: 42473,
          name: 'Immersive Sim',
          slug: 'immersive-sim-2',
          language: 'eng',
          games_count: 1864,
          image_background:
            'https://media.rawg.io/media/games/df4/df415b18835f91a1b4db1da294996ee5.jpg',
        },
        {
          id: 146,
          name: 'Nonlinear',
          slug: 'nonlinear',
          language: 'eng',
          games_count: 1361,
          image_background:
            'https://media.rawg.io/media/games/e62/e62cfc3fd878432ece1e1c9d4417a6b6.jpg',
        },
        {
          id: 87543,
          name: 'choices matter ',
          slug: 'choices-matter-3',
          language: 'eng',
          games_count: 1,
          image_background:
            'https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
        },
        {
          id: 2882404,
          image:
            'https://media.rawg.io/media/screenshots/782/7824700bd21e40cf2a0bebaeb8114dc3.jpg',
        },
        {
          id: 2882405,
          image:
            'https://media.rawg.io/media/screenshots/9dd/9dd9b0c112201cbdf6828f01c0334cfa.jpg',
        },
        {
          id: 2882406,
          image:
            'https://media.rawg.io/media/screenshots/7e2/7e2eb2f0dab20622fbbbeeae39dc8978.jpg',
        },
        {
          id: 2882407,
          image:
            'https://media.rawg.io/media/screenshots/17d/17da49bd8779122e0d7f24696f5b4db9.jpg',
        },
        {
          id: 2882408,
          image:
            'https://media.rawg.io/media/screenshots/1f7/1f7ee9a93cf8b9be74a06d4b2fc2fcbf.jpg',
        },
        {
          id: 2882409,
          image:
            'https://media.rawg.io/media/screenshots/2b8/2b8c4fdfb2d411645c77f6a1beccec69.jpg',
        },
      ],
    },
    {
      id: 58779,
      slug: 'starfield',
      name: 'Starfield',
      released: '2023-09-06',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg',
      rating: 4.23,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 17,
          percent: 56.67,
        },
        {
          id: 4,
          title: 'recommended',
          count: 9,
          percent: 30.0,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 10.0,
        },
        {
          id: 3,
          title: 'meh',
          count: 1,
          percent: 3.33,
        },
      ],
      ratings_count: 29,
      reviews_text_count: 1,
      added: 1117,
      added_by_status: {
        yet: 167,
        owned: 132,
        beaten: 1,
        toplay: 813,
        dropped: 1,
        playing: 3,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 463,
      updated: '2023-08-12T19:02:57',
      user_game: null,
      reviews_count: 30,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-09-06',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 701282,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/574/574cfd5955d88f16127c6e2bd3f79d4c.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/64e/64ee587a1a1e95494f29d9293f8302d9.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/574/574cfd5955d88f16127c6e2bd3f79d4c.mp4',
          full: 'https://media.rawg.io/media/stories/0eb/0eb283a46ac19f6a30e37dc2d9cf4643.mp4',
        },
        video: 'jMHBSUZvs5k',
        preview:
          'https://media.rawg.io/media/stories-previews/8e8/8e8810230436d48b5d8365f16b5e9daa.jpg',
      },
      tags: [
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41908,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg',
        },
        {
          id: 2883043,
          image:
            'https://media.rawg.io/media/screenshots/f7d/f7d990724dd553484e527b4096025a65.jpg',
        },
        {
          id: 2883048,
          image:
            'https://media.rawg.io/media/screenshots/0ad/0adfb93f5621bd549b8813b6b4c6e623.jpg',
        },
        {
          id: 2883054,
          image:
            'https://media.rawg.io/media/screenshots/f74/f7431a20a8bb390b813ea751d758ed07.jpg',
        },
        {
          id: 2883066,
          image:
            'https://media.rawg.io/media/screenshots/7bc/7bc2c5288b78693eb9eaa0a06a8361e9.jpg',
        },
        {
          id: 2883071,
          image:
            'https://media.rawg.io/media/screenshots/85f/85fee5a7b12edcbe8352b2d1676296ac.jpg',
        },
        {
          id: 2883075,
          image:
            'https://media.rawg.io/media/screenshots/eb6/eb61692a22bef1e16d43ee1c49f31814.jpg',
        },
      ],
    },
    {
      id: 388309,
      slug: 'diablo-iv',
      name: 'Diablo IV',
      released: '2023-06-06',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg',
      rating: 4.05,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 44,
          percent: 43.14,
        },
        {
          id: 4,
          title: 'recommended',
          count: 37,
          percent: 36.27,
        },
        {
          id: 3,
          title: 'meh',
          count: 12,
          percent: 11.76,
        },
        {
          id: 1,
          title: 'skip',
          count: 9,
          percent: 8.82,
        },
      ],
      ratings_count: 96,
      reviews_text_count: 3,
      added: 904,
      added_by_status: {
        yet: 114,
        owned: 167,
        beaten: 56,
        toplay: 470,
        dropped: 25,
        playing: 72,
      },
      metacritic: 90,
      playtime: 0,
      suggestions_count: 533,
      updated: '2023-08-16T06:19:14',
      user_game: null,
      reviews_count: 102,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 896425,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/77c/77cff7f42cc56f8a571fc373560fe0a3.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/755/75534948aacc301e0802004fc0d030f3.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/77c/77cff7f42cc56f8a571fc373560fe0a3.mp4',
          full: 'https://media.rawg.io/media/stories/82f/82f77402649c75bf807c1265fe4604e0.mp4',
        },
        video: '4n7koRd4n_g',
        preview:
          'https://media.rawg.io/media/stories-previews/464/464766329844442bd341b165b1ed2d40.jpg',
      },
      tags: [
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24873,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg',
        },
        {
          id: 2224110,
          image:
            'https://media.rawg.io/media/screenshots/734/73407c5dda6e7f1787a5063176cd8d59.jpg',
        },
        {
          id: 2224111,
          image:
            'https://media.rawg.io/media/screenshots/74e/74e1aca9b527b75ce3f6ea97b51668b5.jpg',
        },
        {
          id: 2224112,
          image:
            'https://media.rawg.io/media/screenshots/b63/b638e9d53f7370a3b8269b129c6e07f2_w5K5Nlk.jpg',
        },
        {
          id: 2224113,
          image:
            'https://media.rawg.io/media/screenshots/9d1/9d1621745e23030419fc49f737112687.jpg',
        },
        {
          id: 2224114,
          image:
            'https://media.rawg.io/media/screenshots/a6f/a6f7709b5d95a3fa202ed30687fb8353.jpg',
        },
        {
          id: 2224115,
          image:
            'https://media.rawg.io/media/screenshots/030/030d639ac29b08e93c91794521f0bdf5.jpg',
        },
      ],
    },
    {
      id: 388309,
      slug: 'diablo-iv',
      name: 'Diablo IV',
      released: '2023-06-06',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg',
      rating: 4.05,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 44,
          percent: 43.14,
        },
        {
          id: 4,
          title: 'recommended',
          count: 37,
          percent: 36.27,
        },
        {
          id: 3,
          title: 'meh',
          count: 12,
          percent: 11.76,
        },
        {
          id: 1,
          title: 'skip',
          count: 9,
          percent: 8.82,
        },
      ],
      ratings_count: 96,
      reviews_text_count: 3,
      added: 904,
      added_by_status: {
        yet: 114,
        owned: 167,
        beaten: 56,
        toplay: 470,
        dropped: 25,
        playing: 72,
      },
      metacritic: 90,
      playtime: 0,
      suggestions_count: 533,
      updated: '2023-08-16T06:19:14',
      user_game: null,
      reviews_count: 102,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-06-06',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 896425,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/77c/77cff7f42cc56f8a571fc373560fe0a3.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/755/75534948aacc301e0802004fc0d030f3.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/77c/77cff7f42cc56f8a571fc373560fe0a3.mp4',
          full: 'https://media.rawg.io/media/stories/82f/82f77402649c75bf807c1265fe4604e0.mp4',
        },
        video: '4n7koRd4n_g',
        preview:
          'https://media.rawg.io/media/stories-previews/464/464766329844442bd341b165b1ed2d40.jpg',
      },
      tags: [
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24873,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg',
        },
        {
          id: 2224110,
          image:
            'https://media.rawg.io/media/screenshots/734/73407c5dda6e7f1787a5063176cd8d59.jpg',
        },
        {
          id: 2224111,
          image:
            'https://media.rawg.io/media/screenshots/74e/74e1aca9b527b75ce3f6ea97b51668b5.jpg',
        },
        {
          id: 2224112,
          image:
            'https://media.rawg.io/media/screenshots/b63/b638e9d53f7370a3b8269b129c6e07f2_w5K5Nlk.jpg',
        },
        {
          id: 2224113,
          image:
            'https://media.rawg.io/media/screenshots/9d1/9d1621745e23030419fc49f737112687.jpg',
        },
        {
          id: 2224114,
          image:
            'https://media.rawg.io/media/screenshots/a6f/a6f7709b5d95a3fa202ed30687fb8353.jpg',
        },
        {
          id: 2224115,
          image:
            'https://media.rawg.io/media/screenshots/030/030d639ac29b08e93c91794521f0bdf5.jpg',
        },
      ],
    },
    {
      id: 15272,
      slug: 'system-shock',
      name: 'System Shock',
      released: '2023-05-30',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/e98/e98c259aeac26d1ef5c1affc670eec83.jpg',
      rating: 3.86,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 28,
          percent: 40.58,
        },
        {
          id: 4,
          title: 'recommended',
          count: 21,
          percent: 30.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 11,
          percent: 15.94,
        },
        {
          id: 1,
          title: 'skip',
          count: 9,
          percent: 13.04,
        },
      ],
      ratings_count: 69,
      reviews_text_count: 0,
      added: 854,
      added_by_status: {
        yet: 97,
        owned: 206,
        beaten: 37,
        toplay: 470,
        dropped: 32,
        playing: 12,
      },
      metacritic: 78,
      playtime: 2,
      suggestions_count: 506,
      updated: '2023-08-13T00:18:27',
      user_game: null,
      reviews_count: 69,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 75370,
            image_background:
              'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14.04 LTS / Linux Mint 17.3 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i5-2400/AMD FX-8320 or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better. Proprietary drivers only.<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 16.04 LTS / Linux Mint 18 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i7-3770/AMD FX-8350 or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 970 4GB/AMD Radeon R9 290 4GB or better. Proprietary drivers only.<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8.1/10 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i5-2400/AMD FX-8320 or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8.1/10 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i7-3770/AMD FX-8350 or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 970 4GB/AMD Radeon R9 290 4GB or better<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum: 'i386-40, 4 Мб',
            recommended: 'i486-66, 8 Мб',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59341,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
      ],
      stores: [
        {
          id: 16820,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 25650,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 559909,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/7b7/7b7a7571fbedee45cc3abe76caf4e613.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/0d8/0d8beb790e5527d9efd56340904e8a25.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/7b7/7b7a7571fbedee45cc3abe76caf4e613.mp4',
          full: 'https://media.rawg.io/media/stories/2ae/2ae792b2c000b3fbfd0ec96fd4a7fd98.mp4',
        },
        video: 'rwXbNxSP108',
        preview:
          'https://media.rawg.io/media/stories-previews/42b/42bb6fbc16394efec2dc710ecb38010c.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28906,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17398,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 42144,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12235,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41908,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7674,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 226,
          name: 'Cyberpunk',
          slug: 'cyberpunk',
          language: 'eng',
          games_count: 4156,
          image_background:
            'https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1668,
          image_background:
            'https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg',
        },
        {
          id: 96,
          name: 'Kickstarter',
          slug: 'kickstarter',
          language: 'eng',
          games_count: 586,
          image_background:
            'https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg',
        },
        {
          id: 42473,
          name: 'Immersive Sim',
          slug: 'immersive-sim-2',
          language: 'eng',
          games_count: 1864,
          image_background:
            'https://media.rawg.io/media/games/df4/df415b18835f91a1b4db1da294996ee5.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/e98/e98c259aeac26d1ef5c1affc670eec83.jpg',
        },
        {
          id: 134398,
          image:
            'https://media.rawg.io/media/screenshots/2c0/2c0aebfd3a5b01239299e856f8c416a5.jpg',
        },
        {
          id: 134399,
          image:
            'https://media.rawg.io/media/screenshots/2d7/2d7f05da23c93b78f22676fcf935b15c.jpg',
        },
        {
          id: 134400,
          image:
            'https://media.rawg.io/media/screenshots/a09/a093d71c01991f5e68108125a2713af6.jpg',
        },
        {
          id: 134401,
          image:
            'https://media.rawg.io/media/screenshots/9d9/9d9357eb926ab86a6ee8e931a83fd92d.jpg',
        },
        {
          id: 134402,
          image:
            'https://media.rawg.io/media/screenshots/e76/e762ed7a3c464139d2d2d5b3efc41977.jpg',
        },
        {
          id: 134403,
          image:
            'https://media.rawg.io/media/screenshots/83f/83f169bb3898a3654d0719c54bfeee52.jpg',
        },
      ],
    },
    {
      id: 15272,
      slug: 'system-shock',
      name: 'System Shock',
      released: '2023-05-30',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/e98/e98c259aeac26d1ef5c1affc670eec83.jpg',
      rating: 3.86,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 28,
          percent: 40.58,
        },
        {
          id: 4,
          title: 'recommended',
          count: 21,
          percent: 30.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 11,
          percent: 15.94,
        },
        {
          id: 1,
          title: 'skip',
          count: 9,
          percent: 13.04,
        },
      ],
      ratings_count: 69,
      reviews_text_count: 0,
      added: 854,
      added_by_status: {
        yet: 97,
        owned: 206,
        beaten: 37,
        toplay: 470,
        dropped: 32,
        playing: 12,
      },
      metacritic: 78,
      playtime: 2,
      suggestions_count: 506,
      updated: '2023-08-13T00:18:27',
      user_game: null,
      reviews_count: 69,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 75370,
            image_background:
              'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 14.04 LTS / Linux Mint 17.3 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i5-2400/AMD FX-8320 or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better. Proprietary drivers only.<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 16.04 LTS / Linux Mint 18 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i7-3770/AMD FX-8350 or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 970 4GB/AMD Radeon R9 290 4GB or better. Proprietary drivers only.<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8.1/10 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i5-2400/AMD FX-8320 or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8.1/10 (64-bit only)<br></li><li><strong>Processor:</strong> Intel Core i7-3770/AMD FX-8350 or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 970 4GB/AMD Radeon R9 290 4GB or better<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>',
          },
          requirements_ru: {
            minimum: 'i386-40, 4 Мб',
            recommended: 'i486-66, 8 Мб',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-05-30',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
          games_count: 59341,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
      ],
      stores: [
        {
          id: 16820,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 25650,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 559909,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/7b7/7b7a7571fbedee45cc3abe76caf4e613.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/0d8/0d8beb790e5527d9efd56340904e8a25.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/7b7/7b7a7571fbedee45cc3abe76caf4e613.mp4',
          full: 'https://media.rawg.io/media/stories/2ae/2ae792b2c000b3fbfd0ec96fd4a7fd98.mp4',
        },
        video: 'rwXbNxSP108',
        preview:
          'https://media.rawg.io/media/stories-previews/42b/42bb6fbc16394efec2dc710ecb38010c.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28906,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17398,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 42144,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 12235,
          image_background:
            'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 25,
          name: 'Space',
          slug: 'space',
          language: 'eng',
          games_count: 41908,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 7674,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 226,
          name: 'Cyberpunk',
          slug: 'cyberpunk',
          language: 'eng',
          games_count: 4156,
          image_background:
            'https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1668,
          image_background:
            'https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg',
        },
        {
          id: 96,
          name: 'Kickstarter',
          slug: 'kickstarter',
          language: 'eng',
          games_count: 586,
          image_background:
            'https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg',
        },
        {
          id: 42473,
          name: 'Immersive Sim',
          slug: 'immersive-sim-2',
          language: 'eng',
          games_count: 1864,
          image_background:
            'https://media.rawg.io/media/games/df4/df415b18835f91a1b4db1da294996ee5.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/e98/e98c259aeac26d1ef5c1affc670eec83.jpg',
        },
        {
          id: 134398,
          image:
            'https://media.rawg.io/media/screenshots/2c0/2c0aebfd3a5b01239299e856f8c416a5.jpg',
        },
        {
          id: 134399,
          image:
            'https://media.rawg.io/media/screenshots/2d7/2d7f05da23c93b78f22676fcf935b15c.jpg',
        },
        {
          id: 134400,
          image:
            'https://media.rawg.io/media/screenshots/a09/a093d71c01991f5e68108125a2713af6.jpg',
        },
        {
          id: 134401,
          image:
            'https://media.rawg.io/media/screenshots/9d9/9d9357eb926ab86a6ee8e931a83fd92d.jpg',
        },
        {
          id: 134402,
          image:
            'https://media.rawg.io/media/screenshots/e76/e762ed7a3c464139d2d2d5b3efc41977.jpg',
        },
        {
          id: 134403,
          image:
            'https://media.rawg.io/media/screenshots/83f/83f169bb3898a3654d0719c54bfeee52.jpg',
        },
      ],
    },
    {
      id: 292844,
      slug: 'hollow-knight-silksong',
      name: 'Hollow Knight: Silksong',
      released: '2023-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg',
      rating: 4.53,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 27,
          percent: 75.0,
        },
        {
          id: 4,
          title: 'recommended',
          count: 5,
          percent: 13.89,
        },
        {
          id: 3,
          title: 'meh',
          count: 2,
          percent: 5.56,
        },
        {
          id: 1,
          title: 'skip',
          count: 2,
          percent: 5.56,
        },
      ],
      ratings_count: 34,
      reviews_text_count: 1,
      added: 681,
      added_by_status: {
        yet: 85,
        owned: 60,
        beaten: 6,
        toplay: 524,
        dropped: 5,
        playing: 1,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 408,
      updated: '2023-08-10T09:40:42',
      user_game: null,
      reviews_count: 36,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 75370,
            image_background:
              'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Intel Core 2 Duo E5200<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce 9800GTX+ (1GB)<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 9 GB available space<br></li><li><strong>Additional Notes:</strong> 1080p, 16:9 recommended</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel Core i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 560+<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 9 GB available space<br></li><li><strong>Additional Notes:</strong> 1080p, 16:9 recommended</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 101843,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5290,
            image_background:
              'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
          games_count: 54589,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
          games_count: 100624,
          image_background:
            'https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg',
        },
      ],
      stores: [
        {
          id: 293377,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
        {
          id: 299391,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/9ba/9ba1677bb7d159ec53071cdd4795b185.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4',
          full: 'https://media.rawg.io/media/stories/5a3/5a37a3db90c2d375b642852efdb14568.mp4',
        },
        video: 'pFAknD_9U7c',
        preview:
          'https://media.rawg.io/media/stories-previews/94c/94ca06fd940ac5c2c315eee9ff6ed12d.jpg',
      },
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14725,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3245,
          image_background:
            'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 45,
          name: '2D',
          slug: '2d',
          language: 'eng',
          games_count: 188793,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 49,
          name: 'Difficult',
          slug: 'difficult',
          language: 'eng',
          games_count: 12552,
          image_background:
            'https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19774,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 13818,
          image_background:
            'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 9554,
          image_background:
            'https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3344,
          image_background:
            'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
        },
        {
          id: 259,
          name: 'Metroidvania',
          slug: 'metroidvania',
          language: 'eng',
          games_count: 4079,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5837,
          image_background:
            'https://media.rawg.io/media/screenshots/943/943d7d9779bc7dc548285889ca5384ff.jpg',
        },
        {
          id: 204,
          name: 'Gothic',
          slug: 'gothic',
          language: 'eng',
          games_count: 768,
          image_background:
            'https://media.rawg.io/media/games/8a3/8a3e91293e38dcc1126ae83d31bfd6e4.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg',
        },
        {
          id: 1837511,
          image:
            'https://media.rawg.io/media/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg',
        },
        {
          id: 1837512,
          image:
            'https://media.rawg.io/media/screenshots/3f3/3f35cf2130d1d8763ee45dc77ce843b2.jpg',
        },
        {
          id: 1837513,
          image:
            'https://media.rawg.io/media/screenshots/7e1/7e160928dc38f72937951f56e73a1988.jpg',
        },
        {
          id: 1837514,
          image:
            'https://media.rawg.io/media/screenshots/b96/b9656b6e62746c588ea12287fc1c0aed.jpg',
        },
        {
          id: 1837515,
          image:
            'https://media.rawg.io/media/screenshots/f2a/f2a7d8d3fc80ca60f36f89419d2547e6.jpg',
        },
        {
          id: 1837687,
          image:
            'https://media.rawg.io/media/screenshots/404/4048fa94127cec67d8464aaa13f6d588.jpg',
        },
      ],
    },
    {
      id: 490430,
      slug: 'prince-of-persia-the-sands-of-time-remake',
      name: 'Prince of Persia: The Sands of Time Remake',
      released: '2024-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg',
      rating: 3.5,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 16,
          percent: 36.36,
        },
        {
          id: 4,
          title: 'recommended',
          count: 14,
          percent: 31.82,
        },
        {
          id: 1,
          title: 'skip',
          count: 12,
          percent: 27.27,
        },
        {
          id: 3,
          title: 'meh',
          count: 2,
          percent: 4.55,
        },
      ],
      ratings_count: 41,
      reviews_text_count: 2,
      added: 616,
      added_by_status: {
        yet: 96,
        owned: 107,
        beaten: 14,
        toplay: 388,
        dropped: 7,
        playing: 4,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 412,
      updated: '2023-07-25T00:36:18',
      user_game: null,
      reviews_count: 44,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
      ],
      stores: [
        {
          id: 482160,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4767,
            image_background:
              'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
          },
        },
        {
          id: 482162,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
        {
          id: 482161,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
      ],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/6e7/6e7d3b3665e1a4321fdbbcf561dcbb0e.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/4ef/4ef76a507fa0825b800346f00b21c29b.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/6e7/6e7d3b3665e1a4321fdbbcf561dcbb0e.mp4',
          full: 'https://media.rawg.io/media/stories/505/505f099a90456e803ecc63d862fa0f06.mp4',
        },
        video: 'htzq7EEXQs8',
        preview:
          'https://media.rawg.io/media/stories-previews/d98/d987722fb051f0fa1cc2f64c682dd380.jpg',
      },
      tags: [
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1728,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 271,
          name: 'Remake',
          slug: 'remake',
          language: 'eng',
          games_count: 1668,
          image_background:
            'https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg',
        },
        {
          id: 2515899,
          image:
            'https://media.rawg.io/media/screenshots/27e/27eda6606d4c7a763ab0352319f6c601.jpg',
        },
        {
          id: 2515900,
          image:
            'https://media.rawg.io/media/screenshots/a73/a731e879c475428c35d5a13b9512c742.jpg',
        },
        {
          id: 2515904,
          image:
            'https://media.rawg.io/media/screenshots/797/7976cd46c437ec13f7f8e70c1f1dbee8.jpg',
        },
        {
          id: 2515910,
          image:
            'https://media.rawg.io/media/screenshots/2f2/2f27106ce265ab8bec91f44329a8f826.jpg',
        },
        {
          id: 2515911,
          image:
            'https://media.rawg.io/media/screenshots/997/997d1f79363dd5e440bff6a6c8d4b187.jpg',
        },
        {
          id: 2515912,
          image:
            'https://media.rawg.io/media/screenshots/0be/0be2d0046b8e5a09a21a8691be54f5ae.jpg',
        },
      ],
    },
    {
      id: 494382,
      slug: 'final-fantasy-xvi',
      name: 'Final Fantasy XVI',
      released: '2023-06-22',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg',
      rating: 4.23,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 30,
          percent: 49.18,
        },
        {
          id: 4,
          title: 'recommended',
          count: 21,
          percent: 34.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 7,
          percent: 11.48,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 4.92,
        },
      ],
      ratings_count: 59,
      reviews_text_count: 1,
      added: 519,
      added_by_status: {
        yet: 53,
        owned: 94,
        beaten: 37,
        toplay: 297,
        dropped: 8,
        playing: 30,
      },
      metacritic: 88,
      playtime: 0,
      suggestions_count: 539,
      updated: '2023-08-17T10:33:29',
      user_game: null,
      reviews_count: 61,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-06-22',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-06-22',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 961723,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5979,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 37796,
          name: 'exclusive',
          slug: 'exclusive',
          language: 'eng',
          games_count: 4505,
          image_background:
            'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 85,
          image_background:
            'https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg',
        },
        {
          id: 3402719,
          image:
            'https://media.rawg.io/media/screenshots/bc2/bc255e09533797521b2ff1e364113a0b.jpg',
        },
        {
          id: 3402720,
          image:
            'https://media.rawg.io/media/screenshots/af2/af2426fc46c870b4fe3dfb0242f2f6cc_SDr2Q4j.jpg',
        },
        {
          id: 3402721,
          image:
            'https://media.rawg.io/media/screenshots/20c/20caffc877526070d84dda7b79e6340c.jpg',
        },
        {
          id: 3402722,
          image:
            'https://media.rawg.io/media/screenshots/934/93425eb39f7347f229a8ef4a6bc4cefc.jpg',
        },
        {
          id: 3402724,
          image:
            'https://media.rawg.io/media/screenshots/ae8/ae88639668c1124b2b75eed1e8c44209.jpg',
        },
        {
          id: 3402725,
          image:
            'https://media.rawg.io/media/screenshots/5bb/5bbe932d2fa06cc12825b006361bd4e5.jpg',
        },
      ],
    },
    {
      id: 494382,
      slug: 'final-fantasy-xvi',
      name: 'Final Fantasy XVI',
      released: '2023-06-22',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg',
      rating: 4.23,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 30,
          percent: 49.18,
        },
        {
          id: 4,
          title: 'recommended',
          count: 21,
          percent: 34.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 7,
          percent: 11.48,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 4.92,
        },
      ],
      ratings_count: 59,
      reviews_text_count: 1,
      added: 519,
      added_by_status: {
        yet: 53,
        owned: 94,
        beaten: 37,
        toplay: 297,
        dropped: 8,
        playing: 30,
      },
      metacritic: 88,
      playtime: 0,
      suggestions_count: 539,
      updated: '2023-08-17T10:33:29',
      user_game: null,
      reviews_count: 61,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-06-22',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-06-22',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 961723,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 5979,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 37796,
          name: 'exclusive',
          slug: 'exclusive',
          language: 'eng',
          games_count: 4505,
          image_background:
            'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 85,
          image_background:
            'https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/22e/22e68bb62b3013283972cecf98ed51dc.jpg',
        },
        {
          id: 3402719,
          image:
            'https://media.rawg.io/media/screenshots/bc2/bc255e09533797521b2ff1e364113a0b.jpg',
        },
        {
          id: 3402720,
          image:
            'https://media.rawg.io/media/screenshots/af2/af2426fc46c870b4fe3dfb0242f2f6cc_SDr2Q4j.jpg',
        },
        {
          id: 3402721,
          image:
            'https://media.rawg.io/media/screenshots/20c/20caffc877526070d84dda7b79e6340c.jpg',
        },
        {
          id: 3402722,
          image:
            'https://media.rawg.io/media/screenshots/934/93425eb39f7347f229a8ef4a6bc4cefc.jpg',
        },
        {
          id: 3402724,
          image:
            'https://media.rawg.io/media/screenshots/ae8/ae88639668c1124b2b75eed1e8c44209.jpg',
        },
        {
          id: 3402725,
          image:
            'https://media.rawg.io/media/screenshots/5bb/5bbe932d2fa06cc12825b006361bd4e5.jpg',
        },
      ],
    },
    {
      id: 662316,
      slug: 'marvels-spider-man-2',
      name: "Marvel's Spider-Man 2",
      released: '2023-10-20',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 11,
          percent: 64.71,
        },
        {
          id: 4,
          title: 'recommended',
          count: 5,
          percent: 29.41,
        },
        {
          id: 1,
          title: 'skip',
          count: 1,
          percent: 5.88,
        },
      ],
      ratings_count: 16,
      reviews_text_count: 1,
      added: 474,
      added_by_status: {
        yet: 68,
        owned: 51,
        beaten: 3,
        toplay: 342,
        dropped: 2,
        playing: 8,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 391,
      updated: '2023-07-31T02:11:05',
      user_game: null,
      reviews_count: 17,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-10-20',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
      ],
      stores: [
        {
          id: 891327,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 268,
          name: 'Comic Book',
          slug: 'comic-book',
          language: 'eng',
          games_count: 945,
          image_background:
            'https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg',
        },
        {
          id: 3360,
          name: 'marvel',
          slug: 'marvel',
          language: 'eng',
          games_count: 48,
          image_background:
            'https://media.rawg.io/media/screenshots/d76/d767a8a4e613299aec419a53cf3a6f07.jpg',
        },
        {
          id: 9113,
          name: 'spider-man',
          slug: 'spider-man',
          language: 'eng',
          games_count: 51,
          image_background:
            'https://media.rawg.io/media/screenshots/092/0929cee4b07d964be567abde7b3a8e4d.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/a8a/a8a74f30ce82dbde168176a4aa04ac58.jpg',
        },
        {
          id: 3020860,
          image:
            'https://media.rawg.io/media/screenshots/89b/89b077deb2a3ce38e071fdb5caae69c0.jpg',
        },
        {
          id: 3020861,
          image:
            'https://media.rawg.io/media/screenshots/c71/c718076de2326247d29ea5ed32e67c6c.jpg',
        },
        {
          id: 3020862,
          image:
            'https://media.rawg.io/media/screenshots/74e/74e29808dd23446aae1ab61bb5a429fc.jpg',
        },
        {
          id: 3020863,
          image:
            'https://media.rawg.io/media/screenshots/ea0/ea082dba5c51799204e0c5e55134ecc3.jpg',
        },
        {
          id: 3020871,
          image:
            'https://media.rawg.io/media/screenshots/7d1/7d112ad515211a01639d22eef5093c47.jpg',
        },
        {
          id: 3020872,
          image:
            'https://media.rawg.io/media/screenshots/6ff/6ff530af3788338486569ce723d503bd.jpg',
        },
      ],
    },
    {
      id: 580972,
      slug: 'alan-wake-2',
      name: 'Alan Wake 2',
      released: '2023-10-27',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg',
      rating: 3.6,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 6,
          percent: 60.0,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 30.0,
        },
        {
          id: 3,
          title: 'meh',
          count: 1,
          percent: 10.0,
        },
      ],
      ratings_count: 10,
      reviews_text_count: 0,
      added: 457,
      added_by_status: {
        yet: 82,
        owned: 45,
        beaten: 2,
        toplay: 325,
        dropped: 1,
        playing: 2,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 504,
      updated: '2023-08-17T16:47:00',
      user_game: null,
      reviews_count: 10,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 918,
            image_background:
              'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
          },
          released_at: '2023-10-27',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
          },
          released_at: '2023-10-27',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515298,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
          released_at: '2023-10-27',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173848,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
      ],
      stores: [
        {
          id: 960125,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
          },
        },
        {
          id: 886301,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1260,
            image_background:
              'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
          },
        },
      ],
      clip: null,
      tags: [],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg',
        },
        {
          id: 3888339,
          image:
            'https://media.rawg.io/media/screenshots/6b8/6b8fe21f070edc4c9184062f9dc714e3.jpg',
        },
        {
          id: 3888340,
          image:
            'https://media.rawg.io/media/screenshots/cae/caefb537267fb10f3fe0413f16c733ed.jpg',
        },
        {
          id: 3888341,
          image:
            'https://media.rawg.io/media/screenshots/3e0/3e08d7746359b512714b510a1ee30163_WTYwMbp.jpg',
        },
        {
          id: 3888342,
          image:
            'https://media.rawg.io/media/screenshots/24c/24ce827e6ddae7317ced5e2d98e11d5e.jpg',
        },
        {
          id: 3888343,
          image:
            'https://media.rawg.io/media/screenshots/df2/df20dab4bfbfd611aa496116cca810bc.jpg',
        },
        {
          id: 3888344,
          image:
            'https://media.rawg.io/media/screenshots/1eb/1eb720bb7d9eea3f352fbf881666aaeb.jpg',
        },
      ],
    },
    {
      id: 43253,
      slug: 'little-devil-inside',
      name: 'Little Devil Inside',
      released: '2023-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg',
      rating: 4.1,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 6,
          percent: 60.0,
        },
        {
          id: 3,
          title: 'meh',
          count: 2,
          percent: 20.0,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1,
          percent: 10.0,
        },
        {
          id: 1,
          title: 'skip',
          count: 1,
          percent: 10.0,
        },
      ],
      ratings_count: 10,
      reviews_text_count: 0,
      added: 419,
      added_by_status: {
        yet: 53,
        owned: 42,
        beaten: 1,
        toplay: 322,
        dropped: 1,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 348,
      updated: '2023-07-08T12:53:22',
      user_game: null,
      reviews_count: 10,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 75370,
            image_background:
              'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 101843,
            image_background:
              'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
        {
          platform: {
            id: 6,
            name: 'Linux',
            slug: 'linux',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [],
      clip: {
        clip: 'https://media.rawg.io/media/stories-640/56b/56b84b8b2d1a79d465cd56676d238d35.mp4',
        clips: {
          '320':
            'https://media.rawg.io/media/stories-320/d34/d34c607ff1efa8b46ce4008142f03861.mp4',
          '640':
            'https://media.rawg.io/media/stories-640/56b/56b84b8b2d1a79d465cd56676d238d35.mp4',
          full: 'https://media.rawg.io/media/stories/c4a/c4aef149acc6c47dc3b1958b6ea76ab5.mp4',
        },
        video: '_FqsyNSYSKc',
        preview:
          'https://media.rawg.io/media/stories-previews/3d6/3d681e8b65eed8b635d18e41cf3bd37d.jpg',
      },
      tags: [
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 7399,
          image_background:
            'https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg',
        },
        {
          id: 37796,
          name: 'exclusive',
          slug: 'exclusive',
          language: 'eng',
          games_count: 4505,
          image_background:
            'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
        },
        {
          id: 1863,
          name: 'challenge',
          slug: 'challenge',
          language: 'eng',
          games_count: 12661,
          image_background:
            'https://media.rawg.io/media/screenshots/e3a/e3a6291e3bebe2c39da28b4c3e56a045.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/63b/63bd91ad9f2b896cdb067ad3a5542c9e.jpg',
        },
        {
          id: 624546,
          image:
            'https://media.rawg.io/media/screenshots/e47/e4790abb668c975452af5e57f3d1ab9b_pVbQS2F.jpg',
        },
        {
          id: 624547,
          image:
            'https://media.rawg.io/media/screenshots/ade/ade68b627d5c80ff3c2d2ffee0c59879.jpg',
        },
        {
          id: 624548,
          image:
            'https://media.rawg.io/media/screenshots/7c1/7c1b3870b401cbac0463eccf171c306a_3sDsiWP.jpg',
        },
        {
          id: 624549,
          image:
            'https://media.rawg.io/media/screenshots/a95/a958849125bdb7d7aa04d1098e37cac3.jpg',
        },
        {
          id: 624550,
          image:
            'https://media.rawg.io/media/screenshots/10c/10c58cd83d36ec6c9e343643bcfa1850.jpg',
        },
        {
          id: 624551,
          image:
            'https://media.rawg.io/media/screenshots/2b0/2b075400a899f07000145f3e3005be94_yX0buKv.jpg',
        },
      ],
    },
    {
      id: 845261,
      slug: 'assassins-creed-mirage',
      name: "Assassin's Creed Mirage",
      released: '2023-10-05',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg',
      rating: 3.62,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 5,
          percent: 62.5,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1,
          percent: 12.5,
        },
        {
          id: 3,
          title: 'meh',
          count: 1,
          percent: 12.5,
        },
        {
          id: 1,
          title: 'skip',
          count: 1,
          percent: 12.5,
        },
      ],
      ratings_count: 8,
      reviews_text_count: 0,
      added: 413,
      added_by_status: {
        yet: 66,
        owned: 44,
        toplay: 298,
        dropped: 1,
        playing: 4,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 466,
      updated: '2023-08-14T17:26:46',
      user_game: null,
      reviews_count: 8,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg',
          },
          released_at: '2023-10-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515291,
            image_background:
              'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
          },
          released_at: '2023-10-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
          },
          released_at: '2023-10-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-10-05',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
          },
          released_at: '2023-10-05',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173843,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
      ],
      stores: [
        {
          id: 846648,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7831,
            image_background:
              'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
          },
        },
        {
          id: 846647,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
      ],
      clip: null,
      tags: [],
      esrb_rating: {
        id: 5,
        name: 'Adults Only',
        slug: 'adults-only',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/fbd/fbd0128013b7965904be571e75fb30c0.jpg',
        },
        {
          id: 3548417,
          image:
            'https://media.rawg.io/media/screenshots/214/2144e4a308f6df915a0ce6b9c6b0536a.jpg',
        },
        {
          id: 3560449,
          image:
            'https://media.rawg.io/media/screenshots/a8d/a8d22377af727e1404c96022b1333095.jpg',
        },
        {
          id: 3560450,
          image:
            'https://media.rawg.io/media/screenshots/935/9357652d65a3d714426a22ef44e0f0da.jpg',
        },
        {
          id: 3560451,
          image:
            'https://media.rawg.io/media/screenshots/2b0/2b0a877f30e8113f0e99b41ee3781d56.jpg',
        },
        {
          id: 3560452,
          image:
            'https://media.rawg.io/media/screenshots/6ce/6cecbbd2a905d94f8f64dd932a3e32d7.jpg',
        },
        {
          id: 3561955,
          image:
            'https://media.rawg.io/media/screenshots/59d/59d2671c96228757abe81f38749918ff.jpg',
        },
      ],
    },
    {
      id: 616693,
      slug: 'replaced',
      name: 'Replaced',
      released: '2023-12-31',
      tba: true,
      background_image:
        'https://media.rawg.io/media/games/041/041e04184322bc859d617b790d8bfab9.jpg',
      rating: 3.12,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 3,
          percent: 37.5,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 37.5,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 2,
          percent: 25.0,
        },
      ],
      ratings_count: 8,
      reviews_text_count: 0,
      added: 394,
      added_by_status: {
        yet: 64,
        owned: 45,
        toplay: 285,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 217,
      updated: '2023-05-26T18:11:55',
      user_game: null,
      reviews_count: 8,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: null,
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
          games_count: 100624,
          image_background:
            'https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg',
        },
      ],
      stores: [
        {
          id: 956209,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 613379,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1259,
            image_background:
              'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
          },
        },
        {
          id: 613380,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17398,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 122,
          name: 'Pixel Graphics',
          slug: 'pixel-graphics',
          language: 'eng',
          games_count: 90589,
          image_background:
            'https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg',
        },
        {
          id: 224,
          name: '1980s',
          slug: '1980s',
          language: 'eng',
          games_count: 1926,
          image_background:
            'https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg',
        },
        {
          id: 11102,
          name: 'retro-futuristic',
          slug: 'retro-futuristic',
          language: 'eng',
          games_count: 3,
          image_background:
            'https://media.rawg.io/media/screenshots/ca7/ca7c49fc5e7699d870058015f61ae4ee.jpg',
        },
        {
          id: 3521,
          name: 'action-platformer',
          slug: 'action-platformer',
          language: 'eng',
          games_count: 56,
          image_background:
            'https://media.rawg.io/media/screenshots/f9f/f9fb7d027c9d3a30ef17f81564ba5599.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/041/041e04184322bc859d617b790d8bfab9.jpg',
        },
        {
          id: 2882413,
          image:
            'https://media.rawg.io/media/screenshots/6a6/6a6a3d193fac79cfc8093441f9ab28dd.jpg',
        },
        {
          id: 2882414,
          image:
            'https://media.rawg.io/media/screenshots/d9c/d9c3839d3992d0370ac4860a1a3da816.jpg',
        },
        {
          id: 2882415,
          image:
            'https://media.rawg.io/media/screenshots/806/806f480327cbda64fd668a22299450ea.jpg',
        },
        {
          id: 2882416,
          image:
            'https://media.rawg.io/media/screenshots/c0e/c0e109d1bf9d7f235ebdba3b65935834.jpg',
        },
      ],
    },
    {
      id: 605674,
      slug: 'lies-of-p',
      name: 'Lies Of P',
      released: '2023-09-19',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/cc3/cc3231b0e4ef970590eeb2ce23f60ca0.jpg',
      rating: 3.38,
      rating_top: 3,
      ratings: [
        {
          id: 3,
          title: 'meh',
          count: 7,
          percent: 43.75,
        },
        {
          id: 4,
          title: 'recommended',
          count: 4,
          percent: 25.0,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 3,
          percent: 18.75,
        },
        {
          id: 1,
          title: 'skip',
          count: 2,
          percent: 12.5,
        },
      ],
      ratings_count: 16,
      reviews_text_count: 0,
      added: 353,
      added_by_status: {
        yet: 60,
        owned: 51,
        beaten: 2,
        toplay: 225,
        dropped: 13,
        playing: 2,
      },
      metacritic: null,
      playtime: 0,
      suggestions_count: 315,
      updated: '2023-08-15T01:48:12',
      user_game: null,
      reviews_count: 16,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-09-19',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10 64bit<br></li><li><strong>Processor:</strong> AMD Ryzen 3 1200／Intel Core i5-7500<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB<br></li><li><strong>DirectX:</strong> Version 12</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10 64bit<br></li><li><strong>Processor:</strong> AMD Ryzen 5 3600 / Intel Core i7 8700<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> AMD Radeon RX 6700 / NVIDIA GeForce RTX 2060<br></li><li><strong>DirectX:</strong> Version 12</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 916,
            image_background:
              'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
          },
          released_at: '2023-09-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-09-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6684,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
          released_at: '2023-09-19',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-09-19',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52981,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 600021,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14725,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17681,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6396,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9650,
          image_background:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 19774,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5853,
          image_background:
            'https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14300,
          image_background:
            'https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg',
        },
        {
          id: 5,
          name: 'Replay Value',
          slug: 'replay-value',
          language: 'eng',
          games_count: 1330,
          image_background:
            'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3344,
          image_background:
            'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
        },
        {
          id: 571,
          name: '3D',
          slug: '3d',
          language: 'eng',
          games_count: 78029,
          image_background:
            'https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg',
        },
        {
          id: 580,
          name: 'Souls-like',
          slug: 'souls-like',
          language: 'eng',
          games_count: 1089,
          image_background:
            'https://media.rawg.io/media/games/24b/24bf67a50cb870ed6aad844f8b276115.jpg',
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/cc3/cc3231b0e4ef970590eeb2ce23f60ca0.jpg',
        },
        {
          id: 2850460,
          image:
            'https://media.rawg.io/media/screenshots/333/3332c7015ad0c3042f10a128ab3b4f0a.jpg',
        },
        {
          id: 2850461,
          image:
            'https://media.rawg.io/media/screenshots/e54/e5441972762d7c97428c8ec8e1c57ab9.jpg',
        },
        {
          id: 2850462,
          image:
            'https://media.rawg.io/media/screenshots/caf/caf8b31c71fd30eeb53504b550fd6dbf.jpg',
        },
        {
          id: 2850463,
          image:
            'https://media.rawg.io/media/screenshots/6bf/6bf590df242e884b7d519f9fbe81e8b3.jpg',
        },
        {
          id: 2850464,
          image:
            'https://media.rawg.io/media/screenshots/f57/f5788075e970b835ff1b20f73ebf2ca4.jpg',
        },
      ],
    },
    {
      id: 614961,
      slug: 'planet-of-lana',
      name: 'Planet of Lana',
      released: '2023-05-23',
      tba: false,
      background_image:
        'https://media.rawg.io/media/screenshots/848/848b8b0772f369407405d390b394e81e.jpg',
      rating: 4.18,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 28,
          percent: 54.9,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 17,
          percent: 33.33,
        },
        {
          id: 3,
          title: 'meh',
          count: 5,
          percent: 9.8,
        },
        {
          id: 1,
          title: 'skip',
          count: 1,
          percent: 1.96,
        },
      ],
      ratings_count: 51,
      reviews_text_count: 0,
      added: 341,
      added_by_status: {
        yet: 40,
        owned: 71,
        beaten: 47,
        toplay: 161,
        dropped: 9,
        playing: 13,
      },
      metacritic: 80,
      playtime: 6,
      suggestions_count: 294,
      updated: '2023-08-16T08:42:56',
      user_game: null,
      reviews_count: 51,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 515232,
            image_background:
              'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
          },
          released_at: '2023-05-23',
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel Core i5<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 660<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel Core i7<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 1060<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5540,
            image_background:
              'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
          },
          released_at: '2023-05-23',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 788,
            image_background:
              'https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg',
          },
          released_at: '2023-05-23',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 173811,
          image_background:
            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 133504,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 51,
          name: 'Indie',
          slug: 'indie',
          games_count: 54589,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        {
          id: 7,
          name: 'Puzzle',
          slug: 'puzzle',
          games_count: 97124,
          image_background:
            'https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg',
        },
        {
          id: 83,
          name: 'Platformer',
          slug: 'platformer',
          games_count: 100624,
          image_background:
            'https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg',
        },
      ],
      stores: [
        {
          id: 942129,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5388,
            image_background:
              'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
          },
        },
        {
          id: 610942,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 78099,
            image_background:
              'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 207792,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 31360,
          image_background:
            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14725,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29909,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 40849,
          name: 'Steam Cloud',
          slug: 'steam-cloud',
          language: 'eng',
          games_count: 14617,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18598,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 32,
          name: 'Sci-fi',
          slug: 'sci-fi',
          language: 'eng',
          games_count: 17398,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 9702,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
        },
        {
          id: 134,
          name: 'Anime',
          slug: 'anime',
          language: 'eng',
          games_count: 11295,
          image_background:
            'https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg',
        },
        {
          id: 107,
          name: 'Family Friendly',
          slug: 'family-friendly',
          language: 'eng',
          games_count: 5495,
          image_background:
            'https://media.rawg.io/media/games/89a/89a700d3c6a76bd0610ca89ccd20da54.jpg',
        },
        {
          id: 113,
          name: 'Side Scroller',
          slug: 'side-scroller',
          language: 'eng',
          games_count: 9554,
          image_background:
            'https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg',
        },
        {
          id: 167,
          name: 'Futuristic',
          slug: 'futuristic',
          language: 'eng',
          games_count: 4480,
          image_background:
            'https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg',
        },
        {
          id: 165,
          name: 'Colorful',
          slug: 'colorful',
          language: 'eng',
          games_count: 18316,
          image_background:
            'https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 1493,
          image_background:
            'https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
        },
        {
          id: 40937,
          name: 'Steam Trading Cards',
          slug: 'steam-trading-cards-2',
          language: 'eng',
          games_count: 443,
          image_background:
            'https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg',
        },
        {
          id: 166,
          name: 'Stylized',
          slug: 'stylized',
          language: 'eng',
          games_count: 4587,
          image_background:
            'https://media.rawg.io/media/games/ba9/ba981ea851b2a85b78d63d9ec53c19e5.jpg',
        },
        {
          id: 258,
          name: 'Hand-drawn',
          slug: 'hand-drawn',
          language: 'eng',
          games_count: 5837,
          image_background:
            'https://media.rawg.io/media/screenshots/943/943d7d9779bc7dc548285889ca5384ff.jpg',
        },
        {
          id: 572,
          name: 'Emotional',
          slug: 'emotional',
          language: 'eng',
          games_count: 1932,
          image_background:
            'https://media.rawg.io/media/games/e0f/e0f8d58079f6a0c6afb25d91422a98fc.jpg',
        },
        {
          id: 49959,
          name: '2D Platformer',
          slug: '2d-platformer-3',
          language: 'eng',
          games_count: 4441,
          image_background:
            'https://media.rawg.io/media/games/fd4/fd4e41d4e83714ff892702895cf4af08.jpg',
        },
        {
          id: 49995,
          name: '2D-платформер',
          slug: '2d-platformer-4',
          language: 'eng',
          games_count: 4397,
          image_background:
            'https://media.rawg.io/media/games/120/120fb9bd3078ba475e525f592960592f.jpg',
        },
        {
          id: 49955,
          name: 'Puzzle Platformer',
          slug: 'puzzle-platformer-2',
          language: 'eng',
          games_count: 2169,
          image_background:
            'https://media.rawg.io/media/games/668/6687d4bbe621fadf8a29c57bb381f93c.jpg',
        },
        {
          id: 202,
          name: 'Artificial Intelligence',
          slug: 'artificial-intelligence',
          language: 'eng',
          games_count: 981,
          image_background:
            'https://media.rawg.io/media/screenshots/c52/c52af9e979bba47f4ee006ae6f8a2576.jpg',
        },
      ],
      esrb_rating: {
        id: 2,
        name: 'Everyone 10+',
        slug: 'everyone-10-plus',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/screenshots/848/848b8b0772f369407405d390b394e81e.jpg',
        },
        {
          id: 2877228,
          image:
            'https://media.rawg.io/media/screenshots/e9a/e9aaad60c68fa9ac3ae05e709b804b04.jpg',
        },
        {
          id: 2877229,
          image:
            'https://media.rawg.io/media/screenshots/d0d/d0daa91f23b3bfe369a80536baa23c41.jpg',
        },
        {
          id: 2877230,
          image:
            'https://media.rawg.io/media/screenshots/f93/f9334df41b852d76c46a9c9a3e837d7f.jpg',
        },
        {
          id: 2877231,
          image:
            'https://media.rawg.io/media/screenshots/c47/c47eb0f38bd2f8174cf0d68e1566e283.jpg',
        },
        {
          id: 2877232,
          image:
            'https://media.rawg.io/media/screenshots/85e/85e1d4801b4546a421fc70a2924995dd.jpg',
        },
        {
          id: 2877233,
          image:
            'https://media.rawg.io/media/screenshots/b43/b43126d9c2d2d501ee1120fcc280e996.jpg',
        },
      ],
    },
  ],
  games_count: 0,
  reviews_count: 0,
  recommendations_count: 0,
};
