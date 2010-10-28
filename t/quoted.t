use t::TestJemplate tests => 2;

filters {
    'tt' => 'compile_lite',
};
run_is 'tt' => 'js';

__END__

=== test for "quoted" strings
--- tt
[% SET foo = "foo"; bar = "bar" %]
[% "$foo/$bar" %]
--- js
//line 1 "test_template"
stash.set('foo', 'foo');
//line 1 "test_template"
stash.set('bar', 'bar');
output.push('\n');
//line 1 "test_template"
output.push(stash.get('foo') + '/' + stash.get('bar'));
output.push('\n');

=== simple string
--- tt
[% "simple" %]
--- js
//line 1 "test_template"
output.push('simple');
output.push('\n');
