module.exports = (function() {
	var utc = {}

	utc.iso = function(local, isUTC) {
     var offset = local.getTimezoneOffset() * 60 * 1000
		 var utc = local.getTime() - offset
		 var iso = isUTC && local.toISOString() || new Date(utc).toISOString()
		 return iso.substring(0, iso.length-1)
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
