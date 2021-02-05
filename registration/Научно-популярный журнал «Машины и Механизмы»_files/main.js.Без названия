function printIt() {
  $('.diary-b').css('min-height', 'auto');
  window.print();
}

function validateE(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = email;
  if(reg.test(address) == false) {
    return false;
  } else {
    return true
  }

}

$(document).ready(function () {

  if($("#error_update_user").length > 0) {
    $("#error_update_user").modal()
  }

  $('.non-auth-submit').click(function () {
    var item_id, amount, tovar, mrh_login, inv_id, rcp, msg,
      email = $('#new-client [type="email"]'),
      name = $('#new-client [name="NAME1"]'),
      surname = $('#new-client [name="NAME2"]'),
      patronimyc = $('#new-client [name="NAME3"]'),
      error = false,
      validationAr = [name, surname, patronimyc]
    validationAr.map(function (e, i) {
      if(!$(e).val()) {
        $(e).css('border', '1px solid red')
        error = true
      } else {
        $(e).css('border', 'none')
      }
    })

    if(!validateE(email.val())) {
      email.css('border', '1px solid red')
      error = true
    } else {
      email.css('border', 'none')
    }

    if(error) {
      return false
    }

    if(!window.number_id) {
      $('[name="OutSum"]').val($('[name="footer-article"]:checked').val());
      $('[name="Receipt"]').val($('[name="footer-article"]:checked').data('rcp'));
      $('[name="SignatureValue"]').val($('[name="footer-article"]:checked').data('crc'));
      $('[name="Shp_id"]').val($('[name="footer-article"]:checked').data('id'));
      item_id = $('[name="Shp_id"]').val()
      amount = parseInt($('[name="OutSum"]').val());
      mrh_login = $('[name="MrchLogin"]').val();
      inv_id = $('[name="InvId"]').val();
      rcp = $('[name="Receipt"]').val();
      msg = $('#new-client form').serialize();
      $.ajax({
        type: 'POST',
        url: '/ajax/newTransaction.php',
        data: msg,
        success: function (data) {
          if (data) {
            $('[name="Shp_item"]').val('nonauth' + data);
            $('[name="Receipt"]').val(rcp);
            var shp_item = $('[name="Shp_item"]').val();
            var md5 = $.md5(mrh_login + ":" + amount + ":" + inv_id + ":" + rcp + ":jfXo1Sz600Y9uJCRtxku" + ":Shp_id=" + item_id + ":Shp_item=" + shp_item);

            $('[name="SignatureValue"]').val(md5);
            $('#robokassa').submit();
          }
          return false;
        },
        error: function (xhr, str) {
          return false;
        }
      });

      return false
    }
      item_id = window.number_id
      amount = parseInt($('[data-id="'+item_id+'"]').find('[name="OutSum"]').val());
      tovar = $('[data-id="'+item_id+'"]').find('[name="Desc"]').val();
      mrh_login = $('[data-id="'+item_id+'"]').find('[name="MrchLogin"]').val();
      inv_id = $('[data-id="'+item_id+'"]').find('[name="InvId"]').val();
      rcp = $('[data-id="'+item_id+'"]').find('[name="Receipt"]').val();
      $('#new-client form [name="NUMBER"]').val($('[data-id="'+item_id+'"]').data('numb'))
      msg = $('#new-client form').serialize();
        $.ajax({
          type: 'POST',
          url: '/ajax/newTransaction.php',
          data: msg,
          success: function (data) {
            if (data) {
              $('[name="Shp_item"]').val('nonauth' + data);
              $('[name="Receipt"]').val(rcp);
              var shp_item = $('[name="Shp_item"]').val();
              var md5 = $.md5(mrh_login + ":" + amount + ":" + inv_id + ":" + rcp + ":jfXo1Sz600Y9uJCRtxku" + ":Shp_id=" + item_id + ":Shp_item=" + shp_item);

              $('[name="SignatureValue"]').val(md5);
              $('[data-id="'+item_id+'"]').submit();
            }
            return false;
          },
          error: function (xhr, str) {
            return false;
          }
        });
      return false;
  })

  $('.new-client label').click(function (e) {
    e.preventDefault()
    $('.new-client input[type="radio"]').prop('checked', false)
    $('.new-client input[id="'+$(this).attr('for')+'"]').prop('checked', true)
    $('.new-client a').text($(this).data('text')).attr('href', $(this).data('href'))
  })

  $('.order-subscribe-btn').click(function () {
    yaCounter13201312.reachGoal('printed_v');
  })

  $('.footer-article-buy-button').click(function () {
    if($(this).attr('href') == '#new-client') {
      yaCounter13201312.reachGoal('subNew');
    } else if($(this).attr('href') == '#introduction-block') {
      yaCounter13201312.reachGoal('subReg');
    } else {
      yaCounter13201312.reachGoal('el_v');
    }

  })

  //localStorage

  function localStorageFunction() {
    function storageAvailable(type) {
      try {
        var storage = window[type],
          x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      }
      catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
      }
    }

    if (storageAvailable('localStorage')) {
      function addSmileToStorage() {
        if ($(this).hasClass('disabled')) {
          return false;
        }
        var smiles = {};
        if (typeof localStorage['smiles'] !== 'undefined') {
          try {
            var smiles = JSON.parse(localStorage['smiles']);
          }
          catch (err) {
            localStorage.removeItem('smiles');
          }
        }
        var img = $(this).find('img').get(0).src;
        smiles[img] = typeof smiles[img] === "undefined" ? 1 : smiles[img] + 1;
        localStorage['smiles'] = JSON.stringify(smiles);
      }

      //$('.comment_message-form-smile-1').click(addSmileToStorage);
      $('.comment_message-form-smile_img1').click(addSmileToStorage);

      if (typeof localStorage['smiles'] !== 'undefined') {
        try {

          var storedSmiles = JSON.parse(localStorage['smiles']);
        }
        catch (err) {
          localStorage.removeItem('smiles');
        }
        var smilesArray = [];
        for (var img in storedSmiles) {
          smilesArray.push([img, storedSmiles[img]]);
        }

        smilesArray.sort(function (a, b) {
          return a[1] - b[1];
        });		
        smilesArray = smilesArray.slice(-5);
        for (var i = 4; i > 0; i--) {		
          if (typeof smilesArray[i] !== 'undefined') {
            $('.often-smiles .comment_message-form-smile_img:nth-child(' + i + ')').html('<img class="small-smile" src="'+smilesArray[i][0]+'" />');
          }
          else {
            $('.often-smiles .comment_message-form-smile_img:nth-child(' + i + ')').addClass('disabled');
          }
        }
        ;	
        // smilesArray.each(function(){
        //     console.log(this);
        // });
      }

    }
    else {
      console.log('Storage is unavalible on this browser')
    }

  }

  localStorageFunction();

  function truncate(string, length) {
    if (string.length > length)
      return string.substring(0, length) + '...';
    else
      return string;
  };

  /*$('.diary-item-text-seo').each(function(i, e) {
        var text = $(e).attr('full-text');
        $(e).find('.cat-text').html(text);
        var trunclated = truncate($(e).find('.cat-text').find('p').text(), 152);
        $(e).find('.cat-text').find('p').text(trunclated);
    });*/
  $('.cat-text p').append($('.cat-text .category-dropdown'));
  $('.categories-dropdowns').on('click', '.category-dropdown', function () {
    if ($(this).hasClass('active')) {
      var parent = $(this).parents('.diary-item-text-seo');
      $(this).html('&nbsp;&nbsp;&nbsp;&nbsp;открыть');
      $(this).removeClass('active');
      var text = parent.attr('full-text');
      parent.find('.cat-text').html(text);
      var trunclated = truncate(parent.find('.cat-text').find('p').text(), 132);
      parent.find('.cat-text').find('p').text(trunclated);
      parent.find('.cat-text').find('p').append($(this));
    } else {
      $(this).html('&nbsp;&nbsp;&nbsp;&nbsp;закрыть');
      $(this).addClass('active');
      var parent = $(this).parents('.diary-item-text-seo');
      var text = $(this).parents('.diary-item-text-seo').attr('full-text');
      parent.find('.cat-text').html(text);
      parent.find('.cat-text').find('p').append($(this));
    }

  });

  $('.mess-delete').click(function () {
    var id = $('#delMesPopap').attr('data-id');
    var span = $('span[data-id="' + id + '"]');
    Messages.ToggleTrash(id, span);
    $('#delMesPopap').hide();
  });
  
  function smilesEvent() {
      $('.comment_message-form-smile-1:not(.evented), .comment_message-form-smile_img1:not(.evented)').click(function () {

        localStorage.setItem('myMessage', $(this).parents('form').find('#message-editor').html() + $(this).html().trim());

        $(this).parents('form').find('#message-editor').html(
          $(this).parents('form').find('#message-editor').html() + $(this).html().trim()
        );
		var smiles = {};
        if (typeof localStorage['smiles'] !== 'undefined') {
          try {
            var smiles = JSON.parse(localStorage['smiles']);
          }
          catch (err) {
            localStorage.removeItem('smiles');
          }
        }
        var img = $(this).find('img').get(0).src;
        smiles[img] = typeof smiles[img] === "undefined" ? 1 : smiles[img] + 1;
        localStorage['smiles'] = JSON.stringify(smiles);
		
        if ($(this).parents('form').find('#message-editor').length) $(this).parents('form').find('#message-editor').get(0).dispatchEvent(new Event('blur'));
        
      });
      $('.comment_message-form-smile-1:not(.evented), .comment_message-form-smile_img1:not(.evented)').addClass('evented');
    }

    var observer = new MutationObserver(function (mutations) {
      smilesEvent();
    });
    observer.observe(document.body, {childList: true});
	
  $('div.comment_message-form-smile_img > img').click(function () {	  
	$.ajax({
            type: "POST",
            url: "/ajax/getSmiles.php",
            data: "",
            cache: false,
            success: function(data){
				$(".comment_message-form-smile_popup > .comment_message-form-smile_wrap").html(data);
            }
        });   
  
    $('.comment_message-form-smile_popup').mouseenter(function () {
      $(this).mouseleave(function () {
        $(this).addClass('hide');
        $(this).unbind('mouseleave');
      });
    });

    observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: true,
	});
  });
   
  function replacer(str, rep, offset, s) {
    var pos = offset - 20;
    if (s.substr(pos, 20).indexOf('src') == -1 && s.substr(pos, 20).indexOf('href') == -1) {
      return "&nbsp<a rel='nofollow' target='_blank' href='" + rep + "'>" + rep + "</a>&nbsp";
    } else {
      return false;
    }
  }

  let pattern = /(http:\/\/[.\w\/=&?#;%-]+)/gi;
  let patterns = /(https:\/\/[.\w/=&?#;%-]+)/gi;
  let patternw = / (www[.\w/=&?#;%-]+)/gi;

  function replaceLink(nodes, parent) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeName === 'SCRIPT' || nodes[i].nodeName === 'A') continue
      if (nodes[i].nodeType === 1 && nodes[i].hasChildNodes()) {
        let parentNode = nodes[i]
        let children = nodes[i].childNodes
        replaceLink(children, parentNode)
      } else if (nodes[i].nodeType === 3 && nodes[i].textContent.trim()) {
        let link = nodes[i].textContent.trim().replace(pattern, replacer).replace(patterns, replacer).replace(patternw, replacer);
        if (link) {
          let sp1
          if (nodes[i].nodeType === 1) {
            sp1 = document.createElement(nodes[i].nodeName);
          } else {
            sp1 = document.createElement('span');
          }
          if(link.indexOf('<a') !== -1) {
            $(sp1).html('&nbsp' + link + '&nbsp')
          } else {
            $(sp1).html(' ' + link + ' ')
          }

          parent.replaceChild(sp1, parent.childNodes[i]);
        }
      }
    }
  }

  if ($('.detail-text-div').length > 0) {
    let parent = document.querySelector('.detail-text-div')
    let nodes = document.querySelector('.detail-text-div').childNodes;
    replaceLink(nodes, parent)
  }
  $('.diary-video-detail-comment-item-body').each(function (i, e) {
    let parent = e
    let nodes = e.childNodes
    replaceLink(nodes, parent)
  });


  $('.comment_message-body-2, .comment_message-body-1').each(function (i, e) {
    let parent = e
    let nodes = e.childNodes
    replaceLink(nodes, parent)
  });

  $('.detail-text-div a, .diary-video-detail-comment-item-body a').attr('target', '_blank').attr('rel', 'nofollow');


  $('.comment_message-form-text .copyContentTo').on('keyup', function () {
    localStorage.setItem('myMessage', $(this).html());
  });

  $('.comment_message-form').on('submit', function () {
    localStorage.setItem('myMessage', "");
  });

  $('.comment_message-form-text .copyContentTo').html(localStorage['myMessage']);
  $('.comment_message-form-text .copyContentTo').next('textarea').html(localStorage['myMessage']);


  $('.video-file').click(function () {
    if (window.current_video_input)
      window.current_video_input.click();
    else
      $('[name="VIDEO"]').click();
  });

  $('[name="VIDEO"]').change(function () {
    let file = document.getElementById("mobile-file").files[0]
    if(file.size > 33554432) {
      alert('Файл не может быть больше 32 мегабайт')
      return false
    }
    $('.video-file').text('Файл выбран');
    $('.video-clip-icon').remove();
    $('.post-content-edit').css('margin-bottom', '60px');
    $('.comment-text').parent().append('<div class="video-clip-icon">' + this.value.replace(/(.*)\\/g, "") + '</div>');

    $('.close-modal').click()
  });
  $('#robokassasubmit').click(function () {
    /*if($('[name="footer-article"]:checked').attr('id') === 'footer-article-radio3') {
      $('[href="#auth_user_subscribe"]').click()
      return false
    }*/

    $('[name="OutSum"]').val($('[name="footer-article"]:checked').val());
    $('[name="Receipt"]').val($('[name="footer-article"]:checked').data('rcp'));
    $('[name="SignatureValue"]').val($('[name="footer-article"]:checked').data('crc'));
    $('[name="Shp_id"]').val($('[name="footer-article"]:checked').data('id'));
    $('#robokassa').submit();
  });

  function setRepostImage(el) {
    var src = $(el).attr('src');
    $('head').append('<meta property="og:image" content="http://21mm.ru' + src + '" />');
  }

  var params = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .reduce(
      function (p, e) {
        var a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      }, {}
    );
  if (window.location.hash.length > 0) {
    $('[data-id="' + window.location.hash + '"]').parent().css('background', '#ebebeb');
    var id = window.location.hash.substr(9);
    if (params.COM_ID) {
      $.ajax({
        type: 'POST',
        url: '/ajax/commentAction.php',
        data: 'id_vis=' + id,
        success: function (data) {
        }
      });
    }

  }
  if (params.need_reg) {
    $('.login-block__registration-link').click();
  }
  if (params.success) {
    $('[href="#success"]').click();
  }
  if (params.successS) {
    $('[href="#successS"]').click();
  }
  $('.cm_submit').click(function () {
    $('.cm_close').click();
  });

  $("a[data-fancybox]").fancybox();

  if ($("#ajaxPages").length) {
    var count_pages = $("#ajaxPages").val();
    var curPage = $("#ajaxPages").attr("data-cur-page");
    var pageParam = $("#ajaxPages").attr("data-page-param");

    if (count_pages > curPage) {
      var arAjaxUrl = [];
      while (count_pages > curPage) {
        curPage++;
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          arGetParams = [],
          sGetParams = "";
        if (sPageURL != "") {
          var sURLVariables = sPageURL.split('&');
          for (i = 0; i < sURLVariables.length; i++) {

            sParameterName = sURLVariables[i].split('=');
            if (['template'].indexOf(sParameterName[0]) !== -1) {
              arGetParams[sParameterName[0]] = (sParameterName[1] === undefined) ? true : sParameterName[1];
              if (sGetParams == "") {
                sGetParams += "?" + sParameterName[0] + "=" + sParameterName[1];
              } else {
                sGetParams += "&" + sParameterName[0] + "=" + sParameterName[1];
              }
            }
          }
        }
        if (sGetParams == "") {
          sGetParams += "?" + pageParam + "=" + curPage;
        } else {
          sGetParams += "&" + pageParam + "=" + curPage;
        }
        arAjaxUrl.push(window.location.pathname + sGetParams);

      }
      AjaxPostPreQuery(arAjaxUrl, {
        "AJAX": "Y"
      });
    }
  }

  function AjaxPostPreQuery(arAjaxUrl, params) {
    var ajaxUrl = arAjaxUrl.shift();
    $.post(ajaxUrl, {
      "AJAX": "Y"
    }, function (data) {
      if (arAjaxUrl.length) {
        AjaxPostPreQuery(arAjaxUrl, params);
      }
      try {
        data = JSON.parse(data);
        //console.dir(data);
        for (var key in data) {
          if (key == "ALPHABIT") {
            for (var ALPHABIT_ID in data[key]) {
              if (!$("#" + ALPHABIT_ID).hasClass("updated")) {
                var html = '<a data-letter="' + data[key][ALPHABIT_ID] + '" onclick="return false;" href="">' + data[key][ALPHABIT_ID] + '</a>';
                $("#" + ALPHABIT_ID).html(html);
                $("#" + ALPHABIT_ID).addClass("updated");
              }

            }
          } else if (key == ".megapolis-peoples") {
            for (var MPLL_ID in data[key]) {
              if (!$(MPLL_ID).length) {
                $(key).append(data[key][MPLL_ID]);
              }
            }
          } else {
            $(key).append(data[key]);
          }
        }
        var ac = $(".megapolis-abc-char .active");
        $(ac).trigger("click");

      } catch (e) {

      }
    });
  }

  $('#PREVIEW_IMAGE, .photos').change(function () {
    checkFile(this);
  })

  function checkFile(el) {
    var fileElement = el;
    var fileExtension = "";
    if (fileElement.value.lastIndexOf(".") > 0) {
      fileExtension = fileElement.value.substring(fileElement.value.lastIndexOf(".") + 1, fileElement.value.length);
    }
    if (fileExtension.toLowerCase() == "gif" || fileExtension.toLowerCase() == "jpg"
      || fileExtension.toLowerCase() == "jpeg" || fileExtension.toLowerCase() == "png") {
      return true;
    }
    else {
      alert("Неверный тип файла!");
      return false;
    }
  }

  if ($(".autosave").length) {
    ds = $(".autosave");
    setInterval(function () {
      var form = document.forms.new_article;
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/ajax/article.php");
      formData.append('action', 'auto_save');
      console.log(formData.entries())
      try {
        for (var pair of formData.entries()) {
          console.log(pair)
          if (pair[1] instanceof File && pair[1].name == '' && pair[1].size == 0)
            formData.delete(pair[0]);
        }
      } catch (e) {
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var data = xhr.responseText;
            if (data) {
              if (data > 1) {
                $(".elID").val(data);
              }
              $(".autosave_box").show().animate({
                opacity: 1
              }, 500, function () {
                setTimeout(function () {
                  $(".autosave_box").animate({
                    opacity: 0
                  }, 500, function () {
                    $(".autosave_box").hide();
                  });
                }, 3000);
              });
            }
          }
        }
      };
      xhr.send(formData);
    }, 100000);
  }

  $(document).on($.modal.BEFORE_CLOSE, "*", function (event, modal) {
    if ($(modal.elm).length && $("#" + $(modal.elm).attr("id")).not(".modal").length) {
      $(modal.elm).remove();
    }
  });

  if (window.location.hash != "" && $('[data-id="' + window.location.hash + '"]').length > 0) {
    setTimeout(function () {
      $(window).scrollTop($('[data-id="' + window.location.hash + '"]').offset().top - 200)
    }, 1000);
  }

  if ($(".login-block-messages").length) {
    setInterval(function () {
      $.post('/', {
        "ACTION": "getNewMessAndCommentsCount"
      }, function (data) {
        if ($(".login-block-messages span").text() != data) {
          $(".login-block-messages span").text(data);
          if (window.Messages !== undefined) {
            window.Messages();
          }
        }
      });
    }, 600000);
  }

  if ($(".restoreAutosave").length) {
    result = confirm("Обнаружено автосохранение, восстановить?");
    if (result) {
      var restore = $("#restoreDetailText").val();
      $("#bxed_DETAIL_TEXT").val(restore);
    }
  }
  $('.fb_auth').click(function () {
    $('.ulogin-button-facebook').click();
  });
  $('#fb_subscription_button').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      alert('Привязка произошла успешно!');
      $('.ulogin-button-facebook').click();
    } else {
      var user_id = $(this).data('user');
      var self = this;
      if (confirm('Отвязать аккаунт?')) {
        $.post('/ajax/detach.php', {
          user_id: user_id,
          network: 'facebook'
        }, function (data) {
          if (data == 1) {
            $(self).removeClass('active');
            alert('Аккаунт отвязан!');
            location.reload();
          }
          //echo Cfile::GetPath($fid);
        })
      }
    }
  });
  $('.vk_auth').click(function () {
    $('.ulogin-button-vkontakte').click();
  });
  $('#vk_subscription_button').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      alert('Привязка произошла успешно!');
      $('.ulogin-button-vkontakte').click();
    } else {
      var user_id = $(this).data('user');
      var self = this;
      if (confirm('Отвязать аккаунт?')) {
        $.post('/ajax/detach.php', {
          user_id: user_id,
          network: 'vkontakte'
        }, function (data) {
          if (data == 1) {
            $(self).removeClass('active');
            alert('Аккаунт отвязан!');
            location.reload();
          }
        })
      }
    }
  });
  $('.tw_auth').click(function () {
    $('.ulogin-button-twitter').click();
    $('#twitter').click();
  });
  $('#tw_subscription_button').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      alert('Привязка произошла успешно!');
      $('.ulogin-button-twitter').click();
      $('#twitter').click();
    } else {
      var user_id = $(this).data('user');
      var self = this;
      if (confirm('Отвязать аккаунт?')) {
        $.post('/ajax/detach.php', {
          user_id: user_id,
          network: 'twitter'
        }, function (data) {
          if (data == 1) {
            $(self).removeClass('active');
            alert('Аккаунт отвязан!');
            location.reload();
          }
        })
      }
    }
    $('.ulogin-button-twitter').click();
    $('#twitter').click();
  });

  $(".tooltip").tooltip({
    show: {
      delay: 1000
    }
  });

  var ih = $(".diary-b.instruction").height() + 100;
  var isbh = $(".instruction-section-box").outerHeight();
  if (isbh < ih) {
    $(".instruction-section-box").height(ih);
  } else {
    $(".diary-b.instruction").height(isbh) - 100;
  }

  $(document).on('click', '.style_icon_bold', function (e) {
    document.execCommand('bold', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_italic', function (e) {
    document.execCommand('italic', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_list', function (e) {
    document.execCommand('insertUnorderedList', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_underline', function (e) {
    document.execCommand('underline', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_center', function (e) {
    document.execCommand('justifyCenter', false, null);
    $(".comment-text").focus();
  });
  $(document).on('click', '.style_icon_full', function (e) {
    document.execCommand('justifyFull', false, null);
    $(".comment-text").focus();
  });
  $(document).on('click', '.style_icon_through', function (e) {
    document.execCommand('strikeThrough', false, null);
    $(".comment-text").focus();
  });
  $(document).on('click', '.style_icon_subhead', function (e) {
    if (whichTag("h3")) {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, '<h3>');
      $(".comment-text").focus();
    }

  });
  $(document).on('click', '.style_icon_head', function (e) {
    if (whichTag("h2")) {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, '<h2>');
      $(".comment-text").focus();
    }
  });
  $(document).on('click', '.style_icon_box', function (e) {
    if (whichTag("h4")) {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, '<h4>');
      $(".comment-text").focus();
    }
  });
  $(document).on('click', '.style_icon_quote', function (e) {
    if (whichTag("h5")) {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, '<h5>');
      $(".comment-text").focus();
    }
  });

  $(document).on('click', '.style_icon_undo', function (e) {
    document.execCommand('undo', false, null);
    if (!document.queryCommandEnabled('undo')) {
      $(this).removeClass('style_icon_enable')
    }
    $(".comment-text").focus();
  });
  $(document).on('click', '.style_icon_rendo', function (e) {
    document.execCommand('redo', false, null);
    $(".comment-text").focus();
    if (!document.queryCommandEnabled('redo')) {
      $(this).removeClass('style_icon_enable')
    }
  });

  $(document).on('click', '.style_icon_image', function (e) {
    var x = $("<input type='file'>", {
      "id": "editor-add-image"
    }).appendTo("body");

    $(x).on('change', function () {
      input_file = this;
      var fr = new FileReader();
      (function (files) {
        fr.onload = function () {
          $.post(
            "/ajax/saveImage.php", {
              src: fr.result,
              name: files[0].name
            },
            function (data) {
              try {
                data = $.parseJSON(data);
                if (data.URL !== undefined && data.URL !== "") {
                  if (!msieversion()) {
                    document.execCommand('insertHTML', false, "<a href='" + data.URL + "' data-fancybox><img src='" + data.URL + "'></a>");
                  } else {
                    $(".comment-text").append("<a href='" + data.URL + "' data-fancybox><img src='" + data.URL + "'></a>");
                  }
                }
              } catch (e) {

              }
            }
          );
        }
        fr.readAsDataURL(files[0]);
      })(this.files);
    });
    x.click();
    $(".comment-text").focus();
  });


  $(document).on('click', '.style_icon_num_list', function (e) {
    document.execCommand('insertOrderedList', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_unlink', function (e) {
    document.execCommand('unlink', false, null);
    $(".comment-text").focus();
  });

  $(document).on('click', '.style_icon_link, .style_icon_video', function (e) {
    $(".comment-text").focus();
    window.tmpSel = saveSelection($(".comment-text")[0]);
  });
  
  $(document).on('click','.comment_message-form-smile-1', function() { 
		
	if ($(this).parents('form').find('#textlimit').length){
        $(this).parents('form').find('#textlimit').html(
          $(this).parents('form').find('#textlimit').html() + $(this).html().trim()
        );
	$(this).parents('form').find('#comment_text').html(
          $(this).parents('form').find('#comment_text').html() + $(this).html().trim()
        );
	$(this).parents('form').find('#textlimit').focus();
	}   
  });	

  $(document).on("click", ".sub-modal", function () {
    var href = $(this).attr('href');
    if (href == '#add-video-form' && $('[name="VIDEO"]').length > 1) {
      window.current_video_input = $(this).parents('.answer_box').find('[name="VIDEO"]');
      if (window.current_video_input.length == 0) {
        window.current_video_input = $(this).parents('.comment_message').find('[name="VIDEO"]');
      }
    }
	if (href == '#add-smile'){
		$('.comment_message-detail-form-smile_popup').toggleClass('hide');
		$.ajax({
            type: "POST",
            url: "/ajax/getSmiles.php",
            data: "",
            cache: false,
            success: function(data){
				$(".comment_message-detail-form-smile_popup > .comment_message-detail-form-smile_wrap").html(data);
            }
        });   
  
    $('.comment_message-detail-form-smile_popup').mouseenter(function () {
      $(this).mouseleave(function () {
        $(this).addClass('hide');
        $(this).unbind('mouseleave');
      });
    });
	}	
	
    $($(this).attr('href')).modal({
      closeExisting: false
    });
  });

  String.prototype.replaceAll = function (search, replace) {
    return this.split(search).join(replace);
  }

  function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
      return true;
    }
    return false;
  }


  function remove_tags(html) {
    // html = html.replace(/(style\=(\"|\')(.*)(\"|\')|(\<\-\-))/g, '');
    /* var html = html.replaceAll("<div", "||div||<div");
        html = html.replaceAll("</div>", "</div>||/div||");
        html = html.replaceAll("<br", "||br||<br");*/
    /* var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        html = tmp.textContent || tmp.innerText;
        html = html.trim();
        html = html.replaceAll("||br||", "<br>");
        html = html.replaceAll("||div||", "<div>");
        html = html.replaceAll("||/div||", "</div>");
        html = html.replaceAll(/.*\}/, "");*/
    if (html.indexOf('}') === -1) {
      html = html.replaceAll("\n", "<br>");
    }

    html = html.replaceAll(/.*\}/, "");
    return html.replaceAll("<br><br>", "").replaceAll("</p>", "</p><br>");
  }

  $(document).on("paste", ".copyContentTo", function (event) {


    event.preventDefault();
    var clipboardData = (event.originalEvent || event).clipboardData;
    if (!msieversion()) {
      var text = clipboardData.getData('text/html') || clipboardData.getData('text/plain');
      text = remove_tags(text);
      console.log(text);
      var clipboardItems = clipboardData.items;
      if (clipboardItems) {
        for (let key in clipboardItems) {
          let item = clipboardItems[key];
          if (item.kind === 'file') {
            let image = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
              image = "<img src='" + event.target.result + "'>";
              document.execCommand('insertHTML', false, image);
            };
            reader.readAsDataURL(image);
          }
        }
      }
      document.execCommand('insertHTML', false, text);
    } else {
      var clipboardData = window.clipboardData;
      var text = clipboardData.getData('text');
      document.execCommand('paste', false, text);
    }

    $('#textlimit').msword_html_filter();
  });
  $('#select-font-editor').selectmenu({
    width: '114px',
    create: function (event, ui) {
      $("#select-font-editor-menu").closest(".ui-selectmenu-menu").addClass("select-light-border");
    },
    open: function (event, ui) {
      var selectedFont = document.queryCommandValue("fontName");
      $('.current-font').removeClass('current-font');
      $('#select-font-editor-menu').find('.ui-menu-item').each(function (key, element) {
        if (selectedFont.indexOf($(element).html()) !== -1) {
          $(element).addClass('current-font');
        }
      });
    },
    select: function (event, ui) {
      if (ui.item.index == 0) {
        document.execCommand('fontName', false, 'Fira Sans');
      } else if (ui.item.index == 1) {
        document.execCommand('fontName', false, 'Verdana');
      } else if (ui.item.index == 2) {
        document.execCommand('fontName', false, 'Georgia');
      }
    }
  });

  $('#select-font-size').selectmenu({
    width: '25px',
    create: function (event, ui) {
      $("#select-font-size-menu").closest(".ui-selectmenu-menu").addClass("select-light-border");
    },
    open: function (event, ui) {
      if (!msieversion()) {
        var selectedSize = document.queryCommandValue("fontSize");
        $('.current-size').removeClass('current-size');
        if (selectedSize == 2 || !selectedSize) {
          $('#select-font-size-menu').find('.ui-menu-item').eq(1).addClass('current-size');
        } else if (selectedSize == 1) {
          $('#select-font-size-menu').find('.ui-menu-item').eq(0).addClass('current-size');
        } else if (selectedSize == 4) {
          $('#select-font-size-menu').find('.ui-menu-item').eq(2).addClass('current-size');
        }
      }
    },
    select: function (event, ui) {
      var selected = document.getSelection();
      console.log(selected);
      var regex = /(<([^>]+)>)/ig;
      if (ui.item.index == 0) {
        document.execCommand("fontSize", false, "1");
        var fontElements = selected.anchorNode.parentElement.getElementsByTagName("font");
        $(fontElements).each(function (key, element) {
          element.style.fontSize = "11px";
          element.style.lineHeight = "19px";
        });
      } else if (ui.item.index == 1) {
        document.execCommand("fontSize", false, "2");
        var fontElements = selected.anchorNode.parentElement.getElementsByTagName("font");
        $(fontElements).each(function (key, element) {
          element.style.fontSize = "14px";
          element.style.lineHeight = "22px";
        });
      } else if (ui.item.index == 2) {
        document.execCommand("fontSize", false, "4");
        var fontElements = selected.anchorNode.parentElement.getElementsByTagName("font");
        $(fontElements).each(function (key, element) {
          element.style.fontSize = "18px";
          element.style.lineHeight = "26px";
        });
      }
    }
  });

  var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

  //Function to convert rgb color to hex format
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgb) {
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
  }

  function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }

  function toColor(value) {
    if (typeof value != "number") {
      return rgb2hex(value);
    }

    value = ((value & 0x0000ff) << 16) | (value & 0x00ff00) | ((value & 0xff0000) >>> 16);
    value = value.toString(16);
    return "#000000".slice(0, 7 - value.length) + value;
  }

  //Нашел офигенную функцию. Предотвращает потерю выделения текста на сафари, когда нажимает на SelectMenu
  $.ui.selectmenu.prototype._setSelection = function () {
    var selection;
    if (!this.range) {
      return;
    }
    if (window.getSelection) {
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(this.range);
    } else {
      // support: IE8
      this.range.select();
      // support: IE
      // Setting the text selection kills the button focus in IE, but
      // restoring the focus doesn't kill the selection.
      this.button.focus();
    }
  };
  $('#select-font-color').selectmenu({
    width: '25px',
    create: function (event, ui) {
      var element = $("#select-font-color-menu").closest(".ui-selectmenu-menu");
      var fontColor = "<div class=\"select-color-title\">Цвет шрифта</div>";
      element.addClass("select-light-border font-color-dropdown");
      element.prepend(fontColor);

    },
    open: function (event, ui) {
      $('#select-background-color').selectmenu("open");
      var fontColor = document.queryCommandValue("ForeColor");
      var boxColor;
      fontColor = toColor(fontColor);
      $('#select-font-color-menu').find('.ui-menu-item').each(function (key, element) {
        $(element).html("");
        $(element).addClass("color-picker-box");
        boxColor = '#' + $('#select-font-color').find('option').eq(key).val();
        if (boxColor == fontColor) {
          $(element).addClass("current-color");
        }
        $(element).css('background-color', boxColor);
      });
    },
    select: function (event, ui) {
      if (event.clientX != undefined) {
        document.execCommand('foreColor', false, "#" + ui.item.value);
      }
    },
    close: function (event, ui) {
      $('#select-background-color').selectmenu("close");
      $('.ui-menu-item').removeClass("current-color");
    }
  });

  $('#select-background-color').selectmenu({
    width: '25px',
    create: function (event, ui) {
      var element = $("#select-background-color-menu").closest(".ui-selectmenu-menu")
      var fontColor = "<div class=\"select-color-title\">Цвет фона</div>";
      element.addClass("select-light-border background-color-dropdown");
      element.prepend(fontColor);
    },
    open: function (event, ui) {
      var fontColor = document.queryCommandValue("backColor");
      var boxColor;
      fontColor = toColor(fontColor);
      $('#select-background-color-menu').find('.ui-menu-item').each(function (key, element) {
        $(element).html("");
        $(element).addClass("color-picker-box");
        boxColor = '#' + $('#select-background-color').find('option').eq(key).val();
        if (boxColor == fontColor) {
          $(element).addClass("current-color");
        }
        $(element).css('background-color', boxColor);
      });
    },
    select: function (event, ui) {
      if (event.clientX != undefined) {
        document.execCommand('backColor', false, "#" + ui.item.value);
      }
    },
    close: function (event, ui) {
      $('#select-font-color').selectmenu("close");
    }
  });


  $(document).on('submit', '.insertLink', function (e) {
    var link = $(".link", this).val();
    $("#add-link-form .cm_close").trigger("click");
    $(".comment-text").focus();
    restoreSelection($(".comment-text")[0], window.tmpSel);
    document.execCommand('createLink', false, link);
    $(".link").val('');
  });

  $(document).on('submit', '.insertVideo', function (e) {
    var link = $(".link", this).val();
    if (link) {
      $("#add-link-form .cm_close").trigger("click");
      $(".comment-text").focus();
      restoreSelection($(".comment-text")[0], window.tmpSel);
      link = link.replace("http://", "https://").replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/");
      if (/\/\/vimeo\.com/.test(link)) {
        link = link.replace(/(https:\/\/)(vimeo\.com\/)/g, '$1player.$2video/');
      } else if (/\/\/rutube\.ru/.test(link)) {
        link = link.replace(/(rutube\.ru\/)(video\/)/g, '$1play/embed/');
      }
      document.execCommand('insertHTML', false, "<iframe id='for_proactive_filter' style='width: 100%;' src='" + link + "' allowfullscreen></iframe>");
      //document.execCommand( 'createLink', false, link );
    } else {
      $(".video-add-form .close-modal").trigger("click");
    }

  });

  $(".diary-video-detail-comment-item-body iframe, .comment-text iframe, .news-feed-block_msg_text iframe").attr("allowfullscreen", "allowfullscreen");

  if ($(".toAnchor").length) {
    $(document).load(function () {
      console.dir($(".toAnchor").offset().top);
      $(window).scrollTop($(".toAnchor").offset().top);
    })
  }

  $(document).on("mouseup", ".copyContentTo", function (e) {
    var target = e.target;
    /*insertCurrentPlace = ''; // ловим текущий тег
     caret = ''; // положение каретки
     caret = window.getSelection().anchorOffset;
     if (window.getSelection().anchorNode.nodeName == '#text') {
     insertCurrentPlace = window.getSelection().anchorNode.parentNode;
     } else {
     insertCurrentPlace = window.getSelection().anchorNode;
     }
     console.dir(insertCurrentPlace);*/

    $(".style_icon").removeClass("active");
    if (!$(target).hasClass("comment-text")) {
      var tags = [target.tagName];
      while (!$(target).parent().hasClass("comment-text")) {
        target = $(target).parent()[0];
        tags.push(target.tagName);
      }
      $.each(tags, function (index, elem) {
        $(".style_icon_tag_" + elem).addClass("active");
      });
    }
    var selectedFont = document.queryCommandValue("fontName");
    if (selectedFont != 'Georgia' && selectedFont != 'Verdana') {
      selectedFont = "Fira Sans";
    }
    $('#select-font-editor-button').find(".ui-selectmenu-text").text(selectedFont);
  });

  function whichTag(tagName) {
    var sel, containerNode;
    var tagFound = false;
    tagName = tagName.toUpperCase();
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount > 0) {
        containerNode = sel.getRangeAt(0).commonAncestorContainer;
      }
    } else if ((sel = document.selection) && sel.type != "Control") {
      containerNode = sel.createRange().parentElement();
    }
    while (containerNode) {
      if (containerNode.nodeType == 1 && containerNode.tagName == tagName) {
        tagFound = true;
        containerNode = null;
      } else {
        containerNode = containerNode.parentNode;
      }
    }
    return tagFound;
  }


  $(document).on("blur keyup paste input", ".copyContentTo", function (e) {

    if (e.keyCode == 27) {
    }

    if (document.queryCommandEnabled('undo')) {
      $('.style_icon_undo').addClass('style_icon_enable');
    }
    if (document.queryCommandEnabled('redo')) {
      $('.style_icon_rendo').addClass('style_icon_enable');
    }
    // $(this).find("*").removeAttr("style").removeAttr("class"); Не позволяет использовать execCommand, я честно говоря вообще не понимаю, зачем постоянно очищать style и class?
    $(this).find("*").removeAttr("class");
    var content = $(this).html();
    var target = $($(this).attr('data-href'));
    $(target).val(content);
  });

  $(".active_single").on("click touchstart", function () {
    var iclass = $(this).attr("data-activator");
    var tclass = $(this).attr("data-active-class");
    $(iclass).removeClass(tclass);
    $(this).addClass(tclass);
    return false;
  });

  $(".class_single_toggle").on("click touchstart", function () {
    var iclass = $(this).attr("data-object");
    var tclass = $(this).attr("data-class");
    $(iclass).removeClass(tclass);
    return false;
  });

  $(".class_toggle").on("click touchstart", function () {
    var id = $(this).attr("href");
    var tclass = $(this).attr("data-class");
    $(id).toggleClass(tclass);
    return false;
  });

  $(".ins_search_submit").click(function (e) {
    updateSearch($(".ins_search"));
  });

  $(".ins_search").keydown(function (e) {
    if (e.keyCode == 13) {
      updateSearch($(".ins_search"));
    }
  });

  function updateSearch(e) {

    $(".ins_search").tooltip("close");
    var search = $(e).val().toLowerCase();
    if (search == "") return false;
    $(".instruction-section .instruction-items-box>li").removeClass("open");
    if (
      window["f_search"] === undefined ||
      (window["f_search"] !== undefined && window["f_search"] != $(e).val().toLowerCase())
    ) {
      window["f_search"] = $(e).val().toLowerCase();
      window["f_count"] = $(".instruction-section .instruction-items-box>li").length;
      window["f_cur"] = 0;
      window["not_found"] = true;
    }
    $(".instruction-section .instruction-items-box>li").each(function (index, elem) {
      if (index < window["f_cur"]) {
        return true;
      } else {
        if ((window["f_count"] - 1) > window["f_cur"]) {
          window["f_cur"]++;
        } else {
          window["f_cur"] = 0;
        }
      }
      if ($(elem).text().toLowerCase().indexOf(search) !== -1) {
        $(elem).addClass("open");
        window["not_found"] = false;
        var i_s = $(elem).closest(".instruction-section");
        if (!$(i_s).hasClass("open")) {
          $(".instruction-section").removeClass("open");
          $(".instruction-section-items-box a").removeClass("active");
          $(".instruction-section-items-box a[href='#" + $(i_s).attr("id") + "']").addClass("active");
          $(i_s).addClass("open");
        }
        return false;
      }
    });

    if (window["not_found"]) {
      $(".ins_search").attr("title", "Ничего не найдено");
      $(".ins_search").tooltip("open");
    }
  }

  $(".ins_search").tooltip({
    close: function (event, ui) {
      $(".ins_search").removeAttr("title");
    }
  });

  $(".ins_search").focus(function () {
    $(this).parent().addClass("focus");
  });
  $(".ins_search").blur(function () {
    $(this).parent().removeClass("focus");
  });

  $(".arc_edit_img_frame").on("mousedown", mdown);

  function mdown(e) {
    if (e.button === 0 && e.target === e.currentTarget) {
      $(".arc_edit_img_frame .j_Tip").addClass("opacity1 z100");
      window.newJTip = document.createElement("div");
      $(window.newJTip).addClass("j_Tip");

      left_pos = e.offsetX / 8;
      top_pos = e.offsetY / 9.92;
      if (top_pos > 95) {
        top_pos = 95;
      }
      $(window.newJTip).css({
        "left": left_pos + "%",
        "top": top_pos + "%"
      }).attr({
        "data-left": left_pos,
        "data-top": top_pos,
        "data-left-orig": left_pos,
        "data-top-orig": top_pos
      });
      $(this).append(window.newJTip);
      $(this).on("mouseup", mup);
      $(this).on("mousemove", mmove);
    }
  }

  function mup(e) {
    $(this).off("mouseup", mup);
    $(this).off("mousemove", mmove);
    $(window.newJTip).addClass("added");
    $(".arc_edit_img_frame .j_Tip").removeClass("opacity1 z100");
    $(window.newJTip).append("<span class='close'></div>");
  }

  function mmove(e) {
    console.dir(e.target);
    console.dir(e.currentTarget)
    left_pos = $(window.newJTip).attr("data-left");
    top_pos = $(window.newJTip).attr("data-top");
    left_pos_orig = $(window.newJTip).attr("data-left-orig");
    top_pos_orig = $(window.newJTip).attr("data-top-orig");


    if (e.offsetY / 9.92 > 96) {
      e.offsetY = 9.92 * 96;
    }

    width = e.offsetX / 8 - left_pos_orig;
    height = e.offsetY / 9.92 - top_pos_orig;
    if (width > 0) {
      $(window.newJTip).css({
        "width": width + "%"
      }).attr({
        "data-width": width
      });
    } else {
      width *= -1;
      new_left_pos = e.offsetX / 8;
      left_pos = new_left_pos + width;

      $(window.newJTip).css({
        "width": width + "%",
        "left": new_left_pos + "%"
      }).attr({
        "data-width": width,
        "data-left": new_left_pos,
        "data-left-orig": left_pos
      });
    }
    if (height > 0) {
      $(window.newJTip).css({
        "height": height + "%"
      }).attr({
        "data-height": height
      });
    } else {
      height *= -1;
      new_top_pos = e.offsetY / 9.92;
      top_pos = new_top_pos + height;

      $(window.newJTip).css({
        "height": height + "%",
        "top": new_top_pos + "%"
      }).attr({
        "data-height": height,
        "data-top": new_top_pos,
        "data-top-orig": top_pos
      });
    }
  }

  BX.ready(function () {
    var oPopup = new BX.PopupWindow('addPDFComment', window.body, {
      autoHide: true,
      offsetTop: 0,
      offsetLeft: 0,
      lightShadow: true,
      closeIcon: true,
      closeByEsc: true,
      overlay: {
        backgroundColor: 'black',
        opacity: '80'
      }
    });
    window.oPopup = oPopup;

    $(".arc_edit_img_frame").on("dblclick", ".j_Tip", function (e) {
      pos_top = Math.ceil($(this).attr("data-top"));
      pos_left = Math.ceil($(this).attr("data-left"));
      width = Math.ceil($(this).attr("data-width"));
      height = Math.ceil($(this).attr("data-height"));
      area_ID = $(this).attr("data-area-id");
      title = $(this).attr("data-title");
      link = $(this).attr("data-link");
      content = $(".content", this).text();
      form = $("#editPDFBlock");

      $(".top_pos", form).val(pos_top);
      $(".left_pos", form).val(pos_left);
      $(".width", form).val(width);
      $(".height", form).val(height);
      $(".area_ID", form).val(area_ID);
      $(".name", form).val(title);
      $(".link", form).val(link);
      $(".content", form).val(content);
      var clone = $("#editPDFBlock").clone();
      oPopup.setContent(clone[0]);
      oPopup.show();
    });
  });

  $("body").on('submit', '.ajaxDataForm', function () {

    var ds = $(this);
    var form_data = {};

    $(".arrInfo", ds).each(function (index, elem) {
      $(elem).removeClass("error");
      if ($(elem).attr("name") !== undefined) {
        if ($(elem).attr("data-multi") === 1) {
          if (form_data[$(elem).attr("name")] === undefined) form_data[$(elem).attr("name")] = {
            "VALUE": {},
            "LABEL": $(elem).attr("data-label")
          };
          if (form_data[$(elem).attr("name")][$(elem).attr("data-id")] === undefined) form_data[$(elem).attr("name")]["VALUE"][$(elem).attr("data-id")] = {};
          form_data[$(elem).attr("name")]["VALUE"][$(elem).attr("data-id")][$(elem).attr("data-name")] = $(elem).val();
        } else {
          form_data[$(elem).attr("name")] = {
            "VALUE": $(elem).val(),
            "LABEL": $(elem).attr("data-label")
          };
        }
      }
    });

    jQuery.post(
      "/ajax/editPDF.php", {
        "FORM_DATA": form_data
      },
      function (response) {
        try {
          response = jQuery.parseJSON(response);

          $(ds).fadeOut(function () {
            if (response.RESULT) {
              $(this).attr("class", "result success").find(".input_box").empty().html(response.TEXT);
              $(this).fadeIn();
              //успешная отправка
            } else {
              $(this).attr("class", "result error").find(".input_box").empty().html(response.TEXT);
              $(this).fadeIn();
              // и что то не так
            }
          });
        } catch (e) {
        }
      }
    );
  });


  $(".arc_edit_img_frame").on("click", ".close", function (e) {

    var ds = $(this).parent();
    var form_data = {};
    form_data["type"] = {
      "VALUE": "deleteArea"
    };
    form_data["areaID"] = {
      "VALUE": $(ds).attr("data-area-id")
    };
    if ($(ds).attr("data-area-id") === undefined) {
      $(ds).remove();
      var clone = $("#editPDFBlock").clone();
      $(clone).attr("class", "result success").find(".input_box").empty().html("<div class='style1_text'>Область удалена</div>");
      window.oPopup.setContent(clone[0]);
      window.oPopup.show();
    } else {
      jQuery.post(
        "/ajax/editPDF.php", {
          "FORM_DATA": form_data
        },
        function (response) {
          try {
            response = jQuery.parseJSON(response);

            if (response.RESULT) {
              var clone = $("#editPDFBlock").clone();
              $(clone).attr("class", "result success").find(".input_box").empty().html(response.TEXT);
              window.oPopup.setContent(clone[0]);
              $(ds).remove();
              //успешная отправка
            } else {
              var clone = $("#editPDFBlock").clone();
              $(clone).find(".input_box").empty().html(response.TEXT);
              window.oPopup.setContent(clone[0]);
              // и что то не так
            }
            window.oPopup.show();
          } catch (e) {
          }
        }
      );
    }
    e.stopPropagation();
  });


  $('[name="save"], [name="publication"]').click(function () {
    var rubrick = $('#select-category-editor').val(),
      name = $('#name').val(),
      img = $('.input-helper-status img'),
      lid = $('#prev_text').val();
    if (rubrick.length == 0 || lid.length == 0 || name.length == 0 || img.length == 0) {
      $('.error-add').show();
    } else {
      $('.error-add').hide();
      $(this).removeAttr('onclick').unbind('click');
      $(this).click();
    }
  });

  // Добавление в избранное
  $("body").on("click", '.diary-video-slider-item-add-favorite, .liked', function () {
    ds = $(this);
    if ($(ds).hasClass("outLiked")) return;
    var user = $(ds).data('user');
    id = $(ds).data('id');
    $.post('/ajax/liked.php', {
      user: user,
      id: id,
      action: 'add'
    }, function (data) {
      if ($(ds).hasClass("liked")) {
        $(ds).addClass("outLiked").html("<span></span>из избранного");
      } else {
        $(ds).addClass("outLiked").text("из избранного");
      }
    });
  });

  $("body").on("click", '.outLiked', function () {
    ds = $(this);
    var user = $(ds).data('user');
    id = $(ds).data('id');
    $.post('/ajax/liked.php', {
      user: user,
      id: id,
      action: 'out'
    }, function (data) {
      if ($(ds).hasClass("liked")) {
        $(ds).removeClass("outLiked").html("<span></span>в избранное");
      } else {
        $(ds).removeClass("outLiked").text("в избранное");
      }
    });
  });

  $('html').on('change', '#PREVIEW_IMAGE, .photos', function () {
    input_file = this;
    var fr = new FileReader();
    fr.onload = function () {
      //$(input_file).siblings('.jq-file__browse').empty();
      $(".IMG", $(input_file).parent()).append("<img style='width: 102px;' src='" + fr.result + "'>");
      $('.img', $(input_file).parent()).html("<img style='width: 102px;' src='" + fr.result + "'>");
      $(input_file).parent().addClass("i-box");

      if ($(input_file).hasClass("empty_input")) {
        $(input_file).removeClass("empty_input");
        $(input_file).closest(".helper-label").removeClass("empty_input");
      }
      if ($(input_file).hasClass("new")) {
        $(input_file).removeClass("new");
        next_input = $(input_file).closest(".helper-label").siblings(".next_input");
        next_key = $(next_input).attr("data-id");

        HTML = '<div class="photos-box helper-label label-wrap b-box mb4 empty_input">';
        HTML += '<label for="" class="border-radius4px relative b-box t-cell w212">';
        HTML += '<div class="input-helper border-radius4px">';
        HTML += '<input type="button" id="img[n' + next_key + ']" class="border-radius4px input" value="Выбрать файл"/>';
        HTML += '<input type="button" class="border-radius4px input delPhoto" value="Удалить фото"/>';
        HTML += '<span class="img input-helper-status">файл не выбран</span>';
        HTML += '</div>';
        HTML += '<input type="file" value="" name="PHOTOS[n' + next_key + ']" class="hidden file input photos new empty_input">';
        HTML += '</label>';
        HTML += '<div class="border-radius4px relative desc-box t-cell b-left">';
        HTML += '<textarea class="border-radius4px" name="PHOTOS_DESC[n' + next_key + ']"></textarea>';
        HTML += '</div>';
        HTML += '</div>';
        HTML += '<div class="clearfix mb4"></div>';
        HTML += '<div class="next_input" data-id="' + (++next_key) + '"></div>';
        $(next_input).html(HTML);
      }
    }
    fr.readAsDataURL(this.files[0]);
  });

  $('html').on("click", ".delPhoto", function () {
    $(this).closest(".helper-label").remove();
    $('#new_article').append('<input type="hidden" name="del_p" value="1">')
  });

  $('#view').click(function () {
    var name = $("#name").val();
    var prev_text = $("#prev_text").val();
    var det_text = $("#det_text").val();
    var tags = $("#tags").val();
    //alert('Вы нажали на элемент "view"');
    $("#view_modal").css("display", "block");
    $(".blog-left-container").css("height", "auto");
    $(".article-name").append(name);
    $(".article-epilog").append(prev_text);
    $(".article-text-p").append(det_text);
    $(".most-popular__marker").append(tags);
  });

  $('#send-on-email-form button').click(function () {
    var email = $(this).closest('form').find('.email-send input').val();
    var href = location.href;
    if (email) {
      $.post('/ajax/sendToEmail.php', {
        email: email,
        href: href
      }, function (data) {
        if (data == 1) {
          $('.jquery-modal').click();
        }
      });
    }
  });

  

  /*if($("#menu-anchor").length){
   var top = $("#menu-anchor").offset().top;
   $( "body" ).animate({scrollTop:top}, 0, function() {
   $( "body" ).animate({
   opacity: 1
   }, 100);
   });
   }else{*/
  /*$("body").animate({
   opacity: 1
   }, 100);*/
  //}
  if (window.screen.width < 700){
	   if (/\/news\/[^\/]+\/[^\/]+\/$/.test(self.location.href)){
		   var el = document.querySelector(".right-container");
		   if (el) el.style.display = 'none';
		   var el = document.querySelector(".left-container");
			if (el) el.style.width = "auto";
			var el = document.querySelector(".diary-b");
			if (el) el.style.width = "auto";
			var el = document.querySelector(".article-tag-tags");
			if (el) el.style.display = "none";
			var el = document.querySelector("div.article-body div.most-popular__markers");
			if (el) el.style.margin = "0 0 20px 10px";
	   }
	   if (/\/votes\/form\/[^\/]+$/.test(self.location.href)){
		   var el = document.querySelector(".right-container");
		   if (el) el.style.display = 'none';
		   var el = document.querySelector(".left-container");
			if (el) el.style.width = "auto";
			
	   }
  }
	if ($(".adsbygoogle:empty")){
	$(".fade_blog_anonses").css("height",990+"px");
	$(".blog_anonses").css("height",990+"px");
	$(".right-container .adsbygoogle").hide();
	}
});


