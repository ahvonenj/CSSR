'use strict';

function CSSR(cssobj)
{
    var that = this;
    var $head = $('head');
    
    this.cssobj = cssobj || {};
    
    function parsecssobj()
    {
        for(let key in cssobj)
        {
            console.log('Key: ' + key + ', Val: ' + cssobj[key]);   
        }

        return this;
    }
    
    this.writecss = function(ccsobj)
    {
        parsecssobj();
        
        return this;
    }
    
    return this;
}



