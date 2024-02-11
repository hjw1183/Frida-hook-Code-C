setTimeout(function() {
    Java.perform(function() {
        var androidSettings = ['adb_enabled'];
        var sdkVersion = Java.use('android.os.Build$VERSION');
        console.log("SDK Version : " + sdkVersion.SDK_INT.value);

        /* API 16 or lower Settings.Global Hook */
        if (sdkVersion.SDK_INT.value <= 16) {
            var settingSecure = Java.use('android.provider.Settings$Secure');

            settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingSecure.getInt(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Secure.getInt(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getInt(cr, name);
                return ret;
            }

            settingSecure.getInt.overload('android.content.ContentResolver', 'java.lang.String', 'int').implementation = function(cr, name, def) {
                //console.log("[*]settingSecure.getInt(cr,name,def) : " + name);
                if (name == (androidSettings[0])) {
                    console.log('[+]Secure.getInt(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getInt(cr, name, def);
                return ret;
            }

            settingSecure.getFloat.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingSecure.getFloat(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Secure.getFloat(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getFloat(cr, name)
                return ret;
            }

            settingSecure.getFloat.overload('android.content.ContentResolver', 'java.lang.String', 'float').implementation = function(cr, name, def) {
                //console.log("[*]settingSecure.getFloat(cr,name,def) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Secure.getFloat(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getFloat(cr, name, def);
                return ret;
            }

            settingSecure.getLong.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingSecure.getLong(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Secure.getLong(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getLong(cr, name)
                return ret;
            }

            settingSecure.getLong.overload('android.content.ContentResolver', 'java.lang.String', 'long').implementation = function(cr, name, def) {
                //console.log("[*]settingSecure.getLong(cr,name,def) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Secure.getLong(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getLong(cr, name, def);
                return ret;
            }

            settingSecure.getString.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingSecure.getString(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    var stringClass = Java.use("java.lang.String");
                    var stringInstance = stringClass.$new("0");

                    console.log('[+]Secure.getString(cr, name) Bypassed');
                    return stringInstance;
                }
                var ret = this.getString(cr, name);
                return ret;
            }
        }

        /* API 17 or higher Settings.Global Hook */
        if (sdkVersion.SDK_INT.value >= 17) {
            var settingGlobal = Java.use('android.provider.Settings$Global');

            settingGlobal.getInt.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingGlobal.getInt(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Global.getInt(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getInt(cr, name);
                return ret;
            }

            settingGlobal.getInt.overload('android.content.ContentResolver', 'java.lang.String', 'int').implementation = function(cr, name, def) {
                //console.log("[*]settingGlobal.getInt(cr,name,def) : " + name);
                if (name == (androidSettings[0])) {
                    console.log('[+]Global.getInt(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getInt(cr, name, def);
                return ret;
            }

            settingGlobal.getFloat.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingGlobal.getFloat(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Global.getFloat(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getFloat(cr, name);
                return ret;
            }

            settingGlobal.getFloat.overload('android.content.ContentResolver', 'java.lang.String', 'float').implementation = function(cr, name, def) {
                //console.log("[*]settingGlobal.getFloat(cr,name,def) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Global.getFloat(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getFloat(cr, name, def);
                return ret;
            }

            settingGlobal.getLong.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingGlobal.getLong(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Global.getLong(cr, name) Bypassed');
                    return 0;
                }
                var ret = this.getLong(cr, name);
                return ret;
            }

            settingGlobal.getLong.overload('android.content.ContentResolver', 'java.lang.String', 'long').implementation = function(cr, name, def) {
                //console.log("[*]settingGlobal.getLong(cr,name,def) : " + name);
                if (name == androidSettings[0]) {
                    console.log('[+]Global.getLong(cr, name, def) Bypassed');
                    return 0;
                }
                var ret = this.getLong(cr, name, def);
                return ret;
            }

            settingGlobal.getString.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(cr, name) {
                //console.log("[*]settingGlobal.getString(cr,name) : " + name);
                if (name == androidSettings[0]) {
                    var stringClass = Java.use("java.lang.String");
                    var stringInstance = stringClass.$new("0");

                    console.log('[+]Global.getString(cr, name) Bypassed');
                    return stringInstance;
                }
                var ret = this.getString(cr, name);
                return ret;
            }
        }
    });
}, 0);



// generic trace
function trace(pattern)
{
	var type = (pattern.toString().indexOf("!") === -1) ? "java" : "module";

	if (type === "module") {

		// trace Module
		var res = new ApiResolver("module");
		var matches = res.enumerateMatchesSync(pattern);
		var targets = uniqBy(matches, JSON.stringify);
		targets.forEach(function(target) {
			traceModule(target.address, target.name);
		});

	} else if (type === "java") {

		// trace Java Class
		var found = false;
		Java.enumerateLoadedClasses({
			onMatch: function(aClass) {
				if (aClass.match(pattern)) {
          			found = true;
					traceClass(aClass);
				}
			},
			onComplete: function() {}
		});

		// trace Java Method
		if (!found) {
			try {
				traceMethod(pattern);
			}
			catch(err) { // catch non existing classes/methods
				console.error(err);
			}
		}
	}
}

// find and trace all methods declared in a Java Class
function traceClass(targetClass)
{
	var hook = Java.use(targetClass);
	var methods = hook.class.getDeclaredMethods();
	hook.$dispose;

	var parsedMethods = [];
	methods.forEach(function(method) {
		parsedMethods.push(method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
	});

	var targets = uniqBy(parsedMethods, JSON.stringify);
	targets.forEach(function(targetMethod) {
		traceMethod(targetClass + "." + targetMethod);
	});
}

// trace a specific Java Method
function traceMethod(targetClassMethod)
{
	var delim = targetClassMethod.lastIndexOf(".");
	if (delim === -1) return;

	var targetClass = targetClassMethod.slice(0, delim)
	var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length)

	var hook = Java.use(targetClass);
	var overloadCount = hook[targetMethod].overloads.length;

	console.log("Tracing " + targetClassMethod + " [" + overloadCount + " overload(s)]");

	for (var i = 0; i < overloadCount; i++) {

		hook[targetMethod].overloads[i].implementation = function() {
			console.warn("\n[+] Entered: " + targetClassMethod);

			// print backtrace
			// Java.perform(function() {
			//	var bt = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
			//	console.log("\nBacktrace:\n" + bt);
			// });   

			// print args
			if (arguments.length) console.log();
			for (var j = 0; j < arguments.length; j++) {
				console.log("\x1b[31marg[" + j + "]:\x1b[0m \x1b[34m" + arguments[j] + "\x1b[0m");
			}

			// print retval
			var retval = this[targetMethod].apply(this, arguments); // rare crash (Frida bug?)
			console.log("\n\x1b[31mretval:\x1b[0m \x1b[34m" + retval + "\x1b[0m");
			console.warn("\n[-] Exiting: " + targetClassMethod);
			return retval;
		}
	}
}

// trace Module functions
function traceModule(impl, name)
{
	console.log("Tracing " + name);

	Interceptor.attach(impl, {

		onEnter: function(args) {

			// debug only the intended calls
			this.flag = false;
			// var filename = Memory.readCString(ptr(args[0]));
			// if (filename.indexOf("XYZ") === -1 && filename.indexOf("ZYX") === -1) // exclusion list
			// if (filename.indexOf("my.interesting.file") !== -1) // inclusion list
				this.flag = true;

			if (this.flag) {
				console.warn("\n*** entered " + name);

				// print backtrace
				console.log("\nBacktrace:\n" + Thread.backtrace(this.context, Backtracer.ACCURATE)
						.map(DebugSymbol.fromAddress).join("\n"));
			}
		},

		onLeave: function(retval) {

			if (this.flag) {
				// print retval
				console.log("\nretval: " + retval);
				console.warn("\n*** exiting " + name);
			}
		}

	});
}

// remove duplicates from array
function uniqBy(array, key)
{
        var seen = {};
        return array.filter(function(item) {
                var k = key(item);
                return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        });
}

// usage examples
setTimeout(function() { // avoid java.lang.ClassNotFoundException

	Java.perform(function() {

		trace("com.example"); // 패키지 이름 지정
	});   
}, 0);

