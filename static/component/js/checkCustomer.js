define(['text!tamplate/checkCustomer.html'],function(checkCustomerHtml){
    var $tamplate=$('#template'),
        checkCustomerHtml=checkCustomerHtml;
    return{
        fill:function(template){
                      render();
             function render(){
                $tamplate.html(template.compile(checkCustomerHtml)({

                }));
             };
                $.methodsData();
             $tamplate.delegate('.checkBtn','click',function(){
                window.location.hash = '#!js/customSign';
             });
        }
    }
})
