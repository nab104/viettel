export interface StoryCard {
  subheader: string;
  paragraph: string;
  image?: string;
}

export interface ProvinceContent {
  stories: StoryCard[];
}

export const provincesContent: Record<string, ProvinceContent> = {
  "lao-cai": {
    stories: [
      {
        subheader: "HỆ THỐNG CỬA HÀNG VIETTEL STORE",
        paragraph: "Chào mừng bạn đến với Viettel Store tại Lào Cai. Chúng tôi tự hào cung cấp những sản phẩm công nghệ mới nhất cùng dịch vụ chăm sóc khách hàng chuyên nghiệp, tận tâm nhất.",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "KHÁM PHÁ LÀO CAI",
        paragraph: "Viettel Store Lào Cai không chỉ là nơi mua sắm, mà còn là điểm dừng chân tin cậy của khách hàng vùng cao. Chúng tôi luôn nỗ lực mang công nghệ đến mọi bản làng.",
        image: "/images/story-map/province-preview.png"
      }
    ]
  },
  "tuyen-quang": {
    stories: [
      {
        subheader: "CHU THỊ BAN - TQG05",
        paragraph: "Mừng sinh nhật ViettelStore 20 tuổi và hành trình 6 năm làm việc tại ViettelStore, 6 năm không phải quá dài nhưng đủ để thay đổi rất nhiều, một chặng đường đầy thử thách nhưng vô cùng ý nghĩa đối với tôi, từ vị trí nhân viên đến quản lý tôi đã học được cách làm việc, cách đối diện với áp lực, cách không bỏ cuộc và cách hoàn thiện bản thân mỗi ngày. Cũng chính nơi đây đã cho tôi cơ hội được đứng trong hàng ngũ của Đảng là vinh dự lớn lao không phải ai cũng đạt được. Tôi luôn tự hào, biết ơn và luôn nỗ lực để xứng đáng.",
        image: "/images/story-map/province-preview.png"
      }
    ]
  },
  "an-giang": {
    stories: [
      {
        subheader: "TRẦN PHÚ LỢI - AGG01",
        paragraph: "Trong suốt 7 năm gắn bó với Viettel Store, tôi đã trải qua nhiều dấu mốc đáng nhớ – từ những ngày đầu còn nhiều bỡ ngỡ khi làm quen với quy trình, rèn luyện kỹ năng bán hàng, đến giai đoạn tự tin làm chủ công việc và tạo ra giá trị thiết thực cho khách hàng cũng như đơn vị. Mỗi khó khăn đều mang lại cho tôi những bài học quý giá, còn mỗi thành quả đạt được lại tiếp thêm động lực để tôi không ngừng hoàn thiện bản thân, nâng cao năng lực và tinh thần trách nhiệm. Với tôi, Viettel không chỉ là nơi làm việc mà còn là môi trường giúp tôi trưởng thành, hun đúc ý chí và xây dựng tư duy kỷ luật. Mang trong mình khát khao vươn xa, tôi luôn sẵn sàng bứt phá, chinh phục những mục tiêu cao hơn, đóng góp nhiều hơn cho tổ chức và khẳng định giá trị bản thân trên chặng đường sắp tới.",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "LƯƠNG THỊ THẾ VÂN - AGG02",
        paragraph: "Hành trình 7 năm làm việc tại VIETTEL STORE là một chặng đường không quá dài nhưng cũng không quá ngắn . Từ những ngày đầu học việc còn nhiều bỡ ngỡ, lúng túng khi bắt đầu làm quen với môi trường bán lẻ chuyên nghiệp. Nhưng chính sự tận tình của đồng nghiệp đã giúp tôi dần tự tin hơn. Mọi người luôn sẵn sàng hỗ trợ, phối hợp nhịp nhàng trong công việc và đặc biệt là luôn bên cạnh nhau trong những lúc khó khăn. Bên cạnh đó Tôi còn được gặp Người quản lý luôn thấu hiểu, lắng nghe và giúp đỡ, tạo nên một môi trường làm việc đầy sự sẻ chia. Viettel Store không chỉ mang đến công việc mà còn là nơi kiến thức vô tận, giúp tôi hoàn thiện bản thân mỗi ngày. Tôi biết ơn vì đã gặp được một môi trường mà ở đó, mọi người xem nhau như gia đình thứ hai. Tôi vẫn nhớ như in giai đoạn COVID-19 năm 2020 – một thời điểm vô cùng khó khăn khi các doanh nghiệp dần đóng cửa và rất nhiều người rơi cảnh khó khăn thất nghiệp. Thế nhưng Viettel Store vẫn kiên cường duy trì hoạt động, ổn định doanh thu và đặc biệt là luôn quan tâm, hỗ trợ nhân viên cũng như gia đình của họ. Điều đó khiến tôi càng thêm trân trọng và tự hào khi được là một phần của tập thể này. Nhân dịp kỷ niệm 20 năm, xin chúc Viettel Store ngày càng phát triển mạnh mẽ, tiếp tục giữ vững vị thế và nuôi dưỡng khát vọng mang đến một tương lai tốt đẹp hơn cho khách hàng !",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "NGUYỄN KHÃ ÁI - AGG03",
        paragraph: "1 năm làm việc tại Viettel Store đối với tôi là một hành trình đáng nhớ và đầy kỷ niệm. Tôi vẫn nhớ những ngày đầu tiên đầy bỡ ngỡ khi mới bước chân vào môi trường làm việc chuyên nghiệp. Mọi thứ đều mới mẻ: quy trình, sản phẩm, cách tư vấn khách hàng.....Có những lúc lúng túng, thậm chí mắc sai sót nhỏ, nhưng chính sự hỗ trợ tận tình từ các anh chị đã giúp tôi dần thích nghi và tự tin hơn mỗi ngày. Trải qua nhiều hoạt động để mang đến thông tin sản phẩm cho khách hàng, những ngày đầu tiên phát tờ rơi dưới cái nắng, đi dọc theo những tuyến đường đông đúc chỉ để giới thiệu những chuơng trình ưu đãi đến khách hàng. Công việc tưởng chừng đơn giản nhưng lại dạy tôi sự kiên trì và tinh thần không ngại khó. Những chuyến chạy roadshow rực rỡ sắc đỏ, di chuyển qua nhiều tuyến phố, không chỉ là hoạt động quảng bá mà còn là niềm tự hào khi được khoác lên mình màu áo Viettel. Đặc biệt, \"chuyến xe 5G Viettel\" là một trải nghiệm đáng nhớ - nơi tôi được trực tiếp giới thiệu công nghệ mới, tận mắt chứng kiến sự hào hứng của khách hàng khi tiếp cận những bước tiến hiện đại. Có những ngày làm việc không ngừng nghỉ, áp lực, mệt mỏi, nhưng đổi lại là sự trưởng thành từng ngày. Tôi học được cách làm việc nhóm, cách vượt qua giới hạn bản thân và giữ vững tinh thần trách nhiệm. Một năm không phải là quãng thời gian quá dài, nhưng đủ để tôi hiểu rằng Viettel Store không chỉ là nơi làm việc, mà còn là nơi nuôi dưỡng khát vọng. Và tôi tin rằng, với tinh thần ấy, hành trình \"20 năm vươn xa\" sẽ còn tiếp tục mạnh mẽ hơn nữa, với những con người luôn sẵn sàng cống hiến và bứt phá.",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "HUỲNH THỊ HUỲNH NHƯ - AGG05",
        paragraph: "Điều tuyệt vời nhất trong một tấm ảnh là: nó sẽ không bao giờ thay đổi, ngay cả khi mọi thứ bên trong tấm ảnh đó đã đổi thay! Mỗi 1 tấm ảnh tôi gửi lên đây là một câu chuyện, một cột mốc thời gian trong suốt 9 năm 9 tháng (+) bên ngôi nhà ViettelStore! Bổng dưng nhìn lại chặng đường mình đã đi, và WOW - như một cái chớp mắt. Ngày đó, tôi nộp CV vào xin việc vì tôi yêu thích cái màu áo đồng phục Viettel Store thời điểm đó. (Bộ gile màu vàng). Vẫn nhớ ngày bắt đầu là ngày khai trương siêu thị KGG20 (giờ là AGG03), lóng ngóng, vụng về, chưa thể hoà nhập với công việc kế toán khi ấy! Có những hôm vào ca từ 7h30 sáng, nhưng đến 23h đêm vẫn chưa về đến nhà; những ngày bắt đầu quá bỡ ngỡ, khi ấy tưởng chừng đã bỏ cuộc. Cám ơn cô bạn MNV: 205739 - cám ơn cô gái, một người đi trước, cũng đã đồng hành với tôi trong một khoảng thời gian sau đó, để tôi có thể thích nghi với ViettelStore cho đến hiện tại. Cũng đã đôi lần muốn dừng lại, nhưng cũng có quá nhiều lý do để gắn bó! Với ngần ấy thời gian, đi qua nhiều vị trí, trãi qua bao lần đổi thay của công ty; Bản thân được học hỏi qua các lớp đào tạo do công ty tổ chức, học hỏi từ những đàn anh, đàn chị đi trước, từ những cách làm hay của đồng nghiệp. Bản thân được gặp gỡ nhiều người, có thêm nhiều mối quan hệ, có thêm nhiều trãi nghiệm cho cuộc sống. Không chỉ là công việc, mà là sự nghiệp, là tuổi trẻ; không chỉ là đồng nghiệp, mà là gia đình. Con số 9 năm, 9 tháng chưa phải là dài, nhưng đủ để viết nên một phần thanh xuân. Tự hào vì thanh xuân là tháng ngày làm việc tại Viettelstore, và Tôi tự hào vì hành trình 20 năm ViettelStore có dấu chân của mình! Cám ơn ViettelStore đã cho tôi một ngôi nhà thứ hai, cám ơn những người thầy đã truyền kiến thức, truyền lửa cho tôi, những đồng nghiệp đã đồng hành cùng tôi! Nhân dịp ViettelStore kỷ niệm 20 năm, Chúc công ty ngày càng phát triển vững mạnh, không ngừng đổi mới, bứt phá, vươn xa theo những tầm cao mới, và luôn giữ vị thế hàng đầu! Kính chúc thủ trưởng và các đồng nghiệp thật nhiều sức khoẻ!",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "LÊ ĐẶNG BẢO PHƯƠNG - AGG04",
        paragraph: "Xin gửi lời tri ân chân thành đến Viettel Store trên hành trình 5 năm gắn bó – nơi đã cho em cơ hội học hỏi, phát triển và trưởng thành mỗi ngày. Cảm ơn công ty vì luôn tạo ra một môi trường làm việc chuyên nghiệp, năng động và đầy cảm hứng. Đặc biệt, Viettel Store đã mang đến cho em những anh chị em - những người đã luôn đồng hành, hỗ trợ và giúp đỡ mình trong công việc cũng như trong cuộc sống. Chính sự đoàn kết và sẻ chia ấy đã tạo nên một tập thể thật tuyệt vời. Nhân dịp sinh nhật công ty, chúc Viettel Store ngày càng phát triển vững mạnh, gặt hái nhiều thành công hơn nữa trên hành trình phía trước. Chúc cho tất cả chúng ta luôn giữ được nhiệt huyết, tinh thần tích cực và cùng nhau chinh phục những cột mốc mới!",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "VƯƠNG THỊ ÁNH TUYẾT - AGG03",
        paragraph: "“Viettel Store 20 năm - Khát vọng vươn xa”\nXin gửi lời tri ân chân thành đến Viettel Store trên hành trình 9 năm gắn bó – nơi đã cho em cơ hội học hỏi, phát triển và trưởng thành mỗi ngày. Cảm ơn công ty vì luôn tạo ra một môi trường làm việc chuyên nghiệp, năng động và đầy cảm hứng. Đặc biệt, Viettel Store đã mang đến cho em những anh chị em - những người đã luôn đồng hành, hỗ trợ và giúp đỡ mình trong công việc cũng như trong cuộc sống. Chính sự đoàn kết và sẻ chia ấy đã tạo nên một tập thể thật tuyệt vời. Nhân dịp sinh nhật công ty, chúc Viettel Store ngày càng phát triển vững mạnh, gặt hái nhiều thành công hơn nữa trên hành trình phía trước. Chúc cho tất cả chúng ta luôn giữ được nhiệt huyết, tinh thần tích cực và cùng nhau chinh phục những cột mốc mới!",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "NGUYỄN THỊ THUÝ KIỀU - AGG04",
        paragraph: "Xin gửi lời tri ân chân thành đến Viettel Store trên hành trình 3 năm gắn bó – nơi đã cho em cơ hội học hỏi, phát triển và trưởng thành mỗi ngày. Cảm ơn công ty vì luôn tạo ra một môi trường làm việc chuyên nghiệp, năng động và đầy cảm hứng. Đặc biệt, Viettel Store đã mang đến cho em những anh chị em - những người đã luôn đồng hành, hỗ trợ và giúp đỡ mình trong công việc cũng như trong cuộc sống. Chính sự đoàn kết và sẻ chia ấy đã tạo nên một tập thể thật tuyệt vời. Nhân dịp sinh nhật công ty, chúc Viettel Store ngày càng phát triển vững mạnh, gặt hái nhiều thành công hơn nữa trên hành trình phía trước. Chúc cho tất cả chúng ta luôn giữ được nhiệt huyết, tinh thần tích cực và cùng nhau chinh phục những cột mốc mới!",
        image: "/images/story-map/province-preview.png"
      },
      {
        subheader: "NGUYỄN THỊ NHƯ HUỲNH - AGG04",
        paragraph: "“Viettel Store 20 năm - Khát vọng vươn xa”\nXin gửi lời tri ân chân thành đến Viettel Store trên hành trình 9 năm gắn bó – nơi đã cho em cơ hội học hỏi, phát triển và trưởng thành mỗi ngày. Cảm ơn công ty vì luôn tạo ra một môi trường làm việc chuyên nghiệp, năng động và đầy cảm hứng. Đặc biệt, Viettel Store đã mang đến cho em những anh chị em - những người đã luôn đồng hành, hỗ trợ và giúp đỡ mình trong công việc cũng như trong cuộc sống. Chính sự đoàn kết và sẻ chia ấy đã tạo nên một tập thể thật tuyệt vời. Nhân dịp sinh nhật công ty, chúc Viettel Store ngày càng phát triển vững mạnh, gặt hái nhiều thành công hơn nữa trên hành trình phía trước. Chúc cho tất cả chúng ta luôn giữ được nhiệt huyết, tinh thần tích cực và cùng nhau chinh phục những cột mốc mới!",
        image: "/images/story-map/province-preview.png"
      }
    ]
  }
};
