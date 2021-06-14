// console.log('hi hello');
shownote();
    let addbtn=document.getElementById('addnote');
    addbtn.addEventListener("click",function(e) {

        // console.log('hello');
        let addtxt=document.getElementById('txt1');
        let addtitle=document.getElementById('txtt2');
        if((addtxt.value && addtitle.value) != "")
        {

        
            let notes=localStorage.getItem("notes");
            let notetitle=localStorage.getItem("title");
        
        if ((notes && notetitle) == null) 
        {
            noteobj = [];    
            titleobj = [];    
        }
        else
        {
            noteobj = JSON.parse(notes);
            titleobj = JSON.parse(notetitle);
        }

        noteobj.push(addtxt.value);
        titleobj.push(addtitle.value);

        localStorage.setItem("notes" ,JSON.stringify(noteobj));
        localStorage.setItem("title" ,JSON.stringify(titleobj));
        addtxt.value="";
        addtitle.value="";
        // console.log(noteobj);
        shownote();
        }
        else
        {
            alert('Please add your note first');    
        }
    })

    function shownote() 
    {
        // let notes=localStorage.getItem("notes");
        // let notetitle=localStorage.getItem("title");
        // if (notes && notetitle == null) 
        // {
        //     Objnotes = [];   
        //     titleobj = [];    

        // }
        // else
        // {
        //     Objnotes= JSON.parse(notes);
        //     titleobj = JSON.parse(notetitle);
        // }
        let notes=localStorage.getItem("notes");
        let notetitle=localStorage.getItem("title");
    
    if ((notes && notetitle) == null) 
    {
        noteobj = [];    
        titleobj = [];    
    }
    else
    {
        noteobj = JSON.parse(notes);
        titleobj = JSON.parse(notetitle);
    }


         let html="";
         noteobj.forEach(function(element ,index) 
         {
             
            html=html+`
            <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body"> 
                    <h5 class="card-title"> ${titleobj[index] }</h5>
                    <p class="card-text" id="txt2">${element}</p>
                    <a id="${index}" onclick="delnote(this.id)" class="btn btn-primary">Delete This Note</a>
                </div>
            </div> 
            `;
           index +=1; 
         });
         let a1=document.getElementById('note');
         if (noteobj.length !=0) 
         {
            a1.innerHTML= html;    
         }
         else
         {
             a1.innerHTML="<h4>You still haven't added any note...</h4>";
         }    
    }

    // delete a note function

    function delnote(index)
    {
        let notes=localStorage.getItem("notes");
        let notetitle=localStorage.getItem("title");
        if ((notes && notetitle) == null) 
        {
            Objnotes = [];   
            titleobj = [];    

        }
        else
        {
            Objnotes= JSON.parse(notes);
            titleobj = JSON.parse(notetitle);
        }
        Objnotes.splice(index,1);
        titleobj.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(Objnotes));
        localStorage.setItem("title", JSON.stringify(titleobj));
        shownote();
    }

    // Search Text

    let search = document.getElementById('searchtxt');

    search.addEventListener("input",function() 
    {
        let elemsrch=search.value.toLowerCase();
        // console.log(elemsrch);
        let cardnote = document.getElementsByClassName('notecard');
        Array.from(cardnote).forEach(function(element)
        {
            let cardtxt =  element.getElementsByTagName("p")[0].innerText;
            let cardtitle =  element.getElementsByTagName("h5")[0].innerText;
            // console.log(cardtxt);
            if (cardtxt.includes(elemsrch) || cardtitle.includes(elemsrch)) 
            {
                element.style.display = "block";    
            }
            else
            {
                element.style.display = "none";    

            }
        })   
    })

    // Search Button

    let searchbtn = document.getElementById('searchbtn');
    searchbtn.addEventListener("click",function() 
    {
        let elemsrch=search.value.toLowerCase();
        // console.log(elemsrch);
        let cardnote = document.getElementsByClassName('notecard');
        Array.from(cardnote).forEach(function(element)
        {
            let cardtxt =  element.getElementsByTagName("p")[0].innerText;
            let cardtitle =  element.getElementsByTagName("h5")[0].innerText;
            // console.log(cardtxt);
            if (cardtxt.includes(elemsrch) || cardtitle.includes(elemsrch))  
            {
                element.style.display = "block";    
            }
            else
            {
                element.style.display = "none";    

            }
        })

        
    })