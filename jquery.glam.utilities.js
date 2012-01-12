/**
 * Glamorous Utilities - Some cool additions to Javascript and handy functions
 * Documentation and usage in README file
 *
 * @author Jonas De Smet - Glamorous
 * @since 07.04.2010
 * @date 05.09.2011
 * @copyright Jonas De Smet - Glamorous
 * @version 0.2.0
 * @license BSD http://www.opensource.org/licenses/bsd-license.php
 *
 */
(function($) {
	// Set the utilities plugin
	$.glamUtilities = function(settings)
	{
		settings = $.extend({}, $.glamUtilities.defaults, settings);

		// Method to search for all links and add a target='_blank' to it
		function changeExternalLinks()
		{
			var links = $('a');
			var l_length = links.length;
			var external_links = [];
			for (var i=0;i<l_length;i++)
			{
				var href = $(links[i]).attr('href');

				if (href !== undefined && href.match(/^https?\:/i) && !href.match(document.domain))
				{
					external_links.push(links[i]);
				}
			}
			var $extlinks = $(external_links);

			if(settings.externalLinks === true)
			{
				$extlinks.attr('target','_blank');
			}

			if(settings.externalClass !== false)
			{
				$extlinks.addClass(settings.externalClass);
			}
		}

		// Method to set defaultValue as a inside label for text inputs and textareas
		function setInsideLabels(text_inputs)
		{
			var $inputs = (text_inputs === true) ? $("form input[type=text], form textarea, form input[type=email]") : text_inputs;

			$inputs.each(function(){
				var input = $(this);
				input.click(function(){
					if(input.val() == this.defaultValue){
						input.val("");
					}
				});
				input.blur(function(){
					if(input.val() == ""){
						input.val(this.defaultValue);
					}
				});
			});

		}

		// Method to extend the jQuery Validate plugin with a rule for defaultValue
		function setValidateDefault(presets)
		{
			// Test if validator is not undefined
			if(jQuery.validator !== undefined)
			{
				var method = (presets.name !== undefined) ? presets.name : settings.validateDefaultMethod;
				var error = (presets.error !== undefined) ? presets.error : settings.validateDefaultErrorMessage;

				jQuery.validator.addMethod(method, function(value, element) {
					return this.optional(element) || element.defaultValue != value;
				}, error);
			}
		}

		// Look which custom methods has to be called
		function init()
		{
			if(settings.externalClass !== false || settings.externalLinks === true){changeExternalLinks();}
			if(settings.defaultValueAsLabel !== false){setInsideLabels(settings.defaultValueAsLabel);}
			if(settings.validateDefaultValue !== false){setValidateDefault(settings.validateDefaultValue);}
		}

		init();
	};

	// Default settings for Utilities plugin
	$.glamUtilities.defaults =
	{
		debug: false,
		externalLinks: true,
		externalClass: 'external',
		defaultValueAsLabel: false,
		validateDefaultValue: false,
		validateDefaultMethod: 'defaultValue',
		validateDefaultErrorMessage: 'The field can\'t be the default value'
	};

	// Glamorous SCROLLING
	$.glamScroll = function(selector, speed)
	{
		speed = (speed !== undefined) ? speed : 500;
		$('html,body').animate({
			scrollTop: $(selector).offset().top
		}, speed);
	};

	// Glamorous LOGGING
	$.glamLog = function(message, type, plugin)
	{
		var msg = '['+type+'] '+plugin+' - '+message;
		if(window.console !== undefined) {
			switch(type)
			{
				case 'DEBUG':
					console.debug(msg);
					break;
				case 'INFO':
					console.info(msg);
					break;
				case 'WARN':
					console.warn(msg);
					break;
				case 'ERROR':
					console.error(msg);
					break;
				default:
				case 'LOG':
					console.log(msg);
					break;
			}
		} else {
			alert(msg);
		}
	};

	// Extend Array to have a "unique"-function to remove duplicates
	Array.prototype.unique = function()
	{
		var arr = [];
		loop:for(var i=0, m=this.length; i<m; i++)
		{
			for(var j=0, n=arr.length; j<n; j++)
			{
				if(arr[j]==this[i])
				{
					continue loop;
				}
			}
			arr[arr.length] = this[i];
		}
		return arr;
	};
})(jQuery);

// Method to test if a variable or jQuery object exists
function isset(element, checkempty)
{
	if(typeof element == 'string')
	{
		return (typeof window[element] != 'undefined');
	}
	else if(typeof element == 'undefined')
	{
		return false;
	}
	else
	{
		return (checkempty != false) ? element.length > 0 : true;
	}
}
