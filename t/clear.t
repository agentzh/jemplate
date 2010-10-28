use t::TestJemplate tests => 1;

filters { 'tt' => 'parse_lite' };
no_diff;
run_is 'tt' => 'js';

__END__

=== CLEAR
--- tt
Bar
[% CLEAR -%]
Foo
--- js
output.push('Bar\n');
//line 2 "(unknown template)"
output = [];
output.push('Foo\n');
