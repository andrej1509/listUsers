window.onload = function()
{
    $.ajax({
        type: 'POST',
        url: "phplibs/dbquery.php",
        data: '',
        success: function(response){
            handlerResponse(JSON.parse(response));
        },
        error: function(){
            console.log("false");
        }
    });
}

$(document).on( "click", "a.clear-user", function() {
    $('.pop-up-del .box p').empty();
    var w = $(document.activeElement).parent().siblings().eq(0).text();
    var n = $(document.activeElement).parent().siblings().eq(1).text();
    $('.pop-up-del .box p').append("<span>"+w+"</span>. "+n+"");
    $('.wrap_popup_del').css("display", 'block');
    event.stopPropagation();
});

$(".pop-up-del a.yes").click(function(event){
    var data = {number: $('.pop-up-del p span').text(), delete: true};
    $.ajax({
        type: 'POST',
        url: "phplibs/dbquery.php",
        data: data,
        success: function(response){
            handlerResponse(JSON.parse(response));
        },
        error: function(){
            console.log("false");
        }
    });
    $(".wrap_popup_del").css("display", "none");
    event.stopPropagation();
})

$("a.button_add").click(function(event) {
  $(".wrap_popup").css("display", "block");
  event.stopPropagation();
})

$("form.pop-up .close-button").click(function(event) {
  $(".wrap_popup").css("display", "none");
  event.stopPropagation();
})


$('.pop-up-del a.close-button, .pop-up-del a.no').click(function(event) {
  $('.wrap_popup_del').css("display", 'none');
  event.stopPropagation();
})


$('.buttons a').click(function(event) {
  sendQuery();
  event.stopPropagation();
})

function sendQuery(){
    var data = {number: $('#number').val(),fullname: $('#fullname').val(), birthdate: $('#birthdate').val(), phone: $('#phone').val(),active: 1};
    $.ajax({
        type: 'POST',
        url: "phplibs/dbquery.php",
        data: data,
        success: function(response){
            handlerResponse(JSON.parse(response));
        },
        error: function(){
            console.log("false");
        }
    });
}

function handlerResponse(respObj){
    if(respObj.data_r == 2){
        $('.wrap_fields ul').append("<li><div class='wrap_row'><div class='row'><div class='mcol col-md-2 col-sm-2 col-xs-2'><p>"+$('#number').val()+"</p></div><div class='mcol col-md-4 col-sm-4 col-xs-4'><p>"+$('#fullname').val()+"</p></div><div class='mcol col-md-3 col-sm-3 col-xs-3'><p>"+$('#birthdate').val()+"</p></div><div class='mcol col-md-2 col-sm-2 col-xs-2'><p>"+$('#phone').val()+"</p></div><div class='ocol col-md-1 col-sm-1 col-xs-1'><a href='#' class='clear-user'><i class='fa fa-trash-o fa-2x'></i></a></div></div></div></li>");
        $(".wrap_popup").css("display", "none");
    }
    else if(respObj.data_r==3){
        alert("Пользователь с таким номером уже есть в базе");
        return;
    }else if(respObj.data_r==4){

    }else if(respObj.data_r.length>0){
        for (var i=0; i < respObj.data_r.length; i++){
            $('.wrap_fields ul').append("<li><div class='wrap_row'><div class='row'><div class='mcol col-md-2 col-sm-2 col-xs-2'><p>"+respObj.data_r[i][1]+"</p></div><div class='mcol col-md-4 col-sm-4 col-xs-4'><p>"+respObj.data_r[i][2]+"</p></div><div class='mcol col-md-3 col-sm-3 col-xs-3'><p>"+new Date(respObj.data_r[i][3]).toLocaleDateString()+"</p></div><div class='mcol col-md-2 col-sm-2 col-xs-2'><p>"+respObj.data_r[i][4]+"</p></div><div class='ocol col-md-1 col-sm-1 col-xs-1'><a href='#' class='clear-user'><i class='fa fa-trash-o fa-2x'></i></a></div></div></div></li>");
        }

    } else if(respObj.data_r==5) {
        for (var m = 1; m < $('.wrap_fields ul li').length; m++){
            if(respObj.num_del == (+$('.wrap_fields ul li').eq(m).children().children().children().eq(0).text())){
                $('.wrap_fields ul li').eq(m).empty();
            }
        }
    }

}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEN1c3RvbVxyXG4gKi9cclxuXHJcbiQoXCJhLmJ1dHRvbl9hZGRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgJChcIi53cmFwX3BvcHVwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxufSlcclxuXHJcbiQoXCJmb3JtLnBvcC11cCAuY2xvc2UtYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgJChcIi53cmFwX3BvcHVwXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KVxyXG5cclxuJCgnYS5jbGVhci11c2VyJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAkKCcud3JhcF9wb3B1cF9kZWwnKS5jc3MoXCJkaXNwbGF5XCIsICdibG9jaycpO1xyXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG59KVxyXG5cclxuJCgnLnBvcC11cC1kZWwgYS5jbG9zZS1idXR0b24sIC5wb3AtdXAtZGVsIGEubm8nKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICQoJy53cmFwX3BvcHVwX2RlbCcpLmNzcyhcImRpc3BsYXlcIiwgJ25vbmUnKTtcclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxufSlcclxuXHJcbiQoJy5idXR0b25zIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgc2VuZFF1ZXJ5KCk7XHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzZW5kUXVlcnkoKXtcclxuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xyXG59Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
