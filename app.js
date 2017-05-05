
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
};

window.toTheTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
