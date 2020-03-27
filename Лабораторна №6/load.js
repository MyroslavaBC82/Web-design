var conteiner = document.getElementById('conteiner');
var BigContetnt =document.getElementById('BigContent');
var bigImage =document.createElement('img');
var imageList=['img/load.png','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg',
'img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/11.jpg','img/10.jpg','img/unload.jpg'];
function MakeImg(){  
    for(let i=1;i<imageList.length-1;i++)
    {
        let img =document.createElement('img');
        img.className='rot';
        img.src=imageList[0];
        conteiner.append(img);
        setTimeout(function(){img.src=imageList[i];
        img.className='';
        img.style.width='300px';
        img.style.height='400px';
        img.onclick = function(){
            bigImage.src=this.src;
            BigContetnt.className='show-block';
            BigContetnt.append(bigImage);
         }
         BigContetnt.ondblclick = function ()
        {
            BigContetnt.className='hidden-block';
            setTimeout(function(){BigContetnt.innerHTML=""}, 3000);
        }
        img.onerror = function() {
            img.src=imageList[imageList.length-1];
        };
    }, 3000);
    }
    
 }
 
 MakeImg();

