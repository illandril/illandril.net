{% extends 'partial-template.html' %}
{% block title %}Photos by Joe Spandrusyszyn{% endblock %}
{% block description %}A collection of some of Joe Spandrusyszyn's photos.{% endblock %}
{% set albums = [
  {
    id: 'wild-animals',
    name: 'Wild Animals',
    count: 42
  },
  {
    id: 'plants',
    name: 'Plants &amp; Flowers',
    count: 42
  },
  {
    id: 'landscapes',
    name: 'Landscapes',
    count: 42
  },
  {
    id: 'pets',
    name: 'Pets',
    count: 42
  },
  {
    id: 'gardens',
    name: 'Gardens',
    count: 42
  },
  {
    id: 'food',
    name: 'Food',
    count: 42
  }
] %}
{% block content %}
<div class="text">NOTICE: This page is under construction! I have not yet populated these albums!</div>
<div class="grid">
{% for album in albums %}
  <a class="tile" data-fs="y" href="/photos/{{ album.id }}.html" style="background-image:url(/images/photos/album-{{ album.id }}.jpg);">
    <span class="banner">
       <span class="primary">{{ album.name }}</span>
       <span class="secondary">{{ album.count }}</span>
    </span>
  </a>
{% endfor %}
   <a class="tile" target="_blank" href="http://500px.com/illandril" style="background-image:url(/images/photos/500px.jpg);">
    <span class="banner">
     <span class="primary">500px</span>
    </span>
   </a>
   <span class="multitile">
       <a class="tile short" target="_blank" href="http://www.viewbug.com/member/illandril" style="background-image:url(/images/photos/viewbug.jpg);">
        <span class="banner">
         <span class="primary">ViewBug</span>
        </span>
       </a>
       <a class="tile short" target="_blank" href="http://www.pixoto.com/illandril" style="background-image:url(/images/photos/pixoto.jpg);">
        <span class="banner">
         <span class="primary">Pixoto</span>
        </span>
       </a>
   </span>
   <a class="tile" target="_blank" href="http://www.jungledragon.com/user/1559/joe_spandrusyszyn.html" style="background-image:url(/images/photos/jungledragon.jpg);">
    <span class="banner">
     <span class="primary">JungleDragon</span>
    </span>
   </a>
</div>
{% endblock %}
