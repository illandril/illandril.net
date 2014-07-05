{% extends 'partial-template.html' %}
{% block title %}Photos by Joe Spandrusyszyn{% endblock %}
{% block description %}A collection of some of Joe Spandrusyszyn's photos.{% endblock %}

{% set albums = [
  {
    id: 'zoo',
    name: 'Zoo Animals',
    count: 42
  },
  {
    id: 'wild-animals',
    name: 'Wild Animals',
    count: 42
  },
  {
    id: 'pets',
    name: 'Pets',
    count: 42
  },
  {
    id: 'plants',
    name: 'Plants &amp; Flowers',
    count: 42
  },
  {
    id: 'food',
    name: 'Food',
    count: 42
  },
  {
    id: 'architecture',
    name: 'Architecture',
    count: 42
  }
] %}
{% block content %}
<div class="text">NOTICE: This page is under construction! I have not yet populated these albums!</div>
<div class="grid">
{% for album in albums %}
  <a class="tile w4 h3" data-fs="y" href="/photos/{{ album.id }}.html" style="background-image:url(/images/photos/album-{{ album.id }}.jpg);">
    <span class="banner">
       <span class="primary">{{ album.name }}</span>
       <span class="secondary">{{ album.count }}</span>
    </span>
  </a>
{% endfor %}
   <a class="tile w4 h2" target="_blank" href="https://www.pixoto.com/illandril">
    <span class="banner">
     <span class="primary">Pixoto</span>
    </span>
   </a>
   <a class="tile w4 h2" target="_blank" href="https://500px.com/illandril">
    <span class="banner">
     <span class="primary">500px</span>
    </span>
   </a>
   <a class="tile w4 h2" target="_blank" href="http://www.jungledragon.com/user/1559/joe_spandrusyszyn.html">
    <span class="banner">
     <span class="primary">JungleDragon</span>
    </span>
   </a>
</div>
{% endblock %}
