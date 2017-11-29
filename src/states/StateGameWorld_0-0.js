import Phaser from 'phaser'
import CharacterTux from '../sprites/characters/CharacterTux'

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
    this.layerCrates = null
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
    this.tilemap.addTilesetImage('brick0')
    this.layerGround = this.tilemap.createLayer('Ground')
    this.layerCrates = this.tilemap.createLayer('Crates')
    this.layerGround.resizeWorld()
    this.layerCrates.resizeWorld()

    //this.add.image(0, 0, 'background/arcticskies')

    this.tux = new CharacterTux(this.game, 100, 100, 'tux')
    this.add.existing(this.tux)
    this.tux.setAnimation('small/walk', 10, true)

    this.tux.body.collideWorldBounds = true
    this.tuxVelocity = this.tux.body.velocity

    this.camera.follow(this.tux)

    this.tilemap.setCollisionBetween(1, 100, true, this.layerGround)
    //this.tilemap.setCollisionBetween(1, 100)
    //this.tilemap.setCollision(1, true, this.layerGround)

    //console.log(this.layerGround.getTiles(0, 0, this.layerGround.layer.widthInPixels, this.layerGround.layer.heightInPixels))
  }

  update () {
    this.tuxVelocity.x = 0

    /*
    this.physics.arcade.collide(this.tux, this.layerGround, function(){
        console.log('tux and layerGround collsion')
    })
    */
    this.physics.arcade.collide(this.tux, this.layerGround)

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
    //this.game.debug.body(this.tux)
  }
}
