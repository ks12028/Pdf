import moment from "moment"
export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi, How can I help you?'
    else if (text.includes('date'))
        return moment().format('MMM Do YYYY')
    else if (text.includes('time'))
        return moment().format('h:mm:ss a')
        else if(text.includes('google link'))
        return 'https://www.google.com'
        else if(text.includes('download pdf'))
        return 'go to the upload button and select the file'
        else if (text.includes('thank you'))
        return "Thanks for Contact Us. Have a Nice Day"
    return "I can't get you, Can you repharse the message"
}