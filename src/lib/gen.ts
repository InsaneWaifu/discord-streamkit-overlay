let prefix = `
div[class*="Voice_voiceContainer"] {
    width: 100vw;
    height: 100vh;
}



li {
    height: 100vh !important;
    margin-bottom: 0 !important;
}

#root {
    height: 100vh;
    width: 100vw;
}

ul {
    display: flex;
    width:100%;
    height:100%;
    justify-content: end;
    align-items: end;
    margin: 0 !important;
    padding: 0 !important;
}

/* main css*/
img + div {
    display:none;
}

img {
    display: none;
    border: 0px !important;
    border-radius: 0% !important;
    height: 100vh !important;
    width: auto !important;
    margin-right: 0px !important;
    
}

`

let speakingTemplate = `img[class*="avatarSpeaking"][src*="{USERID}"] {
    content: url("{IMAGEURL}");
}
`

let notSpeakingTemplate = `img[src*="{USERID}"] {
    content: url("{IMAGEURL}");
    display: block;
}
`



// users is array of arrays [userid, notspeakingurl, speakingurl]
export function generateCSS(users: Array<Array<string>>) {
    var css = prefix;
    for (let i = 0; i<users.length;i++) {
        let user = users[i];
        console.log(user);
        css = css + notSpeakingTemplate.replace("{USERID}", user[0]).replace("{IMAGEURL}", user[1]);
        css = css + speakingTemplate.replace("{USERID}", user[0]).replace("{IMAGEURL}", user[2]);
    }
    
    

    return css
}


