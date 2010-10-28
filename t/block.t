use t::TestJemplate tests => 3;

filters {
    'empty_template_body' => 'compile',
    'tt_to_full' => 'compile',
    'tt' => 'compile_lite',
};
run_is 'empty_template_body' => 'js';
run_is 'tt_to_full' => 'js';
run_is 'tt' => 'js';

__END__

===
--- empty_template_body
--- js -trim
Jemplate.templateMap['test_template'] = function() { return ''; }
===
--- tt_to_full
Foo
[% PROCESS red_meat -%]
Baz
[% BLOCK red_meat %]
Bar
[% END -%]

--- js -trim
Jemplate.templateMap['test_template'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = [];

    try {
output.push('Foo\n');
//line 2 "test_template"
output.push(context.process('red_meat'));
output.push('Baz\n');

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output.join('');
}

Jemplate.templateMap['red_meat'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = [];

    try {
output.push('\nBar\n');
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output.join('');
}

===
--- tt
[% foo = 10 %]

foo is originally [% foo %]
[% INCLUDE bar %]
foo is still [% foo %]

[% BLOCK bar %]
   foo was [% foo %]
   [% foo = 20 %]
   foo is now [% foo %]
[% END %]
--- js
//line 1 "test_template"
stash.set('foo', 10);
output.push('\n\nfoo is originally ');
//line 3 "test_template"
output.push(stash.get('foo'));
output.push('\n');
//line 4 "test_template"
output.push(context.include('bar'));
output.push('\nfoo is still ');
//line 5 "test_template"
output.push(stash.get('foo'));
output.push('\n\n');

output.push('\n');

output.push('\n   foo was ');
//line 8 "test_template"
output.push(stash.get('foo'));
output.push('\n   ');
//line 9 "test_template"
stash.set('foo', 20);
output.push('\n   foo is now ');
//line 10 "test_template"
output.push(stash.get('foo'));
output.push('\n');

