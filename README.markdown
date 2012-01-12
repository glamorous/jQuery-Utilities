## jQuery Utilities plugin ##

### Why this plugin ###

This plugin is for everyone who had the same problem like me. I hate it to write the same code over and over. This plugin does some basic stuff so I don't need to write the code for every project.

### What does it do? ###

* Search all external links and adds an attribute `target` with value `_blank` and a class 'external'.
* Array.unique() functionality
* ScrollTo
* Logging to console or alert
* Add a rule-method to the jQuery Validate plugin for defaultValue
* Functionality for defaultValue in text-inputs to clear and come back when an input get focused or blurred.

### Getting Started ###

To use the Utilities plugin, you have to include the jQuery library in your `<head>` tag of your HTML document or just above the closing `<body>`-tag.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery.glam.utilities.js"></script>
    <script type="text/javascript" src="/js/general.js"></script>
    </body>
    </html>

We will use the `general.js`-file for the specefic jQuery-code to call our plugin.

### Basic setup ###

    $(document).ready(function(){
        $.glamUtilities();
    });

Yes, it's so simple! The code above is pretty the same as this:

    $(document).ready(function(){
        $.glamUtilities({
            debug: false,
    		externalLinks: true,
    		externalClass: 'external',
    		defaultValueAsLabel: false,
    		validateDefaultValue: false
        });
    });
    
### More advanced setup ###
    
    $(document).ready(function(){
        $.glamUtilities({
            debug: false,
    		externalLinks: true, // when false the plugin will not add `attr('target','_blank')`
    		externalClass: 'otherNameForClassAtAllExternalLinks', // or false
    		defaultValueAsLabel: true, // or you can specify wich elements that has to change: `$("form input[type=text]")`
    		validateDefaultValue: false
        });
    });
    
## If you use the jQuery Validate plugin than this is handy ##

    $(document).ready(function(){
        $.glamUtilities({
      		validateDefaultValue: {
      		    name: 'RuleName',
      		    error: 'This is the error message for the rule'
      		}
        });
    });

You can also pass `true` and use the fallback name and error-message.
    
## How to log with the plugin ##

    $.glamLog('This is my message','DEBUG'); // DEBUG is the log-type, other: INFO, WARN, ERROR, LOG (default-type)
    
## How to use the ScrollTo function with the plugin ##

    $.glamScroll($("#top"), 200); //default 500ms
    
## How to use the Array unique function ##

    var myArray = [1,3,4,2,2,4];
    
    myArray.unique();
    
    // myArray is now [1,3,4,2]

## How to use the isset function (works only for global variables and jQuery objects) ##

	var $divs = jQuery('div');

	isset($divs) 			// true if there are div's in the page, false if there are not div's in the page
	isset($divs, false)		// true even if there are no divs
	isset($divs)			// false when $divs is not defined like above
	isset('myvariable')		// true if the variable is defined, false if not

## Issues/Bugs ##

If you find one, please inform us with the issue tracker on [github](http://github.com/glamorous/jQuery-Utilities/issues).

## Changelog ##

**0.3.0 - 13/01/2012**

- [feature] There is now a fallback method name and error message for the custom validator rule for defaultValue checking so you can pass `true` instead of an object with a method name and error message
- [bug] From now on the defaultValue works again for textarea's, this was removed in a cleanup in commit e10a6de3f and extra cleaning up some typo's and a `console.log()` (shame on me for this one!)

**0.2.0 - 05/09/2011**

- [feature] Added an isset function to test if a global variable or jQuery object exists

**0.1.3 - 18/05/2010**

- [feature] DefaultValue works now also with textareas

**0.1.2 - 09/04/2010**

- [bug] Unwanted console.log in the scroll function

**0.1.1 - 08/04/2010**

- Minified version of the plugin
- [feature] Ability to exclude the extra class for external links
- [feature] Ability to exclude the `attr('target','_blank')`

**0.1 - 07/04/2010**

- First release

## Feature Requests / To come ##

If you want something to add on this plugin, feel free to fork the project on [github](http://github.com/glamorous/jQuery-Utilities) or add an [issue](http://github.com/glamorous/jQuery-Utilities/issues) as a feature request.

## License ##

This plugin has a [BSD License](http://www.opensource.org/licenses/bsd-license.php). You can find the license in license.txt that is included with plugin-package