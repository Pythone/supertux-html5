/*
* An egg ball "power up" that grows Tux
*/

import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, assetKey = 'egg-shade') {
    super(game, x, y, assetKey)

    this.game.physics.enable(this, Phaser.ARCADE)
    this.body.allowGravity = true
  }

  onCollision () {
    this.destroy()
  }
}
