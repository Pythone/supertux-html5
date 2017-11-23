export default function(config, sprite){
    let animationsMap = new Map(config)

    for(let key of animationsMap.keys()){
        sprite.animations.add(key, animationsMap.get(key))
    }
}
