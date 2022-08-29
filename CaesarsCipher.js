function rot13(str) {    
    let strCoder = str.toUpperCase().split('');
    let strDescoder ="";
    let regex= /[^A-Z]/gi;
    
    for(var i in strCoder){
      if(!regex.test(strCoder[i]))
      {
        strDescoder += String.fromCharCode(
                        strCoder[i].charCodeAt(0) 
                        +(strCoder[i]<= 'M'? 13: -13)
                      ); 
       //console.log(strDescoder);  
      }else{
        strDescoder+=strCoder[i];
      }     
    }
    //console.log(strCoder);
    console.log(strDescoder);
    return strDescoder;
  }
  
  //rot13("SERR PBQR PNZC!");
  rot13("SErR PBQR PNZC!");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")