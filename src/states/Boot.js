import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  render () {
    /*
    if (this.fontsReady) {
      this.state.start('Splash')
    }
    */
    console.log('hello from Boot.js')
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
