 /**
  * Mobile burger menu button for toggling sidebar
  */
(function initMobileMenu () {
    var mobileBar = document.getElementById('mobile-bar')
    var sidebar = document.querySelector('.sidebar')
    var menuButton = mobileBar.querySelector('.menu-button')

    menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('open')
    })

    document.body.addEventListener('click', function (e) {
    if (e.target !== menuButton && !sidebar.contains(e.target)) {
        sidebar.classList.remove('open')
    }
    })
})();

(function () {
    var code = document.getElementById('qrcode')
    var isOpen = false

    document.getElementById('donate').addEventListener('click', function (e) {
    e.stopPropagation()
    if (isOpen) return
    isOpen = true
    code.style.display = 'block'
    var f = code.offsetHeight
    code.classList.remove('hidden')
})

document.body.addEventListener('click', function () {
    if (isOpen) {
    isOpen = false
    code.classList.add('hidden')
    setTimeout(function () {
        code.style.display = ''
    }, 250)
    }
})
})();

(function(){
//兼容坑爹iPhone蜜汁冒泡
document.getElementById('main').addEventListener('click', function (e) {
})
document.getElementById('mobile-bar').addEventListener('click', function (e) {
})
})()
