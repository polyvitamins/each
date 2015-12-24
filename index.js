	
	module.exports = function(obj, fn, ctx) {
		ctx = ctx || this;
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				fn.call(ctx, obj[prop], prop);
			}
		}
		return obj;
	}
