function bin2Dec() {
    var value = document.getElementById('binary').value
    if (value === '') {
        document.getElementById('decimal').value = 'Invalid Value!'
        document.getElementById('decimal').style.cssText =
            'color: #3400f0; font-weight: bold; text-transform: uppercase; readonly'
        return true
    }
    value.split('').filter(function (element) {
        if (element !== '1' && element !== '0') {
            document.getElementById('decimal').value = 'Invalid Value!'
            document.getElementById('decimal').style.cssText =
                'color: #3400f0; font-weight: bold; text-transform: uppercase;'
        } else {
            const decimal = parseInt(value, 2)
            document.getElementById('decimal').style.cssText =
                'color: ""; font-weight: bold;'
            document.getElementById('decimal').value = decimal.toString()
        }
    })
}
