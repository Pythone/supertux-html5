import 'pixi'
import 'p2'
import Phaser from 'phaser'

import StateLoading from './states/StateLoading'
import StateGame from './states/StateGame'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('StateLoading', StateLoading, false)
    this.state.add('StateGame', StateGame, false)

    this.state.start('StateLoading', undefined, undefined, {assetsToLoad: config.baseAssets})
  }

  nextState () {
    this.state.start('StateGame')
  }
}

window.game = new Game()
