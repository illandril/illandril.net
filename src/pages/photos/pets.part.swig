{% extends 'album-template.html' %}
{% block albumTitle %}Pets{% endblock %}
{% set albumID = 'pets' %}
{% set photos = [
  {
    id: 'pd',
    name: 'Playful Dean'
  },
  {
    id: 'mf',
    name: 'Feline Gaze',
    purchase: 'http://www.500pxart.com/photo/79170457?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'zzz',
    name: 'Zzzzz...',
    purchase: 'http://www.500pxart.com/photo/79170613?substrate=canvas&style=CG&frame=F0000&size=S'
  }
] %}
