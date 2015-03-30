{% extends '../../partial-template.html' %}


{% set project = {
  name: "JQuery Transparent Corners"
} %}

{% block title %}{{ project.name }}{% endblock %}
{% block backTitle %}{{ project.name }}{% endblock %}
{% block description %}{{ project.name }} Information{% endblock %}
{% block backURL %}/software.html{% endblock %}

{% block content %}
<div class="text">
Way back in 2009, I created a plugin for JQuery to give elements rounded corners, with the outside part being transparent so any background would show through.
This was before the border-radius CSS property became standardized and widespread.
Normally, I wouldn't even be mentioning it anymore, but for some reason people like you keep trying to view the old page for it!
<br>
Unfortunately, I no longer have a copy of the plugin! I also don't have use for one, so I'm not going to spend my time re-creating it.
<br>
I will, however, show how the rounded corner effect can be achieved using just HTML and CSS.
<br><br>
For modern browsers, just use border-radius in your CSS (and any necessary browser prefixed versions of the property):
<br>
<span style="-moz-border-raidus: 4px; -webkit-border-radius: 4px; border-radius: 4px; display: inline-block; padding: 2px 8px; background-color: lightgreen;">Modern Browsers Only</span>
<br><br>
For older browsers (IE8 and below), you'll want a group of 4 or more (depending on how rounded you want) HTML elements.
A single container element, which holds 2 (or more) radius elements, and one content element.
This example uses 6 elements, to provide an illusion of a 4 pixel radius:
<br>
<span style="display: inline-block;">
    <div style="margin: 0 2px; height: 1px; background-color: lightgreen;"></div>
    <div style="margin: 0 1px; height: 1px; background-color: lightgreen;"></div>
    <div style="background-color: lightgreen; padding: 0 8px;">Legacy Browsers</div>
    <div style="margin: 0 1px; height: 1px; background-color: lightgreen;"></div>
    <div style="margin: 0 2px; height: 1px; background-color: lightgreen;"></div>
</span>
<br><br>
You'll want to put all of this into appropriate CSS classes for your use, to make things easier, of course. Hopefully this is enough to get you started (though if my Google Analytics data is correct, you probably don't speak english, so who knows what will get lost in translation).
</div>
{% endblock %}