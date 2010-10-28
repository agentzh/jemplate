use t::TestJemplate tests => 5;

filters { 'tt' => 'parse_lite' };
run_is 'tt' => 'js';

__END__

=== First test
--- tt
[% IF foo.bar.baz %]Foo[% END -%]
--- js
//line 1 "(unknown template)"
if (stash.get(['foo', 0, 'bar', 0, 'baz', 0])) {
output.push('Foo');
}

=== Second test
--- tt
[% UNLESS foo %]Foo[% END -%]
--- js
//line 1 "(unknown template)"
if (!(stash.get('foo'))) {
output.push('Foo');
}

===
--- tt
[% IF foo OR bar %]Foo[% END -%]
--- js
//line 1 "(unknown template)"
if (stash.get('foo') || stash.get('bar')) {
output.push('Foo');
}

===
--- tt
[% IF foo AND bar %]Foo[% END -%]
--- js
//line 1 "(unknown template)"
if (stash.get('foo') && stash.get('bar')) {
output.push('Foo');
}

===
--- tt
[% SET foo = bar UNLESS baz -%]
--- js
//line 1 "(unknown template)"
if (!(stash.get('baz'))) {
stash.set('foo', stash.get('bar'));
}

