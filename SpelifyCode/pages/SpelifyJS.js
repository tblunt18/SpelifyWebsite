/**
 * Created by Keria on 4/29/17.
 */
// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
    var jQuery;
    // Check if require is a defined function.
    if (typeof(require) === 'function') {
        jQuery = $ = require('jquery');
        // Else use the dollar sign alias.
    } else {
        jQuery = $;
    }
}
;

//list of jazz songs and artists
var jazz_songs = [
    {
        title: 'Swing with a Black Dog',
        artist: 'Marrach'

    }, {
        title: 'Come a Dawn',
        artist: 'Marrach'

    },
    {
        title: 'Stardust',
        artist: 'US Army Blues'

    },
    {
        title: 'Walk that Dog',
        artist: 'US Army Blues'

    },
    {
        title: 'Good Thing',
        artist: 'Minage Squad'

    },
    {
        title: 'Real Swing Shet',
        artist: 'Minage Squad'

    },
    {
        title: 'Welcome Wilderness',
        author: 'Proviant Audio'

    },
    {
        title: 'You Gave Me No Choice',
        artist: 'Proviant Audio'

    },
    {
        title: 'Just Like That',
        artist: 'Proviant Audio'

    },
    {
        title: 'Little Lilly Swing',
        artist: 'Tri Tachyon'

    }

];

//list of gospel songs and artists



//list of pop songs and artists


//list of hip hop songs and artists


//EVENT LISTENER:  addEventListener to create an instance when an Artist
//image is clicked
var onClick = function() {
    alert("MESSAGE");
    //loop through the list of songs in specific genre
    for (var i = 0; i < jazz_songs.length; i++) {
        //if (jazz_songs[i].artist === document.getElementById('Artist_Name'.value))
        var para = document.createElement("P");                       // Create a <p> element
        var t = document.createTextNode(jazz_songs[i].title + " " + "by" + " " + jazz_songs[i].artist);      // Create a text node
        para.appendChild(t);                                          // Append the text to <p>
        document.getElementById("paraDiv").appendChild(para);
    }
};

var picture = document.getElementsByClassName('play_music');
picture.addEventListener('click', onClick);

var image = document.getElementsByClassName('play_music');

//FIX: Loop through list of songs, display the song title and artist if the artist in list
//matches the artist picture that was clicked
image.addEventListener('click', function(e) {
    alert("MESSAGE");
    //loop through the list of songs in specific genre
    for (var i = 0; i < jazz_songs.length; i++) {
        if (jazz_songs[i].artist === e.value){
            var para = document.createElement("P");                       // Create a <p> element
            var t = document.createTextNode(jazz_songs[i].title + " " + "by" + " " + jazz_songs[i].artist);      // Create a text node
            para.appendChild(t);                                          // Append the text to <p>
            document.getElementById("paraDiv").appendChild(para);
        }

    }
});




init();
function init(){
    var current = 0;
    var audio = $('#audio');
    var playlist = $('#playlist');
    var tracks = playlist.find('li a');
    var len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
    player.src = link.attr('href');
    par = link.parent();
    par.addClass('active').siblings().removeClass('active');
    player.load();
    player.play();
}

