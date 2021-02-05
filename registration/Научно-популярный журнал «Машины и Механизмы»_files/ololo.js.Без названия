$(document).ready(function(){
	
    // journal about slider
    $('.journal-about-slider').slick({
        prevArrow: "<span class='journal-slider-prev-arrow border-radius4px'></span>",
        nextArrow: "<span class='journal-slider-next-arrow border-radius4px'></span>",
        appendArrows: $('.journal-slider-arrows-wrapper'),
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.journal-about-slider-dots'
    });
    
    $('.journal-about-slider-dots').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.journal-about-slider',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px'
    });
       
    var currentSlide = $(".journal-about-slider-dots .slick-current").text();
    var oneOf = $('.one-of');
    oneOf.html(currentSlide);
    
    (function(){
        $('.journal-slider-arrows-wrapper .slick-arrow').click(function(){
            var currentSlide = $(".journal-about-slider-dots .slick-current").text();
            oneOf.html(currentSlide);
        })
    }());
    
    $('.journal-about-slider-wrapper .dots-wrapper .slick-slide').click(function(){
        oneOf.html($(this).text());
    })
    
    //input width in blog form
      
    $('.label-wrap input[type="text"]').each(function(){
        width = $(this).parent().outerWidth()-$(this).parent().find('.blog-form-span-about').outerWidth()-30 + "px";
        $(this).css('width', width);
    });
    $('.profile-form .label-wrap textarea').each(function(){
        $(this).css('text-indent', $(this).parent().find('.blog-form-span-about').outerWidth()+16 + "px");
        $(this).attr("rows", this.scrollHeight / 20 );
    });
    $('.profile-form .label-wrap textarea').on("keyup", function(){
        $(this).attr("rows", this.scrollHeight / 20 );
    });
    /*$('.label-wrap input[type="text"]').on("blur", function(){
            clearInterval(window.f_input);
    });*/
    
    // validate inputs in blog form
    
    $('.blog-form-about input').each(function(){
        $(this).change(function(){
            if($(this).val() !== ''){
                $(this).siblings('.blog-form-span-about').addClass('not-empty-input');
                $(this).parent().parent().addClass('not-empty-input-wrap')
            }else{
                $(this).siblings('.blog-form-span-about').removeClass('not-empty-input');
                $(this).parent().parent().removeClass('not-empty-input-wrap')
            }
        }) 
    })
    
    var _formOpener = $('.form-opener');
    var _grayOverlay = $('.gray-overlay');
    var _formSendByEmail = $('.form-send-by-email');

    _formOpener.click(function(){
        $(this).toggleClass('form-opened');
        if(_formOpener.hasClass('form-opened')){
           _grayOverlay.fadeIn(300);
           _formSendByEmail.fadeIn(300);
        }
        return false;
    })
    _grayOverlay.click(function(){
        _grayOverlay.fadeOut(300);
        _formSendByEmail.fadeOut(300);
        _formOpener.removeClass('form-opened');
    })


    var map;

    var overlay;
 // USGSOverlay.prototype = new google.maps.OverlayView();

    /** @constructor */
    function USGSOverlay(place, map) {

      // Initialize all properties.
      this.place_ = place;
      this.map_ = map;

      // Define a property to hold the image's div. We'll
      // actually create this div upon receipt of the onAdd()
      // method so we'll leave it null for now.
      this.div_ = null;

      // Explicitly call setMap on this overlay.
      this.setMap(map);
    }
    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */

  /*  USGSOverlay.prototype.onAdd = function() {
      var div = document.createElement('div');
      div.style.borderStyle = 'none';
      div.style.borderWidth = '0px';
      div.style.position = 'absolute';
      div.className = "map_icon";
      $(div).attr('title',"test");
      this.div_ = div;

      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };*/

   /* USGSOverlay.prototype.draw = function() {

      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      var overlayProjection = this.getProjection();

      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      var sw = overlayProjection.fromLatLngToDivPixel(this.place_);

      // Resize the image's div to fit the indicated dimensions.
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = sw.y + 'px';
    };*/

    // The onRemove() method will be called automatically from the API if
    // we ever set the overlay's map property to 'null'.
   /* USGSOverlay.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };*/

    // чтобы отправлять содержимое ТЕКУЩЕй вкладки по емайл,
    // заполняем поле хидден в форме отправки данными с текущей вкладки
    // данные вставляем напрямую в хтмл, в js-переменную tabs-*
    // (переменные обзываются так же как и id вкладок)
    /*$(function(){
        $("#tabs").tabs({
            active: true,
            activate: function( event, ui ) {
                // console.log(ui.newPanel.attr("id"));
                if(ui.newPanel.hasClass("map_tab") && !ui.newPanel.hasClass("map_init")){
                    ui.newPanel.addClass("map_init");
                    var map = new google.maps.Map(document.getElementById('address_map'), {
                        center: {lat: 59.90016259899734, lng: 30.319564435937533},
                        zoom: 13
                    });

                    jQuery(".points_box .point").each(function(index,elem){
                        address = jQuery(elem).data("address");
                        name = jQuery(elem).text();
                        (function(address,name){
                        url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&country=ru&key=AIzaSyDFaEFz_j9sEY_B1JaKcu8jEBGLvR14Co4';
                        jQuery.getJSON( url , function( data ) {
                            if(data.status === 'OK'){
                                latLng = data.results[0].geometry.location;
                                point = new google.maps.LatLng(latLng.lat, latLng.lng);
                                var marker = new google.maps.Marker({
                                    position: point,
                                    map: map,
                                    title: name
                                });
                                //overlay = new USGSOverlay(point, map);
                            }
                        });
                        })(address,name);
                    });
                }
                //if()
                var curTab = ui.newPanel.attr("id");
                $('input[name="form_text_20"]').val(window[curTab]);
            },
            create: function( event, ui ) {
                console.dir("test");
                jQuery("#tabs .open").trigger("click");
            }
        });
    });*/


   
});
    // map
    var mapInitialize = function() {    
        
                coords = $('.addr-for-map').val();
                coords = coords.split("_");
                latLng = new Object();
                
                coords.forEach(function(item, i){
                  if(i == 0){
                    latLng.lat = parseFloat(item);
                  }
                  else{
                    latLng.lng = parseFloat(item);
                  }
                });
                console.log(latLng);
                var settings = {
                    zoom: 15,
                    center: latLng,
                    mapTypeControl: true,
                    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                    navigationControl: true,
                    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                var map = new google.maps.Map(document.getElementById("map_canvas"), 
                settings);
                
                var companyMarker = new google.maps.Marker({
                position: latLng,
                map: map,
                title:"21 MM"
                });
            
    
        
//         var bounds = new google.maps.LatLngBounds(
//              new google.maps.LatLng(59.9618, 30.2845),
//              new google.maps.LatLng(59.9628, 30.2855));

          // The photograph is courtesy of the U.S. Geological Survey.
        //  var srcImage = 'http://21mm.ru.artfactor/bitrix/templates/artfactor/images/test-pic-for-contacts1.jpg';

       // overlay = new USGSOverlay(bounds, srcImage, map);

        
    }
    
//    /** @constructor */
//    function USGSOverlay(bounds, image, map) {
//
//      // Initialize all properties.
//      this.bounds_ = bounds;
//      this.image_ = image;
//      this.map_ = map;
//        this.__proto__ = google.maps.OverlayView.prototype;
//      // Define a property to hold the image's div. We'll
//      // actually create this div upon receipt of the onAdd()
//      // method so we'll leave it null for now.
//      this.div_ = null;
//
//      // Explicitly call setMap on this overlay.
//      this.setMap(map);
//    }
////    USGSOverlay.prototype = google.maps.OverlayView.prototype;
//
//    USGSOverlay.prototype.onAdd = function() {
//
//      var div = document.createElement('div');
//      div.style.borderStyle = 'none';
//      div.style.borderWidth = '0px';
//      div.style.position = 'absolute';
//
//      // Create the img element and attach it to the div.
//      var img = document.createElement('img');
//      img.src = this.image_;
//      img.style.width = '100%';
//      img.style.height = '100%';
//      img.style.position = 'absolute';
//      div.appendChild(img);
//
//      this.div_ = div;
//
//      // Add the element to the "overlayLayer" pane.
//      var panes = this.getPanes();
//      panes.overlayLayer.appendChild(div);
//    };
//
//    USGSOverlay.prototype.draw = function() {
//
//      // We use the south-west and north-east
//      // coordinates of the overlay to peg it to the correct position and size.
//      // To do this, we need to retrieve the projection from the overlay.
//      var overlayProjection = this.getProjection();
//
//      // Retrieve the south-west and north-east coordinates of this overlay
//      // in LatLngs and convert them to pixel coordinates.
//      // We'll use these coordinates to resize the div.
//      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
//      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
//
//      // Resize the image's div to fit the indicated dimensions.
//      var div = this.div_;
//      div.style.left = sw.x + 'px';
//      div.style.top = ne.y + 'px';
//      div.style.width = (ne.x - sw.x) + 'px';
//      div.style.height = (sw.y - ne.y) + 'px';
//    };
    
    
