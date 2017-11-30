import Phaser from 'phaser'
import CharacterTux from '../sprites/characters/CharacterTux'
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
    this.cratesEmpty = null
  }
  init () {
    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.physics.arcade.gravity.y = 300

    console.log(TiledUtils)
  }
  preload () {}

  create () {
    this.keyUp = this.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    // this.add.image(0, 0, 'background/arcticskies')

    this.tilemap = this.add.tilemap('tilemapWorld_0_0')
    this.tilemap.addTilesetImage('icebridge')
    // this.tilemap.addTilesetImage('brick0')
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

    // this.tilemap.setCollisionBetween(1, 100)
    // this.tilemap.setCollision(1, true, this.layerGround)

    // console.log(this.layerGround.getTiles(0, 0, this.layerGround.layer.widthInPixels, this.layerGround.layer.heightInPixels))
  }

  update () {
    this.tuxVelocity.x = 0

    this.physics.arcade.collide(this.tux, this.layerGround)
    this.physics.arcade.collide(this.tux, this.cratesEmpty, (tux, emptyCrate) => {
      if (emptyCrate.body.touching.down) {
        emptyCrate.destroy()
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
    let bodyProperties = {}

    bodyProperties.allowGravity = false
    bodyProperties.immovable = true

    this.cratesEmpty = this.add.group()
    this.cratesEmpty.enableBody = true

    tiledObjects = TiledUtils.findObjectsByType('crateEmpty', this.tilemap, 'Crates')
    tiledObjects.forEach((element) => {
      TiledUtils.createFromTiledObject(element, this.cratesEmpty, bodyProperties)
    })
  }
}
