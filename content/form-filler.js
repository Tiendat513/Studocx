(() => {
  "use strict";

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const UNIVERSITY_QUERIES = [
    "Hanoi",
    "Ho Chi Minh",
    "Bach Khoa",
    "Kinh te",
    "Quoc gia",
    "Ngoai thuong",
    "Su pham",
    "Ngan hang",
    "Y Ha Noi",
    "Can Tho",
    "Da Nang",
    "Hue",
    "Thuong mai",
    "Cong nghiep",
    "Giao thong",
    "Nong nghiep",
    "Hoc vien Tai chinh",
    "Luat",
    "Mo Dia chat"
  ];

  const COURSE_QUERIES = [
    "Toan",
    "Kinh te",
    "Triet hoc",
    "Phap luat",
    "Xac suat",
    "Tieng Anh",
    "Marketing",
    "Quan tri",
    "Ke toan",
    "Tin hoc",
    "Lap trinh",
    "Vat ly",
    "Hoa hoc",
    "Chinh tri",
    "Tai chinh",
    "Tam ly hoc",
    "Xa hoi hoc",
    "Giao duc",
    "Truyen thong",
    "Thuong mai"
  ];

  const TITLE_TEMPLATES = [
    "Tổng hợp kiến thức và bài tập ôn thi",
    "Đề cương chi tiết học phần trọng tâm",
    "Bản tóm tắt bài giảng các chương chuyên đề",
    "Tài liệu hướng dẫn thực hành và bài tập mẫu",
    "Hệ thống kiến thức cốt lõi và các dạng bài ôn tập",
    "Ghi chép bài giảng trên lớp kèm ví dụ minh họa",
    "Tài liệu tự học và đề cương ôn tập cuối kỳ",
    "Tổng hợp sơ đồ tư duy và câu hỏi củng cố kiến thức",
    "Bộ câu hỏi trắc nghiệm và tự luận có hướng dẫn giải",
    "Báo cáo nghiên cứu chuyên đề và phân tích thực tiễn",
    "Đề cương ôn thi giữa kỳ và các dạng bài thường gặp",
    "Tóm tắt giáo trình và hướng dẫn phương pháp giải đề",
    "Chuyên đề nâng cao và tổng hợp lý thuyết trọng điểm",
    "Cẩm nang ôn thi và tóm tắt công thức trọng tâm",
    "Tài liệu củng cố lý thuyết và bài tập rèn luyện"
  ];

  const DESCRIPTIONS = [
    "Tài liệu được tổng hợp và biên soạn kỹ lưỡng nhằm phục vụ cho quá trình tự học và ôn thi cuối kỳ, nội dung bám sát chương trình giảng dạy.",
    "Tổng hợp chi tiết các lý thuyết quan trọng kèm bài tập có lời giải cụ thể, giúp nắm vững bản chất kiến thức và các dạng bài thường gặp.",
    "Ghi chép bài giảng chi tiết trên giảng đường kết hợp tài liệu tham khảo bổ trợ, rất hữu ích cho các bạn đang chuẩn bị cho kỳ thi sắp tới.",
    "Đề cương ôn tập toàn diện bao gồm cả lý thuyết nền tảng và bài tập vận dụng thực tế, hỗ trợ củng cố kiến thức một cách nhanh chóng.",
    "Tài liệu hệ thống hóa kiến thức trọng tâm qua từng chương, có ví dụ minh họa trực quan, dễ tiếp thu và thuận tiện tra cứu khi ôn tập.",
    "Bộ tài liệu học tập tổng hợp chia sẻ nhằm giúp sinh viên nắm bắt cấu trúc đề thi, các điểm cần lưu ý và phương pháp giải tối ưu nhất.",
    "Tóm tắt nội dung cốt lõi của học phần kèm các ghi chú quan trọng từ giảng viên, giúp định hướng ôn tập trọng tâm và đạt kết quả cao.",
    "Tài liệu tham khảo chuyên đề bổ ích, cách trình bày mạch lạc, khoa học, thích hợp cho việc tự ôn luyện và làm bài tập tại nhà.",
    "Hệ thống câu hỏi và bài tập có phân tích chi tiết, giúp người học củng cố lý thuyết và rèn luyện kỹ năng giải quyết vấn đề.",
    "Tài liệu ôn tập tổng hợp kiến thức trọng tâm của học kỳ, hỗ trợ tra cứu nhanh và ghi nhớ lâu các chuyên đề quan trọng."
  ];

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  /**
   * Thiết lập giá trị cho ô input / textarea bằng React prototype setter
   * để React Hook Form phát hiện trạng thái thay đổi (dirty).
   */
  const setNativeInputVal = (fieldEl, val) => {
    if (!fieldEl) return;
    if (fieldEl._valueTracker) {
      fieldEl._valueTracker.setValue("");
    }
    const proto =
      fieldEl instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    if (setter) {
      setter.call(fieldEl, val);
    } else {
      fieldEl.value = val;
    }

    fieldEl.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
    fieldEl.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
  };

  /**
   * Điền giá trị text và dispatch đầy đủ sự kiện focus, key, input, change, blur
   */
  const fillTextValue = (fieldEl, text) => {
    if (!fieldEl) return;
    fieldEl.focus();
    setNativeInputVal(fieldEl, text);
    fieldEl.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "a" }));
    fieldEl.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: "a" }));
    fieldEl.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
    fieldEl.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
    fieldEl.dispatchEvent(new FocusEvent("blur", { bubbles: true }));
  };

  /**
   * Kích hoạt click native với đầy đủ PointerEvent và MouseEvent
   */
  const triggerNativeClick = (target) => {
    if (!target) return;
    target.scrollIntoView({ block: "nearest" });
    const opts = { bubbles: true, cancelable: true, view: window };
    target.dispatchEvent(new PointerEvent("pointerdown", opts));
    target.dispatchEvent(new MouseEvent("mousedown", opts));
    target.dispatchEvent(new PointerEvent("pointerup", opts));
    target.dispatchEvent(new MouseEvent("mouseup", opts));
    target.click();
  };

  /**
   * Đóng modal nếu có popup mở đè
   */
  const closeModalIfOpen = async () => {
    const cancelBtn = Array.from(document.querySelectorAll("button")).find((btn) => {
      const text = btn.textContent.trim().toLowerCase();
      return text === "cancel" || text === "hủy" || btn.getAttribute("aria-label") === "Close";
    });
    if (cancelBtn) {
      cancelBtn.click();
      await sleep(200);
    }
  };

  /**
   * Kiểm tra xem văn bản gợi ý có phải thông báo lỗi / rác hay không
   */
  const isInvalidOptionText = (text) => {
    const lower = text.toLowerCase();
    return (
      lower.includes("no results") ||
      lower.includes("không có kết quả") ||
      lower.includes("can't find") ||
      lower.includes("không tìm thấy") ||
      lower.includes("add school") ||
      lower.includes("thêm trường") ||
      lower.includes("add it yourself") ||
      lower.includes("miss a course")
    );
  };

  /**
   * Chọn kết quả trong SearchSelect (Trường hoặc Môn học)
   * Có tùy chọn pickRandom để ngẫu nhiên chọn 1 trong số các kết quả hợp lệ đầu tiên.
   */
  const selectSearchSelectResult = async (queryInput, keyword, pickRandom = true) => {
    await closeModalIfOpen();
    queryInput.focus();
    queryInput.click();
    await sleep(150);

    setNativeInputVal(queryInput, keyword);

    for (let attempt = 0; attempt < 25; attempt++) {
      await sleep(200);
      await closeModalIfOpen();

      const menuId = queryInput.getAttribute("aria-controls");
      const menuEl =
        (menuId ? document.getElementById(menuId) : null) ||
        queryInput.closest("[class*='container']")?.querySelector("[role='listbox']");

      const scope = menuEl || document;
      const items = Array.from(
        scope.querySelectorAll(
          "li[class*='SearchSelectResults'], div[class*='SearchSelectResults'][role='option'], div[class*='SearchSelectResults'], [role='option']"
        )
      ).filter((el) => {
        const text = el.textContent.trim();
        return text.length > 2 && !isInvalidOptionText(text);
      });

      if (items.length > 0) {
        const targetIdx = pickRandom ? Math.floor(Math.random() * Math.min(items.length, 3)) : 0;
        const target = items[targetIdx].querySelector("[role='option']") || items[targetIdx];
        triggerNativeClick(target);
        await sleep(350);

        queryInput.dispatchEvent(
          new KeyboardEvent("keydown", { bubbles: true, key: "Enter", code: "Enter", keyCode: 13 })
        );
        queryInput.dispatchEvent(
          new KeyboardEvent("keyup", { bubbles: true, key: "Enter", code: "Enter", keyCode: 13 })
        );
        await sleep(300);
        return true;
      }

      queryInput.dispatchEvent(
        new KeyboardEvent("keydown", { bubbles: true, key: "ArrowDown", code: "ArrowDown", keyCode: 40 })
      );
      queryInput.dispatchEvent(
        new KeyboardEvent("keyup", { bubbles: true, key: "ArrowDown", code: "ArrowDown", keyCode: 40 })
      );
    }
    return false;
  };

  /**
   * Chọn phương án trong SelectResults (Category hoặc Academic Year)
   * Nhắm chính xác vào menu gắn liền với combobox đó.
   * Nếu preferredOptionIndex === null, sẽ chọn ngẫu nhiên một option hợp lệ.
   */
  const pickSelectOption = async (comboboxEl, preferredOptionIndex = null, isAcademicYear = false) => {
    if (!comboboxEl) return false;

    const curVal = comboboxEl.value?.trim() || "";
    if (curVal.length > 2 && !curVal.toLowerCase().includes("select")) {
      return true;
    }

    const wrapper = comboboxEl.closest("[class*='selectWrapper']") || comboboxEl.parentElement;
    const menuId = comboboxEl.getAttribute("aria-controls");
    const menuEl =
      (menuId ? document.getElementById(menuId) : null) ||
      wrapper?.querySelector("ul[role='listbox']");

    const actionBtn = wrapper?.querySelector("button") || comboboxEl;
    triggerNativeClick(actionBtn);
    await sleep(200);

    if (comboboxEl.getAttribute("aria-expanded") !== "true") {
      triggerNativeClick(comboboxEl);
      comboboxEl.dispatchEvent(
        new KeyboardEvent("keydown", { bubbles: true, key: "ArrowDown", code: "ArrowDown", keyCode: 40 })
      );
      await sleep(200);
    }

    for (let attempt = 0; attempt < 20; attempt++) {
      let items = [];
      if (menuEl) {
        items = Array.from(menuEl.querySelectorAll("li[role='option'], li, div[role='option']"));
      } else if (wrapper) {
        items = Array.from(wrapper.querySelectorAll("li[class*='SelectResults'], [role='option']"));
      }

      const validItems = items.filter((el) => {
        const text = el.textContent.trim();
        return text.length > 1 && !isInvalidOptionText(text);
      });

      if (validItems.length > 0) {
        let chosenItem;

        if (isAcademicYear) {
          const recentYears = validItems.filter((el) => /202[2-5]/i.test(el.textContent));
          chosenItem = recentYears.length > 0 ? getRandomItem(recentYears) : getRandomItem(validItems);
        } else if (preferredOptionIndex !== null) {
          const targetIdx = Math.min(preferredOptionIndex, validItems.length - 1);
          chosenItem = validItems[targetIdx];
        } else {
          chosenItem = getRandomItem(validItems);
        }

        const target = chosenItem.querySelector("[role='option']") || chosenItem;
        triggerNativeClick(target);
        await sleep(250);

        comboboxEl.dispatchEvent(
          new KeyboardEvent("keydown", { bubbles: true, key: "Enter", code: "Enter", keyCode: 13 })
        );
        await sleep(150);
        return true;
      }
      await sleep(100);
    }
    return false;
  };

  /**
   * Đảm bảo Trường học đã được chọn ngẫu nhiên trong danh sách các trường đại học tại VN
   */
  const ensureUniversity = async () => {
    const editBtns = Array.from(document.querySelectorAll("button")).filter(
      (b) =>
        b.textContent.includes("University / School:") &&
        (b.textContent.includes("- Edit") || b.textContent.includes("– Edit"))
    );
    if (editBtns.length > 0) {
      return true;
    }

    const univInput = document.querySelector(
      'input[placeholder*="Search university" i], input[placeholder*="school" i], input[placeholder*="trường" i]'
    );
    if (!univInput) return false;

    const randomUnivQuery = getRandomItem(UNIVERSITY_QUERIES);
    const ok = await selectSearchSelectResult(univInput, randomUnivQuery, true);
    await sleep(400);
    return ok;
  };

  /**
   * Đảm bảo Môn học (Course) đã được chọn ở Card 1 (ngẫu nhiên môn học) và bấm "Apply to all"
   */
  const ensureFirstCourseAndApplyAll = async () => {
    const firstFs = document.querySelector("fieldset");
    if (!firstFs) return false;

    const hasCourse = Array.from(firstFs.querySelectorAll("button")).some(
      (b) =>
        b.textContent.includes("Course:") &&
        (b.textContent.includes("- Edit") || b.textContent.includes("– Edit"))
    );

    if (!hasCourse) {
      const courseInput = firstFs.querySelector(
        'input[placeholder*="Search by course" i], input[placeholder*="course" i], input[id*="course" i]'
      );
      if (courseInput) {
        const randomCourseQuery = getRandomItem(COURSE_QUERIES);
        await selectSearchSelectResult(courseInput, randomCourseQuery, true);
        await sleep(400);
      }
    }

    const applyAllBtn = Array.from(document.querySelectorAll("button")).find((b) =>
      b.textContent.trim().toLowerCase().includes("apply to all")
    );
    if (applyAllBtn) {
      triggerNativeClick(applyAllBtn);
      await sleep(500);
    }

    return true;
  };

  /**
   * Tạo tiêu đề học thuật ngẫu nhiên, tự nhiên
   */
  const generateRandomAcademicTitle = (index) => {
    const template = getRandomItem(TITLE_TEMPLATES);
    const part = index + 1;
    return `${template} - Phần ${part}`;
  };

  /**
   * Điền chi tiết các trường của 1 Card:
   * 1. Category (Ngẫu nhiên phân loại: Bài giảng, Tóm tắt, Đề thi, Thực hành...)
   * 2. Title (Sau khi Category mount -> điền tiêu đề ngẫu nhiên sinh viên thật)
   * 3. Academic Year (Ngẫu nhiên năm học gần đây: 2023/2024, 2024/2025...)
   * 4. Description (Ngẫu nhiên đoạn mô tả học thuật tự nhiên)
   */
  const fillCardFields = async (card, index) => {
    const courseInput = card.querySelector('input[placeholder*="Search by course" i]');
    const hasCourse = Array.from(card.querySelectorAll("button")).some(
      (b) =>
        b.textContent.includes("Course:") &&
        (b.textContent.includes("- Edit") || b.textContent.includes("– Edit"))
    );
    if (courseInput && !hasCourse) {
      const randomCourseQuery = getRandomItem(COURSE_QUERIES);
      await selectSearchSelectResult(courseInput, randomCourseQuery, true);
      await sleep(350);
    }

    const catInput = card.querySelector('input[id*="category" i], input[placeholder*="category" i]');
    if (catInput) {
      await pickSelectOption(catInput, null, false);
      await sleep(350);
    }

    const titleInput = card.querySelector(
      'input[name*="title" i], input[id*="title" i], input[placeholder="Title" i]'
    );
    if (titleInput) {
      const cleanTitle = generateRandomAcademicTitle(index);
      fillTextValue(titleInput, cleanTitle);
      await sleep(150);
    }

    const yearInput = card.querySelector(
      'input[id*="academic-year" i], input[placeholder*="Please select" i]'
    );
    if (yearInput) {
      await pickSelectOption(yearInput, null, true);
      await sleep(200);
    }

    const descInput = card.querySelector(
      'textarea[name*="description" i], textarea[id*="description" i], textarea'
    );
    if (descInput && (!descInput.value || !descInput.value.trim())) {
      const randomDesc = getRandomItem(DESCRIPTIONS);
      fillTextValue(descInput, randomDesc);
      await sleep(150);
    }
  };

  /**
   * Điền toàn bộ các Card trên trang
   */
  const fillAllCards = async () => {
    const fieldsets = Array.from(document.querySelectorAll("fieldset"));

    if (fieldsets.length > 0) {
      await fillCardFields(fieldsets[0], 0);
    }

    for (let i = 1; i < fieldsets.length; i++) {
      const card = fieldsets[i];

      const copyBtn = Array.from(card.querySelectorAll("button")).find((b) =>
        b.textContent.trim().toLowerCase().includes("copy from previous")
      );
      if (copyBtn) {
        triggerNativeClick(copyBtn);
        await sleep(350);
      }

      await fillCardFields(card, i);
    }

    await sleep(500);
    for (let i = 0; i < fieldsets.length; i++) {
      const card = fieldsets[i];

      const catInput = card.querySelector('input[id*="category" i]');
      if (
        catInput &&
        (!catInput.value ||
          catInput.value.toLowerCase().includes("select") ||
          catInput.getAttribute("aria-invalid") === "true")
      ) {
        await pickSelectOption(catInput, null, false);
        await sleep(250);
      }

      const titleInput = card.querySelector('input[name*="title" i], input[id*="title" i]');
      if (
        titleInput &&
        (!titleInput.value ||
          titleInput.getAttribute("aria-invalid") === "true" ||
          titleInput.value.includes("docx_"))
      ) {
        const cleanTitle = generateRandomAcademicTitle(i);
        fillTextValue(titleInput, cleanTitle);
      }

      const yearInput = card.querySelector('input[id*="academic-year" i]');
      if (
        yearInput &&
        (!yearInput.value ||
          yearInput.value.toLowerCase().includes("select") ||
          yearInput.getAttribute("aria-invalid") === "true")
      ) {
        await pickSelectOption(yearInput, null, true);
      }

      const descInput = card.querySelector('textarea[name*="description" i], textarea');
      if (
        descInput &&
        (!descInput.value ||
          !descInput.value.trim() ||
          descInput.getAttribute("aria-invalid") === "true")
      ) {
        const randomDesc = getRandomItem(DESCRIPTIONS);
        fillTextValue(descInput, randomDesc);
      }
    }
  };

  /**
   * Bấm nút "Next" ở cuối trang
   */
  const clickNextButton = async () => {
    await sleep(600);
    const nextBtn = Array.from(document.querySelectorAll("button")).find((btn) => {
      const text = btn.textContent.trim().toLowerCase();
      return (
        !btn.disabled &&
        (text === "next" ||
          text === "tiếp tục" ||
          text === "continue" ||
          btn.getAttribute("type") === "submit")
      );
    });
    if (nextBtn) {
      triggerNativeClick(nextBtn);
      await sleep(500);
      return true;
    }
    return false;
  };

  /**
   * Hàm chạy chính
   */
  const fill = async () => {
    await ensureUniversity();
    await sleep(400);

    await ensureFirstCourseAndApplyAll();
    await sleep(500);

    await fillAllCards();
    await sleep(600);

    const nextClicked = await clickNextButton();

    return {
      filledCount: document.querySelectorAll("fieldset").length || 1,
      message: nextClicked
        ? "Đã điền thành công toàn bộ tài liệu (ngẫu nhiên hóa) và bấm Next!"
        : "Đã hoàn tất điền toàn bộ tài liệu (ngẫu nhiên hóa)!",
    };
  };

  window.FormFiller = { fill };
})();
