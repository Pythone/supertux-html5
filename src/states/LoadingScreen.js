import Phaser from 'phaser'

export default class extends Phaser.State {
  constructor(){
    super()
  }

  init () {
    this.stage.backgroundColor = '#42d4f4'
    this.add.text(0, 0, 'Loading...')
  }

  preload () {
  }
}
