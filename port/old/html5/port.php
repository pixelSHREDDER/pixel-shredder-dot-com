<?php if (substr_count($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip')) ob_start("ob_gzhandler"); else ob_start(); ?>
<?php $page = basename($_SERVER['SCRIPT_NAME']); ?>
<!DOCTYPE html> 
<html lang="en" class="no-js">
<head> 
	<meta charset="UTF-8"> 
	<title>Tony Mitton | New Media Designer</title> 
	<meta name = "viewport" content = "width = device-width, initial-scale = 1"> 
	<link rel = "stylesheet" href = "css/jquery.mobile-1.0.1.min.css" />
	<script src = "http://code.jquery.com/jquery-1.7.1.min.js"></script>
	<script src = "http://code.jquery.com/mobile/1.1.0-rc.1/jquery.mobile-1.1.0-rc.1.min.js">
		/*
		 * IMPORTANT!!!
		 * REMEMBER TO ADD  rel="external"  to your anchor tags. 
		 * If you don't this will mess with how jQuery Mobile works
		 */
		$(window).load(function()
  		{	
			
		});
		
		function init()
		{
			alert("meh");
			document.body.style.backgroundAttachment = "fixed";
			var myCubes = new Array();   
			for (var j = 0; j <= 3; j++)
			{
				var startCube = document.getElementById("cube" + j);
				var cubeStartY = startCube.y;
				myCubes[j] = cubeStart.y; 
			}
			// IMG1.src = "on.jpg"; // preload on.jpg
			// IMG2.src = "off.jpg"; // preload off.jpg

			// var oIMG = document.getElementById("oIMG"); // grab a reference to img in doc with id of oIMG

			// oIMG.src = IMG1.src; // initially set the source of oIMG to IMG1's source
			// oIMG.toggled = 1; // initially give oIMG a toggled state of 1 (meaning on)

			setInterval("checkImages()", 500); // start time out for swapping image
		};
		
		function checkImages()
		{
			for (var i = 0; i <= 3; i++)
			{
				var cube = document.getElementById("cube" + i); // grab a reference to img in doc with id of oIMG
				if (cube.y < 0)
				{
					cube.width = 1;
					cube.height = 1;
				}
				else if (cube.y > screen.height)
				{
					cube.width = 1;
					cube.height = 1;
				}
				else if
				{
					cube.height += (myCubes[i] - cube.y);
				}
			};
		};
		
		$(window).scroll(function()
		{ 
			alert("meh");
			var scrollOffset = $(this).scrollTop();
			// move element to the offcet
			for (var k = 0; k <= 3; k++)
			{
				var moveCube = document.getElementById("cube" + j);
				moveCube.y += scrollOffset;
			}
		});
	</script>
        
    <script type="text/javascript">
		/*function(window, $, PhotoSwipe)
		{	
			$(document).ready(function()
			{
				$('div.gallery-page')
					.live('pageshow', function(e)
					{	
						var currentPage = $(e.target), options = {}, photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options, currentPage.attr('id'));
						return true;					
					})
					.live('pagehide', function(e)
					{	
						var currentPage = $(e.target), photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));
						if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null)
						{
							PhotoSwipe.detatch(photoSwipeInstance);
						}
						return true;					
					});
			});
		}(window, window.jQuery, window.Code.PhotoSwipe);*/
	</script>
</head> 

<body onload = "init()">
    <!-- can link to multiple pages in main html file, but all content has to be loaded at start -->
    <div data-role = "page" id = "page1">
        <div id = "background">
            <div data-role = "header" data-position = "fixed">
                <a href = "#" data-role = "button">Portfolio</a>
                <h1> <img src = "images/logo.png" /> </h1>            
                <a href = "#" data-role = "button">Resume</a>            
            </div><!-- /header -->
            <div data-role = "content">	
            	<div data-role = "content" id = "cube1">
                	<img src = "images/CR1-2.png" alt = "Cube 1" />
                </div>
                <ul style = "list-style: none; margin-left: -40px;">
                    <li>
                        <p>
                        <div data-role = "content" id = "gallery">
                            <ul class = "gallery">
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/001.jpg" alt = "Image 001" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/002.jpg" alt = "Image 002" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/003.jpg" alt = "Image 003" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/004.jpg" alt = "Image 004" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/005.jpg" alt = "Image 005" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/006.jpg" alt = "Image 006" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/007.jpg" alt = "Image 007" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/008.jpg" alt = "Image 008" /> </a> </li>
                                <li> <a href = "images/thumbholder.jpg" rel = "external"> <img src = "images/thumb/009.jpg" alt = "Image 009" /> </a> </li>
                            </ul>
                        </div><!-- /gallery -->
                        </p>
                        <p style = "margin-top: -25px; margin-left: -5px;"> <img src = "images/banner.png" /> </p>
                        <p style = "color: white; margin-top: -90px; margin-left: 20px; padding-bottom: 50px;">project 1</p>
                    </li>
                    <li>
                        <p> <img src = "images/thumbholder.jpg"> </p>
                        <p style = "margin-top: -25px; margin-left: -5px;"> <img src = "images/banner.png" /> </p>
                    </li>
                    <li>
                        <p> <img src = "images/thumbholder.jpg"> </p>
                        <p style = "margin-top: -25px; margin-left: -5px;"> <img src = "images/banner.png" /> </p>
                    </li>
                    <li>
                        <p> <img src = "images/thumbholder.jpg"> </p>
                        <p style = "margin-top: -25px; margin-left: -5px;"> <img src = "images/banner.png" /> </p>
                    </li>
                    <li>
                        <p> <img src = "images/thumbholder.jpg"> </p>
                        <p style = "margin-top: -25px; margin-left: -5px;"> <img src = "images/banner.png" /> </p>
                    </li>
                </ul>
                <div data-role = "controlgroup" data-type = "horizontal">
                    <!-- data-inline="false" will make the button false to size of the content in the button -->
                </div>        
                <div data-role = "controlgroup" data-type = "vertical">
                    <!-- data-inline="false" will make the button false to size of the content in the button -->
                </div>    
            </div><!-- /content -->
            <div data-role = "footer"  data-position = "fixed">    
                <div data-role = "navbar">
                    <ul>
                        <li class = "button"> <a href = "#" data-role = "button" data-inline = "true"> <img src = "images/facebook.png" /> </a> </li>
                        <li> <a href = "#" data-role = "button" data-inline = "true"> <img src = "images/twitter.png" /> </a> </li>
                        <li> <a href = "#" data-role = "button" data-inline = "true"> <img src = "images/linkedin.png" /> </a> </li>
                        <li> <a href = "#" data-role = "button" data-inline = "true"> <img src = "images/contact.png" /> </a> </li>
                    </ul>
                </div><!-- /navbar -->
            </div><!-- /footer -->
        </div><!-- /background -->
    </div><!-- /page1 -->
    <div data-role = "page" id = "page2">
    	<a href = "#page1" data-role = "button">back to one</a>
    </div><!-- /page2 -->
</body>

</html>
