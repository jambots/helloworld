function parseDownloads(theXml, source){
  console.log("parseDownloads() "+source);
  console.log(theXml);
  if(source=="In-Studios"){
    var instObj=xmlToJson(theXml);
    console.log(instObj);
    if(instObj.hasOwnProperty("rss")){

      var itemsArray=instObj.rss.channel.item;
      console.log('itemsArray.length='+itemsArray.length);
      for (var i=0; (i<itemsArray.length)&&(i<14); i++){
        //dbuga('i:'+i)
        var thisObj=itemsArray[i];
        console.log(thisObj);
        var dateStr=thisObj.pubDate["#text"];
        var parts=dateStr.split(" ");
        var yyyy=parts[3];
        var mm=monToMM[parts[2]];
        var dd=parts[1];
        var timeCode=parts[4];
        var timeParts=timeCode.split(":");
        var hhmmss=timeParts[0]+timeParts[1]+timeParts[2];
        var sortNum=yyyy+mm+dd+hhmmss;
        var dispDate=monToMonth[parts[2]]+" "+Number(parts[1]);
        var title=thisObj.title["#text"];
        var description=thisObj.description["#text"].split("Website: ")[1];
        //this Obj.guid["#text"];
        var link=thisObj.link["#text"];
        //dbuga(i+' okay '+' '+sortNum+' '+dispDate+' '+title+' '+description+' '+link);
        var item={
          "sort":sortNum,
          "source":source,
          "date":dispDate,
          "image":thisObj["image"].url["#text"],
          "title":title,
          "description":description,
          "link":link
        };
        console.log(item);
        instDownloads.push(item);
        console.log('instDownloads.length='+instDownloads.length);
      }
      updateInstDownloads();
    }
  }


  if(source=="K Singles Club"){
    var kscObj=xmlToJson(theXml);
    if(kscObj.hasOwnProperty("rss")){

      var itemsArray=kscObj.rss.channel.item;
      //console.log('itemsArray.length='+itemsArray.length);
      for (var i=0; (i<itemsArray.length)&&(i<14); i++){
        //dbuga('i:'+i)
        var thisObj=itemsArray[i];
        //console.log(thisObj);
        var dateStr=thisObj.pubDate["#text"];
        var parts=dateStr.split(" ");
        var yyyy=parts[3];
        var mm=monToMM[parts[2]];
        var dd=parts[1];
        var timeCode=parts[4];
        var timeParts=timeCode.split(":");
        var hhmmss=timeParts[0]+timeParts[1]+timeParts[2];
        var sortNum=yyyy+mm+dd+hhmmss;
        var dispDate=monToMonth[parts[2]]+" "+Number(parts[1]);
        var title=thisObj.title["#text"];
        var description="A curated bi-weekly mix of 10 tracks we think you should have.";
        //this Obj.guid["#text"];
        var link=thisObj.link["#text"];
        //dbuga(i+' okay '+' '+sortNum+' '+dispDate+' '+title+' '+description+' '+link);
        var item={
          "sort":sortNum,
          "source":source,
          "date":"",
          "image":"images_large/page_ondemand_button_ksc_off.png",
          "title":title,
          "description":description,
          "link":link
        };
        kscDownloads.push(item);
        dbuga('kscDownloads.length='+kscDownloads.length);
      }
      updateKscDownloads();
    }
  }

  if(source=="K Sessions"){
    var rksObj=xmlToJson(theXml);
    var itemsArray=rksObj.rss.channel.item;
    //dbuga('itemsArray.length='+itemsArray.length);
    for (var i=0; (i<itemsArray.length)&&(i<14); i++){
      //dbuga('i:'+i)
      var thisObj=itemsArray[i];
      var dateStr=thisObj.pubDate["#text"];
      var parts=dateStr.split(" ");
      var yyyy=parts[3];
      var mm=monToMM[parts[2]];
      var dd=parts[1];
      var timeCode=parts[4];
      var timeParts=timeCode.split(":");
      var hhmmss=timeParts[0]+timeParts[1]+timeParts[2];
      var sortNum=yyyy+mm+dd+hhmmss;
      var dispDate=monToMonth[parts[2]]+" "+Number(parts[1]);
      var title=thisObj.title["#text"];
      var description=thisObj.guid["#text"];
      var link=thisObj.link["#text"];
      //dbuga(i+' okay '+' '+sortNum+' '+dispDate+' '+title+' '+description+' '+link);
      var item={
        "sort":sortNum,
        "source":source,
        "date":dispDate,
        "image":thisObj["itunes:image"]["@attributes"]["href"],
        "title":title,
        "description":description,
        "link":link
        };
      rksDownloads.push(item);
      //dbuga('rksDownloads.length='+rksDownloads.length);

      }
    updateRksDownloads();
    }
  if(source=="Weekly Release Spotlight"){
    wrsObj=xmlToJson(theXml);
    var itemsArray=wrsObj.rss.channel.item;
    //dbuga('itemsArray.length='+itemsArray.length);
    for (var i=0; (i<itemsArray.length)&&(i<14); i++){
      var thisObj=itemsArray[i];
      var dateStr=thisObj.pubDate["#text"];
      var parts=dateStr.split(" ");
      var yyyy=parts[3];
      var mm=monToMM[parts[2]];
      var dd=parts[1];
      var timeCode=parts[4];
      var timeParts=timeCode.split(":");
      var hhmmss=timeParts[0]+timeParts[1]+timeParts[2];
      var sortNum=yyyy+mm+dd+hhmmss;
      var dispDate=monToMonth[parts[2]]+" "+Number(parts[1]);
      var band=thisObj.title["#text"];
      var album=thisObj.description["#text"];
      var link=thisObj.link["#text"];
      var item={
        "sort":sortNum,
        "source":source,
        "date":dispDate,
        "image":thisObj["itunes:image"]["@attributes"]["href"],
        "title":band,
        "description":album,
        "link":link
        };
      wrsDownloads.push(item);
      }
    updateWrsDownloads();
    }
  if(source=="Real College Podcast"){
    rcpObj=xmlToJson(theXml);
    var itemsArray=rcpObj.rss.channel.item;
    console.log(' RCP itemsArray.length='+itemsArray.length);

    for (var i=0; (i<itemsArray.length)&&(i<14); i++){
      console.log('i:'+i)
      var thisObj=itemsArray[i];
      console.log(thisObj);
      var dateStr=thisObj.pubDate["#text"];
      var parts=dateStr.split(" ");
      var yyyy=parts[3];
      var mm=monToMM[parts[2]];
      var dd=parts[1];
      var timeCode=parts[4];
      var timeParts=timeCode.split(":");
      var hhmmss=timeParts[0]+timeParts[1]+timeParts[2];
      var sortNum=yyyy+mm+dd+hhmmss;
      var dispDate=monToMonth[parts[2]]+" "+Number(parts[1]);
      var title=thisObj.title["#text"];
      var description=thisObj.description["#text"];
      var link=thisObj.link["#text"];
      //dbuga(i+' okay '+' '+sortNum+' '+dispDate+' '+title+' '+description+' '+link);
      var item={
        "sort":sortNum,
        "source":source,
        "date":dispDate,
        "image":thisObj["itunes:image"]["@attributes"]["href"],
        "title":title,
        "description":description,
        "link":link
        };
      rcpDownloads.push(item);
      //dbuga('rcpDownloads.length='+rcpDownloads.length);

      }

    updateRcpDownloads();
    }
  //dbuga('parse completed');
  }
