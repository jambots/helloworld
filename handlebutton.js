
function handleButton(pageName, buttonName){
  console.log("handleButton("+pageName+", "+buttonName+")");
  if(pageName=="footnav"){
    if(buttonName=="events"){
      selectPage("events");
      buttonOn("footnav", "events");
      buttonOff("footnav", "playlist");
      }
    if(buttonName=="playlist"){
      selectPage("playlist");
      buttonOff("footnav", "events");
      buttonOn("footnav", "playlist");
      }
    if(buttonName=="donate"){
      buttonOn("footnav", "donate");
      window.setTimeout('buttonOff("footnav", "donate")', navDelay*2);
      window.setTimeout("remoteLink('http://www.radiok.org/donate/')", navDelay);
      }
    }

  if(pageName=="home"){
    if(buttonName=="quality"){
      ////buttonOff("footnav", "home");
      buttonOn("home", "quality");
      window.setTimeout('buttonOff("home", "quality"); selectPage("quality");', navDelay);
      }
    if(buttonName=="more"){
      ////buttonOff("footnav", "home");
      buttonOn("home", "more");
      window.setTimeout('buttonOff("home", "more"); selectPage("more");', navDelay);
      }
    if(buttonName=="playlist"){
      ////buttonOff("footnav", "home");
      buttonOn("home", "playlist");
      window.setTimeout('buttonOff("home", "playlist"); selectPage("playlist");', navDelay);
      getRecentSongsJson();
      }
    if(buttonName=="playpause"){
      togglePlaying();
      }
    }


  if(pageName=="alarm"){
    if(buttonName=="timeset"){
      mouseStartX=mouseX;
      mouseStartY=mouseY;
      var buttLeft=pages[3].buttons[1].left*grid+leftOffset;
      var buttWidth=pages[3].buttons[1].width*grid;
      deltaX=mouseX-buttLeft;
      var xFrac=deltaX/buttWidth;
      touchingDial=1;
      if(xFrac<.45){touchingDial=0;}
      if(xFrac>.65){touchingDial=2;}
      //alert("mouseX="+ mouseX+" buttLeft="+ buttLeft+ " deltax:"+deltaX+" / buttWidth:"+buttWidth+" = xFrac:"+xFrac);

      var mod=genericGet("alarmMinuteOfDay");
      if(touchingDial!=0){
        dials[0].initVal=(minuteOfDayToHour(mod)+11)%12;
        }
      else{
        dials[0].initVal=dials[0].atVal;
        }

      if(touchingDial!=1){
        dials[1].initVal=minuteOfDayToMin(mod);
        }
      else{
        dials[1].initVal=dials[1].atVal;
        }
      if(touchingDial!=2){
        dials[2].initVal=minuteOfDayToHalf(mod);
        }
      else{
        dials[2].initVal=dials[2].atVal;
        }
      dials[0].atVal=dials[0].initVal;
      dials[1].atVal=dials[1].initVal;
      dials[2].atVal=dials[2].initVal;
      dials[0].destVal=dials[0].initVal;
      dials[1].destVal=dials[1].initVal;
      dials[2].destVal=dials[2].initVal;

      dials[0].history=initHistory;
      dials[1].history=initHistory;
      dials[2].history=initHistory;
        
      }
    if(buttonName=="sleepset"){
      mouseStartX=mouseX;
      mouseStartY=mouseY;
      touchingDial=3;

      dials[3].initVal=dials[3].atVal;
      dials[3].atVal=dials[3].initVal;
      dials[3].destVal=dials[3].initVal;
      dials[3].history=initHistory;
      }

    if(buttonName=="set"){
      if(state.streamPlaying){pauseStream();}
      sleepSeconds=0;
      var mil=""+minuteOfDayToHH(genericGet("alarmMinuteOfDay"))+minuteOfDayToMM(genericGet("alarmMinuteOfDay"));
      buttonOn("alarm", "set");
      var textTime=minuteOfDayToHour(genericGet("alarmMinuteOfDay"))+":"+minuteOfDayToMM(genericGet("alarmMinuteOfDay"))+" "+minuteOfDayToAmPm(genericGet("alarmMinuteOfDay"));
      document.getElementById("page_armed_content_alarmtext").innerHTML="Alarm is set for <br />"+textTime+"<br />(do not close)";
      window.setTimeout('buttonOff("alarm", "set"); selectPage("armed");', navDelay);
      snoozeMinutes=0;
      state.alarmSet=true;
      window.plugins.insomnia.keepAwake();
      state.alarmTriggered=false;
      state.uiPlaying=false;
      state.streamCreated=false;
      pauseStream();
      
      buttonOff("home", "playpause");
      }
    if(buttonName=="cancel"){
      buttonOn("alarm", "cancel");
      ////window.setTimeout('buttonOff("alarm", "cancel"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="wakeup"){
    if(buttonName=="alarmoff"){

      state.uiPlaying=false;
      buttonOff("home", "playpause");
      state.streamCreated=false;
      state.alarmTriggered=false;
      pauseStream();
      buttonOn("wakeup", "alarmoff");
      window.setTimeout('buttonOff("wakeup", "alarmoff"); selectPage("home");', navDelay);
      }
    if(buttonName=="snooze"){
      var nowDate=new Date();
      var nowMod=nowDate.getHours()*60+nowDate.getMinutes();
      snoozeMinutes=nowMod-genericGet("alarmMinuteOfDay")+7;
      var textTime=minuteOfDayToHour(genericGet("alarmMinuteOfDay")+snoozeMinutes)+":"+minuteOfDayToMM(genericGet("alarmMinuteOfDay")+snoozeMinutes)+" "+minuteOfDayToAmPm(genericGet("alarmMinuteOfDay")+snoozeMinutes);
      document.getElementById("page_armed_content_alarmtext").innerHTML="Alarm is set for <br />"+textTime+"<br />(do not close)";
      state.streamCreated=false;
      state.alarmTriggered=false;
      state.alarmSet=true; 
      window.plugins.insomnia.keepAwake();
      state.uiPlaying=false;
      pauseStream();
      buttonOff("home", "playpause");
      buttonOn("wakeup", "snooze");
      window.setTimeout('buttonOff("wakeup", "snooze"); selectPage("armed");', navDelay);
      }
    }
  if(pageName=="armed"){
    if(buttonName=="cancelalarm"){
      buttonOn("armed", "cancelalarm");
      window.setTimeout('buttonOff("armed", "cancelalarm"); state.alarmSet=false; selectPage("alarm");', navDelay);
      window.plugins.insomnia.allowSleepAgain();
      }
    }
  if(pageName=="more"){
    if(buttonName=="done"){
      buttonOn("more", "done");
      window.setTimeout('buttonOff("more", "done"); selectPage("home");', navDelay);
      }
    if(buttonName=="ondemand"){
      ////buttonOff("footnav", "home");
      buttonOn("more", "ondemand");
      window.setTimeout('buttonOff("more", "ondemand"); getDownloads(); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="alarm"){
      ////buttonOff("footnav", "home");
      buttonOn("more", "alarm");
      window.setTimeout('buttonOff("more", "alarm"); selectPage("alarm");', navDelay);
      }
    if(buttonName=="quality"){
      ////buttonOff("footnav", "home");
      buttonOn("more", "quality");
      window.setTimeout('buttonOff("more", "quality"); selectPage("quality");', navDelay);
      }
    if(buttonName=="faqs"){
      ////buttonOff("footnav", "home");
      buttonOn("more", "faqs");
      window.setTimeout('buttonOff("more", "faqs"); selectPage("faqs");', navDelay);
      }
    }

  if(pageName=="shop"){
    if(buttonName=="done"){
      buttonOn("shop", "done");
      ////window.setTimeout('buttonOff("shop", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="shopempty"){
    if(buttonName=="done"){
      buttonOn("shopempty", "done");
      ////window.setTimeout('buttonOff("shopempty", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="ondemand"){
    if(buttonName=="done"){
      buttonOn("ondemand", "done");
      ////window.setTimeout('buttonOff("ondemand", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    if(buttonName=="events"){
      buttonOn("ondemand", "events");
      window.setTimeout('buttonOff("ondemand", "events"); selectPage("events");', navDelay);
      }
    if(buttonName=="rks"){
      buttonOn("ondemand", "rks");
      window.setTimeout('buttonOff("ondemand", "rks"); selectPage("rks");', navDelay);
      }
    if(buttonName=="wrs"){
      buttonOn("ondemand", "wrs");
      window.setTimeout('buttonOff("ondemand", "wrs"); selectPage("wrs");', navDelay);
      }
    if(buttonName=="rcp"){
      buttonOn("ondemand", "rcp");
      window.setTimeout('buttonOff("ondemand", "rcp"); selectPage("rcp");', navDelay);
      }
    if(buttonName=="whl"){
      buttonOn("ondemand", "whl");
      window.setTimeout('buttonOff("ondemand", "whl"); selectPage("whl");', navDelay);
      }
    if(buttonName=="inst"){
      instPage=1;
      getInst();
      buttonOn("ondemand", "inst");
      window.setTimeout('buttonOff("ondemand", "inst"); selectPage("inst");', navDelay);
      }

    }
  if(pageName=="rks"){
    if(buttonName=="done"){
      buttonOn("rks", "done");
      window.setTimeout('buttonOff("rks", "done"); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="srks"){
      buttonOn("rks", "srks");
      window.setTimeout('buttonOff("rks", "srks"); remoteLink("https://itunes.apple.com/us/podcast/radio-k-k-sessions/id1183916920?mt=2");', navDelay);
      }
    }
  if(pageName=="rcp"){
    if(buttonName=="done"){
      buttonOn("rcp", "done");
      window.setTimeout('buttonOff("rcp", "done"); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="srcp"){
      buttonOn("rcp", "srcp");
      window.setTimeout('buttonOff("rcp", "srcp"); remoteLink("https://itunes.apple.com/us/podcast/real-college-podcast/id1018935053?mt=2");', navDelay);
      }
    }
  if(pageName=="whl"){
    if(buttonName=="done"){
      buttonOn("whl", "done");
      window.setTimeout('buttonOff("whl", "done"); selectPage("ondemand");', navDelay);
      }
    if(buttonName=="swhl"){
      buttonOn("whl", "swhl");
      window.setTimeout('buttonOff("whl", "swhl"); remoteLink("https://itunes.apple.com/us/podcast/weekend-hit-list/id1019774674?mt=2");', navDelay);
      }
    }

  if(pageName=="wrs"){
    if(buttonName=="done"){
      buttonOn("wrs", "done");
      window.setTimeout('buttonOff("wrs", "done"); selectPage("ondemand");', navDelay);
      }
    }
  if(pageName=="inst"){
    if(buttonName=="done"){
      buttonOn("inst", "done");
      window.setTimeout('buttonOff("inst", "done"); selectPage("ondemand");', navDelay);
      }
    }
  if(pageName=="quality"){
    if(buttonName=="faqs"){
      buttonOn("quality", "faqs");
      window.setTimeout('buttonOff("quality", "faqs"); selectPage("faqs");', navDelay);
      }
    if(buttonName=="done"){
      buttonOn("quality", "done");
     //// window.setTimeout('buttonOff("quality", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    if(buttonName=="medium"){
      eventStack.push("setting medium");
      buttonOn("quality", "medium");
      buttonOff("quality", "higher");
      //buttonOff("quality", "test");
      genericSet("quality", "medium");
      }
    if(buttonName=="higher"){
      eventStack.push("setting higher");
      buttonOff("quality", "medium");
      buttonOn("quality", "higher");
      //buttonOff("quality", "test");
      genericSet("quality", "higher");

      }
    if(buttonName=="test"){
      eventStack.push("setting higher");
      buttonOff("quality", "medium");
      buttonOff("quality", "higher");
      //buttonOn("quality", "test");
      genericSet("quality", "test");

      }
    }
  if(pageName=="faqs"){
    if(buttonName=="done"){
      buttonOn("faqs", "done");
      ////window.setTimeout('buttonOff("faqs", "done"); buttonOn("footnav", "home"); selectPage("home");', navDelay);
      }
    }
  if(pageName=="events"){
    if(buttonName=="done"){
      buttonOn("events", "done");
      ////window.setTimeout('buttonOff("events", "done"); buttonOn("footnav", "home"); selectPage("ondemand");', navDelay);
      }
    }
  if(pageName=="request"){
    if(buttonName=="done"){
      buttonOn("request", "done");
      ////window.setTimeout('buttonOff("request", "done"); buttonOn("footnav", "home");  buttonOff("footnav", "request"); selectPage("home");', navDelay);
      }
    if(buttonName=="faqs"){
      buttonOn("request", "faqs");
      buttonOff("footnav", "request");
      window.setTimeout('buttonOff("request", "faqs"); selectPage("faqs");', navDelay);
      }
    if(buttonName=="phone"){
      buttonOn("request", "phone");
      window.setTimeout('buttonOff("request", "phone")', navDelay*2);
      //window.location='tel:+16126264770';
      window.setTimeout("remoteLink('tel:+16126264770')", navDelay);
      }
    if(buttonName=="email"){
      buttonOn("request", "email");
      window.setTimeout('buttonOff("request", "email")', navDelay*2);
      //window.location='mailto:request@radiok.org?subject=Request from Radio K app';
      window.setTimeout("remoteLink('mailto:radiokdj@umn.edu?subject=Request from Radio K app')", navDelay);
      }
    if(buttonName=="tweet"){
      buttonOn("request", "tweet");
      window.setTimeout('buttonOff("request", "tweet")', navDelay*2);
      //window.location='https://twitter.com/intent/tweet?source=webclient&text=%40RadioK+%23Request';
      window.setTimeout("remoteLink('https://twitter.com/intent/tweet?source=webclient&text=%40RadioK+%23Request')", navDelay);
      }
    }
  if(pageName=="playlist"){
    if(buttonName=="refresh"){
      buttonOn("playlist", "refresh");
      window.setTimeout('buttonOff("playlist", "refresh")', navDelay*2);
      getRecentSongsJson();
      }
    }
  }

