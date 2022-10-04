$(function(){
    if ($('.menu-list').length > 0) {menuList();}
    if ($('.datepicker-wrap').length > 0) {datepickerIcon();}
    if ($('.default-swiper').length > 0) {defaultSwiper();}
    if ($('.col3-swiper').length > 0) {col3Swiper();}
    if ($('.btn-tooltip').length > 0) {tooltip();}
    if ($('.activation-status').length > 0) {contentFull();}
    if ($('.accordion').length > 0) {accordionBox();}
    if ($('.filebox').length > 0) {filebox();}
    
    
    //aside
    $('.btn-aside').on('click',function(){
        var $this = $('.btn-aside');

        if($this.hasClass('btn-aside-close')){
            $('aside').addClass('close');
            $this.addClass('btn-aside-open').removeClass('btn-aside-close');
        }else{
            $('aside').removeClass('close');
            $this.removeClass('btn-aside-open').addClass('btn-aside-close');
        }
    });
    $('.menu > li').mouseover(function(){
        $(this).addClass('hover');
    });
    $('.menu > li').mouseleave(function(){
        $(this).removeClass('hover');
    });

    if($(window).width() < 1280){
        $('aside').addClass('close');
        $('.btn-aside-close').addClass('btn-aside-open').removeClass('btn-aside-close');
    }else{
        $('aside').removeClass('close');
        $('.btn-aside-close').removeClass('btn-aside-open').addClass('btn-aside-close');
    }

    // all체크
    $(".allcheck").on('click', function(e){
		if($(this).is(":checked")){
            $(this).parents('.accordion-header').siblings('.accordion-collapse').children().find('input').prop('checked',true);
		}else{
			$(this).parents('.accordion-header').siblings('.accordion-collapse').children().find('input').prop('checked',false);
		}
	});
    // 체크 박스라인
    $(".vin-no-list li .form-check-input").on('click', function(e){
		if($(this).is(":checked")){
            $(this).parents('li').addClass('active').children().find('input').prop('checked',true);
		}else{
			$(this).parents('li').removeClass('active').children().find('input').prop('checked',false);
		}
	});

})

function defaultSwiper(){
    var swiper = new Swiper(".default-swiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function col3Swiper(){
    var swiper = new Swiper(".col3-swiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


function datepickerIcon(){
    setTimeout(function(){
        $('.search-wrap .picker-input-group-icon').attr('class','picker-input-group-icon date-picker-input-icon');
    },50);
}

function menuList(){
    $('.btn-open').on('click',function(){
        $(this).closest('.item').siblings('.depth').slideDown();
    })
}

function tooltip(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-coreui-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new coreui.Tooltip(tooltipTriggerEl)
    })
}

function contentFull(){
    var $btn = $('.btn-view-status');
    $btn.on('click',function(){
        if($btn.hasClass('btn-all')){
            $btn.addClass('btn-short').removeClass('btn-all')
            $('.activation-status').addClass('full');
        }else{
            $btn.removeClass('btn-short').addClass('btn-all')
            $('.activation-status').removeClass('full');
        }
    });
}

function accordionBox(){
    var $btn = $('.accordion-button');

    $btn.on('click',function(){
        $accordionItem = $(this).closest('.accordion-item');

        if($accordionItem.hasClass('active')){
            $accordionItem.removeClass('active');
        }else{
            $accordionItem.addClass('active').siblings('.accordion-item').removeClass('active');
        }
    })
}
function filebox(){

    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    });
} 