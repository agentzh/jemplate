use t::TestJemplate tests => 1;

filters { 'tt' => 'parse' };
# no_diff;
run_is 'tt' => 'js';

__END__

=== Hello world
--- tt
Hello [% name %], and good day!
--- js
function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = [];

    try {
output.push('Hello ');
//line 1 "(unknown template)"
output.push(stash.get('name'));
output.push(', and good day!\n');
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output.join('');
}
