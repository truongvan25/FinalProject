
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
import slider4 from "./assets/slider4.jpg";

import IELTS from "./assets/IELTS-logo.png";
import TOEIC from "./assets/TOEIC-logo.png";
import TOEFL from "./assets/TOEFL-logo.png";
import SPEAK from "./assets/SPEAK-logo.png";
import CAMBRIDGE from "./assets/CAMBRIDGE-logo.png";
import GENERAL_ENGLISH from "./assets/general-logo.png";
import ACADEMIC_WRITING from "./assets/academic-logo.jpg";
import BUSINESS_ENGLISH from "./assets/business-english.jpeg";
import PUBLIC_SPEAKING from "./assets/publicspeaking-logo.jpg";
import PRONUNCIATION from "./assets/pronunciation-logo.png";
import ENGLISH_TRAVEL from "./assets/travel-logo.jpg";
import ENGLISH_IT from "./assets/IT.jpg";
import BUSINESS_NEGOTIATION from "./assets/negotiation.jpg";
import LEGAL_ENGLISH from "./assets/legal.jpg";
import ENGLISH_HEALTHCARE from "./assets/health.jpg";
import ENGLISH_ENGINEERING from "./assets/engineering.jpg";
import CONVERSATIONAL_ENGLISH from "./assets/SPEAK-logo.png";
import CUSTOMER_SERVICE from "./assets/customer.jpg";
import ADVANCED_GRAMMAR from "./assets/grammar.png";
import INTERVIEW_PREP from "./assets/interview.jpg";
import BANKING_FINANCE from "./assets/banking.jpg";
import ENGLISH_MARKETING from "./assets/marketing.jpg";



import SCHOOL from "./assets/SCHOOL-logo.png";
import TEACHER1 from "./assets/teacher1.jpg";
import TEACHER2 from "./assets/teacher2.jpg";
import TEACHER3 from "./assets/teacher3.png";
import TEACHER4 from "./assets/teacher4.jpg";
import TEACHER5 from "./assets/teacher5.jpg";
import TEACHER6 from "./assets/teacher6.jpg";
import TEACHER7 from "./assets/teacher7.jpg";
import TEACHER8 from "./assets/teacher8.jpg";
import TEACHER9 from "./assets/teacher9.png";
import TEACHER10 from "./assets/teacher10.png";
import TEACHER11 from "./assets/teacher11.png";
import TEACHER12 from "./assets/teacher12.png";
import TEACHER13 from "./assets/teacher13.png";
import TEACHER14 from "./assets/teacher14.png";
import TEACHER15 from "./assets/teacher15.png";
import TEACHER16 from "./assets/teacher16.png";
import TEACHER17 from "./assets/teacher17.png";
import TEACHER18 from "./assets/teacher18.png";
import TEACHER19 from "./assets/teacher19.png";
import TEACHER20 from "./assets/teacher20.png";
import TEACHER21 from "./assets/teacher21.png";
import TEACHER22 from "./assets/teacher22.png";
import TEACHER23 from "./assets/teacher23.png";

export const api = "https://mindx-mockup-server.vercel.app/api/resources/userInfor";
export const apiKey = "?apiKey=67dbb5e704f2def2df69ed80";

