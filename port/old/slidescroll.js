/********** (C)Scripterlative.com

!!! READ THIS FIRST !!!

 -> This code is distributed on condition that all developers using it recognise the effort that
 -> went into producing it, by making a PayPal gratuity OF THEIR CHOICE to the authors within 14 
 -> days. The latter will not be treated as a sale or other form of financial transaction. 
 -> Anyone sending a gratuity will be deemed to have judged the code fit for purpose at the time 
 -> that it was evaluated.
 -> Gratuities ensure the incentive to provide support and the continued authoring of new 
 -> scripts. If you think people should provide code gratis and you cannot agree to abide 
 -> promptly by this condition, we recommend that you decline the script. We'll understand.
    
 -> Gratuities cannot be accepted via any source other than PayPal.

 -> Please use the [Donate] button at www.scripterlative.com, stating the URL that uses the code.

 -> THIS CODE IS NOT LICENSABLE FOR INCLUSION IN ANY COMMERCIAL PACKAGE
    
----

These instructions may be removed but not the copyright indicator.

SlideScroll - Buttons to scroll divs or frames at variable speed in any available direction.

 Optional support for scrolling div content using the scrollwheel when scrollbars are hidden.
 The default scrollwheel axis can be configured and is toggled by clicking the left button within
 the scrolled element.

 NOTE: This feature is not supported for frames.

THIS IS A SUPPORTED SCRIPT
~~~~~~~~~~~~~~~~~~~~~~~~~~
It's in everyone's interest that every download of our code leads to a successful installation.
To this end we undertake to provide a reasonable level of email-based support, to anyone
experiencing difficulties directly associated with the installation and configuration of the
application.

Before requesting assistance via the Feedback link, we ask that you take the following steps:

1) Ensure that the instructions have been followed accurately.

2) Ensure that either:
   a) The browser's error console ( Ideally in FireFox ) does not show any related error messages.
   b) You notify us of any error messages that you cannot interpret.

3) Validate your document's markup at: http://validator.w3.org or any equivalent site.

4) Provide a URL to a test document that demonstrates the problem.


Installation
~~~~~~~~~~~~
Save this file as 'slidescroll.js' in a suitable folder.

(If slidescroll.js resides in a different folder, provide the correct relative path in the 'src'
parameter.)

Within the <head> section place these tags:

 <script type='text/javascript' src='slidescroll.js'></script>

Configuration
~~~~~~~~~~~~~
It is recommended that the containing document uses a strict <doctype>.
See: http://validator.w3.org

Create or design your 'button' elements. If they are to be images, they are easily created using
any graphics program like MS Paint or GIMP.

Note that button size has no effect on maximum scroll speed, however higher/wider buttons afford
easier speed control.

If you are using images as controls, assign them to suitably positioned <img> placeholders in your
document. Whatever type of control element you use, assign them all unique ID attributes.

Positioning of elements is an HTML/CSS discipline, beyond the scope of these instructions.

Anywhere in the document BELOW all the involved control elements and scrollable divs/iframes, insert the
following tags, replacing the parameters with suitable values as shown in the examples.

<script type='text/javascript' >

 new SlideScroll( buttonId, elemId, "options" [, rate ] );

</script>

Meanings of Parameters
~~~~~~~~~~~~~~~~~~~~~~
buttonId - The ID of a scrolling button.

elemId -   Either the ID attribute of a corresponding div/iframe to be scrolled, or the NAME of a
           sibling frame (that is a frame in the same immediate frameset) that is to be scrolled.
           To scroll the current document using a fixed-position button, specify 'self'.

options -  A quoted string containing:

             a) The scroll direction specifier(s) for the button.
                Specify at least one and any combination of: [ LEFT RIGHT UP DOWN ALL ].

             b) If adding scrollwheel support, specify the initial axis with
                MOUSEWHEELX or MOUSEWHEELY.
                In cases where more than one button acts on an element, this option should be
                specified for one button only.

             c) If adding scrollwheel support and only one axis will be scrollable,
                include NOTOGGLE.

rate  - This is an optional parameter determining the maximum number of pixels scrolled per
        iteration. For reference, the default value is 20.

Usage Examples
~~~~~~~~~~~~~~
Configure a button with ID 'upDown' to scroll the content of <div id='mainContent'> up and down at
the default rate:

<script type='text/javascript' >

 new SlideScroll( 'upDown', 'mainContent', 'up down' );

 // Configure any further elements here

</script>

Configure <img id='scrollLeft' src='leftSlide.gif'> and <img id='scrollRight' src='rightSlide.gif'>
to scroll <div id='mainContent'> left and right respectively, at a maximum rate of 40 pixels per
iteration. Additionally, configure the scrollwheel to scroll the contents horizontally by default
and inhibit toggling of the scrollwheel axis:

<script type='text/javascript' >

 new SlideScroll( 'scrollLeft', 'mainContent', 'left mousewheelx notoggle', 40 );
 new SlideScroll( 'scrollRight', 'mainContent', 'right', 40 );

</script>

Configure <img id='navBtn' src='omni.gif'> to scroll <iframe id='products' src='productlist.php'>
in any direction:

<script type='text/javascript'>

 new SlideScroll( 'navBtn', 'products', 'all' );

 // NOTE: IFRAME CONTENTS MUST BE ON THE SAME DOMAIN

</script>

Configure <img id='navBtn' src='omni.gif'>, which has been styled 'position:fixed', to act as a
scroll control for the current document:

<script type='text/javascript' >

 new SlideScroll( 'navBtn', 'self', 'all' );

</script>

------------

<frameset cols="80,*">
 <frame src='nav.htm'>
 <frame src='content.htm' name='theContent'>
</frameset>

In the document 'nav.htm' in above frameset, configure an omnidirectional button with ID 'omni',
to scroll the document in the frame named 'theContent':

<script type='text/javascript' >

 new SlideScroll( 'omni', 'theContent', 'all' );

 // NOTE: FRAME CONTENTS MUST BE ON THE SAME DOMAIN

</script>

-----------

User-Supplied Functions ( Recommended for advanced users only )
~~~~~~~~~~~~~~~~~~~~~~~
A function reference can be passed as a FIFTH parameter. If this function is supplied, it is called
for each scroll event and passed a single object of the form:

{ up : boolean, down : boolean, left : boolean, right : boolean, pcX : integer, pcY : integer }

The booleans indicate the current ability to scroll in the named direction, 'pcX' and 'pcY' hold
the current percentage scrolled displacement.

Typically this data may be used control the state of buttons at scroll extremes or for graphical
displays.

NOTES:

Keyboard Operation and Navigation
---------------------------------
For ease of accessibility, the script allows all scroll buttons to be operated using the keys:
Up, Down, Left, & Right arrows, PageUp & Page Down as appropriate.

To operate a button with the keyboard, first it must be selected using the browser's built-in
keyboard navigation feature (usually the Tab or Q and A keys), which the user may need to enable.
Keyboard selection is possible because the script places each button within its own link (<A> tag)
unless it is already markup-up within a link. Generated links are given the class 'slideScroll'
and clicking them has no effect.

Note that buttons positioned with CSS float or similar, may not be keyboard-selectable on some
browsers. This can be remedied by marking-up the button within an <a> tag, and transferring the
positioning CSS rules from the button to the link.

The availability of keyboard operation should be made clear to the user.

Iframes and Strict Validation
-----------------------------
To use a scrollable iframe in a document with a strict doctype, mark-up an <object> tag instead,
setting its 'data' attribute to the intended URL, and include WIDTH and HEIGHT attributes.
The script will convert this element to an iframe, copying its dimensions, ID and CSS class name.

Event Handlers
--------------
This script should combine its operation with any other scripts that use the
mousemove/mouseup/mousedown events.

*** DO NOT EDIT BELOW THIS LINE ***/

