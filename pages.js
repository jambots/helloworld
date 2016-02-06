var pages=[
{"name":"footnav", "hideLeft":0, "hideTop":0,  "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":1, "height":64,
   "buttons":[
    {"name":"listen", "top":58, "left":0, "height":6, "width":16},
    {"name":"request", "top":58, "left":16, "height":6, "width":16},
    {"name":"donate", "top":58, "left":32, "height":6, "width":16}
  ],
  "contents":[
  ]
},
{"name":"listen", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":1, "height":58,
  "buttons":[
    {"name":"more", "top":0, "left":0, "height":7, "width":16},
    {"name":"playlist", "top":0, "left":32, "height":7, "width":16},
    {"name":"playpause", "top":38, "left":12, "height":12, "width":24}
  ],
  "contents":[
    {"name":"nowPlayingDiv", "top":29.5, "left":1, "width":46, "height":8, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":""},
    {"name":"djDiv", "top":51, "left":1, "width":46, "height":8, "lineHeight":2.5, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":""}
  ]
},
{"name":"more", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"extras", "top":11, "left":9, "height":6, "width":30},
    {"name":"alarm", "top":18, "left":9, "height":6, "width":30},
    {"name":"settings", "top":25, "left":9, "height":6, "width":30},
    {"name":"faqs", "top":32, "left":9, "height":6, "width":30}
  ],
  "contents":[
  ]
},
{"name":"alarm", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"cancel", "top":0, "left":36, "height":7, "width":12},
    {"name":"timeset", "top":21, "left":9, "height":12, "width":30},
    {"name":"set", "top":35, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"alarmTimeHour", "top":22, "left":15, "width":6, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"right", "defaultText":"hh"},
    {"name":"alarmTimeMin", "top":22, "left":21, "width":6, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"left", "defaultText":"mm"},
    {"name":"alarmTimeAmPm", "top":22, "left":27, "width":8, "height":10, "lineHeight":4, "fontSize":4, "fontFamily":"akzibold", "color":"black", "textAlign":"center", "defaultText":"ampm"},
  ]
},
{"name":"armed", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":64,
  "buttons":[
    {"name":"cancelalarm", "top":17, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"nowtime", "top":30, "left":8, "width":32, "height":14, "lineHeight":8, "fontSize":8, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"00:00:00"},
    {"name":"nowAmPm", "top":34, "left":39, "width":8, "height":7, "lineHeight":4, "fontSize":2.9, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"AM"},
    {"name":"alarmtext", "top":47, "left":1, "width":46, "height":12, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzilight", "color":"white", "textAlign":"center", "defaultText":"alarmtext"}
  ]
},
{"name":"wakeup", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":64,
  "buttons":[
    {"name":"alarmoff", "top":17, "left":9, "height":6, "width":30},
    {"name":"snooze", "top":47, "left":9, "height":6, "width":30},
  ],
  "contents":[
    {"name":"nowtime", "top":30, "left":8, "width":32, "height":14, "lineHeight":8, "fontSize":8, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"00:00:00"},
    {"name":"nowAmPm", "top":34, "left":39, "width":8, "height":7, "lineHeight":4, "fontSize":2.9, "fontFamily":"akzilight", "color":"#fff", "textAlign":"center", "defaultText":"AM"}
  ]
},
{"name":"shop", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
  ],
  "contents":[
    {"name":"results", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="resultsHolder"><div id="resultsScroller"></div></div>'}
  ]
},
{"name":"settings", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"medium", "top":14, "left":9, "height":6, "width":30},
    {"name":"higher", "top":21, "left":9, "height":6, "width":30},
    {"name":"broken", "top":28, "left":9, "height":6, "width":30}
  ],
  "contents":[
  ]
},
{"name":"request", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"phone", "top":11, "left":9, "height":6, "width":30},
    {"name":"email", "top":18, "left":9, "height":6, "width":30},
    {"name":"tweet", "top":25, "left":9, "height":6, "width":30}
  ],
  "contents":[
  ]
},
{"name":"playlist", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"refresh", "top":0, "left":36, "height":7, "width":12},
  ],
  "contents":[
    {"name":"playlist", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="playlistHolder"><div id="playlistScroller"></div></div>'}
  ]
},
{"name":"events", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
  ],
  "contents":[
    {"name":"events", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="calendarHolder"><div id="calendarScroller"></div></div>'}
  ]
},
{"name":"extras", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"events", "top":9, "left":7, "height":11, "width":11},
    {"name":"totd", "top":25, "left":7, "height":11, "width":11},
    {"name":"wrs", "top":41, "left":7, "height":11, "width":11},
    {"name":"inst", "top":9, "left":30, "height":11, "width":11},
    {"name":"rcp", "top":25, "left":30, "height":11, "width":11},
    {"name":"whl", "top":41, "left":30, "height":11, "width":11},
  ],
  "contents":[
    {"name":"eventsDesc", "top":21, "left":1, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','events');\">EVENTS</a>"},
    {"name":"totdDesc", "top":37, "left":1, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','totd');\">TRACK OF THE DAY</a>"},
    {"name":"wrsDesc", "top":53, "left":1, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','wrs');\">WEEKLY RELEASE SPOTLIGHT</a>"},
    {"name":"instDesc", "top":21, "left":24, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','inst');\">IN-STUDIOS</a>"},
    {"name":"rcpDesc", "top":37, "left":24, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','rcp');\">REAL COLLEGE PODCAST</a>"},
    {"name":"instDesc", "top":53, "left":24, "width":23, "height":2, "lineHeight":2, "fontSize":1.5, "fontFamily":"akzibold", "color":"white", "textAlign":"center", "defaultText":"<a href=\"javascript:handleButton('extras','whl');\">WEEKEND HIT LIST</a>"},
  ]
},
{"name":"totd", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"stotd", "top":0, "left":0, "height":7, "width":12},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="totdHolder"><div id="totdScroller"></div></div>'}
  ]
},
{"name":"wrs", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="wrsHolder"><div id="wrsScroller"></div></div>'}
  ]
},
{"name":"rcp", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"srcp", "top":0, "left":0, "height":7, "width":12},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="rcpHolder"><div id="rcpScroller"></div></div>'}
  ]
},
{"name":"whl", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
    {"name":"swhl", "top":0, "left":0, "height":7, "width":12},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="whlHolder"><div id="whlScroller"></div></div>'}
  ]
},
{"name":"inst", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0,  "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9},
  ],
  "contents":[
    {"name":"downloads", "top":7, "left":0, "height":51, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":'<div id="instHolder"><div id="instScroller"></div></div>'}
  ]
},
{"name":"faqs", "hideLeft":0, "hideTop":0, "hideLeftMargin":0, "hideTopMargin":0, "hideOpac":0, "height":58,
  "buttons":[
    {"name":"done", "top":0, "left":39, "height":7, "width":9}
  ],
  "contents":[
    {"name":"faqsDiv", "top":7.5, "left":0, "height":45.5, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":"How do I become a rich and<br>famous Radio K DJ?"},
    {"name":"regentsDiv", "top":53, "left":0, "height":5, "width":48, "lineHeight":2.6, "fontSize":2, "fontFamily":"akzibold", "color":"white", "textAlign":"left", "defaultText":"How do I become a rich and<br>famous Radio K DJ?"}
  ]
}];
var monToMM={"Jan":"01", "Feb":"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"};
var monToMonth={"Jan":"January", "Feb":"February", "Mar":"March", "Apr":"April", "May":"May", "Jun":"June", "Jul":"July", "Aug":"August", "Sep":"September", "Oct":"October", "Nov":"November", "Dec":"December"};