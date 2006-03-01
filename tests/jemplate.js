/* 
   This Javascript code was generated by Jemplate, the Javascript
   Template Toolkit. Any changes made to this file will be lost the next
   time the templates are compiled.

   Copyright 2006 - Ingy döt Net - All rights reserved.
*/

if (typeof(Jemplate) == 'undefined')
    throw('Jemplate.js must be loaded before any Jemplate template files');

Jemplate.templateMap['basic_array1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 5 "basic_array1.html"
stash.set( "simple_list", ["a","b","c"] );
stash.set( "mylist", [["a","b","c"],["d","e","f"],["h","i","j"]] );
output += 'a = ';
//line 6 "basic_array1.html"
output += stash.get(['simple_list', 0, 0, 0]);
output += '\na = ';
//line 7 "basic_array1.html"
output += stash.get(['mylist', 0, 0, 0, 0, 0]);
output += '\nc = ';
//line 8 "basic_array1.html"
output += stash.get(['mylist', 0, 0, 0, 2, 0]);
output += '\ne = ';
//line 9 "basic_array1.html"
output += stash.get(['mylist', 0, 1, 0, 1, 0]);
output += '\nj = ';
//line 10 "basic_array1.html"
output += stash.get(['mylist', 0, 2, 0, 2, 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {

//line 4 "directives1.html"
stash.set('list', [ 3, 4, 5 ]);
//line 7 "directives1.html"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['i'] = value;
//line 6 "directives1.html"
output += context.process('foo');;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['foo'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'I <3 Sushi\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "directives2.html"
stash.set('num', 4);
//line 2 "directives2.html"
stash.set('array', [ ]);
//line 6 "directives2.html"
    
// WHILE
var failsafe = 1000;
while (--failsafe && (stash.get('num') < 7)) {
//line 4 "directives2.html"
if (stash.get('num') % 2) {
//line 4 "directives2.html"
stash.get(['array', 0, 'push', [ 'Odd' ]]);
}
else {
//line 4 "directives2.html"
stash.get(['array', 0, 'push', [ 'Even' ]]);
}

//line 5 "directives2.html"
stash.set('num', stash.get('num') + 1);
}
if (! failsafe)
    throw("WHILE loop terminated (> 1000 iterations)\n")

//line 7 "directives2.html"
output += stash.get(['array', 0, 'join', [ '***' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives3.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "directives3.html"
stash.set("obj", {"key1": "val1", "key2": "val2"});
output += 'Key1: ';
//line 5 "directives3.html"
output += stash.get(['obj', 0, 'key1', 0]);
output += '\nKey2: ';
//line 6 "directives3.html"
output += stash.get(['obj', 0, 'key2', 0]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['directives4.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "directives4.html"
stash.set("obj", {"key1": "val1", "key2": "val2"});
//line 7 "directives4.html"

// FOREACH 
(function() {
    var list = stash.get('obj');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['key'] = value;
//line 6 "directives4.html"
output += stash.get('key');
output += ': ';
//line 6 "directives4.html"
output += stash.get(['obj', 0, stash.get('key'), 0]);
output += '\n';;
            retval = list.get_next();
            var value = retval[0];
            var done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_indent.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 7 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent');
})();

output += '\n#\n';
//line 15 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ 3 ]);
})();

output += '\n#\n';
//line 23 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ '2' ]);
})();

output += '\n#\n';
//line 31 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';

output += '1\n2\n3\n4';

    return context.filter(output, 'indent', [ 0 ]);
})();

output += '\n#\n';
//line 33 "filters_indent.html"
stash.set('text', 'The cat sat on the mat');
//line 33 "filters_indent.html"

// FILTER
output += (function() {
    var output = '';


// FILTER
output += (function() {
    var output = '';

output += stash.get('text');

    return context.filter(output, 'indent', [ '> ' ]);
})();


    return context.filter(output, 'indent', [ '+' ]);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['filters_truncate.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "filters_truncate.html"
stash.set('a', '1234567890');
//line 2 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 5 ]);
})();

output += '\n';
//line 3 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 10 ]);
})();

output += '\n';
//line 4 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 15 ]);
})();

output += '\n';
//line 5 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate', [ 2 ]);
})();

