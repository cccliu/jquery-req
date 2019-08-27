require.config({
    baseUrl:"./static",
    paths: {
        "jquery": ["jquery"],
        "template":["template"],
        "text":["component/text"],
        "css":["component/css"]
    },
});
require(['template','jquery'], function(template,jquery) {
    jquery.extend({
         methodsData:function(){
             eval("var msg = 'hello world'; ");
             //console.log(msg); //"hello world"
         }
    });
    hasIniteNet();
    $(window).on('hashchange',hasIniteNet);
    function hasIniteNet(){
        var hash = window.location.hash,
            para = /#!(([^!]*)!)?/.exec(hash),
            directory = hash.replace(/#!(([^!]*)!)?/ig, '').split('/');
         if(directory[0]&&directory[1]){
            var PathUrl='component'+'/'+directory[0]+'/'+directory[1];
            require([PathUrl],function(fn){
                 fn.fill(template);
            });
        };
    };
});

