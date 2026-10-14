# Studocx

> [!NOTE]
> Tiện ích hỗ trợ tự động tạo tài liệu DOCX hợp lệ và tự động điền form nạp tài liệu kích hoạt Studocu.

---

## Tính năng nổi bật

- **Tạo và nạp tài liệu tự động:** Tự động tạo hàng loạt file DOCX chuẩn định dạng và đưa thẳng vào ô upload của Studocu.
- **Tự động điền thông tin (Form-filler):** Điền chính xác và ngẫu nhiên hóa tự nhiên các trường thông tin (Trường Đại học, Môn học, Phân loại, Năm học, Tiêu đề học thuật và Mô tả chi tiết).
- **Tùy chỉnh linh hoạt:** Điều chỉnh số lượng file (1 - 30 file) và số trang mỗi file (1 - 50 trang).
- **Hỗ trợ tải về máy (Dự phòng):** Tải file về máy dưới dạng từng file hoặc đóng gói thành 1 file ZIP nếu bạn muốn tải lên thủ công.

---

## Hướng Dẫn Cài Đặt Chi Tiết

> [!TIP]
> Bạn không cần biết lập trình vẫn có thể cài đặt dễ dàng chỉ với các bước đơn giản dưới đây!

### Bước 1: Tải mã nguồn về máy tính
1. Nhìn lên phía trên trang GitHub này, tìm và bấm vào nút màu xanh lá cây **`<> Code`**.
2. Trong menu vừa xổ xuống, bấm chọn dòng **`Download ZIP`**.
3. Trình duyệt sẽ tải về một file nén có đuôi `.zip` (thường nằm trong thư mục `Downloads` của máy tính).

---

### Bước 2: Giải nén file vừa tải về
1. Tìm đến file `.zip` bạn vừa tải về.
2. Nhấp chuột phải vào file đó:
   - Trên **Windows**: Chọn **Extract All...** rồi bấm **Extract** (hoặc dùng WinRAR/7-Zip chọn *Extract to...*).
   - Trên **Mac**: Nhấp đúp chuột vào file `.zip` để giải nén.
3. **Lưu ý quan trọng:** Hãy mở thư mục vừa giải nén ra kiểm tra, đảm bảo bạn nhìn thấy trực tiếp các file như `manifest.json`, `icon.png`, thư mục `popup`, `content`...

---

### Bước 3: Mở trang quản lý Tiện ích trên trình duyệt
Tiện ích hỗ trợ hầu hết các trình duyệt dùng nhân Chromium (Google Chrome, Cốc Cốc, Microsoft Edge, Brave, v.v.):
1. Mở trình duyệt của bạn lên.
2. Sao chép và dán đường dẫn sau vào thanh địa chỉ (thanh nhập link web) rồi nhấn **Enter**:
   ```text
   chrome://extensions/
   ```
   *(Nếu dùng Microsoft Edge, bạn nhập: `edge://extensions/`)*
3. Hoặc bạn có thể bấm vào **dấu 3 chấm ở góc trên cùng bên phải trình duyệt** ➔ chọn **Tiện ích mở rộng (Extensions)** ➔ chọn **Quản lý tiện ích (Manage extensions)**.

---

### Bước 4: Bật Chế độ dành cho nhà phát triển (Developer mode)
1. Quan sát ở **góc trên cùng bên phải** của trang tiện ích vừa mở.
2. Tìm mục **Chế độ dành cho nhà phát triển** (Developer mode).
3. Gạt công tắc sang trạng thái **BẬT (Màu xanh dương)**.

---

### Bước 5: Cài đặt tiện ích vào trình duyệt
1. Ngay sau khi bật *Developer mode*, ở **góc trên cùng bên phải** sẽ xuất hiện thêm các nút mới.
2. Bấm vào nút **Tải tiện ích đã giải nén** (tiếng Anh là *Load unpacked*).
3. Một cửa sổ chọn thư mục sẽ hiện ra: Bạn duyệt đến và **chọn đúng thư mục đã giải nén ở Bước 2**. Đảm bảo rằng đã hiện ra 3 thư mục **popup**, **content** và **shared**.
4. Bấm nút **Select Folder** (hoặc *Chọn thư mục*).
5. Lúc này thẻ tiện ích **Studocx** sẽ xuất hiện trên danh sách tiện ích của bạn!

---

### Tips: Ghim tiện ích để thao tác nhanh
1. Ở góc trên bên phải trình duyệt (cạnh thanh địa chỉ), bấm vào biểu tượng **Mảnh ghép (Puzzle icon)** 🧩.
2. Tìm tiện ích **Studocx** và bấm vào biểu tượng chiếc **Ghim (Pin)** 📌 để biểu tượng Studocx luôn hiển thị cố định trên thanh công cụ.

---

## 🚀 Hướng Dẫn Sử Dụng

1. Đăng nhập vào tài khoản Studocu của bạn trên trình duyệt.
2. Truy cập vào trang tải tài liệu lên:
   ```text
   https://www.studocu.vn/vn/document/upload
   ```
3. Bấm vào biểu tượng **Studocx** trên thanh công cụ của trình duyệt:
   - Kéo chọn **Số lượng file** mong muốn (khuyên dùng: 10 - 15 file).
   - Kéo chọn **Số trang mỗi file** (khuyên dùng: 5 - 10 trang).
4. Bấm nút **"Tự nạp các file"**: Tiện ích sẽ tự tạo các file DOCX hợp lệ và nạp vào trang. Đợi trang chuyển sang bước điền thông tin.
5. Khi trang hiển thị danh sách các tài liệu cần điền, mở lại popup tiện ích và bấm **"Tự động điền"**: Toàn bộ trường thông tin Trường học, Môn học, Tiêu đề, Danh mục... sẽ được hoàn tất tự động.

---

## FAQ

<details>
<summary><b>1. Bị báo lỗi "Manifest file is missing or unreadable" khi nạp thư mục?</b></summary>
<br>
Nguyên nhân thường do khi giải nén bị lồng 2 lớp thư mục cùng tên. Hãy chắc chắn rằng thư mục bạn chọn với nút "Tải tiện ích đã giải nén" chứa trực tiếp file <code>manifest.json</code> bên trong nó.
</details>

<details>
<summary><b>2. Khi có phiên bản mới thì cập nhật như thế nào?</b></summary>
<br>
Bạn chỉ cần tải file ZIP mới về, giải nén và chép đè vào thư mục cũ. Sau đó vào lại <code>chrome://extensions/</code> và bấm nút <b>Mũi tên xoay tròn (Tải lại / Reload)</b> trên thẻ của tiện ích Studocx là xong.
</details>

---

### ⚖️ Privacy Policy

- Tiện ích hoạt động 100% offline trên trình duyệt của người dùng.
- Hoàn toàn không thu thập, lưu trữ hay gửi bất kỳ dữ liệu cá nhân nào ra ngoài.
