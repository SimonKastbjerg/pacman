let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 . 1 1 1 1 . . . 
    . . . . 1 b b 1 . 1 b b 1 . . . 
    . . . . 1 b f 1 . 1 f b 1 . . . 
    . . . . 1 1 1 1 . 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . . 1 f 1 1 f 1 . . . . 
    . . 1 . . . 1 1 1 1 1 1 . . 1 1 
    . . 1 1 . . . . . . . . 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 f f f f f f 1 1 . . 
    . . . . . 1 1 f 2 2 1 1 1 . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
