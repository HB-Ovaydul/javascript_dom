
/**
 *  send a massage with settimeout
 */

const massage = document.getElementById('msg');
const outpot = document.getElementById('outpot');
const stops = document.getElementById('stop');

let clear_mag;
massage.addEventListener('click', function(){
   outpot.innerHTML = 'Wait Please';
  clear_mag = setTimeout(() => {
      outpot.innerHTML = 'MERN Stack Developer';
   }, 1000);
});

stops.addEventListener('click', function(){
   clearTimeout(clear_mag);
   outpot.innerHTML = '';
});

