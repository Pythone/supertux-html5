/*
* This powerup makes Tux big.
* If Tux is already big, then he can throw fire balls.
*/

import BlockBonusUnknown from './BlockBonusUnknown'
import Egg from '../powerups/Egg'
import FireFlower from '../powerups/FireFlower'

export default class extends BlockBonusUnknown {
  constructor (game, x, y, tux, assetKeyBlock, assetKeyEgg, assetKeyFireFlower) {
    super(game, x, y, assetKeyBlock)

    this.tux = tux

    this.egg = new Egg(this.game, this.x, this.y - 20, this.tux, assetKeyEgg)
    this.fireFlower = new FireFlower(this.game, this.x, this.y - 20, assetKeyFireFlower)
  }

  onCollision () {
    switch (this.tux.currentGrowth) {
      case this.tux.enumGrowth.SMALL:
        this.parent.add(this.egg)
        break
      default:
        this.parent.add(this.fireFlower)
    }
  }
}
