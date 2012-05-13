$.extend({
	getSelectors: function(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('/') + 1).split('.');
	    // all hashes except first (filename) & last one ( = file ending)
	    for(var i = 1; i < hashes.length - 1; i++) {
			hash = hashes[i];
			vars.push(hash);
	    }
	    return vars;
  	}
});