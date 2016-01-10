module.exports = (function() {
	var utc = {}

	utc.iso = function(local, isUTC) {
     var offset = local.getTimezoneOffset() * 60 * 1000
		 var utc = local.getTime() - offset
		 return isUTC && local.toISOString() || new Date(utc).toISOString()
	}

	utc.hhmm = function(now, isUTC) {
		return utc.iso(now, isUTC).substring(11,16)
	}

	utc.mmdd = function(now, isUTC) {
		return utc.iso(now, isUTC).substring(5,10)
	}

	utc.longdate = function(now, isUTC) {
		return utc.iso(now, isUTC).substring(0, 16)
	}

	return utc
})()
