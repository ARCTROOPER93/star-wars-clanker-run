controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 8 . . . . . . . 
        . . . . . . . 2 8 . . . . . . . 
        `, SHIP, 0, -50)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(ROCK, effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let ROCK: Sprite = null
let projectile: Sprite = null
let SHIP: Sprite = null
effects.starField.startScreenEffect()
SHIP = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . 7 9 9 7 . . . . . . . 
    . . . . 2 1 9 9 1 2 . . . . . . 
    . . . . 2 2 9 9 2 2 . . . . . . 
    . . . 1 2 2 1 1 2 2 . . . . . . 
    . . . 1 2 2 9 9 2 2 1 . . . . . 
    . . 1 1 2 2 9 9 2 2 1 1 . . . . 
    . 1 2 2 2 2 1 1 2 2 2 2 1 . . . 
    1 2 2 2 2 2 1 1 2 2 2 2 2 1 . . 
    1 1 1 2 2 2 1 1 2 2 2 1 1 1 . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
SHIP.setPosition(77, 111)
controller.moveSprite(SHIP, 100, 0)
SHIP.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    ROCK = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 . . 8 . . 8 . . . . . . 
        . . 8 8 . 8 8 8 . 8 8 . . . . . 
        . . 8 8 . 8 8 8 . 8 8 . . . . . 
        . . 8 f 8 8 8 8 8 f 8 . . . . . 
        . . f 8 f 8 8 8 f 8 f . . . . . 
        . . 8 f . 2 8 2 . f 8 . . . . . 
        . . 8 8 . 8 8 8 . 8 8 . . . . . 
        . . . 8 . . 8 . . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    ROCK.x = randint(0, scene.screenWidth())
    ROCK.setKind(SpriteKind.Enemy)
})
