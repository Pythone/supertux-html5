export function createCratesEmpty () {
  let tiledObjects = null

  this.cratesEmpty = this.add.group()
  this.cratesEmpty.enableBody = true

  tiledObjects = this.findObjectsByType('crateEmpty', this.tilemap, 'Crates')
  tiledObjects.forEach((element) => {
    this.createFromTiledObject(element, this.cratesEmpty, false)
  })
}

export function findObjectsByType (type, map, layer) {
  let result = []

  map.objects[layer].forEach(element => {
    try {
      if (element.properties.type === type) {
        // Reposition height to fit the Phaser drawing order
        element.y -= map.tileHeight
        result.push(element)
      }
    } catch (e) {
      console.log(e)
    }
  })

  return result
}
