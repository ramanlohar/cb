// JavaScript to handle sidebar toggle and close button
document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '-250px';
});