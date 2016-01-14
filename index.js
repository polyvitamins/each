	
	module.exports = function(obj, fn, ctx) {
		ctx = ctx || this;
		if ("object"===typeof obj) {
			if (obj instanceof Array) {
				for (var i = 0;i<obj.length;++i) {
					fn.call(ctx, obj[i], i);
				}
			} else {
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						fn.call(ctx, obj[prop], prop);
					}
				}
			}
		} else {
			console[console.hasOwnProperty('warn')?'warn':'log']('Argument[0] in `each` is not an object');
		}
		return obj;
	}
