import BlockBonusUnknown from './BlockBonusUnknown'
import CoinBlock from '../coin/CoinBlock'
import configUnknownBonus from '../../../config/config.unknown_bonus'
import setAnimations from '../../setAnimations'

export default class extends BlockBonusUnknown {
  constructor (game, x, y, assetKeyBlock, assetKeyCoin) {
    super(game, x, y, assetKeyBlock)

    this.coin = new CoinBlock(this.game, this.x, this.y - 35, assetKeyCoin)
  }

  onCollision () {
    console.log('[BlockBonusCoin] -> onCollision()')
    this.parent.add(this.coin)
  }
}
