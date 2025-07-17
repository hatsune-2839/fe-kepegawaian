document.getElementById('toggle-sidebar').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
});
document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan jam real-time
    function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, "0");
        let minutes = now.getMinutes().toString().padStart(2, "0");
        let seconds = now.getSeconds().toString().padStart(2, "0");
        document.getElementById("real-time-clock").textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Event listener untuk Check-In
    document.getElementById("check-in-btn").addEventListener("click", function () {
        let checkInTime = new Date().toLocaleTimeString();
        Swal.fire({
            icon: 'success',
            title: 'Check-In Berhasil!',
            text: 'Anda telah check-in pada ' + checkInTime,
            confirmButtonText: 'OK',
            heightAuto: false
        });
        // Simpan ke database jika diperlukan
    });

    // Event listener untuk Check-Out
    document.getElementById("check-out-btn").addEventListener("click", function () {
        let checkOutTime = new Date().toLocaleTimeString();
        Swal.fire({
            icon: 'success',
            title: 'Check-Out Berhasil!',
            text: 'Anda telah check-out pada ' + checkOutTime,
            confirmButtonText: 'OK',
            heightAuto: false
        });
        // Simpan ke database jika diperlukan
    });
});