export const sliders = [slider1, slider2, slider3, slider4];
export const categories = [
    {
      name: "IELTS",
      picture: IELTS,
      description: [
        "✔️ Luyện thi IELTS từ cơ bản đến nâng cao với lộ trình chi tiết.",
        "✔️ Rèn luyện cả 4 kỹ năng: Nghe, Nói, Đọc, Viết.",
        "✔️ Cung cấp chiến lược làm bài giúp đạt điểm cao.",
        "✔️ Được hướng dẫn bởi giảng viên giàu kinh nghiệm.",
        "✔️ Bài tập thực hành, đề thi thử cập nhật liên tục.",
      ],
      price: { original: "$29.0", discount: "Free" },
      duration: "2 Weeks",
      students: 156,
      rating: 5,
      reviews: 1025,
      level: "Intermediate",
      category: "Education",
      instructor: { name: "John Doe", picture: TEACHER1 },
      tags: ["IELTS", "Test Prep", "English"],
    },
    {
      name: "TOEIC",
      picture: TOEIC,
      description: [
        "✔️ Khóa học chuyên sâu giúp bạn đạt TOEIC 500 - 900+.",
        "✔️ Phân tích từng dạng bài thi để tối ưu điểm số.",
        "✔️ Cung cấp mẹo làm bài hiệu quả, tiết kiệm thời gian.",
        "✔️ Luyện nghe hiểu tiếng Anh thương mại và giao tiếp.",
        "✔️ Hỗ trợ kiểm tra trình độ và lộ trình học cá nhân hóa.",
      ],
      price: { original: "$35.0", discount: "$19.0" },
      duration: "3 Weeks",
      students: 200,
      rating: 3,
      reviews: 980,
      level: "Beginner",
      category: "Education",
      instructor: { name: "Jane Smith", picture: TEACHER2 },
      tags: ["TOEIC", "Listening", "Business English"],
    },
    {
      name: "TOEFL",
      picture: TOEFL,
      description: [
        "✔️ Cung cấp kiến thức và kỹ năng cần thiết để đạt TOEFL iBT cao.",
        "✔️ Hệ thống bài giảng từ cơ bản đến nâng cao.",
        "✔️ Chiến thuật làm bài chi tiết cho từng phần thi.",
        "✔️ Luyện kỹ năng viết luận và phản biện trong tiếng Anh học thuật.",
        "✔️ Được tiếp cận với bộ đề thi thật và các bài kiểm tra mô phỏng.",
      ],
      price: { original: "$40.0", discount: "$25.0" },
      duration: "4 Weeks",
      students: 180,
      rating: 4,
      reviews: 1100,
      level: "Advanced",
      category: "Education",
      instructor: { name: "Mark Johnson", picture: TEACHER3 },
      tags: ["TOEFL", "Writing", "Academic"],
    },
    {
      name: "COMMUNICATION",
      picture: SPEAK,
      description: [
        "✔️ Khóa học giao tiếp tiếng Anh cho người mới bắt đầu và nâng cao.",
        "✔️ Luyện nói tự nhiên với phương pháp phản xạ nhanh.",
        "✔️ Cải thiện phát âm và ngữ điệu theo chuẩn quốc tế.",
        "✔️ Tình huống thực tế giúp bạn tự tin giao tiếp hàng ngày.",
        "✔️ Học cùng giảng viên bản ngữ, sửa lỗi ngay lập tức.",
      ],
      price: { original: "$30.0", discount: "Free" },
      duration: "6 Weeks",
      students: 250,
      rating: 4,
      reviews: 890,
      level: "Beginner",
      category: "Communication",
      instructor: { name: "Lisa Wong", picture: TEACHER4 },
      tags: ["Speaking", "Communication", "Listening"],
    },
    {
      name: "CAMBRIDGE",
      picture: CAMBRIDGE,
      description: [
        "✔️ Chương trình luyện thi Cambridge KET, PET, FCE, CAE, CPE.",
        "✔️ Hệ thống bài giảng theo tiêu chuẩn của Cambridge English.",
        "✔️ Luyện tập với bộ đề thi thật giúp nắm vững cấu trúc bài thi.",
        "✔️ Cung cấp tài liệu độc quyền từ Cambridge.",
        "✔️ Hỗ trợ luyện kỹ năng viết và nói theo tiêu chí chấm điểm thực tế.",
      ],
      price: { original: "$50.0", discount: "$29.0" },
      duration: "5 Weeks",
      students: 140,
      rating: 5,
      reviews: 770,
      level: "Intermediate",
      category: "Test Prep",
      instructor: { name: "Michael Lee", picture: TEACHER5 },
      tags: ["Cambridge", "FCE", "CAE"],
    },
    {
      name: "SCHOOL CURRICULUM",
      picture: SCHOOL,
      description: [
        "✔️ Hỗ trợ học sinh tiểu học, THCS, THPT cải thiện tiếng Anh.",
        "✔️ Bám sát chương trình học của Bộ Giáo dục và đào tạo.",
        "✔️ Hướng dẫn làm bài tập và bài kiểm tra đạt điểm cao.",
        "✔️ Cải thiện kỹ năng đọc hiểu, ngữ pháp, từ vựng.",
        "✔️ Phù hợp cho học sinh muốn đạt thành tích xuất sắc trên lớp.",
      ],
      price: { original: "$20.0", discount: "Free" },
      duration: "8 Weeks",
      students: 300,
      rating: 4,
      reviews: 650,
      level: "Beginner",
      category: "School",
      instructor: { name: "Emma Brown", picture: TEACHER6 },
      tags: ["School", "Grammar", "Vocabulary"],
    },
    {
      name: "BUSINESS ENGLISH",
      picture: BUSINESS_ENGLISH,
      description: [
        "✔️ Tiếng Anh chuyên ngành dành cho môi trường làm việc chuyên nghiệp.",
        "✔️ Học cách viết email, báo cáo, thuyết trình bằng tiếng Anh.",
        "✔️ Luyện kỹ năng đàm phán, phỏng vấn và giao tiếp công sở.",
        "✔️ Hướng dẫn sử dụng tiếng Anh thương mại hiệu quả trong công việc.",
        "✔️ Phù hợp cho nhân viên văn phòng, doanh nhân, người đi làm.",
      ],
      price: { original: "$60.0", discount: "$35.0" },
      duration: "6 Weeks",
      students: 120,
      rating: 3,
      reviews: 900,
      level: "Intermediate",
      category: "Business",
      instructor: { name: "Sophia Miller", picture: TEACHER7 },
      tags: ["Business", "Corporate", "Email Writing"],
    },
    {
        name: "General English",
        picture: GENERAL_ENGLISH,
        description: [
          "✔️ Khóa học tiếng Anh tổng quát từ cơ bản đến nâng cao.",
          "✔️ Luyện tập cả 4 kỹ năng Nghe, Nói, Đọc, Viết.",
          "✔️ Cải thiện từ vựng, ngữ pháp và phát âm.",
          "✔️ Phù hợp với mọi đối tượng học viên.",
          "✔️ Bài tập thực hành giúp nâng cao trình độ nhanh chóng.",
        ],
        price: { original: "$25.0", discount: "Free" },
        duration: "4 Weeks",
        students: 180,
        rating: 4,
        reviews: 850,
        level: "Beginner",
        category: "General",
        instructor: { name: "David Wilson", picture: TEACHER8 },
        tags: ["English", "Grammar", "Speaking"],
      },
      {
        name: "Academic Writing",
        picture: ACADEMIC_WRITING,
        description: [
          "✔️ Hướng dẫn viết luận văn và báo cáo học thuật.",
          "✔️ Cải thiện kỹ năng phân tích và tư duy phản biện.",
          "✔️ Học cách sử dụng ngôn ngữ trang trọng và chuẩn mực.",
          "✔️ Luyện tập với các bài viết mẫu từ các trường đại học.",
          "✔️ Phù hợp cho sinh viên và nhà nghiên cứu.",
        ],
        price: { original: "$40.0", discount: "$22.0" },
        duration: "6 Weeks",
        students: 140,
        rating: 5,
        reviews: 920,
        level: "Advanced",
        category: "Writing",
        instructor: { name: "Sarah Johnson", picture: TEACHER9 },
        tags: ["Writing", "Academic", "Research"],
      },
      {
        name: "Public Speaking",
        picture: PUBLIC_SPEAKING,
        description: [
          "✔️ Học cách thuyết trình tự tin và thu hút người nghe.",
          "✔️ Phát triển kỹ năng diễn đạt và xử lý tình huống.",
          "✔️ Cải thiện phát âm và giọng nói chuyên nghiệp.",
          "✔️ Hướng dẫn sử dụng ngôn ngữ cơ thể hiệu quả.",
          "✔️ Phù hợp cho học sinh, sinh viên và người đi làm.",
        ],
        price: { original: "$35.0", discount: "$18.0" },
        duration: "5 Weeks",
        students: 200,
        rating: 4,
        reviews: 870,
        level: "Intermediate",
        category: "Communication",
        instructor: { name: "James Lee", picture: TEACHER10 },
        tags: ["Speaking", "Presentation", "Confidence"],
      },
      {
        name: "Pronunciation Mastery",
        picture: PRONUNCIATION,
        description: [
          "✔️ Luyện phát âm chuẩn Anh - Mỹ từ cơ bản đến nâng cao.",
          "✔️ Sửa lỗi phát âm phổ biến của người học tiếng Anh.",
          "✔️ Học cách nối âm và ngữ điệu tự nhiên.",
          "✔️ Bài tập thực hành với giảng viên bản ngữ.",
          "✔️ Phù hợp cho người muốn cải thiện giao tiếp tiếng Anh.",
        ],
        price: { original: "$28.0", discount: "$15.0" },
        duration: "6 Weeks",
        students: 160,
        rating: 5,
        reviews: 780,
        level: "Beginner",
        category: "Speaking",
        instructor: { name: "Emma Wilson", picture: TEACHER11 },
        tags: ["Pronunciation", "Speaking", "Accent"],
      },
      {
        name: "English for Travel",
        picture: ENGLISH_TRAVEL,
        description: [
          "✔️ Tiếng Anh giao tiếp cho du lịch và khám phá thế giới.",
          "✔️ Học cách đặt vé, khách sạn và giao tiếp với người bản xứ.",
          "✔️ Luyện nghe các tình huống giao tiếp thực tế.",
          "✔️ Cải thiện kỹ năng hội thoại trong các tình huống khẩn cấp.",
          "✔️ Phù hợp cho người chuẩn bị du lịch nước ngoài.",
        ],
        price: { original: "$30.0", discount: "Free" },
        duration: "4 Weeks",
        students: 220,
        rating: 4,
        reviews: 940,
        level: "Beginner",
        category: "Travel",
        instructor: { name: "Olivia Brown", picture: TEACHER12 },
        tags: ["Travel", "Speaking", "Listening"],
      },
      {
        name: "English for IT",
        picture: ENGLISH_IT,
        description: [
          "✔️ Tiếng Anh chuyên ngành công nghệ thông tin.",
          "✔️ Luyện kỹ năng đọc hiểu tài liệu và viết email chuyên ngành.",
          "✔️ Học từ vựng và thuật ngữ trong lĩnh vực IT.",
          "✔️ Hướng dẫn viết báo cáo và tài liệu kỹ thuật.",
          "✔️ Phù hợp cho sinh viên và chuyên gia IT.",
        ],
        price: { original: "$45.0", discount: "$20.0" },
        duration: "5 Weeks",
        students: 190,
        rating: 5,
        reviews: 890,
        level: "Intermediate",
        category: "Business",
        instructor: { name: "Michael Scott", picture: TEACHER13 },
        tags: ["IT", "Technical", "English"],
      },
      {
        name: "Business Negotiation",
        picture: BUSINESS_NEGOTIATION,
        description: [
          "✔️ Học kỹ năng đàm phán và thương lượng chuyên nghiệp.",
          "✔️ Phát triển tư duy chiến lược trong kinh doanh.",
          "✔️ Cách sử dụng ngôn ngữ cơ thể và giọng nói trong đàm phán.",
          "✔️ Luyện tập với các tình huống thực tế trong doanh nghiệp.",
          "✔️ Phù hợp cho nhân viên văn phòng, quản lý và doanh nhân.",
        ],
        price: { original: "$50.0", discount: "$30.0" },
        duration: "6 Weeks",
        students: 150,
        rating: 4,
        reviews: 860,
        level: "Advanced",
        category: "Business",
        instructor: { name: "Sophia Miller", picture: TEACHER14 },
        tags: ["Negotiation", "Business", "Strategy"],
      },
      {
        name: "Legal English",
        picture: LEGAL_ENGLISH,
        description: [
          "✔️ Tiếng Anh chuyên ngành luật dành cho luật sư và sinh viên luật.",
          "✔️ Học từ vựng và thuật ngữ pháp lý thông dụng.",
          "✔️ Luyện tập kỹ năng viết hợp đồng và tài liệu pháp lý.",
          "✔️ Hướng dẫn diễn đạt chuyên nghiệp trong tranh tụng.",
          "✔️ Phù hợp cho người làm việc trong ngành luật và tư vấn pháp lý.",
        ],
        price: { original: "$55.0", discount: "$35.0" },
        duration: "8 Weeks",
        students: 120,
        rating: 5,
        reviews: 750,
        level: "Advanced",
        category: "Legal",
        instructor: { name: "David Harris", picture: TEACHER15 },
        tags: ["Legal", "Contracts", "Law"],
      },
      {
        name: "English for Healthcare",
        picture: ENGLISH_HEALTHCARE,
        description: [
          "✔️ Tiếng Anh chuyên ngành y khoa dành cho bác sĩ, y tá.",
          "✔️ Học từ vựng và thuật ngữ y học thông dụng.",
          "✔️ Luyện tập giao tiếp với bệnh nhân và đồng nghiệp.",
          "✔️ Hướng dẫn viết báo cáo và hồ sơ bệnh án bằng tiếng Anh.",
          "✔️ Phù hợp cho sinh viên và chuyên gia y tế.",
        ],
        price: { original: "$60.0", discount: "$40.0" },
        duration: "6 Weeks",
        students: 130,
        rating: 5,
        reviews: 820,
        level: "Advanced",
        category: "Medical",
        instructor: { name: "Dr. Anthony White", picture: TEACHER16 },
        tags: ["Medical", "Healthcare", "Professional"],
      },
      {
        name: "English for Engineering",
        picture: ENGLISH_ENGINEERING,
        description: [
          "✔️ Tiếng Anh chuyên ngành kỹ thuật và công nghệ.",
          "✔️ Học từ vựng, thuật ngữ và cách diễn đạt trong kỹ thuật.",
          "✔️ Luyện đọc hiểu tài liệu và hướng dẫn kỹ thuật.",
          "✔️ Hướng dẫn viết báo cáo và thuyết trình dự án.",
          "✔️ Phù hợp cho sinh viên và kỹ sư chuyên nghiệp.",
        ],
        price: { original: "$55.0", discount: "$35.0" },
        duration: "6 Weeks",
        students: 140,
        rating: 4,
        reviews: 780,
        level: "Intermediate",
        category: "Technical",
        instructor: { name: "Robert Hill", picture: TEACHER17 },
        tags: ["Engineering", "Technical", "Professional"],
      },
      {
        name: "Conversational English",
        picture: CONVERSATIONAL_ENGLISH,
        description: [
          "✔️ Luyện tập hội thoại tiếng Anh tự nhiên trong đời sống.",
          "✔️ Học cách sử dụng tiếng Anh trong các tình huống giao tiếp hàng ngày.",
          "✔️ Cải thiện phát âm và ngữ điệu.",
          "✔️ Phù hợp cho mọi trình độ từ cơ bản đến nâng cao.",
          "✔️ Thực hành giao tiếp với giáo viên bản ngữ.",
        ],
        price: { original: "$30.0", discount: "Free" },
        duration: "4 Weeks",
        students: 210,
        rating: 4,
        reviews: 950,
        level: "Beginner",
        category: "Communication",
        instructor: { name: "Laura Green", picture: TEACHER18 },
        tags: ["Speaking", "Listening", "Conversation"],
      },
      {
        name: "English for Customer Service",
        picture: CUSTOMER_SERVICE,
        description: [
          "✔️ Học cách giao tiếp tiếng Anh trong ngành dịch vụ khách hàng.",
          "✔️ Phát triển kỹ năng xử lý tình huống và phản hồi chuyên nghiệp.",
          "✔️ Luyện tập hội thoại và ngôn ngữ lịch sự.",
          "✔️ Hướng dẫn viết email và tin nhắn chuyên nghiệp.",
          "✔️ Phù hợp cho nhân viên bán hàng, lễ tân và quản lý.",
        ],
        price: { original: "$50.0", discount: "$25.0" },
        duration: "5 Weeks",
        students: 170,
        rating: 4,
        reviews: 880,
        level: "Intermediate",
        category: "Business",
        instructor: { name: "Kevin Adams", picture: TEACHER19 },
        tags: ["Customer Service", "Business", "Professional"],
      },
      {
        name: "Advanced Grammar",
        picture: ADVANCED_GRAMMAR,
        description: [
          "✔️ Khóa học chuyên sâu về ngữ pháp tiếng Anh nâng cao.",
          "✔️ Học cách sử dụng cấu trúc ngữ pháp phức tạp.",
          "✔️ Phát triển kỹ năng viết và nói chuyên nghiệp.",
          "✔️ Bài tập thực hành giúp ghi nhớ và áp dụng ngữ pháp hiệu quả.",
          "✔️ Phù hợp cho người học tiếng Anh ở trình độ trung cấp và cao cấp.",
        ],
        price: { original: "$35.0", discount: "$20.0" },
        duration: "6 Weeks",
        students: 150,
        rating: 5,
        reviews: 860,
        level: "Advanced",
        category: "Grammar",
        instructor: { name: "Isabella Clark", picture: TEACHER20 },
        tags: ["Grammar", "Writing", "Advanced"],
      },
      {
        name: "Interview Preparation",
        picture: INTERVIEW_PREP,
        description: [
          "✔️ Hướng dẫn cách trả lời các câu hỏi phỏng vấn tiếng Anh.",
          "✔️ Phát triển kỹ năng giao tiếp và tự tin khi phỏng vấn.",
          "✔️ Luyện tập với các bài phỏng vấn giả lập.",
          "✔️ Học cách xây dựng CV và thư xin việc chuyên nghiệp.",
          "✔️ Phù hợp cho sinh viên và người đi làm.",
        ],
        price: { original: "$40.0", discount: "$22.0" },
        duration: "5 Weeks",
        students: 180,
        rating: 4,
        reviews: 890,
        level: "Intermediate",
        category: "Career",
        instructor: { name: "David Evans", picture: TEACHER21 },
        tags: ["Interview", "Career", "Professional"],
      },
      {
        name: "English for Banking & Finance",
        picture: BANKING_FINANCE,
        description: [
          "✔️ Tiếng Anh chuyên ngành tài chính, ngân hàng.",
          "✔️ Học từ vựng và thuật ngữ chuyên môn.",
          "✔️ Luyện tập đọc hiểu báo cáo tài chính, hợp đồng.",
          "✔️ Hướng dẫn giao tiếp và viết email chuyên nghiệp.",
          "✔️ Phù hợp cho nhân viên ngân hàng, kế toán, tài chính.",
        ],
        price: { original: "$60.0", discount: "$35.0" },
        duration: "6 Weeks",
        students: 120,
        rating: 5,
        reviews: 750,
        level: "Advanced",
        category: "Finance",
        instructor: { name: "Emily Watson", picture: TEACHER22 },
        tags: ["Finance", "Banking", "Professional"],
      },
      {
        name: "English for Marketing",
        picture: ENGLISH_MARKETING,
        description: [
          "✔️ Tiếng Anh chuyên ngành tiếp thị và quảng cáo.",
          "✔️ Học từ vựng và cách diễn đạt trong marketing.",
          "✔️ Luyện tập viết bài quảng cáo, email marketing.",
          "✔️ Hướng dẫn trình bày ý tưởng tiếp thị bằng tiếng Anh.",
          "✔️ Phù hợp cho nhân viên tiếp thị và doanh nhân.",
        ],
        price: { original: "$50.0", discount: "$30.0" },
        duration: "5 Weeks",
        students: 130,
        rating: 4,
        reviews: 800,
        level: "Intermediate",
        category: "Marketing",
        instructor: { name: "Jonathan Parker", picture: TEACHER23 },
        tags: ["Marketing", "Advertising", "Business"],
      }
  ];
  
  export const teachers = [
    { name: "John Doe", picture: TEACHER1, experience: "10 years", course: "IELTS Expert", university: "University of Cambridge", email: "john.doe@email.com" },
    { name: "Jane Smith", picture: TEACHER2, experience: "8 years", course: "TOEIC Specialist", university: "Harvard University", email: "jane.smith@email.com" },
    { name: "Mark Johnson", picture: TEACHER3, experience: "12 years", course: "TOEFL Master", university: "Stanford University", email: "mark.johnson@email.com" },
    { name: "Lisa Wong", picture: TEACHER4, experience: "7 years", course: "English Communication", university: "University of California, Berkeley", email: "lisa.wong@email.com" },
    { name: "Michael Lee", picture: TEACHER5, experience: "9 years", course: "Cambridge English Trainer", university: "University of Oxford", email: "michael.lee@email.com" },
    { name: "Emma Brown", picture: TEACHER6, experience: "6 years", course: "School Curriculum Coach", university: "Massachusetts Institute of Technology", email: "emma.brown@email.com" },
    { name: "Sophia Miller", picture: TEACHER7, experience: "11 years", course: "Business English Coach", university: "London School of Economics", email: "sophia.miller@email.com" },
    { name: "David Wilson", picture: TEACHER8, experience: "15 years", course: "Academic Writing Specialist", university: "Yale University", email: "david.wilson@email.com" },
    { name: "Jonathan Parker", picture: TEACHER23, experience: "7 years", course: "Marketing", university: "Columbia University", email: "jonathan.parker@email.com" },
    { name: "Emily Watson", picture: TEACHER22, experience: "11 years", course: "Finance", university: "University of Chicago", email: "emily.watson@email.com" },
    { name: "David Evans", picture: TEACHER21, experience: "8 years", course: "Prepare for Work, Interview Profession", university: "Princeton University", email: "david.evans@email.com" },
    { name: "Isabella Clark", picture: TEACHER20, experience: "7 years", course: "Proper Grammar and Structure", university: "New York University", email: "isabella.clark@email.com" },
    { name: "Kevin Adams", picture: TEACHER19, experience: "8 years", course: "Hospitality, Sale", university: "Cornell University", email: "kevin.adams@email.com" },
    { name: "Laura Green", picture: TEACHER18, experience: "6 years", course: "Communication", university: "University of Pennsylvania", email: "laura.green@email.com" },
    { name: "Robert Hill", picture: TEACHER17, experience: "5 years", course: "Technical", university: "California Institute of Technology", email: "robert.hill@email.com" },
    { name: "Dr. Anthony White", picture: TEACHER16, experience: "5 years", course: "Medical, Healthcare", university: "Johns Hopkins University", email: "anthony.white@email.com" },
    { name: "David Harris", picture: TEACHER15, experience: "6 years", course: "Legal English", university: "University of Michigan", email: "david.harris@email.com" },
    { name: "Sophia Miller", picture: TEACHER14, experience: "15 years", course: "Business", university: "London Business School", email: "sophia.miller@email.com" },
    { name: "Michael Scott", picture: TEACHER13, experience: "11 years", course: "Technology, Academic English", university: "University of Toronto", email: "michael.scott@email.com" },
    { name: "Olivia Brown", picture: TEACHER12, experience: "4 years", course: "Travel English", university: "University of Sydney", email: "olivia.brown@email.com" },
    { name: "Emma Wilson", picture: TEACHER11, experience: "15 years", course: "Pronunciation, Speaking", university: "University of Melbourne", email: "emma.wilson@email.com" },
    { name: "James Lee", picture: TEACHER10, experience: "7 years", course: "Speaking, Presentation", university: "University of British Columbia", email: "james.lee@email.com" },
    { name: "Sarah Johnson", picture: TEACHER9, experience: "10 years", course: "Writing, Composition", university: "University of Edinburgh", email: "sarah.johnson@email.com" }
];

