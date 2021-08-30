let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('Flaschenpost', () => {
    WA.ui.openPopup("Message", 'Suprise!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.room.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});