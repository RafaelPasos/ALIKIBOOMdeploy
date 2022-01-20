import logo from './logo.svg';
import './App.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import {Howl, Howler} from 'howler';

let sada = false;
let boolPerc = false;
let boolTop = false;
let boolKick = false;
let boolClap = false;
let loading = true;

function App() {
  const clap = require('../src/assets/LIVE1/clap.wav');
  const kick = require('../src/assets/LIVE1/kick.wav');
  const pad = require('../src/assets/LIVE1/pad.wav');
  const percs = require('../src/assets/LIVE1/percs.wav');
  const tops = require('../src/assets/LIVE1/tops.wav');
  const sounito = require('../src/assets/sound.wav');
  const [clapActive, setClapActive] = useState(false);
  const [percsActive, setPercsActive] = useState(false);
  const [kickActive, setKickActive] = useState(false);
  const [topActive, setTopActive] = useState(false);
  const [padActive, setPadActive] = useState(false);
  const [idpads, setidpads] = useState(0);

  useEffect(() => {
    var elementgroovebox = document.getElementById("idheader");
    elementgroovebox.style.visibility = "hidden";

    let timerId = window.setTimeout(async function tick() {
      //clapSound.play()
      clearInterval(timerId)
      console.log("clap loop " + id++)
      miFuncion()
      timerId = setTimeout(tick, 7680); // (*)
    }, 6000);
  }, []);
  
  var clapSound = new Howl({
    src: [clap],
  });
  var kickSound = new Howl({
    src: [kick],
  });
  var padSound = new Howl({
    src: [pad],
  });
  var percsSound = new Howl({
    src: [percs],
  });
  var topsSound = new Howl({
    src: [tops],
  });
  var sound = new Howl({
    src: [sounito],
  });
  let id = 10;

  const miFuncion = () => {
    
    loading = false;
    var elementholder = document.getElementById("divholder");
    elementholder.style.display = "none";
    
    var elementgroovebox = document.getElementById("idheader");
    elementgroovebox.style.visibility = "visible";
    
    var elementd = document.getElementById("myDIV");
    elementd.classList.remove("loopi")
    elementd.classList.add("loopi");

    var elementclap = document.getElementById("clapbtndiv");
    divplaycolor(elementclap, false)

    var elementkick = document.getElementById("kickbtndiv");
    divplaycolor(elementkick, false)

    var elementtop = document.getElementById("topbtndiv");
    divplaycolor(elementtop, false)

    var elementperc = document.getElementById("percbtndiv");
    divplaycolor(elementperc, false)

    var elementpad = document.getElementById("padbtndiv");
    divplaycolor(elementpad, false)

    if(sada)
    {
      padSound.play()
      divplaycolor(elementpad, true)
    }
    if(boolClap)
    {
      clapSound.play()
      divplaycolor(elementclap, true)
    }
    if(boolKick)
    {
      kickSound.play()
      divplaycolor(elementkick, true)
    }
    if(boolPerc)
    {
      percsSound.play()
      divplaycolor(elementperc, true)
    }
    if(boolTop)
    {
      topsSound.play()
      divplaycolor(elementtop, true)
    }
    
  }

  function divplaycolor(e, saas)
  {
    if (saas)
    {
      e.classList.add("animate__animated");
      e.classList.add("animate__flash");
      e.classList.add("animate__infinite");
    }
    else
    {
      e.classList.remove("animate__animated");
      e.classList.remove("animate__flash");
      e.classList.remove("animate__infinite");
    }
  }

  function divplay(e, saas)
  {
    if (saas)
    {
      e.classList.add("Active");
    }
    else
    {
      e.classList.remove("Active");
    }
  }
  return (

    <div className="App">
      <div id={"divholder"} className="holder">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div id="myDIV" className={"loopClockDiv"}></div>
      <header id={"idheader"} className="App-header">
        <div id={"clapbtndiv"} className={(!boolClap)?"playTopBtn":"playTopBtn Active animate__animated animate__flash animate__infinite"} onClickCapture={function(e){
            e.stopPropagation();
            e.preventDefault()
            e.nativeEvent.stopImmediatePropagation();
            var elementclap = document.getElementById("clapbtndiv");
            boolClap = !boolClap
            divplay(elementclap,boolClap)
          }}>clap</div>
        <div id={"kickbtndiv"} className={(!boolKick)?"playTopBtn":"playTopBtn Active animate__animated animate__flash animate__infinite"} onClickCapture={function(e){
            e.stopPropagation();
            e.preventDefault()
            e.nativeEvent.stopImmediatePropagation();
            var elementkick = document.getElementById("kickbtndiv");
            boolKick = !boolKick
            divplay(elementkick,boolKick)
          }}>kick</div>
        <div id={"percbtndiv"} className={(!boolPerc)?"playTopBtn":"playTopBtn Active animate__animated animate__flash animate__infinite"} onClickCapture={function(e){
            e.stopPropagation();
            e.preventDefault()
            e.nativeEvent.stopImmediatePropagation();
            var elementperc = document.getElementById("percbtndiv");
            boolPerc = !boolPerc
            divplay(elementperc,boolPerc)
          }}>percs</div>
        <div id={"topbtndiv"} className={(!boolTop)?"playTopBtn":"playTopBtn Active animate__animated animate__flash animate__infinite"} onClickCapture={function(e){
            e.stopPropagation();
            e.preventDefault()
            e.nativeEvent.stopImmediatePropagation();
            var elementtop = document.getElementById("topbtndiv");
            boolTop = !boolTop
            divplay(elementtop,boolTop)
          }}>tops</div>
        <div id={"padbtndiv"} className={(!sada)?"playPadBtn":"playPadBtn Active animate__animated animate__flash animate__infinite"} onClickCapture={function(e){
            e.stopPropagation();
            e.preventDefault()
            e.nativeEvent.stopImmediatePropagation();
            var elementpad = document.getElementById("padbtndiv");
            sada = !sada
            divplay(elementpad,sada)
          }}>pad</div>
        <div onClick={function(){console.log('el.aliki');}}>ALIKIBOX</div>
      </header>
    </div>
  );
}

export default App;