var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  Basic: function () {
    return navigator.userAgent.match(/Mobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || isMobile.Basic());
  }
};

function messagesScrollBar() {
  if (!isMobile.any()) {
    $(".comment_message-body").mCustomScrollbar(
      {
        callbacks: {
          onUpdate: scrollToBottom
        }
      }
    );
  }
  else {
    $('.comment_message-body').addClass('scroll-y');

    $('.comment_message-body').each(function () {
      this.scrollTop = this.scrollHeight;
    });
  }
}

messagesScrollBar();
$(document).ready(function () {



  /*$(".pay").on("click touchstart", function(event){
   if(!$(this).hasClass("pay_btn")){
   event.stopPropagation();
   }
   });*/
  var videos = $('.video-block__video-item');
  window.emailError = false;
  window.pasError = false;
  $('[name="REGISTER[EMAIL]"]').blur(function () {
    var self = $(this);
    $.post('/ajax/checkEmail.php', {
      email: $(this).val()
    }, function (data) {

      if (self.val() != '') {
        var pattern = /^([a-z0-9_\.-])+@([a-z0-9-]+\.)+([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test(self.val()) && data == 1) {
          self.css({
            'border': '1px solid #569b44'
          });
          window.emailError = false;
          $('.mailErr').remove();
        } else {
          self.css({
            'border': '1px solid #ff0000'
          });
          window.emailError = true;
          if (data != 1) {
            self.after('<span style="color: red;" class="mailErr">Пользователь с таким адресом уже существует!</span>');
          }
        }
      } else {
        self.css({
          'border': '1px solid #ff0000'
        });
        window.emailError = true;
      }
    });

  });
  var inputError = true;

  var selectError = true;

  $('#profile input, #life-position input, #about-yourself input, #life-position textarea').change(function () {
    inputError = false;
    $(this).closest('form').find('input, textarea').each(function () {
      if ($(this).val().length == 0) {
        inputError = true;
      }
    });
    if (!inputError) {
      if ($(this).is('textarea')) {
        $(this).css('border', '1px solid #dde0e3');
      }
      var idForm = $(this).closest('form').parent().attr('id');
      var href = '#' + idForm;
      //$(this).closest('form').find("ul a[href='" + href + "']").parent().next().addClass("current");
      $("[href='" + href + "']").attr('rel', 'modal:open').parent().removeClass("current").addClass("filled").next().addClass("current").find('a').attr('rel', 'modal:open');
      $(this).parents('form').find(".go-next").css("visibility", "visible");
    }
  });

  $('#registration-form input').focusout(function () {
    if (!window.emailError && !window.pasError && $('[name="REGISTER[EMAIL]"]').val().length > 0 && $('[name="REGISTER[CONFIRM_PASSWORD]"]').val().length > 0) {
      $('#registration-form').find('[href="#profile"]').attr('rel', 'modal:open').parent().removeClass("current").addClass("current");
      $('#registration-form').find('[href="#registration-form"]').parent().removeClass('current').addClass("filled");
      $(".registration-form form .go-next").css("visibility", "visible");
    } else {
      $('#registration-form').find('[href="#registration-form"]').parent().removeClass("filled").addClass("current");
      $(".registration-form form .go-next").css("visibility", "hidden");
    }
  });

  $('.video-block__video-prev').click(function () {
    var currentVideo = $('.video-block__mainvideo').find('iframe').attr('src');
    var itsMain = true;
    var curLink = "";
    var newIndex = "",
      newLink = "",
      newDate = "",
      newID = "",
      newName = "",
      newPreviewText = "",
      newLIKED = "",
      newLikes = "",
      newViews = "",
      newComments = "",
      newHref = "";
    videos.each(function (index, elem) {
      curLink = $($('.y_link', elem).val()).attr('src');
      if (curLink == currentVideo) {
        itsMain = false;
        if (index > 0) {
          newIndex = index - 1;
        } else {
          newIndex = videos.length - 1;
        }
      }
    });
    if (itsMain) {
      newIndex = 0
    }

    newLink = $($('.y_link', videos[newIndex]).val()).attr('src');
    newDate = "<span>" + $('.y_time', videos[newIndex]).val() + "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + $('.y_date', videos[newIndex]).val();
    newId = $('.y_id', videos[newIndex]).val();
    newName = $('.y_name', videos[newIndex]).val();
    newPreviewText = $('.y_preview_text', videos[newIndex]).val();
    newLIKED = $('.y_liked', videos[newIndex]).val();
    newLikes = $('.y_likes', videos[newIndex]).val();
    newViews = $('.y_views', videos[newIndex]).val();
    newComments = $('.y_comments', videos[newIndex]).val();
    newHref = $('.y_href', videos[newIndex]).val();

    $('.video-block__under-main-video .video-block__date').html(newDate);
    $('.video-block__under-main-video .diary-video-slider-item-like').attr('data-id', newId);
    $('.video-block__under-main-video .video-block__name').html(newName);
    $('.video-block__under-main-video .video-block__preview_text').html(newPreviewText);
    $('.video-block__under-main-video .antenna').html(newViews);
    $('.video-block__under-main-video .scroll').html(newComments);
    $('.video-block__under-main-video .thumbs-up').html(newLikes);
    $('.video-block__under-main-video .video-block__link').attr('href', newHref);

    if (newLIKED != "Y") {
      $('.video-block__under-main-video .diary-video-slider-item-like').removeClass("like-button-clicked").text("Поддержать");
    } else {
      $('.video-block__under-main-video .diary-video-slider-item-like').addClass("like-button-clicked").text(newLikes);
    }

    $('.video-block__mainvideo iframe').attr('src', newLink);
  });

  $('.video-block__video-next').click(function () {
    var currentVideo = $('.video-block__mainvideo').find('iframe').attr('src');
    var itsMain = true;
    var curLink = "";
    var newIndex = "",
      newLink = "",
      newDate = "",
      newID = "",
      newName = "",
      newPreviewText = "",
      newLIKED = "",
      newLikes = "",
      newViews = "",
      newComments = "",
      newHref = "";
    videos.each(function (index, elem) {
      curLink = $($('.y_link', elem).val()).attr('src');
      if (curLink == currentVideo) {
        itsMain = false;
        if (index >= 0) {
          newIndex = index + 1;
        } else {
          newIndex = 0;
        }
      }
    });
    if (itsMain) {
      newIndex = 0;
    }

    newLink = $($('.y_link', videos[newIndex]).val()).attr('src');
    newDate = "<span>" + $('.y_time', videos[newIndex]).val() + "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + $('.y_date', videos[newIndex]).val();
    newId = $('.y_id', videos[newIndex]).val();
    newName = $('.y_name', videos[newIndex]).val();
    newPreviewText = $('.y_preview_text', videos[newIndex]).val();
    newLIKED = $('.y_liked', videos[newIndex]).val();
    newLikes = $('.y_likes', videos[newIndex]).val();
    newViews = $('.y_views', videos[newIndex]).val();
    newComments = $('.y_comments', videos[newIndex]).val();
    newHref = $('.y_href', videos[newIndex]).val();

    $('.video-block__under-main-video .video-block__date').html(newDate);
    $('.video-block__under-main-video .diary-video-slider-item-like').attr('data-id', newId);
    $('.video-block__under-main-video .video-block__name').html(newName);
    $('.video-block__under-main-video .video-block__preview_text').html(newPreviewText);
    $('.video-block__under-main-video .antenna').html(newViews);
    $('.video-block__under-main-video .scroll').html(newComments);
    $('.video-block__under-main-video .thumbs-up').html(newLikes);
    $('.video-block__under-main-video .video-block__link').attr('href', newHref);

    if (newLIKED != "Y") {
      $('.video-block__under-main-video .diary-video-slider-item-like').removeClass("like-button-clicked").text("Поддержать");
    } else {
      $('.video-block__under-main-video .diary-video-slider-item-like').addClass("like-button-clicked").text(newLikes);
    }

    $('.video-block__mainvideo iframe').attr('src', newLink);
  });
  var coords = {};

  function writeCoords(c) {
    coords = c;
  };


  $('[href="#avatar_photo"]').click(function () {
    var src = $('.main_photo_wrapper img').attr('src');
    var id = $('.main_photo_wrapper img').data('id');
    var width = $('.main_photo_wrapper img').attr('width');
    var height = $('.main_photo_wrapper img').attr('height');
    $.post('/ajax/cropMain.php', {
      x: coords.x,
      y: coords.y,
      w: coords.w,
      h: coords.h,
      src: src,
      id: id,
      width: width,
      height: height
    }, function (data) {
      data = JSON.parse(data);
      $('.final_photo_wrapper img').attr('src', data[0]);
      var api = $('#jcrop_target_avatar').Jcrop({
        onSelect: writeCoords,
        bgColor: 'black',
        bgOpacity: .4,
        setSelect: [0, 0, 274, 274],
        aspectRatio: 1 / 1
      });
      $('[href="#final_photo1"]').click(function () {
        $('.error-avatar').remove();
        var src = $('.avatar_photo_wrapper img').attr('src');
        $.post('/ajax/cropMain.php', {
          x: coords.x,
          y: coords.y,
          w: coords.w,
          h: coords.h,
          src: src
        }, function (data) {
          data = JSON.parse(data);
          $('.avatar_photo_wrapper2 img, .final_photo_wrapper2 img').attr('src', data[0]);
          $('[href="#final_photo"]').removeClass('white_btn').addClass('blue_btn').attr('rel', 'modal:open');
        });
      });
    });
  });
  $('[href="#final_photo"]').click(function () {
    $('.final_photo_wrapper img').attr('src', $('#jcrop_target_avatar').attr('src'))
    $('[href="#final_photo1"]').before('<div class="error-avatar">Нажмите "Просмотр портрета"</div>');
  });

  $('[href="#avatar_photoEdit"]').click(function () {
    var src = $('.main_photo_wrapperEdit img').attr('src');
    var id = $('.main_photo_wrapperEdit img').data('id');
    var width = $('.main_photo_wrapperEdit img').attr('width');
    var height = $('.main_photo_wrapperEdit img').attr('height');
    $.post('/ajax/cropMain.php', {
      x: coords.x,
      y: coords.y,
      w: coords.w,
      h: coords.h,
      width: width,
      height: height,
      src: src,
      id: id
    }, function (data) {
      data = JSON.parse(data);
      $('.final_photo_wrapperEdit img').attr('src', data[0]);
      // var src = $(".avatar_photo_wrapperEdit img").attr('src');
      //$(".avatar_photo_wrapperEdit img").removeAttr('src').attr('src', data[1]);
      var api = $('#jcrop_target_avatarEdit').Jcrop({
        onSelect: writeCoords,
        bgColor: 'black',
        bgOpacity: .4,
        setSelect: [0, 0, 274, 274],
        aspectRatio: 1 / 1
      });
      $('[href="#final_photo1Edit"]').click(function () {
        var src = $('.avatar_photo_wrapperEdit img').attr('src');
        $.post('/ajax/cropMain.php', {
          x: coords.x,
          y: coords.y,
          w: coords.w,
          h: coords.h,
          src: src
        }, function (data) {
          data = JSON.parse(data);
          $('.avatar_photo_wrapper2 img').attr('src', data[0]);
        });
      });
    });
  });
  $('[href="#final_photoEdit"]').click(function () {
    var srcMain = $('.final_photo_wrapperEdit img').attr('src');
    var srcAv = $('.avatar_photo_wrapper2 img').attr('src');
	if (srcAv) {
		$('.error-avatar').remove();
		console.log(srcMain);
		console.log(srcAv);
		$.post('/ajax/imageEdit.php', {
		  srcMain: srcMain,
		  srcAv: srcAv
		}, function (data) {
		  if (data) {
			location.reload();
			$('[href="#imageEditOk"]').click();
			// $('.header-inner-left-user-avatar img').attr('src', srcMain);
		  }
		});
	}
	else
	{
	$('[href="#final_photo1Edit"]').before('<div class="error-avatar">Нажмите "Просмотр портрета"</div>');
	}
  });

  $('#imgEdit').click(
    function () {
      $(this).one(
        'change',
        function () {
          var spinner = new Spinner(opts).spin(target);
          var form = document.forms.imgFileEdit;
          var formData = new FormData(form);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "/ajax/registrationImage.php");
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                spinner.stop();
                $('.main_photo_wrapperEdit img').attr('data-id', data[10]).attr('src', data[0]).attr('width', data[6]).attr('height', data[7]);
                $('.avatar_photo_wrapperEdit img').attr('src', data[2]).attr('width', data[8]).attr('height', data[9]);

                $('#imgEdit').prop('value', null);
                var api = $('#jcrop_targetEdit').Jcrop({
                  onSelect: writeCoords,
                  bgColor: 'black',
                  bgOpacity: .4,
                  setSelect: [0, 0, 495, 270],
                  aspectRatio: 11 / 6
                });

                $("[href='#main_photoEdit']").click();
              }
            }
          };
          xhr.send(formData);
        });
    });
  $('#img').change(function () {
    $('.profile-form_soc_wrapper [href="#photo"]').attr('href', '#main_photo')
    var spinner = new Spinner(opts).spin(target);
    var form = document.forms.imgFile;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax/registrationImage.php");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          data = JSON.parse(xhr.responseText);
          spinner.stop();
          $('.main_photo_wrapper img').attr('data-id', data[10]).attr('src', data[0]).attr('width', data[6]).attr('height', data[7]);
          $('.avatar_photo_wrapper img').attr('src', data[2]).attr('width', data[8]).attr('height', data[9]);
          $('#img').prop('value', null);
          $('[href="#photo"]').attr('rel', 'modal:open').parent().removeClass('current').addClass('filled');
          $('[href="#push_data"]').attr('rel', 'modal:open').parent().addClass('current');
          var api = $('#jcrop_target').Jcrop({
            onSelect: writeCoords,
            bgColor: 'black',
            bgOpacity: .4,
            setSelect: [0, 0, 495, 270],
            aspectRatio: 11 / 6
          });

          $("[href='#main_photo']").click();
        }
      }
    };
    xhr.send(formData);
  });
  $('#imgNew').change(function () {
    var spinner = new Spinner(opts).spin(target);
    var form = document.forms.imgFileNew;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax/registrationImage.php");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          data = JSON.parse(xhr.responseText);
          spinner.stop();
          $('.avatar_photo_wrapper img').attr('src', data[2]).attr('width', data[8]).attr('height', data[9]);
          $('#img').prop('value', null);
          var api = $('#jcrop_target').Jcrop({
            onSelect: writeCoords,
            bgColor: 'black',
            bgOpacity: .4,
            setSelect: [0, 0, 495, 270],
            aspectRatio: 11 / 6
          });
          $("[href='#avatar_photo']").click();
        }
      }
    };
    xhr.send(formData);
  });
  $('#imgNewEdit').change(function () {
    var spinner = new Spinner(opts).spin(target);
    var form = document.forms.imgFileNewEdit;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax/registrationImage.php");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          data = JSON.parse(xhr.responseText);
          spinner.stop();
          $('.avatar_photo_wrapperEdit img').attr('src', data[2]).attr('width', data[8]).attr('height', data[9]);
          $('#imgEdit').prop('value', null);
          var api = $('#jcrop_targetEdit').Jcrop({
            onSelect: writeCoords,
            bgColor: 'black',
            bgOpacity: .4,
            setSelect: [0, 0, 495, 270],
            aspectRatio: 11 / 6
          });
          // $("[href='#avatar_photoEdit']").click();
        }
      }
    };
    xhr.send(formData);
  });
  $('[name="REGISTER[PASSWORD]"], [name="REGISTER[CONFIRM_PASSWORD]"]').change(function () {
    var CONFIRM = $('[name="REGISTER[CONFIRM_PASSWORD]"]').val();
    var PASSWORD = $('[name="REGISTER[PASSWORD]"]').val();
    $('.errorPas').remove();

    if (PASSWORD.length < 6) {
      $(this).after('<span style="color: red;" class="errorPas">Пароль должен содержать минимум 6 символов</span>');
      $('#registration-form').find('[href="#profile"]').attr('rel', '').parent().removeClass('current');
      window.pasError = true;
    } else if (CONFIRM != PASSWORD && CONFIRM.length > 0) {
      $(this).after('<span style="color: red;" class="errorPas">Пароли не совпадают</span>');
      $('#registration-form').find('[href="#profile"]').attr('rel', '').parent().removeClass('current');
      window.pasError = true;
    } else {
      window.pasError = false;
      $('.errorPas').remove();
    }
  });

  var opts = {
    lines: 13 // The number of lines to draw
    ,
    length: 28 // The length of each line
    ,
    width: 14 // The line thickness
    ,
    radius: 42 // The radius of the inner circle
    ,
    scale: 0.75 // Scales overall size of the spinner
    ,
    corners: 1 // Corner roundness (0..1)
    ,
    color: '#000' // #rgb or #rrggbb or array of colors
    ,
    opacity: 0.25 // Opacity of the lines
    ,
    rotate: 0 // The rotation offset
    ,
    direction: 1 // 1: clockwise, -1: counterclockwise
    ,
    speed: 1 // Rounds per second
    ,
    trail: 62 // Afterglow percentage
    ,
    fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    ,
    zIndex: 2e9 // The z-index (defaults to 2000000000)
    ,
    className: 'spinner' // The CSS class to assign to the spinner
    ,
    top: '59%' // Top position relative to parent
    ,
    left: '80%' // Left position relative to parent
    ,
    shadow: false // Whether to render a shadow
    ,
    hwaccel: false // Whether to use hardware acceleration
    ,
    position: 'absolute' // Element positioning
  }
  var optsEdit = {
    lines: 13 // The number of lines to draw
    ,
    length: 28 // The length of each line
    ,
    width: 14 // The line thickness
    ,
    radius: 42 // The radius of the inner circle
    ,
    scale: 0.75 // Scales overall size of the spinner
    ,
    corners: 1 // Corner roundness (0..1)
    ,
    color: '#000' // #rgb or #rrggbb or array of colors
    ,
    opacity: 0.25 // Opacity of the lines
    ,
    rotate: 0 // The rotation offset
    ,
    direction: 1 // 1: clockwise, -1: counterclockwise
    ,
    speed: 1 // Rounds per second
    ,
    trail: 62 // Afterglow percentage
    ,
    fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    ,
    zIndex: 2e9 // The z-index (defaults to 2000000000)
    ,
    className: 'spinner' // The CSS class to assign to the spinner
    ,
    top: '65%' // Top position relative to parent
    ,
    left: '80%' // Left position relative to parent
    ,
    shadow: false // Whether to render a shadow
    ,
    hwaccel: false // Whether to use hardware acceleration
    ,
    position: 'absolute' // Element positioning
  }
  var target = document.getElementById('loader');

  $('#sendRegistrationData').click(function () {
    var email = $('[name="REGISTER[EMAIL]"]'),
      password = $('[name="REGISTER[PASSWORD]"]'),
      confirmPassword = $('[name="REGISTER[CONFIRM_PASSWORD]"]'),
      name = $('[name="nameReg"]'),
      last_name = $('[name="last_name"]'),
      registrationDay = $('[name="registrationDay"]'),
      registrationMonth = $('[name="registrationMonth"]'),
      registrationYear = $('[name="registrationYear"]'),
      date = registrationDay.val() + '.' + registrationMonth.val() + '.' + registrationYear.val(),
      ican = $('[name="ican"]'),
      motto = $('[name="motto"]'),
      study = $('[name="study"]'),
      profession = $('[name="profession"]'),
      nowLive = $('[name="nowLive"]'),
      //photoID = $('[name="photoID"]');
      photoSrc = $('.final_photo_wrapper img').attr('src'),
      photoAvatar = $('.final_photo_wrapper2 img').attr('src');
    var valArray = [email, password, confirmPassword, name, last_name, registrationDay, registrationMonth,
      registrationYear, ican, motto, study, profession, nowLive
    ];
    var error = false;
    valArray.forEach(function (e, i) {
      var valCheck = e.val().trim();
      if (valCheck.length > 0) {
        valArray[i] = valCheck;
        e.css('border', '')
      } else {

        e.css('border', '1px solid red')
        error = true;
      }
    });
    if (error == true) {
      $('.errorFields').text('Заполните все поля заявки на регистрацию!');
      $('[href="#errorFields"]').click();

    } else {
      valArray.push(photoSrc, date);
      valArray = JSON.stringify(valArray);
      $.post('/ajax/registration.php', {
        valArray: valArray,
        photoAvatar: photoAvatar,
        photoSrc: photoSrc
      }, function (data) {
        if (data == 1) {
          $('[href="#ok"]').click();
          // window.location.href = "/blog-polzovatelya/moy-stol/";
        } else {
          $('.errorFields').text(data);
          $('[href="#errorFields"]').click();
        }
      });
    }

  });
  $('.megapolis-search-inputL').keyup(function () {
    console.log($(this).val());
    var value = $(this).val().toLowerCase();
    $('.megapolis-peoples-lists-item').each(function (i, e) {
      $('.megapolis-peoples-lists-big-char').hide();
      var name = String($(e).find('.megapolis-peoples-lists-item-first-name').text() || '');
      var lastName = String($(e).find('.megapolis-peoples-lists-item-last-name').text() || '');
      var name_lastName = name + ' ' + lastName;
      var lastName_name = lastName + ' ' + name;
      if (name_lastName.toLowerCase().indexOf(value) !== -1 || lastName_name.toLowerCase().indexOf(value) !== -1) {
        $(e).show();
      } else {
        $(e).hide();
      }
    });
  });
  $('.megapolis-search-inputP').keyup(function () {
    console.log($(this).val());
    var value = $(this).val().toLowerCase();
    $('.megapolis-peoples-lists-letter').each(function (i, e) {
      var name = String($(e).data('first-name') || '');
      var lastName = String($(e).data('last-name') || '');
      var name_lastName = name + ' ' + lastName;
      var lastName_name = lastName + ' ' + name;
      if (name_lastName.toLowerCase().indexOf(value) !== -1 || lastName_name.toLowerCase().indexOf(value) !== -1) {
        $(e).show();
      } else {
        $(e).hide();
      }
    });
  });
  //работа с Get параметрами
  var tmp = new Array(); // два вспомагательных
  var tmp2 = new Array(); // массива
  var param = new Array();
  var get = location.search; // строка GET запроса
  if (get != '') {
    tmp = (get.substr(1)).split('&'); // разделяем переменные
    for (var f = 0; f < tmp.length; f++) {
      tmp2 = tmp[f].split('='); // массив param будет содержать
      param[tmp2[0]] = tmp2[1]; // пары ключ(имя переменной)->значение
    }
  }

  function setAttr(href, prmName, val) {
    var res = '';
    var d = href.split("#")[0].split("?");
    var base = d[0];
    var query = d[1];
    if (query) {
      var params = query.split("&");
      for (var i = 0; i < params.length; i++) {
        var keyval = params[i].split("=");
        if (keyval[0] != prmName) {
          res += params[i] + '&';
        }
      }
    }
    res += prmName + '=' + val;
    href = base + '?' + res;
    return href;
  }

  $(".setTargetBlank").on("click", function () {
    ds = this;
    $(this).closest("form").attr("target", "_blank");
    setTimeout(function () {
      $(ds).closest("form").attr("target", "_self");
    }, 1500);
  });

  //работа с Get параметрами end


  $(document).on("click", '.megapolis-abc-char a', function () {
    if ($(this).hasClass('all-edition')) {
      $('.megapolis-abc-char a').removeClass('active');
      $(this).addClass('active');
      $('.megapolis-list-view a').each(function () {
        $(this).attr('href', setAttr($(this).attr('href'), 'letter', ''));
      });
      $('.megapolis-peoples-lists-letter').show();
    } else {
      var letter = $(this).data('letter');
      $('.megapolis-peoples-lists-letter').hide();
      $('.megapolis-peoples-lists-letter[data-letter="' + letter.toUpperCase() + '"]').show();
      $('.megapolis-peoples-lists-letter[data-letter="' + letter.toLowerCase() + '"]').show();
      $('.megapolis-abc-char a').removeClass('active');
      $('.megapolis-list-view a').each(function () {
        if ($(this).attr('href').indexOf('letter') == -1) {
          $(this).attr('href', $(this).attr('href') + '&letter=' + letter);
        } else {
          $(this).attr('href', setAttr($(this).attr('href'), 'letter', letter));
        }
      });
      $(this).addClass('active');
    }
  });
  var curLetter = decodeURI(param.letter);
  if (curLetter.length > 0) {
    if ($('.megapolis-abc-char a[data-letter="' + curLetter + '"]').length) {
      $('.megapolis-abc-char a[data-letter="' + curLetter + '"]').click();
    } else {
      (function (curLetter) {
        window.findLetterTID = setInterval(function () {
          if ($('.megapolis-abc-char a[data-letter="' + curLetter + '"]').length) {
            $('.megapolis-abc-char a[data-letter="' + curLetter + '"]').click();
            clearInterval(window.findLetterTID);
          }
        });
      })(curLetter);
    }
  }
  $('.nav, .header-slider-box').animate({
    opacity: 1
  }, 500);

  // buy-magazine button parent prevent default
  $('.buy-magazine').click(function () {
    $(this).parent().click(function () {
      return false;
    });
  });


  //custom scroll bar

  function setScrollHeight(blockName, value) {
    $(blockName + " .custom-scroll-index").mCustomScrollbar({
      autoDraggerLength: false,
      setHeight: value,
      mouseWheel: {
        scrollAmount: 100
      },
      scrollbarPosition: 'outside',
      callbacks: {
        onInit: function () {
          $('.mCSB_dragger').css({
            'min-height': '11px',
            'height': '11px',
            'max-height': '11px'
          });
        }
      }
    });
  };

  setScrollHeight(".now-index", 711);
  setScrollHeight(".comments", 794);
  setScrollHeight(".blog_anonses", 982);
  setScrollHeight(".now-category", 421);


  // custom select on blog page
  $('.blog .blog-form select,.blog .ui_select_menu').each(function (index, elem) {
    if (typeof($(elem).attr("data-width")) !== "undefined") {
      ui_select_menu_width = $(elem).attr("data-width") + "px";
    } else {
      ui_select_menu_width = "160px";
    }

    if ($(this).attr("data-status") === "disable") {
      ui_select_menu_status = true;
    } else {
      ui_select_menu_status = false;
    }

    $(elem).selectmenu({
      width: ui_select_menu_width,
      disabled: ui_select_menu_status,
      create: function (event, ui) {
        $('#ui-id-3-menu').addClass('custom-scroll-index');
        var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
        if (typeof($(this).attr("multiple")) === "string") {
          SelectMenuUl.addClass("multiple");
        }
        if (typeof($(this).attr("data-theme")) === "string") {
          SelectMenuUl.parent().addClass($(this).attr("data-theme"));
        }
        //setScrollHeight(".ui-selectmenu-menu",200); // not workable
      },
      open: function (event, ui) {
        var uiSelectmenuMenuMT = $('.ui-selectmenu-menu')[0].style.marginTop.replace('px', '');
        $('.ui-selectmenu-menu').css('margin-top', uiSelectmenuMenuMT - 4 + 'px');
        $('.ui-selectmenu-menu').css('width', 160 + 'px');
        var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
        SelectMenuUl.children('li').each(function () {
          /*if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
           $(this).addClass('ui-item-active');
           } else {
           if(!SelectMenuUl.hasClass("multiple")){
           $(this).removeClass('ui-item-active');
           }
           }*/
        });
      },
      change: function (event, ui) {

        var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
        SelectMenuUl.children('li').each(function () {
          if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
            if (SelectMenuUl.hasClass("multiple")) {
              if ($(this).hasClass('ui-item-active')) {
                $(this).removeClass('ui-item-active');
              } else {
                $(this).addClass('ui-item-active');
              }
            } else {
              $(this).addClass('ui-item-active');
            }
          } else {
            if (!SelectMenuUl.hasClass("multiple")) {
              $(this).removeClass('ui-item-active');
            }
          }
        });
      }
    });
  });
  $('#select-category').selectmenu({
    width: '324px'
  });
  $('#select-category-editor').selectmenu({
    width: '324px',
    create: function (event, ui) {
      $("#select-category-editor-menu").closest(".ui-selectmenu-menu").addClass("blue-border");
    },
    change: function (event, ui) {
      var section = $('[name="SECTION_ID"]').val();
      $.post('/ajax/getTags.php', {section: section}, function (data) {
        $('.TAGS').html('');
        $('.TAGS').append(data);
        $('#select-category-tags1, #select-category-tags2, #select-category-tags3').selectmenu("refresh");
      });

    }
  });
  $('#select-category-tags1, #select-category-tags2, #select-category-tags3').selectmenu({
    width: '324px',
    create: function (event, ui) {
      $("#select-category-editor-menu").closest(".ui-selectmenu-menu").addClass("blue-border");
    }
  });
  $('.blog .blog-left-container #select-date, .blog .blog-left-container #select-year').selectmenu({
    width: '68px'
  });
  $('.blog .blog-left-container #select-month').selectmenu({
    width: '88px'
  });
  $("#select-article").selectmenu({
    width: '333px',
    create: function (event, ui) {
      $("#select-article-menu").closest(".ui-selectmenu-menu").addClass("select-article-box");
      var SelectHeight = $(this).find('option').length * 24 + 20;
      if (SelectHeight < 164) {
        SelectHeight = 164;
      } else if (SelectHeight < 228) {
        SelectHeight = 228;
      }
      var SelectWidth = '333px';
      $("#select-article-menu").closest(".ui-selectmenu-menu").mCustomScrollbar({
        autoDraggerLength: false,
        mouseWheel: {
          scrollAmount: 50
        },
        setHeight: SelectHeight,
        callbacks: {
          onInit: function () {
            $('.mCSB_dragger').css({
              'min-height': '11px',
              'height': '11px',
              'max-height': '11px'
            });
          }
        }
      });
    },
    change: function (event, ui) {
      var lead = "";
      var promo_pic = "";
      if ($(event.target).val() != 0) {
        var lead = $(ui.item.element).attr("data-lead");
        var promo_pic = $(ui.item.element).attr("data-src");
        var promo_pic_id = $(ui.item.element).attr("data-pic-id");
        $(".promoBTNs input, .promoBTNs a").removeAttr("disabled").removeClass("disabled").prop("disabled", false);
      }
      $(".promoLead").val(lead);
      $("#editPromoBlock .lnk").attr({
        "data-src": promo_pic
      });
      $("#editPromoBlock .promo_pic").val(promo_pic_id);
    }
  });

  $(".promo-article-edit").click(function () {
    $("#editPromoBlock .position").val($(this).attr("data-pos"));
    $("#editPromoBlock .promo_id").val($(this).attr("data-promo-id"));
    $("#editPromoBlock .promo_pic").val($(this).attr("data-promo-pic-id"));
    $("#editPromoBlock .lnk").attr({
      "data-src": $(this).attr("data-src")
    });
    elem = $(this).attr("data-promo-item");
    if (elem === undefined) elem = 0;
    if (elem != 0) {
      $(".promoBTNs input, .promoBTNs a").removeAttr("disabled").removeClass("disabled").prop("disabled", false);
    } else {
      $(".promoBTNs input, .promoBTNs a").attr("disabled", "disabled").addClass("disabled").prop("disabled", true);
    }
    $("#editPromoBlock select option[value='" + elem + "']").prop("selected", true);
    $("#editPromoBlock select").selectmenu("refresh");
    var lead = $("#editPromoBlock select option[value='" + elem + "']").attr("data-lead");
    $(".promoLead").val(lead);
  });

  //Для лида в редакторе статьи) должно быть 600) не затирать) или написать где изменилось
  if ($("#prev_text").length) {
    $("#prev_text").limit(600);
  }
  /////////////////////////////////////////////////
  if ($(".promoLead").length) {
    $(".promoLead").limit(130);
  }

  $("#editPromoBlock").on("click", ".btn", function () {
    form = $(this).closest("#editPromoBlock").find("form");
    var pos = $(".position", form).val();
    var promo_id = $(".promo_id", form).val();
    var article_id = $(".article_id", form).val();
    var promoLead = $(".promoLead", form).val();
    var promoPic = $(".promo_pic", form).val();
    $.post('/ajax/saveBlockPosition.php', {
      promo_id: promo_id,
      pos: pos,
      ElId: article_id,
      lead: promoLead,
      PROMO_PIC: promoPic
    }, function (data) {
      $(".close-modal").trigger("click");
      try {
        window.location.reload();
        data = jQuery.parseJSON(data);

        if ($(".promo-" + promo_id + "-item" + data.ID).length) {
          removePromo = $(".promo-" + promo_id + "-item" + data.ID);
          $(".promo-article-edit", removePromo).removeAttr("data-promo-item data-src");
          $("img", removePromo).attr({
            "src": "/bitrix/templates/artfactor/img/bg_promo.png",
            "alt": "Промо-новость"
          });
          $(".figdescription__title", removePromo).text("Промо-новость");
          $(".promo_text", removePromo).text("");
          $(".antenna, .scroll", removePromo).text('').addClass("hidden");
          $(".promo-link", removePromo).attr("href", "#");
        }

        var promo = $(".promo-" + promo_id + pos).addClass("promo-" + promo_id + "-item" + data.ID);
        $(".promo-article-edit", promo).attr({
          "data-promo-item": data.ID,
          "data-src": data.PROMO_FULL_PIC
        });
        $("img", promo).attr("src", data.PROMO_PIC);
        $(".promo-link", promo).attr("href", data.HREF);
        $(".figdescription__title", promo).text(data.NAME);
        $(".promo_text", promo).text(data.PROMO_TEXT);
        if (data.VIEWS) {
          $(".antenna", promo).text(data.VIEWS).removeClass("hidden");
        } else {
          $(".antenna", promo).addClass("hidden");
        }
        if (data.COMMENTS) {
          $(".scroll", promo).text(data.COMMENTS).removeClass("hidden");
        } else {
          $(".scroll", promo).addClass("hidden");
        }
      } catch (e) {
      }
    });
  });

  $(document).on("click", ".savePromoPhoto", function () {
    $.post('/ajax/cropPromo.php', {
      x: coords.x,
      y: coords.y,
      w: coords.w,
      h: coords.h,
      src: $("#promo_jcrop_target").attr("src"),
      name: $("#promo_jcrop_target").attr("data-file-name")
    }, function (data) {
      data = jQuery.parseJSON(data);
      $("#editPromoBlock .promo_pic").val(data.ID);
    });
  });


  //menu slider
  $('.nav').on('init', function (event, slick) {
    $('.nav').prepend('<div style="width: 100px; z-index: 0;" class="nav-inner-menu-item-active"></div>');
    $('.nav div.slick-slide.slick-active').unbind('mouseenter').mouseenter(function () { // При наведении мышки сдвигаем на соответствующий элемент
      var itemPositionLeft = $(this).offset().left;
      console.log(itemPositionLeft)
      navInnerMenuItemActiveCssTransform(itemPositionLeft - $('nav.nav').offset().left);
      $('.nav-inner-menu-item a.active').addClass('active-no-hover');
      $('.nav-inner-menu-item-active').css('width', $(this).width() + 62);
    });
  }).on('beforeChange', function (event, slick) {
    $('.nav-inner-menu-item-active').css('opacity', 0);
  }).on('afterChange', function (event, slick) {
    $('.nav div.slick-slide.slick-active').unbind('mouseenter').mouseenter(function () { // При наведении мышки сдвигаем на соответствующий элемент
      $('.nav-inner-menu-item-active').css('opacity', 1);
      var itemPositionLeft = $(this).offset().left;
      navInnerMenuItemActiveCssTransform(itemPositionLeft - $('nav.nav').offset().left);
      $('.nav-inner-menu-item a.active').addClass('active-no-hover');
      $('.nav-inner-menu-item-active').css('width', $(this).width() + 62);
    });
  });


  $('.nav').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-prev"><span></span>назад</span>',
    nextArrow: '<span class="slick-next"><span></span>вперед</span>',
    centerPadding: '2px',
    centerMode: true,
    variableWidth: true
  });

  //menu slider  -   active menu item changing
  $('.nav.categories-nav .slick-slide').click(function () {
    if ($(this).hasClass('categories-active-item')) {
      $(this).removeClass('categories-active-item');
    } else {
      $(this).addClass('categories-active-item');
      $(this).siblings().removeClass('categories-active-item');
    }

  })

  // like-button
  $('.like-button').click(function () {
    // if($(this).hasClass('like-button-clicked')){
    // $(this).removeClass('like-button-clicked');
    // $(this).text("поддержать");
    // }else{
    $(this).addClass('like-button-clicked');
    $(this).text("1");
    // }
  });

  function loadLikes() {
    setTimeout(function () {
        if ($('.diary-video-slider-item-like').length > 0) {
          var likesButtons = [];
          $('.diary-video-slider-item-like').each(function () {
            likesButtons.push($(this).attr('data-id'));
          });
          $.ajax({
            method: 'POST',
            url: "/ajax/loadLikes.php",
            data: {'element_id': likesButtons},
            success: function (data) {
              console.log(data);
              data = JSON.parse(data);
              $.each(data, function () {
                var self = $('.diary-video-slider-item-like[data-id="' + this['ID'] + '"]').get(0);
                var whoLikes = this['WHO_LIKES'];
                $(self).attr('data-user', this['AUTHOR']);
                if ((this['LIKED'] || getCookie('liked' + this['ID'])) && this['LIKES'] > 0) {
                  $(self).addClass('like-button-clicked');
                  $(self).html(this['LIKES']);
                }
                if (whoLikes.length > $('.support-this-post a').length) {
                  var span = $('.support-this-post').find('span');
                  if (span.length == 0) {
                    $('.diary-video-detail-more-information-b').append('<div class="diary-video-detail-members support-this-post"> <span>Эту видеозапись поддерживают:</span></div>');
                    span = $('.support-this-post').find('span');
                  }
                  $('.support-this-post').html("");
                  $('.support-this-post').append(span);
                  $.each(whoLikes, function (key) {
                    $('.support-this-post').append(' <a href="/blog-polzovatelya/dnevnik/' + this[0] + '">' + this[1] + '</a>');
                    if (key < whoLikes.length - 1) {
                      $('.support-this-post').append(', ');
                    }
                  });
                }
                if (this['LIKES'] > 0) {
                  $(self).parents('.diary-video-slider-item1').find('.thumbs-up').html(this['LIKES']);
                  $(self).parents('.diary-video-detail').find('.thumbs-up').html(this['LIKES']);
                }
              })

            }
          })
        }
      },
      1);
  }

  loadLikes();
  $('.diary-b').click(function () {
    loadLikes();
  });


  $('.diary-video-slider-item-like').click(function () {
    if ($(this).hasClass("like-button-clicked")) return;
    self = this;
    var element_id = $(this).attr('data-id');
    prop = $(this).attr('data-prop');
    if (prop === undefined) {
      prop = "like";
    }
    var user_id = $(this).data('user');
    var isLiked = getCookie('liked' + element_id);
    if (isLiked == undefined) {
      $.post('/ajax/addLikeAndViews.php', {
        plusOrMinus: 'plus',
        element_id: element_id,
        UID: user_id,
        prop: prop
      }, function (data) {
        $(".video-block__showing .thumbs-up").html(data);
        $(".video_block_id_" + element_id + " .y_liked").val("Y");
        $(".video_block_id_" + element_id + " .y_likes").val(data);
        $(self).addClass('like-button-clicked');
        $(self).text(data);
        setCookie('liked' + element_id, 1, {
          'expires': 31536000
        });
      });
    }
    if (typeof updateLikes === "function") {
      updateLikes(user_id);
    }
  });
  // scroll up button
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn(300);
      } else {
        $('#toTop').fadeOut(300);
      }
    });
    $('#toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
  });

  if ($('.detail-sidebar-fixed').length > 0) {
    var topHeight = $('.left-container').offset().top - 80;
  }

  $(document).keyup(function (e) {
    if (e.keyCode == 27) { // Нажатие на кнопку esc (escape)
      $('#browsers').selectmenu("close");
    }
  });
  // fixed orange menu & Right Sidebar
  $(window).scroll(function (e) {
    if ($('.blocker ').length > 0) {
      e.preventDefault();
    }
    var st = 0;
    if ($('body').hasClass('index')) {
      var st = 171;
    }
    if ($(this).scrollTop() > st && !isMobile.any() && window.outerHeight > 600) {
      if ($('body').hasClass('index')) {
        $('.mini-logo').fadeIn(200);
      }
      if ($('#bx-panel').length > 0) {
        $('.orange-bg').addClass('orange-bg-fixed-admin');
      } else {
        $('.orange-bg').addClass('orange-bg-fixed');
      }
    } else {
      if ($('body').hasClass('index')) {
        $('.mini-logo').fadeOut(200);
      }
      $('.orange-bg').removeClass('orange-bg-fixed orange-bg-fixed-admin');
    }
    fixedRightSidebar();
  });

  function fixedRightSidebar() {
    if ($('.detail-sidebar-fixed').length > 0) {
      var element = $('.detail-sidebar-fixed-box');
      var elementHeight = element.height();
      var bottomHeight = $('.left-container').offset().top + $('.left-container').outerHeight();
      if (elementHeight > $('.left-container').outerHeight()) {
        $('.detail-sidebar-fixed').removeClass('detail-sidebar-fixed');
      }
      if ($(this).scrollTop() + $(this).height() > bottomHeight) {
        element.removeClass('active');
        element.addClass('active-bottom');
        element.css('top', $('.left-container').outerHeight() - elementHeight - 10);
        element.css('bottom', 'initial');
      } else if ($(this).scrollTop() + $(this).height() > elementHeight + topHeight + 43) {
        element.addClass('active');
        element.removeClass('active-bottom');
        element.css('top', 'initial');
        element.css('bottom', '10px');
      } else {
        element.removeClass('active');
        element.removeClass('active-bottom');
        element.css('top', 'initial');
        element.css('bottom', '0px');
      }
    }
  }

  //sections rubricator tabs
  $("#tabs").tabs({
    active: 2,
    activate: function (event, ui) {
      // console.log(ui.newPanel.attr("id"));
      if (ui.newPanel.hasClass("map_tab") && !ui.newPanel.hasClass("map_init")) {
        ui.newPanel.addClass("map_init");
        var map = new google.maps.Map(document.getElementById('address_map'), {
          center: {
            lat: 59.90016259899734,
            lng: 30.319564435937533
          },
          zoom: 11
        });
        map.markers = [];
        geocoder = new google.maps.Geocoder();
        window.skip_address = jQuery(".points_box .point");
        putMarks(window.skip_address);

        function putMarks(skip_address) {
          skip_address.each(function (index, elem) {
            var coords = jQuery(elem).attr("data-coords");
            var address = jQuery(elem).attr("data-address");
            name = jQuery(elem).text();
            coords = coords.split('_');
            key = jQuery(elem).attr("key");
            var lat = coords[0];
            var lng = coords[1];
            var geocoder = new google.maps.Geocoder();
            var coord;
            if (!lat) {
              geocoder.geocode({'address': address}, function (results, status) {
                coord = results ? results[0].geometry.location : false;
                if (!coord) return;
                lat = coord.lat();
                lng = coord.lng();
                $.post('/ajax/writeCoords.php', {
                  address: address,
                  lat: lat,
                  lng: lng
                }, function (data) {

                });
                jQuery(elem).attr("lat", lat);
                jQuery(elem).attr("lng", lng);
                point = new google.maps.LatLng(lat, lng);
                var marker = new google.maps.Marker({
                  position: point,
                  map: map,
                  title: name + "<br>" + address
                });
                marker.address = address;

                marker.addListener('click', function () {
                  if (map.infowindow) {
                    map.infowindow.close();
                  }
                  map.infowindow = new google.maps.InfoWindow({
                    content: this.title
                  });
                  map.infowindow.open(map, this);
                });
                map.markers[key] = marker;
              });
            } else {
              jQuery(elem).attr("lat", lat);
              jQuery(elem).attr("lng", lng);
              point = new google.maps.LatLng(lat, lng);
              var marker = new google.maps.Marker({
                position: point,
                map: map,
                title: name + "<br>" + address
              });
              marker.address = address;

              marker.addListener('click', function () {
                if (map.infowindow) {
                  map.infowindow.close();
                }
                map.infowindow = new google.maps.InfoWindow({
                  content: this.title
                });
                map.infowindow.open(map, this);
              });
              map.markers[key] = marker;
            }

          });
        }

        jQuery(".points_box .point").click(function () {
          lat = $(this).attr("lat");
          lng = $(this).attr("lng");
          key = $(this).attr("key");
          map.panTo(new google.maps.LatLng(lat, lng));
          map.setZoom(14);
          if (map.markers[key] !== undefined) {
            if (map.infowindow) {
              map.infowindow.close();
            }
            map.infowindow = new google.maps.InfoWindow({
              content: map.markers[key].title
            });
            map.infowindow.open(map, map.markers[key]);
          }
        });
      }
      //if()
      var curTab = ui.newPanel.attr("id");
      $('input[name="form_text_20"]').val(window[curTab]);
    },
    create: function (event, ui) {
      jQuery("#tabs .open").trigger("click");
    }
  });

  $('.inner-news-tape').on('init', function (slick) {
    $('.inner-news-tape').css('opacity', '1');
  });

  $('.inner-news-tape').slick({
    // infinite: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '<span class="slick-prev"><span></span>назад</span>',
    nextArrow: '<span class="slick-next"><span></span>вперед</span>',
  });

  $('.diary-category-filter-item-select').on('chosen:ready', function (evt, params) {
    $('.diary-category-filter-item-scroll .chosen-drop').mCustomScrollbar({
      autoDraggerLength: false,
      mouseWheel: {
        scrollAmount: 50
      },
      callbacks: {
        onInit: function () {
          $('.mCSB_dragger').css({
            'min-height': '11px',
            'height': '11px',
            'max-height': '11px'
          });
        }
      }
    });
  });

  // $('.diary-category-filter-item-select').on('change', function(evt, params){
  //  console.log(evt);
  //  $('.chosen-container').click();
  //  $('.diary-category-filter-item-calendar').mousedown();
  // });
  function autocomplete(input, SelectMenuUl, max) {
    var selecMenu = $(this);
    var max = max || 10000;
    input.keyup(function () {
      var value = $(this).val().toLowerCase();
      var amount = 0;
      SelectMenuUl.children('li').each(function () {
        if ($(this).text().toLowerCase().indexOf(value) !== -1 && amount < max && !!$(this).text().trim()) {
          $(this).show();
          amount += 1;
        } else {
          $(this).hide();
        }
      });
    });
  }

  $('.diary-category-filter-item-select-new').selectmenu({
    create: function (event, ui) {
      var SelectWidth = $(this).width();
      $('.ui-selectmenu-menu').mCustomScrollbar({
        setWidth: SelectWidth,
        autoDraggerLength: false,
        mouseWheel: {
          scrollAmount: 50
        },
        callbacks: {
          onInit: function () {
            $('.mCSB_dragger').css({
              'min-height': '11px',
              'height': '11px',
              'max-height': '11px'
            });
          }
        }
      });
    },
    open: function (event, ui) {
      var uiSelectmenuMenuMT = $('.ui-selectmenu-menu')[0].style.marginTop.replace('px', '');
      $('.ui-selectmenu-menu').css('margin-top', uiSelectmenuMenuMT - 4 + 'px');
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      changeDatelable();
      SelectMenuUl.children('li').each(function () {
        if ($(this).text() == 'Календарь') {
          $(this).addClass('calendar-point');
        }
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
      if ($(this).attr('name') == 'tags') {
        $('.tags-search').remove();
        SelectMenuUl.prepend('<input type="text" class="tags-search">');
        autocomplete.call(this, $('.tags-search'), SelectMenuUl);
      }

      if ($(this).attr('name') == 'seo') {
        SelectMenuUl.find('.ui-menu-item').each(function (i, e) {
          $(e).html('<a style="color: #4a5c65" href="' + window.location.pathname + $('[name="seo"] option')
            .eq(i).attr('value') + '">' + $(e).text() + '/</a>');
        });

      }
      if (this.id === 'browsers') {
        autocomplete.call(this, $('#browserinput'), SelectMenuUl, 20);
        $('#browsers-menu').parents('.ui-selectmenu-menu').addClass('choice-user');
        $('#browsers-button').attr('tabindex', -1);
      }
    },
    change: function (event, ui) {
      if (this.id === 'browsers') {
        $('#browserinput').val(ui.item.value);
        $('#browserinput').trigger('input');
      }
      else {
        selectError = false;
        var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
        SelectMenuUl.children('li').each(function () {
          if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
            $(this).addClass('ui-item-active');
          } else {
            $(this).removeClass('ui-item-active');
          }
        });
        $(this).closest('form').find('select').each(function () {
          if ($(this).val().length == 0) {
            selectError = true;
          }
        });
        if (!inputError && !selectError) {
          var href = "#profile";
          $(this).closest('form').next().find('[href="#life-position"]').next().addClass("current");
          $("[href='" + href + "']").attr('rel', 'modal:open').parent().removeClass("current").addClass("filled");
          $(this).parents('form').find(".go-next").css("visibility", "visible");
        }
        $(".toValidate", $(this).closest('form')).each(function (index, elem) {
          if ($(elem).val() == "") {
            $(elem).attr("disabled", "disabled");
          } else {
            $(elem).removeAttr("disabled");
          }
        });
        var curName = $(this).attr("name");
        var curVal = $(this).val();
        var curForm = $(this).closest('form');
        if (curName == 'datetime' && curVal == 999) {

        } else if (curName == 'rubric') {
          var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            arGetParams = [],
            sGetParams = "",
            first = true;
          if (sPageURL != "") {
            var sURLVariables = sPageURL.split('&');
            for (i = 0; i < sURLVariables.length; i++) {

              sParameterName = sURLVariables[i].split('=');
              if (['rubric', 'PAGEN_1', 'journal', 'SECTION_CODE'].indexOf(sParameterName[0]) == -1) {
                arGetParams[sParameterName[0]] = (sParameterName[1] === undefined) ? true : sParameterName[1];

                if (first) {
                  first = false;
                  sGetParams += "?" + sParameterName[0] + "=" + sParameterName[1];
                } else {
                  sGetParams += "&" + sParameterName[0] + "=" + sParameterName[1];
                }
              }
            }
            console.log(sGetParams);
          }
          if (curVal == "") {
            window.location.href = $(curForm).attr('data-action') + sGetParams;
          } else {
            window.location.href = $(curForm).attr('data-action') + curVal + "/" + sGetParams;
          }
        } else {
          if ($(this).attr('name') == 'seo') {
            console.log(window.location.href);
            window.location.href = window.location.pathname + $(this).val() + '/';
          } else {
            $('#filterForm').submit();
          }
        }
      }
    },
    focus: function (event, ui) {
      if (event.originalEvent.eventPhase > 0) {
        if (event.currentTarget.innerText == 'Календарь') {
          $('.diary-category-filter-item-option-calendar-date').show();
        } else {
          $('.diary-category-filter-item-option-calendar-date').hide();
        }
      }
    },
    close: function (event, ui) {
      setTimeout(function () {
        $('.diary-category-filter-item-option-calendar-date').hide();
      }, 100);
    }
  });

  $('#browserinput').on('click keyup', function () {
    if ($('#browsers-menu').height() < 0) {
      $('#browsers').selectmenu("open");
      $($('#browsers-menu').children()[0]).hide();
    }
  })
  $('#browserinput').on('blur', function () {
    $('#browsers').selectmenu("close");
  })

  $(".sort-item").click(function () {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      arGetParams = [],
      sGetParams = $(this).attr("href");
    if (sPageURL != "") {
      var sURLVariables = sPageURL.split('&');
      for (i = 0; i < sURLVariables.length; i++) {

        sParameterName = sURLVariables[i].split('=');
        if (['rubric', 'SECTION_CODE', 'sort', 'PAGEN_1'].indexOf(sParameterName[0]) == -1) {
          arGetParams[sParameterName[0]] = (sParameterName[1] === undefined) ? true : sParameterName[1];

          sGetParams += "&" + sParameterName[0] + "=" + sParameterName[1];
        }
      }
    }
    window.location.href = window.location.pathname + sGetParams;
    return false;
  });

  $('#filterForm').on("submit", function () {
    $(".toValidate", this).each(function (index, elem) {
      if ($(elem).val() == "") {
        $(elem).attr("disabled", "disabled");
      } else {
        $(elem).removeAttr("disabled");
      }
    });
  });

  $('.diary-category-filter-item-option-calendar-date').pickmeup({
    format: 'd.m.Y',
    flat: true,
    locale: {
      days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'December'],
      monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    },
    change: function (formatted_date) {
      $('.diary-category-filter-item-option-calendar-date-input').val(formatted_date);
      $(this).siblings('.ui-widget').children('.ui-selectmenu-text').text(formatted_date);
      console.log($('.diary-category-filter-item-option-calendar-date-input'));
    }
  });


  $('.diary-category-filter-item-calendar').datetimepicker({
    timepicker: false,
    format: 'd.m.Y',
    todayButton: false
  });
  $.datetimepicker.setLocale('ru');

  $('.diary-category-filter-item-select').chosen({
    disable_search_threshold: 10000
  });

  $('.diary-video-slider').slick({
    fade: true,
    prevArrow: '<a href="javascript:void(0);" class="diary-video-slider-item video-block__video-prev"><span></span></a>',
    nextArrow: '<a href="javascript:void(0);" class="diary-video-slider-item video-block__video-next"><span></span></a>',
  });

  $('.diary-video-slider-item-more-information').click(function () {
    $(this).toggleClass('diary-video-slider-item-more-information--up');
    if ($(this).hasClass('diary-video-slider-item-more-information--up')) {
      $(this).text('Меньше информации');
    } else {
      $(this).text('Больше информации');
    }
    $(this).parents('.diary-video-slider-item-info').siblings('.diary-video-slider-item-more-information-b').slideToggle();
  });

  $('.diary-video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.diary-video-slider-item-more-information-b').slideUp();
    $('.diary-video-slider-item-more-information').removeClass('diary-video-slider-item-more-information--up').text('Больше информации');
  });

  var topMenuLiActive = 0;
  $('.top-menu > li').each(function () {
    if ($(this).hasClass('active')) {
      topMenuLiActive = 1;
    }
  });
  if (topMenuLiActive == 1) {
    $('.top-menu').addClass('top-menu--active');
  }

  $('.diary-video-list-general-menu-added-text').click(function () {
    $(this).parent('.diary-video-list-general-menu-added-text-wrap').toggleClass('open');
  });
  $('.diary-video-list-general-menu-added-list-item').click(function () {
    $(this).parents('.diary-video-list-general-menu-added-text-wrap').removeClass('open');
  });

  // Анимированное меню
  function navInnerMenuItemActiveCssTransform(positionLeft) { // Функция сдвига
    $('.nav-inner-menu-item-active').css({ // Менять позиуию через css параметр transform: translateX (работает быстрее и лучше)
      '-webkit-transform': 'translateX(' + positionLeft + 'px)',
      '-ms-': 'translateX(' + positionLeft + 'px)',
      '-o-transform': 'translateX(' + positionLeft + 'px)',
      'transform': 'translateX(' + positionLeft + 'px)',
    });
  }

  function navInnerMenuItemStateActive(moveWindow) { // Сдвигаем анимацию к активному элементу
    $('.nav-inner-menu-item').each(function () {
      if ($(this).children('a').hasClass('active')) {
        var itemPositionLeft = $(this).position().left;
        navInnerMenuItemActiveCssTransform(itemPositionLeft);
      }
    });
    if (window.location.hash != "" && $('[data-id="' + window.location.hash + '"]').length > 0 && moveWindow != false) {
      setTimeout(function () {
        var windowHeight = $(window).height() / 2 + 50;
        $(window).scrollTop($('[data-id="' + window.location.hash + '"]').offset().top - windowHeight)
      }, 1000);
    }
  }

  navInnerMenuItemStateActive();
  $('.nav-inner-menu-item').mouseenter(function () { // При наведении мышки сдвигаем на соответствующий элемент
    var itemPositionLeft = $(this).position().left;
    navInnerMenuItemActiveCssTransform(itemPositionLeft);
    $('.nav-inner-menu-item a.active').addClass('active-no-hover');
  });
  $('.nav-inner-menu-item').mouseleave(function () { // При удалении курсора с элемента возвращаем плашку к активному элементу
    if ($(this).children('a').hasClass('active')) {
      return;
    } else {
      navInnerMenuItemStateActive(false); // До этого при удалении курсора сдвигал на точку якоря
      $('.nav-inner-menu-item a.active').removeClass('active-no-hover');
    }
  });

  $('.inner-news-tape  .categories-block__figure .figcaption').mouseenter(function () {
    $('.inner-news-tape .slick-arrow').css('display', 'none');
  });
  $('.inner-news-tape  .categories-block__figure .figcaption').mouseleave(function () {
    $('.inner-news-tape .slick-arrow').css('display', 'block');
  });

  setTimeout(function () {
    drawCommentsLines();
  }, 1000);

  $(document).on("click", ".updateSendMailContent", function () {
    var id = ".content_" + $(".ui-tabs-active a").attr('data-page');
    $("#form-send-by-email textarea").removeAttr("name");
    $("#form-send-by-email " + id).attr("name", $("#form-send-by-email " + id).attr('data-name'));
  });

  //$("img.lazy").lazyload();
  $("img.lazy").each(function (index, elem) {
    $(elem).attr('src', $(elem).data('original'));
  });


  // наведение на иконку
  // $('#big_people_block_pics').delegate('a', 'mouseenter', function() {
  // наведение на сетку над иконкой
  $(document).on(
    'mouseenter',
    '.megapolis-peoples-list-spans .megapolis-people-span',
    function () {

      var animateHTo = "left",
        animateVTo = "top";

      /*
       * наведение на сетку на стене
       */
      var _about_this_man_block_pic_container = $('.megapolis-people-detail-picture-container'),
        _about_this_man_block_name_container = $('.megapolis-people-detail-name'),
        _big_image = _about_this_man_block_pic_container
          .find('img'),
        _big_people_block_pics = $('.megapolis-peoples-list'),
        _img_people_pics = _big_people_block_pics
          .find('a > img'),
        _spans_big_people_hover_block = $('.megapolis-peoples-list-spans .megapolis-people-span'),

        // блок с именем виден
        _about_this_man_block_name_container_is_visible = false,

        // позиция для большой картинки
        _big_image_css = {},

        // позиция контейнера имени
        _name_container_css = {},

        // ширина контейнера имени
        _name_container_width = 0;

      //                    m = new Date();
      //                    console.log ('t' + m.getTime());
      _about_this_man_block_name_container_is_visible = true;
      // d.css($(this).position());

      _about_this_man_block_pic_container.show();
		var pathArray = window.location.pathname.split('/');
			
		if (pathArray[2] == 'partners') {
			var setka = 182;
			var middleV = 4;
			var shift_left = 0;
		} else {
			var setka = 92;
			var middleV = 5;
			var shift_left = 92;
		}
		
      // число строк
      var rows = _big_people_block_pics.height() / setka;

      var area_width = _big_people_block_pics.width();
		
      // средняя линия, начиная с которой показывать блок выше
      var middle = parseInt((rows + 1) / 2);
		if (pathArray[2] == 'partners') {
			middle = rows;
		}
      // вертикальная позиция иконки
      var top = $(this).position().top;
      _big_image_css.position = 'absolute';
      if (top / setka < middle) {
        // показать блок ниже
        _about_this_man_block_pic_container.css({
          top: top
        });

        // картинка 182х182
        // _big_image.css({ top: 0 });
        _big_image_css.top = 0;

        // имя ниже
        _name_container_css.top = top + 1;
        // _about_this_man_block_name_container.css({ top: top
        // });
        // console.log('ниже');
      } else {
        animateVTo = "bottom";
        // показать блок выше
        _about_this_man_block_pic_container.css({
          top: top - setka
        });

        // картинка 182х182
        // _big_image.css({ top: 80 });
        _big_image_css.bottom = 0;

        // имя выше
        _name_container_css.top = top - setka - 1;
        // _about_this_man_block_name_container.css({ top: top -
        // 80 });
        // console.log('выше');
      }

      // число столбиков
      // var cols = 9;//$('#big_people_block_pics').width() / 80;
      // middleV
      //var middleV = 5;

      var left = $(this).position().left;

      if (left / setka < middleV) {
        // анимация на право
        _about_this_man_block_pic_container.css({
          left: left
        });

        // картинка 182х182
        // _big_image.css({ left: 0 });
        _big_image_css.left = 0;

        if (left / setka < middleV) {
          // имя на право
          _name_container_css.left = (left + 92 * 2) + 1;
          _name_container_css.right = 'auto';
          _name_container_width = area_width -
            _name_container_css.left - 3;
          _about_this_man_block_name_container[0].style.textAlign = "left";
          // _about_this_man_block_name_container.css({ left:
          // left + 90 * 2});
        } else {
          // имя на лево
          _name_container_css.left = 'auto';
          _name_container_css.right = area_width - left + 1;
          _name_container_width = left - 2;
          _about_this_man_block_name_container[0].style.textAlign = "right";
          // _about_this_man_block_name_container.css({ left:
          // 'auto', right: area_width - left });
          // console.log('left');
        }
      } else {
        animateHTo = "right";
        // анимация на лево
        _about_this_man_block_pic_container.css({
          left: left - setka
        });

        // картинка 160х160
        // _big_image.css({ left: 80 });
        _big_image_css.right = 0;

        // имя на лево
        _name_container_css.left = 'auto';
        _name_container_css.right = area_width - left + shift_left + 1;
        _name_container_width = left - shift_left;
        _about_this_man_block_name_container[0].style.textAlign = "right";

        // _about_this_man_block_name_container.css({ left:
        // 'auto', right: area_width - left + 80 });
        // console.log('на слева');
      }

      // индекс текущего span среди других hover-span
      var index = $(this).index();


      var userName = _big_people_block_pics.find('a').eq(index).data('first-name');
      var userLastName = _big_people_block_pics.find('a').eq(index).data('last-name');
      $('.megapolis-people-detail-first-name').text(userName);
      $('.megapolis-people-detail-last-name').text(userLastName);


      // картинка текущего юзера
      var _current_src = _img_people_pics.eq(index).attr('src');

      // _current_src = _current_src.replace(/(.).jpg/,
      // '$1_big.jpg');
      _big_image.attr('src', _current_src);

      // анимация большой картинки
      // console.log(_big_image_css, _big_image.position());
      _big_image.removeAttr("style").css(_big_image_css).css({
        width: '90px',
        height: '90px'
      }).stop(true).animate({
        animateVTo: 0,
        animateHTo: 0,
        width: 182,
        height: 182
      }, function () {
        // по окончании анимации переместить имя и увеличить
        // ширину до реальной
        // _about_this_man_block_name_container_is_visible = true;
        $('.megapolis-people-detail-name-table').show();
        _about_this_man_block_name_container.css({
          width: 0
        }).css(_name_container_css).animate({
          width: _name_container_width
        });
      });
    });

  $(document).on(
    'mouseleave',
    '.megapolis-peoples-list-spans .megapolis-people-span',
    function () {


      /*
       * наведение на сетку на стене
       */
      var _about_this_man_block_pic_container = $('.megapolis-people-detail-picture-container'),
        _about_this_man_block_name_container = $('.megapolis-people-detail-name'),
        _big_image = _about_this_man_block_pic_container
          .find('img'),
        _big_people_block_pics = $('.megapolis-peoples-list'),
        _img_people_pics = _big_people_block_pics
          .find('a > img'),
        _spans_big_people_hover_block = $('.megapolis-peoples-list-spans .megapolis-people-span'),

        // блок с именем виден
        _about_this_man_block_name_container_is_visible = false,

        // позиция для большой картинки
        _big_image_css = {},

        // позиция контейнера имени
        _name_container_css = {},

        // ширина контейнера имени
        _name_container_width = 0;


      //                            m = new Date();
      //                          console.log (m.getTime());
      //_about_this_man_block_name_container_is_visible = false;
      var _about_this_man_block_animate;

      /*
       * if
       * (_about_this_man_block_name_container_is_visible)
       * _about_this_man_block_name_container.stop(true).animate({
       * width: 0 }, function() {
       * _about_this_man_block_name_container_is_visible =
       * false; });
       */
      _about_this_man_block_name_container_is_visible = false;
      if (_about_this_man_block_name_container_is_visible || 1 == 1)
        _about_this_man_block_name_container
          .stop(true)
          .css({
              width: 0
            },
            function () {
              _about_this_man_block_name_container_is_visible = false;
            });

      _big_image.stop(true).css(_big_image_css).css({
        width: '90px',
        height: '90px'
      });
      $('.megapolis-people-detail-name-table').hide();
      _about_this_man_block_pic_container.hide();
    });

  // Слайдер на странице статьи
  $('.article-text-slider-arrow-prev').click(function () {
    $(this).parent('.article-text-slider-controls').siblings('.article-text-slider').slick('slickPrev');
  });
  $('.article-text-slider-arrow-next').click(function () {
    console.log('123');
    $(this).parent('.article-text-slider-controls').siblings('.article-text-slider').slick('slickNext');
  });
  $('.article-text-slider').on('afterChange', function (slick, currentSlide) {
    $(this).siblings('.article-text-slider-controls').find('.article-text-slider-controls-count-current').text($(this).slick('slickCurrentSlide') + 1);
    if ($(this).slick('slickCurrentSlide') == 0) {
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-prev').addClass('article-text-slider-arrow-prev-disable');
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-next').removeClass('article-text-slider-arrow-next-disable');
    } else if (($(this).slick('slickCurrentSlide') + 1) == $(this).find('.article-text-slider-item').length) {
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-next').addClass('article-text-slider-arrow-next-disable');
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-prev').removeClass('article-text-slider-arrow-prev-disable');
    } else {
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-prev').removeClass('article-text-slider-arrow-prev-disable');
      $(this).siblings('.article-text-slider-controls').find('.article-text-slider-arrow-next').removeClass('article-text-slider-arrow-next-disable');
    }
  });
  $('.article-text-slider').slick({
    lazyLoad: 'ondemand',
    arrows: false,
    infinite: false,
    useCSS: true
  });

  // Изменение размера шрифта статьи
  $('.article-text-zoom-plus').click(function () {
    if ($('.article-text p').css('font-size') == '16px') {
      $('.article-text p').css('font-size', '18px');
	  $('.article-epilog').css('font-size', '18px');
	  $('.article-epilog').css('line-height', '22px');
    } else if ($('.article-text p').css('font-size') == '18px') {
      $('.article-text p').css('font-size', '20px');
	  $('.article-epilog').css('font-size', '20px');
	  $('.article-epilog').css('line-height', '24px');
    } else {
      return;
    }
  });
  $('.article-text-zoom-minus').click(function () {
    if ($('.article-text p').css('font-size') == '18px') {
      $('.article-text p').css('font-size', '16px');
	  $('.article-epilog').css('font-size', '16px');
	  $('.article-epilog').css('line-height', '20px');
    } else if ($('.article-text p').css('font-size') == '20px') {
      $('.article-text p').css('font-size', '18px');
	  $('.article-epilog').css('font-size', '18px');
	  $('.article-epilog').css('line-height', '22px');
    } else {
      return;
    }
  });

  // Раскрывание/скрывание выпадашки "промо-блок"
  $('.article-add-to-block-select').click(function () {
    $(this).parent('.article-add-to-block-b').toggleClass('active').after("<div class='article-add-to-block-b-blocker'></div>");
  });
  $(document).on("click", ".article-add-to-block-b-blocker", function () {
    $(".article-add-to-block-b").removeClass("active");
    $(this).remove();
  });


  // Подписаться/отписаться на странице пользователя
  $('body.user-authorize .header-inner-left-square.first').click(function () {
    var user = $(this).data('user'),
      self = $(this);
    if (user) {
      if ($(this).hasClass('unfollow')) {
        $.post('/ajax/subscribeA.php', {
          user: user,
          action: 'unfollow'
        }, function () {
          self.text('подписаться');
          self.toggleClass('unfollow');
        });
      } else {
        $.post('/ajax/subscribeA.php', {
          user: user
        }, function () {
          self.text('отписаться');
          self.toggleClass('unfollow');
        });
      }
    }
  });

  // Костыль добавление в промо-блок
  $(".article-add-to-block-list input").keyup(function () {
    promo_pos = $(this).val();
    console.dir(promo_pos);
    $(this).siblings(".article-add-to-block-number").each(function (index, elem) {
      if ($(this).text() == promo_pos) {
        $(this).trigger("click");
      }
    });
    return false;
  });

  $('.article-add-to-block-number').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass('active');
      $(this).siblings('input').val("");
      var upper = $('.upper-block').val();
      var bottom = $('.bottom-block').val();
      if (!upper && !bottom) {
        $(".article-add-to-block-select").text("Показывать в промо-блоке");
      }
    } else {
      $(".article-add-to-block-select").text("Статья в промо-блоке");
      $(this).siblings('input').val($(this).text());
      $(this).siblings(".article-add-to-block-number").removeClass("active");
      $(this).addClass('active');
    }
    var ElId = $(this).closest('.article-add-to-block-list').attr("data-id");
    var upper = $('.upper-block').val();
    var bottom = $('.bottom-block').val();
    if (upper !== undefined || bottom !== undefined) {
      $.post('/ajax/saveBlockPosition.php', {
        upper: upper,
        bottom: bottom,
        ElId: ElId
      }, function (data) {

      });
    }
    //setTimeout(function(){
    //$(this).parents('.article-add-to-block-b').removeClass('active');
    //},5);
  });

  // Кастомные селекты в форме оформления подписки
  $('.subscribe-form-l-select-1').selectmenu({
    width: 88,
    open: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    },
    change: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    }
  });
  $('.subscribe-form-l-select-2').selectmenu({
    width: 67,
    open: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    },
    change: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    }
  });
  $('.subscribe-form-r-contacts').selectmenu({
    width: 318,
    open: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    },
    change: function (event, ui) {
      var SelectMenuUl = $('.ui-selectmenu-menu').find('ul#' + $(this).attr('id') + '-menu');
      SelectMenuUl.children('li').each(function () {
        if ($(this).attr('id') == SelectMenuUl.attr('aria-activedescendant')) {
          $(this).addClass('ui-item-active');
        } else {
          $(this).removeClass('ui-item-active');
        }
      });
    }
  });

  // Кастомные чекбоксы в форме оформления подписки
  $('.subscribe-form-r-payment-checkbox, .ui_checkbox').iCheck({
    checkboxClass: 'icheckbox_minimal',
  });

  $("#form-send-by-email form").on("submit", function () {
    $(this).prepend('<p class="sendemail-notetext">Письмо успешно отправлено!</p>');
  });

  // subscribe validation


  // fancybox
  $('.article-slider-fancybox').attr('rel', 'article-slider-fancybox').fancybox();

  // Развёртывание комментария
  $('.diary-video-detail-comment-item-short-show').click(function () {
    $(this).parents('.diary-video-detail-comment-item-wrap').toggleClass('short');
    var allShow = true;
    $(".diary-video-detail-comments-list .diary-video-detail-comment-item-wrap").each(function (index, elem) {
      if ($(elem).hasClass("short")) {
        allShow = false;
      }
    });
    $(".article-comments-hide").removeClass("active");
    if (allShow) {
      $(".article-comments-show").addClass("active");
      $(".diary-video-detail-comments-b").removeClass("hideLines");
    } else {
      $(".diary-video-detail-comments-b").addClass("hideLines");
    }
  });

  // Свёртывание/развёртывание комментариев
  $('.article-comments-hide').click(function () {
    if (!$(this).hasClass('active')) {
      $('.article-comments-show').removeClass('active');
      $(this).addClass('active');
      $(".diary-video-detail-comments-b").addClass("hideLines");
      $('.diary-video-detail-comment-item-wrap').addClass('short');
      $('.diary-video-detail-comment-item-wrap').parent('li').addClass('short-li');
    }
  });
  $('.article-comments-show').click(function () {
    if (!$(this).hasClass('active')) {
      $('.article-comments-hide').removeClass('active');
      $(this).addClass('active');
      $(".diary-video-detail-comments-b").removeClass("hideLines");
      $('.diary-video-detail-comment-item-wrap').removeClass('short');
      $('.diary-video-detail-comment-item-wrap').parent('li').removeClass('short-li');
    }
  });

  // Такой же адрес
  $('.subscribe-form-r-payment-checkbox.same-address').on('ifChecked', function (event) {
    $('.subscribe-form-r-delivery-country').val($('.subscribe-form-r-contacts-country').val());
    $('.subscribe-form-r-delivery-post').val($('.subscribe-form-r-contacts-post').val());
    $('.subscribe-form-r-delivery-city').val($('.subscribe-form-r-contacts-city').val());
    $('.subscribe-form-r-delivery-address').val($('.subscribe-form-r-contacts-address').val());
  });

  // Согласен с условиями подписки
  $('.subscribe-form-r-payment-checkbox.subscribe-form-r-agreement').on('ifChecked', function (event) {
    $('.subscribe-form-r-step-forward').removeAttr('disabled').removeClass('unactive');
  });
  $('.subscribe-form-r-payment-checkbox.subscribe-form-r-agreement').on('ifUnchecked', function (event) {
    $('.subscribe-form-r-step-forward').attr('disabled', 'disabled').addClass('unactive');
  });
  $('.subscribe-form-r-step-back').click(function () {
    location.href = 'http://21mm.ru/journal/subscribe/';
  });
  $("input[type='radio'].subscribe-form-r-payment").change(function () {
    colsole.log("test");
  });

  // Проверка заполненности полей формы подписки на 2 шаге
  $('.subscribe-form-r-step-forward').click(function () { 
    var i = 0;
    $('.subscribe-form input[type="text"]').each(function () {
      if (($(this).val() == '') && !$(this).hasClass('unrequired')) {
        i++;
        $(this).parent('label').addClass('empty');
        $(this).siblings('.subscribe-form-r-contacts-label-empty').remove();
        $(this).after('<div class="subscribe-form-r-contacts-label-empty">Не заполнено поле</div>');
      } else {
        $(this).parent('label').removeClass('empty');
        $(this).siblings('.subscribe-form-r-contacts-label-empty').remove();
      }
    });
	 
    if (i > 0) {
      return false;
    } else {
      if ($('.card').prop('checked')) { 
        var amount = parseInt($('.subscribe-price-amount1').text()) + (parseInt($('.subscribe-price-amount2').text()) || 0);
        var tovar = $('.chosed-subscribe-time-insert1').text()+' '+$('.chosed-subscribe-time-insert2').text();
        var mrh_login = $('[name="MrchLogin"]').val();
        var inv_id = $('[name="InvId"]').val();
        var item_id = $('[name="Shp_id"]').val();
        if (amount > 0) {
          $('[name="OutSum"]').val(amount);
          var rcp = encodeURI(JSON.parse('{"sno": "osn","items": [{"name": "ММ журнал, подписка ' + tovar + '","quantity": 1,"sum": ' + amount + ',"payment_method":"full_payment","payment_object":"commodity","tax": "vat120"}]}'));
          var msg = $('.subscribe-form').serialize();
          $.ajax({
            type: 'POST',
            url: '/ajax/newTransaction.php',
            data: msg,
            success: function (data) {
              if (data) {
                $('[name="Shp_item"]').val('sub' + data);
                $('[name="Receipt"]').val(rcp);
                var shp_item = $('[name="Shp_item"]').val();
                var md5 = $.md5(mrh_login + ":" + amount + ":" + inv_id + ":" + rcp + ":jfXo1Sz600Y9uJCRtxku" + ":Shp_id=" + item_id + ":Shp_item=" + shp_item);
                $('[name="SignatureValue"]').val(md5);
                $('#robokassa').submit();
              }
              return false;
            },
            error: function (xhr, str) {
              return false;
            }
          });
        }
        return false;
      } else {
        return false;
      }
    }
  });

  $('.fancybox').fancybox();

  $('#feed-phone').mask("+7 (999) 999-99-99");

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }


  // Календарь

  var monthList = ["Январь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  $('.calendar-head').find('a').click(function () {
    $('.filter-calendar').addClass('active');
    $('.filter-calendar .calendar-days .calenday-day-link').removeClass('active');
  });

  $('.filter-calendar .calendar-days .calenday-day-link').click(function () {
    $('.filter-calendar').removeClass('active');
    $('.filter-calendar .calendar-days .calenday-day-link').removeClass('active');
    $(this).addClass('active');
  });

  $('.calendar-right').click(function () {
    $('.filter-calendar').removeClass('active');
    GenCalendar(1);
  })

  $('.calendar-left').click(function () {
    $('.filter-calendar').removeClass('active');
    GenCalendar(-1);
  })

  $('.calendar-head').find('a').click(function () {
    ChoiceMonth();
  })

  $('.filter-calendar').on('click', '.calenday-day-link', function () {
    var date = $(this).data('date');
    ChoiceDate(date);
  });

  $('body').on('click', '.calendar-point', function () {
    $('.filter-calendar').find('tbody').empty();
    changeDatelable();
    GenCalendar(0);
    $('.filter-calendar').addClass('show');
  });

  $('body').on('click', function (e) {
    if ($(e.target).parents('.filter-calendar').hasClass('filter-calendar') || $(e.target).hasClass('ui-menu-item')) {
      return;
    } else if ($('.filter-calendar').hasClass('show')) {
      changeDatelable();
      $('.filter-calendar').data('month', current_month_m);
      $('.filter-calendar').data('year', current_year);
      $('.filter-calendar').find('.calendar-head').find('a').html(current_month_M + ', ' + current_year);
      $('.filter-calendar').find('tbody').empty();
      $('.filter-calendar').removeClass('show');
    }
  });
  var current_month_m = $('.filter-calendar').data('month');
  var current_month_M = monthList[parseInt(current_month_m)];
  var current_year = $('.filter-calendar').data('year');
  var current_day = $('.filter-calendar').data('day');

  changeDatelable();

  function changeDatelable() {
    if ($('.filter-calendar').data('active') == 'M') {
      $('.diary-category-filter-list.selects-3').find('.diary-category-filter-item:first-child').find('.ui-selectmenu-text').text(current_month_M + ', ' + current_year);
      $('.filter-calendar').addClass('active');
    } else if ($('.filter-calendar').data('active') == 'D') {
      $('.filter-calendar').data('month', current_month_m);
      $('.filter-calendar').data('year', current_year);
      $('.current_day').data('day', current_day);
      console.dir($('.diary-category-filter-list.selects-3').find('.diary-category-filter-item:first-child'));
      $('.diary-category-filter-list.selects-3').find('.diary-category-filter-item:first-child').find('.ui-selectmenu-text').text(current_day + '.' + current_month_m + '.' + current_year);
    }
  }


  function GenCalendar(direction) {
    var month = $('.filter-calendar').data('month');
    var year = $('.filter-calendar').data('year');
    $.post('/ajax/filter-calendar.php', {
      month: month,
      year: year,
      direction: direction,
      url: window.location.href
    }, function (data, result) {
      if (result == 'success') {
        arr = data.split('::');
        var visibleData = monthList[parseInt(arr[1])] + ', ' + arr[2];
        $('.filter-calendar').find('.calendar-head').find('a').html(visibleData);
        $('.filter-calendar').data('month', arr[1]);
        $('.filter-calendar').data('year', arr[2]);
        $('.filter-calendar').find('tbody').empty();
        $('.filter-calendar').find('tbody').append(arr[0]);
        console.log((month)); // Для дебага
      }
    });
  }

  function ChoiceMonth() {
    var month = $('.filter-calendar').data('month');
    var year = $('.filter-calendar').data('year');
    $('input[name="calendar-date"]').val('').attr("disabled", "disabled");
    $('input[name="calendar-month"]').val(month).removeAttr("disabled");
    $('input[name="calendar-year"]').val(year).removeAttr("disabled");
    $('select[name="datetime"] option[value="999"]').prop('selected', true);
    $('#filterForm').submit();
  }

  function ChoiceDate(date) {
    $('input[name="calendar-date"]').val(date).removeAttr("disabled");
    $('select[name="datetime"] option[value="999"]').prop('selected', true).removeAttr("disabled");
    $('#filterForm').submit();
  }

  // Конец Календарь
  //Опрос
  if ($('.voting-list-box').length > 0) {
    $('.vote-type-chose').click(function () {
      if ($(this).hasClass('active')) {
        return false;
      } else {
        $('.vote-type-chose').toggleClass('active');
        $('.vote-items-list.voting-list-box').toggleClass('active');
        $('.vote-list-top .votes-amount').toggleClass('active');
      }
    });
    vote_list_order();

  }

  $('[href="#editPromoPhoto"]').click(function () {
    $("#new-promo-pic, #url-promo-pic").val('');
    $(".promo-file-name").text("Файл не выбран");
    if (window.promoApi !== undefined) {
      window.promoApi.destroy();
    }
    $('#promo_jcrop_target').attr({
      "src": $(this).attr("data-src")
    }).removeAttr("data-file-name");
    $('#promo_jcrop_target').load(function () {
      $('#promo_jcrop_target').Jcrop({
        onSelect: writeCoords,
        bgColor: 'black',
        bgOpacity: .4,
        setSelect: [0, 0, 241, 238],
        aspectRatio: 241 / 238
      }, function () {
        window.promoApi = this;
      });
    })
  });

  $("#new-promo-pic").change(function () {
    $(".promo-file-name").text(this.files[0].name);
    input_file = this;
    var fr = new FileReader();
    fr.onload = function () {
      $('#promo_jcrop_target').attr({
        "src": fr.result,
        "data-file-name": input_file.files[0].name
      });
      $('#promo_jcrop_target').load(function () {
        if (window.promoApi !== undefined) {
          window.promoApi.destroy();
        }
        $('#promo_jcrop_target').Jcrop({
          onSelect: writeCoords,
          bgColor: 'black',
          bgOpacity: .4,
          setSelect: [0, 0, 241, 238],
          aspectRatio: 241 / 238
        }, function () {
          window.promoApi = this;
        });
      });
    };
    fr.readAsDataURL(this.files[0]);
  });

  $('.unsubscribe').click(function () {
    if (confirm("Вы уверены")) {
      var id = $(this).data("id"),
        self = this;
      $.post('/ajax/unsubRubrick.php', {
        id: id
      }, function (data) {
        if (data == 1) {
          $(self).parent().remove();
        }
      });
    }
  });

  $("#url-promo-pic").change(function () {
    var url = $(this).val();
    $.post("/ajax/createFile.php", {
      SRC: url
    }, function (data) {
      try {
        data = jQuery.parseJSON(data);
        $('#promo_jcrop_target').attr({
          "src": data.SRC
        });
        $('#promo_jcrop_target').load(function () {
          if (window.promoApi !== undefined) {
            window.promoApi.destroy();
          }
          $('#promo_jcrop_target').Jcrop({
            onSelect: writeCoords,
            bgColor: 'black',
            bgOpacity: .4,
            setSelect: [0, 0, 241, 238],
            aspectRatio: 241 / 238
          }, function () {
            window.promoApi = this;
          });
        });
      } catch (e) {
      }
    });
  });

  $('[data-lazy]').each(function (index, elem) {
    if ($(elem).attr('src') === undefined || $(elem).attr('src') == "") {
      $(elem).attr('src', $(elem).data('lazy')).removeAttr('data-lazy');
    }
  });


});

