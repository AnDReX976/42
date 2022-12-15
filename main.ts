music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showString("Hello")
basic.showString("2>4?")
if ((2 as any) > (4 as any)) {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
} else {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    music.setVolume(255)
}
