import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, key = 'brick0') {
    super(game, x, y, key)

    this.game.physics.enable(this, Phaser.ARCADE)
    this.body.allowGravity = false
    this.body.immovable = true
  }

  collision () {
    console.log('CrateEmpty collision() called')
    this.destroy()
  }
}