function vote_list_order() {
  $('.voting-list-box').each(function () {
    var vote_height_list = new Array();
    var vote_element_list = new Array();
    var i = 0;
    var element = '';
    var margin = 0;
    var true_this = $(this);
    $(this).find('.voting-form-box').each(function () {
      i++;
      vote_height_list.push($(this).height() + $(this).offset()['top']);
      vote_element_list.push($(this));
      if (i % 3 == 0 && i != 1) {
        var max = Math.max.apply(null, vote_height_list);
        vote_element_list.forEach(function (item, k, vote_element_list) {
          element = true_this.find('.voting-form-box')[k + i];
          margin = max - (item.height() + item.offset()['top']);
          $(element).css('margin-top', -margin + 'px');
        });
        vote_element_list = new Array();
        vote_height_list = new Array();
      }
    });
  });
}


var i = 0;
var opros_i = 0;
var viktorina_i = 0;
var sidebar_i = 0;

function loadMoreVotes(votesId, type, sidebar) {
  sidebar = sidebar || false;
  console.log(sidebar);
  if (type == 'opros') {
    opros_i += 3;
    i = opros_i;
  } else if (type == 'viktorina') {
    viktorina_i += 3;
    i = viktorina_i;
  } else if (type == 'sidebar') {
    sidebar_i += 3;
    i = sidebar_i;
  }
  $.post('/ajax/loadMoreVotes.php', {
    votesId: votesId,
    I: i,
    sidebar: sidebar
  }, function (data, result) {
    if (result == 'success' && sidebar == false) {
      $(".voting-list-box.active").find('.votes-more').append(data);
    } else if (result == 'success') {
      $(".vote-list-sidebar").find('.votes-more').append(data);
    }
  });
};

