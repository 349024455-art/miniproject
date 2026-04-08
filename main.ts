basic.showString("Hours:")
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Hours)
    }
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMM))
}
basic.showString("Minutes:")
while (input.buttonIsPressed(Button.B)) {
    if (input.buttonIsPressed(Button.A)) {
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Minutes)
    }
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMM))
}
