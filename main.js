var looping = true

var clickBigCookie = (dom) => {
    dom("#bigCookie")[0].click()
}

var clickGoldenCookie = (dom) => {
    var goldenCookie = dom(".shimmer")[0]
    goldenCookie && goldenCookie.click()
}

var buyUpgrades = (dom) => {
    var upgrade = dom(".storeSection .upgrade.enabled")[0]
    upgrade && upgrade.click()
}

var buyProducts = (dom) => {
    var products = dom(".product.unlocked.enabled")
    var product = products[products.length-1]
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
    dom = dom || $$
    clickBigCookie(dom)
    clickGoldenCookie(dom)
    buyUpgrades(dom)
    buyProducts(dom)
    goAgain(dom)
}

loop()
