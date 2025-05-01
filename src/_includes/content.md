## `page` data

<dl>
    <dt><code>page.inputPath</code></dt>
    <dd><code>{{ page.inputPath }}</code></dd>
    <dt><code>page.templateSyntax</code></dt>
    <dd><code>{{ page.templateSyntax }}</code></dd>
</dl>


## test with declared parameter

Adding the shortcode {% raw %}`{% test 1 %}`{% endraw %} --
with an explicit parameter -- shows
<samp>type: number; value: 1</samp> in the page:

{% test 1 %}


## test without declared parameter

Adding the shortcode {% raw %}`{% test %}`{% endraw %} --
_without_ a parameter -- should produce the same results,
<samp>type: number; value: 1</samp>:

{% test %}
