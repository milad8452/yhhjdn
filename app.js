// app.js
document.getElementById('reminder-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // دریافت داده‌ها از فرم
    var lessonName = document.getElementById('lesson-name').value;
    var reminderDate = document.getElementById('reminder-date').value + 'T' + document.getElementById('reminder-time').value;

    
     // ذخیره داده‌ها به صورت محلی (مثلاً در localStorage)
     if (!localStorage.reminders) {
         localStorage.reminders = JSON.stringify([]);
     }
     
     var reminders = JSON.parse(localStorage.reminders);
     reminders.push({name: lessonName, date: new Date(reminderDate)});
     
     localStorage.reminders = JSON.stringify(reminders);

});

// چک کردن اعلان هر چند ثانیه‌ای (مثال)
setInterval(function() {
   if (localStorage.reminders) {
       var reminders = JSON.parse(localStorage.reminders);
       var now = new Date();
       
       reminders.forEach(function(remind) {
           if (now.getTime() >= remind.date.getTime()) { 
               alert("مرور " + remind.name + "!");
               // حذف یا غیرفعال کردن یادآوری پس از نمایش اعلان اگر لازم است.
           }
       });
   }
}, 10000); // هر ده ثانیه چک شود.
