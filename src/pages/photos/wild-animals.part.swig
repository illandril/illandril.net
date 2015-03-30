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
  },
  {
    id: 'ngf',
    name: 'Northern Green Frog',
    purchase: 'http://www.500pxart.com/photo/80080701?substrate=acrylic&style=AS&frame=F0000&size=S'
  },
  {
    id: 'b',
    name: 'Burrowing',
    purchase: 'http://www.500pxart.com/photo/80080697?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'fol',
    name: 'Frog on a Log',
    purchase: 'http://www.500pxart.com/photo/80080699?substrate=paper&style=PF&frame=F0092&size=S'
  },
  {
    id: 's',
    name: 'Showoff',
    purchase: 'http://www.500pxart.com/photo/80082591?substrate=paper&style=PF&frame=F0091&size=S'
  }
] %}
<!--
Eastern Grey Squirrel
http://www.500pxart.com/photo/87800239?substrate=wood&style=BW&frame=F0000&size=S

American Red Squirrel
http://www.500pxart.com/photo/87800237?substrate=canvas&style=CG&frame=F0000&size=S
-->