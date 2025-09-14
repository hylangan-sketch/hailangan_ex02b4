input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("L")
    basic.showNumber(input.lightLevel())
    basic.showString("T")
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.lightLevel() > 50) {
        servos.P1.setAngle(90)
    } else {
        servos.P1.setAngle(0)
    }
    if (input.temperature() >= 38) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        servos.P2.run(100)
    } else if (input.temperature() >= 25) {
        servos.P2.run(80)
    } else {
        servos.P2.run(0)
    }
})
