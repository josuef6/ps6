const button = document.getElementById('background-button');
const defaultColor = document.getElementById('default-button');
const dark_light_Mode = ['black', 'white', '#F4F1E3', '#42493A', '#0073BB']
const ytAddButton = document.getElementById('yt-add-button');
const twitchAddButton = document.getElementById('twitch-add-button');

function changeBackground(){
    if(document.body.style.backgroundColor === dark_light_Mode[0]){
        document.body.style.backgroundColor = dark_light_Mode[2];
        document.body.style.color = dark_light_Mode[3];
    }
    else{
        document.body.style.backgroundColor = dark_light_Mode[0];
        document.body.style.color = dark_light_Mode[1];
    }
}
function changeToDefault(){
    document.body.style.backgroundColor = dark_light_Mode[1];
    document.body.style.color = dark_light_Mode[4];
}
button.addEventListener('click', changeBackground);
defaultColor.addEventListener('mouseover', changeToDefault);

ytAddButton.addEventListener('click', () => {
    const input = document.getElementById('yt-text');
    const youtubeList = document.getElementById('youtube-list')
    const dateAdded = moment(new Date().getTime()).format("MMM Do YY");
    let newChannel = document.createElement('li');

    let channelName = document.createTextNode(input.value);
    newChannel.append(channelName);
    newChannel.append(' - Date Recommendation Added: ' + dateAdded);
    youtubeList.append(newChannel);
    input.value = "";

});

twitchAddButton.addEventListener('click', () => {
    const input = document.getElementById('twitch-text');
    const twitchList = document.getElementById('twitch-list')
    const dateAdded = moment(new Date().getTime()).format("MMM Do YY");
    let newChannel = document.createElement('li');

    let channelName = document.createTextNode(input.value);
    newChannel.append(channelName);
    newChannel.append(' - Date Recommendation Added: ' + dateAdded);
    twitchList.append(newChannel);
    input.value = "";

});