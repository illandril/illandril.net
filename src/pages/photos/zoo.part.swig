{% extends 'album-template.html' %}
{% block albumTitle %}Zoo Animals{% endblock %}
{% set albumID = 'zoo' %}
{% set photos = [
  {
    id: 'abc',
    name: 'ABC'
  },
  {
    id: 'def',
    name: 'DEF'
  }
] %}
