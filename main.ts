let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 5000, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (hand == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 255, 2000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else if (hand == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 255, 2000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
})
