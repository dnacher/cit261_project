function fix_layout(){
    var wraph = document.getElementById('wrapper').offsetHeight;
    if(wraph<screen.height){ //if content is less than screenheight
        var headh   = document.getElementById('header').offsetHeight;
        var conth   = document.getElementById('content').offsetHeight;
        var footh   = document.getElementById('footer').offsetHeight;
        var foottop = screen.height - (headh + conth + footh);
        $("#footer").css({top:foottop+'px'});
    
    }

}

function saveAnswers(){
	var song = document.getElementById('txtSong').value;
	var artist = document.getElementById('txtArtist').value;
	var album = document.getElementById('txtAlbum').value;
	var songInfo = {song: song, artist: artist, album: album};
	var songJson = JSON.stringify(songInfo);
	
	window['localStorage'].setItem('songJson', songJson);
	document.getElementById('response').innerHTML ="answers Saved!";
}
	
function showMyAnswers (){
	if (window['localStorage'].getItem('songJson')){
		var song = window['localStorage'].getItem('songJson');
		var songJson = JSON.parse(song);
		document.getElementById('response').innerHTML = 'This is the song you last practice: <br>' +
														'Song  : ' + songJson.song + '<br>' +
														'Artist: ' + songJson.artist + '<br>' +      
														'Album : ' + songJson.album + '<br>' ;
	} else {
		document.getElementById('response').innerHTML = "You have not answer questions yet.";
	}
}

function storeArray(){
	myArray = 6;
	window['localStorage'].setItem('array', myArray);
	console.log(window['localStorage'].getItem('array'));
} 