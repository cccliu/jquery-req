define(['jquery','text!tamplate/demoList.html','text!tamplate/componentCustom.html','css!css/customSign.css'],function($,demoListHtml,componentCustomHtml){
    var $tamplate=$('#template'),
        demoListHtml=demoListHtml,
        componentCustomHtml=componentCustomHtml;
    return{
        fill:function(template){
              render();
              function render(){
                  $tamplate.html(template.compile(demoListHtml)({
                      contents:template.compile(componentCustomHtml)({
                          litte:'待阿斯蒂芬阿什顿发按时间待发货爱仕达尽快发货傻大姐开发'
                      })
                  }));
              };
            $tamplate.delegate('.dian','click',function(){
                window.location.hash = '#!js/checkCustomer';
            });
        }
    };
});