function showMoreVotes(count_elems) {
	var elemClassCounter = $('#counterrow').text();
	 $('.voterow' + elemClassCounter).show();
	elemClassCounter ++;
	$('#counterrow').text(elemClassCounter);
	if (elemClassCounter*3 >= count_elems) {
		$('.showe-more').hide();
	};
}

$('.megapolis-people-span').click(function () {
  var data_id = $(this).data('id');
  $('.megapolis-peoples-list').find("[data-id=" + data_id + "]")[0].click();
});

$('.subscribe-form-month').click(function () {
  if (!$(this).hasClass('disable')) {
    $(this).toggleClass('checked');
  }
  subscribeFormCalculator();
  subscribeFormCalculator1();
})
$('.comment-like').click(function () {
  if (!$(this).hasClass('active')) {
    var self = this;
    var userId = $(this).data('userid'),
      commentId = $(this).data('commentid');
    $.post('/ajax/commentLikes.php', {
      userId: userId,
      commentId: commentId
    }, function (data) {
      if (data == 1) {
        $(self).addClass('active');
      }
    });
  }
});

$(document).on('click touchstart', '.setHidden', function () {
  var id = $(this).attr('data-id');
  (function (id) {
    $.ajax({
      type: 'POST',
      url: '/ajax/commentAction.php',
      data: 'messID=' + id,
      success: function (data) {
        $("#hidd_" + id).remove();
      }
    });
  })(id);
});

