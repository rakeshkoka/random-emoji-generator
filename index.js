const btnEl = document.getElementById('emoji-face');
const pEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){

    const request = new Request('https://emoji-api.com/emojis?access_key=886eb3b02826b7ff6eb570d63877799aa2d25854');

    const response = await fetch(request);

    var emojis = await response.json();

    for( var i = 100; i <= 1500; i++ ){
        emoji.push({
            emojiFace: emojis[i].character,
            emojiName: emojis[i].unicodeName
        });
    }
}
getEmoji();

btnEl.addEventListener( "click", ()=>{
    var random = Math.floor( Math.random() * emoji.length );

    btnEl.innerText = emoji[random].emojiFace;
    pEl.innerText = emoji[random].emojiName.substring(5);

});



