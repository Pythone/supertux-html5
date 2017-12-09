export default {
  gameWidth: 800,
  gameHeight: 600,
  localStorageName: 'phaseres6webpack',
  baseAssets: [
    {
      name: 'tux',
      type: 'spritesheet',
      url: 'assets/images/heroe/tux.png'
    },
    {
      name: 'arctis',
      type: 'image',
      url: 'assets/images/backgrounds/arctis.jpg'
    },
    {
      name: 'arctiskies',
      type: 'image',
      url: 'assets/images/backgrounds/arcticskies1.png'
    },
    {
      name: 'tux',
      type: 'atlasJSON',
      url_img: 'assets/images/tux.png',
      url_json: 'assets/images/tux.json'
    }
  ],
  states: [
    {
      key: 'StateLoading',
      arguments: {
        assetsToLoad: [
          {
            name: 'tux',
            type: 'atlasJSON',
            url_img: 'assets/images/tux.png',
            url_json: 'assets/images/tux.json'
          },
          {
            name: 'background/arcticskies',
            type: 'image',
            url: 'assets/images/backgrounds/arcticskies1.png'
          },
          {
            name: 'tilemapWorld_0_0',
            type: 'tilemap_json',
            url: 'assets/tilemaps/World_0_0.json'
          },
          {
            name: 'icebridge',
            type: 'image',
            url: 'assets/images/original/images/tiles/blocks/icebridge.png'
          },
          {
            name: 'brick0',
            type: 'image',
            url: 'assets/images/original/images/tiles/blocks/brick0.png'
          },
          {
            name: 'unknown_bonus',
            type: 'atlasJSON',
            url_img: 'assets/images/bonus_blocks/unknown_bonus.png',
            url_json: 'assets/images/bonus_blocks/unknown_bonus.json'
          },
          {
            name: 'coinImage',
            type: 'atlasJSON',
            url_img: 'assets/images/coin/coin.png',
            url_json: 'assets/images/coin/coin.json'
          },
          {
            name: 'egg-shade',
            type: 'image',
            url: 'assets/images/original/images/egg-shade.png'
          }
        ]
      }
    },
    {
      key: 'StateGameWorld_0-0',
      arguments: {}
    }
  ]
}