$(document).on('click touchstart', '.hide-all-comments', function () {
  for (let key in $('.setHidden')) {
    let comment = $('.setHidden')[key];
    id = $(comment).attr('data-id');
    (function (id) {
      $.ajax({
        type: 'POST',
        url: '/ajax/commentAction.php',
        data: 'messID=' + id,
        success: function (data) {
          $("#hidd_" + id).remove();
        }
      });
    })(id);
  }
  $('ul.pagination').css('display', 'none');
});

function countDown(el) {
  var count = Number($(el).text());
  if (count > 0) {
    $(el).text(count - 1);
  }
}

$(document).on('click touchstart', '.setVisited', function (e) {
  ds = this;
  var id = $(this).attr('data-commentid');
  $.ajax({
    type: 'POST',
    url: '/ajax/commentAction.php',
    data: 'id_vis=' + id,
    success: function (data) {
      $(ds).closest(".news-feed-block_comment").removeClass("new-msg").addClass("old-msg");
      countDown($('.login-block-messages span'));
      countDown($('.comments-button').get(0));
      location.href = $(ds).attr('href');
    }
  });
});

$(document).on("click", ".elemCopyTo", function () {
  $(".answer_box").empty();
  $($(this).attr("data-href")).html($("#comment_message").html());
  if ($($(this).attr("data-href")).hasClass("lk-answer_box")) {
    $($(this).attr("data-href")).show();
  }
  $(".answer_box .tooltip").tooltip();
  if ($(this).hasClass("editComment")) {
    var cId = $(this).attr("data-commentid");
    $(".action", $($(this).attr("data-href"))).val("editComment");
    $(".comment_id", $($(this).attr("data-href"))).val(cId);
    var content = $("[data-id = '#comment_" + cId + "']").parent().find(".diary-video-detail-comment-item-body").html();
    $(".copyContentTo", $($(this).attr("data-href"))).html(content);
  } else {
    $(".post_or_comment_id", $($(this).attr("data-href"))).val(cId);
    $(".action", $($(this).attr("data-href"))).val("addComment");
    $(".answer_for", $($(this).attr("data-href"))).val($(this).attr("data-id"));
  }
  if ($(this).attr("data-article-id") !== undefined) {
    $(".ARTICLE_ID", $($(this).attr("data-href"))).val($(this).attr("data-article-id"));
  }
  $("form", $($(this).attr("data-href"))).addClass("bc-lvl-" + $(this).attr("data-level"));
  drawCommentsLines();
});

