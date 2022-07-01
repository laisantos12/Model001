function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = 'Now it is ' + hour + 'H'
    if (hour >= 0 && hour < 12) {
        img.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'evenings.jpg'
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'nights.jpg'
        document.body.style.background = '#515154'
    }
}