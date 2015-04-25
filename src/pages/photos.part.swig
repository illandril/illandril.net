{% extends 'partial-template.html' %}
{% block title %}Photos by Joe Spandrusyszyn{% endblock %}
{% block description %}Links to some of Joe Spandrusyszyn's photos.{% endblock %}
{% set albums = [
  {
    id: 'wild-animals',
    name: 'Wild Animals',
    count: 14,
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
    cover: 'pd'
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
<!--{% for album in albums %}
  <a class="tile" data-fs="y" href="/photos/{{ album.id }}.html" style="background-image:url(/images/photos/{{ album.id }}/{{ album.cover }}-grid.jpg);">
    <span class="banner">
       <span class="primary">{{ album.name }}</span>
       <span class="secondary">{{ album.count }}</span>
    </span>
  </a>
{% endfor %}-->
   <a class="tile" target="_blank" href="http://500px.com/illandril" style="background-image:url(/images/photos/500px.jpg);">
    <span class="banner">
     <span class="primary">500px</span>
    </span>
   </a>
   <a class="tile" target="_blank" href="https://www.flickr.com/photos/illandril/sets/" style="background-image:url(/images/photos/flickr.jpg);">
    <span class="banner">
     <span class="primary">Flickr</span>
    </span>
   </a>
   <a class="tile" target="_blank" href="http://www.jungledragon.com/user/1559/joe_spandrusyszyn.html" style="background-image:url(/images/photos/jungledragon.jpg);">
    <span class="banner">
     <span class="primary">JungleDragon</span>
    </span>
   </a>
   <a class="tile" target="_blank" href="https://plus.google.com/photos/+JosephSpandrusyszyn/albums" style="background-image:url(/images/photos/google+.jpg);">
    <span class="banner">
     <span class="primary">Google+ Photos</span>
    </span>
   </a>
   <a class="tile" target="_blank" href="http://www.viewbug.com/member/illandril" style="background-image:url(/images/photos/viewbug.jpg);">
    <span class="banner">
     <span class="primary">ViewBug</span>
    </span>
   </a>
   <a class="tile" target="_blank" href="http://www.pixoto.com/illandril" style="background-image:url(/images/photos/pixoto.jpg);">
    <span class="banner">
     <span class="primary">Pixoto</span>
    </span>
   </a>
</div>
<div class="text">
    If you see any photos that I have shared on any of the above sites (or anywhere else) that you would like to
    buy a print of (to hang in your house and/or place of business), license (for use in a book, website, packaging, etc),
    use in an educational or scientific paper, or use for any other purpose then
    <a href="mailto:photos@illandril.net">email me at photos@illandril.net to let me know</a> (even if you would not be making any money from it!).
    I will almost definitely agree for little or no cost (as long as I am properly creditted).
</div>
{% endblock %}