$(document).on("click", ".cm_close", function () {
  if ($(this).closest(".answer_box").hasClass("lk-answer_box")) {
    $(this).closest(".answer_box").hide();
  }
  $(this).closest(".answer_box").empty();
  drawCommentsLines();
});


function copyToClipboard(elem) {
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    target = document.getElementById(targetId);
    if (!target) {
      var target = document.createElement("textarea");
      target.style.position = "absolute";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.style.display = "invisible";
      target.id = targetId;
      document.body.appendChild(target);
    }
    if ($(elem).hasClass("cml")) {
      target.textContent = location.origin + location.pathname + $(elem).attr("data-href");
    } else {
      target.textContent = location.href;
    }
  }
  var currentFocus = document.activeElement;
  target.select();
  target.setSelectionRange(0, target.value.length);
  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  if (isInput) {
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    target.textContent = "";
  }
  return succeed;
}
$('.article-footer-choice-item input').change(function(){
	subscribeFormCalculator()
	subscribeFormCalculator1()
})
function subscribeFormCalculator() {
  var sum = 0;
  var price = 0;
  var year = false;
  var month = [];
  var checked = 0;
  var first = '';
  var path = false;
  $('.chosed-subscribe-time-insert1').text('');
  $('.subscribe-form-l-selects-b1').each(function () {
    price = $('.article-footer-choice1 input:checked').data('price');
    sum += price * $(this).find('.checked').length;
    if ($(this).find('.checked').length > 0) {
      year = $(this).find('.subscribe-form-year1').text();
    }
    $(this).find('.subscribe-form-month1').each(function () {
      if ($(this).hasClass('checked') && checked == 0) {
        first = $(this).text().substr(0, 3).toLowerCase();
        month.push(first);
        checked = 1;
      } else if ($(this).hasClass('checked') && checked == 1) {
        checked = 1;
        path = first + ' - ' + $(this).text().substr(0, 3).toLowerCase();
      } else {
        if (path) {
          month.pop();
          month.push(path);
        }
        path = false;
        checked = 0;
      }
    });
    if (path) {
      month.pop();
      month.push(path);
    }
    path = false;
    checked = 0;
    console.log(month[month.length - 1]);
    if (year && month) {
      month = month.join(', ');
      $('.chosed-subscribe-time-insert1').append('<br>' + year + ': ' + month);
    }
    year = false;
    month = [];

  })

  $('.subscribe-price-amount1').text(sum + ' руб.');
  $('#sumPrice').val(sum);
  $('#sumDate').val($('.chosed-subscribe-time-insert1').html() + ' ' + $('.chosed-subscribe-time-insert1').html());
}

