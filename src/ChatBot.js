import React from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import { analyze } from './util';


 export default function ChatBot() {

    const [messages, setMessages]= useState([
        {
            message: 'Hi May I have your Name Please'
        }
    ]);

    const [text, setText]= useState('');

    const onSend = () =>{
        let list = [...messages,{ message: text, user:true}];
        if(list.length > 2){
            const reply = analyze(text);
            list = [
                ...list,
                {message: reply}
            ]

        }
        else{
            list = [
                ...list,
                {
                    message: `Hi, ${text}`
                },
                {
                    message:"How can I help you?",
                },

            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector('#copyright').scrollIntoView();
        },1);
    };

  return (
    <div>
        <div className='d-flex align-items center justify-content-center'>
            <h2 className='text-primary'>ChatBot</h2>
        </div>
        <div className='chat-message'>
            {
               messages.length>0 && messages.map((data)=> <ChatMessage{...data}/>) 
            }
            <div className='d-flex mt-2'>
                <input type='text' className='form-control' value={text} onChange={(e)=> setText(e.target.value)}/>
                <Button type="primary" className='ms-3' onClick={onSend}>Send</Button>
            </div>
            <div id="copyright" className='mt-3'>Copyright Reserved</div>

        </div>
    </div>
  )
}


