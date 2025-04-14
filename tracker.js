(function() {
    function logEvent(eventType, eventTarget) {
      const timestamp = new Date().toISOString();
      const eventObject = eventTarget.tagName.toLowerCase();
      console.log(`${timestamp}, ${eventType}, ${eventObject}`);
    }

    window.addEventListener('load', function(){
      logEvent('view', document.body);
    });

    document.addEventListener('click', function(event) {
      logEvent('click', event.target);
    });
  })();
  