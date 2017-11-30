import Phaser from 'phaser'

export default class extends Phaser.State {
  constructor () {
    super()

    this.assetsToLoad = null
  }

  init (argsObj) {
    this.stage.backgroundColor = '#42d4f4'
    this.add.text(0, 0, 'Loading...')
    this.assetsToLoad = argsObj.assetsToLoad
  }

  preload () {
    this.assetsToLoad.forEach((asset) => {
      this.loadAsset(asset)
    })
  }

  create () {
    console.log('LoadingState: finished loading assets')
    this.game.nextState()
  }

  loadAsset (asset) {
    if (asset.type === 'image') {
      this.load.image(asset.name, asset.url)
      return
    }

    if (asset.type === 'atlasJSON') {
      this.load.atlasJSONArray(asset.name, asset.url_img, asset.url_json)
      return
    }

    if (asset.type === 'tilemap_json') {
      this.load.tilemap(asset.name, asset.url, null, Phaser.Tilemap.TILED_JSON)
      return
    }
    if (asset.type === 'tilemap_csv') {
      this.load.tilemap(asset.name, asset.url, null, Phaser.Tilemap.TILED_CSV)
    }
  }
}
