import Phaser from 'phaser'
import CharacterTux from '../sprites/characters/CharacterTux'
import BlockBonusUnknown from '../sprites/objects/blocks/BlockBonusUnknown'
import BlockBonusCoin from '../sprites/objects/blocks/BlockBonusCoin'
import CrateEmpty from '../sprites/objects/crates/CrateEmpty'
import * as TiledUtils from '../utils/TiledUtils'

export default class extends Phaser.State {
  constructor () {
    super()
    this.tux = null
    this.tuxVelocity = null

    this.keyUp = null
    this.keyLeft = null
    this.keyRight = null

    this.tilemap = null
    this.layerGround = null
    this.groupCratesEmpty = null
    this.groupBonusUnknown = null
  }
  init () {
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.physics.arcade.gravity.y = 300
  }
  preload () {}

  create () {
    this.keyUp = this.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    this.tilemap = this.add.tilemap('tilemapWorld_0_0')
    this.tilemap.addTilesetImage('icebridge')
    this.layerGround = this.tilemap.createLayer('Ground')
    this.layerGround.resizeWorld()

    this.tux = new CharacterTux(this.game, 100, 100, 'tux')
    this.add.existing(this.tux)
    this.tux.setAnimation('small/walk', 10, true)

    this.tux.body.collideWorldBounds = true
    this.tuxVelocity = this.tux.body.velocity

    this.camera.follow(this.tux)

    this.tilemap.setCollisionBetween(1, 100, true, this.layerGround)

    this.createCratesEmpty()
    this.createBlocks()
  }

  update () {
    this.tuxVelocity.x = 0

    this.physics.arcade.collide(this.tux, this.layerGround)
    this.physics.arcade.collide(this.tux, this.groupCratesEmpty, (tux, emptyCrate) => {
      if (emptyCrate.body.touching.down) {
        emptyCrate.onCollision()
      }
    })
    this.physics.arcade.collide(this.tux, this.groupBonusUnknown, (tux, block) => {
      if (block.body.touching.down) {
        block.onCollision()
      }
    })

    if (this.keyLeft.isDown) {
      this.tuxVelocity.x = -180
      this.tux.faceLeft()
    }
    if (this.keyRight.isDown) {
      this.tuxVelocity.x = 180
      this.tux.faceRight()
    }

    // JUMP: this.tux.body.blocked.down checks if tux is 'standing'
    if (this.keyUp.isDown && this.tux.body.blocked.down) {
      this.tuxVelocity.y = -280
    }
  }

  render () {
    // this.game.debug.body(this.tux)
  }

  createCratesEmpty () {
    let tiledObjects = null

    this.groupCratesEmpty = this.add.group()

    tiledObjects = TiledUtils.findObjectsByType('crateEmpty', this.tilemap, 'Crates')
    tiledObjects.forEach((element) => {
      this.groupCratesEmpty.add(new CrateEmpty(this.game, element.x, element.y, 'brick0'))
    })
  }

  createBlocks () {
    let tiledObjects = null
    let tiledBonusCoin = []
    let tiledBonusPowerup = []

    this.groupBonusUnknown = this.add.group()

    tiledObjects = TiledUtils.findObjectsByType('block_unknown_bonus', this.tilemap, 'Blocks')

    tiledObjects.forEach(element => {
      switch (element.properties.bonus) {
        case 'coin':
          tiledBonusCoin.push(element)
          break
        case 'powerup':
          tiledBonusPowerup.push(element)
          break
      }
    })

    tiledBonusCoin.forEach((element) => {
      let blockBonusCoin = new BlockBonusCoin(this.game, element.x, element.y, 'unknown_bonus', 'coinImage')
      this.groupBonusUnknown.add(blockBonusCoin)
    })
  }
}
