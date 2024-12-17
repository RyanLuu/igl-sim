import {addData, clearData} from './chart.js';
import {Element} from './particle.js';
import {variables,options} from './data.js';

import {MDCSlider} from '@material/slider';
import {MDCTabBar} from '@material/tab-bar';
import {MDCIconButtonToggle} from '@material/icon-button';
import {MDCChipSet} from '@material/chips';
import {MDCList} from '@material/list';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCSwitch} from '@material/switch';
import {MDCRipple} from '@material/ripple';

// RIPPLE \\

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// TAB BAR \\

var tabs = [];

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
for (let i = 0; i < 3; i++) {
  tabs[i] = document.getElementById('tab-' + i);
}
tabBar.listen('MDCTabBar:activated', (e) => {
  for (let i = 0; i < tabBar.tabList.length; i++) {
    if (e.detail.index == i) {
      tabs[i].style.display = "block";
    } else {
      tabs[i].style.display = "none";
    }
    for (let slider in varSliders) {
      varSliders[slider].layout();
    }
  }
});

// SLIDERS \\

let varSliders = {}

Array.from(document.getElementsByClassName('var-slider')).forEach(element => {
  let slider = new MDCSlider(element);
  let variable = slider.inputs[0].name;

  varSliders[variable] = slider;

  slider.listen('MDCSlider:input', (e) => {
    let temp = Object.assign({}, variables); // make a copy of 'variables'
    temp[variable] = e.detail.value;
    recompute(variable, locked, temp); // do calculations on copy
    variables[variable] = temp[variable]; // then output results to 'variables'
    variables[locked] = temp[locked]; // so that the 'set' proxy method isn't called in intermediate steps.
    if (options.lineChart) {
      addData(variable, locked, {x:varSliders[variable].getValue(), y:varSliders[locked].getValue()});
    }
  });
});

let speciesList = new MDCList(document.getElementById('species-list'));

variables.addEventListener('set', (evt) => {
  if (varLabels[evt.variable] && varSliders[evt.variable]) {
    varLabels[evt.variable].innerText = evt.value.toFixed(2);
    varSliders[evt.variable].setValue(evt.value);
    varSliders[evt.variable].layout();
  }
  if (evt.variable.startsWith('species') || evt.variable.startsWith('moles')) {
    let n = Number(evt.variable.substring(evt.variable.length - 1));
    let speciesIcon = speciesList.root.children[n].querySelector(".mdc-list-item__graphic")
    if (variables["moles" + n] > 0) {
      speciesIcon.style.color = Element[variables["species" + n]].color;
      speciesIcon.style.opacity = 1;
    } else {
      speciesIcon.style.color = 'var(--mdc-on-surface)';
      speciesIcon.style.opacity = 0.38;
    }
    if (evt.variable.startsWith('species')) {
      speciesIcon.style.fontSize = Element[variables["species" + n]].radius/10 + "pt";

      let el = Element[variables["species" + n]];
      let fields = Array.from(document.querySelectorAll(".species" + n + " .element-label span"));
      fields[0].innerText = `${el.number}`;
      fields[1].innerText = `${el.name}`;
      fields[2].innerText = `Radius: ${el.radius} pm`;
      fields[3].innerText = `Mass: ${el.mass} u`;

      document.getElementById('species-list').children[n].querySelector('.species-label').setAttribute('element', el.name);
    }
  }
});

function recompute(x, y, variables) {
  let P = variables.pressure,
    V = variables.volume,
    n0 = variables.moles0,
    n1 = variables.moles1,
    n2 = variables.moles2,
    R = 0.0821,
    T = variables.temperature;
  let newValue;
  if (y == "pressure") {
    newValue = (n0 + n1 + n2) * R * T / V;
  } else if (y == "volume") {
    newValue = (n0 + n1 + n2) * R * T / P;
  } else if (y == "moles0") {
    newValue = P * V / R / T - n1 - n2;
  } else if (y == "moles1") {
    newValue = P * V / R / T - n0 - n2;
  } else if (y == "moles2") {
    newValue = P * V / R / T - n0 - n1;
  } else if (y == "temperature") {
    newValue = P * V / (n0 + n1 + n2) / R;
  }

  variables[y] = newValue.clamp(varSliders[y].inputs[0].min, varSliders[y].inputs[0].max);

  if (newValue < varSliders[y].inputs[0].min || newValue > varSliders[y].inputs[0].max) {
    recompute(null, x, variables);
  }
}

