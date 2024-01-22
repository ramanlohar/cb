// // JavaScript to handle sidebar toggle and close button
// document.getElementById('menu-icon').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '0';
// });

// document.getElementById('close-btn').addEventListener('click', function () {
//     document.getElementById('sidebar').style.left = '-250px';
// });

document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '-250px';
});

document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the sidebar
    if (!document.getElementById('sidebar').contains(event.target) && event.target.id !== 'menu-icon') {
        document.getElementById('sidebar').style.left = '-250px';
    }
});
