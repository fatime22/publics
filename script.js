const random = [
    {
        "error": false,
        "category": "Dark",
        "type": "single",
        "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 96,
        "safe": false,
        "lang": "en"
    },
    {
        "error": false,
        "category": "Dark",
        "type": "single",
        "joke": "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 178,
        "safe": false,
        "lang": "en"
    },
    {
        "error": false,
        "category": "Pun",
        "type": "single",
        "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 204,
        "safe": false,
        "lang": "en"
    },
    {
        "error": false,
        "category": "Programming",
        "type": "single",
        "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 27,
        "safe": false,
        "lang": "en"
    }
]

const randomTwo = [
    {
        "error": false,
        "category": "Misc",
        "type": "twopart",
        "setup": "I won the lottery today!",
        "delivery": "Well, I only got the first two numbers, but my lawyers are working on having them stop the count.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": true,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 258,
        "safe": false,
        "lang": "en"
    },
    {
        "error": false,
        "category": "Programming",
        "type": "twopart",
        "setup": "How did the programmer die in the shower?",
        "delivery": "He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": false,
        "id": 266,
        "lang": "en"
    },
    {
        "error": false,
        "category": "Programming",
        "type": "twopart",
        "setup": "How can you tell an extroverted programmer?",
        "delivery": "He looks at YOUR shoes when he's talking.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 17,
        "safe": true,
        "lang": "en"
    }
]
let singleRadio = document.querySelector("#sngl")
let twopartRadio = document.querySelector("#twprt")

singleRadio.addEventListener('change', function () {
    if (singleRadio.checked) {
        twopartRadio.checked = false;
    }
});

twopartRadio.addEventListener('change', function () {
    if (twopartRadio.checked) {
        singleRadio.checked = false;
    }
});


document.querySelector('button').addEventListener('click', function () {
    if (singleRadio.checked) {
        getWithAxios('single');
    } else if (twopartRadio.checked) {
        getTwoWithAxios().then(data => {
            let h1Element = document.querySelector('h1');
            let randomSetup = data.setup;
            let randomDelivery = data.delivery;
            h1Element.textContent = '${randomSetup}\n${randomDelivery}';
        });
    }
});

const getWithAxios = async () => {
    let response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
    let h1Element = document.querySelector('h1');
    let randomJoke = response.data.joke;
    h1Element.textContent = randomJoke;
}
const getTwoWithAxios = async () => {
    let respons = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart')
    return respons.data
}
function myFunc() {
    let randomIndex = Math.floor(Math.random() * random.length);
    return random[randomIndex];
}
function FuncTwo() {
    let randomIndexTwo = Math.floor(Math.random() * randomTwo.length);
    return randomTwo[randomIndexTwo];
}

document.querySelector('button').addEventListener('click', getWithAxios);