// SLIDER LABELS \\

let varLabels = [];

Array.from(document.getElementsByClassName('label')).forEach(element => {
  varLabels[element.getAttribute('var')] = element;
});

// LOCK BUTTONS \\

let toggleLockButtons = [];

let locked = document.querySelector('.toggle-lock[aria-pressed="true"]').getAttribute('var');

Array.from(document.getElementsByClassName('toggle-lock')).forEach(element => {
  let iconButton = new MDCIconButtonToggle(element);
  toggleLockButtons[element.getAttribute('var')] = iconButton;
  iconButton.listen('MDCIconButtonToggle:change', () => {
    if (iconButton.on) {
      for (let element in toggleLockButtons) {
        if (toggleLockButtons[element] == iconButton) {
          locked = element;
          toggleLockButtons[element].root.setAttribute('disabled', 'true');
          iconButton.on = true;
          varSliders[element].setDisabled(true);
        } else {
          toggleLockButtons[element].root.removeAttribute('disabled');
          toggleLockButtons[element].on = false;
          varSliders[element].setDisabled(false);
        }
      }
    }
  });
});

// RESET BUTTON \\

tabs[0].querySelector('#reset-button').addEventListener('click', () => {
  variables.temperature = 273.15;
  variables.volume = 22.40;
  variables.pressure = 1.00;
  let totalMoles = variables.moles0 + variables.moles1 + variables.moles2;
  variables.moles0 = variables.moles0 / totalMoles;
  variables.moles1 = variables.moles1 / totalMoles;
  variables.moles2 = variables.moles2 / totalMoles;
});

// SPECIES LIST \\

var listEle = document.getElementById('species-list');
var list = new MDCList(listEle);
list.singleSelection = true;
list.listen('click', (evt) => {
  setSpecies(list.foundation.selectedIndex);
});
list.listen('keydown', (evt) => {
  setSpecies(list.foundation.selectedIndex);
});

let currentSpecies = -1;

function setSpecies(sp) {

  function hide() {
    Array.from(document.getElementsByClassName('gas-options')).forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(-20px)';
      setTimeout(() => element.style.display = "none", 175);
    });
  }
  function show(i) {
    Array.from(document.getElementsByClassName('gas-options')).forEach(element => {
      if (element.classList.contains("species" + i)) {
        element.style.display = "block";
        requestAnimationFrame(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0px)';
        });
      }
    });
    varSliders["moles" + i].layout();
  }

  if (currentSpecies != sp) {
    if (sp == -1) {
      hide();
    } else {
      if (currentSpecies == -1) {
        show(sp);
      } else {
        hide();
        setTimeout(() => show(sp), 175);
      }
    }        
    currentSpecies = sp;
  }
}

// ELEMENT CHIPS \\

Array.from(document.getElementsByClassName('mdc-evolution-chip-set')).forEach(chipSetEl => {
  const chipset = new MDCChipSet(chipSetEl);
  chipset.listen('MDCChipSet:selection', (e) => {
    let chipEl = document.getElementById(e.detail.chipID);
    variables["species" + currentSpecies] = chipEl.innerText.trim();
  });
});

// DISPLAY OPTIONS \\

const trailSwitchEl = document.querySelector('#trail-switch');
const trailSwitch = new MDCSwitch(trailSwitchEl);
trailSwitchEl.addEventListener('click', () => {
  options.trail = trailSwitch.selected;
});

