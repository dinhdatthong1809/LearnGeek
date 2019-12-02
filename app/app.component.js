export let AppComponent = {
    templateUrl: './app/app.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller($location, anchorSmoothScroll) {

    this.author = {
        id: 'PS08464',
        fullName: 'Đinh Đạt Thông',
        birthday: '18-09-1997',
        gender: true,
        photo: 'PS08464-DinhDatThong.jpg',
        mark: 10,
        address: '260/10, Bình Quới, Tp. Hồ Chí Minh, Việt Nam',
        phoneNumber: '(090) 6546 948',
        email: 'thongddps08464@fpt.edu.vn',
        socialLinks:
            [
                // facebook
                'https://www.facebook.com/dinh.dat.thong',
                // instagram
                'https://www.instagram.com/blueshootingstar1809',
                // github
                'https://github.com/BlueShootingStar',
            ]
    };

    this.leftRoutes = [
        { url: 'khoa-hoc', name: 'Khóa học' },
        { url: 'luyen-tap', name: 'Luyện tập' },
        { url: 'thao-luan', name: 'Thảo luận' },
        { url: 'hoi-dap', name: 'Hỏi đáp' },
    ];

    this.rightRoutes = [
        { url: 'xac-thuc.dang-nhap', name: 'Đăng nhập' },
    ];

    this.gotoAnchor = (x) => {
        let newHash = x;
        
        if ($location.hash() !== newHash) {
            $location.hash(x);
        } else {
            anchorSmoothScroll.scrollTo(x);
        }
    };
}
