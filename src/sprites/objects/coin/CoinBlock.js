import Coin from './Coin'

export default class extends Coin {
  constructor (game, x, y, assetKey) {
    super(game, x, y, assetKey)

    this.tweenMoveUp = this.game.add.tween(this)
    this.tweenMoveUp.to({y: this.y - 100})

    this.events.onAddedToGroup.add(() => {
      this.play('coin_turning', 10, true)
      this.tweenMoveUp.start()
    })
  }
}