const darkSwitchEl = document.querySelector('#dark-switch');
const darkSwitch = new MDCSwitch(darkSwitchEl);
darkSwitchEl.addEventListener('click', () => {
  if (darkSwitch.selected) {
    document.documentElement.style.setProperty("--mdc-theme-primary", "#FFFFFF");
    document.documentElement.style.setProperty("--mdc-theme-on-primary", "#37474f");
    document.documentElement.style.setProperty("--mdc-theme-background", "#212121");
    document.documentElement.style.setProperty("--mdc-theme-surface", "#424242");
    document.documentElement.style.setProperty("--mdc-theme-on-surface", "#FFFFFF");
  } else {
    document.documentElement.style.setProperty("--mdc-theme-primary", "#37474f");
    document.documentElement.style.setProperty("--mdc-theme-on-primary", "#FFFFFF");
    document.documentElement.style.setProperty("--mdc-theme-background", "#F2F2F2");
    document.documentElement.style.setProperty("--mdc-theme-surface", "#FFFFFF");
    document.documentElement.style.setProperty("--mdc-theme-on-surface", "#000000");
  }
});


// CHART PANEL \\

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

let card = false;

document.getElementById('chart-fab').addEventListener('click', (evt) => {
  let fab = document.getElementById('chart-fab');
  if (!card) {
    if(variables.lineChart) {
      clearData();
    }
    card = true;
    fab.style.borderRadius = "0";
    fab.style.backgroundColor = "var(--mdc-theme-surface)";
    fab.style.cursor = "default";
    fab.querySelector(".mdc-fab__icon").style.display = "none";
    fab.querySelector(".mdc-fab__icon").style.opacity = "0";
    fab.querySelector("header").classList.toggle('hidden');
    fab.querySelector("#chart").classList.toggle('hidden');
    fab.querySelector("header").style.opacity = "1";
    fab.querySelector("#chart").style.opacity = "1";

    updateCardSize();
  }
});

window.addEventListener('resize', function(event) {
  if (card) {
    updateCardSize();
  }
});

let chartType = "line";
document.querySelector('#chart-type').addEventListener('click', (evt) => {
  let a = 0, flag = false;
  tick();
  function tick() {
    let w = Number(document.getElementById("chart-fab").clientWidth);
    a += Math.PI / 30;
    document.getElementById("chart").style.width = w * Math.cos(a);
    if (a >= Math.PI / 2) {
      if (!flag) {
        if (chartType == "line") {
          chartType = "bar";
          options.lineChart = false;
          evt.target.innerHTML = "show_chart";
          document.querySelector("#chart-fab span.mdc-top-app-bar__title").innerHTML = "Particles";
        } else {
          chartType = "line";
          options.lineChart = true;
          evt.target.innerHTML = "bar_chart";
          document.querySelector("#chart-fab span.mdc-top-app-bar__title").innerHTML = "Relations";
        }
        flag = true;
      }
      document.getElementById("chart").style.width = -w * Math.cos(a);
    }
    if (a <= Math.PI) {
      requestAnimationFrame(tick);
    }
  }
  document.getElementById("chart").style.width = Number(document.getElementById("chart-fab").clientWidth);
});

document.querySelector('#close-chart').addEventListener('click', (evt) => {
  let fab = document.querySelector('#chart-fab');
  fab.style.borderRadius = "50%";
  fab.style.backgroundColor = "var(--mdc-theme-secondary, #F9AA33)";

  fab.style.width = '56px';
  fab.style.height = '56px';
  fab.style.cursor = "pointer";

  fab.querySelector("header").style.opacity = "0";
  fab.querySelector("#chart").style.opacity = "0";

  setTimeout(function() {
    card = false;
    fab.querySelector(".mdc-fab__icon").style.display = "block";
    fab.querySelector("header").classList.toggle('hidden');
    fab.querySelector("#chart").classList.toggle('hidden');
    requestAnimationFrame(function() {
      fab.querySelector(".mdc-fab__icon").style.opacity = 1;
    });
  }, 600);
});

function updateCardSize() {
  let fab = document.getElementById('chart-fab');
  let w = window.innerWidth;
  let h = window.innerHeight - document.getElementById("controls-card").clientHeight;

  if (w * 1.5 < h) { // portrait
    fab.style.width = (w - parseFloat(window.getComputedStyle(fab).right) * 2) + 'px';
    fab.style.height = fab.style.width;
  } else { // landscape
    fab.style.height = Math.min(
      w / 2 - parseFloat(window.getComputedStyle(fab).right) * 2,
      h - parseFloat(window.getComputedStyle(fab).bottom) * 2) + 'px';
    fab.style.width = fab.style.height;
  }
}
