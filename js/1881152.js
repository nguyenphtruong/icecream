/* Rút gọn thành một hàm */
function loadData(request, targetId, sourceId) {
	/* Đọc api */
	$.ajax({
		url: 'https://web1-api.herokuapp.com/api/' + request,
		/* Lấy mới dữ liệu */
		cache: false,
		/* Lấy thành công */
		success: function(data) {
			/* Tạo biến jsonData(context), chứa dữ liệu từ api đổ về */
			let jsonData = {
				data: data
			};
			/* Tạo biến target, lấy ra vung nội dung muốn đổ dữ liệu vào */
			let target = $(targetId);
			/* Tạo biến source, lấy nội dung vùng template */
			let source = $(sourceId).html();
			/* Tạo template cho handlebars */
			let template = Handlebars.compile(source);
			/* Truyền dữ liệu vào template, gắn nó lên vùng hiển thị (target) */
			$(target).html(template(jsonData));
		}
	});
}