function subscribeFormCalculator1() {
  var sum = 0;
  var price = 0;
  var year = false;
  var month = [];
  var checked = 0;
  var first = '';
  var path = false;
  $('.chosed-subscribe-time-insert2').text('');
  $('.subscribe-form-l-selects-b2').each(function () {
    price = $('.article-footer-choice2 input:checked').data('price');
    sum += price * $(this).find('.checked').length;
    if ($(this).find('.checked').length > 0) {
      year = $(this).find('.subscribe-form-year2').text();
    }
    $(this).find('.subscribe-form-month2').each(function () {
      if ($(this).hasClass('checked') && checked == 0) {
        first = $(this).text().substr(0, 3).toLowerCase();
        month.push(first);
        checked = 1;
      } else if ($(this).hasClass('checked') && checked == 1) {
        checked = 1;
        path = first + ' - ' + $(this).text().substr(0, 3).toLowerCase();
      } else {
        if (path) {
          month.pop();
          month.push(path);
        }
        path = false;
        checked = 0;
      }
    });
    if (path) {
      month.pop();
      month.push(path);
    }
    path = false;
    checked = 0;
    console.log(month[month.length - 1]);
    if (year && month) {
      month = month.join(', ');
      $('.chosed-subscribe-time-insert2').append('<br>' + year + ': ' + month);
    }
    year = false;
    month = [];

  })

  $('.subscribe-price-amount2').text(sum + ' руб.');
  $('#sumPrice').val(+$('#sumPrice').val()+sum);
  $('#sumDate').val($('.chosed-subscribe-time-insert1').html() + ' ' + $('.chosed-subscribe-time-insert2').html());
}