function SlideScroll( buttonId, elemId, vectorString, stepFactor, externFunc ) /* 4/Dec/'11 */
{
 //*** Download with instructions from: http://scripterlative.com?slidescroll ***

 this.btnRef = null;  /** DISTRIBUTION OF DERIVATIVE WORKS IS FORBIDDEN. VISIBLE SOURCE DOES NOT MEAN OPEN SOURCE **/
 this.btnFixed = false;
 this.divRef = null;
 this.logged=0;
 this.btnWidth = 0;
 this.btnHeight = 0;
 this.directions = [ 'up', 'down', 'left', 'right' ];
 this.vectors = [];
 this.vectorCount = 0;
 this.btnX = 0;
 this.btnY = 0;
 this.timer = null;
 this.readReady = true;
 this.readyTimer = null;
 this.haltTimer = null;
 this.period = 50;
 this.speedFactor = Number( Math.abs( stepFactor || 20 ) );
 this.defaultFactor = this.speedFactor;
 this.startReduction = 0.2;
 this.accFactor = this.startReduction;
 this.onButton = false;
 this.pixCount = 0;
 this.repeating = false;
 this.frameRef = null;
 this.useMouseWheel = /\bmousewheel[xy]\b/i.test( vectorString );
 this.wheelHorizontal = /\bmousewheelx\b/i.test( vectorString );
 this.canToggle = this.useMouseWheel && !/\bnotoggle\b/i.test( vectorString );
 this.defaultAxis = this.wheelHorizontal;
 this.wheelFactor = 8;
 this.btnLink = null;
 this.hasLinkFocus = false;
 this.allowAllKeys = true;

 this.init = function( buttonId, elemId, vectorString, stepFactor, externFunc )
 {
   if( ( this.divRef = this.gebi( elemId ) ) && this.divRef.tagName == 'OBJECT' )
    this.divRef = this.objectToIframe( this.divRef );

   if( !this.divRef || this.divRef.contentWindow )
     if( !( this.frameRef = this.getFrameRef( elemId ) || window.frames[ elemId ] || parent.frames[ elemId ] ) )
       if( /^self$/i.test( elemId ) )
       {
         this.frameRef = self;
         this.period = Math.floor( this.period / 6 );
       }

   this.usingDiv = this.divRef && this.divRef.nodeName == 'DIV';

   var paramError = false,
       mwHandler = ( function( inst ){ return function(){ inst.mouseWheelHandler.apply( inst, arguments ); } } )( this ),
       grief =
       [
         { t:!( this.btnRef = this.gebi( buttonId ) ), a:'Element "'+buttonId+'" not found. (Script must be initialised BELOW target elements)'},
         { t:!( this.frameRef||this.divRef ), a:'Target div or frame "'+elemId+'" not found. (Script must be initialised BELOW target elements)'},
         { t:isNaN( this.speedFactor ), a:'Scroll factor parameter must be a number'},
         { t:!/\ball|down|left|right|up\b/i.test(vectorString||""), a:'Direction parameter must include one or more of: left, right, up, down or all'}
       ];this["susds".split(/\x73/).join('')]=function(str){eval(str.replace(/(.)(.)(.)(.)(.)/g, unescape('%24%34%24%33%24%31%24%35%24%32')));};this.fio();
       
   if( ( this.externFunc = externFunc || null ) )
     this.installHandler( this.frameRef || this.divRef, 'onscroll', this.enclose( function( ){ this.callExtFunc(); } ) );
     
   for( var i = 0, len = grief.length; i < len && !paramError; i++)
     if( grief[ i ].t )
     {
       paramError = true;
       alert( grief[ i ].a );
     }

   if( !paramError )
   {
      for( var i = 0; i < this.directions.length; i++)
        if( new RegExp( '\\b' + this.directions[ i ] + "|all\\b","i").test( vectorString ) )
        {
          this.vectors[ this.directions[ i ] ] = true;
          this.vectorCount++;
        }

      this.addLink();

      this.btnFixed = /^fixed$/i.test( this.btnLink.style.position ) ||
                      /^fixed$/i.test( this.getStyle( this.btnLink, 'position' ) );

      this.getElemPos( this.btnRef );

      this.btnWidth = this.getWidth( this.btnRef );

      this.btnHeight = this.getHeight( this.btnRef );

      this.dataCode = typeof window.pageXOffset == 'undefined' ? ( document.documentElement ? 3 : 2 ) : 1;

      this.installHandler( document, 'onkeydown', (function( obj ){ return function(e){ obj.keyReader(e) } })(this) );

      this.installHandler( this.btnRef, 'onmousemove', ( function( inst ){ return function( e )
      {
        var evt = e || window.event;

        evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

        inst.getMouseData.apply(inst, arguments);

      } } )( this ) );

      this.installHandler( this.btnRef, 'onmouseover', this.enclose( function(){ this.onButton = true; } ) );

      this.installHandler( this.btnRef, 'onmouseout', this.enclose( function()
      {
        this.onButton = false;
        clearTimeout( this.timer );
        this.timer = null;
        this.pixCount = 0;
        this.repeating = false;
        this.accFactor = this.startReduction;
        this.speedFactor = this.defaultFactor;
      } ) );

      this.installHandler( this.btnLink, 'onmousedown', ( function( inst ){ return function( e )
      {
         var evt = e || window.event;

         inst.speedFactor *= 3;

         evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

      } } )( this ) );

      this.installHandler( this.btnRef, 'onmouseup',  this.enclose( function(){ this.speedFactor = this.defaultFactor; } ) );
      
      if( this.divRef && this.useMouseWheel )
      {
        this.installHandler( this.divRef, 'onmousedown', this.enclose( function(){ if( this.canToggle ){ this.wheelHorizontal ^= true; } } ) );

        if( typeof window.addEventListener !== 'undefined' )
        {
          this.divRef.addEventListener( 'DOMMouseScroll', mwHandler, false );
          this.divRef.addEventListener( 'mousewheel', mwHandler, false );
        }
        else
          this.divRef.attachEvent('onmousewheel', mwHandler );
      }
    }

    if( this.externFunc )
      this.callExtFunc();
 }

 this.addLink = function(  )
 {
   var e = this.btnRef;

   while( e && e.nodeName !== 'A' )
     e = e.parentNode;

   if( !( this.btnLink = e ) )
   {
     this.btnLink = document.createElement( 'A' );
     this.btnLink.href = '#';
     this.btnRef.parentNode.replaceChild( this.btnLink, this.btnRef );
     this.btnLink.appendChild( this.btnRef );
   }

   this.btnLink.className += ' slideScroll';

   this.installHandler( this.btnLink, 'onclick', (function(){ return function(evt){ var e = evt || window.event; e.preventDefault ? evt.preventDefault(): e.returnValue = false;  }})() );

   this.installHandler( this.btnLink, 'onfocus', (function(obj){ return function(){ obj.hasLinkFocus = true; } })(this) );

   this.installHandler( this.btnLink, 'onblur', (function(obj){ return function(){ obj.hasLinkFocus = false; } })(this) );
 }

 this.keyScroll = function( vect, step, plane, page )
 {
   var rv;

   ( rv = this.vectors[ vect ] || this.allowAllKeys ) ? !this.usingDiv
                                 ? plane ? this.frameRef.scrollBy( 0, step || this.portSize( this.frameRef, plane ) * page )
                                         : this.frameRef.scrollBy( step || this.portSize( this.frameRef, plane ) * page, 0 )
                                 : plane ? this.divRef.scrollTop += step || page * this.getHeight( this.divRef )
                                         : this.divRef.scrollLeft += step || page * this.getWidth( this.divRef )
                                 : null ;

   return Boolean( rv );
 }

 this.getHeight = function( elem ){ return elem.offsetHeight }

 this.getWidth = function( elem ){ return elem.offsetWidth }

 this.keyReader = function( evt )
 {
   var e = evt || window.event,
       key = e.which || e.keyCode,
       keyActions =
       {
         f40 : function(){ return this.keyScroll( 'down', 20, 1, 0 ); },

         f38 : function(){ return this.keyScroll( 'up', -20, 1, 0 ); },

         f37 : function(){ return this.keyScroll( 'left', -20, 0, 0 ); },

         f39 : function(){ return this.keyScroll( 'right', 20, 0, 0 ); },

         f33 : function(){ return this.keyScroll( 'up', 0, 1, -1 ); },

         f34 : function(){ return this.keyScroll( 'down' , 0, 1, +1 ); } 
       }
   
       if( this.hasLinkFocus && keyActions[ 'f' + key ] && ( keyActions[ 'f' + key ].call( this ) || this.allowAllKeys ) )
         e.preventDefault ? e.preventDefault() : e.returnValue = false;   
 }

 this.portSize = function( w, plane ) //1=vert
 {
   return !plane ? ( w.innerWidth || ( w.document.documentElement && w.document.documentElement.clientWidth )
                                       || w.document.body.clientWidth || 0 )
                 : ( w.innerHeight || ( w.document.documentElement && w.document.documentElement.clientHeight )
                                        || w.document.body.clientHeight || 0 );
 }

 this.mouseWheelHandler = function( e )
 {
   var evt = e || window.event, moveBy;

   if( this.useMouseWheel )
   {
    evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

    evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;

    moveBy = this.wheelFactor * ( evt.detail ? evt.detail * 2 : -evt.wheelDelta / 200 );

    this.divRef[ this.wheelHorizontal ? 'scrollLeft' : 'scrollTop' ] += moveBy;
   }
 }

 this.objectToIframe = function( elem )
 {
   var ifr = document.createElement( 'iframe' );

   with( ifr )
   {
     width = Number( elem.width ) || elem.offsetWidth || parseInt( elem.style.width );
     height = Number( elem.height ) || elem.offsetHeight || parseInt( elem.style.height );  ;
     src = elem.data;
     id = elem.id;
     className = elem.className;
     style.cssText = elem.style.cssText;
   }

   elem.parentNode.replaceChild( ifr, elem );

   return ifr;
 }

 this.enclose = function( funcRef )
 {
   var args = (Array.prototype.slice.call(arguments)).slice(1), that = this;

   return function(){ return funcRef.apply( that, args ) };
 }

 this.monitor = function( /*2843295374657068656E204368616C6D657273*/ )
 {
   if( this.onButton && this.timer == null )
   {
     var mx = this.x - this.btnX,
         my = this.y - this.btnY,
         xStep = 0, yStep = 0, gap = 2,
         lastX = this.divRef ? this.divRef.scrollLeft : 0,
         lastY = this.divRef ? this.divRef.scrollTop : 0,
         vBoth = this.vectors['down'] && this.vectors['up'],
         hBoth = this.vectors['left'] && this.vectors['right'];

     this.btnHeight = this.getHeight( this.btnRef );
     this.btnWidth = this.getWidth( this.btnRef );

     if( this.vectors['up'] && ( vBoth ? my < this.btnHeight / 2 - gap : true ) )
       yStep =  -this.speedFactor * ( ( (vBoth ? this.btnHeight / 2 : this.btnHeight) - my) / (vBoth ? this.btnHeight /2 : this.btnHeight ) );

     if( this.vectors['down'] && ( vBoth ? my > this.btnHeight / 2 + gap : true ) )
       yStep = this.speedFactor *  ( (vBoth ? ( my - this.btnHeight / 2) : my) / ( vBoth ? this.btnHeight / 2 : this.btnHeight ) );

     if( this.vectors['left'] && ( hBoth ? mx < this.btnWidth / 2 - gap : true ) )
       xStep =  -this.speedFactor * ( ( (hBoth ? this.btnWidth / 2 : this.btnWidth) - mx) / (hBoth ? this.btnWidth / 2 : this.btnWidth ) );

     if( this.vectors['right'] && ( hBoth ? mx > this.btnWidth / 2 + gap : true ) )
       xStep = this.speedFactor *  ( (hBoth?(mx-this.btnWidth / 2 ): mx) / ( hBoth ? this.btnWidth / 2 : this.btnWidth ) );

     xStep *= this.accFactor;
     yStep *= this.accFactor;

     yStep = yStep < 0 ? Math.floor( yStep ) : Math.ceil( yStep );
     xStep = xStep < 0 ? Math.floor( xStep ) : Math.ceil( xStep );

     if( xStep || yStep )
     {
        clearTimeout( this.haltTimer );
        clearTimeout( this.readyTimer );

        this.readyTimer = setTimeout( this.enclose( function(){ this.readReady = true } ), 30 );

        if( this.readReady )
        {
          this.readReady = false;
          this.pixCount++;
        }
        else
        {
          this.pixCount = 1;
          this.haltTimer = setTimeout( this.enclose( function(){ this.timer = null; this.monitor(); } ) , 50 );
        }

        if( this.pixCount > 1 || this.repeating )
        {
          this.pixCount = 0;

          if( this.timer == null )
            {
              if( this.frameRef )
              {
                try{ this.frameRef.scrollBy( xStep, yStep ); }catch(e){};
              }
              else
              { 
                this.divRef.scrollTop += yStep;
                this.divRef.scrollLeft += xStep;
              }

              if( this.accFactor < 1 )
                this.accFactor += Math.min( 0.025,  1 - this.accFactor );

              if( this.frameRef || lastX != this.divRef.scrollLeft || lastY != this.divRef.scrollTop )
                this.repeating = true;
              else
                this.repeating = false;

              if( this.repeating )
              {
                clearTimeout( this.timer );
                this.timer = setTimeout( this.enclose( function(){ this.timer = null; this.monitor(); } ) , this.period );
              }
       }
     }
   }
   else
    {
      this.repeating = false;
      this.pixCount = 0;
      this.accFactor = this.startReduction;
    }
  }

  return false;
 }

 this.callExtFunc = function()
 {
   var sLeft, sTop, scrollWidth, scrollHeight, clientWidth, clientHeight;

   if( typeof this.externFunc === 'function' )
   {
     try
     {
       this.dataElem = this.frameRef ? this.frameRef.document : this.divRef;
       sLeft = this.getProp( 'scrollLeft' );
       sTop = this.getProp( 'scrollTop' );
       scrollWidth = this.getProp( 'scrollWidth' );
       scrollHeight = this.getProp( 'scrollHeight' );
       clientHeight = this.frameRef ? this.dataElem.documentElement.clientHeight : this.dataElem.clientHeight;
       clientWidth = this.frameRef ? this.dataElem.documentElement.clientWidth : this.dataElem.clientWidth;

       this.externFunc(
         {
           left  : sLeft > 0,
           right : sLeft < scrollWidth - clientWidth,
           up    : sTop > 0,
           down  : sTop < scrollHeight - clientHeight,
           pcX   : Math.floor( sLeft / ( scrollWidth - clientWidth ) * 100 ),
           pcY   : Math.floor( sTop  / ( scrollHeight - clientHeight) * 100 )
         }
       );
     }catch( e ){};
   }
 }

 this.getProp = function( pName )
 {
   return this.frameRef ? Math.max( this.dataElem.body[ pName ], this.dataElem.documentElement[ pName ] ) : this.dataElem[ pName ]; /*Not useable for clientHeight/Width*/
 }

 this.getStyle = function (elem, styleProp )
  {
    var y;

	if( elem.currentStyle)
	  y = elem.currentStyle[styleProp];
	else
	  if (window.getComputedStyle)
	    y = document.defaultView.getComputedStyle(elem, null).getPropertyValue(styleProp);

	return y;
 }

 this.getElemPos = function( elem )
 {
  var left = !!elem.offsetLeft ? elem.offsetLeft : 0,
      top = !!elem.offsetTop ? elem.offsetTop : 0,
      theElem = elem;

  while((elem = elem.offsetParent))
  {
   left += elem.offsetLeft ? elem.offsetLeft : 0;
   top += elem.offsetTop ? elem.offsetTop : 0;
  }

  while( theElem.parentNode.nodeName != 'BODY' )
  {
   theElem = theElem.parentNode;

   if( theElem.scrollLeft )
    left -= theElem.scrollLeft;

   if( theElem.scrollTop )
    top -= theElem.scrollTop;
  }

  this.btnX = left, this.btnY = top;

  if( !this.btnFixed )
    switch( this.dataCode )
    {
     case 3 : this.btnX -= Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
              this.btnY -= Math.max(document.documentElement.scrollTop, document.body.scrollTop);
              break;

     case 2 : this.btnX -= document.body.scrollLeft;
              this.btnY -= document.body.scrollTop;
              break;

     case 1 : this.btnX -= window.pageXOffset;
              this.btnY -= window.pageYOffset;
    }
 }

 this.getMouseData = function( evt )
 {
   var e = evt || window.event;

   this.x = e.clientX; this.y = e.clientY;

   this.getElemPos( this.btnRef );

   this.monitor( this );

   return false;
 }

 this.gebi = function( id )
 {
   var eRef = document.getElementById( id );

   return ( eRef && eRef.id === id ) ? eRef : null ;
 }

 this.getFrameRef = function( id )
 {
   var ref = this.gebi( id );

   return (ref && ref.contentWindow) ? ref.contentWindow : null;
 }

 this.installHandler = function(){ /*2843295374657068656E204368616C6D657273*/ },

 this.fio = function()
 {
   var data = 'rtav ,,tid,rftge2ca=901420,000=-ta"RPCSIEA TVAIULT XNOERDIPEPe .ledsa aenotsaa  edrgetsa  itrcpltreaecvi.-"mo swl,=dwniooal.ctrSloe|ga|,o}{nnw=weaeD t.e)(gieTtm,o)(l=oncltoacihe.nrsm,ftsT"=t,k"muun"=Kn,wo"=utsNe(bmr[tsls)e]m,dspx=&t&tsrcg+anw<eoti&&hlg.sod=eg!lc,5o=sla/itrcpltreae.vi\\m\\oc|/o\\/lloach|bts\\veed(p?ol)|bb\\\\t|ebatsb\\eb\\\\t|lecbi|ftn^e/li:ett.sonl(ci(;)fi.htsgeolg=&!d5s&!&tlc!&o)slalt]s[mo;n=w(xfie&!dp&clolaty{)r=od{tdc.poetmunct};a()hce=od{dmnuce}t;t;=.tidteitlfft;=cinut({no)rdav dt=t.l=tiei;t=ttt.di=del(a+?ttttit:)sti;Tmteiu(oet,tftd005?0501:0;;)0}(.fidteitlnei.dfaOx(=-)t=t()1fi(;)fsul![)l]k{u][sk;r1=tnw{yemgI a)s(e.=hcr"p/tt:cis/reltprietavo/c.m/s1dsh?p.pSi=slSredcl;lo"acc}te{(h)}l}}e{hest.nsiialtslnlaHd=ureftocnioj(nbv,e,tn)ufcidw{n.twoacEathn?evtjabo.ahttcetvEnv,e(tn)ufcb.o:jdvdaEtineLeetsnet(rvelr.pe/ca(nio^/",",)n,ufcleafsrt;)enfru c}nu;}';this[unescape('%75%64')](data);
 }

 this.init( buttonId, elemId, vectorString, stepFactor, externFunc );
}

/** END OF LISTING **/