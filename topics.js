/**
 * DANH SÁCH CHỦ ĐỀ ÔN TẬP
 * ------------------------
 * Muốn thêm một chủ đề mới:
 *   1) Đặt file Excel dữ liệu câu hỏi vào thư mục data/ (cùng cấu trúc cột như file mẫu:
 *      STT | Câu hỏi | Đáp án A | Đáp án 2 | đáp án 3 | đáp án 4 | đáp án đúng)
 *      Cột "đáp án đúng" ghi số thứ tự của cột đáp án đúng (1 = Đáp án A, 2 = Đáp án 2,
 *      3 = đáp án 3, 4 = đáp án 4). Có thể để trống đáp án 3/4 nếu câu hỏi chỉ có 2 lựa chọn.
 *   2) Thêm một object mới vào mảng TOPICS bên dưới.
 *   3) Lưu lại — không cần sửa gì trong index.html.
 */
const TOPICS = [
  {
    id: "luat-dau-thau",
    name: "Luật Đấu thầu",
    description: "Ngân hàng câu hỏi trắc nghiệm về Luật Đấu thầu và các văn bản hướng dẫn thi hành.",
    file: "data/luat-dau-thau.xlsx"
  },
{
    id: "Dai-su-so",
    name: "Đại Sứ Số",
    description: "Ngân hàng câu hỏi trắc nghiệm Đại sứ số.",
    file: "data/Dai Su So 1.xlsx"
  },
  {
    id: "Dai-su-so 2",
    name: "Đại Sứ Số 2",
    description: "Ngân hàng câu hỏi trắc nghiệm về Đại sứ số.",
    file: "data/Dai Su So 2.xlsx"
  },
  {
    id: "Tru-so-chinh 2",
    name: "Trụ sở chính đợt 2",
    description: "Ngân hàng câu hỏi trắc nghiệm .",
    file: "data/tru so chinh.xlsx"
  }
  // Ví dụ thêm chủ đề mới — bỏ dấu comment và chỉnh lại thông tin:
  // ,{
  //   id: "chu-de-moi",
  //   name: "Tên chủ đề mới",
  //   description: "Mô tả ngắn cho chủ đề này.",
  //   file: "data/chu-de-moi.xlsx"
  // }
];
