var test = require('tape');
var escape = require('./index');
test("Characters should be escaped properly", function (t) {
    t.plan(1);

    t.equals(escape('" \' < > &'), '&quot; &apos; &lt; &gt; &amp;');
})

test("Module should not crash on null or undefined input", function (t) {
    t.plan(3);

    t.equals((escape("")), "");
    t.doesNotThrow(function(){escape(null);}, TypeError);
    t.doesNotThrow(function(){escape(undefined);}, TypeError);
})