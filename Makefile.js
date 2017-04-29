/**
 * @fileoverview Build file
 * @author nzakas
 */
/* global echo, exec, exit, find, target */

"use strict";

/* eslint no-console: 0*/
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

require("shelljs/make");

//------------------------------------------------------------------------------
// Data
//------------------------------------------------------------------------------

var NODE_MODULES = "./node_modules/",

    // Utilities - intentional extra space at the end of each string
    MOCHA = NODE_MODULES + "mocha/bin/_mocha ",

    // Files
    MAKEFILE = "./Makefile.js",
    /* eslint-disable no-use-before-define */
    JS_FILES = find("lib/").filter(fileType("js")).join(" "),
    TEST_FILES = find("tests/lib/").filter(fileType("js")).join(" ");
    /* eslint-enable no-use-before-define */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Generates a function that matches files with a particular extension.
 * @param {string} extension The file extension (i.e. "js")
 * @returns {Function} The function to pass into a filter method.
 * @private
 */
function fileType(extension) {
    return function(filename) {
        return filename.substring(filename.lastIndexOf(".") + 1) === extension;
    };
}

//------------------------------------------------------------------------------
// Tasks
//------------------------------------------------------------------------------

target.all = function() {
    target.test();
};

target.lint = function() {
    var errors = 0,
        lastReturn;

    echo("Validating Makefile.js");
    lastReturn = exec("eslint " + MAKEFILE);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript files");
    lastReturn = exec("eslint " + JS_FILES);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript test files");
    lastReturn = exec("eslint " + TEST_FILES);
    if (lastReturn.code !== 0) {
        errors++;
    }

    if (errors) {
        exit(1);
    }
};

target.test = function() {
    target.lint();

    var errors = 0,
        lastReturn;

    lastReturn = exec("istanbul cover " + MOCHA + "-- -c " + TEST_FILES);

    if (lastReturn.code !== 0) {
        errors++;
    }

    if (errors) {
        exit(1);
    }
};

target.docs = function() {
    echo("Generating documentation");
    exec("jsdoc", "-d jsdoc lib");
    echo("Documentation has been output to /jsdoc");
};
