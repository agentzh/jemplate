use t::TestJemplate tests => 2;

filters { 'tt' => 'parse_lite' };
# no_diff;
run_is 'tt' => 'js';

__END__

=== PROCESS with no args
--- tt
Top
[% PROCESS middle.tt %]
Bottom
--- js
output.push('Top\n');
//line 2 "(unknown template)"
output.push(context.process('middle.tt'));
output.push('\nBottom\n');

=== PROCESS with args
--- tt
Top
[% PROCESS middle.tt foo = 'xxx', bar = [1, 2] %]
Bottom
--- js
output.push('Top\n');
//line 2 "(unknown template)"
output.push(context.process('middle.tt', { 'foo': 'xxx', 'bar': [ 1, 2 ] }));
output.push('\nBottom\n');

