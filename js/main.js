$(function() {
    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat", 'yy/mm/dd' );

    //select要素の取得
    const element = document.getElementById('all');
    
    //変更イベントを監視
    element.addEventListener('change', splitByLine);

    function splitByLine(event) {
        var positionArray = ['sento_pink', 'sento_blue', 'sento_green'];
        positionArray.forEach(function(text) {
            $(text).value = '';
        });

        var text  = $("#all").value.replace(/\r\n|\r/g, "\n");
        var lines = text.split( '\n' );
        var outArray = new Array();
    
        for ( var i = 0; i < lines.length; i++ ) {
            // 空行は無視する
            if ( lines[i] == '' ) {
                continue;
            }
    
            outArray.push( lines[i] );
        }
    
        outArray.forEach(function(text, i) {
            $(positionArray[i]).value = text;
        });
    }
});
