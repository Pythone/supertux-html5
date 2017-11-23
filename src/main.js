import 'pixi'
import 'p2'
import Phaser from 'phaser'

import StateLoading from './states/StateLoading'
import StateGameWorld_0_0 from './states/StateGameWorld_0-0'

import StatesOrder from './states/StatesOrder'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.statesOrder = new StatesOrder()

    this.state.add('StateLoading', StateLoading, false)
    this.state.add('StateGameWorld_0-0', StateGameWorld_0_0, false)

    config.states.forEach((state) => {
      this.statesOrder.addState(state.key, state.arguments)
    })

    this.nextState()
  }

  nextState () {
    let nextState = this.statesOrder.getNextState()
    this.state.start(nextState.key, undefined, undefined, nextState.arguments)
  }
}

window.game = new Game()
