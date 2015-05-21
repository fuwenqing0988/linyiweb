function init_province(){
    $.ajax({
        type:'GET',
        url: '/area/province',
        dataType: 'json',
        async:false,
        success:function(msg){
            var options='<option value="-1" selected="selected">选择省</option>';
            var msgarr=eval(msg.message);
            alert(msgarr.length);
            for (var i=0; i<msgarr.length; i++)
            {
                obj = msgarr[i];
                if(obj.bValid==1)
                alert(obj.bValid);
                option='<option value="'+obj.sCode+'">'+obj.sName+'</option>'
                options+=option;
            }
            $('#sel_province').html(options);
        }
    });
}

function test_province(){
    $.ajax({
        type:'GET',
        url: '/area/province',
        dataType: 'json',
        async:false,
        success:function(msg){
            $('#sel_show').html(JSON.stringify(msg));
        }
    });
}

function test_city(city_code){
    $.ajax({
        type:'GET',
        url: '/area/city',
        dataType: 'json',
        data:{'code':city_code},
        async:false,
        success:function(msg){
            alert(JSON.stringify(msg));
        }
    });
}

function test_getpfsclist(){
    $.ajax({
        type:'GET',
        url: '/pfsctest/getlist',
        dataType: 'json',
        async:false,
        success:function(msg){
            alert(JSON.stringify(msg));
        }
    });
}

function test_getmainpagetop(){
    $.ajax({
        type:'GET',
        url: '/pfsctest/getmainpagetop',
        dataType: 'json',
        async:false,
        success:function(msg){
            alert(JSON.stringify(msg));
        }
    });
}