var looping = true

var clickBigCookie = (dom) => {
    dom("#bigCookie").click()
}

var clickGoldenCookie = (dom) => {
    var goldenCookie = dom(".shimmer")
    goldenCookie && goldenCookie.click()
}

var buyUpgrades = (dom) => {
    var upgrade = dom(".storeSection .upgrade.enabled")
    upgrade && upgrade.click()
}

var buyProducts = (dom) => {
    var product = dom(".product.unlocked.enabled")
    product && product.click()
}

var goAgain = (dom) => {
    if (looping) {
        return setTimeout(() => loop(dom), 4)
    }
    else {
        alert("bye")
    }
}

var loop = (dom) => {
    dom = dom || $
    clickBigCookie(dom)
    clickGoldenCookie(dom)
    buyUpgrades(dom)
    buyProducts(dom)
    goAgain(dom)
}