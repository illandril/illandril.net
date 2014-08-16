{% extends 'partial-template.html' %}
{% block title %}Photos by Joe Spandrusyszyn{% endblock %}
{% block description %}A collection of some of Joe Spandrusyszyn's photos.{% endblock %}
{% set albums = [
  {
    id: 'wild-animals',
    name: 'Wild Animals',
    count: 10,
    cover: 'gbh'
  },
  {
    id: 'plants',
    name: 'Wild Plants &amp; Flowers',
    count: 6,
    cover: 'tlm'
  },
  {
    id: 'landscapes',
    name: 'Landscapes',
    count: 3,
    cover: 'll'
  },
  {
    id: 'pets',
    name: 'Pets',
    count: 3,
    cover: 'mf'
  },
  {
    id: 'gardens',
    name: 'Gardens',
    count: 3,
    cover: 'gb'
  },
  {
    id: 'food',
    name: 'Food',
    count: 5,
    cover: 'cb'
  }
] %}
{% block content %}
<div class="grid">
{% for album in albums %}
  <a class="tile" data-fs="y" href="/photos/{{ album.id }}.html" style="background-image:url(/images/photos/{{ album.id }}/{{ album.cover }}-grid.jpg);">
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
<div class="text">Check back every so often, as I add pictures on occasion! Also, if you see my share any photos anywhere else that you particularly like, and think I should showcase here (or would like to buy a print of), feel free to <a href="mailto:photos@illandril.net">let me know</a>.</a></div>
{% endblock %}
