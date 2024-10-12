
   const all_posts=async()=>{

     const response=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
     const data=await response.json();
    //  console.log(data.posts);
   display_posts(data.posts)
     
   }
    const display_posts=async(posts)=>{
         const show=document.getElementById("all_posts");

         posts.forEach((post)=>{

         
         const card=document.createElement("div");

         card.innerHTML=`
          <div class="bg-[#12132D]/20 md:px-12 md:py-6 px-7 mx-16 md:mx-0 rounded-xl mt-9">
          <div class="flex justify-between items-center p-10 gap-5">
          
              <img src=${post.image} class="w-[80px]">
              <div>
              <div class="flex justify-between items-center text-[#12132D]/80 font-semibold gap-4">
              <h1>#${post.category}</h1>
              <h1>Author:${post.author.name}</h1>
              </div>
              <h1 class="font-bold text-xl">${post.title}</h1>
              <p>${post.description}</p>
           
          </div>
           
     

          </div>
          
            <div class="flex justify-between items-center gap-12 pt-20 border-t-2 border-dashed border-[#12132D]/25  md:px-32" >
              <div class="flex justify-between items-center gap-2" ><img src="./images/Group 13.png"  onclick="add_cmnt('${post.comment_count}')">Comment<span id="total_cmnt">:${post.comment_count}</span></div>
              <div class="flex justify-between items-center gap-2"><img src="./images/Group 16.png">View:${post.view_count}</div>
               <div class="flex justify-between items-center gap-2"><img src="./images/Group 18.png">View:${post.posted_time}</div>
               <button onclick="mark_read('${post.description}','${post.view_count}')"><img src="./images/Group 40106.png" class="w-[320px]" ></button>
              </div>
            `
            show.appendChild(card)
                
         })
    }
   all_posts();

   const mark_read=async(description,View)=>{
    const div=document.getElementById("mark_read");
     const add=document.createElement("div");
     console.log(description)
     const count=document.getElementById("number").innerText;
     document.getElementById("number").innerText=parseInt(count)+1
   add.innerHTML=`
   <div class="font-bold bg-white p-3 rounded mt-3">
    <p>${description}</p>
     <div class="flex justify-end items-center">
   <img src="./images/Group 16.png">
     <h1>${View}</div>
   `
   div.appendChild(add)
   }


  //    <div class="flex justify-between items-center gap-2" ><img src="./images/Group 13.png"  onclick="add_cmnt()">Comment:${post.comment_count}</div>
  const add_cmnt=(comment)=>{
     const modal= document.getElementById("my_modal")
     modal.showModal();
     const text=document.getElementById("cmnt").value;
    console.log(text);
    console.log(comment)
    if (text!="") {
      document.getElementById("total_cmnt").innerText =comment+1;
     
    }   
    
  }
   const close_modal=()=>{
    
    
    document.getElementById("cmnt").value=""
    const modal= document.getElementById("my_modal")
    modal.close()
  
   }
   const latest=async()=>{
      const response=await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
      const data=await response.json();
      console.log(data)
      display_latest(data)
   }
   
   const display_latest=(content)=>{
    const container=document.getElementById("card");
   
    content.forEach((value)=>{
      const box=document.createElement("div");
      console.log(value)
      box.innerHTML=`
         <div class="w-full p-5 rounded-lg border-2">
         <img src="${value.cover_image}">
         <h1>${value.author.posted_date}
         <h1 class="text-3xl font-semibold">${value.title}</h1>
         <p>${value.description}</p>
         <div class="flex mt-5 justify-between items-center">
         <img src="${value.profile_image}" class="rounded-full w-[20%] h-[20%] p-1 border-blue-700 border-4">
         <div>
         <h1 class="text-2xl font-semibold">${value.author.name}</h1>
         <p>${value.author.designation===undefined || value.author.designation===null?"Unknown":value.author.designation}</p>
         </div>

         </div>
         </div>
      `;
   container.appendChild(box)
    })
   }
   latest();