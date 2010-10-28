use t::TestJemplate tests => 4;

filters { 'tt' => 'parse_lite' };
# no_diff;
run_is 'tt' => 'js';

__END__

=== WRAPPER with no args
--- tt
Top
[% WRAPPER wrapper.tt %]
Middle
[% END %]
Bottom
--- js
output.push('Top\n');
//line 4 "(unknown template)"
output.push((function() { // WRAPPER
    var output = [];
output.push('\nMiddle\n');;
    return context.include('wrapper.tt', { 'content': output.join('') });
})());
output.push('\nBottom\n');

=== WRAPPER with args
--- tt
Top
[% WRAPPER wrapper.tt x='yann' %]
My name is [% x %]
[% END %]
Bottom
--- js
output.push('Top\n');
//line 4 "(unknown template)"
output.push((function() { // WRAPPER
    var output = [];
output.push('\nMy name is ');
//line 3 "(unknown template)"
output.push(stash.get('x'));
output.push('\n');;
    return context.include('wrapper.tt', { 'x': 'yann', 'content': output.join('') });
})());
output.push('\nBottom\n');

=== WRAPPER with args (inherited)
--- tt
Top
[% last_name = 'Kerhervé' %]
[% WRAPPER wrapper.tt first_name => 'yann' %]
My name is [% first_name %] [% last_name %]
[% END %]
Bottom
--- js
output.push('Top\n');
//line 2 "(unknown template)"
stash.set('last_name', 'Kerhervé');
output.push('\n');
//line 5 "(unknown template)"
output.push((function() { // WRAPPER
    var output = [];
output.push('\nMy name is ');
//line 4 "(unknown template)"
output.push(stash.get('first_name'));
output.push(' ');
//line 4 "(unknown template)"
output.push(stash.get('last_name'));
output.push('\n');;
    return context.include('wrapper.tt', { 'first_name': 'yann', 'content': output.join('') });
})());
output.push('\nBottom\n');

=== WRAPPER multiple + args
--- tt
Top
[% WRAPPER wrapper.tt+wrapper2.tt life = 'good' %]
How's the life ? life is [% life %]
[% END %]
Bottom
--- js
output.push('Top\n');
//line 4 "(unknown template)"
output.push((function() { // WRAPPER
    var output = [];
output.push('\nHow\'s the life ? life is ');
//line 3 "(unknown template)"
output.push(stash.get('life'));
output.push('\n');;
    output = output.join('');
    var files = ['wrapper2.tt', 'wrapper.tt'],
        num = files.length;
    for (var i = 0; i < num; i++) {
        output = context.include(files[i], { 'life': 'good', 'content': output });
    }
    return output;
})());
output.push('\nBottom\n');

