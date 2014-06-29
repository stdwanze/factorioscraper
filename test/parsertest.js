var assert = require("assert");
var scraper = require("./../scraper.js").Scraper;

var page = ""+
"<!DOCTYPE html><html><head><title>Factorio</title><link href='https://assets-factorio-com.s3.amazonaws.com/img/favicon.ico' rel='icon' type='image/x-icon'><link href='https://assets-factorio-com.s3.amazonaws.com/img/favicon.ico' rel='shortcut icon' type='image/x-icon'><link href='https://assets-factorio-com.s3.amazonaws.com/css/factorio.min.css' rel='stylesheet' type='text/css'></head><body style='background: url(https://assets-factorio-com.s3.amazonaws.com/img/stressed_linen_texture.png) repeat 0 0;'><div class='container header' style='margin-top: 30px;'><div class='row' style='margin-bottom: 30px;'><a href='/'><div class='span4'><img src='https://assets-factorio-com.s3.amazonaws.com/img/factorio-logo.png' style='margin-top: 10px;'></div></a><div class='span7 offset1' style='margin-top: 10px;'><div class='pull-right' style='margin-top: 10px;'><div class='pull-right'><a href='/signup'>sign up</a></div><div class='pull-right' style='margin-right: 10px;'><a href='/login'>log in</a></div></div><div class='navbar'><ul class='nav'><li class='active'><a href='/'>Home</a></li><li class='custom-dropdown'><a class='custom-dropdown-toggle' data-toggle='dropdown' href='/game-overview' role='button'>Game</a><ul class='custom-dropdown-menu' role='menu'><li role='presentation'><a href='/screenshots'>Screenshots</a></li><li role='presentation'><a href='/artwork'>Artwork</a></li><li role='presentation'><a href='/videos'>Videos</a></li><li role='presentation'><a href='/content'>Content</a></li></ul></li><li class='custom-dropdown'><a class='custom-dropdown-toggle' data-toggle='dropdown' href='/support-overview' role='button'>Support</a><ul class='custom-dropdown-menu' role='menu'><li role='presentation'><a href='/help'>Help</a></li><li role='presentation'><a href='/faq'>FAQ</a></li><li role='presentation'><a href='/press-and-youtube'>For Press</a></li><li role='presentation'><a href='/community'>Community</a></li><li role='presentation'><a href='/team'>Team</a></li><li role='presentation'><a href='/credits'>Credits</a></li></ul></li><li><a href='http://factorioforums.com/forum'>Forums</a></li><li><a href='/contact'>Contact</a></li></ul></div></div></div></div><div class='container'><noscript><div class='alert alert-block alert-error' style='font-weight: bold; '>Javascript is required for proper functioning of these web pages.</div></noscript><div class='row'><div class='span12'><div id='fb-root'></div><div class='row'><div class='span8'><iframe allowfullscreen='1' frameborder='0' height='316.38418079096044' src='https://youtube.com/embed/9yDZM0diiYc' width='560'></iframe></div><div class='span3'><div style='width: 180px; margin: auto; margin-top: 30px; margin-bottom: 15px;'><i class='raphael-icon' id='icon-windows'></i><i class='raphael-icon' id='icon-apple'></i><i class='raphael-icon' id='icon-linux'></i></div><a class='btn btn-custom btn-large btn-block' href='demo'>Try demo</a><a class='btn btn-custom btn-large btn-block' href='/preorder' style='margin-top: 50px;'>Buy Alpha</a><div style='margin-left: 15px; margin-top: 50px; margin-bottom: 15px;'><div style='margin-top: 1px; float: left;'><a class='twitter-share-button' data-dnt='true' data-q='factorio' data-text='#Factorio - a factory building PC game,' data-url='http://www.factorio.com' data-via='factoriogame' href='https://twitter.com/share' style='display: inline-block;'></a></div><div style='float: left;'><div class='fb-like' data-href='http://facebook.com/factorio' data-layout='button_count' data-send='false' data-show-faces='false' data-width='80'></div></div></div></div></div><div class='row'><div class='span7'><h3>About the game</h3><p style='margin-top: 15px;'>Factorio is a game in which you build and maintain factories.</p><p>You will be mining resources, researching technologies, building infrastructure, automating production and fighting enemies. Use your imagination to design your factory, combine simple elements into ingenious structures, apply management skills to keep it working and finally protect it from the creatures who don't really like you.</p><p style='margin-top: 20px;'>Factorio is currently in late alpha. We have gone far since our <a href='http://indiegogo.com/factorio'>Indiegogo campaign</a> in February 2013. So far 34886 people have <a href='/preorder'>bought</a> the game. </p><p>New to the game? See some <a href='/videos'>videos</a>, read about the <a href='/content'>features</a> or check out our <a href='/faq'>FAQ</a>.</p><div style='margin-top: 20px;'><h3>Get in touch<p><div class='span1' data-placement='top' delay='100' rel='tooltip' style='margin: 0px;' title='Visit our Facebook page.'><a href='http://www.facebook.com/Factorio'><i class='raphael-icon' id='icon-facebook'></i></a></div><div class='span1' data-placement='top' delay='100' rel='tooltip' style='margin: 0px;' title='Follow our twitter feed.'><a href='http://www.twitter.com/factoriogame'><i class='raphael-icon' id='icon-twitterbird'></i></a></div><div class='span1' data-placement='top' delay='100' rel='tooltip' style='margin: 0px;' title='Discuss the game on the forum.'><a href='http://factorioforums.com/forum'><i class='raphael-icon' id='icon-people'></i></a></div><div class='span1' data-placement='top' delay='100' rel='tooltip' style='margin: 0px;' title='Send us an email.'><a href='/contact'><i class='raphael-icon' id='icon-mail'></i></a></div><div class='span1' data-placement='top' delay='100' rel='tooltip' style='margin: 0px;' title='Subscribe to our blog.'><a href='/blog/rss'><i class='raphael-icon' id='icon-feed'></i></a></div></p></h3></div></div><div class='span4 offset1'><h3>Recent updates</h3><ul class='unstyled'><li><p><a href='/blog/post/fff-40' style='text-decoration: none;'><div style='font-size: 18px;'>Friday Facts #40 - Working remotely</div></a><div style='font-size: 12px;'>Posted by Tomas on 2014-06-27</div></p></li><li><p><a href='/blog/post/fff-39' style='text-decoration: none;'><div style='font-size: 18px;'>Friday Facts #39 - Digging too deep</div></a><div style='font-size: 12px;'>Posted by kovarex on 2014-06-20</div></p></li><li><p><a href='/blog/post/fff-38' style='text-decoration: none;'><div style='font-size: 18px;'>Friday Facts #38 - Bug fixing time</div></a><div style='font-size: 12px;'>Posted by Tomas on 2014-06-13</div></p></li><li><p><a href='/blog/post/fff-37' style='text-decoration: none;'><div style='font-size: 18px;'>Friday Facts #37 - The 0.10 is here</div></a><div style='font-size: 12px;'>Posted by kovarex on 2014-06-06</div></p></li><li><p><a href='/blog/post/fff-36' style='text-decoration: none;'><div style='font-size: 18px;'>Friday Facts #36 - Better late than sorry</div></a><div style='font-size: 12px;'>Posted by Tomas on 2014-05-31</div></p></li><li class='pull-right'><a href='/blog'>read more</a></li></ul></div></div></div></div><div class='footer'><div class='row'><div class='span7 pull-right'><div class='pull-right quote-text'>... I have been unable to stop playing. 30+ hours so far</div><div style='clear: both;'></div><div class='pull-right quote-author'>bill, Factorio Forums</div></div><div><a href='/terms-of-service' style='font-size: 11px;'>Terms of Service</a><span style='font-size: 11px;'> |  </span><a href='/privacy-policy' style='font-size: 11px;'>Privacy</a><span style='font-size: 11px;'> |  </span><a href='/imprint' style='font-size: 11px;'>Imprint</a> | <a href='/faq' style='font-size: 11px;'>FAQ</a> | <a href='/blog/rss' style='font-size: 11px;'>RSS</a></div><div style='font-size: 11px;'>Copyright &copy; 2013. All rights reserved.</div></div></div></div><script src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js' type='text/javascript'></script><script src='https://assets-factorio-com.s3.amazonaws.com/js/factorio.min.js' type='text/javascript'></script><script type='text/javascript'>"+
"!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';"+
"                    fjs.parentNode.insertBefore(js,fjs);"+
"                  }}(document, 'script', 'twitter-wjs');</script><script type='text/javascript'>"+
"                  (function(d, s, id)"+
"                   {"+
"                     var js, fjs = d.getElementsByTagName(s)[0];"+
"                     if (d.getElementById(id)) return;"+
"                     js = d.createElement(s); js.id = id;"+
"                     js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';"+
"                     fjs.parentNode.insertBefore(js, fjs);"+
"                   }(document, 'script', 'facebook-jssdk'));</script><script type='text/javascript'>$(function(){"+
"      $('[rel='tooltip']').tooltip();});</script><script type='text/javascript'>var _gaq = _gaq || [];"+
"        _gaq.push(['_setAccount', 'UA-37295070-1']);"+
"        _gaq.push(['_trackPageview']);"+
"        (function()"+
"        {"+
"         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"+
"         ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"+
"         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"+
"        })();</script></body></html>";



describe('parser', function() {
	it('should find the sales figure', function() {
		console.log(scraper);
		var parser = new scraper.Parser();
		var figure = parser.parse(page);
		assert.equal(figure,"34886","Missmatch!");		
	});
});

describe('requester', function() {
	it('should return a page', function(done) {
		console.log(scraper);
		var req = new scraper.RequestPage("http://www.factorio.com");
		req.get().then(function (page){
			console.log(page);
			assert.ok(page,"No page!");
			done();	
		}, function (e){
			console.log(e);
			
			assert.ok(null,"No page!");	
			done();
		});
			
	});
});
describe('requester + parser', function() {
	it('should return a page and parse', function(done) {
		console.log(scraper);
		var req = new scraper.RequestPage("http://www.factorio.com");
		var parser = new scraper.Parser();
		req.get().then(function (page){
			console.log(page);
			assert.ok(page,"No page!");
			var number = parser.parse(page);
			assert.notEqual(number,"","no number");
			console.log(number);
			done();	
		}, function (e){
			console.log(e);
			
			assert.ok(null,"No page!");	
			done();
		});
			
	});
});