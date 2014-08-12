{% extends 'album-template.html' %}
{% block albumTitle %}Landscapes{% endblock %}
{% set albumID = 'landscapes' %}
{% set photos = [
  {
    id: 'll',
    name: 'Lover&apos;s Leap',
    purchase: 'http://www.500pxart.com/photo/79163455?substrate=acrylic&style=AS&frame=F0000&size=S'
  },
  {
    id: 'lg',
    name: 'Letchworth Gorge',
    purchase: 'http://www.500pxart.com/photo/79163451?substrate=wood&style=BW&frame=F0000&size=S'
  },
  {
    id: 'ipl',
    name: 'Inspiration Point at Letchworth',
    purchase: 'http://www.500pxart.com/photo/79163609?substrate=wood&style=BW&frame=F0000&size=S'
  }
] %}
