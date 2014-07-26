{% extends 'album-template.html' %}
{% block albumTitle %}Wild Animals{% endblock %}
{% set albumID = 'wild-animals' %}
{% set photos = [
  {
    id: 'gbh',
    name: 'Great Blue Heron',
    purchase: 'http://fineartamerica.com/featured/great-blue-heron-joe-spandrusyszyn.html'
  },
  {
    id: 'fa',
    name: 'Flying Away',
    purchase: 'http://fineartamerica.com/featured/flying-away-joe-spandrusyszyn.html'
  },
  {
    id: 'pt',
    name: 'Painted Turtle',
    purchase: 'http://fineartamerica.com/featured/painted-turtle-joe-spandrusyszyn.html'
  },
  {
    id: 'rwb',
    name: 'Red-winged Blackbird',
    purchase: 'http://fineartamerica.com/featured/red-winged-blackbird-joe-spandrusyszyn.html'
  },
  {
    id: 'df',
    name: 'Dirty Face',
    purchase: 'http://fineartamerica.com/featured/dirty-face-joe-spandrusyszyn.html'
  }
] %}
