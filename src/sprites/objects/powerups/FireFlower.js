import Phaser from 'phaser'
import setAnimations from '../../setAnimations'
import configFireFlower from '../../../config/config.fire_flower'

export default class extends Phaser.Sprite {
  constructor (game, x, y, assetKey) {
    super(game, x, y, assetKey)

    setAnimations(configFireFlower.animations, this)
  }
}
