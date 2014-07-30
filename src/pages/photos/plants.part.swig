{% extends 'album-template.html' %}
{% block albumTitle %}Wild Plants &amp; Flowers{% endblock %}
{% set albumID = 'plants' %}
{% set photos = [
  {
    id: 'tlm',
    name: 'Three Little Mushrooms',
    purchase: 'http://www.500pxart.com/photo/78113195?substrate=wood&style=BW&frame=F0000&size=S'
  },
  {
    id: 'tb',
    name: 'Blossoms',
    purchase: 'http://www.500pxart.com/photo/78113193?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'wt',
    name: 'Wild Teasel',
    purchase: 'http://www.500pxart.com/photo/78113197?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'eh',
    name: 'Eastern Hemlock',
    purchase: 'http://www.500pxart.com/photo/78113207?substrate=wood&style=BW&frame=F0000&size=S'
  },
  {
    id: 'sb',
    name: 'Solitary Blossom',
    purchase: 'http://www.500pxart.com/photo/78113187?substrate=paper&style=PF&frame=F0091&size=S'
  }
] %}
