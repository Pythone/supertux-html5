import Phaser from 'phaser'
import CharacterTux from '../sprites/characters/CharacterTux'

export default class extends Phaser.State {
  constructor () {
    super()
    this.tux = null
    this.tuxVelocity = null

    this.keyUp = null
    this.keyLeft = null
    this.keyRight = null
  }
  init () {
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.physics.arcade.gravity.y = 300

    console.log(this.physics.arcade.gravity.y)
  }
  preload () {}

  create () {
    this.keyUp = this.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    this.add.image(0, 0, 'background/arcticskies')

    this.tux = new CharacterTux(this.game, 100, 100, 'tux')
    this.add.existing(this.tux)
    this.tux.setAnimation('small/walk', 10, true)

    this.tux.body.collideWorldBounds = true
    this.tuxVelocity = this.tux.body.velocity
  }

  update () {
    this.tuxVelocity.x = 0

    if (this.keyLeft.isDown) {
      this.tuxVelocity.x = -180
    }
    if (this.keyRight.isDown) {
      this.tuxVelocity.x = 180
    }

      // JUMP: this.tux.body.blocked.down checks if tux is 'standing'
    if (this.keyUp.isDown && this.tux.body.blocked.down) {
      this.tuxVelocity.y = -280
    }
  }

  render () {
    this.game.debug.body(this.tux)
  }
}
