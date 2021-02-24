const axios = require('axios');
exports.collectzip_task =async function(context, event, callback,RB) {
  try {
  let Listen = false;
  let Remember = {};
  let Collect = false;
  let Tasks = false;
  let Redirect = false;
  let Handoff = false;
  let Say = "";
  // Add your code here.
  console.log('greeting_task');
  Remember.task_fail_counter=0;
  Remember.attempts=0;
  let ZipCode="12345";

  let sQues = `Please enter the 5 digit zip code associated with the card`;
  if(Remember.task_fail_counter !=undefined)
  {
    Collect = {
        "name": "collect_zip",
        "questions": [
          {
            "question": `${sQues}`,
            "voice_digits": {
                "num_digits":5,
              "finish_on_key": "#"
            },
            "name": "routing_num",
            "type": "Twilio.NUMBER_SEQUENCE"
          }
        ],
        "on_complete": {
          "redirect": "task://check_routing_number"
        }
      };


}else if(Remember.task_fail_counter>2) {
Redirect = "task://fallback";
}
else
{
    Collect = {
        "name": "collect_zip",
        "questions": [
          {
            "question": `${sQues}`,
            "voice_digits": {
                "num_digits":5,
              "finish_on_key": "#"
            },
            "name": "routing_num",
            "type": "Twilio.NUMBER_SEQUENCE"
          }
        ],
        "on_complete": {
          "redirect": "task://check_routing_number"
        }
      };

}

  
  //End of your code.
  // This callback is what is returned in response to this function being invoked.
  //const functions = Runtime.getFunctions();
  //let RB = require('responseBuilder.js');
   //let path = functions['responseBuilder'].path;
   //let RB = require(path);
   RB(Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback);
  
   } catch (error) {
  console.error(error);
  callback( error);
  }
  };