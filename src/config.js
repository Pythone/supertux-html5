export default {
  gameWidth: 760,
  gameHeight: 400,
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
          }
        ]
      }
    },
    {
      key: 'StateGame',
      arguments: {}
    }
  ]
}
