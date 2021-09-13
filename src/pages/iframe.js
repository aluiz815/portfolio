import React, { useEffect } from 'react'

export default function Iframe() {
    const OneSignal = window.OneSignal;
    useEffect(()=>{
            window.OneSignal =  window.OneSignal || [];
            OneSignal.push(function() {
            OneSignal.init({
              appId: "f847abb8-3282-4a84-8e14-533f3649da30",
              safari_web_id: "web.onesignal.auto.2cd5950f-b486-4c84-8005-0f30059d0b0c",
              notifyButton: {
                enable: true,
              },
            });
            OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                console.log(`1 subdomain.site iframe checking subscription from mainsite, it is ${isEnabled}`)
                sendMessage(isEnabled)
            });
          });
        // Sends a message to mainsite
        var sendMessage = function (msg) {
            console.log(`2 Mainsite is Sending Message to subdomain.site ${msg}`)
            // postMessage: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
            window.parent.postMessage(msg, "https://pizza.andredeveloper.com.br");
        };
    },[OneSignal])
    return (
        <div>
            
        </div>
    )
}
