{% extends 'album-template.html' %}
{% block albumTitle %}Food{% endblock %}
{% set albumID = 'food' %}
{% set photos = [
  {
    id: 'cb',
    name: 'Cinnamon Buns',
    purchase: 'http://fineartamerica.com/featured/cinnamon-buns-joe-spandrusyszyn.html'
  },
  {
    id: 'sd',
    name: 'Sprinkled Donut',
    purchase: 'http://fineartamerica.com/featured/sprinkled-donut-joe-spandrusyszyn.html'
  },
  {
    id: 'dp',
    name: 'Donut Plate',
    purchase: 'http://fineartamerica.com/featured/donut-plate-joe-spandrusyszyn.html'
  },
  {
    id: 'cd',
    name: 'Cinnamon Donut',
    purchase: 'http://fineartamerica.com/featured/cinnamon-donut-joe-spandrusyszyn.html'
  },
  {
    id: 'srs',
    name: 'Strawberry Rhubarb Shortcake',
    purchase: 'http://fineartamerica.com/featured/strawberry-rhubarb-shortcake-joe-spandrusyszyn.html'
  }
] %}
