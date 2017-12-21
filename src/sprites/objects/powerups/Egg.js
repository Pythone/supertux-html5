/*
* An egg ball "power up" that grows Tux
*/

import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, tux, assetKey = 'egg-shade') {
    super(game, x, y, assetKey)

    this.tux = tux

    this.game.physics.enable(this, Phaser.ARCADE)

    this.events.onAddedToGroup.add(() => {
      this.body.velocity.y = -100
      // Randomly choose of the egg will move left or right
      Math.random() < 0.5 ? this.body.velocity.x = -100 : this.body.velocity.x = 100
    })
  }

  onCollision () {
    this.tux.grow()
    this.destroy()
  }
}
