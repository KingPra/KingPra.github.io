
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
};

window.toTheTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
