let 音量 = 0
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("volume", input.soundLevel())
    音量 = input.soundLevel()
    led.setBrightness(255)
    if (音量 > 180) {
        led.setBrightness(10)
    }
})
