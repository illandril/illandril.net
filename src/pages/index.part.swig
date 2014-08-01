{% extends 'partial-template.html' %}
{% block title %}Joe Spandrusyszyn's Portfolio{% endblock %}
{% block description %}A collection of some of the many things that make Joe Spandrusyszyn who he is.{% endblock %}

{% block content %}
<div class="grid">
  <a class="tile" href="/photos.html" style="background-image:url(/images/home/photos.jpg);">
    <span class="banner">
       <span class="primary">Photos</span>
    </span>
  </a>
  <a class="tile" href="/stories.html" style="background-image:url(/images/home/stories.png);">
    <span class="banner">
       <span class="primary">Stories</span>
    </span>
  </a>
  <a class="tile" href="/software.html" style="background-image:url(/images/home/software.png);">
    <span class="banner">
       <span class="primary">Software</span>
    </span>
  </a>
</div>
<div class="text">
Welcome to my (Joe Spandrusyszyn's) portfolio.
</div>
{% endblock %}