output += '\n';
//line 6 "filters_truncate.html"
stash.set('a', '1234567890123456789012345678901234567890');
//line 7 "filters_truncate.html"

// FILTER
output += (function() {
    var output = '';

output += stash.get('a');

    return context.filter(output, 'truncate');
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['hello.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'Hello, ';
//line 1 "hello.html"
output += stash.get('name');
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['join.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "join.html"
stash.set('a', [ 'foo', 'bar', 'baz' ]);
//line 1 "join.html"
output += stash.get(['a', 0, 'join', [ '::' ]]);
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "list.html"
stash.set('a1', [ 'one', 'two', 'three' ]);
//line 2 "list.html"
stash.get(['a1', 0, 'push', [ 'four' ]]);
//line 3 "list.html"
output += stash.get(['a1', 0, 'first', 0]);
output += ' - ';
//line 3 "list.html"
output += stash.get(['a1', 0, 'last', 0]);
output += '\n';
//line 4 "list.html"
output += stash.get(['a1', 0, 'grep', [ 'o' ], 'join', [ '/' ]]);
output += '\n';
//line 5 "list.html"
output += stash.get(['a1', 0, 'max', 0]);
output += '+';
//line 5 "list.html"
output += stash.get(['a1', 0, 'size', 0]);
output += '\n';
//line 6 "list.html"
stash.set('a2', stash.get(['a1', 0, 'reverse', 0]));
//line 7 "list.html"
output += stash.get(['a2', 0, 'join', [ '^' ]]);
output += '\n';
//line 8 "list.html"
output += stash.get(['a2', 0, 'slice', [ 1, 3 ], 'join', [ '*' ]]);
output += '\n';
//line 9 "list.html"
stash.set('a3', [ 5, 9, 'x', 17, 9, 33, 12, 'x', 5 ]);
//line 10 "list.html"
output += stash.get(['a3', 0, 'unique', 0, 'join', [ ',' ]]);
output += '\n';
//line 11 "list.html"
output += stash.get(['a1', 0, 'unshift', [ 'zero' ], 'sort', 0, 'join', [ '!' ]]);
output += '\n';
//line 12 "list.html"
stash.get(['a1', 0, 'shift', 0]);
//line 12 "list.html"
stash.get(['a1', 0, 'pop', 0]);
//line 12 "list.html"
output += stash.get(['a1', 0, 'join', [ '_' ]]);
output += '\n';
//line 13 "list.html"
stash.get(['a3', 0, 'splice', [ 2, 1 ]]);
//line 13 "list.html"
stash.get(['a3', 0, 'splice', [ -2, 1 ]]);
//line 13 "list.html"
output += stash.get(['a3', 0, 'nsort', 0, 'join', [ '~' ]]);
output += '\n';
//line 14 "list.html"
stash.set('a4', [ 11, 22, 33 ]);
//line 15 "list.html"
stash.set('a5', [ 44, 55, 66 ]);
//line 16 "list.html"
stash.set('a6', [ 77, 88, 99 ]);
//line 17 "list.html"
stash.set('a7', stash.get(['a4', 0, 'merge', [ stash.get('a5'), 'foo', stash.get('a6') ]]));
//line 18 "list.html"
output += stash.get(['a7', 0, 'join', [ '\'' ]]);
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator1.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "operator1.html"
if ('abc' == 'abc') {
output += 'same';
}

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator2.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 4 "operator2.html"
if ('abc' != 'def') {
output += 'not same';
}

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['operator3.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "operator3.html"
output += 'abc'  + 'def';
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

