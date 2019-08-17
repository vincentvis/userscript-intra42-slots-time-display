// ==UserScript==
// @name     Show normal time in Intra42 slots
// @version  1
// @grant    none
// @author   vincent
// @match    https://profile.intra.42.fr/slots
// ==/UserScript==

(function() {
  'use strict';

  waitForData();
  
})();

function waitForData() {
 	var rows = document.querySelectorAll('.fc-time-grid .fc-slats table tbody tr[data-time]');
  if(rows.length <= 0)
  {
   	window.setTimeout(function(){waitForData();}, 250);
  }
  else
  {
    manipTimeDisplay();
  } 
}

function manipTimeDisplay() {
  var rows = document.querySelectorAll('.fc-time-grid .fc-slats table tbody tr[data-time]');
  for(let i = 0; i < rows.length; i++) {
    if(rows[i].dataset.hasOwnProperty('time') && !rows[i].classList.contains('fc-minor'))
    {
    	var normaltime = rows[i].dataset.time;
	    if(normaltime)
  	  {
    	  normaltime = normaltime.substr(0,normaltime.length - 3);
	    }
	    rows[i].querySelector('.fc-axis span').textContent = normaltime;
    }
  } 
}
