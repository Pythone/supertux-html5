import Phaser from 'phaser'
import configUnknownBonus from '../../../config/config.unknown_bonus'
import setAnimations from '../../setAnimations'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, key = 'unknown_bonus') {
    super(game, x, y, key)

    setAnimations(configUnknownBonus.animations, this)

    this.game.physics.enable(this, Phaser.ARCADE)
    this.body.allowGravity = false
    this.body.immovable = true
  }

  playAnimation () {
    this.play('shine', 7, true)
  }

  onCollision () {
  }
}
