import Phaser from 'phaser'
import configTux from '../../config/config.tux'
import setAnimations from '../setAnimations'

export default class extends Phaser.Sprite{
    constructor(game, x = 0, y = 0, key = 'tuxDefault'){
        super(game, x, y, key)

        setAnimations(configTux.animations, this)
    }
}
