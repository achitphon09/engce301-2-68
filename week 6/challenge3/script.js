// 1. เลือกเฉพาะลิงก์ (<a>) ที่อยู่ข้างใน <nav>
const navLinks = document.querySelectorAll('nav a');

// 2. ใช้ forEach เพื่อเข้าไปจัดการลิงก์ทีละตัว
navLinks.forEach(function(link) {
    
    // 3. ใส่ Event Listener เพื่อดักจับการ "คลิก"
    link.addEventListener('click', function(event) {
        // กันไม่ให้หน้าจอเด้งเวลาคลิกลิงก์
        event.preventDefault();
        
        // 4. แสดงข้อความแจ้งเตือน
        alert('clicked!');
    });
});