const axios = require('axios');
exports.greeting_task =async function(context, event, callback,RB) {
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

  let sQues = `Is ${ZipCode}, the billing zip code for your credit card. Say yes or no, you can also press 1 for yes and 2 for no `;
  if(Remember.task_fail_counter !=undefined)
  {
    Say = `${​​sQues}​​`;
    Listen =  {​​
      "voice_digits": {​​
        "num_digits": 1,
        "finish_on_key": "#",
        "redirects": {​​
          1: "task://collectzip_task",
          2: "task://collectzip_task"
        }​​
      }​​,

      "tasks": [

        "yes_no",

        "agent_transfer"

      ]

    }​​


}else if(Remember.task_fail_counter>2) {
Redirect = "task://fallback";
}
else
{
Collect = {
          "name": "collect_routing",
          "questions": [
            {
              "question": `Please tell me the routing number again.`,
              "voice_digits": {
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