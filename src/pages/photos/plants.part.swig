{% extends 'album-template.html' %}
{% block albumTitle %}Wild Plants &amp; Flowers{% endblock %}
{% set albumID = 'plants' %}
{% set photos = [
  {
    id: 'tlm',
    name: 'Three Little Mushrooms',
    purchase: 'http://fineartamerica.com/featured/three-little-mushrooms-joe-spandrusyszyn.html'
  },
  {
    id: 'tb',
    name: 'Blossoms',
    purchase: 'http://fineartamerica.com/featured/blossoms-joe-spandrusyszyn.html'
  },
  {
    id: 'wt',
    name: 'Wild Teasel',
    purchase: 'http://fineartamerica.com/featured/wild-teasel-joe-spandrusyszyn.html'
  },
  {
    id: 'eh',
    name: 'Eastern Hemlock',
    purchase: 'http://fineartamerica.com/featured/eastern-hemlock-joe-spandrusyszyn.html'
  }
] %}
