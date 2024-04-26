const wai = document.querySelector(".whoAmI h1")
const waiText = "whoami"
const name = document.querySelector(".name")
const nameText = "Loddo Quentin"

function typingEffect(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(() => {
            typingEffect(element, text, i)
        }, 300)
    }
}

typingEffect(wai, waiText);
typingEffect(name, nameText);