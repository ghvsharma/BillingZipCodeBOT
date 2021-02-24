exports.fallback_task =async function(context, event, callback,RB) {
    try {
    let Listen = false;
    let Remember = {};
    let Collect = false;
    let Tasks = false;
    let Redirect = false;
    let Handoff = false;
    let Say = "";
    // Add your code here.
    console.log('fallback_task');
    // console.log('Fallback Triggered.');
  const Memory = JSON.parse(event.Memory);

  Remember.task_fail_counter = Memory.task_fail_counter + 1;

  /*if ( Memory.task_fail_counter > 2 ) 
    {
    // Say = false;
    Listen = false;
    Redirect = 'task://agent_transfer';
    // Say = `Please hold the line while I transfer you to an agent.`;
    Remember.task_fail_counter = 0;
    } else {
    Say = `I'm sorry, I didn't quite get that. Please say that again.`;
    Listen = true;

              if ( Memory.from_task ) 
              {
                Tasks = [Memory.from_task, 'agent_transfer'];
              }
            }*/
    RB(Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback);
    
    } catch (error) {
    console.error(error);
    callback( null,error);
    }
    };