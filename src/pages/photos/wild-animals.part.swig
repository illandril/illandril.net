{% extends 'album-template.html' %}
{% block albumTitle %}Wild Animals{% endblock %}
{% set albumID = 'wild-animals' %}
{% set photos = [
  {
    id: 'gbh',
    name: 'Great Blue Heron',
    purchase: 'http://www.500pxart.com/photo/78113181?substrate=paper&style=PF&frame=F0091&size=S'
  },
  {
    id: 'fa',
    name: 'Flying Away',
    purchase: 'http://www.500pxart.com/photo/78113179?substrate=acrylic&style=AS&frame=F0000&size=S'
  },
  {
    id: 'pt',
    name: 'Painted Turtle',
    purchase: 'http://www.500pxart.com/photo/78113183?substrate=paper&style=PF&frame=F0092&size=S'
  },
  {
    id: 'rwb',
    name: 'Red-winged Blackbird',
    purchase: 'http://www.500pxart.com/photo/78113185?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'df',
    name: 'Dirty Face',
    purchase: 'http://www.500pxart.com/photo/78113203?substrate=canvas&style=CG&frame=F0000&size=S'
  }
] %}
