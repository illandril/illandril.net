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
    id: 'rwb2',
    name: 'Red-winged Blackbird',
    purchase: 'http://www.500pxart.com/photo/79841527?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'df',
    name: 'Dirty Face',
    purchase: 'http://www.500pxart.com/photo/78113203?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'nlf',
    name: 'Northern Leopard Frog',
    purchase: 'http://www.500pxart.com/photo/79840775?substrate=paper&style=PF&frame=F0092&size=S'
  },
  {
    id: 'hbl',
    name: 'Hiding Behind the Leaves',
    purchase: 'http://www.500pxart.com/photo/79841335?substrate=wood&style=BW&frame=F0000&size=S'
  },
  {
    id: 'rmb',
    name: 'Red Milkweed Beetle',
    purchase: 'http://www.500pxart.com/photo/79841613?substrate=paper&style=PF&frame=F0092&size=S'
  },
  {
    id: 'bp',
    name: 'Beach Party',
    purchase: 'http://www.500pxart.com/photo/79841987?substrate=acrylic&style=AS&frame=F0000&size=S'
  }
] %}
