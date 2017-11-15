import Phaser from 'phaser'

export default class extends Phaser.State {
  constructor () {
    super()
    this.sprite = null

    this.animationsTux = {}
    this.animationsTux.small = {}
    this.animationsTux.small.walk = [
      'small/walk-0.png',
      'small/walk-1.png',
      'small/walk-2.png',
      'small/walk-3.png',
      'small/walk-4.png',
      'small/walk-5.png',
      'small/walk-6.png',
      'small/walk-7.png'
    ]
  }
  init () {
  }
  preload () {}

  create () {
    this.sprite = this.game.add.sprite(100, 100, 'tux')
    this.sprite.animations.add('tux/small/walk', this.animationsTux.small.walk, 12)

    this.sprite.play('tux/small/walk', 10, true)
  }

  update () {
  }
}
