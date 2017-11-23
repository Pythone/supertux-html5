import Phaser from 'phaser'
import CharacterTux from '../sprites/characters/CharacterTux'

export default class extends Phaser.State {
  constructor () {
    super()
    this.tux = null
  }
  init () {
  }
  preload () {}

  create () {
    this.tux = new CharacterTux(this.game, 100, 100, 'tux')
    this.add.existing(this.tux)
    this.tux.play('small/walk', 10, true)
  }

  update () {
  }
}
