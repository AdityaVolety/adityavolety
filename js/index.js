showYogeshASCII();

var inputReady = true;
var input = $('.landing-input');
var txt = "Hi";
var chatFlag = 0;

input.focus();
$('.container').on('click', function(e)
{
  input.focus();
});

input.on('keyup', function(e)
{
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.landing-form').on('submit', function(e)
{
  e.preventDefault();
  var val = $(this).children($('.landing-input')).val().toLowerCase();
  var color;
  
  if(chatFlag == 1)
  {
	txt = val;
	val = "chat";
  }
  	
  if(val.indexOf("color") >= 0)
  {
	  var temp = val.split(" ");
	  val = temp[0];
	  color = temp[1];
	  setCookie("color",color,28);
  }
  var href;	
	switch(val)
	{
		case "help":
			showHelp();
			break;
		case "blog":
			redirect_blog();
			break;
		case "resume":
			redirect_cv();
			break;
		case "photos":
			redirect_photography();
			break;
		case "cmd":
			startCmd();
			break;
		case "cls":
			clearscreen();
			break;
		case "facebook":
			redirect_facebook();
			break;
		case "twitter":
			redirect_twitter();
			break;
		case "linkedin":
			redirect_linkedin();
			break;
		case "instagram":
			redirect_instagram();
			break;
		case "whatsapp":
			redirect_whatsapp();
			break;
		case "github":
			redirect_github();
			break;
		case "email":
			redirect_email();
			break;
		case "exit":
			redirect_global();
			break;
		case "":
			newline();
			break;
		default:
			resetForm();
	}
});

function resetForm(state)
{
  var message = "Sorry that command is not recognized."
  var input = $('.landing-input');

  if (state){
    $('.asciicanvas').removeClass('asciicanvas');
    message = ""
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}

function showHelp()
{
	$('.terminal').append("<div class='prompt'>" +
								"<table>" +
									"<caption>Commands</caption>" +
									"<col width='130'>" +
									/* "<tr>" +
										"<td>chat</td>" +
										"<td>spawns a chatbot. type \"bye\" to stop chatting.</td>" +
									"</tr>" + */
			      						
									"<tr>" +
										"<td>exit</td>" +
										"<td>redirects to non-geeky website.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>blog</td>" +
										"<td>Redirects to my blog.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>photos</td>" +
										"<td>See my photography.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>resume</td>" +
										"<td>Redirects to my online resume.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>facebook</td>" +
										"<td>Redirects to my facebook timeline.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>twitter</td>" +
										"<td>Redirect to my twitter timeline.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>linkedin</td>" +
										"<td>Redirect to my linkedin account.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>instagram</td>" +
										"<td>Redirect to my instagram.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>Github</td>" +
										"<td>Redirect to my github site.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>whatsapp</td>" +
										"<td>Whatsapp me.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>cmd</td>" +
										"<td>Starts a new instance of the command prompt.</td>" +
									"</tr>" +
									"<tr>" +
										"<td>cls</td>" +
										"<td>Clears the screen.</td>" +
									"</tr>" +
								"</table>" +
							"</div>");	
	newline();
}


function redirect_cv()
{
	setTimeout(function(){
		location.href = "http://pgyogesh.com/online-cv/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}


function redirect_photography()
{
	setTimeout(function(){
		location.href = "http://pgyogesh.com/photography/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}



function redirect_blog()
{
	setTimeout(function(){
		location.href = "http://pgyogesh.com/blog/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_whatsapp()
{
	setTimeout(function(){
		location.href = "https://api.whatsapp.com/send?phone=917676777797&text=Hi%2CYogesh!!!";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}


function redirect_github()
{
	setTimeout(function(){
		location.href = "https://github.com/pgyogesh";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_facebook()
{
	setTimeout(function(){
		location.href = "https://facebook.com/yogeshjadhav96";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_twitter()
{
	setTimeout(function(){
		location.href = "https://twitter.com/pgyogesh_";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_instagram()
{
	setTimeout(function(){
		location.href = "https://www.instagram.com/yogesh_yj_/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_linkedin()
{
	setTimeout(function(){
		location.href = "https://www.linkedin.com/in/pgyogesh/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function redirect_global()
{
	setTimeout(function(){
		location.href = "http://pgyogesh.com/GUI/";
		}, 3000);
		
	$('.terminal').append("<p class='prompt'>Redirecting</p>");
		
	setRedirectingPattern("*");
	
}

function setRedirectingPattern(msg)
{
	setInterval(function(){
		
		$('.new-output').removeClass('new-output');
		input.val('');
		
		$('.terminal').append("<p class='prompt output new-output'>"+msg+"</p>");
		msg = msg + "*";
		
		$('.new-output').velocity(
			'scroll'
		), {duration: 100}
		
	},500);
	
}


function startCmd()
{
	var redirectWindow = window.open('http://pgyogesh.com/', '_blank');
    redirectWindow.location;
	
	newline();
}

function resetCmd()
{
	setCookie("color","",0);
	clearscreen();
}

function clearscreen()
{
	location.reload();
}

	function showYogeshASCII(){
		$('.terminal').append("<div class='asciicanvas'>"+
        							"<p class='prompt'> @@@@@@@    @@@@@@@@  @@@ @@@   @@@@@@    @@@@@@@@  @@@@@@@@   @@@@@@   @@@  @@@  </p>"+
								"<p class='prompt'> @@@@@@@@  @@@@@@@@@  @@@ @@@  @@@@@@@@  @@@@@@@@@  @@@@@@@@  @@@@@@@   @@@  @@@  </p>"+
								"<p class='prompt'> @@!  @@@  !@@        @@! !@@  @@!  @@@  !@@        @@!       !@@       @@!  @@@  </p>"+
								"<p class='prompt'> !@!  @!@  !@!        !@! @!!  !@!  @!@  !@!        !@!       !@!       !@!  @!@  </p>"+
								"<p class='prompt'> @!@@!@!   !@! @!@!@   !@!@!   @!@  !@!  !@! @!@!@  @!!!:!    !!@@!!    @!@!@!@!  </p>"+
								"<p class='prompt'> !!@!!!    !!! !!@!!    @!!!   !@!  !!!  !!! !!@!!  !!!!!:     !!@!!!   !!!@!!!!  </p>"+
								"<p class='prompt'> !!:       :!!   !!:    !!:    !!:  !!!  :!!   !!:  !!:            !:!  !!:  !!!  </p>"+
								"<p class='prompt'> :!:       :!:   !::    :!:    :!:  !:!  :!:   !::  :!:           !:!   :!:  !:!  </p>"+
								"<p class='prompt'>  ::        ::: ::::     ::    ::::: ::   ::: ::::   :: ::::  :::: ::   ::   :::  </p>"+
								"<p class='prompt'>  :         :: :: :      :      : :  :    :: :: :   : :: ::   :: : :     :   : :  </p></div>");

		
		var lines = $('.asciicanvas p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		setTimeout(function(){
			/* var gif;

			$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function(result){
				gif = result.data.image_url;
				$('.terminal').append('<img class="kitten-gif" src="' + gif + '"">');
				resetForm(true);
			}); */
			resetForm(true);
		}, (lines.length * 100) + 1000);
		
		
	}

	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 10;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

function newline()
{
	$('.new-output').removeClass('new-output');
	input.val('');
	$('.terminal').append('<p class="prompt output new-output"></p>');

	$('.new-output').velocity(
		'scroll'
	), {duration: 100}
}

function setCookie(cname, cvalue, exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
