chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create(
    'index.html',
    {
        id: 'windowBar Test',
        width: 400,
        height: 500,
        minWidth: 400,
        minHeight: 500,
        frame: 'none'
    }
  );
});