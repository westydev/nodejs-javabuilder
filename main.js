var java = require("java");
var javaLangSystem = java.import("java.lang.System");

function buildJavaCode(code) {
    eval(code)
}

buildJavaCode(javaLangSystem.out.println("Hello World!"))