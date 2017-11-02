import 'pixi'
import 'p2'
import Phaser from 'phaser'

import LoadingState from './states/LoadingScreen'
import GameState from './states/GameState'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('LoadingState', LoadingState, false)
    this.state.add('GameState', GameState, false)

    this.state.start('LoadingState', undefined, undefined, {assetsToLoad: config.baseAssets})
  }

  nextState () {
    this.state.start('GameState')
  }
}

window.game = new Game()
