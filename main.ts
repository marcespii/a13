input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let sprite: game.LedSprite = null
game.startCountdown(5000)
sprite = game.createSprite(2, 2)
game.setScore(0)
basic.forever(function () {
    sprite.move(1)
    basic.pause(500)
    sprite.ifOnEdgeBounce()
})
