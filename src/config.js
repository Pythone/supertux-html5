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
            type: 'tilemap',
            url: 'assets/tilemaps/World_0_0.js'
          },
          {
            name: 'icebridge',
            type: 'image',
            url: 'assets/images/original/images/tiles/blocks/icebridge.png',
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
