$(function(){
    //get dom elem
    var $width=$('#width'),
        $height=$('#height'),
        $btncal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /**calc button click event */
    $btncal.click(function(){
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFractional(2*(w+h),1),
            a=roundFractional(w*h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });

    

});