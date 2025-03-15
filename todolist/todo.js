let todo_arr=[
    {item:'Buy Milk',
    duedate:'22-10-24'
    },
    {
        item:'Go to College',
        duedate:'23-10-23'
    }
    ];
display_todo(); 

function todo(){

    let input_element = document.querySelector('.text');
    let input_date = document.querySelector('.date');

    let date_item = input_date.value;
    let input_item=input_element.value;
    
    todo_arr.push({item:input_item,duedate:date_item},);
    input_element.value='';
    input_date.value='';
    display_todo();
    
   

}

// let currdate=document.querySelector('.date');
// let currdate_val=currdate;
// console.log(currdate);
function display_todo(){

//    let 
    let p_text= document.querySelector('.display_todo');
    // p_text.innerText=''
    let newhtml='';
    for(let i=0;i<todo_arr.length;i++){
        let todoitem=todo_arr[i].item;
        let duedate=todo_arr[i].duedate;
        newhtml+=`
        
            <span>${todoitem}</span>
            <span>${duedate}</span>
            <button class="delete_btn" onclick="todo_arr.splice(${i},1);
            display_todo();
            ">Delete</button>
        
        `;
        // p_text.innerText=p_text.innerText+"\n"+todo_arr[i] ;
     
    }
    p_text.innerHTML=newhtml;
    
    
   

}


