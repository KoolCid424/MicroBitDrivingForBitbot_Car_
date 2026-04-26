let Input_Controller = 0
let Distance_to_obstuction = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Input_Controller = 0
    }
    if (receivedNumber == 1) {
        Input_Controller = 1
    }
    if (receivedNumber == 2) {
        Input_Controller = 2
    }
    if (receivedNumber == 3) {
        Input_Controller = 3
    }
    if (receivedNumber == 4) {
        Input_Controller = 4
    }
})
basic.forever(function () {
    if (3 > Distance_to_obstuction) {
        if (Input_Controller == 4) {
            bitbot.go(BBDirection.Reverse, 60)
        } else {
            bitbot.stop(BBStopMode.Brake)
        }
    } else {
        bitbot.select_model(BBModel.XL)
        if (Input_Controller == 0) {
            bitbot.go(BBDirection.Forward, 60)
        } else {
        	
        }
        if (Input_Controller == 1) {
            bitbot.stop(BBStopMode.Brake)
        } else {
        	
        }
        if (Input_Controller == 2) {
            bitbot.rotate(BBRobotDirection.Right, 60)
        } else {
        	
        }
        if (Input_Controller == 3) {
            bitbot.rotate(BBRobotDirection.Left, 60)
        } else {
        	
        }
        if (Input_Controller == 4) {
            bitbot.go(BBDirection.Reverse, 60)
        } else {
        	
        }
    }
})
basic.forever(function () {
    Distance_to_obstuction = bitbot.sonar(BBPingUnit.Centimeters)
})
basic.forever(function () {
    bitbot.setPixelColor(0, 0xB09EFF)
    bitbot.setPixelColor(1, 0xFF00FF)
    bitbot.setPixelColor(2, 0xFFFF00)
    bitbot.setPixelColor(3, 0x00FF80)
    bitbot.setPixelColor(4, 0xFF8000)
    bitbot.setPixelColor(5, 0xFF0000)
    bitbot.setPixelColor(6, 0x00FFFF)
    bitbot.setPixelColor(7, 0x80FF00)
    bitbot.setPixelColor(8, 0xFF0080)
    bitbot.setPixelColor(9, 0x8000FF)
    bitbot.setPixelColor(10, 0x18E600)
    bitbot.setPixelColor(11, 0xD82600)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(2000)
})
