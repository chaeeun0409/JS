const student = {}
student.이름 = '이채은'
student.취미 = '코딩'
student.장래희망 = '개발자'

delete student.장래희망
console.log(JSON.stringify(student, null, 2));