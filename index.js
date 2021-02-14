const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const largeWowContainer = document.querySelector("#largewowcontainer")
const rainbowWowContainer = document.querySelector("#rainbowwowcontainer")
const dogePrimeContainer = document.querySelector("#dogeprimecontainer")
const secretWowContainer = document.querySelector("#secretwowcontainer")

const largewowEl = document.querySelector("#largeWows")
const lengthEl = document.querySelector("#length")
const rainbowsEl = document.querySelector("#rainbow")
const dogePrimeEl = document.querySelector("#dogeprime")
const secretWowEl = document.querySelector("#secretwow")

let wows = 0
let largewows = 0
let rainbowwows = 0
let secretwows = 0
let minidoges = 0
const primeWows = []
let dogePrime = false

document.querySelector(".print").addEventListener("click", () => {

  // Printing with 50 secret wows gives head
  if(secretwows === 50) {
      document.querySelector('.head').style.display = 'none'
      document.querySelector('.hatted').style.display = 'block'
    }
  window.print()
})

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        injectNeck(entry)
      }
    })
  },
  { rootMargin: "0px 0px 200% 0px" }
)

document.addEventListener("click", onBodyClick)

window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".neck:last-child")
    injectNeck({ target: lastEl })
  }
}

function injectNeck(entry) {
  // Stops observing the old neck element
  observer.unobserve(entry.target)

  const clonedNeck = neck.cloneNode(true)
  wrapper.appendChild(clonedNeck)
  observer.observe(clonedNeck)

  injectWow()
}

function injectWow() {
  wows++
  wowEl.innerText = wows

  const newWow = document.createElement("div")
  newWow.className = "textwow"
  newWow.innerText = "WOW"
  newWow.style.left = 100 + Math.random() * (window.innerWidth - 300) + "px"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)

  if (wows < 5) {
    if (isPrime(wows)) {
      primeWows.push(newWow)
    }
  }

  if (wows === 10) {
    lengthEl.innerText = "wow wow"
  }

  if (wows === 50) {
    lengthEl.innerText = "wow wow wow"
  }

  if (wows === 100) {
    lengthEl.innerText = "much wow"
  }

  if (wows === 150) {
    lengthEl.innerText = "long much wow"
  }

  if (wows === 250) {
    lengthEl.innerText = "very long much wow"
  }

  if (wows === 500) {
    lengthEl.innerText = "wow very long much wow"
  }

  if (wows === 1000) {
    lengthEl.innerText = "much wow very long much wow!"
  }

  if (wows === 2000) {
    lengthEl.innerText = "much wow very long much wow!!"
  }

  if (wows === 3000) {
    lengthEl.innerText = "much wow very long much wow!!!"
  }

  if (wows === 5000) {
    lengthEl.innerText = "!!much wow very long much wow!!"
  }

  if (wows === 10000) {
    lengthEl.innerText = "many many wow amaze"
  }

  if (wows === 30000) {
    lengthEl.innerText = "amaze wow dont forget to print!"
  }

  if (wows === 50000) {
    lengthEl.innerText = "wowwowowowowowowowowowowwoow"
  }

  if (wows === 80000) {
    lengthEl.innerText = "wowwowowowowowowowowowowwooweeeeeeeeee"
  }

  if (wows > 200 && Math.random() > 0.993) {
    injectLargeWow()
  }
}

function injectLargeWow() {
  largewows++
  largewowEl.innerText = largewows

  largeWowContainer.classList.remove("hidden")

  const newWow = document.createElement("div")
  newWow.className = "largewow"
  newWow.innerText = "WOW"
  newWow.style.left = "50%"
  newWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(newWow)
}

function isPrime(n) {
  if (n < 2) return false
  var q = Math.floor(Math.sqrt(n))

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function onBodyClick(e) {
  if (e.target.className === "textwow" && largewows >= 15) {
    rainbowwows++
    e.target.classList.add("rainbow")
    rainbowwowcontainer.classList.remove("hidden")
    rainbowsEl.innerText = rainbowwows

    // Check if they have achieved dogePrime
    dogePrimeContainer.classList.remove("hidden")
    let isPrime = primeWows.every((wowEl) => {
      return wowEl.classList.contains("rainbow")
    })

    // Activate doge prime
    if (dogePrime === false && isPrime === true) {
      dogePrime = true
      dogePrimeEl.innerText = "ACTIVE"
      setupSecretWows()
    }
  }

  if (e.target.className === "secretwow") {
    e.target.classList.add("found")
    secretwows++
    secretWowEl.innerText = secretwows
  }
}

function setupSecretWows() {
  secretWowContainer.classList.remove("hidden")

  const allnecks = document.querySelectorAll(".neck")
  let allnecksAsArray = Array.apply(null, allnecks)
  allnecksAsArray.shift() // remove first item

  shuffleArray(allnecksAsArray)
  shuffleArray(allnecksAsArray)

  // Do this for first 100 shuffled neck pieces
  let total = Math.min(100, allnecksAsArray.length)

  for (let i = 0; i < total; i++) {
    let neckItem = allnecksAsArray[i]
    let pieces = neckItem.innerText.split("\n")
    const pieceIndex = Math.floor(Math.random() * (pieces.length - 1))
    const injectionIndex = 5 + Math.floor(Math.random() * 18)
    pieces[pieceIndex] =
      pieces[pieceIndex].slice(0, injectionIndex) +
      '<span class="secretwow">WOW</span>' +
      pieces[pieceIndex].slice(injectionIndex + 3)
    neckItem.innerHTML = pieces.join("\n")
  }
}

observer.observe(neck)
