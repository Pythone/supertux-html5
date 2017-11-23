import Phaser from 'phaser'
import configTux from '../../config/config.tux'
import setAnimations from '../setAnimations'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, key = 'tux') {
    super(game, x, y, key)

    setAnimations(configTux.animations, this)

    this.game.physics.enable(this, Phaser.ARCADE)
  }

  setAnimation (name) {
    this.play(name, 10, true)
    switch (name) {
      case 'big/walk':
        this.body.setSize(42, 64, 10, 13)
        break
      case 'small/walk':
        this.body.setSize(40, 39, 5, 10)
        break
      default:
        let bounds = this.getBounds()
        this.body.setSize(bounds.width, bounds.height)
    }
  }
}
