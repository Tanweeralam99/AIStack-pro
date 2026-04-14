// Import Firebase from root relative path in actual setup
// Assuming Firebase setup is available globally or imported

document.getElementById('add-app-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const appData = {
        name: document.getElementById('appName').value,
        icon: document.getElementById('appIcon').value,
        description: document.getElementById('appDesc').value,
        active: true
    };
    
    // Simulate Firebase Add
    console.log("Saving to Firebase (Collection: apps):", appData);
    alert('App Added Successfully!');
    e.target.reset();
});

document.getElementById('add-notif-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate Firebase Add
    alert('Notification pushed to users!');
    e.target.reset();
});
