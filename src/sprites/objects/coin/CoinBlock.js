/*
* Coin that comes from a BlockBonusCoin
*/

import Coin from './Coin'

export default class extends Coin {
  constructor (game, x, y, assetKey) {
    super(game, x, y, assetKey)

    this.tweenMoveUp = this.game.add.tween(this)
    this.tweenMoveUp.to({y: this.y - 100, alpha: 0}, 500)
    this.tweenMoveUp.onComplete.add(() => {
      this.destroy()
    })

    this.events.onAddedToGroup.add(() => {
      this.play('coin_turning', 30, true)
      this.tweenMoveUp.start()
    })
  }
}