function drawCommentsLines() {
  $('.diary-video-detail-comment-item.reply').each(function () {
    var thisPrevSiblingHeight = $(this).prev().height() - 25;
    if ($(this).prev().length > 0) {
      $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-reply-line-v-middle')
        .css('bottom', thisPrevSiblingHeight + 'px');
    } else {
      $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-reply-line-v-middle')
        .addClass('diary-video-detail-comment-item-reply-line-v-middle-fifth')
        .css('top', '50%');
    }

    if ($(this).parent('.diary-video-detail-comments-list').hasClass('diary-video-detail-comments-list-depth-level-2')) {
      var distanceFromParentY = $(this).position().top - 19,
        topPositionThis = distanceFromParentY - 17;
    } else {
      var distanceFromParentY = $(this).position().top - 4,
        topPositionThis = distanceFromParentY - 17;
    }
    $(this).children('.diary-video-detail-comment-item-wrap').find('.diary-video-detail-comment-item-reply-line-v').css({
      'height': distanceFromParentY + 'px',
      'top': '-' + topPositionThis + 'px'
    });

    var usernameSpanLeft = $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-username-reply')
        .position().left + 38,
      usernameSpanPositionX = $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-username-reply')
        .position().left + 27;
    if ($(this).parent('.diary-video-detail-comments-list').hasClass('diary-video-detail-comments-list-right')) {
      var usernameSpanPositionX = usernameSpanPositionX - 20,
        usernameSpanLeft = usernameSpanLeft - 20;
      $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-username-reply span').css({
        'width': usernameSpanPositionX + 'px',
        'left': '-' + usernameSpanLeft + 'px'
      });
    } else {
      var itemWidth = $(this).width(),
        usernameReplySpanLeft = $(this)
          .children('.diary-video-detail-comment-item-wrap')
          .find('.diary-video-detail-comment-item-username-reply')
          .position().left + 132,
        usernameReplyWidth = $(this)
          .children('.diary-video-detail-comment-item-wrap')
          .find('.diary-video-detail-comment-item-username-reply')
          .width(),
        resultReplySpanWidth = itemWidth - usernameReplySpanLeft - usernameReplyWidth,
        resultReplySpanRight = resultReplySpanWidth + 17,
        resultReplySpanWidthProof = resultReplySpanWidth + 4;

      var resultReplySpanWidthProof = resultReplySpanWidthProof - 20,
        resultReplySpanRight = resultReplySpanRight - 20;
      $(this)
        .children('.diary-video-detail-comment-item-wrap')
        .find('.diary-video-detail-comment-item-username-reply span').css({
        'width': resultReplySpanWidthProof + 'px',
        'right': '-' + resultReplySpanRight + 'px'
      });
    }
  });
}

var saveSelection, restoreSelection;

if (window.getSelection && document.createRange) {
  saveSelection = function (containerEl) {
    var doc = containerEl.ownerDocument,
      win = doc.defaultView;
    var range = win.getSelection().getRangeAt(0);
    var preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(containerEl);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    var start = preSelectionRange.toString().length;

    return {
      start: start,
      end: start + range.toString().length
    };
  };

  restoreSelection = function (containerEl, savedSel) {
    var doc = containerEl.ownerDocument,
      win = doc.defaultView;
    var charIndex = 0,
      range = doc.createRange();
    range.setStart(containerEl, 0);
    range.collapse(true);
    var nodeStack = [containerEl],
      node, foundStart = false,
      stop = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
        var nextCharIndex = charIndex + node.length;
        if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
          range.setStart(node, savedSel.start - charIndex);
          foundStart = true;
        }
        if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
          range.setEnd(node, savedSel.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        var i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    var sel = win.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };
} else if (document.selection) {
  saveSelection = function (containerEl) {
    var doc = containerEl.ownerDocument,
      win = doc.defaultView || doc.parentWindow;
    var selectedTextRange = doc.selection.createRange();
    var preSelectionTextRange = doc.body.createTextRange();
    preSelectionTextRange.moveToElementText(containerEl);
    preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);
    var start = preSelectionTextRange.text.length;

    return {
      start: start,
      end: start + selectedTextRange.text.length
    };
  };

  restoreSelection = function (containerEl, savedSel) {
    var doc = containerEl.ownerDocument,
      win = doc.defaultView || doc.parentWindow;
    var textRange = doc.body.createTextRange();
    textRange.moveToElementText(containerEl);
    textRange.collapse(true);
    textRange.moveEnd("character", savedSel.end);
    textRange.moveStart("character", savedSel.start);
    textRange.select();
  };
}

function publicationSubmitModal() {
  if ($('#name').val() != "" && ($('#PREVIEW_IMAGE').val() != "" || $('input[name="old_img"]').val() != "") && $('#prev_text').val() != "" && $('.bxhtmled-textarea').val() != "") {
    $('#publicationSubmitModal').trigger('click');
    $('#sendPublicationMessage .close-modal').remove();

    return true;
  }
}

$(".r2").selectmenu({
  create: function (event, ui) {
    console.log('123');
    var menuWidget = $(this).selectmenu("menuWidget");
    console.log(menuWidget.find('.ui-menu-item'))
    $(this).find(':selected').each(function () {
      console.log($(this).index());
    });
  },
  open: function (event, ui) {
    console.log('123');
    var menuWidget = $(this).selectmenu("menuWidget");
    console.log(menuWidget.find('.ui-menu-item'))
    $(this).find(':selected').each(function () {
      console.log($(this).index());
    });
  },
  close: function (event, ui) {
    var menuWidget = $(this).selectmenu("menuWidget");
    var index = 0;
    var item = '';
    $(this).find(':selected').each(function () {
      index = $(this).index();
      if (index != 0) {
        console.log(menuWidget.find('.ui-menu-item').index(index));
        $(menuWidget.find('.ui-menu-item').index(index)).addClass('ui-item-active');
      }
    });
  },
});

$(".r1").on("selectmenuopen", function (event, ui) {
  var menuWidget = $(this).selectmenu("menuWidget");
  var index = 0;
  var item = '';
  $(this).find(':selected').each(function () {
    index = $(this).index();
    if (index != 0) {
      menuWidget.find('.ui-menu-item').eq(index).addClass('ui-item-active');
    }
  });

});

$(".diary-video-detail-comment-item-link").on('click', function () {
  $(this).css('color', '#ee5000');
  $(this).tooltip({
    items: "a",
    content: "Ссылка добавлена в буфер обмена",
    disabled: false,
    open: function (event, ui) {
      ui.tooltip.css({
        "max-width": "400px",
        "font-size": "18px"
      });
    }
  }).tooltip("open");
  setTimeout(function () {
    console.log($(this));
    $(".diary-video-detail-comment-item-link").tooltip({
      disabled: true
    });
  }, 3000);
});

var rotateCloser = rotate();
$('.refresh-comments').on('click touchstart', refreshComments);
$('body').on('click touchstart', '.refresh-messages', refreshMessages);

function rotate() {
  var iteration = 0;
  return function (element) {
    iteration++;
    element.css('transform', 'rotate(' + 360 * iteration + 'deg)');
  }
}

$("[id^='all_mess_']").on($.modal.OPEN, function (event, modal) {
  messagesScrollBar();
});

function refreshComments() {
  rotateCloser($(this).children('div'));
  var oldChild = document.querySelector('.most-popular__list.news-feed-block.msg-block'),
    countAllNew = 0;
  $(oldChild).fadeOut();
  $.ajax({
    url: "/ajax/refreshComments.php",
    dataType: 'html',
    success: function (data) {
      var newChild = $(data).find('.most-popular__list.news-feed-block.msg-block')[0];
      newChild.setAttribute('style', 'display: none;');
      var parent = oldChild.parentNode;
      parent.replaceChild(newChild, oldChild);
      $(newChild).fadeIn();
      $(document).on('click', ".most-popular__list.news-feed-block.msg-block a", function (e) {
        document.location.href = this.href;
      });
    },
    error: function (data) {
      $(oldChild).fadeIn();
    }
  });
  $.post('/ajax/getCountComments.php', {}, function (data) {
    countAllNew += Number(data);
    $('.diary-category-item:nth-child(1) .comments-button').text(data);
  });
  $.post('/ajax/getCountMess.php', {}, function (data) {
    countAllNew += Number(data);
    $('.mess-button').text(data);
    $('.login-block-messages span').text(countAllNew);
  });
}

function refreshMessages() {
  rotateCloser($(this).children('div'));
  var countAllNew = 0;
  $.post('/ajax/getCountMess.php', {}, function (data) {
    countAllNew += Number(data);
    $('.mess-button').text(data);
  });
  rotateCloser($(this).children('div'));
  var oldChild = document.querySelector('.most-popular__list.news-feed-block.msg-block');
  var oldMessages = document.querySelector('.allMess');
  $(oldChild).fadeOut();
  $.ajax({
    url: "/ajax/refreshMessages.php",
    dataType: 'html',
    success: function (data) {
      var newChild = $(data).find('.most-popular__list.news-feed-block.msg-block')[0];
      newChild.setAttribute('style', 'display: none;');
      var parent = oldChild.parentNode;
      parent.replaceChild(newChild, oldChild);
      $(newChild).fadeIn();
      $(document).on('click', ".most-popular__list.news-feed-block.msg-block a", function (e) {
        document.location.href = this.href;
      });
      var newMessages = $(data).find('.allMess')[0],
        parent = oldMessages.parentNode;
      parent.replaceChild(newMessages, oldMessages);
      $(".comment_message-body").mCustomScrollbar(
        {
          callbacks: {
            onUpdate: scrollToBottom
          }
        }
      );
    },
    error: function (data) {
      $(oldChild).fadeIn();
    }
  });
  $.post('/ajax/getCountComments.php', {}, function (data) {
    countAllNew += Number(data);
    $('.diary-category-item:nth-child(1) .comments-button').text(data);
    $('.login-block-messages span').text(countAllNew);
  });
}


function scrollToBottom() {
  var container = $(this).find('.mCSB_container'),
    containerTop = container.height() - $(this).height(),
    draggerConteinerHeight = $(this).find('.mCSB_draggerContainer').height(),
    dragger = $(this).find('.mCSB_dragger'),
    draggerTop = draggerConteinerHeight - dragger.height();
  container.css('top', '-' + containerTop + 'px');
  setTimeout(function () {
    dragger.css('top', draggerTop + 'px')
  }, 50);
}