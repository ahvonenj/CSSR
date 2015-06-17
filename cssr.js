'use strict';

function CSSR(cssobj)
{
    var that = this;
    var $head = $('head');  
    var cssstring = '';
    
    // Begins a css rule with given selector
    function beginRule(selector)
    {
        cssstring += '\n\t' + selector + '\n\t{\n';
    }
    
    // Writes a given css property and value
    function writeProperty(property, value)
    {
        cssstring += '\t\t' + property + ': ' + value + ';\n'; 
    }
    
    function endRule()
    {
        cssstring += '\t}\n';
    }
    
    this.writecss = function(cssobj, id)
    {
        var id = id || 'cssr_style_' + Math.floor(Math.random() * 10000);
        
        for(let key in cssobj)
        {
            let selector = key;
            
            beginRule(selector);
            
            for(let property in cssobj[key])
            {
                let value = cssobj[key][property];
                
                writeProperty(property, value);
            }

            endRule();
        }
        
        var doBatch = false;
        var $batchTo = null;
        
        $head.find('style').each(function()
        {
            if($(this).data('iscssr') == true && $(this).attr('id') === id)
            {
                doBatch = true;   
                $batchTo = $(this);
            }
        });
        
        if(doBatch)
        {
            $batchTo.append('\n' + cssstring);
            console.log('CSSR: Batched styles with the same id \'' + id + '\'.');
        }
        else
        {
            $head.append('<style id = "' + id + '">' + cssstring + '</style>');
            $head.find('style#' + id).data('iscssr', true);
        }
        
        cssstring = '';
        
        return this;
    }
    
    this.removecss = function(id)
    {
        $head.find('#' + id).remove();   
    }
    
    return this;
}



